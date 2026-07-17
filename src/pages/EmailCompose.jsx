import { Link } from 'react-router-dom';
const EmailCompose = () => {
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
                        <div className="col-lg-3 col-md-4">
                            <div className=" p-4 pb-0 pb-sm-4 mail-sidebar" data-simplebar>
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
                                                    <Link to="/email" className="d-flex text-start align-items-center fw-medium fs-14 rounded p-2 mb-1"><i className="ti ti-inbox me-2"></i>Inbox<span className="avatar avatar-xs ms-auto bg-danger rounded-circle">6</span></Link>
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
                        <div className="col-lg-9 col-md-8">
                            
                            <div className="card border-0 shadow-sm border-0 rounded-0 shadow-sm mb-0">

                                <div className="card-header">
                                    <h5 className="mb-0">New Message</h5>
                                </div>

                                <div className="card-body p-0">
                                    <div className="mail-messages p-4" data-simplebar>
                                        <form action="https://dreamsemr.dreamstechnologies.com/php/template/email-compose.php">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">From <span className="text-danger">*</span></label>
                                                        <select className="select">
                                                            <option>Select</option>
                                                            <option>benjamin@example.com</option>
                                                            <option>charlotte@example.com	</option>
                                                            <option>anthony@example.com</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">To <span className="text-danger">*</span></label>
                                                        <select className="select">
                                                            <option>Select</option>
                                                            <option>isabella@example.com</option>
                                                            <option>william@example.com</option>
                                                            <option>amanda@example.com</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Bcc <span className="text-danger">*</span></label>
                                                        <select className="select">
                                                            <option>Select</option>
                                                            <option>nathaniel@example.com</option>
                                                            <option>katherine@example.com</option>
                                                            <option>eric@example.com</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Subject <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Message</label>
                                                        <div className="snow-editor"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="position-relative d-inline-flex mb-2">
                                                        <a href="#" className="btn btn-dark"><i className="ti ti-tags me-1"></i>Attachment</a>
                                                        <input type="file" className="position-absolute top-0 start-0 opacity-0 w-100 h-100" />
                                                    </div>
                                                    <p className="mb-0">Max upload file size. 32MB</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-end flex-wrap gap-2 border-top mt-3 pt-3">
                                                <button className="btn btn-dark" type="button"><i className="ti ti-file-power me-1"></i>Make as Draft</button>
                                                <button className="btn btn-danger" type="button"><i className="ti ti-xbox-x me-1"></i>Discard</button>
                                                <button className="btn btn-primary" type="submit"><i className="ti ti-send me-1"></i>Send Email</button>
                                            </div>
                                        </form>
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

export default EmailCompose;
