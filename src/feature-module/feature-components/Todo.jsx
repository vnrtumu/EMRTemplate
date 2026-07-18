import { Link } from 'react-router-dom';
import '../../style/css/Applications.css';

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
      case 'Completed': return 'badge-glass-success';
      case 'Inprogress': return 'badge-glass-info';
      case 'On Hold': return 'badge-glass-purple';
      case 'Pending': default: return 'badge-glass-warning';
    }
  };

  const getProgressBarColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-success';
      case 'Inprogress': return 'bg-info';
      case 'On Hold': return 'bg-purple';
      case 'Pending': default: return 'bg-warning';
    }
  }

  return (
    <>
      <div className="content">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div className="breadcrumb-arrow">
            <h4 className="mb-1 fw-bolder tracking-tight">Tasks & To-Do</h4>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item"><span className="text-decoration-none text-muted">Applications</span></li>
                <li className="breadcrumb-item active text-primary fw-medium">To Do</li>
              </ol>
            </div>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <button className="btn premium-icon-btn shadow-sm" data-bs-toggle="tooltip" title="Refresh">
              <i className="ti ti-refresh fs-5"></i>
            </button>
            <button className="btn premium-icon-btn shadow-sm" data-bs-toggle="tooltip" title="Print">
              <i className="ti ti-printer fs-5"></i>
            </button>
          </div>
        </div>

        <div className="premium-card mb-0 shadow-lg border-0 overflow-hidden" style={{ borderRadius: '24px' }}>
          <div className="card-body p-0">
            <div className="row g-0">
              
              {/* Sidebar */}
              <div className="col-lg-3 col-md-4 d-flex bg-gradient-light border-end">
                <div className="p-4 flex-fill w-100">
                  <div className="mb-4">
                    <button className="btn btn-primary premium-btn w-100 py-3 shadow-sm d-flex justify-content-center align-items-center gap-2 rounded-4" data-bs-toggle="modal" data-bs-target="#add_todo">
                      <i className="ti ti-square-rounded-plus fs-4"></i>
                      <span className="fw-bold">Create Task</span>
                    </button>
                  </div>
                  
                  <div className="border-bottom pb-4 mb-4">
                    <h6 className="text-muted fw-bold text-uppercase fs-11 tracking-wide mb-3 px-2">Folders</h6>
                    <div className="nav flex-column nav-pills gap-2">
                      <a href="#/" className="text-decoration-none d-flex align-items-center fw-medium fs-14 text-primary bg-white shadow-sm rounded-4 p-3 active border border-primary border-opacity-25 transition-all">
                        <div className="d-flex align-items-center justify-content-center bg-primary-transparent rounded-circle me-3" style={{ width: '36px', height: '36px' }}>
                          <i className="ti ti-inbox fs-5"></i>
                        </div>
                        All Tasks 
                        <span className="badge bg-primary text-white rounded-pill ms-auto shadow-sm">7</span>
                      </a>
                      <a href="#/" className="text-decoration-none d-flex align-items-center fw-medium fs-14 rounded-4 p-3 text-secondary hover-bg-white transition-all">
                        <div className="d-flex align-items-center justify-content-center bg-warning-transparent rounded-circle me-3" style={{ width: '36px', height: '36px' }}>
                          <i className="ti ti-star fs-5 text-warning"></i>
                        </div>
                        Starred
                      </a>
                      <a href="#/" className="text-decoration-none d-flex align-items-center fw-medium fs-14 rounded-4 p-3 text-secondary hover-bg-white transition-all">
                        <div className="d-flex align-items-center justify-content-center bg-danger-transparent rounded-circle me-3" style={{ width: '36px', height: '36px' }}>
                          <i className="ti ti-trash fs-5 text-danger"></i>
                        </div>
                        Trash
                      </a>
                    </div>
                  </div>

                  <div className="px-2">
                    <h6 className="text-muted fw-bold text-uppercase fs-11 tracking-wide mb-3">Priority Labels</h6>
                    <div className="d-flex flex-column gap-2">
                      <a href="#/" className="text-decoration-none d-flex align-items-center fw-medium text-secondary p-2 rounded-3 hover-bg-white transition-all">
                        <span className="bg-success rounded-circle me-3" style={{ width: '10px', height: '10px', boxShadow: '0 0 0 4px rgba(34,204,98,0.2)' }}></span>
                        Low Priority
                      </a>
                      <a href="#/" className="text-decoration-none d-flex align-items-center fw-medium text-secondary p-2 rounded-3 hover-bg-white transition-all">
                        <span className="bg-warning rounded-circle me-3" style={{ width: '10px', height: '10px', boxShadow: '0 0 0 4px rgba(255,193,7,0.2)' }}></span>
                        Medium Priority
                      </a>
                      <a href="#/" className="text-decoration-none d-flex align-items-center fw-medium text-secondary p-2 rounded-3 hover-bg-white transition-all">
                        <span className="bg-danger rounded-circle me-3" style={{ width: '10px', height: '10px', boxShadow: '0 0 0 4px rgba(239,71,111,0.2)' }}></span>
                        High Priority
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="col-lg-9 col-md-8 d-flex bg-white position-relative">
                {/* Decorative background element */}
                <div className="position-absolute top-0 end-0 opacity-10 pe-none" style={{ right: '-5%', top: '-10%', transform: 'scale(1.5)' }}>
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4361ee" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97.7,-2.1C98.6,13.8,94.4,30.1,84.7,43.3C75,56.5,59.8,66.6,43.9,74.5C28,82.4,11.4,88.1,-4.5,89.5C-20.4,90.9,-35.6,88,-48.6,79.8C-61.6,71.6,-72.4,58.1,-79.8,43C-87.2,27.9,-91.2,11.2,-89.7,-4.8C-88.2,-20.8,-81.2,-36.1,-70.7,-48C-60.2,-59.9,-46.2,-68.4,-32.1,-75.6C-18,-82.8,-3.8,-88.7,10.6,-87.3C25,-85.9,40.6,-77.2,44.7,-76.4Z" transform="translate(100 100)" />
                  </svg>
                </div>
                
                <div className="w-100 p-4 p-lg-5 z-1">
                  <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-5 pb-4 border-bottom">
                    <div>
                      <h4 className="mb-1 fw-bold text-dark d-flex align-items-center">
                        Active Tasks 
                        <span className="badge bg-primary bg-opacity-10 text-primary ms-3 rounded-pill px-3 fs-13 py-1 border border-primary border-opacity-25">7 Tasks</span>
                      </h4>
                      <p className="text-muted mb-0 fs-14">Manage and track your team's progress</p>
                    </div>
                    
                    <div className="d-flex align-items-center gap-3">
                      <div className="input-group rounded-pill border bg-white px-3 py-2 shadow-sm align-items-center" style={{ width: '280px', transition: 'all 0.3s' }}>
                        <i className="ti ti-search text-muted fs-5 me-2"></i>
                        <input type="text" className="form-control border-0 bg-transparent shadow-none p-0 fs-14" placeholder="Search tasks..." />
                      </div>
                      <div className="dropdown">
                        <a href="#/" className="text-decoration-none dropdown-toggle btn btn-white d-inline-flex align-items-center shadow-sm rounded-pill px-4 py-2 fw-medium border" data-bs-toggle="dropdown">
                          <i className="ti ti-sort-descending-2 me-2 text-primary fs-5"></i> Newest First
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="task-list d-flex flex-column gap-3">
                    {tasks.map((task) => (
                      <div key={task.id} className="task-item premium-card bg-white border p-4 d-flex align-items-center justify-content-between shadow-sm hover-elevate transition-all" style={{ borderRadius: '16px' }}>
                        
                        <div className="d-flex align-items-center gap-4 flex-grow-1">
                          <div className="form-check m-0">
                            <input className="form-check-input task-checkbox shadow-sm cursor-pointer border-2" type="checkbox" id={`task-${task.id}`} defaultChecked={task.status === 'Completed'} style={{ width: '24px', height: '24px' }} />
                          </div>
                          
                          <div className="d-flex flex-column">
                            <label className={`form-check-label fw-bold fs-16 mb-1 cursor-pointer transition-all ${task.status === 'Completed' ? 'text-muted text-decoration-line-through' : 'text-dark'}`} htmlFor={`task-${task.id}`}>
                              {task.title}
                            </label>
                            <div className="d-flex align-items-center gap-3 mt-1">
                              <span className="badge bg-light text-secondary fs-12 px-2 py-1 rounded d-flex align-items-center border">
                                <i className="ti ti-calendar-due me-1 text-primary"></i> {task.due}
                              </span>
                              <span className="text-muted fs-12 d-flex align-items-center">
                                <i className="ti ti-clock me-1"></i> Created {task.created}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex align-items-center gap-4">
                          {/* Progress Column */}
                          <div className="d-none d-lg-flex flex-column align-items-end" style={{ width: '130px' }}>
                            <div className="d-flex justify-content-between w-100 mb-2 fs-12">
                              <span className="text-muted fw-medium">Progress</span>
                              <span className="fw-bold text-dark">{task.progress}%</span>
                            </div>
                            <div className="progress w-100 bg-light rounded-pill overflow-visible" style={{ height: '6px' }}>
                              <div className={`progress-bar rounded-pill ${getProgressBarColor(task.status)} position-relative`} role="progressbar" style={{ width: `${task.progress}%` }}>
                                <div className="position-absolute end-0 top-50 translate-middle-y bg-white rounded-circle shadow-sm" style={{ width: '12px', height: '12px', border: `2px solid var(--bs-${getProgressBarColor(task.status).replace('bg-','')})`, right: '-6px' }}></div>
                              </div>
                            </div>
                          </div>

                          {/* Status Badge */}
                          <div className="d-none d-md-block mx-3" style={{ width: '110px' }}>
                            <span className={`badge ${getStatusBadge(task.status)} rounded-pill w-100 py-2 fw-bold fs-12 letter-spacing-1 d-flex justify-content-center align-items-center`}>
                              {task.status === 'Completed' && <i className="ti ti-check me-1 fs-14"></i>}
                              {task.status === 'Inprogress' && <i className="ti ti-loader me-1 fs-14"></i>}
                              {task.status === 'Pending' && <i className="ti ti-clock-pause me-1 fs-14"></i>}
                              {task.status}
                            </span>
                          </div>
                          
                          {/* Assignee Avatar */}
                          <div className="avatar avatar-md rounded-circle border border-3 border-white shadow-sm position-relative" data-bs-toggle="tooltip" title="Assigned User">
                            <img src={`/assets/img/avatars/${task.assignee}`} alt="assignee" className="rounded-circle w-100 h-100 object-fit-cover" />
                            <span className="position-absolute bottom-0 end-0 p-1 bg-success border border-2 border-white rounded-circle"></span>
                          </div>

                          {/* Actions */}
                          <div className="dropdown ms-2">
                            <button className="btn btn-icon btn-light rounded-circle shadow-sm hover-bg-primary hover-text-white transition-all" data-bs-toggle="dropdown">
                              <i className="ti ti-dots-vertical fs-5"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end p-2 border-0 shadow-lg mt-2 animate slideIn" style={{ borderRadius: '16px', minWidth: '180px' }}>
                              <li><h6 className="dropdown-header text-uppercase fs-11 fw-bold tracking-wide">Task Options</h6></li>
                              <li><button className="dropdown-item rounded-3 py-2 fw-medium d-flex align-items-center"><i className="ti ti-edit me-3 text-primary fs-5"></i> Edit Task</button></li>
                              <li><button className="dropdown-item rounded-3 py-2 fw-medium d-flex align-items-center"><i className="ti ti-user-plus me-3 text-info fs-5"></i> Reassign</button></li>
                              <li><button className="dropdown-item rounded-3 py-2 fw-medium d-flex align-items-center"><i className="ti ti-share me-3 text-secondary fs-5"></i> Share</button></li>
                              <li><hr className="dropdown-divider my-2 opacity-10" /></li>
                              <li><button className="dropdown-item rounded-3 py-2 fw-medium text-danger d-flex align-items-center bg-danger-transparent-hover"><i className="ti ti-trash me-3 fs-5"></i> Delete Task</button></li>
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

      <footer className="footer text-center mt-4 pb-4">
        <p className="mb-0 text-muted fw-medium"> &copy; {new Date().getFullYear()} <Link to="/" className="text-primary text-decoration-none fw-bold">Dreams EMR</Link>. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Todo;

