import { Link } from 'react-router-dom';
import './Applications.css';

const VideoCall = () => {
  return (
    <>
      <div className="content">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div className="breadcrumb-arrow">
            <h4 className="mb-1">Video Call</h4>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="text-decoration-none text-muted">Applications</span>
                </li>
                <li className="breadcrumb-item active">Video Call</li>
              </ol>
            </div>
          </div>
          <button className="btn btn-primary premium-btn" data-bs-toggle="modal" data-bs-target="#add_participent">
            <i className="ti ti-square-rounded-plus me-2"></i>Add Participant
          </button>
        </div>

        <div className="call-wrapper shadow-lg premium-card mb-0">
          <div className="call-header">
            <div className="d-flex align-items-center gap-3">
              <span className="badge bg-danger rounded-pill px-3 py-2 fw-medium fs-12 d-flex align-items-center gap-2 shadow-sm">
                <span className="spinner-grow spinner-grow-sm" style={{ width: '8px', height: '8px' }}></span> LIVE
              </span>
              <span className="text-white fw-light fs-14">01:45</span>
            </div>
            <div>
              <button className="btn btn-icon btn-outline-light rounded-circle border-0" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '40px', height: '40px' }}>
                <i className="ti ti-dots-vertical"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end p-2 shadow-lg border-0" style={{ borderRadius: '12px' }}>
                <li><button className="dropdown-item rounded py-2"><i className="ti ti-user-plus me-2 text-muted"></i>Add Participant</button></li>
                <li><button className="dropdown-item rounded py-2"><i className="ti ti-settings me-2 text-muted"></i>Audio/Video Settings</button></li>
                <li><button className="dropdown-item rounded py-2"><i className="ti ti-maximize me-2 text-muted"></i>Fullscreen</button></li>
              </ul>
            </div>
          </div>

          <div className="call-body-animated flex-grow-1 p-4" style={{ backgroundImage: 'url(/assets/img/avatars/avatar-20.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 }}>
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
            
            <div className="position-relative h-100 w-100 d-flex flex-column justify-content-between z-3">
              <div className="d-flex justify-content-between">
                <span className="badge bg-dark bg-opacity-75 text-white fs-14 py-2 px-3 rounded-pill backdrop-blur">
                  Dr. Rachael Thomas (Speaker)
                </span>
                <button className="btn btn-icon btn-dark bg-opacity-50 text-white rounded-circle border-0 backdrop-blur">
                  <i className="ti ti-maximize"></i>
                </button>
              </div>

              {/* Smaller participant grid overlaid at bottom */}
              <div className="d-flex gap-3 overflow-auto pb-3 px-1 mt-auto" style={{ scrollbarWidth: 'none', maxWidth: '100%' }}>
                {[
                  { img: 'avatar-21.jpg', name: 'Rosa Shelby' },
                  { img: 'avatar-22.jpg', name: 'Allen Snyder', audioActive: true },
                  { img: 'avatar-23.jpg', name: 'Charlotte Ayala' },
                  { img: 'avatar-24.jpg', name: 'Andrew Foster' },
                  { img: 'avatar-25.jpg', name: 'Robert Fassett' },
                  { img: 'avatar-26.jpg', name: 'Andrew Fletcher' },
                ].map((participant, index) => (
                  <div key={index} className="position-relative rounded-3 overflow-hidden shadow" style={{ minWidth: '160px', height: '110px', flexShrink: 0, border: '2px solid rgba(255,255,255,0.2)' }}>
                    <img src={`/assets/img/avatars/${participant.img}`} className="w-100 h-100 object-fit-cover" alt={participant.name} />
                    <div className="position-absolute bottom-0 start-0 w-100 p-2 bg-gradient-dark">
                      <span className="text-white fs-12 fw-medium d-block text-truncate">{participant.name}</span>
                    </div>
                    {participant.audioActive && (
                      <span className="position-absolute top-0 end-0 m-2 bg-success rounded-circle p-1 d-flex align-items-center justify-content-center shadow" style={{ width: '20px', height: '20px' }}>
                        <i className="ti ti-microphone text-white" style={{ fontSize: '10px' }}></i>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="call-controls rounded-top-0 mb-0 w-100 rounded-bottom-4 d-flex justify-content-center border-0 border-top pt-4 pb-4" style={{ background: '#111118', backdropFilter: 'none', boxShadow: 'none' }}>
            <button className="call-btn"><i className="ti ti-microphone"></i></button>
            <button className="call-btn"><i className="ti ti-video"></i></button>
            <button className="call-btn btn-danger" style={{ transform: 'scale(1.2)', margin: '0 15px' }}><i className="ti ti-phone"></i></button>
            <button className="call-btn"><i className="ti ti-message-circle"></i></button>
            <button className="call-btn"><i className="ti ti-mood-smile"></i></button>
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

export default VideoCall;
