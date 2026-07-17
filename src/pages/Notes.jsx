import { Link } from 'react-router-dom';
const Notes = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Notes</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none">Applications</a></li>
                            <li className="breadcrumb-item active">Notes</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print" data-bs-original-title="Print"><i className="ti ti-printer"></i></a>
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Download" data-bs-original-title="Download"><i className="ti ti-cloud-download"></i></a>
                </div>
            </div>
            

            <div className="card border-0 shadow-sm mb-0">
                <div className="card-body p-0">

                    <div className="row g-0">
                        <div className="col-lg-3 col-sm-4 d-flex">
                            <div className="border-end p-4 flex-fill">
                                <div>
                                    <div className="mb-3">
                                        <a href="#" className="btn btn-primary btn-lg w-100" data-bs-toggle="modal" data-bs-target="#add_note"><i className="ti ti-square-rounded-plus me-1"></i>Add Task</a>
                                    </div>
                                    <div className="border-bottom pb-3 mb-3">
                                        <div className="nav flex-column nav-pills">
                                            <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 bg-light rounded p-2 mb-1"><i className="ti ti-inbox me-2"></i>All Notes <span className="avatar avatar-xs ms-auto bg-danger rounded-circle">6</span></a>
                                            <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-star me-2"></i>Starred</a>
                                            <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-0"><i className="ti ti-trash me-2"></i>Trash</a>
                                            <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-0"><i className="ti ti-files me-2"></i>Draft</a>
                                        </div>
                                    </div>

                                    <div className="accordion accordion-flush custom-accordion" id="accordionFlushExample">

                                        
                                        <div className="accordion-item bg">
                                            <h2 className="accordion-header mb-0">
                                                <button className="accordion-button fw-semibold p-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Labels
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                                <div className="d-flex flex-column mt-3">
                                                    <a href="#/" className="d-flex align-items-center fw-medium mb-2"><i className="ti ti-point-filled text-success me-1 fs-18"></i>Low</a>
                                                    <a href="#/" className="d-flex align-items-center fw-medium mb-2"><i className="ti ti-point-filled text-warning me-1 fs-18"></i>Medium</a>
                                                    <a href="#/" className="d-flex align-items-center fw-medium"><i className="ti ti-point-filled text-danger fs-18 me-1"></i>High</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-sm-8 d-flex">
                            <div className="p-4 pt-0 pt-sm-4 pb-0 flex-fill">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-success">Low</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">Meeting with Product Team</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Discuss dashboard revamp and analytics tracking.</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-01.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-success">Low</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">Submit Quarterly Report</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Compile a comprehensive report for covering sales performance.

                                                    </p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star-filled text-warning"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-02.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-purple">Medium</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">Follow-up with HR</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap"> Review and verify the current onboarding status of all hires.

                                                    </p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star-filled text-warning"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-03.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-purple">Medium</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">Design Feedback Notes</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Adjust the form layout to reduce vertical and horizontal spacing</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star-filled text-warning"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-04.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-danger">High</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">Call Vendor Support</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap">The printer maintenance issue is still pending requires attention.</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-05.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-success">Low</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">Give me the staff guide</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap">The patient contacted us to request a rescheduling.</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-06.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-danger">High</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">Insurance Update</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap">We have received the updated insurance card from the patient.</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star-filled text-warning"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-07.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-purple">Medium</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">Staff Reminder</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap">A reminder was sent to the team regarding the scheduled meeting</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star-filled text-warning"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-08.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-danger">High</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">General Task Tracking</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Printer cartridges and paper stock have been ordered.</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-09.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-success">Low</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">Insurance Inquiry</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Patient called to check status of last insurance claim for lab tests.</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-10.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-danger">High</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">Maintenance Request</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Noted recurring jam in front desk printer. Called vendor support.</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-11.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                    <div className="col-xl-4 col-md-6 d-flex">
                                        <div className="card border-0 shadow-sm flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="badge bg-purple">Medium</span>
                                                    <div>
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_note"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-star me-1"></i>Not Important</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-1"></i>View</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a href="#/">Internal Task</a></h6>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Ordered toner, copy paper, and cleaning supplies.</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="#/" className="btn btn-icon btn-light">
                                                            <i className="ti ti-star"></i>
                                                        </a>
                                                        <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash"></i>
                                                        </a>
                                                    </div>
                                                    <a href="#/" className="avatar avatar-sm">
                                                        <img src="/assets/img/avatars/avatar-12.jpg" alt="Profile" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 

                                </div>
                            </div>
                            
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

export default Notes;
