import { Link } from 'react-router-dom';
const AppointmentCalendar = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Calendar</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/appointments">Appointments</Link></li>
                            <li className="breadcrumb-item active">Calendar</li>
                        </ol>
                    </div>
                </div>
                <div>
                    <div className="input-icon input-icon-start position-relative">
                        <span className="input-icon-addon"><i className="ti ti-search"></i></span>
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                </div>
            </div>
            

            <div className="card border-0 shadow-sm border-0 shadow-sm mb-0">
                <div className="card-body">
                    <div id="calendar-appointment"></div>
                </div>
            </div>

        </div>
        

            
    <footer className="footer text-center">
        <p className="mb-0 text-dark"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default AppointmentCalendar;
