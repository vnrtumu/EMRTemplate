import { Link } from 'react-router-dom';
const UserPermissionsSettings = () => {
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
                            <li className="breadcrumb-item active">Permissions</li>
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
                    <Link to="/user-permissions-settings" className="nav-link border rounded fw-semibold active">
                        User Permissions
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/plans-billings-settings" className="nav-link border rounded fw-semibold">
                        Plans & Billing
                    </Link>
                </li>
            </ul>
            

            
            <div className="card border-0 shadow-sm mb-0">
                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h5 className="d-inline-flex align-items-center mb-0">Total Roles<span className="badge bg-danger ms-2">6</span></h5>
                    <div>
                        <a href="#/" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#add_role"><i className="ti ti-square-rounded-plus me-1"></i>New Role</a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive table-nowrap">
                                                <table className="table border mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Role</th>
                                    <th>Created Date</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                                                    <tr>
                                        <td>Owner</td>
                                        <td>22 Jun 2025</td>
                                        <td>
                                                                                <span className="badge badge-soft-success">Active</span></td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_role"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                                <li>
                                                    <Link to="/permission-settings" className="dropdown-item d-flex align-items-center"><i className="ti ti-shield me-1"></i>Permissions</Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>Admin</td>
                                        <td>17 Jun 2025</td>
                                        <td>
                                                                                <span className="badge badge-soft-success">Active</span></td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_role"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                                <li>
                                                    <Link to="/permission-settings" className="dropdown-item d-flex align-items-center"><i className="ti ti-shield me-1"></i>Permissions</Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>Patient</td>
                                        <td>10 Jun 2025</td>
                                        <td>
                                                                                <span className="badge badge-soft-danger">Inactive</span></td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_role"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                                <li>
                                                    <Link to="/permission-settings" className="dropdown-item d-flex align-items-center"><i className="ti ti-shield me-1"></i>Permissions</Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>Doctor</td>
                                        <td>22 May 2025</td>
                                        <td>
                                                                                <span className="badge badge-soft-success">Active</span></td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_role"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                                <li>
                                                    <Link to="/permission-settings" className="dropdown-item d-flex align-items-center"><i className="ti ti-shield me-1"></i>Permissions</Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>Nurse</td>
                                        <td>15 May 2025</td>
                                        <td>
                                                                                <span className="badge badge-soft-danger">Inactive</span></td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_role"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                                <li>
                                                    <Link to="/permission-settings" className="dropdown-item d-flex align-items-center"><i className="ti ti-shield me-1"></i>Permissions</Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>Supervisor</td>
                                        <td>30 Apr 2025</td>
                                        <td>
                                                                                <span className="badge badge-soft-success">Active</span></td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_role"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                                <li>
                                                    <Link to="/permission-settings" className="dropdown-item d-flex align-items-center"><i className="ti ti-shield me-1"></i>Permissions</Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>Pharmasist</td>
                                        <td>15 Jan 2025</td>
                                        <td>
                                                                                <span className="badge badge-soft-danger">Inactive</span></td>
                                        <td className="text-end">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                            <ul className="dropdown-menu p-2">
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_role"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                                <li>
                                                    <Link to="/permission-settings" className="dropdown-item d-flex align-items-center"><i className="ti ti-shield me-1"></i>Permissions</Link>
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

export default UserPermissionsSettings;
