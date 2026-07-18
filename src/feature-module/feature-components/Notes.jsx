import { Link } from 'react-router-dom';
import '../../style/css/Applications.css';

const Notes = () => {
  const notes = [
    { id: 1, title: 'Meeting with Product Team', desc: 'Discuss dashboard revamp and analytics tracking.', priority: 'Low', badge: 'bg-success', starred: false, assignee: 'avatar-21.jpg' },
    { id: 2, title: 'Submit Quarterly Report', desc: 'Compile a comprehensive report for covering sales performance.', priority: 'Low', badge: 'bg-success', starred: true, assignee: 'avatar-22.jpg' },
    { id: 3, title: 'Follow-up with HR', desc: 'Review and verify the current onboarding status of all hires.', priority: 'Medium', badge: 'bg-warning text-dark', starred: true, assignee: 'avatar-23.jpg' },
    { id: 4, title: 'Design Feedback Notes', desc: 'Adjust the form layout to reduce vertical and horizontal spacing.', priority: 'Medium', badge: 'bg-warning text-dark', starred: true, assignee: 'avatar-24.jpg' },
    { id: 5, title: 'Call Vendor Support', desc: 'The printer maintenance issue is still pending requires attention.', priority: 'High', badge: 'bg-danger', starred: false, assignee: 'avatar-25.jpg' },
    { id: 6, title: 'Give me the staff guide', desc: 'The patient contacted us to request a rescheduling.', priority: 'Low', badge: 'bg-success', starred: false, assignee: 'avatar-26.jpg' },
    { id: 7, title: 'Insurance Update', desc: 'We have received the updated insurance card from the patient.', priority: 'High', badge: 'bg-danger', starred: true, assignee: 'avatar-27.jpg' },
    { id: 8, title: 'Staff Reminder', desc: 'A reminder was sent to the team regarding the scheduled meeting.', priority: 'Medium', badge: 'bg-warning text-dark', starred: true, assignee: 'avatar-28.jpg' },
    { id: 9, title: 'General Task Tracking', desc: 'Printer cartridges and paper stock have been ordered.', priority: 'High', badge: 'bg-danger', starred: false, assignee: 'avatar-29.jpg' },
    { id: 10, title: 'Insurance Inquiry', desc: 'Patient called to check status of last insurance claim for lab tests.', priority: 'Low', badge: 'bg-success', starred: false, assignee: 'avatar-30.jpg' },
  ];

  return (
    <>
      <div className="content">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div className="breadcrumb-arrow">
            <h4 className="mb-1">Notes</h4>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item"><span className="text-decoration-none text-muted">Applications</span></li>
                <li className="breadcrumb-item active">Notes</li>
              </ol>
            </div>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <button className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" aria-label="Refresh"><i className="ti ti-refresh"></i></button>
            <button className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" aria-label="Print"><i className="ti ti-printer"></i></button>
            <button className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" aria-label="Download"><i className="ti ti-cloud-download"></i></button>
          </div>
        </div>

        <div className="premium-card mb-0 shadow-lg">
          <div className="card-body p-0">
            <div className="row g-0">
              {/* Sidebar */}
              <div className="col-lg-3 col-sm-4 d-flex bg-light bg-opacity-50">
                <div className="border-end p-4 flex-fill">
                  <div className="mb-4">
                    <button className="btn btn-primary premium-btn w-100 py-3 shadow-sm" data-bs-toggle="modal" data-bs-target="#add_note">
                      <i className="ti ti-square-rounded-plus me-2 fs-5"></i>Add Note
                    </button>
                  </div>
                  <div className="border-bottom pb-3 mb-3">
                    <div className="nav flex-column nav-pills gap-2">
                      <a href="#/" className="d-flex text-start align-items-center fw-medium fs-14 bg-white shadow-sm rounded-3 p-3 active text-primary border border-primary border-opacity-25">
                        <i className="ti ti-inbox me-2 fs-5"></i>All Notes <span className="badge bg-primary rounded-pill ms-auto">10</span>
                      </a>
                      <a href="#/" className="d-flex text-start align-items-center fw-medium fs-14 rounded-3 p-3 text-secondary hover-bg-white transition-all">
                        <i className="ti ti-star me-2 fs-5 text-warning"></i>Starred
                      </a>
                      <a href="#/" className="d-flex text-start align-items-center fw-medium fs-14 rounded-3 p-3 text-secondary hover-bg-white transition-all">
                        <i className="ti ti-trash me-2 fs-5 text-danger"></i>Trash
                      </a>
                      <a href="#/" className="d-flex text-start align-items-center fw-medium fs-14 rounded-3 p-3 text-secondary hover-bg-white transition-all">
                        <i className="ti ti-files me-2 fs-5 text-info"></i>Draft
                      </a>
                    </div>
                  </div>

                  <div className="accordion accordion-flush custom-accordion bg-transparent" id="accordionFlushExample">
                    <div className="accordion-item mb-3 bg-transparent border-0">
                      <h2 className="accordion-header mb-0">
                        <button className="accordion-button fw-bold p-0 bg-transparent text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                          Labels
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse show">
                        <div className="d-flex flex-column mt-3 gap-2">
                          <a href="#/" className="d-flex align-items-center fw-medium text-secondary p-2 rounded hover-bg-white transition-all"><i className="ti ti-point-filled text-success me-2 fs-4"></i>Low</a>
                          <a href="#/" className="d-flex align-items-center fw-medium text-secondary p-2 rounded hover-bg-white transition-all"><i className="ti ti-point-filled text-warning me-2 fs-4"></i>Medium</a>
                          <a href="#/" className="d-flex align-items-center fw-medium text-secondary p-2 rounded hover-bg-white transition-all"><i className="ti ti-point-filled text-danger fs-4 me-2"></i>High</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="col-lg-9 col-sm-8 bg-white p-4 p-md-5">
                <div className="row g-4">
                  {notes.map((note) => (
                    <div className="col-xl-4 col-md-6 d-flex" key={note.id}>
                      <div className="premium-card border p-4 d-flex flex-column justify-content-between h-100 w-100 note-card shadow-sm" style={{ borderTopColor: note.priority === 'High' ? '#ef4444' : note.priority === 'Medium' ? '#f59e0b' : '#10b981', borderTopWidth: '4px' }}>
                        <div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span className={`badge ${note.badge} rounded-pill px-3 py-1 shadow-sm`}>{note.priority}</span>
                            <div className="dropdown">
                              <button className="btn btn-icon btn-sm btn-white rounded-circle shadow-sm border-0" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical"></i></button>
                              <ul className="dropdown-menu dropdown-menu-end p-2 border-0 shadow-lg" style={{ borderRadius: '12px' }}>
                                <li><button className="dropdown-item rounded py-2"><i className="ti ti-edit me-2 text-muted"></i>Edit</button></li>
                                <li><button className="dropdown-item rounded py-2"><i className="ti ti-star me-2 text-muted"></i>Not Important</button></li>
                                <li><button className="dropdown-item rounded py-2"><i className="ti ti-eye me-2 text-muted"></i>View</button></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button className="dropdown-item rounded py-2 text-danger"><i className="ti ti-trash me-2"></i>Delete</button></li>
                              </ul>
                            </div>
                          </div>
                          
                          <h6 className="fs-16 fw-bold mb-2 text-dark lh-base"><a href="#/" className="text-dark text-decoration-none hover-primary">{note.title}</a></h6>
                          <p className="text-muted fs-14 lh-lg mb-4">{note.desc}</p>
                        </div>
                        
                        <div className="d-flex align-items-center justify-content-between pt-3 border-top mt-auto">
                          <div className="d-flex align-items-center gap-2">
                            <button className="btn btn-icon btn-sm btn-light rounded-circle shadow-sm">
                              <i className={note.starred ? "ti ti-star-filled text-warning" : "ti ti-star text-muted"}></i>
                            </button>
                            <button className="btn btn-icon btn-sm btn-light rounded-circle shadow-sm">
                              <i className="ti ti-trash text-danger"></i>
                            </button>
                          </div>
                          <div className="avatar avatar-md border border-2 border-white rounded-circle shadow-sm" data-bs-toggle="tooltip" title="Author">
                            <img src={`/assets/img/avatars/${note.assignee}`} alt="Profile" className="img-fluid rounded-circle w-100 h-100 object-fit-cover" />
                          </div>
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

      <footer className="footer text-center mt-4">
        <p className="mb-0 text-dark"> &copy; <Link to="/" className="link-primary text-decoration-none">Dreams EMR</Link> - All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Notes;
