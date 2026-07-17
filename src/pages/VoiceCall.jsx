import { Link } from 'react-router-dom';
const VoiceCall = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Voice Call</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none">Applications</a></li>
                            <li className="breadcrumb-item active">Voice Call</li>
                        </ol>
                    </div>
                </div>
                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_participent"><i className="ti ti-square-rounded-plus me-1"></i>Add Participant</a>
            </div>
            

            <div className="card border-0 shadow-sm voice-call mb-0">

                <div className="card-body position-relative text-center d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                            <span className="avatar avatar-md me-2 online avatar-rounded">
                                <img src="/assets/img/avatars/user-01.png" alt="user" />
                            </span>
                            <div>
                                <h6 className="mb-1"><a href="#">Edward Lietz</a></h6>
                                <span className="fs-13 d-block">+22-555-345-11</span>
                            </div>
                        </div>
                        <div>
                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical"></i></a>
                            <ul className="dropdown-menu p-2">
                                <li>
                                    <a href="#/" className="dropdown-item">Add Participant</a>
                                </li>
                                <li>
                                    <a href="#/" className="dropdown-item">Hold Call</a>
                                </li>
                                <li>
                                    <a href="#/" className="dropdown-item">Transfer Call</a>
                                </li>
                                <li>
                                    <a href="#/" className="dropdown-item">End Call</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="call-body border flex-grow-1 position-relative d-flex align-items-center justify-content-center mb-3 p-5">
                        <img src="/assets/img/bg/call-bg-01.png" className="position-absolute top-0 end-0 rounded-top" alt="bg" />
                        <img src="/assets/img/bg/call-bg-02.png" className="position-absolute bottom-0 start-0 rounded-bottom" alt="bg" />
                        <div className="flex-fill text-center">
                            <div className="animation-ripple call-avatar-outer d-flex align-items-center justify-content-center m-auto mb-4">
                                <div className="avatar call-avatar d-flex mx-auto rounded-circle">
                                    <img src="/assets/img/avatars/user-01.png" className="img-fluid rounded-circle" alt="user" />
                                </div>
                            </div>
                            <span className="badge bg-white text-dark">01:45</span>
                            <div className="border rounded border-2 border-primary avatar avatar-xxl d-inline-flex position-absolute end-0 bottom-0 m-4">
                                <div className="bg-light p-1 rounded-circle d-inline-flex align-items-center justify-content-center">
                                    <a href="#" className="avatar avatar-lg">
                                        <img src="/assets/img/avatars/user-02.jpg" className="rounded-circle" alt="user" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="call-footer border rounded p-2">
                        <div className="d-flex align-items-center justify-content-center flex-wrap row-gap-2">
                            <a href="#" className="btn btn-light btn-icon me-2"><i className="ti ti-microphone fs-16"></i></a>
                            <a href="#" className="btn btn-light btn-icon me-2"><i className="ti ti-video fs-16"></i></a>
                            <a href="#" className="btn btn-light btn-icon me-2"><i className="ti ti-messages fs-16"></i></a>
                            <a href="#" className="btn btn-icon p-4 btn-danger text-white me-2"><i className="ti ti-phone fs-16"></i></a>
                            <a href="#" className="btn btn-light btn-icon me-2"><i className="ti ti-volume fs-16"></i></a>
                            <a href="#" className="btn btn-light btn-icon me-2"><i className="ti ti-mood-smile fs-16"></i></a>
                            <a href="#" className="btn btn-light btn-icon"><i className="ti ti-screen-share fs-16"></i></a>
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

export default VoiceCall;
