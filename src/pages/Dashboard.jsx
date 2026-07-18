import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

/* ═══════════════════════════════════════════════════════════════════════
   Hooks
   ═══════════════════════════════════════════════════════════════════════ */

/** Animate a number from 0 → target, returning the current display value */
const useCountUp = (target, duration = 1200, start = true) => {
  const num = useMemo(() => {
    const cleaned = String(target).replace(/[^0-9.]/g, '')
    return parseFloat(cleaned) || 0
  }, [target])
  const prefix = useMemo(() => String(target).match(/^[^0-9]*/)?.[0] || '', [target])
  const hasDecimals = useMemo(() => String(target).includes('.'), [target])
  const [val, setVal] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!start) return
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const elapsed = now - t0
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(eased * num)
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setDone(true)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [num, duration, start])

  const formatted = useMemo(() => {
    const rounded = hasDecimals ? val.toFixed(2) : Math.round(val)
    const parts = String(rounded).split('.')
    parts[0] = Number(parts[0]).toLocaleString()
    return prefix + parts.join('.')
  }, [val, hasDecimals, prefix])

  return { value: formatted, done }
}

/** IntersectionObserver hook — returns [ref, isVisible] */
const useInView = (opts = {}) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15, ...opts }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

/* ═══════════════════════════════════════════════════════════════════════
   Animated Charts
   ═══════════════════════════════════════════════════════════════════════ */

/* ─── Smooth Catmull-Rom → Cubic Bezier helper ──────────────────────── */
const catmullRomToBezier = (pts, tension = 0.35) => {
  if (pts.length < 2) return ''
  let d = `M${pts[0].x},${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[Math.min(i + 2, pts.length - 1)]
    const cp1x = p1.x + (p2.x - p0.x) * tension
    const cp1y = p1.y + (p2.y - p0.y) * tension
    const cp2x = p2.x - (p3.x - p1.x) * tension
    const cp2y = p2.y - (p3.y - p1.y) * tension
    d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`
  }
  return d
}

/* ─── Interactive Area Sparkline with smooth curves & hover tooltip ─── */
const AreaSparkline = ({ color = '#0d6efd', data = [0, 0, 0, 0, 0, 0, 0], delay = 0, tooltipLabel = '', onHover, onLeave }) => {
  const svgRef = useRef(null)
  const [hoverIdx, setHoverIdx] = useState(-1)
  const W = 300, H = 60, PAD_TOP = 6, PAD_BOT = 4
  const max = Math.max(...data, 1), min = Math.min(...data)
  const range = max - min || 1
  const pts = data.map((v, i) => ({
    x: (i / (data.length - 1)) * W,
    y: H - ((v - min) / range) * (H - PAD_TOP - PAD_BOT) - PAD_BOT,
    val: v,
  }))

  // Smooth bezier path
  const linePath = catmullRomToBezier(pts)
  // Area path: go along curve, then straight along bottom
  const areaPath = linePath + ` L${W},${H} L0,${H} Z`

  const gradId = `ag-${color.replace('#', '')}-${delay}`

  // Approximate path length for draw animation
  let pathLen = 0
  for (let i = 1; i < pts.length; i++) {
    pathLen += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y)
  }
  // Multiply by ~1.3 to account for curves being longer than straight segments
  pathLen *= 1.3

  const handleMouseMove = useCallback((e) => {
    const svgEl = svgRef.current
    if (!svgEl) return
    const rect = svgEl.getBoundingClientRect()
    const mouseX = ((e.clientX - rect.left) / rect.width) * W
    // Find closest data point
    let closest = 0, closestDist = Infinity
    pts.forEach((p, i) => {
      const dist = Math.abs(p.x - mouseX)
      if (dist < closestDist) { closestDist = dist; closest = i }
    })
    setHoverIdx(closest)
    if (onHover) {
      const ptRect = svgEl.getBoundingClientRect()
      const screenX = ptRect.left + (pts[closest].x / W) * ptRect.width
      const screenY = ptRect.top + (pts[closest].y / H) * ptRect.height
      onHover({ idx: closest, value: pts[closest].val, screenX, screenY, label: tooltipLabel })
    }
  }, [pts, onHover, tooltipLabel])

  const handleMouseLeave = useCallback(() => {
    setHoverIdx(-1)
    if (onLeave) onLeave()
  }, [onLeave])

  return (
    <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
      style={{ width: '100%', height: 60, display: 'block', marginTop: 'auto', cursor: 'crosshair' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.30" />
          <stop offset="100%" stopColor={color} stopOpacity="0.03" />
        </linearGradient>
      </defs>
      {/* Gradient fill area */}
      <path className="sparkline-area" d={areaPath} fill={`url(#${gradId})`}
        style={{ animationDelay: `${delay + 0.6}s` }} />
      {/* Smooth curve line */}
      <path className="sparkline-line" d={linePath} fill="none"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={pathLen} strokeDashoffset={pathLen}
        style={{ '--line-length': pathLen, animationDelay: `${delay}s` }} />
      {/* Hover guideline */}
      {hoverIdx >= 0 && (
        <line x1={pts[hoverIdx].x} y1={0} x2={pts[hoverIdx].x} y2={H}
          stroke={color} strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
      )}
      {/* Hover dot */}
      {hoverIdx >= 0 && (
        <>
          <circle cx={pts[hoverIdx].x} cy={pts[hoverIdx].y} r="5"
            fill="white" stroke={color} strokeWidth="2.5" />
          <circle cx={pts[hoverIdx].x} cy={pts[hoverIdx].y} r="8"
            fill={color} opacity="0.15" />
        </>
      )}
      {/* Invisible wider hit areas for each data point */}
      {pts.map((p, i) => (
        <rect key={i} x={p.x - W / data.length / 2} y={0}
          width={W / data.length} height={H}
          fill="transparent" />
      ))}
    </svg>
  )
}

/* ─── Animated Grouped Bar Chart ─────────────────────────────────────── */
const PatientBarChart = () => {
  const [ref, visible] = useInView()
  const [tooltip, setTooltip] = useState(null)
  const svgRef = useRef(null)

  const labels = ['25 May', '26 May', '27 May', '28 May', '29 May', '30 May', '31 May']
  const newPts = [22, 35, 70, 45, 55, 30, 40]
  const oldPts = [40, 50, 100, 70, 65, 60, 65]
  const W = 420, H = 160, barW = 18, gap = 10
  const groupW = barW * 2 + gap
  const sectionW = W / labels.length
  const maxV = 120

  const handleBarHover = useCallback((e, label, newVal, oldVal) => {
    const svgEl = svgRef.current
    if (!svgEl) return
    const rect = svgEl.getBoundingClientRect()
    const clientX = e.clientX - rect.left
    const clientY = e.clientY - rect.top
    setTooltip({ x: clientX, y: clientY - 10, label, newVal, oldVal })
  }, [])

  return (
    <div ref={ref} className="position-relative">
      <svg ref={svgRef} viewBox={`0 0 ${W} ${H + 30}`} style={{ width: '100%', height: 200 }}
        onMouseLeave={() => setTooltip(null)}>
        {[0, 40, 80, 120].map(v => {
          const y = H - (v / maxV) * H
          return (
            <g key={v}>
              <line x1="30" y1={y} x2={W} y2={y} stroke="#f0f0f0" strokeWidth="1" />
              <text x="24" y={y + 4} fontSize="9" fill="#aaa" textAnchor="end">{v}</text>
            </g>
          )
        })}
        {labels.map((label, i) => {
          const cx = 30 + i * sectionW + sectionW / 2
          const x1 = cx - groupW / 2
          const x2 = x1 + barW + gap
          const h1 = (oldPts[i] / maxV) * H
          const h2 = (newPts[i] / maxV) * H
          return (
            <g key={label}
              onMouseMove={(e) => handleBarHover(e, label, newPts[i], oldPts[i])}
              onMouseLeave={() => setTooltip(null)}
              style={{ cursor: 'pointer' }}>
              {/* hover background */}
              <rect x={cx - sectionW / 2} y={0} width={sectionW} height={H} fill="transparent" />
              {/* Old patients bar */}
              <rect
                x={x1} y={H - h1} width={barW} height={h1} rx="3"
                fill="#1565c0" opacity="0.25"
                className={visible ? 'bar-animated' : ''}
                style={{ animationDelay: `${i * 0.08}s` }}
              />
              {/* New patients bar */}
              <rect
                x={x2} y={H - h2} width={barW} height={h2} rx="3"
                fill="#1565c0" opacity="0.85"
                className={visible ? 'bar-animated' : ''}
                style={{ animationDelay: `${i * 0.08 + 0.04}s` }}
              />
              <text x={cx} y={H + 18} fontSize="9" fill="#999" textAnchor="middle">{label}</text>
            </g>
          )
        })}
      </svg>
      {tooltip && (
        <div className="chart-tooltip show"
          style={{ left: tooltip.x, top: tooltip.y, transform: 'translate(-50%, -100%)' }}>
          <strong>{tooltip.label}</strong><br />
          New: {tooltip.newVal} · Old: {tooltip.oldVal}
        </div>
      )}
    </div>
  )
}

/* ─── Animated Radial Dotted Progress ───────────────────────────────── */
const RadialProgress = ({ value = 90 }) => {
  const [ref, visible] = useInView()
  const r = 70, cx = 90, cy = 90
  const totalDots = 48
  const activeDots = Math.round((value / 100) * totalDots)
  const { value: animatedValue } = useCountUp(value, 1400, visible)

  const dots = Array.from({ length: totalDots }, (_, i) => {
    const angle = (i / totalDots) * 2 * Math.PI - Math.PI / 2
    const x = cx + r * Math.cos(angle)
    const y = cy + r * Math.sin(angle)
    const active = i < activeDots
    const hue = active ? (200 + (i / activeDots) * 80) : 0
    const color = active ? `hsl(${hue}, 80%, 55%)` : '#e8e8f0'
    return { x, y, color, active }
  })

  return (
    <svg ref={ref} width="180" height="180" viewBox="0 0 180 180" className="d-block mx-auto">
      {dots.map((d, i) => (
        <circle
          key={i} cx={d.x} cy={d.y} fill={d.color}
          className={visible ? 'radial-dot' : ''}
          r={visible ? undefined : 0}
          style={{
            animationDelay: visible ? `${i * 0.025}s` : '0s',
          }}
        />
      ))}
      <text x={cx} y={cy - 12} textAnchor="middle" fontSize="11" fill="#999">Total Patients</text>
      <text x={cx} y={cy + 16} textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1a1a2e">
        {visible ? animatedValue : 0}%
      </text>
    </svg>
  )
}

/* ─── Animated Donut Chart ──────────────────────────────────────────── */
const departmentData = [
  { label: 'Cardiology',  color: '#2196f3', percent: 35 },
  { label: 'Neurology',   color: '#212121', percent: 25 },
  { label: 'Dermatology', color: '#7c3aed', percent: 18 },
  { label: 'Orthopedics', color: '#ef4444', percent: 12 },
  { label: 'Urology',     color: '#f59e0b', percent: 7  },
  { label: 'Radiology',   color: '#1565c0', percent: 3  },
]

const DonutChart = () => {
  const [ref, visible] = useInView()
  const total = departmentData.reduce((s, d) => s + d.percent, 0)
  const r = 60, cx = 80, cy = 80, strokeW = 22
  const circumference = 2 * Math.PI * r
  let cumOffset = 0
  const { value: animatedCount } = useCountUp(3656, 1600, visible)

  return (
    <svg ref={ref} width="160" height="160" viewBox="0 0 160 160">
      {departmentData.map((d, i) => {
        const dash = (d.percent / total) * circumference
        const offset = cumOffset
        cumOffset += dash
        const targetOffset = circumference - offset
        return (
          <circle
            key={d.label}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={d.color}
            strokeWidth={strokeW}
            strokeDasharray={`${dash} ${circumference - dash}`}
            strokeDashoffset={visible ? targetOffset : circumference}
            transform={`rotate(-90 ${cx} ${cy})`}
            className={visible ? 'donut-segment' : ''}
            style={{
              '--circ': circumference,
              '--target-offset': targetOffset,
              animationDelay: `${i * 0.12}s`,
            }}
          />
        )
      })}
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize="10" fill="#888">Appointments</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1a1a2e">
        {visible ? animatedCount : '0'}
      </text>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════ */

const stats = [
  { label: 'Patients',     value: '108',       trend: '+20%', trendUp: true,  icon: 'ti-user-exclamation', color: '#2196f3', chartData: [10, 22, 14, 28, 18, 32, 26], tooltipLabel: 'Total Patients' },
  { label: 'Appointments', value: '658',       trend: '-15%', trendUp: false, icon: 'ti-calendar-check',   color: '#fd7e14', chartData: [32, 24, 30, 20, 26, 16, 22], tooltipLabel: 'Total Appointments' },
  { label: 'Doctors',      value: '565',       trend: '+18%', trendUp: true,  icon: 'ti-stethoscope',      color: '#7c3aed', chartData: [16, 22, 26, 32, 30, 38, 42], tooltipLabel: 'Total Doctors' },
  { label: 'Transactions', value: '$5,523.56', trend: '+12%', trendUp: true,  icon: 'ti-moneybag',         color: '#e91e8c', chartData: [22, 30, 24, 34, 28, 32, 38], tooltipLabel: 'Total Revenue' },
]

const quickLinks = [
  { label: 'All Patient',     icon: 'ti-users',            path: '/patients',        color: '#2196f3', bg: 'rgba(33,150,243,0.08)'  },
  { label: 'Doctors',         icon: 'ti-topology-bus',     path: '/doctors',         color: '#22c55e', bg: 'rgba(34,197,94,0.08)'   },
  { label: 'Labs Results',    icon: 'ti-test-pipe-2',      path: '/lab-results',     color: '#f59e0b', bg: 'rgba(245,158,11,0.08)'  },
  { label: 'Prescriptions',   icon: 'ti-prescription',     path: '/pharmacy',        color: '#ef4444', bg: 'rgba(239,68,68,0.08)'   },
  { label: 'Visits',          icon: 'ti-e-passport',       path: '/visits',          color: '#7c3aed', bg: 'rgba(124,58,237,0.08)'  },
  { label: 'Medical Records', icon: 'ti-file-description', path: '/medical-results', color: '#14b8a6', bg: 'rgba(20,184,166,0.08)'  },
]

const appointmentRequests = [
  { name: 'Dominic Foster',    date: '12 Aug 2025', time: '11:35 PM', dept: 'Urology',     deptColor: '#22c55e', img: 'avatar-23.jpg' },
  { name: 'Charlotte Bennett', date: '06 Aug 2025', time: '09:58 AM', dept: 'Cardiology',  deptColor: '#06b6d4', img: 'avatar-08.jpg' },
  { name: 'Ethan Sullivan',    date: '01 Aug 2025', time: '12:10 PM', dept: 'Dermatology', deptColor: '#14b8a6', img: 'avatar-21.jpg' },
  { name: 'Brianna Thompson',  date: '26 Jul 2025', time: '08:20 AM', dept: 'ENT Surgery', deptColor: '#a855f7', img: 'avatar-55.jpg' },
  { name: 'Braun Tucker',      date: '23 Jul 2025', time: '10:30 AM', dept: 'Radiology',   deptColor: '#06b6d4', img: 'avatar-28.jpg' },
]

const patientReports = [
  { name: 'David Marshall', test: 'Hemoglobin', icon: 'ti-droplet',      iconBg: 'rgba(33,150,243,0.10)',  iconColor: '#2196f3' },
  { name: 'Thomas McLean',  test: 'X Ray',      icon: 'ti-mood-neutral', iconBg: 'rgba(34,197,94,0.10)',   iconColor: '#22c55e' },
  { name: 'Greta Kinney',   test: 'MRI Scan',   icon: 'ti-rainbow',      iconBg: 'rgba(239,68,68,0.10)',   iconColor: '#ef4444' },
  { name: 'Larry Wilburn',  test: 'Blood Test', icon: 'ti-rosette',      iconBg: 'rgba(124,58,237,0.10)',  iconColor: '#7c3aed' },
  { name: 'Reyan Verol',    test: 'CT Scan',    icon: 'ti-radio',        iconBg: 'rgba(20,184,166,0.10)',  iconColor: '#14b8a6' },
]

const doctorsList = [
  { name: 'Dr. William Harrison', specialty: 'Cardiology',  img: 'doctor-01.jpg', available: true  },
  { name: 'Dr. Victoria Adams',   specialty: 'Urology',     img: 'doctor-11.jpg', available: false },
  { name: 'Dr. Jonathan Bennett', specialty: 'Radiology',   img: 'doctor-06.jpg', available: true  },
  { name: 'Dr. Natalie Brooks',   specialty: 'ENT Surgery', img: 'doctor-07.jpg', available: true  },
  { name: 'Dr. Samuel Reed',      specialty: 'Dermatology', img: 'doctor-12.jpg', available: true  },
]

const patientRecords = [
  { name: 'James Carter',  gender: 'Male',   dept: 'Cardiology',  date: '17 Jun 2025', deptColor: '#06b6d4', deptBg: 'rgba(6,182,212,0.10)'  },
  { name: 'Emily Davis',   gender: 'Female', dept: 'Urology',     date: '10 Jun 2025', deptColor: '#22c55e', deptBg: 'rgba(34,197,94,0.10)'  },
  { name: 'Michael John',  gender: 'Male',   dept: 'Radiology',   date: '22 May 2025', deptColor: '#06b6d4', deptBg: 'rgba(6,182,212,0.10)'  },
  { name: 'Olivia Miller', gender: 'Female', dept: 'ENT Surgery', date: '15 May 2025', deptColor: '#a855f7', deptBg: 'rgba(168,85,247,0.10)' },
  { name: 'David Smith',   gender: 'Male',   dept: 'Dermatology', date: '30 Apr 2025', deptColor: '#14b8a6', deptBg: 'rgba(20,184,166,0.10)' },
]

const latestAppointments = [
  { id: '#PT0025', patient: 'James Carter',    session: 'Visit',        doctor: 'Dr. Andrew Clark',      doctorImg: 'doctor-01.jpg', avatar: 'avatar-31.jpg', date: '17 Jun 2025, 09:00 AM to 10:00 AM', status: 'Inprogress', statusColor: '#7c3aed', statusBg: 'rgba(124,58,237,0.10)'  },
  { id: '#PT0024', patient: 'Emily Davis',     session: 'Consultation', doctor: 'Dr. Katherine Brooks',  doctorImg: 'doctor-07.jpg', avatar: 'avatar-54.jpg', date: '10 Jun 2025, 10:30 AM to 11:30 AM', status: 'Inprogress', statusColor: '#7c3aed', statusBg: 'rgba(124,58,237,0.10)'  },
  { id: '#PT0023', patient: 'Michael Johnson', session: 'Visit',        doctor: 'Dr. Benjamin Harris',   doctorImg: 'doctor-12.jpg', avatar: 'avatar-38.jpg', date: '22 May 2025, 01:15 PM to 02:15 PM', status: 'Completed',  statusColor: '#22c55e', statusBg: 'rgba(34,197,94,0.10)'   },
  { id: '#PT0022', patient: 'Olivia Miller',   session: 'Consultation', doctor: 'Dr. Laura Mitchell',    doctorImg: 'doctor-03.jpg', avatar: 'avatar-43.jpg', date: '15 May 2025, 11:30 AM to 12:30 PM', status: 'Completed',  statusColor: '#22c55e', statusBg: 'rgba(34,197,94,0.10)'   },
  { id: '#PT0021', patient: 'David Smith',     session: 'Consultation', doctor: 'Dr. Christopher Lewis', doctorImg: 'doctor-15.jpg', avatar: 'avatar-41.jpg', date: '30 Apr 2025, 12:20 PM to 01:20 PM', status: 'Completed',  statusColor: '#22c55e', statusBg: 'rgba(34,197,94,0.10)'   },
]

/* ═══════════════════════════════════════════════════════════════════════
   Animated Stat Card with interactive chart tooltip
   ═══════════════════════════════════════════════════════════════════════ */
const StatCard = ({ stat, index }) => {
  const { value: animValue, done } = useCountUp(stat.value, 1200, true)
  const cardRef = useRef(null)
  const [tip, setTip] = useState(null)

  const handleHover = useCallback((info) => {
    const card = cardRef.current
    if (!card) return
    const cardRect = card.getBoundingClientRect()
    setTip({
      x: info.screenX - cardRect.left,
      y: info.screenY - cardRect.top - 10,
      text: `${info.label}: ${info.value}`,
    })
  }, [])

  const handleLeave = useCallback(() => setTip(null), [])

  return (
    <div className={`col-xl-3 col-md-6 d-flex dash-animate dash-delay-${index + 1}`}>
      <div ref={cardRef} className="card border-0 shadow-sm flex-fill dash-card-hover position-relative" style={{ borderRadius: 12, overflow: 'hidden' }}>
        <div className="card-body pb-0" style={{ padding: '20px 20px 8px' }}>
          <div className="d-flex align-items-start justify-content-between mb-3">
            <div className="d-flex align-items-center gap-3">
              <span
                className="stat-icon rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: 44, height: 44, background: `${stat.color}20` }}
              >
                <i className={`ti ${stat.icon} fs-20`} style={{ color: stat.color }} />
              </span>
              <div>
                <p className="mb-0 text-muted fs-13">{stat.label}</p>
                <h4 className={`mb-0 fw-bold ${done ? 'counter-done' : ''}`}>{animValue}</h4>
              </div>
            </div>
            <span
              className="badge fs-12 fw-semibold"
              style={{
                background: stat.trendUp ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)',
                color: stat.trendUp ? '#16a34a' : '#dc2626',
                borderRadius: 20, padding: '4px 10px',
              }}
            >
              {stat.trend}
            </span>
          </div>
        </div>
        <AreaSparkline
          color={stat.color}
          data={stat.chartData}
          delay={index * 0.15}
          tooltipLabel={stat.tooltipLabel}
          onHover={handleHover}
          onLeave={handleLeave}
        />
        {/* Tooltip bubble */}
        {tip && (
          <div className="chart-tooltip show"
            style={{
              position: 'absolute', left: tip.x, top: tip.y,
              transform: 'translate(-50%, -100%)',
              pointerEvents: 'none',
            }}>
            {tip.text}
          </div>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   RevealSection – wraps a row and fades it in on scroll
   ═══════════════════════════════════════════════════════════════════════ */
const RevealSection = ({ children, className = '', delay = 0 }) => {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`dash-reveal ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   Dashboard
   ═══════════════════════════════════════════════════════════════════════ */
const Dashboard = () => {
  return (
    <div className="content">

      {/* ── Page Header ── */}
      <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap dash-animate">
        <div>
          <h4 className="mb-1 fw-bold">Welcome, Admin</h4>
          <p className="mb-0 text-muted">
            Today you have 10 visits,{' '}
            <Link to="/visits" className="text-primary text-decoration-underline">View Details</Link>
          </p>
        </div>
        <div className="d-flex align-items-center gap-2 border rounded px-3 py-2 bg-white" style={{ cursor: 'pointer' }}>
          <i className="ti ti-calendar text-muted fs-14" />
          <span className="fs-13 text-dark">18 Jul 26 - 18 Jul 26</span>
        </div>
      </div>

      {/* ── Row 1: Stat Cards (animated counters + sparklines) ── */}
      <div className="row g-3">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>

      {/* ── Row 2: Appointment Request + Patients Statistics ── */}
      <RevealSection className="row g-3 mt-1">

        {/* Appointment Request */}
        <div className="col-xl-6 d-flex">
          <div className="card border-0 shadow-sm flex-fill dash-card-hover" style={{ borderRadius: 12 }}>
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom py-3 px-4">
              <h5 className="fw-bold mb-0">Appointment Request</h5>
              <Link to="/appointments" className="btn btn-sm btn-outline-primary">All Appointments</Link>
            </div>
            <div className="card-body px-3 py-0">
              <table className="table table-borderless mb-0">
                <tbody>
                  {appointmentRequests.map((req, idx) => (
                    <tr key={req.name} className="dash-row-animate"
                      style={{ borderBottom: '1px solid #f5f5f5', animationDelay: `${0.3 + idx * 0.06}s` }}>
                      <td className="ps-1 py-3">
                        <div className="d-flex align-items-center gap-3">
                          <Link to="/patient-details" className="flex-shrink-0">
                            <img src={`/assets/img/avatars/${req.img}`} alt={req.name} className="rounded"
                              width="40" height="40" style={{ objectFit: 'cover' }} />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 fw-semibold">
                              <Link to="/patient-details" className="text-dark text-decoration-none">{req.name}</Link>
                            </h6>
                            <div className="d-flex align-items-center gap-2">
                              <small className="text-muted d-flex align-items-center gap-1">
                                <i className="ti ti-calendar fs-12" />{req.date}
                              </small>
                              <span className="text-muted">·</span>
                              <small className="text-muted d-flex align-items-center gap-1">
                                <i className="ti ti-clock-hour-7 fs-12" />{req.time}
                              </small>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center align-middle py-3">
                        <span className="badge fs-12"
                          style={{ background: `${req.deptColor}15`, color: req.deptColor, borderRadius: 20, padding: '4px 12px' }}>
                          {req.dept}
                        </span>
                      </td>
                      <td className="text-end align-middle pe-1 py-3">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <button className="btn btn-icon btn-light btn-sm rounded-circle"><i className="ti ti-xbox-x" /></button>
                          <button className="btn btn-icon btn-light btn-sm rounded-circle"><i className="ti ti-check" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Patients Statistics (animated bar chart) */}
        <div className="col-xl-6 d-flex">
          <div className="card border-0 shadow-sm flex-fill dash-card-hover" style={{ borderRadius: 12 }}>
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between border-bottom py-3 px-4">
              <h5 className="fw-bold mb-0">Patients Statistics</h5>
              <Link to="/all-patients-list" className="btn btn-sm btn-outline-primary">View All</Link>
            </div>
            <div className="card-body px-4 pb-2">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
                <h6 className="fs-14 fw-semibold mb-0">Total No of Patients : 480</h6>
                <div className="d-flex align-items-center gap-3">
                  <small className="d-flex align-items-center gap-1">
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', opacity: 0.85, display: 'inline-block' }} />
                    <span className="text-dark">New Patients</span>
                  </small>
                  <small className="d-flex align-items-center gap-1">
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', opacity: 0.25, display: 'inline-block' }} />
                    <span className="text-dark">Old Patients</span>
                  </small>
                </div>
              </div>
              <PatientBarChart />
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Row 3: Quick Links ── */}
      <RevealSection className="row g-3 mt-1" delay={0.05}>
        {quickLinks.map((link, idx) => (
          <div key={link.label} className="col-xl-2 col-md-4 col-sm-6">
            <Link to={link.path}
              className="card border-0 shadow-sm text-decoration-none h-100 dash-quick-link"
              style={{ borderRadius: 12 }}>
              <div className="card-body text-center d-flex flex-column align-items-center justify-content-center py-4 gap-2">
                <span className="ql-icon d-flex align-items-center justify-content-center rounded"
                  style={{ width: 56, height: 56, background: link.bg }}>
                  <i className={`ti ${link.icon}`} style={{ color: link.color, fontSize: 28 }} />
                </span>
                <h6 className="fs-14 fw-semibold mb-0" style={{ color: '#1a1a2e' }}>{link.label}</h6>
              </div>
            </Link>
          </div>
        ))}
      </RevealSection>

      {/* ── Row 4: Patient Reports + Patient Visits + Doctors ── */}
      <RevealSection className="row g-3 mt-1" delay={0.05}>

        {/* Patient Reports */}
        <div className="col-xl-4 d-flex">
          <div className="card border-0 shadow-sm flex-fill dash-card-hover" style={{ borderRadius: 12 }}>
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom py-3 px-4">
              <h5 className="fw-bold mb-0">Patient Reports</h5>
              <Link to="/lab-results" className="btn btn-sm btn-outline-primary">View All</Link>
            </div>
            <div className="card-body px-4 py-3">
              {patientReports.map((report, idx) => (
                <div key={report.name} className="d-flex align-items-center justify-content-between"
                  style={{ marginBottom: idx < patientReports.length - 1 ? 20 : 0 }}>
                  <div className="d-flex align-items-center gap-3">
                    <span className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: 42, height: 42, background: report.iconBg }}>
                      <i className={`ti ${report.icon} fs-18`} style={{ color: report.iconColor }} />
                    </span>
                    <div>
                      <h6 className="fs-14 fw-semibold mb-1">
                        <Link to="/patient-details" className="text-dark text-decoration-none">{report.name}</Link>
                      </h6>
                      <small className="text-muted">{report.test}</small>
                    </div>
                  </div>
                  <button className="btn btn-light btn-sm d-flex align-items-center justify-content-center dl-btn"
                    style={{ width: 32, height: 32, borderRadius: 8 }}>
                    <i className="ti ti-download fs-14" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patient Visits (animated radial progress) */}
        <div className="col-xl-4 col-md-6 d-flex">
          <div className="card border-0 shadow-sm flex-fill dash-card-hover" style={{ borderRadius: 12 }}>
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom py-3 px-4">
              <h5 className="fw-bold mb-0">Patient Visits</h5>
              <Link to="/visits" className="btn btn-sm btn-outline-primary">View All</Link>
            </div>
            <div className="card-body d-flex flex-column px-4 py-3">
              <div className="text-center mb-3">
                <RadialProgress value={90} />
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center gap-3">
                  <span className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 38, height: 38, background: '#2196f3', flexShrink: 0 }}>
                    <i className="ti ti-gender-male fs-18 text-white" />
                  </span>
                  <div>
                    <h6 className="mb-0 fs-14 fw-semibold">Male</h6>
                    <small style={{ color: '#22c55e' }}>-15% Since Last Week</small>
                  </div>
                </div>
                <h6 className="mb-0 fw-bold fs-16">69%</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <span className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 38, height: 38, background: '#7c3aed', flexShrink: 0 }}>
                    <i className="ti ti-gender-female fs-18 text-white" />
                  </span>
                  <div>
                    <h6 className="mb-0 fs-14 fw-semibold">Female</h6>
                    <small style={{ color: '#22c55e' }}>-15% Since Last Week</small>
                  </div>
                </div>
                <h6 className="mb-0 fw-bold fs-16">56%</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors */}
        <div className="col-xl-4 col-md-6 d-flex">
          <div className="card border-0 shadow-sm flex-fill dash-card-hover" style={{ borderRadius: 12 }}>
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom py-3 px-4">
              <h5 className="fw-bold mb-0">Doctors</h5>
              <Link to="/doctors" className="btn btn-sm btn-outline-primary">View All</Link>
            </div>
            <div className="card-body px-4 py-3">
              {doctorsList.map((doc, idx) => (
                <div key={doc.name} className="d-flex align-items-center justify-content-between"
                  style={{ marginBottom: idx < doctorsList.length - 1 ? 20 : 0 }}>
                  <div className="d-flex align-items-center gap-3">
                    <Link to="/doctor-details" className="flex-shrink-0">
                      <img src={`/assets/img/doctors/${doc.img}`} className="rounded" alt={doc.name}
                        width="40" height="40" style={{ objectFit: 'cover' }} />
                    </Link>
                    <div>
                      <h6 className="fw-semibold fs-14 mb-1">
                        <Link to="/doctor-details" className="text-dark text-decoration-none">{doc.name}</Link>
                      </h6>
                      <small className="text-muted">{doc.specialty}</small>
                    </div>
                  </div>
                  <span className="badge fs-11"
                    style={{
                      background: doc.available ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)',
                      color: doc.available ? '#16a34a' : '#dc2626',
                      borderRadius: 20, padding: '4px 12px',
                    }}>
                    {doc.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Row 5: Top Departments + Patient Record ── */}
      <RevealSection className="row g-3 mt-1" delay={0.05}>

        {/* Top Departments (animated donut) */}
        <div className="col-xl-5 d-flex">
          <div className="card border-0 shadow-sm flex-fill dash-card-hover" style={{ borderRadius: 12 }}>
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between border-bottom py-3 px-4">
              <h5 className="fw-bold mb-0">Top Departments</h5>
              <Link to="/doctors" className="btn btn-sm btn-outline-primary">View All</Link>
            </div>
            <div className="card-body px-4 py-3">
              <div className="row align-items-center mb-4">
                <div className="col-6 d-flex justify-content-center">
                  <DonutChart />
                </div>
                <div className="col-6">
                  {departmentData.map((d) => (
                    <div key={d.label} className="d-flex align-items-center gap-2 mb-2">
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: d.color, display: 'inline-block', flexShrink: 0 }} />
                      <small className="text-dark">{d.label}</small>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border rounded p-2">
                <div className="row g-0">
                  <div className="col-6 p-2 text-center border-end">
                    <h5 className="mb-1 fw-bold">$2,512.32</h5>
                    <small className="text-muted">Revenue Generated</small>
                  </div>
                  <div className="col-6 p-2 text-center">
                    <h5 className="mb-1 fw-bold">3,125+</h5>
                    <small className="text-muted">Appointments last month</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Record */}
        <div className="col-xl-7 d-flex">
          <div className="card border-0 shadow-sm flex-fill dash-card-hover" style={{ borderRadius: 12 }}>
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom py-3 px-4">
              <h5 className="fw-bold mb-0">Patient Record</h5>
              <Link to="/medical-results" className="btn btn-sm btn-outline-primary">View All</Link>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{ fontSize: 14 }}>
                  <thead style={{ background: '#f8fafc' }}>
                    <tr>
                      <th className="ps-4 py-3 fw-semibold text-muted border-0" style={{ fontSize: 13 }}>Patient Name</th>
                      <th className="py-3 fw-semibold text-muted border-0" style={{ fontSize: 13 }}>Diagnosis</th>
                      <th className="py-3 fw-semibold text-muted border-0" style={{ fontSize: 13 }}>Department</th>
                      <th className="pe-4 py-3 fw-semibold text-muted border-0" style={{ fontSize: 13 }}>Last Visit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientRecords.map((r) => (
                      <tr key={r.name}>
                        <td className="ps-4 py-3">
                          <h6 className="fs-14 mb-0 fw-medium">
                            <Link to="/patient-details" className="text-dark text-decoration-none">{r.name}</Link>
                          </h6>
                        </td>
                        <td className="py-3 text-muted">{r.gender}</td>
                        <td className="py-3">
                          <span className="badge fs-12" style={{ background: r.deptBg, color: r.deptColor, borderRadius: 20, padding: '4px 12px' }}>
                            {r.dept}
                          </span>
                        </td>
                        <td className="pe-4 py-3 text-muted">{r.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Row 6: Latest Appointments ── */}
      <RevealSection className="mt-3" delay={0.05}>
        <div className="card border-0 shadow-sm dash-card-hover" style={{ borderRadius: 12 }}>
          <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom py-3 px-4">
            <h5 className="fw-bold mb-0">Latest Appointments</h5>
            <Link to="/appointments" className="btn btn-sm btn-outline-primary">View All</Link>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0" style={{ fontSize: 14 }}>
                <thead style={{ background: '#f8fafc' }}>
                  <tr>
                    <th className="ps-4 py-3 fw-semibold text-muted border-0" style={{ fontSize: 13 }}>Patient ID</th>
                    <th className="py-3 fw-semibold text-muted border-0" style={{ fontSize: 13 }}>Patient Name</th>
                    <th className="py-3 fw-semibold text-muted border-0" style={{ fontSize: 13 }}>Session Type</th>
                    <th className="py-3 fw-semibold text-muted border-0" style={{ fontSize: 13 }}>Doctor Name</th>
                    <th className="py-3 fw-semibold text-muted border-0" style={{ fontSize: 13 }}>Date &amp; Time</th>
                    <th className="pe-4 py-3 fw-semibold text-muted border-0" style={{ fontSize: 13 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {latestAppointments.map((apt, idx) => (
                    <tr key={apt.id} className="dash-row-animate" style={{ animationDelay: `${0.2 + idx * 0.06}s` }}>
                      <td className="ps-4 py-3">
                        <Link to="#/" className="text-primary text-decoration-none fw-medium">{apt.id}</Link>
                      </td>
                      <td className="py-3">
                        <div className="d-flex align-items-center gap-2">
                          <img src={`/assets/img/avatars/${apt.avatar}`} alt={apt.patient}
                            width="30" height="30" className="rounded-circle" style={{ objectFit: 'cover' }} />
                          <h6 className="fs-14 mb-0 fw-medium">
                            <Link to="/patient-details" className="text-dark text-decoration-none">{apt.patient}</Link>
                          </h6>
                        </div>
                      </td>
                      <td className="py-3 text-muted">{apt.session}</td>
                      <td className="py-3">
                        <div className="d-flex align-items-center gap-2">
                          <img src={`/assets/img/doctors/${apt.doctorImg}`} alt={apt.doctor}
                            width="30" height="30" className="rounded-circle" style={{ objectFit: 'cover' }} />
                          <h6 className="fs-14 mb-0 fw-medium">
                            <Link to="/doctor-details" className="text-dark text-decoration-none">{apt.doctor}</Link>
                          </h6>
                        </div>
                      </td>
                      <td className="py-3 text-muted">{apt.date}</td>
                      <td className="pe-4 py-3">
                        <span className={`badge fs-12 ${apt.status === 'Inprogress' ? 'badge-pulse' : ''}`}
                          style={{ background: apt.statusBg, color: apt.statusColor, borderRadius: 20, padding: '4px 12px' }}>
                          {apt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Footer ── */}
      <footer className="text-center mt-4 pt-3 border-top pb-2">
        <p className="mb-0 text-muted small">
          2026 &copy; <Link to="#/" className="text-primary text-decoration-none">Dreams EMR</Link> - All Rights Reserved.
        </p>
      </footer>

    </div>
  )
}

export default Dashboard
