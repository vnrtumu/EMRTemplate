import { Link } from 'react-router-dom';
const AppearanceSettings = () => {
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
                            <li className="breadcrumb-item active">Appearence</li>
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
                    <Link to="/preferences-settings" className="nav-link border rounded fw-semibold">
                        Preferences
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/appearance-settings" className="nav-link border rounded fw-semibold active">
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
                        <h5 className="mb-0 pt-2">Appearance</h5>
                    </div>

                    <div className="card-body">

                        
                        <div className="row align-items-center mb-4">
                            <div className="col-xl-7 col-md-4">
                                <div className="mb-3 ">
                                    <h6 className="mb-1 fs-14 fw-medium">Select Theme</h6>
                                    <span className="fs-13">Choose theme of website</span>
                                </div>
                            </div> 

                            <div className="col-xl-5 col-md-8">
                                
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <div className="card theme-image mb-lg-0">
                                            <div className="card-body p-2">
                                                <a href="#">
                                                    <div className="border rounded border-gray mb-2">
                                                        <img src="/assets/img/theme/light.jpg" className="img-fluid rounded w-100" alt="theme" />
                                                    </div>
                                                    <p className="text-center fw-medium mb-0 fs-13 text-primary">Light</p>
                                                </a>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-md-4">
                                        <div className="card theme-image  mb-lg-0">
                                            <div className="card-body p-2">
                                                <a href="#">
                                                    <div className="border rounded border-gray mb-2">
                                                        <img src="/assets/img/theme/dark.jpg" className="img-fluid rounded w-100" alt="theme" />
                                                    </div>
                                                    <p className="text-center fw-medium mb-0 fs-13 text-primary">Dark</p>
                                                </a>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-md-4">
                                        <div className="card theme-image  mb-lg-0">
                                            <div className="card-body p-2">
                                                <a href="#">
                                                    <div className="border rounded border-gray mb-2">
                                                        <img src="/assets/img/theme/automatic.jpg" className="img-fluid rounded w-100" alt="theme" />
                                                    </div>
                                                    <p className="text-center fw-medium mb-0 fs-13 text-primary">Automatic</p>
                                                </a>
                                            </div> 
                                        </div> 
                                    </div> 
                                </div>
                                
                            </div> 
                        </div>
                        

                        
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-md-4">
                                <div className="mb-4">
                                    <h6 className="mb-1 fs-14 fw-medium">Accent Color</h6>
                                    <span className="fs-13">Choose accent colour of website</span>
                                </div>
                            </div> 

                            <div className="col-xl-5 col-md-8">
                                <div className="d-flex align-items-center justify-content-xl-end justify-content-start flex-wrap mb-4 gap-2">
                                    <div className="theme-colorsset">
                                        <input type="radio" name="color" id="primarycolor" defaultChecked />
                                        <label htmlFor="primarycolor" className="primary-clr"></label>
                                    </div>
                                    <div className="theme-colorsset">
                                        <input type="radio" name="color" id="secondarycolor" />
                                        <label htmlFor="secondarycolor" className="secondary-clr"></label>
                                    </div>
                                    <div className="theme-colorsset">
                                        <input type="radio" name="color" id="successcolor" />
                                        <label htmlFor="successcolor" className="success-clr"></label>
                                    </div>
                                    <div className="theme-colorsset">
                                        <input type="radio" name="color" id="dangercolor" />
                                        <label htmlFor="dangercolor" className="danger-clr"></label>
                                    </div>
                                    <div className="theme-colorsset">
                                        <input type="radio" name="color" id="infocolor" />
                                        <label htmlFor="infocolor" className="info-clr"></label>
                                    </div>
                                    <div className="theme-colorsset">
                                        <input type="radio" name="color" id="warningcolor" />
                                        <label htmlFor="warningcolor" className="warning-clr"></label>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        

                        
                        <div className="row align-items-centergap-lg-0 gap-md-0 gap-2 mb-4">
                            <div className="col-xl-9 col-md-4">
                                <div>
                                    <h6 className="mb-1 fs-14 fw-medium">Expand Sidebar</h6>
                                    <span className="fs-13">Choose expand sidebar</span>
                                </div>
                            </div> 

                            <div className="col-xl-3 col-md-4 d-flex align-items-center justify-content-xl-end">
                                <label className="d-flex align-items-center justify-content-xl-end form-switch ps-2">
                                    <input className="form-check-input m-0 me-2" type="checkbox" defaultChecked />
                                </label>
                            </div> 
                        </div>
                        

                        
                        <div className="row align-items-centergap-lg-0 gap-md-0 gap-2 mb-4">
                            <div className="col-xl-9 col-md-4">
                                <div>
                                    <h6 className="mb-1 fs-14 fw-medium">Timezone</h6>
                                    <span className="fs-13">Select timezone to display</span>
                                </div>
                            </div> 

                            <div className="col-xl-3 col-md-4">
                                <div>
                                    <select className="select text-dark">
                                        <option>Pacific Standard Time - UTC -8</option>
                                        <option>Eastern Standard Time - UTC -5</option>
                                        <option>Central Standard Time - UTC -6</option>
                                        <option>India Standard Time - UTC +5:30</option>
                                        <option>Central European Time - UTC +1</option>
                                    </select>
                                </div>
                            </div> 
                        </div>
                        

                        
                        <div className="row align-items-centergap-lg-0 gap-md-0 gap-2 mb-4">
                            <div className="col-xl-9 col-md-4">
                                <div>
                                    <h6 className="mb-1 fs-14 fw-medium">Language</h6>
                                    <span className="fs-13">Select language to display</span>
                                </div>
                            </div> 

                            <div className="col-xl-3 col-md-4">
                                <div>
                                    <select className="select">
                                        <option>English (US)</option>
                                        <option>German (DE)</option>
                                        <option>French (FR)</option>
                                    </select>
                                </div>
                            </div> 
                        </div>
                        

                        
                        <div className="row align-items-centergap-lg-0 gap-md-0 gap-2 mb-4">
                            <div className="col-xl-9 col-md-4">
                                <div>
                                    <h6 className="mb-1 fs-14 fw-medium">Sidebar Size</h6>
                                    <span className="fs-13">Choose expand sidebary</span>
                                </div>
                            </div> 

                            <div className="col-xl-3 col-md-4">
                                <select className="select">
                                    <option>Small (252px)</option>
                                    <option>Medium - 250px</option>
                                    <option>Large - 300px</option>
                                </select>
                            </div> 
                        </div>
                        

                        
                        <div className="row align-items-centergap-lg-0 gap-md-0 gap-2 mb-0">
                            <div className="col-xl-9 col-md-4">
                                <div>
                                    <h6 className="mb-1 fs-14 fw-medium">Font Family</h6>
                                    <span className="fs-13">Select font family of website</span>
                                </div>
                            </div> 

                            <div className="col-xl-3 col-md-4">
                                <select className="select">
                                    <option> Mulish </option>
                                    <option>Roboto</option>
                                    <option>Popins</option>
                                </select>
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

export default AppearanceSettings;
