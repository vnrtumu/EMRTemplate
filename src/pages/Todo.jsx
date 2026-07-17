import { Link } from 'react-router-dom';
const Todo = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">To Do</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none">Applications</a></li>
                            <li className="breadcrumb-item active">To Do</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print" data-bs-original-title="Print"><i className="ti ti-printer"></i></a>
                </div>
            </div>
            

            <div className="card border-0 shadow-sm mb-0">
                <div className="card-body p-0">

                    <div className="row g-0">
                        <div className="col-lg-3 col-sm-4 d-flex">
                            <div className="border-end p-4 flex-fill">
                                <div>
                                    <div className="mb-3">
                                        <a href="#" className="btn btn-primary btn-lg w-100" data-bs-toggle="modal" data-bs-target="#add_todo"><i className="ti ti-square-rounded-plus me-1"></i>Add Task</a>
                                    </div>
                                    <div className="border-bottom pb-3 mb-3">
                                        <div className="nav flex-column nav-pills">
                                            <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 bg-light rounded p-2 mb-1"><i className="ti ti-inbox me-2"></i>All Tasks <span className="avatar avatar-xs ms-auto bg-danger rounded-circle">6</span></a>
                                            <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-star me-2"></i>Starred</a>
                                            <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-0"><i className="ti ti-trash me-2"></i>Trash</a>
                                        </div>
                                    </div>

                                    <div className="accordion accordion-flush custom-accordion" id="accordionFlushExample">

                                        
                                        <div className="accordion-item mb-3 pb-3">
                                            <h2 className="accordion-header mb-0">
                                                <button className="accordion-button fw-semibold p-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Priority
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

                                        
                                        <div className="accordion-item border-0">
                                            <h2 className="accordion-header mb-0">
                                                <button className="accordion-button fw-semibold p-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Categories
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="d-flex flex-column mt-3">
                                                    <a href="#/" className="d-flex align-items-center fw-medium mb-2"><i className="ti ti-point-filled text-purple me-1 fs-18"></i>Social</a>
                                                    <a href="#/" className="d-flex align-items-center fw-medium mb-2"><i className="ti ti-point-filled text-info me-1 fs-18"></i>Research</a>
                                                    <a href="#/" className="d-flex align-items-center fw-medium mb-2"><i className="ti ti-point-filled text-pink me-1 fs-18"></i>Web Design</a>
                                                    <a href="#/" className="d-flex align-items-center fw-medium"><i className="ti ti-point-filled text-danger me-1 fs-18"></i>Reminder</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-sm-8 d-flex">
                            
                            <div className="card border-0 shadow-sm m-sm-4 mx-4 w-100">

                                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                    <h5 className="d-inline-flex align-items-center mb-0">Todo<span className="badge bg-danger ms-2">565</span></h5>
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

                                <div className="card-body table-custom p-0">
                                
                                    <div className="table-responsive table-nowrap">
                                        <table className="table border-0 border">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Task Title</th>
                                                    <th className="no-sort">Created Date</th>
                                                    <th>Status</th>
                                                    <th>Due Date</th>
                                                    <th>Progress</th>
                                                    <th className="no-sort"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Update calendar and schedule</td>
                                                    <td>20 Jun 2025</td>
                                                    <td><span className="badge bg-info">Inprogress</span></td>
                                                    <td>25 Jun 2025</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="circle-progress"  data-value='80'>
                                                                <span className="progress-left">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                            </div>
                                                            <div>80%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_todo"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Finalize project proposal</td>
                                                    <td>15 Jun 2025</td>
                                                    <td><span className="badge bg-pink">On Hold</span></td>
                                                    <td>20 Jun 2025</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="circle-progress"  data-value='60'>
                                                                <span className="progress-left">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                            </div>
                                                            <div>60%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_todo"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Submit to supervisor by EOD</td>
                                                    <td>02 Jun 2025</td>
                                                    <td><span className="badge bg-purple">Pending</span></td>
                                                    <td>07 Jun 2025</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="circle-progress"  data-value='50'>
                                                                <span className="progress-left">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                            </div>
                                                            <div>50%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_todo"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Prepare presentation slides</td>
                                                    <td>24 May 2025</td>
                                                    <td><span className="badge bg-success">Completed</span></td>
                                                    <td>30 May 2025</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="circle-progress"  data-value='100'>
                                                                <span className="progress-left">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                            </div>
                                                            <div>100%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_todo"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Check and respond to emails</td>
                                                    <td>18 May 2025</td>
                                                    <td><span className="badge bg-purple">Pending</span></td>
                                                    <td>07 Jun 2025</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="circle-progress"  data-value='55'>
                                                                <span className="progress-left">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                            </div>
                                                            <div>55%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_todo"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Daily admin tasks organized</td>
                                                    <td>13 May 2025</td>
                                                    <td><span className="badge bg-info">Inprogress</span></td>
                                                    <td>18 May 2025</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="circle-progress"  data-value='80'>
                                                                <span className="progress-left">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                            </div>
                                                            <div>80%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_todo"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Verify insurance eligibility</td>
                                                    <td>25 Apr 2025</td>
                                                    <td><span className="badge bg-success">Completed</span></td>
                                                    <td>27 Apr 2025</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="circle-progress"  data-value='70'>
                                                                <span className="progress-left">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                            </div>
                                                            <div>70%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_todo"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Send lab results to patient portal</td>
                                                    <td>17 Apr 2025</td>
                                                    <td><span className="badge bg-purple">Pending</span></td>
                                                    <td>27 Apr 2025</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="circle-progress"  data-value='50'>
                                                                <span className="progress-left">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                            </div>
                                                            <div>50%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_todo"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Keep tasks clear and specific</td>
                                                    <td>01 Mar 2025</td>
                                                    <td><span className="badge bg-success">Completed</span></td>
                                                    <td>05 Mar 2025</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="circle-progress"  data-value='100'>
                                                                <span className="progress-left">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                            </div>
                                                            <div>100%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_todo"><i className="ti ti-edit me-1"></i>Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Use reminders for anything time</td>
                                                    <td>21 Mar 2025</td>
                                                    <td><span className="badge bg-info">Inprogress</span></td>
                                                    <td>25 Mar 2025</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="circle-progress"  data-value='40'>
                                                                <span className="progress-left">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                                <span className="progress-right">
                                                                    <span className="progress-bar border-warning"></span>
                                                                </span>
                                                            </div>
                                                            <div>40%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_todo"><i className="ti ti-edit me-1"></i>Edit</a>
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

export default Todo;
