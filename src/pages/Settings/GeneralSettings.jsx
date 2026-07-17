import { Link } from 'react-router-dom';
const GeneralSettings = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Settings</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item active">Settings</li>
                        </ol>
                    </div>
                </div>
            </div>
            

            
            <ul className="nav nav-tabs nav-item-primary mb-3 border-bottom pb-4 mb-4 d-flex align-items-center gap-2">
                <li className="nav-item">
                    <Link to="/general-settings" className="nav-link border rounded fw-semibold active">
                        General
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/security-settings" className="nav-link border rounded fw-semibold">
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
                        <h5 className="mb-0 pt-2">Personal Information</h5>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Profile Image<span className="text-danger ms-1">*</span>  </label>
                            <div className="d-flex align-items-center flex-wrap gap-3">
                                <div className="flex-shrink-0">
                                    <div className="position-relative d-flex align-items-center border rounded">
                                        <img src="/assets/img/avatars/avatar-44.jpg" className="avatar avatar-xxl" alt="patient" />
                                    </div>
                                </div>
                                <div className="d-inline-flex flex-column align-items-start">
                                    <div className="d-inline-flex align-items-start gap-2">
                                        <div className="drag-upload-btn btn btn-dark position-relative mb-2">
                                            <i className="ti ti-arrows-exchange-2 me-1"></i>Change Image
                                            <input type="file" className="form-control image-sign" multiple="" />
                                        </div>
                                        <div>
                                            <a href="#/" className="btn btn-dangerd-flex align-items-center gap-1"> <i className="ti ti-trash"></i>  Remove</a>
                                        </div>
                                    </div>
                                    <span className="fs-13 text-body">Use JPEG, PNG, or GIF. Best size: 200x200 pixels. Keep it under 5MB</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom mb-3 pb-3 justify-content-center">
                            
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="mb-3 mb-lg-0">
                                        <label className="form-label">Hospital Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div> 

                                <div className="col-xl-4 col-md-6">
                                    <div className="mb-3 mb-lg-0">
                                        <label className="form-label">Email</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div> 

                                <div className="col-xl-4 col-md-6">
                                    <div className="mb-0 w-100">
                                        <label className="form-label d-block">Mobile Number</label>
                                        <input type="text" className="form-control w-100" name="phone" />
                                    </div>
                                </div> 
                            </div>
                            
                        </div>

                        <div className="border-bottom mb-3">
                            <h5 className="mb-3">Address</h5>
                            
                            <div className="row">

                                <div className="col-xl-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Address Line 1</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div> 

                                <div className="col-xl-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Address Line 2</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div> 

                                <div className="col-xl-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Pincode</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div> 

                                <div className="col-xl-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Country</label>
                                        <select className="select">
                                            <option>Select</option>
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Germany</option>
                                            <option>France</option>
                                        </select>
                                    </div>
                                </div> 

                                <div className="col-xl-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">State</label>
                                        <select className="select">
                                            <option>Select</option>
                                            <option>California</option>
                                            <option>New York</option>
                                            <option>Texas</option>
                                            <option>Florida</option>
                                        </select>
                                    </div>
                                </div> 

                                <div className="col-xl-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">City</label>
                                        <select className="select">
                                            <option>Select</option>
                                            <option>Los Angeles</option>
                                            <option>San Diego</option>
                                            <option>Fresno</option>
                                            <option>San Francisco</option>
                                        </select>
                                    </div>
                                </div> 


                            </div>
                            
                        </div>

                        <div className="d-flex align-items-center justify-content-end gap-2">
                            <a href="#" className="btn btn-white"> Cancel</a>
                            <a href="#" className="btn btn-primary"> Save Changes</a>
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

export default GeneralSettings;
