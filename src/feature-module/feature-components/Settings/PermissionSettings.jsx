import { Link } from 'react-router-dom';
const PermissionSettings = () => {
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
            


            
            <div className="card mb-4">
                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                    <h5 className="mb-0">Main</h5>
                    <div className="d-flex align-items-center gap-2">
                        <input className="form-check-input mt-0" type="checkbox" id="select-all" />
                        <label htmlFor="select-all">Allow All</label>
                    </div>
                </div>
                <div className="card-body">

                    <div className="table-responsive table-nowrap">
                        <table className="table border mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="w-50">Module</th>
                                    <th>Create</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>View</th>
                                    <th>Allow All</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Patients</td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Doctors</td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Visits</td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Requests</td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Appointments</td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Laboratory</td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Messages</td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Contacts</td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Notifications</td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            
            <div className="card select-group2">
                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                    <h5 className="mb-0">Medical</h5>
                    <div className="d-flex align-items-center gap-2">
                        <input className="form-check-input selectall2 mt-0" type="checkbox" id="allow-02" />
                        <label htmlFor="allow-02">Allow All</label>
                    </div>
                </div>
                <div className="card-body">

                    <div className="table-responsive table-nowrap">
                        <table className="table border mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="w-50">Module</th>
                                    <th>Create</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>View</th>
                                    <th>Allow All</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lab Results</td>
                                    <td>
                                        <div className="form-check2">
                                            <input className="form-check-input form-check-md2" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check2">
                                            <input className="form-check-input form-check-md2" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check2">
                                            <input className="form-check-input form-check-md2" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check2">
                                            <input className="form-check-input form-check-md2" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check2">
                                            <input className="form-check-input form-check-md2" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Medical Records</td>
                                    <td>
                                        <div className="form-check2">
                                            <input className="form-check-input form-check-md2" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md2" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md2" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md2" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md2" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 
            </div> 

            
            <div className="card mb-0 select-group3">
                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                    <h5 className="mb-0">Manage</h5>
                    <div className="d-flex align-items-center gap-2">
                        <input className="form-check-input selectall3 mt-0" type="checkbox" id="allow-01" />
                        <label htmlFor="allow-01">Allow All</label>
                    </div>
                </div>
                <div className="card-body">

                    <div className="table-responsive table-nowrap">
                        <table className="table border mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="w-50">Module</th>
                                    <th>Create</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>View</th>
                                    <th>Allow All</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pharmacy</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check form-check-md3">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Staffs</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Settings</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" checked="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input form-check-md3" type="checkbox" />
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div> 
            </div> 

            <div className="d-flex align-items-center justify-content-end gap-2 border-top mt-4 pt-3">
                <a href="#" className="btn btn-white"> Cancel</a>
                <a href="#" className="btn btn-primary"> Save Changes</a>
            </div>
        </div>
        

            
    <footer className="footer text-center">
        <p className="mb-0 text-dark"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default PermissionSettings;
