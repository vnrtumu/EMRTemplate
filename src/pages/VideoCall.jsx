import { Link } from 'react-router-dom';
const VideoCall = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Video Call</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none">Applications</a></li>
                            <li className="breadcrumb-item active">Video Call</li>
                        </ol>
                    </div>
                </div>
                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_participent"><i className="ti ti-square-rounded-plus me-1"></i>Add Participant</a>
            </div>
            

            <div className="card border-0 shadow-sm mb-0">
                <div className="card-body">
                    <div className="d-xl-flex w-100">
                        <div className="video-chat">
                            <div className="position-relative">
                                <div className="mb-4 call-user-img"><img src="/assets/img/avatars/video-call.png" className="img-fluid rounded" alt="user" /></div>
                                <div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 w-100 p-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="badge bg-white text-dark">Rachael Thomas</span>
                                        <span className="badge bg-white text-dark">01:45</span>
                                    </div>
                                    <div>
                                        <a href="#/" className="btn btn-icon btn-white btnFullscreen"><i className="ti ti-minimize"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper call-users">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src="/assets/img/avatars/avatar-66.png" className="img-fluid rounded" alt="user" />
                                        <div className="position-absolute bottom-0 start-0 w-100 p-2">
                                            <span className="badge bg-white text-dark w-100">Rosa Shelby</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/avatars/avatar-67.png" className="img-fluid rounded" alt="user" />
                                        <div className="position-absolute bottom-0 start-0 w-100 p-2">
                                            <span className="badge bg-white text-dark w-100">Allen Snyder</span>
                                        </div>
                                        <span className="position-absolute top-0 start-0 p-2"><img src="/assets/img/icons/audio-wave.svg" alt="audio wave" /></span>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/avatars/avatar-59.png" className="img-fluid rounded" alt="user" />
                                        <div className="position-absolute bottom-0 start-0 w-100 p-2">
                                            <span className="badge bg-white text-dark w-100">Charlotte Ayala</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/avatars/avatar-68.png" className="img-fluid rounded" alt="user" />
                                        <div className="position-absolute bottom-0 start-0 w-100 p-2">
                                            <span className="badge bg-white text-dark w-100">Andrew Foster</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/avatars/avatar-60.png" className="img-fluid rounded" alt="user" />
                                        <div className="position-absolute bottom-0 start-0 w-100 p-2">
                                            <span className="badge bg-white text-dark w-100">userRobert Fassett</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/avatars/avatar-61.png" className="img-fluid rounded" alt="user" />
                                        <div className="position-absolute bottom-0 start-0 w-100 p-2">
                                            <span className="badge bg-white text-dark w-100">Andrew Fletcher</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="call-footer border rounded p-2 mt-3">
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
            </div> 
        </div>
        

            
    <footer className="footer text-center">
        <p className="mb-0 text-dark"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default VideoCall;
