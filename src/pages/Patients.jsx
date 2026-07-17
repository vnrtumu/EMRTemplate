import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../components/PatientDetailTabs.css';

const patients = [
  { id: '#PT0025', name: 'James Carter', img: 'avatar-31.jpg', type: 'Out Patient', typeClass: 'accent-orange', badgeClass: 'badge-soft-orange', lastVisit: '17 Jun 2025', gender: 'Male', location: 'California' },
  { id: '#PT0024', name: 'Emily Davis', img: 'avatar-54.jpg', type: 'In Patient', typeClass: 'accent-purple', badgeClass: 'badge-soft-purple', lastVisit: '10 Jun 2025', gender: 'Female', location: 'Texas' },
  { id: '#PT023', name: 'Michael Johnson', img: 'avatar-42.jpg', type: 'Out Patient', typeClass: 'accent-orange', badgeClass: 'badge-soft-orange', lastVisit: '22 May 2025', gender: 'Male', location: 'Florida' },
  { id: '#PT0022', name: 'Olivia Miller', img: 'avatar-43.jpg', type: 'In Patient', typeClass: 'accent-purple', badgeClass: 'badge-soft-purple', lastVisit: '15 May 2025', gender: 'Female', location: 'New York' },
  { id: '#PT021', name: 'David Smith', img: 'avatar-41.jpg', type: 'Out Patient', typeClass: 'accent-orange', badgeClass: 'badge-soft-orange', lastVisit: '30 Apr 2025', gender: 'Male', location: 'Illinois' },
  { id: '#PT0020', name: 'Sophia Wilson', img: 'avatar-51.jpg', type: 'In Patient', typeClass: 'accent-purple', badgeClass: 'badge-soft-purple', lastVisit: '25 Apr 2024', gender: 'Female', location: 'Georgia' },
  { id: '#PT019', name: 'Daniel Williams', img: 'avatar-53.jpg', type: 'Out Patient', typeClass: 'accent-orange', badgeClass: 'badge-soft-orange', lastVisit: '13 Mar 2024', gender: 'Male', location: 'Texas' },
  { id: '#PT0018', name: 'Isabella Anderson', img: 'avatar-50.jpg', type: 'In Patient', typeClass: 'accent-purple', badgeClass: 'badge-soft-purple', lastVisit: '16 Feb 2024', gender: 'Female', location: 'Ohio' },
  { id: '#PT017', name: 'William Brown', img: 'avatar-44.jpg', type: 'Out Patient', typeClass: 'accent-orange', badgeClass: 'badge-soft-orange', lastVisit: '20 Jan 2024', gender: 'Male', location: 'Michigan' },
];

const Patients = () => {
  return (
    <>
      <div className="content patients-page">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-0 fw-bold">Patients</h4>
            <ol className="breadcrumb m-0 py-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Patients</li>
            </ol>
          </div>
          <div className="patients-toolbar d-flex align-items-center gap-2 flex-wrap">
            <div className="btn-group patients-view-toggle" role="group" aria-label="Patient view switcher">
              <Link to="/patients" className="btn btn-icon btn-primary shadow-sm" title="Grid View">
                <i className="ti ti-layout-grid"></i>
              </Link>
              <Link to="/all-patients-list" className="btn btn-icon btn-light" title="List View">
                <i className="ti ti-layout-list"></i>
              </Link>
            </div>
            <a href="#/" className="btn btn-icon btn-light" title="Refresh">
              <i className="ti ti-refresh"></i>
            </a>
            <Link to="/add-patient" className="btn btn-primary d-inline-flex align-items-center gap-2">
              <i className="ti ti-plus"></i>Add New Patient
            </Link>
          </div>
        </div>

        <div className="row g-3">
          {patients.map((p) => (
            <div key={p.id} className="col-xl-4 col-md-6 d-flex">
              <div className="card border-0 patient-card flex-fill w-100 shadow-sm">
                <div className={`card-top-accent ${p.typeClass}`}></div>
                <div className="card-body p-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className={`badge patient-type-badge ${p.badgeClass} d-inline-flex align-items-center gap-1`}>
                      {p.type}
                    </span>
                    <div className="dropdown">
                      <button className="btn btn-icon btn-sm btn-outline-light border-0" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-clean">
                        <li>
                          <Link to="/patient-details" className="dropdown-item d-flex align-items-center gap-2">
                            <i className="ti ti-eye"></i>View Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/edit-patient" className="dropdown-item d-flex align-items-center gap-2">
                            <i className="ti ti-edit"></i>Edit
                          </Link>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <a href="#/" className="dropdown-item d-flex align-items-center gap-2 text-danger">
                            <i className="ti ti-trash"></i>Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-center mb-3">
                    <div className="avatar-border d-inline-block mb-2">
                      <span className="avatar avatar-xl avatar-rounded d-block">
                        <Link to="/patient-details">
                          <img src={`/assets/img/avatars/${p.img}`} alt={p.name} />
                        </Link>
                      </span>
                    </div>
                    <Link to="/patient-details" className="d-block fs-13 text-primary fw-medium text-decoration-none mb-1">
                      {p.id}
                    </Link>
                    <h5 className="mb-0 fw-semibold">
                      <Link to="/patient-details" className="text-decoration-none text-body">
                        {p.name}
                      </Link>
                    </h5>
                  </div>

                  <div className="patient-stats p-2 mb-3">
                    <div className="d-flex">
                      <div className="stat-item">
                        <p className="stat-label">Last Visit</p>
                        <p className="stat-value">{p.lastVisit}</p>
                      </div>
                      <div className="stat-item">
                        <p className="stat-label">Gender</p>
                        <p className="stat-value">{p.gender}</p>
                      </div>
                      <div className="stat-item">
                        <p className="stat-label">Location</p>
                        <p className="stat-value">{p.location}</p>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-dark w-100 d-inline-flex align-items-center justify-content-center gap-2" data-bs-toggle="modal" data-bs-target="#add_modal">
                    <i className="ti ti-calendar-plus"></i> Add Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="#/" className="btn btn-outline-primary btn-load-more d-inline-flex align-items-center gap-2">
            <i className="ti ti-refresh"></i> Load More
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Patients;
