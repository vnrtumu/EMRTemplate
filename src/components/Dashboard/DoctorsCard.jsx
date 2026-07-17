const doctors = [
  { name: 'Dr. William Harrison', specialty: 'Cardiology', avatar: 'doctor-01.jpg', available: true },
  { name: 'Dr. Victoria Adams', specialty: 'Urology', avatar: 'doctor-11.jpg', available: false },
  { name: 'Dr. Jonathan Bennett', specialty: 'Radiology', avatar: 'doctor-06.jpg', available: true },
  { name: 'Dr. Natalie Brooks', specialty: 'ENT Surgery', avatar: 'doctor-07.jpg', available: true },
  { name: 'Dr. Samuel Reed', specialty: 'Dermatology', avatar: 'doctor-12.jpg', available: true },
];

import { Link } from 'react-router-dom';
const DoctorsCard = () => {
  return (
    <div className="card">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="card-title mb-0">Doctors</h5>
        <Link to="/doctors" className="btn btn-sm btn-light">View All</Link>
      </div>
      <div className="card-body">
        {doctors.map((doc, i) => (
          <div key={i} className="d-flex align-items-center mb-3">
            <img src={`/assets/img/doctors/${doc.avatar}`} className="avatar-md rounded-2 me-2" alt="" />
            <div className="flex-grow-1">
              <p className="mb-0 fw-medium">{doc.name}</p>
              <span className="fs-12">{doc.specialty}</span>
            </div>
            <span className={`badge ${doc.available ? 'bg-success' : 'bg-danger'} bg-opacity-10 ${doc.available ? 'text-success' : 'text-danger'}`}>
              {doc.available ? 'Available' : 'Unavailable'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsCard;
