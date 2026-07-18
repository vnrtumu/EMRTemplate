import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../components/PatientDetailTabs.css';

const todayVisits = [
  {
    patient: 'Olivia Miller',
    patientImg: 'avatar-04.jpg',
    lastVisit: '12 Mar 2025',
    doctor: 'Dr. Laura Mitchell',
    doctorImg: 'doctor-03.jpg',
    treatment: 'Angiography',
    specialty: 'Cardiology',
    specialtyIcon: 'ti ti-heart-check',
  },
  {
    patient: 'William Brown',
    patientImg: 'avatar-25.jpg',
    lastVisit: '25 Apr 2025',
    doctor: 'Dr. Andrew Clark',
    doctorImg: 'doctor-06.jpg',
    treatment: 'Fever Management',
    specialty: 'General Medicine',
    specialtyIcon: 'ti ti-stethoscope',
  },
  {
    patient: 'Thomas Joe',
    patientImg: 'avatar-06.jpg',
    lastVisit: '24 Apr 2025',
    doctor: 'Dr. Sara Clark',
    doctorImg: 'doctor-07.jpg',
    treatment: 'Surgery Review',
    specialty: 'Ophthalmology',
    specialtyIcon: 'ti ti-eye',
  },
  {
    patient: 'James Carter',
    patientImg: 'avatar-03.jpg',
    lastVisit: '20 Feb 2025',
    doctor: 'Dr. Andrew Clark',
    doctorImg: 'doctor-02.jpg',
    treatment: 'Electromyography',
    specialty: 'Neurology',
    specialtyIcon: 'ti ti-brain',
  },
];

const visits = [
  { id: '#VS0025', patient: 'James Carter', patientImg: 'avatar-31.jpg', department: 'Anaesthesiology', doctor: 'Dr. Andrew Clark', doctorImg: 'doctor-01.jpg', date: '17 Jun 2025', status: 'Inprogress', statusClass: 'badge-soft-info' },
  { id: '#VS0024', patient: 'Emily Davis', patientImg: 'avatar-29.jpg', department: 'Dental Surgery', doctor: 'Dr. Katherine Brooks', doctorImg: 'doctor-02.jpg', date: '10 Jun 2025', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#VS0023', patient: 'Michael Johnson', patientImg: 'avatar-30.jpg', department: 'Dermatology', doctor: 'Dr. Benjamin Harris', doctorImg: 'doctor-04.jpg', date: '22 May 2025', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#VS0022', patient: 'Olivia Miller', patientImg: 'avatar-28.jpg', department: 'ENT Surgery', doctor: 'Dr. Laura Mitchell', doctorImg: 'doctor-05.jpg', date: '15 May 2025', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#VS0021', patient: 'David Smith', patientImg: 'avatar-27.jpg', department: 'General Medicine', doctor: 'Dr. Christopher Lewis', doctorImg: 'doctor-06.jpg', date: '30 Apr 2025', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#VS0020', patient: 'Sophia Wilson', patientImg: 'avatar-26.jpg', department: 'Ophthalmology', doctor: 'Dr. Natalie Foster', doctorImg: 'doctor-07.jpg', date: '25 Apr 2025', status: 'Completed', statusClass: 'badge-soft-success' },
];

const inprogressCount = visits.filter((visit) => visit.status === 'Inprogress').length;
const completedCount = visits.filter((visit) => visit.status === 'Completed').length;

const Visits = () => {
  return (
    <>
      <div className="content visits-page">
        <div className="d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Visits</h4>
            <ol className="breadcrumb m-0 py-0">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Visits</li>
            </ol>
          </div>

          <div className="visits-toolbar d-flex align-items-center gap-2 flex-wrap">
            <a href="#/" className="btn btn-icon btn-light" title="Refresh">
              <i className="ti ti-refresh"></i>
            </a>
            <a href="#/" className="btn btn-icon btn-light" title="Print">
              <i className="ti ti-printer"></i>
            </a>
            <a href="#/" className="btn btn-icon btn-light" title="Download">
              <i className="ti ti-cloud-download"></i>
            </a>
            <a href="#/" className="btn btn-primary d-inline-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#add_visit">
              <i className="ti ti-square-rounded-plus"></i>
              New Visit
            </a>
          </div>
        </div>

        <div className="card border-0 shadow-sm visits-shell mb-4">
          <div className="card-body p-4 border-bottom visits-hero">
            <div className="d-flex align-items-start justify-content-between gap-3 flex-wrap">
              <div>
                <div className="visits-kicker mb-2">Daily Flow</div>
                <h5 className="mb-2 fw-bold">Today Visits</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="visits-total">{todayVisits.length}</span>
                  <span className="visits-subtitle">Patients ready for consultation and follow-up</span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 flex-wrap">
                <span className="visits-stat-chip">
                  <span className="dot dot-blue"></span>
                  Inprogress {inprogressCount}
                </span>
                <span className="visits-stat-chip">
                  <span className="dot dot-green"></span>
                  Completed {completedCount}
                </span>
              </div>
            </div>
          </div>

          <div className="card-body p-4">
            <div className="row g-3">
              {todayVisits.map((visit) => (
                <div key={visit.patient} className="col-xl-3 col-md-6 d-flex">
                  <div className="visits-today-card flex-fill">
                    <div className="visits-today-patient">
                      <Link to="/patient-details" className="avatar avatar-lg visits-avatar flex-shrink-0">
                        <img src={`/assets/img/avatars/${visit.patientImg}`} alt={visit.patient} className="rounded-circle" />
                      </Link>
                      <div>
                        <h6 className="mb-1 fw-semibold">
                          <Link to="/patient-details" className="text-decoration-none visits-link-dark">
                            {visit.patient}
                          </Link>
                        </h6>
                        <p className="mb-0 visits-muted">Last visit: {visit.lastVisit}</p>
                      </div>
                    </div>

                    <div className="visits-today-grid">
                      <div className="visits-detail-row">
                        <p className="visits-label">Doctor</p>
                        <div className="d-flex align-items-center gap-2">
                          <Link to="/doctor-details" className="avatar avatar-sm flex-shrink-0">
                            <img src={`/assets/img/doctors/${visit.doctorImg}`} alt={visit.doctor} className="rounded-circle" />
                          </Link>
                          <span className="fw-medium">{visit.doctor}</span>
                        </div>
                      </div>
                      <div className="visits-detail-row">
                        <p className="visits-label">Treatment</p>
                        <p className="mb-0 fw-medium">{visit.treatment}</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <span className="visits-specialty">
                        <i className={visit.specialtyIcon}></i>
                        {visit.specialty}
                      </span>
                      <Link to="/start-visits" className="visits-start-link">
                        Start Visit
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm visits-shell">
          <div className="card-body p-4 border-bottom visits-hero">
            <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
              <div>
                <h5 className="mb-2 fw-bold d-inline-flex align-items-center gap-2">
                  Total Visits
                  <span className="visits-total small">{visits.length}</span>
                </h5>
                <p className="mb-0 visits-subtitle">Review recent patient visit activity by department and provider</p>
              </div>

              <div className="dropdown">
                <a href="#/" className="dropdown-toggle btn btn-outline-light visits-sort d-inline-flex align-items-center gap-2" data-bs-toggle="dropdown">
                  <i className="ti ti-sort-descending-2"></i>
                  <span>Sort By: Newest</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li><a href="#/" className="dropdown-item rounded-1">Newest</a></li>
                  <li><a href="#/" className="dropdown-item rounded-1">Oldest</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-modern visits-table mb-0">
                <thead>
                  <tr>
                    <th>Visit ID</th>
                    <th>Patient</th>
                    <th>Department</th>
                    <th>Doctor</th>
                    <th>Visit Date</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {visits.map((visit) => (
                    <tr key={visit.id}>
                      <td>
                        <a href="#/" className="fw-semibold text-decoration-none">{visit.id}</a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <Link to="/patient-details" className="avatar avatar-md visits-avatar flex-shrink-0">
                            <img src={`/assets/img/avatars/${visit.patientImg}`} alt={visit.patient} className="rounded-circle" />
                          </Link>
                          <div>
                            <h6 className="mb-1 fs-14 fw-semibold">
                              <Link to="/patient-details" className="text-decoration-none visits-link-dark">
                                {visit.patient}
                              </Link>
                            </h6>
                            <p className="mb-0 visits-muted">Patient record</p>
                          </div>
                        </div>
                      </td>
                      <td><span className="visits-pill">{visit.department}</span></td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <Link to="/doctor-details" className="avatar avatar-sm flex-shrink-0">
                            <img src={`/assets/img/doctors/${visit.doctorImg}`} alt={visit.doctor} className="rounded-circle" />
                          </Link>
                          <Link to="/doctor-details" className="text-decoration-none fw-medium visits-link-dark">
                            {visit.doctor}
                          </Link>
                        </div>
                      </td>
                      <td className="fw-medium">{visit.date}</td>
                      <td>
                        <span className={`badge visits-badge ${visit.statusClass}`}>{visit.status}</span>
                      </td>
                      <td className="text-end">
                        <div className="dropdown">
                          <a href="#/" className="btn btn-icon visits-action" data-bs-toggle="dropdown" aria-label="more options">
                            <i className="ti ti-dots-vertical"></i>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-clean p-2">
                            <li>
                              <Link to="/start-visits" className="dropdown-item d-flex align-items-center gap-2">
                                <i className="ti ti-gradienter"></i>
                                Start Visit
                              </Link>
                            </li>
                            <li>
                              <a href="#/" className="dropdown-item d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#edit_visit">
                                <i className="ti ti-edit"></i>
                                Edit
                              </a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                              <a href="#/" className="dropdown-item d-flex align-items-center gap-2 text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                <i className="ti ti-trash"></i>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Visits;
