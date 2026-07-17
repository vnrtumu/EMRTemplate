import { Link } from 'react-router-dom';
const MedicalResults = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Medical Results</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item active">Medical Results</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print" data-bs-original-title="Print"><i className="ti ti-printer"></i></a>
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Download" data-bs-original-title="Download"><i className="ti ti-cloud-download"></i></a>
                </div>
            </div>
            

            
            <div className="card border-0 shadow-sm border-0 shadow-sm mb-0">
                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h6 className="d-inline-flex align-items-center mb-0">Total Medical Results<span className="badge bg-danger ms-2">658</span></h6>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                        <div className="dropdown">
                            <a href="#/" className="dropdown-toggle btn btn-md btn-outline-light d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i className="ti ti-sort-descending-2 me-1"></i><span className="me-1">Sort By : </span> Newest
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
                        <table className="table mb-0 border">
                            <thead className="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Patient Name</th>
                                    <th className="no-sort">Gender</th>
                                    <th>Record</th>
                                    <th className="no-sort">Appointment Date</th>
                                    <th className="no-sort"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_modal">#MR0025</a></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                <img src="/assets/img/avatars/avatar-31.jpg" alt="patient" className="rounded" />
                                            </Link>
                                            <div>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">James Carter</Link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Male</td>
                                    <td>Blood Report</td>
                                    <td>17 Jun 2025</td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_modal"><i className="ti ti-eye me-1"></i>View Details</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_modal">#MR0024</a></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                <img src="/assets/img/avatars/avatar-54.jpg" alt="patient" className="rounded" />
                                            </Link>
                                            <div>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">Emily Davis</Link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Female</td>
                                    <td>X-ray</td>
                                    <td>10 Jun 2025</td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_modal"><i className="ti ti-eye me-1"></i>View Details</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_modal">#MR0023</a></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                <img src="/assets/img/avatars/avatar-45.jpg" alt="patient" className="rounded" />
                                            </Link>
                                            <div>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">Michael Johnson</Link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Male</td>
                                    <td>Glucose Report</td>
                                    <td>22 May 2025</td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_modal"><i className="ti ti-eye me-1"></i>View Details</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_modal">#MR0022</a></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                <img src="/assets/img/avatars/avatar-51.jpg" alt="patient" className="rounded" />
                                            </Link>
                                            <div>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">Olivia Miller</Link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Female</td>
                                    <td>CT Scan</td>
                                    <td>15 May 2025</td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_modal"><i className="ti ti-eye me-1"></i>View Details</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_modal">#MR0021</a></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                <img src="/assets/img/avatars/avatar-41.jpg" alt="patient" className="rounded" />
                                            </Link>
                                            <div>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">David Smith</Link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Male</td>
                                    <td>Angiogram Record</td>
                                    <td>30 Apr 2025</td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_modal"><i className="ti ti-eye me-1"></i>View Details</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_modal">#MR0020</a></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                <img src="/assets/img/avatars/avatar-48.jpg" alt="patient" className="rounded" />
                                            </Link>
                                            <div>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">Sophia Wilson</Link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Female</td>
                                    <td>MRI Scan</td>
                                    <td>25 Apr 2025</td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_modal"><i className="ti ti-eye me-1"></i>View Details</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_modal">#MR0019</a></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                <img src="/assets/img/avatars/avatar-53.jpg" alt="patient" className="rounded" />
                                            </Link>
                                            <div>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">Daniel Williams</Link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Male</td>
                                    <td>PET Scan</td>
                                    <td>13 Mar 2025</td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_modal"><i className="ti ti-eye me-1"></i>View Details</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_modal">#MR0018</a></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                <img src="/assets/img/avatars/avatar-50.jpg" alt="patient" className="rounded" />
                                            </Link>
                                            <div>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">Isabella Anderson</Link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Female</td>
                                    <td>Doppler Report</td>
                                    <td>16 Feb 2025</td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_modal"><i className="ti ti-eye me-1"></i>View Details</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_modal">#MR0017</a></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                <img src="/assets/img/avatars/avatar-42.jpg" alt="patient" className="rounded" />
                                            </Link>
                                            <div>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">William Brown</Link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Male</td>
                                    <td>MRA Scan</td>
                                    <td>20 Jan 2025</td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_modal"><i className="ti ti-eye me-1"></i>View Details</a>
                                            </li>
                                            <li>
                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#view_modal">#MR0016</a></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient-details" className="avatar avatar-xs me-2">
                                                <img src="/assets/img/avatars/avatar-56.jpg" alt="patient" className="rounded" />
                                            </Link>
                                            <div>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">Charlotte Taylor</Link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Female</td>
                                    <td>Echocardiogram Report</td>
                                    <td>15 Jan 2025</td>
                                    <td className="text-end">
                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <a href="#" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_modal"><i className="ti ti-eye me-1"></i>View Details</a>
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

export default MedicalResults;
