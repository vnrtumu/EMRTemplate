import { Link } from 'react-router-dom';
import PatientDetailTabs from '../components/PatientDetailTabs';
import Footer from '../components/Footer';
import '../components/PatientDetailTabs.css';

const insurances = [
  { policy: 'MED-INS-87452', provider: 'United Healthcare', plan: 'Gold Plan', coverage: '$150,000', start: '01 Jan 2025', expiry: '31 Dec 2025', status: 'Active', statusClass: 'badge-soft-success' },
  { policy: 'MED-INS-96541', provider: 'Cigna', plan: 'Silver Plan', coverage: '$100,000', start: '15 Feb 2025', expiry: '20 Oct 2025', status: 'Expired', statusClass: 'badge-soft-danger' },
  { policy: 'MED-INS-78563', provider: 'Aetna Health', plan: 'Family Plan', coverage: '$200,000', start: '01 Jan 2025', expiry: '31 Dec 2025', status: 'Active', statusClass: 'badge-soft-success' },
  { policy: 'MED-INS-45789', provider: 'United Healthcare', plan: 'Premium Plan', coverage: '$250,000', start: '02 Feb 2025', expiry: '31 Dec 2025', status: 'Active', statusClass: 'badge-soft-success' },
  { policy: 'MED-INS-36954', provider: 'Aetna Health', plan: 'Basic Plan', coverage: '$75,000', start: '06 Sep 2025', expiry: '06 Nov 2025', status: 'Expiring Soon', statusClass: 'badge-soft-orange' },
];

const PatientDetailsInsurance = () => {
  return (
    <>
      <div className="content patient-detail-page">
        <div className="patient-detail-header d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-0 fw-semibold">Patient Details</h4>
            <ol className="breadcrumb m-0 py-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Insurance</li>
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
              <i className="ti ti-shield-check text-primary"></i>
              Insurance
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
                    <th className="ps-3">Policy No</th>
                    <th>Insurance Provider</th>
                    <th>Plan Type</th>
                    <th>Coverage Amount</th>
                    <th>Start Date</th>
                    <th>Expiry Date</th>
                    <th>Status</th>
                    <th className="text-end pe-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {insurances.map((ins, i) => (
                    <tr key={i}>
                      <td className="ps-3">
                        <a href="#/" className="fw-medium text-primary text-decoration-none">{ins.policy}</a>
                      </td>
                      <td className="fw-medium">{ins.provider}</td>
                      <td>{ins.plan}</td>
                      <td className="fw-medium">{ins.coverage}</td>
                      <td className="fs-13">{ins.start}</td>
                      <td className="fs-13">{ins.expiry}</td>
                      <td><span className={`badge ${ins.statusClass}`}>{ins.status}</span></td>
                      <td className="text-end pe-3">
                        <a href="#/" className="btn btn-icon btn-sm btn-outline-light" data-bs-toggle="modal" data-bs-target="#delete_modal" aria-label="delete">
                          <i className="ti ti-trash"></i>
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

export default PatientDetailsInsurance;
