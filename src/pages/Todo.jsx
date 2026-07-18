import { Link } from 'react-router-dom';
import './Applications.css';

const Todo = () => {
  const tasks = [
    { id: 1, title: 'Update calendar and schedule', created: '20 Jun 2025', due: '25 Jun 2025', status: 'Inprogress', progress: 80, assignee: 'avatar-21.jpg' },
    { id: 2, title: 'Finalize project proposal', created: '15 Jun 2025', due: '20 Jun 2025', status: 'On Hold', progress: 60, assignee: 'avatar-22.jpg' },
    { id: 3, title: 'Submit to supervisor by EOD', created: '02 Jun 2025', due: '07 Jun 2025', status: 'Pending', progress: 50, assignee: 'avatar-23.jpg' },
    { id: 4, title: 'Prepare presentation slides', created: '24 May 2025', due: '30 May 2025', status: 'Completed', progress: 100, assignee: 'avatar-24.jpg' },
    { id: 5, title: 'Check and respond to emails', created: '18 May 2025', due: '07 Jun 2025', status: 'Pending', progress: 55, assignee: 'avatar-25.jpg' },
    { id: 6, title: 'Daily admin tasks organized', created: '13 May 2025', due: '18 May 2025', status: 'Inprogress', progress: 80, assignee: 'avatar-26.jpg' },
    { id: 7, title: 'Verify insurance eligibility', created: '25 Apr 2025', due: '27 Apr 2025', status: 'Completed', progress: 100, assignee: 'avatar-27.jpg' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed': return 'bg-success';
      case 'Inprogress': return 'bg-info';
      case 'On Hold': return 'bg-pink';
      case 'Pending': default: return 'bg-warning text-dark';
    }
  };

  return (
    <>
      <div className="content">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div className="breadcrumb-arrow">
            <h4 className="mb-1">To Do</h4>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item"><span className="text-decoration-none text-muted">Applications</span></li>
                <li className="breadcrumb-item active">To Do</li>
              </ol>
            </div>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <button className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" aria-label="Refresh"><i className="ti ti-refresh"></i></button>
            <button className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" aria-label="Print"><i className="ti ti-printer"></i></button>
          </div>
        </div>

        <div className="premium-card mb-0 shadow-lg">
          <div className="card-body p-0">
            <div className="row g-0">
              {/* Sidebar */}
              <div className="col-lg-3 col-sm-4 d-flex bg-light bg-opacity-50">
                <div className="border-end p-4 flex-fill">
                  <div className="mb-4">
                    <button className="btn btn-primary premium-btn w-100 py-3 shadow-sm" data-bs-toggle="modal" data-bs-target="#add_todo">
                      <i className="ti ti-square-rounded-plus me-2 fs-5"></i>Add New Task
                    </button>
                  </div>
                  <div className="border-bottom pb-3 mb-3">
                    <div className="nav flex-column nav-pills gap-2">
                      <a href="#/" className="d-flex text-start align-items-center fw-medium fs-14 bg-white shadow-sm rounded-3 p-3 active text-primary border border-primary border-opacity-25">
                        <i className="ti ti-inbox me-2 fs-5"></i>All Tasks <span className="badge bg-primary rounded-pill ms-auto">7</span>
                      </a>
                      <a href="#/" className="d-flex text-start align-items-center fw-medium fs-14 rounded-3 p-3 text-secondary hover-bg-white transition-all">
                        <i className="ti ti-star me-2 fs-5 text-warning"></i>Starred
                      </a>
                      <a href="#/" className="d-flex text-start align-items-center fw-medium fs-14 rounded-3 p-3 text-secondary hover-bg-white transition-all">
                        <i className="ti ti-trash me-2 fs-5 text-danger"></i>Trash
                      </a>
                    </div>
                  </div>

                  <div className="accordion accordion-flush custom-accordion bg-transparent" id="accordionFlushExample">
                    <div className="accordion-item mb-3 bg-transparent border-0">
                      <h2 className="accordion-header mb-0">
                        <button className="accordion-button fw-bold p-0 bg-transparent text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                          Priority Labels
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse show">
                        <div className="d-flex flex-column mt-3 gap-2">
                          <a href="#/" className="d-flex align-items-center fw-medium text-secondary p-2 rounded hover-bg-white transition-all"><i className="ti ti-point-filled text-success me-2 fs-4"></i>Low Priority</a>
                          <a href="#/" className="d-flex align-items-center fw-medium text-secondary p-2 rounded hover-bg-white transition-all"><i className="ti ti-point-filled text-warning me-2 fs-4"></i>Medium Priority</a>
                          <a href="#/" className="d-flex align-items-center fw-medium text-secondary p-2 rounded hover-bg-white transition-all"><i className="ti ti-point-filled text-danger fs-4 me-2"></i>High Priority</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="col-lg-9 col-sm-8 d-flex bg-white">
                <div className="w-100 p-4">
                  <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-4 pb-3 border-bottom">
                    <h5 className="d-inline-flex align-items-center mb-0 fw-bold">Active Tasks <span className="badge bg-soft-primary text-primary ms-2 rounded-pill px-3">7 Tasks</span></h5>
                    <div className="d-flex align-items-center gap-3">
                      <div className="input-group input-group-sm rounded-pill border bg-light px-3 py-1 shadow-sm" style={{ width: '200px' }}>
                        <i className="ti ti-search text-muted mt-1 me-2"></i>
                        <input type="text" className="form-control border-0 bg-transparent shadow-none p-0" placeholder="Search tasks..." />
                      </div>
                      <div className="dropdown">
                        <a href="#/" className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center shadow-sm rounded-pill px-3" data-bs-toggle="dropdown">
                          <i className="ti ti-sort-descending-2 me-2"></i> Newest First
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="task-list d-flex flex-column gap-3">
                    {tasks.map((task) => (
                      <div key={task.id} className="task-item premium-card border p-3 d-flex align-items-center justify-content-between shadow-none">
                        <div className="d-flex align-items-center gap-3 flex-grow-1">
                          <div className="form-check">
                            <input className="form-check-input task-checkbox shadow-sm cursor-pointer" type="checkbox" id={`task-${task.id}`} defaultChecked={task.status === 'Completed'} style={{ width: '20px', height: '20px' }} />
                          </div>
                          <div className="d-flex flex-column">
                            <label className="form-check-label fw-bold text-dark fs-15 mb-1 cursor-pointer" htmlFor={`task-${task.id}`}>
                              {task.title}
                            </label>
                            <span className="text-muted fs-12 d-flex align-items-center">
                              <i className="ti ti-calendar me-1"></i> Due {task.due}
                            </span>
                          </div>
                        </div>

                        <div className="d-flex align-items-center gap-4">
                          <div className="d-none d-md-flex flex-column align-items-end" style={{ width: '100px' }}>
                            <div className="d-flex justify-content-between w-100 mb-1 fs-12">
                              <span className="text-muted">Progress</span>
                              <span className="fw-bold">{task.progress}%</span>
                            </div>
                            <div className="progress w-100" style={{ height: '6px' }}>
                              <div className={`progress-bar ${task.progress === 100 ? 'bg-success' : 'bg-primary'}`} role="progressbar" style={{ width: `${task.progress}%` }}></div>
                            </div>
                          </div>

                          <span className={`badge ${getStatusBadge(task.status)} rounded-pill px-3 py-2 fw-medium`} style={{ width: '100px' }}>{task.status}</span>
                          
                          <div className="avatar avatar-sm rounded-circle border border-2 border-white shadow-sm" data-bs-toggle="tooltip" title="Assignee">
                            <img src={`/assets/img/avatars/${task.assignee}`} alt="assignee" className="rounded-circle w-100 h-100 object-fit-cover" />
                          </div>

                          <div className="dropdown">
                            <button className="btn btn-icon btn-sm btn-white rounded-circle shadow-sm" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical"></i></button>
                            <ul className="dropdown-menu dropdown-menu-end p-2 border-0 shadow-lg" style={{ borderRadius: '12px' }}>
                              <li><button className="dropdown-item rounded py-2"><i className="ti ti-edit me-2 text-muted"></i>Edit Task</button></li>
                              <li><hr className="dropdown-divider" /></li>
                              <li><button className="dropdown-item rounded py-2 text-danger"><i className="ti ti-trash me-2"></i>Delete</button></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer text-center mt-4">
        <p className="mb-0 text-dark"> &copy; <Link to="/" className="link-primary text-decoration-none">Dreams EMR</Link> - All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Todo;
