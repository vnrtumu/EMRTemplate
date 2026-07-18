import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../components/PatientDetailTabs.css';

const doctors = [
  {
    id: '#DR0025',
    name: 'Dr. Andrew Clark',
    img: 'doctor-01.jpg',
    department: 'Anaesthesiology',
    qualification: 'MBBS, MD',
    experience: '8+ years',
    appointments: 200,
    status: 'Active',
    statusClass: 'badge-soft-success',
  },
  {
    id: '#DR0024',
    name: 'Dr. Katherine Brooks',
    img: 'doctor-02.jpg',
    department: 'Dental Surgery',
    qualification: 'BDS, MDS',
    experience: '6+ years',
    appointments: 350,
    status: 'Active',
    statusClass: 'badge-soft-success',
  },
  {
    id: '#DR0023',
    name: 'Dr. Benjamin Harris',
    img: 'doctor-03.jpg',
    department: 'Dermatology',
    qualification: 'MBBS, MD',
    experience: '10+ years',
    appointments: 400,
    status: 'Active',
    statusClass: 'badge-soft-success',
  },
  {
    id: '#DR0022',
    name: 'Dr. Laura Mitchell',
    img: 'doctor-04.jpg',
    department: 'ENT Surgery',
    qualification: 'MBBS, MS',
    experience: '7+ years',
    appointments: 150,
    status: 'Inactive',
    statusClass: 'badge-soft-danger',
  },
  {
    id: '#DR0021',
    name: 'Dr. Christopher Lewis',
    img: 'doctor-05.jpg',
    department: 'General Medicine',
    qualification: 'MBBS, MD',
    experience: '12+ years',
    appointments: 500,
    status: 'Active',
    statusClass: 'badge-soft-success',
  },
  {
    id: '#DR0020',
    name: 'Dr. Natalie Foster',
    img: 'doctor-06.jpg',
    department: 'Ophthalmology',
    qualification: 'MBBS, MS',
    experience: '9+ years',
    appointments: 450,
    status: 'Active',
    statusClass: 'badge-soft-success',
  },
  {
    id: '#DR0019',
    name: 'Dr. Jonathan Adams',
    img: 'doctor-07.jpg',
    department: 'Orthopaedics',
    qualification: 'MBBS, MS',
    experience: '11+ years',
    appointments: 330,
    status: 'Inactive',
    statusClass: 'badge-soft-danger',
  },
  {
    id: '#DR0018',
    name: 'Dr. Rebecca Scott',
    img: 'doctor-08.jpg',
    department: 'Pediatrics',
    qualification: 'MBBS, MD',
    experience: '8+ years',
    appointments: 270,
    status: 'Active',
    statusClass: 'badge-soft-success',
  },
  {
    id: '#DR0017',
    name: 'Dr. Samuel Turner',
    img: 'doctor-09.jpg',
    department: 'Radiology',
    qualification: 'MBBS, MD',
    experience: '10+ years',
    appointments: 510,
    status: 'Inactive',
    statusClass: 'badge-soft-danger',
  },
  {
    id: '#DR0016',
    name: 'Dr. Victoria Evans',
    img: 'doctor-10.jpg',
    department: 'Cardiology',
    qualification: 'MBBS, DM',
    experience: '14+ years',
    appointments: 480,
    status: 'Active',
    statusClass: 'badge-soft-success',
  },
];

const activeCount = doctors.filter((d) => d.status === 'Active').length;
const inactiveCount = doctors.length - activeCount;

const AllDoctorsList = () => {
  return (
    <>
      <div className="content doctors-list-page">
        <div className="d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Doctors</h4>
            <ol className="breadcrumb m-0 py-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Doctors</li>
            </ol>
          </div>

          <div className="doctors-list-toolbar d-flex align-items-center gap-2 flex-wrap">
            <div className="btn-group doctors-view-toggle" role="group" aria-label="Doctor view switcher">
              <Link to="/doctors" className="btn btn-icon btn-light" title="Grid View">
                <i className="ti ti-layout-grid"></i>
              </Link>
              <Link to="/all-doctors-list" className="btn btn-icon btn-primary shadow-sm" title="List View">
                <i className="ti ti-layout-list"></i>
              </Link>
            </div>
            <a href="#/" className="btn btn-icon btn-light d-inline-flex align-items-center justify-content-center" title="Refresh">
              <i className="ti ti-refresh"></i>
            </a>
            <a href="#/" className="btn btn-icon btn-light d-inline-flex align-items-center justify-content-center" title="Print">
              <i className="ti ti-printer"></i>
            </a>
            <a href="#/" className="btn btn-icon btn-light d-inline-flex align-items-center justify-content-center" title="Download">
              <i className="ti ti-cloud-download"></i>
            </a>
            <Link to="/add-doctors" className="btn btn-primary d-inline-flex align-items-center gap-2">
              <i className="ti ti-square-rounded-plus"></i>
              Add New Doctor
            </Link>
          </div>
        </div>

        <div className="card border-0 shadow-sm doctors-list-shell">
          <div className="card-body p-4 border-bottom doctors-list-hero">
            <div className="d-flex align-items-start justify-content-between gap-3 flex-wrap">
              <div>
                <div className="doctors-list-kicker mb-2">Doctor Directory</div>
                <h5 className="mb-2 fw-bold">Total Doctors</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="doctors-list-total">{doctors.length}</span>
                  <span className="doctors-list-subtitle">Medical professionals across specialties</span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 flex-wrap">
                <span className="doctors-list-stat-chip">
                  <span className="dot dot-green"></span>
                  Active {activeCount}
                </span>
                <span className="doctors-list-stat-chip">
                  <span className="dot dot-red"></span>
                  Inactive {inactiveCount}
                </span>
                <div className="dropdown">
                  <a href="#/" className="dropdown-toggle btn btn-outline-light doctors-list-sort" data-bs-toggle="dropdown">
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
              <table className="table table-modern doctors-list-table mb-0">
                <thead>
                  <tr>
                    <th>Doctor</th>
                    <th>ID</th>
                    <th>Department</th>
                    <th>Qualification</th>
                    <th>Experience</th>
                    <th>Appointments</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor) => (
                    <tr key={doctor.id}>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <Link to="/doctor-details" className="avatar avatar-md doctors-list-avatar flex-shrink-0">
                            <img src={`/assets/img/doctors/${doctor.img}`} alt={doctor.name} className="rounded" />
                          </Link>
                          <div>
                            <h6 className="mb-1 fs-14 fw-semibold">
                              <Link to="/doctor-details" className="text-decoration-none doctors-list-link-dark">
                                {doctor.name}
                              </Link>
                            </h6>
                            <p className="mb-0 doctors-list-muted">Medical practitioner</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Link to="/doctor-details" className="fw-semibold text-decoration-none">
                          {doctor.id}
                        </Link>
                      </td>
                      <td>
                        <span className="doctors-list-pill">{doctor.department}</span>
                      </td>
                      <td className="doctors-list-muted">{doctor.qualification}</td>
                      <td className="doctors-list-muted">{doctor.experience}</td>
                      <td className="doctors-list-appointments">{doctor.appointments}</td>
                      <td>
                        <span className={`badge doctors-list-badge ${doctor.statusClass}`}>
                          {doctor.status}
                        </span>
                      </td>
                      <td className="text-end">
                        <div className="dropdown">
                          <button className="btn doctors-list-action" data-bs-toggle="dropdown" aria-label="more options">
                            <i className="ti ti-dots-vertical"></i>
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-clean">
                            <li>
                              <Link to="/doctor-details" className="dropdown-item d-flex align-items-center gap-2">
                                <i className="ti ti-eye"></i>
                                View Details
                              </Link>
                            </li>
                            <li>
                              <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center gap-2">
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

export default AllDoctorsList;