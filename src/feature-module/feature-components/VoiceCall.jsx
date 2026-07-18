import { Link } from 'react-router-dom';
import '../../style/css/Applications.css';

const VoiceCall = () => {
  return (
    <>
      <div className="content">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div className="breadcrumb-arrow">
            <h4 className="mb-1">Voice Call</h4>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="text-decoration-none text-muted">Applications</span>
                </li>
                <li className="breadcrumb-item active">Voice Call</li>
              </ol>
            </div>
          </div>
          <button className="btn btn-primary premium-btn" data-bs-toggle="modal" data-bs-target="#add_participent">
            <i className="ti ti-square-rounded-plus me-2"></i>Add Participant
          </button>
        </div>

        <div className="call-wrapper shadow-lg premium-card mb-0">
          <div className="call-header">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-md me-3 position-relative avatar-hover-ring">
                <img src="/assets/img/avatars/avatar-01.jpg" alt="user" className="rounded-circle shadow-sm" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="position-absolute bottom-0 end-0 p-1 bg-success border border-white rounded-circle"></span>
              </span>
              <div>
                <h6 className="mb-1 text-white fs-16 fw-semibold">Edward Lietz</h6>
                <span className="fs-13 text-white-50 d-flex align-items-center">
                  <i className="ti ti-phone-outgoing me-1 text-success"></i> +22-555-345-11
                </span>
              </div>
            </div>
            <div>
              <button className="btn btn-icon btn-outline-light rounded-circle border-0" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '40px', height: '40px' }}>
                <i className="ti ti-dots-vertical"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end p-2 shadow-lg border-0" style={{ borderRadius: '12px' }}>
                <li><button className="dropdown-item rounded py-2"><i className="ti ti-user-plus me-2 text-muted"></i>Add Participant</button></li>
                <li><button className="dropdown-item rounded py-2"><i className="ti ti-player-pause me-2 text-muted"></i>Hold Call</button></li>
                <li><button className="dropdown-item rounded py-2"><i className="ti ti-phone-share me-2 text-muted"></i>Transfer Call</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item rounded py-2 text-danger"><i className="ti ti-phone-off me-2"></i>End Call</button></li>
              </ul>
            </div>
          </div>
          
          <div className="call-body-animated flex-grow-1">
            <div className="text-center" style={{ zIndex: 10 }}>
              <div className="avatar call-avatar d-flex mx-auto rounded-circle mb-4" style={{ width: '150px', height: '150px', border: '4px solid rgba(255,255,255,0.2)' }}>
                <img src="/assets/img/avatars/avatar-01.jpg" className="img-fluid rounded-circle w-100 h-100" style={{ objectFit: 'cover' }} alt="user" />
              </div>
              <h2 className="text-white mb-2 fw-light" style={{ fontSize: '3rem', letterSpacing: '2px' }}>01:45</h2>
              <span className="badge bg-success text-white rounded-pill px-3 py-2 fs-12 fw-medium shadow">Call in progress...</span>
            </div>
            
            {/* Caller PIP */}
            <div className="pip-window d-flex align-items-center justify-content-center bg-dark">
                <img src="/assets/img/avatars/avatar-02.jpg" alt="You" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.9' }} />
                <span className="position-absolute bottom-0 start-0 m-2 px-2 py-1 bg-dark bg-opacity-50 rounded text-white fs-12 backdrop-blur">You</span>
            </div>
          </div>
          
          <div className="call-controls">
            <button className="call-btn"><i className="ti ti-microphone"></i></button>
            <button className="call-btn"><i className="ti ti-video"></i></button>
            <button className="call-btn btn-danger" style={{ transform: 'scale(1.2)', margin: '0 10px' }}><i className="ti ti-phone"></i></button>
            <button className="call-btn"><i className="ti ti-volume"></i></button>
            <button className="call-btn"><i className="ti ti-screen-share"></i></button>
          </div>
        </div> 
      </div>

      <footer className="footer text-center mt-4">
        <p className="mb-0 text-dark"> &copy; <Link to="/" className="link-primary text-decoration-none">Dreams EMR</Link> - All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default VoiceCall;
