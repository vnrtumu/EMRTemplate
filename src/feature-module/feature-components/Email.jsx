import { Link } from 'react-router-dom';
const Email = () => {
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
                            <div className="p-4 pb-0 pb-sm-4 mail-sidebar" data-simplebar>
                                <div>
                                    <div className="mb-3">
                                    <Link to="/email-compose" className="btn btn-primary w-100"><i className="ti ti-square-rounded-plus me-1"></i>Compose New</Link>
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
                        <div className="col-lg-9 col-md-8">
                            
                            <div className="card border-0 shadow-sm border-0 rounded-0 shadow-sm mb-0">

                                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between px-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                            <input className="form-check-input" type="checkbox" id="select-all" />
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <a href="#" className="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Archive"><i className="ti ti-archive"></i></a>
                                            <a href="#" className="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete"><i className="ti ti-trash"></i></a>
                                            <a href="#" className="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Report Spam"><i className="ti ti-message-report"></i></a>
                                            <div>
                                                <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                                <ul className="dropdown-menu p-2">
                                                    <li>
                                                        <a href="#/" className="dropdown-item d-flex align-items-center">Recent</a>
                                                    </li>
                                                    <li>
                                                        <a href="#/" className="dropdown-item d-flex align-items-center">Unread</a>
                                                    </li>
                                                    <li>
                                                        <a href="#/" className="dropdown-item d-flex align-items-center">Mark All Read</a>
                                                    </li>
                                                    <li>
                                                        <a href="#/" className="dropdown-item d-flex align-items-center">Spam</a>
                                                    </li>
                                                    <li>
                                                        <a href="#/" className="dropdown-item d-flex align-items-center">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group w-auto input-group-flat">
                                        <input type="text" className="form-control form-control-sm" placeholder="Search Keyword" />
                                    </div>
                                </div>

                                <div className="card-body p-0">
                                    <div className="mail-messages" data-simplebar>
                                        
                                        <div className="table-responsive table-nowrap custom-border">
                                            <table className="table border-0 w-100">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                                                    <input className="form-check-input mail-check-input" type="checkbox" />
                                                                </div>
                                                                <span className="star d-flex align-items-center justify-content-center"><i className="ti ti-star fs-16"></i></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <Link to="/email-details" className="avatar avatar-sm"><img src="/assets/img/avatars/avatar-29.jpg" alt="user" /></Link>
                                                                <p className="fs-14 mb-0"><Link to="/email-details">Sarah, me (7)</Link></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h6 className="fs-14 mb-1"><Link to="/email-details">[Reminder] Client Meeting at 3 PM Today</Link></h6>
                                                                <p className="mb-0">Hi John, just a quick reminder about our meeting with ABC Corp at 3 PM...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="fs-13 text-dark fw-medium">4:15 PM</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                                                    <input className="form-check-input mail-check-input" type="checkbox" />
                                                                </div>
                                                                <span className="star d-flex align-items-center justify-content-center"><i className="ti ti-star fs-16"></i></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <Link to="/email-details" className="avatar avatar-sm"><img src="/assets/img/avatars/avatar-28.jpg" alt="user" /></Link>
                                                                <p className="fs-14 mb-0"><Link to="/email-details">Mike, team (5)</Link></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h6 className="fs-14 mb-1"><Link to="/email-details">Submit Project Proposal</Link></h6>
                                                                <p className="mb-0">Hi Team, please ensure that your sections of the project proposal are sub...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="fs-13 text-dark fw-medium">5:00 PM</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                                                    <input className="form-check-input mail-check-input" type="checkbox" />
                                                                </div>
                                                                <span className="star d-flex align-items-center justify-content-center"><i className="ti ti-star fs-16"></i></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <Link to="/email-details" className="avatar avatar-sm"><img src="/assets/img/avatars/avatar-33.jpg" alt="user" /></Link>
                                                                <p className="fs-14 mb-0"><Link to="/email-details">Anna</Link></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h6 className="fs-14 d-flex fw-normal align-items-center mb-1"><Link to="/email-details">Team Outing Next Friday</Link><span className="badge bg-info ms-2">Markting</span></h6>
                                                                <p className="mb-0">Hello Everyone, we’re planning a team outing next Friday. Please RSVP by...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="fs-13 text-dark fw-medium">1:00 PM</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                                                    <input className="form-check-input mail-check-input" type="checkbox" />
                                                                </div>
                                                                <span className="star d-flex align-items-center justify-content-center"><i className="ti ti-star fs-16"></i></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <Link to="/email-details" className="avatar avatar-sm"><img src="/assets/img/avatars/avatar-30.jpg" alt="user" /></Link>
                                                                <p className="fs-14 mb-0"><Link to="/email-details">Tom</Link></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h6 className="fs-14 d-flex align-items-center mb-1"><Link to="/email-details">[Update] New Design Guidelines Available</Link><span className="badge bg-warning ms-2">Client</span></h6>
                                                                <p className="mb-0">Hi all, the new design guidelines have been finalized and are now available...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="fs-13 text-dark fw-medium">3:30 PM</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                                                    <input className="form-check-input mail-check-input" type="checkbox" />
                                                                </div>
                                                                <span className="star d-flex align-items-center justify-content-center"><i className="ti ti-star fs-16"></i></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <Link to="/email-details" className="avatar avatar-sm"><img src="/assets/img/avatars/avatar-43.jpg" alt="user" /></Link>
                                                                <p className="fs-14 mb-0"><Link to="/email-details">Lisa</Link></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h6 className="fs-14 fw-normal mb-1"><Link to="/email-details">[Event] Webinar on Social Media Strategy</Link></h6>
                                                                <p className="mb-0">Don’t forget to register for our webinar covering advanced social media stra...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="fs-13 text-dark fw-medium">2:45 PM</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                                                    <input className="form-check-input mail-check-input" type="checkbox" />
                                                                </div>
                                                                <span className="star d-flex align-items-center justify-content-center"><i className="ti ti-star fs-16"></i></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <Link to="/email-details" className="avatar avatar-sm"><img src="/assets/img/avatars/avatar-31.jpg" alt="user" /></Link>
                                                                <p className="fs-14 mb-0"><Link to="/email-details">Jason, me (9)</Link></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h6 className="fs-14 mb-1"><Link to="/email-details">[Reminder] Sales Targets Review</Link></h6>
                                                                <p className="mb-0">Hey Team, please prepare your sales reports for the review meeting schedul...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="fs-13 text-dark fw-medium">10:00 AM</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                                                    <input className="form-check-input mail-check-input" type="checkbox" />
                                                                </div>
                                                                <span className="star d-flex align-items-center justify-content-center"><i className="ti ti-star fs-16"></i></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <Link to="/email-details" className="avatar avatar-sm"><img src="/assets/img/avatars/avatar-48.jpg" alt="user" /></Link>
                                                                <p className="fs-14 mb-0"><Link to="/email-details">Emily</Link></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h6 className="fs-14 fw-normal d-flex align-items-center mb-1"><Link to="/email-details">[Alert] System Maintenance Scheduled</Link><span className="badge bg-success ms-2">Personal</span></h6>
                                                                <p className="mb-0">Dear Team, please be aware that there will be system maintenance this Satu...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="fs-13 text-dark fw-medium">12:00 AM</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                                                    <input className="form-check-input mail-check-input" type="checkbox" />
                                                                </div>
                                                                <span className="star d-flex align-items-center justify-content-center"><i className="ti ti-star fs-16"></i></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <Link to="/email-details" className="avatar avatar-sm"><img src="/assets/img/avatars/avatar-34.jpg" alt="user" /></Link>
                                                                <p className="fs-14 mb-0"><Link to="/email-details">Kevin</Link></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h6 className="fs-14 mb-1"><Link to="/email-details">Expense Reports Due</Link></h6>
                                                                <p className="mb-0">Hi everyone, please submit all expense reports for Q3 by the end of this week...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="fs-13 text-dark fw-medium">5:30 PM</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                                                    <input className="form-check-input mail-check-input" type="checkbox" />
                                                                </div>
                                                                <span className="star d-flex align-items-center justify-content-center"><i className="ti ti-star fs-16"></i></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <Link to="/email-details" className="avatar avatar-sm"><img src="/assets/img/avatars/avatar-50.jpg" alt="user" /></Link>
                                                                <p className="fs-14 mb-0"><Link to="/email-details">Rachel</Link></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h6 className="fs-14 fw-normal mb-1"><Link to="/email-details">Beta Testing</Link></h6>
                                                                <p className="mb-0">Hi Team, your feedback on the latest beta release is crucial. Please complete...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="fs-13 text-dark fw-medium">4:00 PM</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                                                    <input className="form-check-input mail-check-input" type="checkbox" />
                                                                </div>
                                                                <span className="star d-flex align-items-center justify-content-center"><i className="ti ti-star fs-16"></i></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <Link to="/email-details" className="avatar avatar-sm"><img src="/assets/img/avatars/avatar-35.jpg" alt="user" /></Link>
                                                                <p className="fs-14 mb-0"><Link to="/email-details">David</Link></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h6 className="fs-14 fw-normal mb-1"><Link to="/email-details">[Reminder] Contract Renewals</Link></h6>
                                                                <p className="mb-0">Attention all, please ensure that all contract renewals are reviewed and...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="fs-13 text-dark fw-medium">11:00 AM</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                                                    <input className="form-check-input mail-check-input" type="checkbox" />
                                                                </div>
                                                                <span className="star d-flex align-items-center justify-content-center"><i className="ti ti-star fs-16"></i></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <Link to="/email-details" className="avatar avatar-sm"><img src="/assets/img/avatars/avatar-51.jpg" alt="user" /></Link>
                                                                <p className="fs-14 mb-0"><Link to="/email-details">Nina, me (9)</Link></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h6 className="fs-14 fw-normal mb-1"><Link to="/email-details">[Notice] Policy Changes</Link></h6>
                                                                <p className="mb-0">Hello Team, we have implemented some policy changes effective immediately...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="fs-13 text-dark fw-medium">9:00 AM</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Email;
