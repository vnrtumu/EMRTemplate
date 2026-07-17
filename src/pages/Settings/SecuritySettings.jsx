import { Link } from 'react-router-dom';
const SecuritySettings = () => {
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
                            <li className="breadcrumb-item active">Security</li>
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
                    <Link to="/security-settings" className="nav-link border rounded fw-semibold active">
                        Security
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/preferences-settings" className="nav-link border rounded fw-semibold">
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
                        <h5 className="mb-0 pt-2">Security</h5>
                    </div>

                    <div className="card-body">
                        
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="avatar avatar-lg border bg-light flex-shrink-0">
                                    <i className="ti ti-lock-check text-dark fs-24"></i>
                                </span>
                                <div>
                                    <h6 className="fw-semibold fs-14 mb-1">Password</h6>
                                    <p className="mb-0">Set a unique password to secure the account</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="badge badge-soft-purple me-2">Last Changed, Mar 18, 2025</span>
                                <a href="#/" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#change_password">Edit</a>
                            </div>
                        </div>

                        
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="avatar avatar-lg border bg-light">
                                    <i className="ti ti-shield-half text-dark fs-24"></i>
                                </span>
                                <div>
                                    <h6 className="fw-semibold fs-14 mb-1">Two Factor authentication</h6>
                                    <p className="mb-0">Use your mobile phone to receive security PIN.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-wrap">
                                <span className="badge badge-soft-purple">Enabled, Mar 18, 2025</span>
                                <label className="d-flex align-items-center form-switch ps-2">
                                    <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                                </label>
                                <a href="#/" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#two-factor">Configure</a>
                            </div>
                        </div>

                        
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="avatar avatar-lg border bg-light">
                                    <i className="ti ti-brand-google-filled text-dark fs-24"></i>
                                </span>
                                <div>
                                    <h6 className="fw-semibold fs-14 mb-1">Google Authentication</h6>
                                    <p className="mb-0">Connect to Google</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-wrap">
                                <span className="badge badge-soft-success">Connected</span>
                                <label className="d-flex align-items-center form-switch ps-2">
                                    <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                                </label>
                            </div>
                        </div>

                        
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="avatar avatar-lg border bg-light">
                                    <i className="ti ti-phone text-dark fs-24"></i>
                                </span>
                                <div>
                                    <h6 className="fw-semibold fs-14 mb-1">Phone Number</h6>
                                    <p className="mb-0">Phone Number associated with the account</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="badge badge-soft-success">Verified</span>
                                <a href="#/" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#change_phonenumber">Edit</a>
                                <a href="#/" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                            </div>
                        </div>

                        
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="avatar avatar-lg border bg-light">
                                    <i className="ti ti-mail text-dark fs-24"></i>
                                </span>
                                <div>
                                    <h6 className="fw-semibold fs-14 mb-1">Email Address</h6>
                                    <p className="mb-0">Email Address associated with the account</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="badge badge-soft-success">Verified</span>
                                <a href="#/" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#change_email">Edit</a>
                                <a href="#/" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                            </div>
                        </div>

                        
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="avatar avatar-lg border bg-light">
                                    <i className="ti ti-device-laptop text-dark fs-24"></i>
                                </span>
                                <div>
                                    <h6 className="fw-semibold fs-14 mb-1">Browsers & Devices</h6>
                                    <p className="mb-0">The browsers & devices associated with the account</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <a href="#/" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#browse_device">Edit</a>
                                <a href="#/" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                            </div>
                        </div>

                        
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="avatar avatar-lg border bg-light">
                                    <i className="ti ti-xbox-x text-dark fs-24"></i>
                                </span>
                                <div>
                                    <h6 className="fw-semibold fs-14 mb-1">Deactivate Account</h6>
                                    <p className="mb-0">This will shutdown your account. Your account will be reactive when you sign in again</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <a href="#/" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#deactivate_account">Deactivate</a>
                            </div>
                        </div>

                        
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="avatar avatar-lg border bg-light">
                                    <i className="ti ti-trash text-dark fs-24"></i>
                                </span>
                                <div>
                                    <h6 className="fw-semibold fs-14 mb-1">Delete Account</h6>
                                    <p className="mb-0">Your account will be permanently deleted</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <a href="#/" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#delete_account">Delete</a>
                            </div>
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

export default SecuritySettings;
