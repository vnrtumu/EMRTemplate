import { Link } from 'react-router-dom';
const Staffs = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Staffs</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item active">Staffs</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print" data-bs-original-title="Print"><i className="ti ti-printer"></i></a>
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Download" data-bs-original-title="Download"><i className="ti ti-cloud-download"></i></a>
                    <a href="#/" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#add_staff"><i className="ti ti-square-rounded-plus me-1"></i>New Staff</a>
                </div>
            </div>
            

            
            <div className="card border-0 shadow-sm border-0 shadow-sm mb-0">
                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h5 className="d-inline-flex align-items-center mb-0">Total Staffs<span className="badge bg-danger ms-2">600</span></h5>
                    <div className="d-flex align-items-center">
                        
                        <div className="dropdown">
                            <a href="#/" className="dropdown-toggle btn btn-md btn-outline-light d-inline-flex align-items-center" data-bs-toggle="dropdown">
                            <i className="ti ti-sort-descending-2 me-1"></i><span className="me-1">Sort By : </span>  Newest
                            </a>
                            <ul className="dropdown-menu  dropdown-menu-end p-2">
                                <li>
                                    <a href="#/" className="dropdown-item rounded-1">Newest</a>
                                </li>
                                <li>
                                    <a href="#/" className="dropdown-item rounded-1">Oldest</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive table-nowrap">
                                                <table className="table border mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Staff ID</th>
                                    <th>Staff Name</th>
                                    <th className="no-sort">Gender</th>
                                    <th className="no-sort">Designation</th>
                                    <th className="no-sort">Phone Number</th>
                                    <th>Email</th>
                                    <th className="no-sort">Appointment Date</th>
                                    <th className="no-sort"></th>
                                </tr>
                            </thead>
                            <tbody>
                                                                    <tr>
                                        <td><a href="#/">#SF0025</a></td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                    <img src="/assets/img/avatars/avatar-31.jpg" alt="staff" className="rounded" />
                                                </Link>
                                                <div>
                                                    <h6 className="fs-14 mb-0 fw-medium"><a href="#/">Benjamin Clark</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Male</td>
                                        <td>Compounder</td>
                                        <td>+1 81934 71892</td>
                                        <td>benjamin@example.com</td>
                                        <td>17 Jun 2025</td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_staff"><i className="ti ti-eye me-1"></i>View Details</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_staff"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td><a href="#/">#SF0024</a></td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                    <img src="/assets/img/avatars/avatar-29.jpg" alt="staff" className="rounded" />
                                                </Link>
                                                <div>
                                                    <h6 className="fs-14 mb-0 fw-medium"><a href="#/">Charlotte Hayes</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Female</td>
                                        <td>Nurse</td>
                                        <td>+1 48912 78015</td>
                                        <td>charlotte@example.com</td>
                                        <td>10 Jun 2025</td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_staff"><i className="ti ti-eye me-1"></i>View Details</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_staff"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td><a href="#/">#SF0023</a></td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                    <img src="/assets/img/avatars/avatar-30.jpg" alt="staff" className="rounded" />
                                                </Link>
                                                <div>
                                                    <h6 className="fs-14 mb-0 fw-medium"><a href="#/">Anthony Foster</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Male</td>
                                        <td>Purchase Officer</td>
                                        <td>+1 61397 47103</td>
                                        <td>anthony@example.com</td>
                                        <td>22 May 2025</td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_staff"><i className="ti ti-eye me-1"></i>View Details</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_staff"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td><a href="#/">#SF0022</a></td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                    <img src="/assets/img/avatars/avatar-33.jpg" alt="staff" className="rounded" />
                                                </Link>
                                                <div>
                                                    <h6 className="fs-14 mb-0 fw-medium"><a href="#/">Isabella Morgan</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Female</td>
                                        <td>Supervisor</td>
                                        <td>+1 84910 67381</td>
                                        <td>isabella@example.com</td>
                                        <td>15 May 2025</td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_staff"><i className="ti ti-eye me-1"></i>View Details</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_staff"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td><a href="#/">#SF0021</a></td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                    <img src="/assets/img/avatars/avatar-34.jpg" alt="staff" className="rounded" />
                                                </Link>
                                                <div>
                                                    <h6 className="fs-14 mb-0 fw-medium"><a href="#/">William Turner</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Male</td>
                                        <td>Nurse</td>
                                        <td>+1 19047 89036</td>
                                        <td>william@example.com</td>
                                        <td>30 Apr 2025</td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_staff"><i className="ti ti-eye me-1"></i>View Details</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_staff"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td><a href="#/">#SF0020</a></td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                    <img src="/assets/img/avatars/avatar-43.jpg" alt="staff" className="rounded" />
                                                </Link>
                                                <div>
                                                    <h6 className="fs-14 mb-0 fw-medium"><a href="#/">Amanda Richardson</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Female</td>
                                        <td>Receptionist</td>
                                        <td>+1 71289 45017</td>
                                        <td>amanda@example.com</td>
                                        <td>25 Apr 2025</td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_staff"><i className="ti ti-eye me-1"></i>View Details</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_staff"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td><a href="#/">#SF0019</a></td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                    <img src="/assets/img/avatars/avatar-36.jpg" alt="staff" className="rounded" />
                                                </Link>
                                                <div>
                                                    <h6 className="fs-14 mb-0 fw-medium"><a href="#/">Nathaniel Lewis</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Male</td>
                                        <td>Lab Assistant</td>
                                        <td>+1 57109 25913</td>
                                        <td>nathaniel@example.com</td>
                                        <td>13 Mar 2025</td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_staff"><i className="ti ti-eye me-1"></i>View Details</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_staff"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td><a href="#/">#SF0018</a></td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                    <img src="/assets/img/avatars/avatar-48.jpg" alt="staff" className="rounded" />
                                                </Link>
                                                <div>
                                                    <h6 className="fs-14 mb-0 fw-medium"><a href="#/">Katherine Stewart</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Female</td>
                                        <td>Pharmacist</td>
                                        <td>+1 56193 61902</td>
                                        <td>katherine@example.com</td>
                                        <td>16 Feb 2025</td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_staff"><i className="ti ti-eye me-1"></i>View Details</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_staff"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td><a href="#/">#SF0017</a></td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                    <img src="/assets/img/avatars/avatar-38.jpg" alt="staff" className="rounded" />
                                                </Link>
                                                <div>
                                                    <h6 className="fs-14 mb-0 fw-medium"><a href="#/">Eric Patterson</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Male</td>
                                        <td>Nurse</td>
                                        <td>+1 89105 78103</td>
                                        <td>eric@example.com</td>
                                        <td>20 Jan 2025</td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_staff"><i className="ti ti-eye me-1"></i>View Details</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_staff"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td><a href="#/">#SF0016</a></td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                    <img src="/assets/img/avatars/avatar-52.jpg" alt="staff" className="rounded" />
                                                </Link>
                                                <div>
                                                    <h6 className="fs-14 mb-0 fw-medium"><a href="#/">Lauren Simmons</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Female</td>
                                        <td>Lab Technician</td>
                                        <td>+1 78103 78591</td>
                                        <td>lauren@example.com</td>
                                        <td>15 Jan 2025</td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_staff"><i className="ti ti-eye me-1"></i>View Details</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_staff"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                            </tbody>
                        </table>
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

export default Staffs;
