import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/css/Landing.css';

const Landing = () => {
  const [activeAppTab, setActiveAppTab] = useState('patient');
  const [activeNotificationSim, setActiveNotificationSim] = useState('tablet');

  const notificationPayloads = {
    vaccination: {
      title: "Vaccination Scheduled",
      appPush: "Your child's next vaccine (MMR Booster) is due in 5 days.",
      whatsapp: "Hello! Quick reminder: MMR Booster vaccination is scheduled for Baby Aarav on 25 Jun 2025.",
      sms: "MMR Booster vaccination due for Baby Aarav in 5 days. Check EMR app for details.",
      email: "Subject: Vaccination Reminder - Baby Aarav\nDear Parent, this is a reminder that the MMR Booster is due in 5 days. Please confirm your appointment."
    },
    tablet: {
      title: "Tablet Reminder (Prescription OCR)",
      appPush: "Time for evening Medication: Metformin 500mg (1 tablet).",
      whatsapp: "Prescription Alert: Time for Metformin 500mg. Please confirm if taken.",
      sms: "Medication Alert: Take Metformin 500mg now.",
      email: "Subject: Daily Medication Reminder\nThis is your automated reminder to take Metformin 500mg at 08:00 PM."
    },
    appointment: {
      title: "Doctor Appointment Status",
      appPush: "Dr. Rao's consultation is scheduled in 1 hour.",
      whatsapp: "Appointment Update: Your video consult with Dr. Rao is scheduled at 4:00 PM today.",
      sms: "Consultation alert: Dr. Rao appt in 1hr. Launch app to join video call.",
      email: "Subject: Appointment Details - Dr. Rao\nYour consultation is confirmed for today at 4:00 PM. Click here to join the virtual clinic lobby."
    },
    vitals: {
      title: "Abnormal Vital Alert",
      appPush: "Alert: Mother's BP reading is elevated (145/95 mmHg) today.",
      whatsapp: "Vitals Warning: Elevated blood pressure detected (145/95 mmHg) for Mother. Consider calling Dr. Rao.",
      sms: "BP Warning: Mother's reading is 145/95 mmHg. Take precautions.",
      email: "Subject: Vital Signs Threshold Exceeded\nWe noticed a BP spike of 145/95 mmHg for Mother. Recommended action: log a follow-up or check in with care team."
    }
  };

  const currentSim = notificationPayloads[activeNotificationSim];

  return (
    <div className="landing-body min-vh-100 pb-5">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg landing-nav sticky-top py-3">
        <div className="container">
          <Link to="/" className="navbar-brand text-white d-flex align-items-center gap-2 landing-nav-brand">
            <span className="bg-success text-white p-2 rounded-3 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
              <i className="ti ti-heart-handshake fs-4"></i>
            </span>
            FamilyHealth
          </Link>
          <button className="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#landingNav">
            <i className="ti ti-menu-2 fs-3"></i>
          </button>
          <div className="collapse navbar-collapse" id="landingNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item"><a className="nav-link text-white opacity-75 hover-opacity-100 fw-semibold" href="#concept">Timeline Wedge</a></li>
              <li className="nav-item"><a className="nav-link text-white opacity-75 hover-opacity-100 fw-semibold" href="#apps">Dual Apps</a></li>
              <li className="nav-item"><a className="nav-link text-white opacity-75 hover-opacity-100 fw-semibold" href="#engine">Reminder Engine</a></li>
              <li className="nav-item"><a className="nav-link text-white opacity-75 hover-opacity-100 fw-semibold" href="#roadmap">Roadmap</a></li>
              <li className="nav-item"><a className="nav-link text-white opacity-75 hover-opacity-100 fw-semibold" href="#qa">Launch Q&A</a></li>
            </ul>
            <Link to="/dashboard" className="btn btn-outline-white d-inline-flex align-items-center gap-2 px-4 py-2">
              Go to Dashboard <i className="ti ti-arrow-right"></i>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="landing-hero text-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <span className="badge landing-hero-badge px-3 py-2 rounded-pill mb-4 text-uppercase fw-bold fs-12 tracking-wide">
                Product Feature Blueprint
              </span>
              <h1 className="landing-hero-title mb-4">
                Family Health <span className="landing-hero-accent">Super App</span>
              </h1>
              <p className="lead text-muted mx-auto mb-5 fs-20" style={{ maxWidth: '700px' }}>
                "One app for your family's complete health journey." A consolidated, phased feature architecture connecting patients and doctors via a single, automatically-populated health timeline.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="#apps" className="btn btn-coral d-flex align-items-center gap-2 px-4 py-3 shadow-lg">
                  <i className="ti ti-apps fs-5"></i> Explore Dual Apps
                </a>
                <a href="#engine" className="btn btn-outline-white d-flex align-items-center gap-2 px-4 py-3">
                  Interactive Simulator <i className="ti ti-device-mobile fs-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section id="concept" className="container py-5 my-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="fw-bolder mb-4 text-white" style={{ fontSize: '2.5rem' }}>
              From Vaccination Reminders to a Health Ecosystem
            </h2>
            <p className="text-muted fs-16 mb-4">
              We don't want to build just another appointment-booking or medicine-delivery app. The wedge of our product is the <strong>Family Health Timeline</strong>—one chronological, single-source record of vaccinations, visits, labs, medicines, and vitals.
            </p>
            <div className="privacy-ribbon p-4 mb-4 rounded-4">
              <h5 className="text-success fw-bold mb-2">No Ad-Based Revenue</h5>
              <p className="text-muted mb-0 fs-14">
                A family health record is too sensitive to monetize with advertising. Subscriptions and transaction commissions keep incentives strictly aligned with actual family health outcomes.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="glass-card p-4">
              <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
                <h5 className="fw-bold mb-0 text-white d-flex align-items-center gap-2">
                  <i className="ti ti-timeline text-success"></i> Simulated Family Health Timeline
                </h5>
                <span className="badge bg-success bg-opacity-20 text-success rounded-pill px-3 py-1">Chronological</span>
              </div>
              <div className="timeline-track">
                <div className="position-relative mb-4">
                  <div className="timeline-dot"></div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="fw-bold text-white mb-1">Dr. Rao follow-up consult</h6>
                      <p className="text-muted fs-13 mb-0">Upcoming Video Call • Tue 4:00 PM</p>
                    </div>
                    <span className="badge bg-primary text-white fs-11">Appointment</span>
                  </div>
                </div>
                <div className="position-relative mb-4">
                  <div className="timeline-dot bg-warning" style={{ boxShadow: '0 0 0 6px rgba(255,193,7,0.2)' }}></div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="fw-bold text-white mb-1">Blood pressure reading elevated</h6>
                      <p className="text-muted fs-13 mb-0">Logged 145/95 mmHg for Mother</p>
                    </div>
                    <span className="badge bg-warning text-dark fs-11">Vitals Alert</span>
                  </div>
                </div>
                <div className="position-relative mb-4">
                  <div className="timeline-dot bg-success" style={{ boxShadow: '0 0 0 6px rgba(16,185,129,0.2)' }}></div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="fw-bold text-white mb-1">Prescription OCR Sync Completed</h6>
                      <p className="text-muted fs-13 mb-0">Metformin 500mg auto-added to daily reminders</p>
                    </div>
                    <span className="badge bg-success text-white fs-11">OCR Scan</span>
                  </div>
                </div>
                <div className="position-relative">
                  <div className="timeline-dot bg-info" style={{ boxShadow: '0 0 0 6px rgba(13,202,240,0.2)' }}></div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="fw-bold text-white mb-1">MMR Booster vaccination due</h6>
                      <p className="text-muted fs-13 mb-0">For Baby Aarav • in 5 days</p>
                    </div>
                    <span className="badge bg-info text-white fs-11">Vaccine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Apps Switcher */}
      <section id="apps" className="bg-gradient-light py-5 border-top border-bottom border-opacity-10" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Two Apps, One Family Record</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Why two apps? Doctors onboard patients directly (send download link) and patients self-register. Focus is kept separate: a clinical console for doctors, a family health dashboard for patients.
            </p>
            <div className="d-inline-flex bg-dark p-2 rounded-4 mt-4 border border-opacity-25 health-tabs">
              <button 
                className={`nav-link btn px-4 py-2 border-0 ${activeAppTab === 'patient' ? 'active' : ''}`}
                onClick={() => setActiveAppTab('patient')}
              >
                <i className="ti ti-user me-2"></i> Patient App Flavor
              </button>
              <button 
                className={`nav-link btn px-4 py-2 border-0 ${activeAppTab === 'doctor' ? 'active' : ''}`}
                onClick={() => setActiveAppTab('doctor')}
              >
                <i className="ti ti-stethoscope me-2"></i> Doctor App Flavor
              </button>
            </div>
          </div>

          <div className="row g-4 align-items-stretch justify-content-center">
            {activeAppTab === 'patient' ? (
              <>
                <div className="col-lg-5">
                  <div className="glass-card p-4 h-100 border-opacity-50">
                    <h4 className="fw-bold text-white mb-4 d-flex align-items-center">
                      <i className="ti ti-user-circle text-coral me-3 fs-3"></i> Patient App Features
                    </h4>
                    <ul className="list-unstyled d-flex flex-column gap-3 fs-15 text-muted">
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>Self-onboard:</strong> Browse doctor directory & connect.</div></li>
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>Full profile:</strong> Photo, blood group, allergies, insurance.</div></li>
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>Add family members:</strong> Kids, spouse, parents—each with their own record.</div></li>
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>Unified Calendar:</strong> Vaccines, meds, tests, appointments, physio, insurance.</div></li>
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>Prescription OCR:</strong> Autodetect and set up daily tablet reminders.</div></li>
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>Emergency SOS:</strong> Live location share, emergency card access, nearby hospital lists.</div></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mockup-app glass-card border-0 h-100 p-0 text-white overflow-hidden shadow-lg" style={{ background: '#051b18' }}>
                    <div className="mockup-header border-bottom border-opacity-25 bg-black bg-opacity-20 d-flex justify-content-between align-items-center">
                      <span>PATIENT APP • HOME</span>
                      <span className="badge bg-success">Online</span>
                    </div>
                    <div className="p-4 d-flex flex-column gap-3">
                      <div className="bg-white bg-opacity-5 p-3 rounded-3 border border-white border-opacity-10">
                        <small className="text-muted d-block uppercase fw-bold mb-1">TODAY'S ACTION ITEMS</small>
                        <h6 className="mb-0 text-white">💊 2 medicine reminders, 💉 1 vaccine due in 5 days</h6>
                      </div>
                      <div className="bg-white bg-opacity-5 p-3 rounded-3 border border-white border-opacity-10">
                        <small className="text-muted d-block uppercase fw-bold mb-1">FAMILY HEALTH TIMELINE</small>
                        <div className="text-muted fs-13 mt-1">
                          📋 Dr. Rao followup appointment confirmed (Tue 4:00 PM)<br/>
                          🔬 Lab Report uploaded for Spouse: Blood Sugar (HbA1c: 6.2%)
                        </div>
                      </div>
                      <div className="bg-white bg-opacity-5 p-3 rounded-3 border border-white border-opacity-10">
                        <small className="text-muted d-block uppercase fw-bold mb-1">ASK AI HEALTH ASSISTANT</small>
                        <div className="input-group mt-2">
                          <input type="text" className="form-control bg-transparent border-secondary text-white fs-13" placeholder="Explain my last blood report..." readOnly />
                          <button className="btn btn-success"><i className="ti ti-arrow-right"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-lg-5">
                  <div className="glass-card p-4 h-100 border-opacity-50">
                    <h4 className="fw-bold text-white mb-4 d-flex align-items-center">
                      <i className="ti ti-stethoscope text-coral me-3 fs-3"></i> Doctor App Features
                    </h4>
                    <ul className="list-unstyled d-flex flex-column gap-3 fs-15 text-muted">
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>Instant Onboard:</strong> Onboard patient directly via download SMS link.</div></li>
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>Shared Profile:</strong> Access shared family vitals and history (with consent).</div></li>
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>Pregnancy Plan:</strong> Trigger customized workflows to auto-schedule visits and test cadence.</div></li>
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>Clinic Queuing:</strong> Handle tokens, digital queue, and appointment calendar.</div></li>
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>Broadcast Alert:</strong> Send custom advisories (e.g. flu advisories) to groups of patients.</div></li>
                      <li className="d-flex gap-3"><i className="ti ti-circle-check-filled text-success mt-1"></i> <div><strong>E-Prescriptions:</strong> Write prescriptions directly inside the app to auto-feed patient's reminders.</div></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mockup-app glass-card border-0 h-100 p-0 text-white overflow-hidden shadow-lg" style={{ background: '#081e28' }}>
                    <div className="mockup-header border-bottom border-opacity-25 bg-black bg-opacity-20 d-flex justify-content-between align-items-center">
                      <span>DOCTOR APP • PATIENT QUEUE</span>
                      <span className="badge bg-primary">Tokens Active</span>
                    </div>
                    <div className="p-4 d-flex flex-column gap-3">
                      <div className="bg-white bg-opacity-5 p-3 rounded-3 border border-white border-opacity-10">
                        <small className="text-muted d-block uppercase fw-bold mb-1">NEXT PATIENT IN QUEUE</small>
                        <h6 className="mb-1 text-white">👩‍🦰 Asha K. • Token #14</h6>
                        <span className="badge bg-success bg-opacity-25 text-success">Pregnancy Week 24 Plan Active</span>
                      </div>
                      <div className="bg-white bg-opacity-5 p-3 rounded-3 border border-white border-opacity-10">
                        <small className="text-muted d-block uppercase fw-bold mb-1">PATIENT PANEL OVERVIEW</small>
                        <div className="text-muted fs-13 mt-1">
                          📊 Panel size: 42 linked patients<br/>
                          ⚠️ 3 flagged for attention (Missed doses / overdue vitals)
                        </div>
                      </div>
                      <div className="bg-white bg-opacity-5 p-3 rounded-3 border border-white border-opacity-10">
                        <small className="text-muted d-block uppercase fw-bold mb-1">BROADCAST BULK ALERT</small>
                        <button className="btn btn-outline-primary btn-sm w-100 mt-2">Send Flu Season Advisory</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Notification Simulator */}
      <section id="engine" className="container py-5 my-5">
        <div className="text-center mb-5">
          <span className="badge bg-success bg-opacity-20 text-success px-3 py-1 rounded-pill uppercase fw-bold mb-3 fs-12">
            The Reminder Engine, End to End
          </span>
          <h2 className="fw-bold text-white">Unified Notification Engine</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Every module funnels into one engine instead of five separate alerts, creating a unified timeline respecting quiet hours and custom channel preferences.
          </p>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <h5 className="fw-bold mb-4 text-white text-uppercase tracking-wider fs-13">1. Select Trigger Source</h5>
            <div className="d-flex flex-column gap-3">
              <button 
                className={`sim-trigger-btn ${activeNotificationSim === 'tablet' ? 'active' : ''}`}
                onClick={() => setActiveNotificationSim('tablet')}
              >
                💊 Tablet time (OCR Scheduled)
              </button>
              <button 
                className={`sim-trigger-btn ${activeNotificationSim === 'vaccination' ? 'active' : ''}`}
                onClick={() => setActiveNotificationSim('vaccination')}
              >
                💉 Vaccination schedule due
              </button>
              <button 
                className={`sim-trigger-btn ${activeNotificationSim === 'appointment' ? 'active' : ''}`}
                onClick={() => setActiveNotificationSim('appointment')}
              >
                📅 Doctor appointment follow-up
              </button>
              <button 
                className={`sim-trigger-btn ${activeNotificationSim === 'vitals' ? 'active' : ''}`}
                onClick={() => setActiveNotificationSim('vitals')}
              >
                ⚠️ Abnormal vital reading spikes
              </button>
            </div>
          </div>

          <div className="col-lg-7">
            <h5 className="fw-bold mb-4 text-white text-uppercase tracking-wider fs-13 text-center">2. Output Channels Generated</h5>
            <div className="sim-screen position-relative">
              <div className="phone-notch"></div>
              
              <h6 className="text-center text-success mb-4 fw-bold">{currentSim.title}</h6>
              
              <div className="d-flex flex-column gap-3 flex-grow-1 overflow-auto pe-1" style={{ maxHeight: '300px' }}>
                <div className="bg-white bg-opacity-5 p-3 rounded-4 border border-opacity-10 d-flex gap-3">
                  <div className="bg-success text-white p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                    <i className="ti ti-bell-ringing fs-5"></i>
                  </div>
                  <div>
                    <span className="d-block uppercase text-success fw-bold fs-11">App Push Notification</span>
                    <p className="mb-0 text-white mt-1 fs-14">{currentSim.appPush}</p>
                  </div>
                </div>

                <div className="bg-white bg-opacity-5 p-3 rounded-4 border border-opacity-10 d-flex gap-3">
                  <div className="bg-success text-white p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', flexShrink: 0, backgroundColor: '#25D366' }}>
                    <i className="ti ti-brand-whatsapp fs-5"></i>
                  </div>
                  <div>
                    <span className="d-block uppercase fw-bold fs-11" style={{ color: '#25D366' }}>WhatsApp Webhook</span>
                    <p className="mb-0 text-white mt-1 fs-14">{currentSim.whatsapp}</p>
                  </div>
                </div>

                <div className="bg-white bg-opacity-5 p-3 rounded-4 border border-opacity-10 d-flex gap-3">
                  <div className="bg-success text-white p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', flexShrink: 0, backgroundColor: '#0284C7' }}>
                    <i className="ti ti-message-2-code fs-5"></i>
                  </div>
                  <div>
                    <span className="d-block uppercase fw-bold fs-11" style={{ color: '#0284C7' }}>Fallback SMS Gateway</span>
                    <p className="mb-0 text-white mt-1 fs-14">{currentSim.sms}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phased Roadmap */}
      <section id="roadmap" className="bg-gradient-light py-5 border-top border-bottom border-opacity-10" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">5-Phase Product Roadmap</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              We've mapped out a sequential, phased strategy to incrementally capture value and scale engagement.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-xl-2 col-md-4 col-sm-6">
              <div className="glass-card p-4 text-center h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-success bg-opacity-25 text-success rounded-pill px-3 py-1 mb-3 fw-bold fs-11">PHASE 1</span>
                  <h5 className="fw-bold text-white mb-3">MVP Scope</h5>
                  <ul className="list-unstyled text-muted fs-13 text-start mb-0">
                    <li>👨‍👩‍👧 Family Profiles</li>
                    <li>🏥 Onboarding Invites</li>
                    <li>🗓️ Vaccine Calendar</li>
                    <li>🔍 Prescription OCR</li>
                  </ul>
                </div>
                <div className="mt-4 border-top border-opacity-25 pt-3">
                  <small className="text-success fw-semibold">Prove loop with early clinics</small>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-md-4 col-sm-6">
              <div className="glass-card p-4 text-center h-100 d-flex flex-column justify-content-between" style={{ borderColor: 'rgba(255,122,89,0.2)' }}>
                <div>
                  <span className="badge bg-warning bg-opacity-25 text-warning rounded-pill px-3 py-1 mb-3 fw-bold fs-11">PHASE 2</span>
                  <h5 className="fw-bold text-white mb-3">Engagement</h5>
                  <ul className="list-unstyled text-muted fs-13 text-start mb-0">
                    <li>📈 Vitals Log (BP/sugar)</li>
                    <li>🔥 Daily Streaks</li>
                    <li>🤰 Pregnancy Cadence</li>
                    <li>📚 AI Health Explainer</li>
                  </ul>
                </div>
                <div className="mt-4 border-top border-opacity-25 pt-3">
                  <small className="text-warning fw-semibold">Target: 100K users, daily opens</small>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-md-4 col-sm-6">
              <div className="glass-card p-4 text-center h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-primary bg-opacity-25 text-primary rounded-pill px-3 py-1 mb-3 fw-bold fs-11">PHASE 3</span>
                  <h5 className="fw-bold text-white mb-3">Ecosystem</h5>
                  <ul className="list-unstyled text-muted fs-13 text-start mb-0">
                    <li>🗣️ Online Consults</li>
                    <li>🚚 Medicine Delivery</li>
                    <li>🧪 Lab Booking Price</li>
                    <li>🛡️ Insurance Referral</li>
                  </ul>
                </div>
                <div className="mt-4 border-top border-opacity-25 pt-3">
                  <small className="text-primary fw-semibold">Target: 1M users, transaction rev</small>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-md-4 col-sm-6">
              <div className="glass-card p-4 text-center h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-info bg-opacity-25 text-info rounded-pill px-3 py-1 mb-3 fw-bold fs-11">PHASE 4</span>
                  <h5 className="fw-bold text-white mb-3">Social Layer</h5>
                  <ul className="list-unstyled text-muted fs-13 text-start mb-0">
                    <li>💬 Family Health Chat</li>
                    <li>👥 Community Groups</li>
                    <li>⌚ Wearable Sync</li>
                    <li>🏆 Health Challenges</li>
                  </ul>
                </div>
                <div className="mt-4 border-top border-opacity-25 pt-3">
                  <small className="text-info fw-semibold">Target: 10M users, community retention</small>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-md-4 col-sm-6">
              <div className="glass-card p-4 text-center h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-secondary bg-opacity-25 text-secondary rounded-pill px-3 py-1 mb-3 fw-bold fs-11">PHASE 5</span>
                  <h5 className="fw-bold text-white mb-3">Super App</h5>
                  <ul className="list-unstyled text-muted fs-13 text-start mb-0">
                    <li>🆔 Digital Health ID</li>
                    <li>🧠 AI Predictive Risk</li>
                    <li>🏢 Corporate Wellness</li>
                    <li>🏥 Hospital SaaS Sync</li>
                  </ul>
                </div>
                <div className="mt-4 border-top border-opacity-25 pt-3">
                  <small className="text-secondary fw-semibold">Target: National health layer</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section id="qa" className="container py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold text-white text-center mb-5">Answering Crucial Product Questions</h2>
            
            <div className="accordion accordion-flush bg-transparent border-0 d-flex flex-column gap-3" id="landingAccordion">
              <div className="glass-card p-4">
                <h5 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
                  <i className="ti ti-help-circle text-coral"></i> What's the MVP planned date?
                </h5>
                <p className="text-muted mb-0 fs-15">
                  Two linked apps (Doctor + Patient), OCR-driven reminders, multi-channel notifications, and appointment/token flows realistically require <strong>8–10 weeks</strong> with a small core team (4–6 engineers, 1 designer, 1 QA). This aligns timeline expectations correctly before launching.
                </p>
              </div>

              <div className="glass-card p-4">
                <h5 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
                  <i className="ti ti-help-circle text-coral"></i> What is explicitly deferred past MVP?
                </h5>
                <p className="text-muted mb-0 fs-15">
                  Multi-lingual UI, vitals/wearable tracking, gamified streaks, direct e-commerce medicine delivery, lab comparison lists, and hospital database syncs are strong ideas but deferred to Phases 2–5 to guarantee a fast, stable launch of Phase 1.
                </p>
              </div>

              <div className="glass-card p-4">
                <h5 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
                  <i className="ti ti-help-circle text-coral"></i> How does the onboarding flow operate?
                </h5>
                <p className="text-muted mb-0 fs-15">
                  It functions in two channels: (1) **Clinic Path:** Doctor adds patient → SMS link sent → Patient installs & details auto-fill → Record is linked. (2) **Self-Onboard Path:** Patient registers → Searches doctor directory → Books consult → Doctor accepts invite → Record is linked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
