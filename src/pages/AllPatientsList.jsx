import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../components/PatientDetailTabs.css';

const patients = [
  {
    id: '#PT0025',
    name: 'James Carter',
    patientImg: 'avatar-31.jpg',
    gender: 'Male',
    department: 'Anaesthesiology',
    doctor: 'Dr. Andrew Clark',
    doctorImg: 'doctor-01.jpg',
    lastVisit: '17 Jun 2025',
    status: 'Out Patient',
    statusClass: 'badge-soft-orange',
  },
  {
    id: '#PT0024',
    name: 'Emily Davis',
    patientImg: 'avatar-54.jpg',
    gender: 'Female',
    department: 'Dental Surgery',
    doctor: 'Dr. Katherine Brooks',
    doctorImg: 'doctor-03.jpg',
    lastVisit: '10 Jun 2025',
    status: 'In Patient',
    statusClass: 'badge-soft-purple',
  },
  {
    id: '#PT0023',
    name: 'Michael Johnson',
    patientImg: 'avatar-45.jpg',
    gender: 'Male',
    department: 'Dermatology',
    doctor: 'Dr. Benjamin Harris',
    doctorImg: 'doctor-04.jpg',
    lastVisit: '22 May 2025',
    status: 'Out Patient',
    statusClass: 'badge-soft-orange',
  },
  {
    id: '#PT0022',
    name: 'Olivia Miller',
    patientImg: 'avatar-51.jpg',
    gender: 'Female',
    department: 'ENT Surgery',
    doctor: 'Dr. Laura Mitchell',
    doctorImg: 'doctor-05.jpg',
    lastVisit: '15 May 2025',
    status: 'In Patient',
    statusClass: 'badge-soft-purple',
  },
  {
    id: '#PT0021',
    name: 'David Smith',
    patientImg: 'avatar-41.jpg',
    gender: 'Male',
    department: 'General Medicine',
    doctor: 'Dr. Christopher Lewis',
    doctorImg: 'doctor-06.jpg',
    lastVisit: '30 Apr 2025',
    status: 'Out Patient',
    statusClass: 'badge-soft-orange',
  },
  {
    id: '#PT0020',
    name: 'Sophia Wilson',
    patientImg: 'avatar-48.jpg',
    gender: 'Female',
    department: 'Ophthalmology',
    doctor: 'Dr. Natalie Foster',
    doctorImg: 'doctor-07.jpg',
    lastVisit: '25 Apr 2025',
    status: 'In Patient',
    statusClass: 'badge-soft-purple',
  },
  {
    id: '#PT0019',
    name: 'Daniel Williams',
    patientImg: 'avatar-53.jpg',
    gender: 'Male',
    department: 'Orthopaedics',
    doctor: 'Dr. Jonathan Adams',
    doctorImg: 'doctor-08.jpg',
    lastVisit: '13 Mar 2025',
    status: 'Out Patient',
    statusClass: 'badge-soft-orange',
  },
  {
    id: '#PT0018',
    name: 'Isabella Anderson',
    patientImg: 'avatar-50.jpg',
    gender: 'Female',
    department: 'Pediatrics',
    doctor: 'Dr. Rebecca Scott',
    doctorImg: 'doctor-09.jpg',
    lastVisit: '16 Feb 2025',
    status: 'In Patient',
    statusClass: 'badge-soft-purple',
  },
  {
    id: '#PT0017',
    name: 'William Brown',
    patientImg: 'avatar-42.jpg',
    gender: 'Male',
    department: 'Radiology',
    doctor: 'Dr. Samuel Turner',
    doctorImg: 'doctor-10.jpg',
    lastVisit: '20 Jan 2025',
    status: 'Out Patient',
    statusClass: 'badge-soft-orange',
  },
];

const inpatientCount = patients.filter((patient) => patient.status === 'In Patient').length;
const outpatientCount = patients.length - inpatientCount;

const AllPatientsList = () => {
  return (
    <>
      <div className="content patients-list-page">
        <div className="d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Patients</h4>
            <ol className="breadcrumb m-0 py-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Patients</li>
            </ol>
          </div>

          <div className="patients-list-toolbar d-flex align-items-center gap-2 flex-wrap">
            <div className="btn-group patients-view-toggle" role="group" aria-label="Patient view switcher">
              <Link to="/patients" className="btn btn-icon btn-light" title="Grid View">
                <i className="ti ti-layout-grid"></i>
              </Link>
              <Link to="/all-patients-list" className="btn btn-icon btn-primary shadow-sm" title="List View">
                <i className="ti ti-layout-list"></i>
              </Link>
            </div>
            <a href="#/" className="btn btn-icon btn-light" title="Refresh">
              <i className="ti ti-refresh"></i>
            </a>
            <a href="#/" className="btn btn-icon btn-light" title="Print">
              <i className="ti ti-printer"></i>
            </a>
            <a href="#/" className="btn btn-icon btn-light" title="Download">
              <i className="ti ti-cloud-download"></i>
            </a>
            <Link to="/add-patient" className="btn btn-primary d-inline-flex align-items-center gap-2">
              <i className="ti ti-square-rounded-plus"></i>
              Add New Patient
            </Link>
          </div>
        </div>

        <div className="card border-0 shadow-sm patients-list-shell">
          <div className="card-body p-4 border-bottom patients-list-hero">
            <div className="d-flex align-items-start justify-content-between gap-3 flex-wrap">
              <div>
                <div className="patients-list-kicker mb-2">Patient Directory</div>
                <h5 className="mb-2 fw-bold">Total Patients</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="patients-list-total">{patients.length}</span>
                  <span className="patients-list-subtitle">Active records across departments</span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 flex-wrap">
                <span className="patients-list-stat-chip">
                  <span className="dot dot-purple"></span>
                  In Patient {inpatientCount}
                </span>
                <span className="patients-list-stat-chip">
                  <span className="dot dot-orange"></span>
                  Out Patient {outpatientCount}
                </span>
                <div className="dropdown">
                  <a href="#/" className="dropdown-toggle btn btn-outline-light patients-list-sort" data-bs-toggle="dropdown">
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
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-modern patients-list-table mb-0">
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>ID</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Doctor</th>
                    <th>Last Visit</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id}>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <Link to="/patient-details" className="avatar avatar-md patients-list-avatar flex-shrink-0">
                            <img src={`/assets/img/avatars/${patient.patientImg}`} alt={patient.name} className="rounded-circle" />
                          </Link>
                          <div>
                            <h6 className="mb-1 fs-14 fw-semibold">
                              <Link to="/patient-details" className="text-decoration-none patients-list-link-dark">
                                {patient.name}
                              </Link>
                            </h6>
                            <p className="mb-0 patients-list-muted">Patient record</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Link to="/patient-details" className="fw-semibold text-decoration-none">
                          {patient.id}
                        </Link>
                      </td>
                      <td>{patient.gender}</td>
                      <td>
                        <span className="patients-list-pill">{patient.department}</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <Link to="/doctor-details" className="avatar avatar-sm flex-shrink-0">
                            <img src={`/assets/img/doctors/${patient.doctorImg}`} alt={patient.doctor} className="rounded-circle" />
                          </Link>
                          <div>
                            <Link to="/doctor-details" className="text-decoration-none fw-medium patients-list-link-dark">
                              {patient.doctor}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="patients-list-date">{patient.lastVisit}</div>
                      </td>
                      <td>
                        <span className={`badge patients-list-badge ${patient.statusClass}`}>
                          {patient.status}
                        </span>
                      </td>
                      <td className="text-end">
                        <div className="dropdown">
                          <button className="btn btn-icon btn-sm patients-list-action" data-bs-toggle="dropdown" aria-label="more options">
                            <i className="ti ti-dots-vertical"></i>
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-clean">
                            <li>
                              <Link to="/patient-details" className="dropdown-item d-flex align-items-center gap-2">
                                <i className="ti ti-eye"></i>
                                View Details
                              </Link>
                            </li>
                            <li>
                              <Link to="/edit-patient" className="dropdown-item d-flex align-items-center gap-2">
                                <i className="ti ti-edit"></i>
                                Edit
                              </Link>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                              <a href="#/" className="dropdown-item d-flex align-items-center gap-2 text-danger">
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

export default AllPatientsList;
