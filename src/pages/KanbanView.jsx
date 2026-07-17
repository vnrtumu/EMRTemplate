import { Link } from 'react-router-dom';
const KanbanView = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Kanban</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none">Applications</a></li>
                            <li className="breadcrumb-item active">Kanban</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print" data-bs-original-title="Print"><i className="ti ti-printer"></i></a>
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Download" data-bs-original-title="Download"><i className="ti ti-cloud-download"></i></a>
                </div>
            </div>
            

            <div className="d-flex gap-3 align-items-start overflow-auto project-status" data-plugin="dragula" data-containers='["drag-one", "drag-two", "drag-three", "drag-four"]'>

                <div className="card border-0 shadow-sm flex-fill flex-shrink-0 mb-0">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 d-flex align-items-center">To Do<span className="badge ms-2 bg-danger rounded-circle count-circle">2</span></h5>
                        <a href="#" className="btn btn-icon btn-light"><i className="ti ti-plus"></i></a>
                    </div>
                    <div className="card-body">
                        <div className="kanban-drag" id="drag-one">

                            <div className="card border-0 shadow-sm kanban-card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <span className="badge bg-success">Low</span>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_task"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h6 className="mb-2">Settings Page</h6>
                                    <p className="mb-3">Implement the settings page to manage <br /> user preferences</p>
                                    <span className="d-block mb-1">Progress : 0%</span>
                                    <div className="progress progress-sm flex-grow-1 mb-3">
                                        <div className="progress-bar rounded" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="avatar-list-stacked avatar-group-sm me-3">
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-10.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-08.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-07.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-02.jpg" alt="user" />
                                            </span>
                                            <a href="#" className="avatar avatar-rounded bg-dark fs-12 text-white">5+</a>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <a href="#/" className="d-flex align-items-center me-2"><i className="ti ti-message me-1"></i>0</a>
                                            <a href="#/" className="d-flex align-items-center"><i className="ti ti-paperclip me-1"></i>0</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 shadow-sm kanban-card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <span className="badge bg-warning">Medium</span>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_task"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h6 className="mb-2">Applications Page</h6>
                                    <p className="mb-3">Implement the Applications pages to <br /> manage tools for seamless productivity.</p>
                                    <span className="d-block mb-1">Progress : 0%</span>
                                    <div className="progress progress-sm flex-grow-1 mb-3">
                                        <div className="progress-bar rounded" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="avatar-list-stacked avatar-group-sm me-3">
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-13.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-14.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-15.jpg" alt="user" />
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <a href="#/" className="d-flex align-items-center me-2"><i className="ti ti-message me-1"></i>0</a>
                                            <a href="#/" className="d-flex align-items-center"><i className="ti ti-paperclip me-1"></i>0</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="pt-2">
                            <a href="#" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#add-task">
                                <i className="ti ti-square-rounded-plus me-2"></i> New Task
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm flex-fill flex-shrink-0 mb-0">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 d-flex align-items-center">In Progress<span className="badge ms-2 bg-danger rounded-circle count-circle">3</span></h5>
                        <a href="#" className="btn btn-icon btn-light"><i className="ti ti-plus"></i></a>
                    </div>
                    <div className="card-body">
                        <div className="kanban-drag" id="drag-two">

                            <div className="card border-0 shadow-sm kanban-card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <span className="badge bg-warning">Medium</span>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_task"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h6 className="mb-2">Error Pages</h6>
                                    <p className="mb-3">Design and integrate custom error pages <br /> for user experience during issues.</p>
                                    <span className="d-block mb-1">Progress : 40%</span>
                                    <div className="progress progress-sm flex-grow-1 mb-3">
                                        <div className="progress-bar bg-indigo rounded" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 40%"></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="avatar-list-stacked avatar-group-sm me-3">
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-10.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-08.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-07.jpg" alt="user" />
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <a href="#/" className="d-flex align-items-center me-2"><i className="ti ti-message me-1"></i>08</a>
                                            <a href="#/" className="d-flex align-items-center"><i className="ti ti-paperclip me-1"></i>03</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 shadow-sm kanban-card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <span className="badge bg-success">Low</span>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_task"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h6 className="mb-2">UI Pages</h6>
                                    <p className="mb-3">Develop and refine UI pages to ensure a <br /> user-friendly and intuitive interface</p>
                                    <span className="d-block mb-1">Progress : 70%</span>
                                    <div className="progress progress-sm flex-grow-1 mb-3">
                                        <div className="progress-bar rounded bg-orange" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="avatar-list-stacked avatar-group-sm me-3">
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-20.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-21.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-22.jpg" alt="user" />
                                            </span>
                                            <a href="#" className="avatar avatar-rounded bg-dark fs-12 text-white">4+</a>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <a href="#/" className="d-flex align-items-center me-2"><i className="ti ti-message me-1"></i>10</a>
                                            <a href="#/" className="d-flex align-items-center"><i className="ti ti-paperclip me-1"></i>06</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 shadow-sm kanban-card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <span className="badge bg-danger">High</span>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_task"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h6 className="mb-2">Customizer</h6>
                                    <p className="mb-3">Build a customizer panel to allow users to <br /> personalize layout, theme, and UI settings </p>
                                    <span className="d-block mb-1">Progress : 50%</span>
                                    <div className="progress progress-sm flex-grow-1 mb-3">
                                        <div className="progress-bar rounded bg-info" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="avatar-list-stacked avatar-group-sm me-3">
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-23.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-24.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-25.jpg" alt="user" />
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <a href="#/" className="d-flex align-items-center me-2"><i className="ti ti-message me-1"></i>12</a>
                                            <a href="#/" className="d-flex align-items-center"><i className="ti ti-paperclip me-1"></i>04</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="pt-2">
                            <a href="#" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#add-task">
                                <i className="ti ti-square-rounded-plus me-2"></i> New Task
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm flex-fill flex-shrink-0 mb-0">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 d-flex align-items-center">Completed<span className="badge ms-2 bg-danger rounded-circle count-circle">2</span></h5>
                        <a href="#" className="btn btn-icon btn-light"><i className="ti ti-plus"></i></a>
                    </div>
                    <div className="card-body">
                        <div className="kanban-drag" id="drag-three">

                            <div className="card border-0 shadow-sm kanban-card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <span className="badge bg-success">Low</span>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_task"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h6 className="mb-2">Dashboard</h6>
                                    <p className="mb-3">Create an interactive dashboard to display <br /> key metrics and system summaries</p>
                                    <span className="d-block mb-1">Progress : 100%</span>
                                    <div className="progress progress-sm flex-grow-1 mb-3">
                                        <div className="progress-bar bg-success rounded" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="avatar-list-stacked avatar-group-sm me-3">
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-10.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-08.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-07.jpg" alt="user" />
                                            </span>
                                            <a href="#" className="avatar avatar-rounded bg-dark fs-12 text-white">5+</a>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <a href="#/" className="d-flex align-items-center me-2"><i className="ti ti-message me-1"></i>15</a>
                                            <a href="#/" className="d-flex align-items-center"><i className="ti ti-paperclip me-1"></i>12</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 shadow-sm kanban-card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <span className="badge bg-warning">Medium</span>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_task"><i className="ti ti-edit me-1"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#/" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h6 className="mb-2">Authentication Pages</h6>
                                    <p className="mb-3">Develop authentication pages including <br /> login, registration & password management</p>
                                    <span className="d-block mb-1">Progress : 100%</span>
                                    <div className="progress progress-sm flex-grow-1 mb-3">
                                        <div className="progress-bar rounded bg-success" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="avatar-list-stacked avatar-group-sm me-3">
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-25.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-26.jpg" alt="user" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img src="/assets/img/avatars/avatar-27.jpg" alt="user" />
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <a href="#/" className="d-flex align-items-center me-2"><i className="ti ti-message me-1"></i>10</a>
                                            <a href="#/" className="d-flex align-items-center"><i className="ti ti-paperclip me-1"></i>06</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="pt-2">
                            <a href="#" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#add-task">
                                <i className="ti ti-square-rounded-plus me-2"></i> New Task
                            </a>
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

export default KanbanView;
