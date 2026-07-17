import { Link } from 'react-router-dom';
import PatientDetailTabs from '../components/PatientDetailTabs';
import Footer from '../components/Footer';
import '../components/PatientDetailTabs.css';

const labResults = [
  { id: '#TE0025', date: '17 Jun 2025', doctor: 'Dr. Andrew Clark', doctorImg: 'doctor-01.jpg', test: 'Blood Test', status: 'Received', statusClass: 'badge-soft-success' },
  { id: '#TE0024', date: '10 Jun 2025', doctor: 'Dr. Katherine Brooks', doctorImg: 'doctor-03.jpg', test: 'Urinalysis', status: 'In Progress', statusClass: 'badge-soft-info' },
  { id: '#TE0023', date: '22 May 2025', doctor: 'Dr. Benjamin Harris', doctorImg: 'doctor-04.jpg', test: 'Throat Culture', status: 'Pending', statusClass: 'badge-soft-warning' },
  { id: '#TE0022', date: '15 May 2025', doctor: 'Dr. Laura Mitchell', doctorImg: 'doctor-05.jpg', test: 'Iron Panel', status: 'Received', statusClass: 'badge-soft-success' },
  { id: '#TE0021', date: '30 Apr 2025', doctor: 'Dr. Christopher Lewis', doctorImg: 'doctor-06.jpg', test: 'Vitamin D Test', status: 'In Progress', statusClass: 'badge-soft-info' },
  { id: '#TE0020', date: '25 Apr 2025', doctor: 'Dr. Natalie Foster', doctorImg: 'doctor-07.jpg', test: 'Liver Function Test', status: 'Pending', statusClass: 'badge-soft-warning' },
  { id: '#TE0019', date: '13 Mar 2025', doctor: 'Dr. Jonathan Adams', doctorImg: 'doctor-10.jpg', test: 'Thyroid Test', status: 'Received', statusClass: 'badge-soft-success' },
  { id: '#TE0018', date: '16 Feb 2025', doctor: 'Dr. Rebecca Scott', doctorImg: 'doctor-08.jpg', test: 'Lipid Panel', status: 'In Progress', statusClass: 'badge-soft-info' },
  { id: '#TE0017', date: '20 Jan 2025', doctor: 'Dr. Samuel Turner', doctorImg: 'doctor-12.jpg', test: 'Troponin Test', status: 'Pending', statusClass: 'badge-soft-warning' },
  { id: '#TE0016', date: '15 Jan 2025', doctor: 'Dr. Victoria Evans', doctorImg: 'doctor-11.jpg', test: 'Hepatitis Panel', status: 'Received', statusClass: 'badge-soft-success' },
];

const PatientDetailsLabResults = () => {
  return (
    <>
      <div className="content patient-detail-page">
        <div className="patient-detail-header d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-0 fw-semibold">Patient Details</h4>
            <ol className="breadcrumb m-0 py-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Lab Results</li>
            </ol>
          </div>
          <Link to="/patients" className="btn btn-light patient-detail-btn d-inline-flex align-items-center gap-1">
            <i className="ti ti-arrow-left"></i> Back to Patients
          </Link>
        </div>

        <PatientDetailTabs />

        <div className="card border-0 shadow-sm patient-detail-panel">
          <div className="card-header bg-transparent d-flex align-items-center flex-wrap gap-2 justify-content-between py-3 patient-detail-data-header">
            <h5 className="mb-0 fw-semibold d-inline-flex align-items-center gap-2">
              <i className="ti ti-flask text-primary"></i>
              Total Lab Results
              <span className="badge bg-primary rounded-pill fs-12">658</span>
            </h5>
            <div className="dropdown">
              <a href="#/" className="btn btn-sm btn-outline-light patient-detail-sort d-inline-flex align-items-center gap-1" data-bs-toggle="dropdown">
                <i className="ti ti-sort-descending-2"></i> Sort: Newest
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-clean p-1">
                <li><a href="#/" className="dropdown-item rounded-1">Newest</a></li>
                <li><a href="#/" className="dropdown-item rounded-1">Oldest</a></li>
              </ul>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-modern patient-detail-table mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-3">Test ID</th>
                    <th>Appointment Date</th>
                    <th>Referred By</th>
                    <th>Test Name</th>
                    <th>Status</th>
                    <th className="text-end pe-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {labResults.map((l, i) => (
                    <tr key={i}>
                      <td className="ps-3">
                        <a href="#/" className="fw-medium text-primary text-decoration-none" data-bs-toggle="modal" data-bs-target="#view_modal">
                          {l.id}
                        </a>
                      </td>
                      <td className="fs-13">{l.date}</td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <Link to="/doctor-details" className="avatar avatar-xs flex-shrink-0">
                            <img src={`/assets/img/doctors/${l.doctorImg}`} alt={l.doctor} className="rounded-circle" />
                          </Link>
                          <h6 className="fs-14 mb-0 fw-medium">
                            <Link to="/doctor-details" className="text-decoration-none text-dark">{l.doctor}</Link>
                          </h6>
                        </div>
                      </td>
                      <td className="fw-medium">{l.test}</td>
                      <td><span className={`badge ${l.statusClass}`}>{l.status}</span></td>
                      <td className="text-end pe-3">
                        <div className="table-actions d-inline-block">
                          <div className="dropdown d-inline-block">
                            <a href="#/" className="btn btn-icon btn-sm btn-outline-light" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical"></i></a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-clean p-1">
                              <li><a href="#/" className="dropdown-item rounded-1 d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#view_modal"><i className="ti ti-eye fs-15"></i>View Details</a></li>
                              <li><hr className="dropdown-divider" /></li>
                              <li><a href="#/" className="dropdown-item rounded-1 d-flex align-items-center gap-2 text-danger"><i className="ti ti-trash fs-15"></i>Delete</a></li>
                            </ul>
                          </div>
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

export default PatientDetailsLabResults;
