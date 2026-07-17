import { Link } from 'react-router-dom'
import AppointmentRequest from '../components/Dashboard/AppointmentRequest'
import DoctorsCard from '../components/Dashboard/DoctorsCard'
import LatestAppointments from '../components/Dashboard/LatestAppointments'
import PatientRecord from '../components/Dashboard/PatientRecord'
import PatientReports from '../components/Dashboard/PatientReports'

const SparklineChart = ({ color = '#0d6efd', data = [0, 0, 0, 0, 0, 0, 0] }) => {
  const max = Math.max(...data, 1)
  const width = 80
  const height = 28
  const points = data.map((v, i) => `${(i / (data.length - 1)) * width},${height - (v / max) * height}`).join(' ')
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="d-block mx-auto">
      <polyline fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points={points} />
    </svg>
  )
}

const stats = [
  { label: 'Patients', value: '108', trend: '+20%', trendUp: true, icon: 'ti-user-exclamation', color: '#0d6efd', bg: 'primary', chartData: [10, 25, 15, 30, 20, 35, 28] },
  { label: 'Appointments', value: '658', trend: '-15%', trendUp: false, icon: 'ti-calendar-check', color: '#fd7e14', bg: 'orange', chartData: [30, 22, 28, 18, 25, 15, 20] },
  { label: 'Doctors', value: '565', trend: '+18%', trendUp: true, icon: 'ti-stethoscope', color: '#6f42c1', bg: 'purple', chartData: [15, 20, 25, 30, 28, 35, 40] },
  { label: 'Transactions', value: '$5,523.56', trend: '+12%', trendUp: true, icon: 'ti-moneybag', color: '#d63384', bg: 'pink', chartData: [20, 28, 22, 32, 26, 30, 35] },
]

const quickLinks = [
  { label: 'All Patient', icon: 'ti-users', path: '/patients', color: 'primary' },
  { label: 'Doctors', icon: 'ti-topology-bus', path: '/doctors', color: 'success' },
  { label: 'Labs Results', icon: 'ti-test-pipe-2', path: '/lab-results', color: 'warning' },
  { label: 'Prescriptions', icon: 'ti-prescription', path: '/pharmacy', color: 'danger' },
  { label: 'Visits', icon: 'ti-e-passport', path: '/visits', color: 'purple' },
  { label: 'Medical Results', icon: 'ti-file-description', path: '/medical-results', color: 'teal' },
]

const departmentData = [
  { label: 'Cardiology', color: 'info', percent: 35 },
  { label: 'Neurology', color: 'cyan', percent: 25 },
  { label: 'Dermatology', color: 'purple', percent: 18 },
  { label: 'Orthopedics', color: 'orange', percent: 12 },
  { label: 'Urology', color: 'warning', percent: 7 },
  { label: 'Radiology', color: 'indigo', percent: 3 },
]

const DonutChart = () => {
  const total = departmentData.reduce((s, d) => s + d.percent, 0)
  let cumulative = 0
  const segments = departmentData.map((d) => {
    const start = cumulative
    cumulative += (d.percent / total) * 360
    return { ...d, start, end: cumulative }
  })
  const r = 70
  const cx = 90
  const cy = 90
  const toRad = (deg) => (deg - 90) * (Math.PI / 180)
  const describeArc = (start, end) => {
    const sRad = toRad(start)
    const eRad = toRad(end)
    const x1 = cx + r * Math.cos(sRad)
    const y1 = cy + r * Math.sin(sRad)
    const x2 = cx + r * Math.cos(eRad)
    const y2 = cy + r * Math.sin(eRad)
    const large = end - start > 180 ? 1 : 0
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`
  }
  return (
    <svg width="180" height="180" viewBox="0 0 180 180">
      {segments.map((s) => (
        <path key={s.label} d={describeArc(s.start, s.end)} fill={`var(--bs-${s.color})`} opacity="0.85" />
      ))}
      <circle cx={cx} cy={cy} r="45" fill="white" />
    </svg>
  )
}

const Dashboard = () => {
  return (
    <div className="content">
      <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
        <div className="breadcrumb-arrow">
          <h4 className="mb-1">Welcome, Admin</h4>
          <p className="mb-0">Today you have 10 visits, <Link to="/visits" className="text-decoration-underline">View Details</Link></p>
        </div>
        <div className="reportrange-picker bg-white d-flex align-items-center border rounded px-3 py-2">
          <i className="ti ti-calendar text-body fs-14 me-1"></i>
          <span className="reportrange-picker-field">16 Apr 25 - 16 Apr 25</span>
        </div>
      </div>

      <div className="row g-3">
        {stats.map((stat) => (
          <div key={stat.label} className="col-xl-3 col-md-6 d-flex">
            <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center overflow-hidden">
                    <span className={`avatar bg-${stat.bg} rounded-circle flex-shrink-0`}>
                      <i className={`ti ${stat.icon} fs-20`}></i>
                    </span>
                    <div className="ms-2 overflow-hidden">
                      <p className="mb-0 text-muted small text-truncate">{stat.label}</p>
                      <h5 className="mb-0 fw-bold">{stat.value}</h5>
                    </div>
                  </div>
                  <span className={`badge badge-soft-${stat.trendUp ? 'success' : 'danger'}`}>{stat.trend}</span>
                </div>
                <SparklineChart color={stat.color} data={stat.chartData} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-3 mt-1">
        <div className="col-xl-6 d-flex">
          <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom">
              <h5 className="fw-bold mb-0">Appointment Request</h5>
              <Link to="/appointments" className="btn btn-sm btn-outline-primary flex-shrink-0">All Appointments</Link>
            </div>
            <div className="card-body p-1 py-2">
              <div className="table-responsive table-nowrap">
                <table className="table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="/patient-details" className="avatar me-2 flex-shrink-0">
                            <img src="/assets/img/avatars/avatar-23.jpg" alt="patient" className="rounded" width="36" height="36" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 fw-semibold"><Link to="/patient-details" className="text-decoration-none">Dominic Foster</Link></h6>
                            <div className="d-flex align-items-center gap-1">
                              <small className="d-inline-flex align-items-center text-body"><i className="ti ti-calendar me-1"></i>12 Aug 2025</small>
                              <i className="ti ti-minus-vertical text-light fs-14"></i>
                              <small className="d-inline-flex align-items-center text-body"><i className="ti ti-clock-hour-7 me-1"></i>11:35 PM</small>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-success bg-opacity-10 text-success">Urology</span></td>
                      <td className="text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <button className="btn btn-icon btn-light btn-sm"><i className="ti ti-xbox-x"></i></button>
                          <button className="btn btn-icon btn-light btn-sm"><i className="ti ti-check"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="/patient-details" className="avatar me-2 flex-shrink-0">
                            <img src="/assets/img/avatars/avatar-08.jpg" alt="patient" className="rounded" width="36" height="36" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 fw-semibold"><Link to="/patient-details" className="text-decoration-none">Charlotte Bennett</Link></h6>
                            <div className="d-flex align-items-center gap-1">
                              <small className="d-inline-flex align-items-center text-body"><i className="ti ti-calendar me-1"></i>06 Aug 2025</small>
                              <i className="ti ti-minus-vertical text-light fs-14"></i>
                              <small className="d-inline-flex align-items-center text-body"><i className="ti ti-clock-hour-7 me-1"></i>09:58 AM</small>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-info bg-opacity-10 text-info">Cardiology</span></td>
                      <td className="text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <button className="btn btn-icon btn-light btn-sm"><i className="ti ti-xbox-x"></i></button>
                          <button className="btn btn-icon btn-light btn-sm"><i className="ti ti-check"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="/patient-details" className="avatar me-2 flex-shrink-0">
                            <img src="/assets/img/avatars/avatar-21.jpg" alt="patient" className="rounded" width="36" height="36" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 fw-semibold"><Link to="/patient-details" className="text-decoration-none">Ethan Sullivan</Link></h6>
                            <div className="d-flex align-items-center gap-1">
                              <small className="d-inline-flex align-items-center text-body"><i className="ti ti-calendar me-1"></i>01 Aug 2025</small>
                              <i className="ti ti-minus-vertical text-light fs-14"></i>
                              <small className="d-inline-flex align-items-center text-body"><i className="ti ti-clock-hour-7 me-1"></i>12:10 PM</small>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-teal bg-opacity-10 text-teal">Dermatology</span></td>
                      <td className="text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <button className="btn btn-icon btn-light btn-sm"><i className="ti ti-xbox-x"></i></button>
                          <button className="btn btn-icon btn-light btn-sm"><i className="ti ti-check"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="/patient-details" className="avatar me-2 flex-shrink-0">
                            <img src="/assets/img/avatars/avatar-55.jpg" alt="patient" className="rounded" width="36" height="36" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 fw-semibold"><Link to="/patient-details" className="text-decoration-none">Brianna Thompson</Link></h6>
                            <div className="d-flex align-items-center gap-1">
                              <small className="d-inline-flex align-items-center text-body"><i className="ti ti-calendar me-1"></i>26 Jul 2025</small>
                              <i className="ti ti-minus-vertical text-light fs-14"></i>
                              <small className="d-inline-flex align-items-center text-body"><i className="ti ti-clock-hour-7 me-1"></i>08:20 AM</small>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-purple bg-opacity-10 text-purple">ENT Surgery</span></td>
                      <td className="text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <button className="btn btn-icon btn-light btn-sm"><i className="ti ti-xbox-x"></i></button>
                          <button className="btn btn-icon btn-light btn-sm"><i className="ti ti-check"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="/patient-details" className="avatar me-2 flex-shrink-0">
                            <img src="/assets/img/avatars/avatar-28.jpg" alt="patient" className="rounded" width="36" height="36" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 fw-semibold"><Link to="/patient-details" className="text-decoration-none">Braun Tucker</Link></h6>
                            <div className="d-flex align-items-center gap-1">
                              <small className="d-inline-flex align-items-center text-body"><i className="ti ti-calendar me-1"></i>23 Jul 2025</small>
                              <i className="ti ti-minus-vertical text-light fs-14"></i>
                              <small className="d-inline-flex align-items-center text-body"><i className="ti ti-clock-hour-7 me-1"></i>10:30 AM</small>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-info bg-opacity-10 text-info">Radiology</span></td>
                      <td className="text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <button className="btn btn-icon btn-light btn-sm"><i className="ti ti-xbox-x"></i></button>
                          <button className="btn btn-icon btn-light btn-sm"><i className="ti ti-check"></i></button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 d-flex">
          <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between border-bottom">
              <h5 className="fw-bold mb-0">Patients Statistics</h5>
              <Link to="/all-patients-list" className="btn btn-sm btn-outline-primary">View All</Link>
            </div>
            <div className="card-body pb-0">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <h6 className="fs-14 fw-semibold mb-0">Total No of Patients : 480</h6>
                <div className="d-flex align-items-center gap-3">
                  <small className="text-dark"><i className="ti ti-point-filled me-1 text-primary"></i>New Patients</small>
                  <small className="text-dark"><i className="ti ti-point-filled me-1 text-primary" style={{ opacity: 0.3 }}></i>Old Patients</small>
                </div>
              </div>
              <svg viewBox="0 0 400 160" className="w-100" style={{ maxHeight: 160 }}>
                <defs>
                  <linearGradient id="newGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--bs-primary)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="var(--bs-primary)" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="oldGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--bs-primary)" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="var(--bs-primary)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  fill="none" stroke="var(--bs-primary)" strokeWidth="2"
                  points="0,120 40,100 80,110 120,85 160,95 200,60 240,75 280,45 320,55 360,30 400,40"
                />
                <polyline
                  fill="none" stroke="var(--bs-primary)" strokeWidth="2" strokeDasharray="4,3" opacity="0.4"
                  points="0,130 40,125 80,115 120,105 160,110 200,90 240,95 280,75 320,80 360,60 400,65"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-1">
        {quickLinks.map((link) => (
          <div key={link.label} className="col-xl-2 col-md-4 col-sm-6">
            <Link to={link.path} className="card border-0 shadow-sm border-0 shadow-sm text-decoration-none h-100">
              <div className="card-body text-center d-flex flex-column align-items-center justify-content-center py-3">
                <span className={`bg-${link.color} bg-opacity-10 rounded d-flex p-3 justify-content-center mb-2`} style={{ width: 56, height: 56 }}>
                  <i className={`ti ${link.icon} fs-24 text-${link.color}`}></i>
                </span>
                <h6 className="fs-14 fw-semibold text-truncate mb-0 text-dark">{link.label}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="row g-3 mt-1">
        <div className="col-xl-4 d-flex">
          <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom">
              <h5 className="mb-0">Patient Reports</h5>
              <Link to="/lab-results" className="btn btn-sm btn-outline-primary flex-shrink-0">View All</Link>
            </div>
            <div className="card-body pb-1">
              {[
                { name: 'David Marshall', test: 'Hemoglobin', icon: 'ti-droplet', color: 'primary' },
                { name: 'Thomas McLean', test: 'X Ray', icon: 'ti-mood-neutral', color: 'success' },
                { name: 'Greta Kinney', test: 'MRI Scan', icon: 'ti-rainbow', color: 'danger' },
                { name: 'Larry Wilburn', test: 'Blood Test', icon: 'ti-rosette', color: 'purple' },
                { name: 'Reyan Verol', test: 'CT Scan', icon: 'ti-radio', color: 'teal' },
              ].map((report) => (
                <div key={report.name} className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className={`avatar me-2 badge-soft-${report.color} rounded-circle d-flex align-items-center justify-content-center`} style={{ width: 40, height: 40 }}>
                      <i className={`ti ${report.icon} fs-20`}></i>
                    </span>
                    <div>
                      <h6 className="fs-14 fw-semibold text-truncate mb-1"><Link to="/patient-details" className="text-decoration-none">{report.name}</Link></h6>
                      <small className="text-muted">{report.test}</small>
                    </div>
                  </div>
                  <button className="btn btn-icon btn-light btn-sm"><i className="ti ti-download"></i></button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 d-flex">
          <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom">
              <h5 className="mb-0">Patient Visits</h5>
              <Link to="/visits" className="btn btn-sm btn-outline-primary flex-shrink-0">View All</Link>
            </div>
            <div className="card-body">
              <div className="text-center mb-3">
                <DonutChart />
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center">
                  <span className="avatar bg-primary rounded-circle flex-shrink-0"><i className="ti ti-gender-male fs-20"></i></span>
                  <div className="ms-2">
                    <h6 className="mb-1 fs-14 fw-semibold">Male</h6>
                    <small className="text-muted"><span className="text-success">-15%</span> Since Last Week</small>
                  </div>
                </div>
                <h6 className="mb-0 fw-bold">69%</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-0">
                <div className="d-flex align-items-center">
                  <span className="avatar bg-purple rounded-circle flex-shrink-0"><i className="ti ti-gender-female fs-20"></i></span>
                  <div className="ms-2">
                    <h6 className="mb-1 fs-14 fw-semibold">Female</h6>
                    <small className="text-muted"><span className="text-success">-15%</span> Since Last Week</small>
                  </div>
                </div>
                <h6 className="mb-0 fw-bold">56%</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 d-flex">
          <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom">
              <h5 className="mb-0">Doctors</h5>
              <Link to="/doctors" className="btn btn-sm btn-outline-primary flex-shrink-0">View All</Link>
            </div>
            <div className="card-body">
              {[
                { name: 'Dr. William Harrison', specialty: 'Cardiology', img: 'doctor-01.jpg', available: true },
                { name: 'Dr. Victoria Adams', specialty: 'Urology', img: 'doctor-11.jpg', available: false },
                { name: 'Dr. Jonathan Bennett', specialty: 'Radiology', img: 'doctor-06.jpg', available: true },
                { name: 'Dr. Natalie Brooks', specialty: 'ENT Surgery', img: 'doctor-07.jpg', available: true },
                { name: 'Dr. Samuel Reed', specialty: 'Dermatology', img: 'doctor-12.jpg', available: true },
              ].map((doc) => (
                <div key={doc.name} className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <Link to="/doctor-details" className="avatar flex-shrink-0">
                      <img src={`/assets/img/doctors/${doc.img}`} className="rounded" alt="doctor" width="40" height="40" />
                    </Link>
                    <div className="ms-2">
                      <h6 className="fw-semibold fs-14 text-truncate mb-1"><Link to="/doctor-details" className="text-decoration-none">{doc.name}</Link></h6>
                      <small className="text-muted">{doc.specialty}</small>
                    </div>
                  </div>
                  <span className={`badge ${doc.available ? 'bg-success bg-opacity-10 text-success' : 'bg-danger bg-opacity-10 text-danger'}`}>
                    {doc.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-1">
        <div className="col-xl-5 d-flex">
          <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between border-bottom">
              <h5 className="mb-0">Top Departments</h5>
              <button className="btn btn-sm btn-outline-primary">View All</button>
            </div>
            <div className="card-body">
              <div className="row row-gap-3 align-items-center mb-4">
                <div className="col-sm-6">
                  <div className="position-relative text-center">
                    <svg width="160" height="160" viewBox="0 0 160 160" className="mx-auto">
                      {departmentData.map((d, i) => {
                        const dashArray = (d.percent / 100) * 377
                        const dashOffset = departmentData.slice(0, i).reduce((s, x) => s + (x.percent / 100) * 377, 0) - 377 * 0.25
                        return (
                          <circle key={d.label} cx="80" cy="80" r="60" fill="none"
                            stroke={`var(--bs-${d.color})`} strokeWidth="20"
                            strokeDasharray={`${dashArray} ${377 - dashArray}`}
                            strokeDashoffset={dashOffset}
                            transform="rotate(-90 80 80)"
                            opacity="0.85"
                          />
                        )
                      })}
                      <text x="80" y="72" textAnchor="middle" fontSize="13" fill="currentColor" opacity="0.7">Appointments</text>
                      <text x="80" y="92" textAnchor="middle" fontSize="22" fontWeight="bold" fill="currentColor">3656</text>
                    </svg>
                  </div>
                </div>
                <div className="col-sm-6">
                  {departmentData.map((d) => (
                    <small key={d.label} className="d-flex align-items-center text-dark mb-2">
                      <i className={`ti ti-circle-filled text-${d.color} fs-13 me-1`}></i>{d.label}
                    </small>
                  ))}
                </div>
              </div>
              <div className="border rounded p-1">
                <div className="row g-0">
                  <div className="col-6 p-2 border-end text-center">
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

        <div className="col-xl-7 d-flex">
          <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
            <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom">
              <h5 className="mb-0">Patient Record</h5>
              <Link to="/medical-results" className="btn btn-sm btn-outline-primary flex-shrink-0">View All</Link>
            </div>
            <div className="card-body">
              <div className="table-responsive table-nowrap">
                <table className="table border mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Patient Name</th>
                      <th>Diagnosis</th>
                      <th>Department</th>
                      <th>Last Visit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'James Carter', gender: 'Male', dept: 'Cardiology', date: '17 Jun 2025', color: 'info' },
                      { name: 'Emily Davis', gender: 'Female', dept: 'Urology', date: '10 Jun 2025', color: 'success' },
                      { name: 'Michael John', gender: 'Male', dept: 'Radiology', date: '22 May 2025', color: 'info' },
                      { name: 'Olivia Miller', gender: 'Female', dept: 'ENT Surgery', date: '15 May 2025', color: 'purple' },
                      { name: 'David Smith', gender: 'Male', dept: 'Dermatology', date: '30 Apr 2025', color: 'teal' },
                    ].map((r) => (
                      <tr key={r.name}>
                        <td><h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details" className="text-decoration-none">{r.name}</Link></h6></td>
                        <td>{r.gender}</td>
                        <td><span className={`badge bg-${r.color} bg-opacity-10 text-${r.color}`}>{r.dept}</span></td>
                        <td>{r.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm mt-3">
        <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom">
          <h5 className="mb-0">Latest Appointments</h5>
          <Link to="/appointments" className="btn btn-sm btn-outline-primary flex-shrink-0">View All</Link>
        </div>
        <div className="card-body">
          <div className="table-responsive table-nowrap">
            <table className="table border mb-0">
              <thead className="table-light">
                <tr>
                  <th>Patient ID</th>
                  <th>Patient Name</th>
                  <th>Session Type</th>
                  <th>Doctor Name</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '#PT0025', patient: 'James Carter', session: 'Visit', doctor: 'Dr. Andrew Clark', doctorImg: 'doctor-01.jpg', avatar: 'avatar-31.jpg', date: '17 Jun 2025, 09:00 AM to 10:00 AM', status: 'Inprogress', statusColor: 'purple' },
                  { id: '#PT0024', patient: 'Emily Davis', session: 'Consultation', doctor: 'Dr. Katherine Brooks', doctorImg: 'doctor-07.jpg', avatar: 'avatar-54.jpg', date: '10 Jun 2025, 10:30 AM to 11:30 AM', status: 'Inprogress', statusColor: 'purple' },
                  { id: '#PT0023', patient: 'Michael Johnson', session: 'Visit', doctor: 'Dr. Benjamin Harris', doctorImg: 'doctor-12.jpg', avatar: 'avatar-38.jpg', date: '22 May 2025, 01:15 PM to 02:15 PM', status: 'Completed', statusColor: 'success' },
                  { id: '#PT0022', patient: 'Olivia Miller', session: 'Consultation', doctor: 'Dr. Laura Mitchell', doctorImg: 'doctor-03.jpg', avatar: 'avatar-43.jpg', date: '15 May 2025, 11:30 AM to 12:30 PM', status: 'Completed', statusColor: 'success' },
                  { id: '#PT0021', patient: 'David Smith', session: 'Consultation', doctor: 'Dr. Christopher Lewis', doctorImg: 'doctor-15.jpg', avatar: 'avatar-41.jpg', date: '30 Apr 2025, 12:20 PM to 01:20 PM', status: 'Completed', statusColor: 'success' },
                ].map((apt) => (
                  <tr key={apt.id}>
                    <td><Link to="#/" className="link-muted text-decoration-none">{apt.id}</Link></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={`/assets/img/avatars/${apt.avatar}`} alt="patient" className="rounded avatar-xs me-2" width="28" height="28" />
                        <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details" className="text-decoration-none">{apt.patient}</Link></h6>
                      </div>
                    </td>
                    <td>{apt.session}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={`/assets/img/doctors/${apt.doctorImg}`} alt="doctor" className="rounded avatar-xs me-2" width="28" height="28" />
                        <h6 className="fs-14 mb-0 fw-medium"><Link to="/doctor-details" className="text-decoration-none">{apt.doctor}</Link></h6>
                      </div>
                    </td>
                    <td>{apt.date}</td>
                    <td><span className={`badge bg-${apt.statusColor} bg-opacity-10 text-${apt.statusColor}`}>{apt.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="footer text-center mt-4 pt-3 border-top">
        <p className="mb-0 text-muted small">&copy; <Link to="#/" className="link-primary text-decoration-none">Dreams EMR</Link> - All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Dashboard
