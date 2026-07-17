import { Link } from 'react-router-dom';
const Notifications = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Notifications</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item active">Notifications</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
                </div>
            </div>
            

            <div className="card border-0 shadow-sm mb-0">
                <div className="card-header d-flex align-items-center flex-wrap gap-3 justify-content-between">
                    <h5 className="d-inline-flex align-items-center mb-0">Notifications<span className="badge bg-danger ms-2">04</span></h5>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <a href="#/" className="btn btn-outline-light"><i className="ti ti-checks me-1"></i>Mark all as read</a>
                        <a href="#/" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete All</a>
                    </div>
                </div>
                <div className="card-body">

                    
                    <div className="card border-0 shadow-sm notication-card mb-3">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div className="d-flex align-items-center">
                                    <Link to="/patient-details" className="avatar flex-shrink-0">
                                        <img src="/assets/img/avatars/avatar-28.jpg" alt="patient" className="rounded-circle" />
                                    </Link>
                                    <div className="ms-2">
                                        <div>
                                            <p className="mb-1"><Link to="/patient-details" className="fw-medium">John Doe</Link> added new  patient <Link to="/appointments" className="fw-medium">appointment booking</Link></p>
                                            <p className="fs-12 mb-0 d-inline-flex align-items-center"><i className="ti ti-clock me-1"></i> 4 min ago<span className="ms-2"><i className="ti ti-point-filled text-danger fs-16 lh-sm"></i></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="noti-btn">
                                    <a href="#/" className="btn btn-danger d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="card border-0 shadow-sm notication-card mb-3">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div className="d-flex align-items-center">
                                    <Link to="/patient-details" className="avatar flex-shrink-0">
                                        <img src="/assets/img/avatars/avatar-30.jpg" alt="patient" className="rounded-circle" />
                                    </Link>
                                    <div className="ms-2">
                                        <div>
                                            <p className="mb-1"><Link to="/patient-details" className="fw-medium">Thomas William</Link> booked a new appointment.</p>
                                            <p className="fs-12 mb-0 d-inline-flex align-items-center"><i className="ti ti-clock me-1"></i> 15 min ago<span className="ms-2"><i className="ti ti-point-filled text-danger fs-16 lh-sm"></i></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="noti-btn">
                                    <a href="#/" className="btn btn-danger d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="card border-0 shadow-sm notication-card mb-3">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div className="d-flex align-items-center">
                                    <Link to="/patient-details" className="avatar flex-shrink-0">
                                        <img src="/assets/img/avatars/avatar-29.jpg" alt="patient" className="rounded-circle" />
                                    </Link>
                                    <div className="ms-2">
                                        <div>
                                            <p className="mb-1"><Link to="/patient-details" className="fw-medium">Sarah Anderson</Link> has been successfully booked for <span className="text-dark fw-medium">April 5 at 10:00 AM.</span></p>
                                            <p className="fs-12 mb-0 d-inline-flex align-items-center"><i className="ti ti-clock me-1"></i> 45 Min Ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="noti-btn">
                                    <a href="#/" className="btn btn-danger d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="card border-0 shadow-sm notication-card mb-0">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div className="d-flex align-items-center">
                                    <Link to="/patient-details" className="avatar flex-shrink-0">
                                        <img src="/assets/img/avatars/avatar-31.jpg" alt="patient" className="rounded-circle" />
                                    </Link>
                                    <div className="ms-2">
                                        <div>
                                            <p className="mb-1"><Link to="/patient-details" className="fw-medium">Ann McClure</Link> cancelled her appointment scheduled for <span className="text-dark fw-medium">February 5, 2024</span></p>
                                            <p className="fs-12 mb-0 d-inline-flex align-items-center"><i className="ti ti-clock me-1"></i> 58 Min Ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="noti-btn">
                                    <a href="#/" className="btn btn-danger d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            


        </div>
        

            
    <footer className="footer text-center">
        <p className="mb-0 text-dark"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default Notifications;
