import { Link } from 'react-router-dom';
const PreferencesSettings = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Settings</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
<li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                             <li className="breadcrumb-item"><Link to="/general-settings" className="text-decoration-none">Settings</Link></li>
                            <li className="breadcrumb-item active">Preferences</li>
                        </ol>
                    </div>
                </div>
            </div>
            

            
            <ul className="nav nav-tabs nav-item-primary mb-3 border-bottom pb-4 mb-4 d-flex align-items-center gap-2">
                <li className="nav-item">
                    <Link to="/general-settings" className="nav-link border rounded fw-semibold">
                        General
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/security-settings" className="nav-link border rounded fw-semibold">
                        Security
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/preferences-settings" className="nav-link border rounded fw-semibold active">
                        Preferences
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/appearance-settings" className="nav-link border rounded fw-semibold">
                        Appearance
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/notifications-settings" className="nav-link border rounded fw-semibold">
                        Notifications
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/user-permissions-settings" className="nav-link border rounded fw-semibold">
                        User Permissions
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/plans-billings-settings" className="nav-link border rounded fw-semibold">
                        Plans & Billing
                    </Link>
                </li>
            </ul>
            

            
            <form>
                <div className="card border-0 shadow-sm mb-0">
                    <div className="card-header border-0 pb-1">
                        <h5 className="mb-0 pt-2">Preferences</h5>
                    </div>

                    <div className="card-body">
                        
                        <div className="row row-gap-4">
                            <div className="col-xxl-4 col-xl-4 col-sm-6">
                                <div className="d-flex justify-content-between align-items-center border rounded bg-light p-3">
                                    <h6 className="fw-semibold mb-0 fs-14">Patients</h6>
                                    <div className="form-check form-switch m-0 d-flex align-items-center">
                                        <input className="form-check-input m-0" type="checkbox" checked="" />
                                    </div>
                                </div>
                            </div> 

                            <div className="col-xxl-4 col-xl-4 col-sm-6">
                                <div className="d-flex justify-content-between align-items-center border rounded bg-light p-3">
                                    <h6 className="fw-semibold mb-0 fs-14">Doctors</h6>
                                    <div className="form-check form-switch m-0 d-flex align-items-center">
                                        <input className="form-check-input m-0" type="checkbox" checked="" />
                                    </div>
                                </div>
                            </div> 

                            <div className="col-xxl-4 col-xl-4 col-sm-6">
                                <div className="d-flex justify-content-between align-items-center border rounded bg-light p-3">
                                    <h6 className="fw-semibold mb-0 fs-14">Visits</h6>
                                    <div className="form-check form-switch m-0 d-flex align-items-center">
                                        <input className="form-check-input m-0" type="checkbox" checked="" />
                                    </div>
                                </div>
                            </div> 

                            <div className="col-xxl-4 col-xl-4 col-sm-6">
                                <div className="d-flex justify-content-between align-items-center border rounded bg-light p-3">
                                    <h6 className="fw-semibold mb-0 fs-14">Appointments</h6>
                                    <div className="form-check form-switch m-0 d-flex align-items-center">
                                        <input className="form-check-input m-0" type="checkbox" checked="" />
                                    </div>
                                </div>
                            </div> 

                            <div className="col-xxl-4 col-xl-4 col-sm-6">
                                <div className="d-flex justify-content-between align-items-center border rounded bg-light p-3">
                                    <h6 className="fw-semibold mb-0 fs-14">Laboratory</h6>
                                    <div className="form-check form-switch m-0 d-flex align-items-center">
                                        <input className="form-check-input m-0" type="checkbox" checked="" />
                                    </div>
                                </div>
                            </div> 

                            <div className="col-xxl-4 col-xl-4 col-sm-6">
                                <div className="d-flex justify-content-between align-items-center border rounded bg-light p-3">
                                    <h6 className="fw-semibold mb-0 fs-14">Lab Results</h6>
                                    <div className="form-check form-switch m-0 d-flex align-items-center">
                                        <input className="form-check-input m-0" type="checkbox" checked="" />
                                    </div>
                                </div>
                            </div> 

                            <div className="col-xxl-4 col-xl-4 col-sm-6">
                                <div className="d-flex justify-content-between align-items-center border rounded bg-light p-3">
                                    <h6 className="fw-semibold mb-0 fs-14">Medical Records</h6>
                                    <div className="form-check form-switch m-0 d-flex align-items-center">
                                        <input className="form-check-input m-0" type="checkbox" checked="" />
                                    </div>
                                </div>
                            </div> 

                            <div className="col-xxl-4 col-xl-4 col-sm-6">
                                <div className="d-flex justify-content-between align-items-center border rounded bg-light p-3">
                                    <h6 className="fw-semibold mb-0 fs-14">Pharmacy</h6>
                                    <div className="form-check form-switch m-0 d-flex align-items-center">
                                        <input className="form-check-input m-0" type="checkbox" checked="" />
                                    </div>
                                </div>
                            </div> 

                            <div className="col-xxl-4 col-xl-4 col-sm-6">
                                <div className="d-flex justify-content-between align-items-center border rounded bg-light p-3">
                                    <h6 className="fw-semibold mb-0 fs-14">Staffs</h6>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input m-0" type="checkbox" checked="" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                        
                        <div className="d-flex align-items-center justify-content-end gap-2 border-top mt-4 pt-3">
                            <button type="button" className="btn btn-outline-light me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </form>
            

        </div>
        

            
    <footer className="footer text-center">
        <p className="mb-0 text-dark"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default PreferencesSettings;
