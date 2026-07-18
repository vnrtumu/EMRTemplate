import { Link } from 'react-router-dom';
const Doctors = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div>
                    <h4 className="mb-1 fw-bold">Doctors</h4>
                    <ol className="breadcrumb m-0 py-0 mt-1">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item active">Doctors</li>
                    </ol>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <Link to="/doctors" className="btn btn-icon btn-white active d-inline-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Grid" data-bs-original-title="Grid View"><i className="ti ti-layout-grid"></i></Link>
                    <Link to="/all-doctors-list" className="btn btn-icon btn-white d-inline-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="List" data-bs-original-title="List View"><i className="ti ti-layout-list"></i></Link>
                    <a href="#/" className="btn btn-icon btn-white d-inline-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
                    <a href="#/" className="btn btn-icon btn-white d-inline-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print" data-bs-original-title="Print"><i className="ti ti-printer"></i></a>
                    <a href="#/" className="btn btn-icon btn-white d-inline-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Download" data-bs-original-title="Download"><i className="ti ti-cloud-download"></i></a>
                    <Link to="/add-doctors" className="btn btn-primary d-inline-flex align-items-center gap-2"><i className="ti ti-square-rounded-plus"></i>Add New Doctor</Link>
                </div>
            </div>
            

            
            <div className="row row-gap-4 justify-content-center">
                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0025</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical"></i></a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-01.jpg" alt="doctor" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details" className="text-decoration-none">Dr. Andrew Clark</Link></h6>
                                <span className="doctor-specialty">Anesthesiologist</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">4+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">200</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>andrew@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 75964 25493</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0024</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical"></i></a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-03.jpg" alt="doctor" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details" className="text-decoration-none">Dr. Katherine Brooks</Link></h6>
                                <span className="doctor-specialty">Periodontist</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">3+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">350</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>katherine@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 75964 25493</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0023</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical"></i></a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-04.jpg" alt="doctor" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details" className="text-decoration-none">Dr. Benjamin Harris</Link></h6>
                                <span className="doctor-specialty">Dermatopathologist</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">6+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">400</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>benjamin@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 83217 65984</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0022</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-05.jpg" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details">Dr. Laura Mitchell</Link></h6>
                                <span className="doctor-specialty">ENT Surgeon</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">2+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">150</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>laura@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 91745 36289</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0021</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-06.jpg" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details">Dr. Christopher Lewis</Link></h6>
                                <span className="doctor-specialty">Medicine Physician</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">3+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">380</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>christopher@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 68429 15736</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0020</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-07.jpg" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details">Dr. Natalie Foster</Link></h6>
                                <span className="doctor-specialty">Ophthalmologist</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">2+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">450</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>natalie@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 52637 94820</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0019</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-10.jpg" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details">Dr. Jonathan Adams</Link></h6>
                                <span className="doctor-specialty">Orthopedic Surgeon</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">3+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">330</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>jonathan@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 39842 76521</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0018</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-08.jpg" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details">Dr. Rebecca Scott</Link></h6>
                                <span className="doctor-specialty">Pediatrics</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">2+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">270</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>rebecca@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 27590 31468</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0017</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-12.jpg" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details">Dr. Samuel Turner</Link></h6>
                                <span className="doctor-specialty">Radiologist</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">4+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">510</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>samuel@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 61957 84230</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0016</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-11.jpg" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details">Dr. Victoria Evans</Link></h6>
                                <span className="doctor-specialty">Cardiologist</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">3+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">480</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>victoria@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 84736 50912</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0015</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-12.jpg" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details">Dr. Daniel Foster</Link></h6>
                                <span className="doctor-specialty">Ophthalmologist</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">5+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">460</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>daniel@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 70325 67849</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xxl-3 col-xl-4 col-lg-6 d-flex">
                    <div className="card doctor-card border-0 flex-fill w-100 mb-0">
                        <div className="card-body">
                            <div className="doctor-header">
                                <span className="doctor-badge">#DR0014</span>
                                <a href="#/" className="btn btn-icon btn-sm" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link to="/doctor-details" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-doctors" className="dropdown-item d-flex align-items-center"><i className="ti ti-edit me-1"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="doctor-avatar">
                                <Link to="/doctor-details">
                                    <img src="/assets/img/doctors/doctor-03.jpg" className="avatar avatar-xl" />
                                </Link>
                                <h6 className="doctor-name"><Link to="/doctor-details">Dr. Amelia Scott</Link></h6>
                                <span className="doctor-specialty">Nephrologist</span>
                            </div>
                            <div className="doctor-stats">
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Experience</span>
                                    <p className="doctor-stat-value">3+ Years</p>
                                </div>
                                <div className="doctor-stat-item">
                                    <span className="doctor-stat-label">Appointments</span>
                                    <p className="doctor-stat-value">220</p>
                                </div>
                            </div>
                            <p className="doctor-contact"><i className="ti ti-mail"></i>amelia@example.com</p>
                            <p className="doctor-contact"><i className="ti ti-phone"></i>+1 56214 89375</p>
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

export default Doctors;
