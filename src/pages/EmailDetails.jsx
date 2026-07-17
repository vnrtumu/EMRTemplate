import { Link } from 'react-router-dom';
const EmailDetails = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Email</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none">Applications</a></li>
                            <li className="breadcrumb-item"><Link to="/email">Email</Link></li>
                            <li className="breadcrumb-item active">Inbox</li>
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
                        <div className="col-lg-3">
                            <div className="p-4 pb-0 pb-lg-4 mail-sidebar" data-simplebar>
                                <div>
                                    <div className="mb-3">
                                        <Link to="/email-compose" className="btn btn-primary btn-lg w-100"><i className="ti ti-square-rounded-plus me-1"></i>Compose New</Link>
                                    </div>
                                    <div className="accordion accordion-flush custom-accordion" id="accordionFlushExample">

                                        
                                        <div className="accordion-item mb-3 pb-3">
                                            <h2 className="accordion-header mb-0">
                                                <button className="accordion-button fw-semibold p-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Mail
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                                <div className="nav flex-column mt-2">
                                                    <Link to="/email" className="d-flex text-start align-items-center fw-medium fs-14 bg-light rounded p-2 mb-1"><i className="ti ti-inbox me-2"></i>Inbox<span className="avatar avatar-xs ms-auto bg-danger rounded-circle">6</span></Link>
                                                    <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-star me-2"></i>Starred</a>
                                                    <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-clock-hour-7 me-2"></i>Snoozed</a>
                                                    <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-send me-2"></i>Sent</a>
                                                    <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-file-power me-2"></i>Drafts</a>
                                                    <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-badge me-2"></i>Important</a>
                                                    <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-brand-hipchat me-2"></i>Chats</a>
                                                    <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2"><i className="ti ti-clock-record me-2"></i>Scheduled</a>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="accordion-item mb-3 pb-3">
                                            <h2 className="accordion-header mb-0">
                                                <button className="accordion-button fw-semibold p-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwo" aria-expanded="false" aria-controls="flush-collapsetwo">
                                                    Others
                                                </button>
                                            </h2>
                                            <div id="flush-collapsetwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="nav flex-column mt-2">
                                                    <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-messages me-2"></i>All Emails</a>
                                                    <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-box-seam me-2"></i>Spam</a>
                                                    <a href="#" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-trash me-2"></i>Trash</a>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="accordion-item border-0">
                                            <h2 className="accordion-header mb-0">
                                                <button className="accordion-button fw-semibold p-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Labels
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="d-flex flex-column mt-3">
                                                    <a href="#/" className="d-flex align-items-center fw-medium mb-2"><i className="ti ti-point-filled text-success me-1 fs-18"></i>Personal</a>
                                                    <a href="#/" className="d-flex align-items-center fw-medium mb-2"><i className="ti ti-point-filled text-warning me-1 fs-18"></i>Client</a>
                                                    <a href="#/" className="d-flex align-items-center fw-medium mb-2"><i className="ti ti-point-filled text-info me-1 fs-18"></i>Marketing</a>
                                                    <a href="#/" className="d-flex align-items-center fw-medium"><i className="ti ti-point-filled text-danger me-1 fs-18"></i>Office</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            
                            <div className="card border-0 shadow-sm border-0 rounded-0 shadow-sm mb-0">

                                <div className="card-body p-0">
                                    <div className="mail-message-view p-4" data-simplebar>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap row-gap-2 mb-3">
                                            <h6 className="mb-0">Subject : Modernize Your Practice with Our All-in-One EMR Solution</h6>
                                            <p className="mb-0"><i className="ti ti-calendar me-1"></i>11 July 2025, 3:45 PM</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3 border-bottom flex-wrap flex-md-nowrap row-gap-2 pb-3">
                                            <div className="d-flex align-items-center flex-wrap">
                                                <span className="avatar me-2 flex-shrink-0"><img src="/assets/img/avatars/avatar-28.jpg" alt="user" /></span>
                                                <div>
                                                    <h6 className="fs-14 mb-1">Mark Smith</h6>
                                                    <p className="mb-0">From : adrian@example.com</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <a href="#" className="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Starred"><i className="ti ti-star"></i></a>
                                                <a href="#" className="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Archive"><i className="ti ti-archive"></i></a>
                                                <a href="#" className="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete"><i className="ti ti-trash"></i></a>
                                                <a href="#" className="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Report Spam"><i className="ti ti-message-report"></i></a>
                                                <a href="#" className="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Reply"><i className="ti ti-arrow-back-up"></i></a>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <p className="mb-2">Hi Adrian,</p>
                                            <p className="mb-2">Managing patient records shouldn't be a hassle.</p>
                                            <p className="mb-2">Introducing EMR - a secure, cloud-based Electronic Medical Records platform designed to simplify your workflow, reduce paperwork, and deliver better patient outcomes.</p>
                                            <p className="mb-2">Why Choose EMR?</p>
                                            <ol className="ps-3">
                                                <li className="mb-1">Quick Patient Charting - Access and update records in just a few clicks</li>
                                                <li className="mb-1">Appointment Scheduling - Built-in calendar to manage patient flow efficiently</li>
                                                <li className="mb-1">e-Prescriptions - Send prescriptions directly to pharmacies</li>
                                                <li className="mb-1">Lab Integration - Seamlessly receive and store lab reports</li>
                                                <li className="mb-1">Secure & Compliant - HIPAA-compliant and fully encrypted</li>
                                            </ol>
                                            <p className="mb-2">Whether you're running a solo practice or a multi-specialty clinic, Dreams EMR helps you focus more on patient care and less on admin tasks.</p>
                                            <h6 className="fs-14 fw-medium mb-0">Get Started with a 14-Day Free Trial – No credit card needed!</h6>
                                        </div>
                                        <div>
                                            <p className="mb-1">Thanks & Regards</p>
                                            <h6 className="fs-14 fw-semibold mb-0">Steven Smith</h6>
                                        </div>
                                        <div className="border-top mt-3 pt-3 mb-3">
                                            <h6 className="mb-3">Attachments</h6>
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="card border-0 shadow-sm flex-shrink-0 border-0 shadow-sm mb-0">
                                                    <div className="card-body p-3">
                                                        <div className="card-img mb-3">
                                                            <img src="/assets/img/social/attachment-01.jpg" className="rounded" alt="attachemnt" />
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h6 className="mb-1 fs-14">Mobile_design.jpg</h6>
                                                                <span className="fs-13">3.2MB</span>
                                                            </div>
                                                            <a href="#" className="fs-16"><i className="ti ti-download"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card border-0 shadow-sm flex-shrink-0 border-0 shadow-sm mb-0">
                                                    <div className="card-body p-3">
                                                        <div className="card-img mb-3">
                                                            <img src="/assets/img/social/attachment-02.jpg" className="rounded" alt="attachemnt" />
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h6 className="mb-1 fs-14">intro.jpg</h6>
                                                                <span className="fs-13">3.2MB</span>
                                                            </div>
                                                            <a href="#" className="fs-16"><i className="ti ti-download"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
                                            <button className="btn btn-dark" type="button"><i className="ti ti-arrow-back-up me-1"></i>Reply</button>
                                            <button className="btn btn-primary" type="button">Forward<i className="ti ti-arrow-forward-up ms-1"></i></button>
                                        </div>
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

export default EmailDetails;
