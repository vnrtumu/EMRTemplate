const patientRecords = [
  { name: 'James Carter', gender: 'Male', dept: 'Cardiology', date: '17 Jun 2025' },
  { name: 'Emily Davis', gender: 'Female', dept: 'Urology', date: '10 Jun 2025' },
  { name: 'Michael John', gender: 'Male', dept: 'Radiology', date: '22 May 2025' },
  { name: 'Olivia Miller', gender: 'Female', dept: 'ENT Surgery', date: '15 May 2025' },
  { name: 'David Smith', gender: 'Male', dept: 'Dermatology', date: '30 Apr 2025' },
];

import { Link } from 'react-router-dom';
const PatientRecord = () => {
  return (
    <div className="card">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="card-title mb-0">Patient Record</h5>
        <Link to="/medical-results" className="btn btn-sm btn-light">View All</Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="thead-light">
              <tr>
                <th>Patient Name</th>
                <th>Diagnosis</th>
                <th>Department</th>
                <th>Last Visit</th>
              </tr>
            </thead>
            <tbody>
              {patientRecords.map((rec, i) => (
                <tr key={i}>
                  <td><a href="javascript:void(0);" className="fw-medium">{rec.name}</a></td>
                  <td>{rec.gender}</td>
                  <td>{rec.dept}</td>
                  <td>{rec.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientRecord;
