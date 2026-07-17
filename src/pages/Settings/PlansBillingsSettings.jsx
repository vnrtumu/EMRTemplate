import { Link } from 'react-router-dom';
const PlansBillingsSettings = () => {
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
                            <li className="breadcrumb-item active">Plan & Billings</li>
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
                    <Link to="/plans-billings-settings" className="nav-link border rounded fw-semibold active">
                        Plans & Billing
                    </Link>
                </li>
            </ul>
            

            
            <h5 className="mb-4">Plans & Billing</h5>

            
            <div className="mb-4">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <h6 className="mb-0"> Current Plan Information </h6>
                </div>
                <div className="rounded border bg-white p-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                        <h6 className="fw-medium mb-1">Basic Plan</h6>
                        <p className="mb-0"> <i className="ti ti-clock"></i> 20 Days Left </p>
                    </div>
                    <a href="#" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#upgrade"> <i className="ti ti-shield-star me-1"></i> Upgrade</a>
                </div>
            </div>

            
            <div className="mb-4 pb-4 border-bottom">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <h6 className="mb-0"> Saved Cards </h6>
                    <a href="#" className="btn btn-dark d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#new_modal"> <i className="ti ti-plus me-1"></i>  New Card</a>
                </div>

                
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow-none mb-lg-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center flex-wrap row-gap-2 mb-3">
                                    <a href="#/" className="me-2 flex-shrink-0">
                                        <img src="/assets/img/icons/payment-img-1.svg" className="img-fluid" alt="payment" />
                                    </a>
                                    <div>
                                        <p className="fw-normal fs-14x mb-0 text-body">James Peterson</p>
                                        <span className="fs-14 text-dark fw-medium">Visa •••• 1568</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                                    <a href="#/" className="btn btn-sm btn-success fs-12">Default</a>
                                    <div className="d-flex align-items-center">
                                        <a href="#/" className="btn btn-icon border rounded-circle me-2 bg-light" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit text-body"></i></a>
                                        <a href="#/" className="btn btn-icon border rounded-circle bg-light" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash text-body"></i></a>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div>  

                    <div className="col-lg-4">
                        <div className="card shadow-none mb-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center flex-wrap row-gap-2 mb-3">
                                    <a href="#/" className="me-2 flex-shrink-0">
                                        <img src="/assets/img/icons/payment-img-2.svg" className="img-fluid" alt="payment" />
                                    </a>
                                    <div>
                                        <p className="fw-normal fs-14x mb-0 text-body">Raymond Rowley</p>
                                        <span className="fs-14 text-dark fw-medium">Mastercard •••• 1279</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                                    <a href="#/" className="text-decoration-underline fs-14 fw-medium text-primary">Set as Default</a>
                                    <div className="d-flex align-items-center">
                                        <a href="#/" className="btn btn-icon border rounded-circle me-2 bg-light" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit text-body"></i></a>
                                        <a href="#/" className="btn btn-icon border rounded-circle bg-light" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash text-body"></i></a>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div>  
                </div>
                
            </div>

            
            <div>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <h5 className="mb-0"> Billing History <span className="badge bg-danger rounded ms-1">6</span></h5>
                </div>
                <div className="table-responsive table-nowrap">
                                        <table className="table border mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Invoice ID</th>
                                <th>Created Date</th>
                                <th>Amount</th>
                                <th>Plan</th>
                                <th>Status</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                                                            <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_details"> #IV0020 </a></td>
                                    <td>22 Jun 2025</td>
                                    <td>$299</td>
                                    <td>Basic</td>
                                    <td>
                                                                                <span className="badge badge-soft-success border fs-13">Success</span>
                                    </td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-sm btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_details"><i className="ti ti-shield me-1"></i>View Details</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                                            <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_details"> #IV0019 </a></td>
                                    <td>10 Jun 2025</td>
                                    <td>$399</td>
                                    <td>Standard</td>
                                    <td>
                                                                                <span className="badge badge-soft-success border fs-13">Success</span>
                                    </td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-sm btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_details"><i className="ti ti-shield me-1"></i>View Details</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                                            <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_details"> #IV0018 </a></td>
                                    <td>22 May 2025</td>
                                    <td>$499</td>
                                    <td>Professional</td>
                                    <td>
                                                                                <span className="badge badge-soft-success border fs-13">Success</span>
                                    </td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-sm btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_details"><i className="ti ti-shield me-1"></i>View Details</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                                            <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_details"> #IV0017 </a></td>
                                    <td>15 May 2025</td>
                                    <td>$355</td>
                                    <td>Basic</td>
                                    <td>
                                                                                <span className="badge badge-soft-success border fs-13">Success</span>
                                    </td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-sm btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_details"><i className="ti ti-shield me-1"></i>View Details</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                                            <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_details"> #IV0016 </a></td>
                                    <td>05 May 2025</td>
                                    <td>$499</td>
                                    <td>Standard</td>
                                    <td>
                                                                                <span className="badge badge-soft-success border fs-13">Success</span>
                                    </td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-sm btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_details"><i className="ti ti-shield me-1"></i>View Details</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                                    </tbody>
                    </table>
                </div> 
            </div>
            

        </div>
        

            
    <footer className="footer text-center">
        <p className="mb-0 text-dark"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default PlansBillingsSettings;
