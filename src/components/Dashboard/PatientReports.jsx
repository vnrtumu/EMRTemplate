const reports = [
  { name: 'David Marshall', test: 'Hemoglobin' },
  { name: 'Thomas McLean', test: 'X Ray' },
  { name: 'Greta Kinney', test: 'MRI Scan' },
  { name: 'Larry Wilburn', test: 'Blood Test' },
  { name: 'Reyan Verol', test: 'CT Scan' },
];

import { Link } from 'react-router-dom';
const PatientReports = () => {
  return (
    <div className="card">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="card-title mb-0">Patient Reports</h5>
        <Link to="/lab-results" className="btn btn-sm btn-light">View All</Link>
      </div>
      <div className="card-body">
        {reports.map((rep, i) => (
          <div key={i} className="d-flex align-items-center justify-content-between mb-3">
            <div>
              <p className="mb-0 fw-medium">{rep.name}</p>
              <span className="fs-12">{rep.test}</span>
            </div>
            <a href="javascript:void(0);"><i className="ti ti-download"></i></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientReports;
