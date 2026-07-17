import { Link } from 'react-router-dom';
import PatientDetailTabs from '../components/PatientDetailTabs';
import Footer from '../components/Footer';
import '../components/PatientDetailTabs.css';

const illnesses = [
  { name: 'Throat Pain', date: '17 Jun 2025' },
  { name: 'Malaria', date: '10 Jun 2025' },
  { name: 'Fever', date: '22 May 2025' },
  { name: 'Headpain', date: '15 May 2025' },
  { name: 'Influenza', date: '30 Apr 2025' },
];

const PatientDetailsMedicalHistory = () => {
  return (
    <>
      <div className="content patient-detail-page">
        <div className="patient-detail-header d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-0 fw-semibold">Patient Details</h4>
            <ol className="breadcrumb m-0 py-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Medical History</li>
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
              <i className="ti ti-notes text-primary"></i>
              Medical History
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
                    <th className="ps-3">Illness Name</th>
                    <th>Illness Date</th>
                    <th className="text-end pe-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {illnesses.map((ill, i) => (
                    <tr key={i}>
                      <td className="ps-3">
                        <div className="d-flex align-items-center gap-2">
                          <span className="avatar avatar-sm bg-light text-dark rounded-2 d-inline-flex align-items-center justify-content-center">
                            <i className="ti ti-virus fs-15"></i>
                          </span>
                          <span className="fw-medium">{ill.name}</span>
                        </div>
                      </td>
                      <td className="fs-13">{ill.date}</td>
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

export default PatientDetailsMedicalHistory;
