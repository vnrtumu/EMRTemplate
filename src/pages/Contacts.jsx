import { Link } from 'react-router-dom';
const Contacts = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Contact</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none">Applications</a></li>
                            <li className="breadcrumb-item active">Contact</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <Link to="/contacts" className="btn btn-icon btn-white active" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Grid" data-bs-original-title="Grid View"><i className="ti ti-layout-grid"></i></Link>
                    <Link to="/contact-list" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="List" data-bs-original-title="List View"><i className="ti ti-layout-list"></i></Link>
                    <a href="#/" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_modal"><i className="ti ti-square-rounded-plus me-1"></i>New Contact</a>
                </div>
            </div>
            

            
            <div className="row">
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-72.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">James Jackson</a></h6>
                                    <p className="fs-13 mb-0">jamesjackson@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-63.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Robin Coffin</a></h6>
                                    <p className="fs-13 mb-0">robin@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-58.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Vincent Thornburg</a></h6>
                                    <p className="fs-13 mb-0">vincent@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-61.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Fran Faulkner</a></h6>
                                    <p className="fs-13 mb-0">franfaulkner@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-60.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Ernestine Waller</a></h6>
                                    <p className="fs-13 mb-0">Waller@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-73.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Jared Adams</a></h6>
                                    <p className="fs-13 mb-0">jaredadams@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-66.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Reyna Pelfrey</a></h6>
                                    <p className="fs-13 mb-0">renyapelfrey@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-65.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Rafael Lowe</a></h6>
                                    <p className="fs-13 mb-0">rafeallowe@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-74.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Enrique Ratcliff</a></h6>
                                    <p className="fs-13 mb-0">enrique@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-64.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Elizabeth Pegues</a></h6>
                                    <p className="fs-13 mb-0">elizabeth@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-75.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Jenna Alford</a></h6>
                                    <p className="fs-13 mb-0">jennaalford@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-76.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Teresa Boggs</a></h6>
                                    <p className="fs-13 mb-0">teresaboggs@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-77.jpg" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Doris Lees</a></h6>
                                    <p className="fs-13 mb-0">dorislees@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-78.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Michael Anderson</a></h6>
                                    <p className="fs-13 mb-0">michael@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-62.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Jasmine</a></h6>
                                    <p className="fs-13 mb-0">jasmine@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-79.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Barbara Reynolds</a></h6>
                                    <p className="fs-13 mb-0">barbara@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-67.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Allen Snyder</a></h6>
                                    <p className="fs-13 mb-0">allensnyder@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-68.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Patrick Barnes</a></h6>
                                    <p className="fs-13 mb-0">patrick@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-83.jpg" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Lynne Paz</a></h6>
                                    <p className="fs-13 mb-0">lynnepaz@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-80.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Jason Tapia</a></h6>
                                    <p className="fs-13 mb-0">jansontapia@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-81.jpg" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Jaime Johnson</a></h6>
                                    <p className="fs-13 mb-0">jaimejohnson@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-82.jpg" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Andrea Meek</a></h6>
                                    <p className="fs-13 mb-0">andreameek@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-57.png" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Benjamin Culpepper</a></h6>
                                    <p className="fs-13 mb-0">benjamin@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#/" className="avatar flex-shrink-0 me-2"><img src="/assets/img/avatars/avatar-70.jpg" alt="user" /></a>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1"><a href="#/">Charlotte Howard</a></h6>
                                    <p className="fs-13 mb-0">chaelotte@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/voice-call" className="btn btn-icon btn-light"><i className="ti ti-phone-calling"></i></Link>
                                    <Link to="/chat" className="btn btn-icon btn-light"><i className="ti ti-message-chatbot"></i></Link>
                                    <Link to="/video-call" className="btn btn-icon btn-light"><i className="ti ti-video-plus"></i></Link>
                                </div>
                                <div>
                                    <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-label="more options"><i className="ti ti-dots-vertical"></i></a>
                                    <ul className="dropdown-menu p-2">
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-1"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#/" className="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-1"></i>Delete</a>
                                        </li>
                                    </ul>
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

export default Contacts;
