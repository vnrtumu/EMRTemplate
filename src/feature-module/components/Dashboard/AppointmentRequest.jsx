import { Link } from 'react-router-dom';

const appointments = [
  { name: 'Dominic Foster', date: '12 Aug 2025 11:35 PM', dept: 'Urology', avatar: 'avatar-23.jpg' },
  { name: 'Charlotte Bennett', date: '06 Aug 2025 09:58 AM', dept: 'Cardiology', avatar: 'avatar-08.jpg' },
  { name: 'Ethan Sullivan', date: '01 Aug 2025 12:10 PM', dept: 'Dermatology', avatar: 'avatar-21.jpg' },
  { name: 'Brianna Thompson', date: '26 Jul 2025 08:20 AM', dept: 'ENT Surgery', avatar: 'avatar-55.jpg' },
  { name: 'Braun Tucker', date: '23 Jul 2025 10:30 AM', dept: 'Radiology', avatar: 'avatar-28.jpg' },
];

const AppointmentRequest = () => {
  return (
    <div className="card">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="card-title mb-0">Appointment Request</h5>
        <Link to="/appointments" className="btn btn-sm btn-light">All Appointments</Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="thead-light">
              <tr>
                <th>Patient</th>
                <th>Department</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt, i) => (
                <tr key={i}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={`/assets/img/avatars/${apt.avatar}`} className="avatar-sm rounded-circle me-2" alt="" />
                      <div>
                        <p className="mb-0 fw-medium">{apt.name}</p>
                        <span className="fs-12">{apt.date}</span>
                      </div>
                    </div>
                  </td>
                  <td>{apt.dept}</td>
                  <td className="text-end">
                    <a href="javascript:void(0);" className="btn btn-sm btn-light"><i className="ti ti-chevron-right"></i></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentRequest;
