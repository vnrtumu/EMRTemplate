import { Link } from 'react-router-dom';
const ComingSoon = () => {
  return (
    <>
<div className="container-fuild position-relative z-1">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 lock-screen-cover">

            
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap coming-soon-item">
                <div className="col-lg-6 mx-auto">
                    <form action="https://dreamsemr.dreamstechnologies.com/php/template/index.php" className="d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
                            <div className="card border-0 shadow-sm border-1 p-lg-3 rounded-3 mb-0  bg-transparent border-0">
                                <div className="card-body">
                                    <div className="mx-auto mb-4 text-center">
                                        <Link to="/">
                                            <img src="/assets/img/logo-dark.svg" className="img-fluid logo m-atuo" alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="text-center mb-2">
                                        <h2 className="mb-1 fw-bold display-2">Coming Soon</h2>
                                    </div>
                                    <div className="mb-4">
                                        <p className="d-flex text-center justify-content-center">Please check back later, We are working hard to get  everything  just right.</p>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="">
                                            <ul className="d-flex list-unstyled align-items-center justify-content-center mb-3">
                                                <li className="me-sm-4 me-2">
                                                    <div className="timer-cover border">
                                                        <h4 className="days fs-28 mb-0">54</h4>
                                                    </div>
                                                    <p className="text-center text-dark mb-0">Days</p>
                                                </li>
                                                <li className="me-sm-4 me-2">
                                                    <div className="timer-cover border">
                                                        <h4 className="hours fs-28 mb-0">02</h4>
                                                    </div>
                                                    <p className="text-center text-dark mb-0">Hours</p>
                                                </li>
                                                <li className="me-sm-4 me-2">
                                                    <div className="timer-cover border">
                                                        <h4 className="minutes fs-28 mb-0">54</h4>
                                                    </div>
                                                    <p className="text-center text-dark mb-0">Minutes</p>
                                                </li>
                                                <li>
                                                    <div className="timer-cover border">
                                                        <h4 className="seconds fs-28 mb-0">10</h4>
                                                    </div>
                                                    <p className="text-center text-dark mb-0">Seconds</p>
                                                </li>
                                            </ul>
                                            <div className="mb-4 text-center px-md-5">
                                                <label className="form-label fw-semibold text-center">Get notify when we launch</label>
                                                <div className="d-flex align-items-center justify-content-between gap-2">
                                                    <input type="email" className="form-control" placeholder="Enter  Your Email" />
                                                    <a href="#/" className="btn btn-dark py-2">Subscribe</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center gap-2">
                                                <a href="#/" className="btn btn-icon btn-dark rounded-circle"><i className="ti ti-brand-facebook"></i> </a>
                                                <a href="#/" className="btn btn-icon btn-dark rounded-circle"><i className="ti ti-brand-instagram"></i> </a>
                                                <a href="#/" className="btn btn-icon btn-dark rounded-circle"><i className="ti ti-brand-linkedin"></i> </a>
                                                <a href="#/" className="btn btn-icon btn-dark rounded-circle"><i className="ti ti-brand-twitter"></i> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            

        </div>
    </div>
    </>
  );
};

export default ComingSoon;
