const latestAppointments = [
  { id: '#PT0025', patient: 'James Carter', session: 'Visit', doctor: 'Dr. Andrew Clark', doctorAvatar: 'doctor-01.jpg', avatar: 'avatar-31.jpg', date: '17 Jun 2025, 09:00 AM to 10:00 AM', status: 'Inprogress' },
  { id: '#PT0024', patient: 'Emily Davis', session: 'Consultation', doctor: 'Dr. Katherine Brooks', doctorAvatar: 'doctor-07.jpg', avatar: 'avatar-54.jpg', date: '10 Jun 2025, 10:30 AM to 11:30 AM', status: 'Inprogress' },
  { id: '#PT0023', patient: 'Michael Johnson', session: 'Visit', doctor: 'Dr. Benjamin Harris', doctorAvatar: 'doctor-12.jpg', avatar: 'avatar-38.jpg', date: '22 May 2025, 01:15 PM to 02:15 PM', status: 'Completed' },
  { id: '#PT0022', patient: 'Olivia Miller', session: 'Consultation', doctor: 'Dr. Laura Mitchell', doctorAvatar: 'doctor-03.jpg', avatar: 'avatar-43.jpg', date: '15 May 2025, 11:30 AM to 12:30 PM', status: 'Completed' },
  { id: '#PT0021', patient: 'David Smith', session: 'Consultation', doctor: 'Dr. Christopher Lewis', doctorAvatar: 'doctor-15.jpg', avatar: 'avatar-41.jpg', date: '30 Apr 2025, 12:20 PM to 01:20 PM', status: 'Completed' },
];

const statusBadge = {
  Inprogress: 'bg-warning',
  Completed: 'bg-success',
  Cancelled: 'bg-danger',
};

import { Link } from 'react-router-dom';
const LatestAppointments = () => {
  return (
    <div className="card">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="card-title mb-0">Latest Appointments</h5>
        <Link to="/appointments" className="btn btn-sm btn-light">View All</Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="thead-light">
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Session Type</th>
                <th>Doctor Name</th>
                <th>Date & Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {latestAppointments.map((apt, i) => (
                <tr key={i}>
                  <td><a href="javascript:void(0);">{apt.id}</a></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={`/assets/img/avatars/${apt.avatar}`} className="avatar-sm rounded-circle me-2" alt="" />
                      <span>{apt.patient}</span>
                    </div>
                  </td>
                  <td>{apt.session}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={`/assets/img/doctors/${apt.doctorAvatar}`} className="avatar-sm rounded-circle me-2" alt="" />
                      <span>{apt.doctor}</span>
                    </div>
                  </td>
                  <td>{apt.date}</td>
                  <td><span className={`badge ${statusBadge[apt.status] || 'bg-secondary'}`}>{apt.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestAppointments;
