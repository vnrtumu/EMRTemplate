import { Link } from 'react-router-dom';
import PatientDetailTabs from '../components/PatientDetailTabs';
import Footer from '../components/Footer';
import '../components/PatientDetailTabs.css';

const PatientDetails = () => {
  return (
    <>
      <div className="content patient-detail-page">
        <div className="patient-detail-header d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-0 fw-semibold">Patient Details</h4>
            <ol className="breadcrumb m-0 py-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Patient Details</li>
            </ol>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Link to="/patients" className="btn btn-light patient-detail-btn d-inline-flex align-items-center gap-1">
              <i className="ti ti-arrow-left"></i> Back to Patients
            </Link>
            <Link to="/edit-patient" className="btn btn-primary patient-detail-btn d-inline-flex align-items-center gap-1">
              <i className="ti ti-edit"></i> Edit Patient
            </Link>
          </div>
        </div>

        <PatientDetailTabs />

        <div className="row g-3">
          <div className="col-xl-4">
            <div className="card border-0 shadow-sm patient-detail-panel patient-profile-panel">
              <div className="card-body p-0">
                <div className="profile-cover"></div>
                <div className="text-center px-3 pb-3">
                  <div className="profile-info mb-3">
                    <span className="avatar avatar-xxl avatar-rounded d-inline-block border border-3 border-white shadow-sm">
                      <img src="/assets/img/avatars/avatar-03.jpg" alt="patient" />
                    </span>
                  </div>
                  <span className="badge badge-soft-primary mb-2">#PT001</span>
                  <h4 className="fw-semibold mb-1">Reyan Verol</h4>
                  <p className="text-muted fs-13 mb-0">
                    <i className="ti ti-clock me-1"></i>Last Visited: 24 Jan 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm patient-detail-panel">
              <div className="card-header bg-transparent py-3">
                <h6 className="mb-0 fw-semibold d-inline-flex align-items-center gap-1">
                  <i className="ti ti-info-circle text-primary"></i> Basic Information
                </h6>
              </div>
              <div className="card-body pt-0">
                <div className="info-list">
                  <p><span className="info-label">Added On</span><span className="info-value">24 May 2024</span></p>
                  <p><span className="info-label">DOB</span><span className="info-value">10 Jan 1991</span></p>
                  <p><span className="info-label">Gender</span><span className="info-value">Male</span></p>
                  <p><span className="info-label">Martial Status</span><span className="info-value">Married</span></p>
                  <p><span className="info-label">Blood Group</span><span className="info-value">O+ve</span></p>
                  <p><span className="info-label">Phone Number</span><span className="info-value">+1 75964 25493</span></p>
                  <p><span className="info-label">Email</span><span className="info-value">cynthiya@example.com</span></p>
                  <p>
                    <span className="info-label">Referred By</span>
                    <span className="info-value">
                      <Link to="/doctor-details" className="text-decoration-underline link-primary fw-medium">Dr Antonio</Link>
                    </span>
                  </p>
                  <p className="border-0 pb-0"><span className="info-label">Total Bookings</span><span className="info-value fw-bold text-primary">+12</span></p>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm patient-detail-panel">
              <div className="card-header bg-transparent py-3">
                <h6 className="mb-0 fw-semibold d-inline-flex align-items-center gap-1">
                  <i className="ti ti-map-pin text-primary"></i> Address
                </h6>
              </div>
              <div className="card-body pt-0">
                <div className="d-flex align-items-start gap-2">
                  <i className="ti ti-home text-muted mt-1"></i>
                  <p className="mb-0 text-dark">2557 Tanglewood Road, Jackson, MS 39213</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="card border-0 shadow-sm patient-detail-panel">
              <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 py-3">
                <h5 className="mb-0 fw-semibold d-inline-flex align-items-center gap-2">
                  <i className="ti ti-calendar-event text-primary"></i> Appointments
                </h5>
                <Link to="/appointments" className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1">
                  View All <i className="ti ti-arrow-right"></i>
                </Link>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-xl-6 d-flex">
                    <div className="appointment-card appointment-upcoming p-3 border rounded-3 flex-fill patient-detail-soft-card">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="badge badge-soft-purple d-inline-flex align-items-center gap-1">
                          <i className="ti ti-circle-filled fs-10"></i>Upcoming
                        </span>
                        <button className="btn btn-icon btn-sm btn-secondary" aria-label="video call"><i className="ti ti-video"></i></button>
                      </div>
                      <div className="row g-2">
                        <div className="col-6">
                          <p className="fs-12 text-muted fw-semibold mb-1">Department</p>
                          <p className="fs-13 fw-medium text-dark mb-0">Cardiology</p>
                        </div>
                        <div className="col-6">
                          <p className="fs-12 text-muted fw-semibold mb-1">Doctor</p>
                          <p className="fs-13 fw-medium text-dark mb-0 text-truncate">Dr. Andrew Clark</p>
                        </div>
                        <div className="col-6">
                          <p className="fs-12 text-muted fw-semibold mb-1">Date & Time</p>
                          <p className="fs-13 fw-medium text-dark mb-0">21 Dec 2024, 07:00 AM</p>
                        </div>
                        <div className="col-6">
                          <p className="fs-12 text-muted fw-semibold mb-1">Booked On</p>
                          <p className="fs-13 fw-medium text-dark mb-0">20 Dec 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 d-flex">
                    <div className="appointment-card appointment-completed p-3 border rounded-3 flex-fill patient-detail-soft-card">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="badge badge-soft-success d-inline-flex align-items-center gap-1">
                          <i className="ti ti-circle-filled fs-10"></i>Completed
                        </span>
                        <button className="btn btn-icon btn-sm btn-primary" aria-label="phone call"><i className="ti ti-phone"></i></button>
                      </div>
                      <div className="row g-2">
                        <div className="col-6">
                          <p className="fs-12 text-muted fw-semibold mb-1">Department</p>
                          <p className="fs-13 fw-medium text-dark mb-0">Radiology</p>
                        </div>
                        <div className="col-6">
                          <p className="fs-12 text-muted fw-semibold mb-1">Doctor</p>
                          <p className="fs-13 fw-medium text-dark mb-0 text-truncate">Dr. Laura Mitchell</p>
                        </div>
                        <div className="col-6">
                          <p className="fs-12 text-muted fw-semibold mb-1">Date & Time</p>
                          <p className="fs-13 fw-medium text-dark mb-0">15 Jan 2025, 10:35 AM</p>
                        </div>
                        <div className="col-6">
                          <p className="fs-12 text-muted fw-semibold mb-1">Booked On</p>
                          <p className="fs-13 fw-medium text-dark mb-0">13 Jan 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm patient-detail-panel">
              <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 py-3">
                <h5 className="mb-0 fw-semibold d-inline-flex align-items-center gap-2">
                  <i className="ti ti-heart-rate-monitor text-primary"></i> Vital Signs
                </h5>
                <a href="#/" className="link-danger text-decoration-none fw-medium fs-13">View Past Data</a>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-sm-4 col-6">
                    <div className="d-flex align-items-center gap-2 p-2 bg-light rounded-2 patient-detail-soft-card">
                      <span className="vital-icon bg-white text-danger shadow-sm"><i className="ti ti-droplet"></i></span>
                      <div>
                        <p className="fs-12 fw-semibold text-muted mb-0">Blood Pressure</p>
                        <p className="fw-semibold text-dark mb-0">100/67 mmHg</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="d-flex align-items-center gap-2 p-2 bg-light rounded-2 patient-detail-soft-card">
                      <span className="vital-icon bg-white text-danger shadow-sm"><i className="ti ti-heart-rate-monitor"></i></span>
                      <div>
                        <p className="fs-12 fw-semibold text-muted mb-0">Heart Rate</p>
                        <p className="fw-semibold text-dark mb-0">89 Bpm</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="d-flex align-items-center gap-2 p-2 bg-light rounded-2 patient-detail-soft-card">
                      <span className="vital-icon bg-white text-info shadow-sm"><i className="ti ti-hexagons"></i></span>
                      <div>
                        <p className="fs-12 fw-semibold text-muted mb-0">SPO2</p>
                        <p className="fw-semibold text-dark mb-0">98 %</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="d-flex align-items-center gap-2 p-2 bg-light rounded-2 patient-detail-soft-card">
                      <span className="vital-icon bg-white text-warning shadow-sm"><i className="ti ti-temperature"></i></span>
                      <div>
                        <p className="fs-12 fw-semibold text-muted mb-0">Temperature</p>
                        <p className="fw-semibold text-dark mb-0">101 C</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="d-flex align-items-center gap-2 p-2 bg-light rounded-2 patient-detail-soft-card">
                      <span className="vital-icon bg-white text-purple shadow-sm"><i className="ti ti-ease-in"></i></span>
                      <div>
                        <p className="fs-12 fw-semibold text-muted mb-0">Respiratory Rate</p>
                        <p className="fw-semibold text-dark mb-0">24 rpm</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="d-flex align-items-center gap-2 p-2 bg-light rounded-2 patient-detail-soft-card">
                      <span className="vital-icon bg-white text-secondary shadow-sm"><i className="ti ti-circuit-switch-open"></i></span>
                      <div>
                        <p className="fs-12 fw-semibold text-muted mb-0">Weight</p>
                        <p className="fw-semibold text-dark mb-0">100 kg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm patient-detail-panel">
              <div className="card-header bg-transparent d-flex align-items-center justify-content-between flex-wrap gap-2 py-3">
                <h5 className="mb-0 fw-semibold d-inline-flex align-items-center gap-2">
                  <i className="ti ti-clipboard-list text-primary"></i> Visit History
                </h5>
                <Link to="/visits" className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-1">
                  View All <i className="ti ti-arrow-right"></i>
                </Link>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-xl-6 d-flex">
                    <div className="border rounded-3 p-3 flex-fill patient-detail-soft-card">
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <Link to="/doctor-details" className="avatar flex-shrink-0">
                          <img src="/assets/img/doctors/doctor-12.jpg" className="rounded-circle" alt="doctor" />
                        </Link>
                        <div>
                          <h6 className="fw-semibold fs-14 mb-0">
                            <Link to="/doctor-details" className="text-decoration-none text-dark">Dr. Samuel Turner</Link>
                          </h6>
                          <p className="fs-12 text-muted mb-0">Cardiology, MD, FRCS</p>
                        </div>
                      </div>
                      <div className="row g-2 mb-2">
                        <div className="col-7">
                          <p className="fs-12 fw-semibold text-muted mb-0">Visited On</p>
                          <p className="fs-13 fw-medium mb-0">21 Dec 2024, 07:00 AM</p>
                        </div>
                        <div className="col-5">
                          <p className="fs-12 fw-semibold text-muted mb-0">Follow Up</p>
                          <p className="fs-13 fw-medium mb-0">After 15 Days</p>
                        </div>
                      </div>
                      <div className="bg-light rounded-2 p-2">
                        <p className="fs-12 fw-semibold text-muted mb-1">Notes</p>
                        <p className="fs-13 mb-0 text-truncate">Detailed Information about the symptoms that brought the patient to the visit</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 d-flex">
                    <div className="border rounded-3 p-3 flex-fill patient-detail-soft-card">
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <Link to="/doctor-details" className="avatar flex-shrink-0">
                          <img src="/assets/img/doctors/doctor-09.jpg" className="rounded-circle" alt="doctor" />
                        </Link>
                        <div>
                          <h6 className="fw-semibold fs-14 mb-0">
                            <Link to="/doctor-details" className="text-decoration-none text-dark">Dr. Natalie Foster</Link>
                          </h6>
                          <p className="fs-12 text-muted mb-0">Neurology, MD, DNB</p>
                        </div>
                      </div>
                      <div className="row g-2 mb-2">
                        <div className="col-7">
                          <p className="fs-12 fw-semibold text-muted mb-0">Visited On</p>
                          <p className="fs-13 fw-medium mb-0">08 Jan 2024, 09:55 AM</p>
                        </div>
                        <div className="col-5">
                          <p className="fs-12 fw-semibold text-muted mb-0">Follow Up</p>
                          <p className="fs-13 fw-medium mb-0">After 12 Days</p>
                        </div>
                      </div>
                      <div className="bg-light rounded-2 p-2">
                        <p className="fs-12 fw-semibold text-muted mb-1">Notes</p>
                        <p className="fs-13 mb-0 text-truncate">Information provided to the patient regarding their condition and symptoms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PatientDetails;
