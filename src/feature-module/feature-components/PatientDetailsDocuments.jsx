import { Link } from 'react-router-dom';
import PatientDetailTabs from '../components/PatientDetailTabs';
import Footer from '../components/Footer';
import '../components/PatientDetailTabs.css';

const documents = [
  { name: 'Radiology Report', date: '17 Jun 2025' },
  { name: 'Lab - Blood Test', date: '10 Jun 2025' },
  { name: 'Laboratory Report', date: '22 May 2025' },
  { name: 'Lab - Hepatitis', date: '15 May 2025' },
  { name: 'Operative Report', date: '30 Apr 2025' },
];

const PatientDetailsDocuments = () => {
  return (
    <>
      <div className="content patient-detail-page">
        <div className="patient-detail-header d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-0 fw-semibold">Patient Details</h4>
            <ol className="breadcrumb m-0 py-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Documents</li>
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
              <i className="ti ti-file-text text-primary"></i>
              Documents
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
                    <th className="ps-3">Document Name</th>
                    <th>Date</th>
                    <th className="text-end pe-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, i) => (
                    <tr key={i}>
                      <td className="ps-3">
                        <div className="d-flex align-items-center gap-2">
                          <span className="avatar avatar-sm bg-primary-soft text-primary rounded-2 d-inline-flex align-items-center justify-content-center">
                            <i className="ti ti-file-description fs-15"></i>
                          </span>
                          <span className="fw-medium">{doc.name}</span>
                        </div>
                      </td>
                      <td className="fs-13">{doc.date}</td>
                      <td className="text-end pe-3">
                        <a href="#/" className="btn btn-icon btn-sm btn-outline-light" data-bs-toggle="tooltip" title="Download">
                          <i className="ti ti-download"></i>
                        </a>
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

export default PatientDetailsDocuments;
