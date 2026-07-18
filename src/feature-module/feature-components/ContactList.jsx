import { Link } from 'react-router-dom';
const ContactList = () => {
  return (
    <>
<div className="content">

            
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
                    <Link to="/contacts" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Grid" data-bs-original-title="Grid View"><i className="ti ti-layout-grid"></i></Link>
                    <Link to="/contact-list" className="btn btn-icon btn-white active" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="List" data-bs-original-title="List View"><i className="ti ti-layout-list"></i></Link>
                    <a href="#/" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_modal"><i className="ti ti-square-rounded-plus me-1"></i>New Contact</a>
                </div>
            </div>
            

            
            <div className="card border-0 shadow-sm mb-0">
                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h6 className="d-inline-flex align-items-center mb-0">Contacts<span className="badge bg-danger ms-2">658</span></h6>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                        <div className="dropdown">
                            <a href="#/" className="dropdown-toggle btn btn-md btn-outline-light d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i className="ti ti-sort-descending-2 me-1"></i><span className="me-1">Sort By : </span> Newest
                            </a>
                            <ul className="dropdown-menu  dropdown-menu-end p-2">
                                <li>
                                    <a href="#/" className="dropdown-item rounded-1">Newest</a>
                                </li>
                                <li>
                                    <a href="#/" className="dropdown-item rounded-1">Oldest</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    
                    <div className="table-responsive table-nowrap">

                    
                        <table className="table mb-0 border">
                            <thead className="table-light">
                                <tr>
                                    <th className="no-sort">Name</th>
                                    <th className="no-sort">Phone</th>
                                    <th className="no-sort">Email ID</th>
                                    <th className="no-sort"></th>
                                    <th className="no-sort"></th>
                                </tr>
                            </thead>
                            <tbody>
                                                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#/" className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <img src="/assets/img/avatars/avatar-72.png" alt="user" />
                                                </a>
                                                <h6 className="fs-14 fw-semibold mb-0">
                                                    <a href="#/">James Jackson</a>
                                                </h6>
                                            </div>
                                        </td>
                                        <td>(123) 4567 890</td>
                                        <td>jamesjackson@example.com</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <Link to="/voice-call" className="btn btn-icon btn-light" aria-label="phone"><i className="ti ti-phone-calling"></i></Link>
                                                <Link to="/chat" className="btn btn-icon btn-light" aria-label="message"><i className="ti ti-message-chatbot"></i></Link>
                                                <Link to="/video-call" className="btn btn-icon btn-light" aria-label="video"><i className="ti ti-video-plus"></i></Link>
                                            </div>
                                        </td>
                                        <td>
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
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#/" className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <img src="/assets/img/avatars/avatar-63.png" alt="user" />
                                                </a>
                                                <h6 className="fs-14 fw-semibold mb-0">
                                                    <a href="#/">Robin Coffin</a>
                                                </h6>
                                            </div>
                                        </td>
                                        <td>(179) 7382 829</td>
                                        <td>robin@example.com</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <Link to="/voice-call" className="btn btn-icon btn-light" aria-label="phone"><i className="ti ti-phone-calling"></i></Link>
                                                <Link to="/chat" className="btn btn-icon btn-light" aria-label="message"><i className="ti ti-message-chatbot"></i></Link>
                                                <Link to="/video-call" className="btn btn-icon btn-light" aria-label="video"><i className="ti ti-video-plus"></i></Link>
                                            </div>
                                        </td>
                                        <td>
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
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#/" className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <img src="/assets/img/avatars/avatar-58.png" alt="user" />
                                                </a>
                                                <h6 className="fs-14 fw-semibold mb-0">
                                                    <a href="#/">Vincent Thornburg</a>
                                                </h6>
                                            </div>
                                        </td>
                                        <td>(184) 2719 738</td>
                                        <td>vincent@example.com</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <Link to="/voice-call" className="btn btn-icon btn-light" aria-label="phone"><i className="ti ti-phone-calling"></i></Link>
                                                <Link to="/chat" className="btn btn-icon btn-light" aria-label="message"><i className="ti ti-message-chatbot"></i></Link>
                                                <Link to="/video-call" className="btn btn-icon btn-light" aria-label="video"><i className="ti ti-video-plus"></i></Link>
                                            </div>
                                        </td>
                                        <td>
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
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#/" className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <img src="/assets/img/avatars/avatar-61.png" alt="user" />
                                                </a>
                                                <h6 className="fs-14 fw-semibold mb-0">
                                                    <a href="#/">Fran Faulkner</a>
                                                </h6>
                                            </div>
                                        </td>
                                        <td>(184) 2719 738</td>
                                        <td>franfaulker@example.com</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <Link to="/voice-call" className="btn btn-icon btn-light" aria-label="phone"><i className="ti ti-phone-calling"></i></Link>
                                                <Link to="/chat" className="btn btn-icon btn-light" aria-label="message"><i className="ti ti-message-chatbot"></i></Link>
                                                <Link to="/video-call" className="btn btn-icon btn-light" aria-label="video"><i className="ti ti-video-plus"></i></Link>
                                            </div>
                                        </td>
                                        <td>
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
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#/" className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <img src="/assets/img/avatars/avatar-60.png" alt="user" />
                                                </a>
                                                <h6 className="fs-14 fw-semibold mb-0">
                                                    <a href="#/">Ernestine Waller</a>
                                                </h6>
                                            </div>
                                        </td>
                                        <td>(183) 9302 890</td>
                                        <td>waller@example.com</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <Link to="/voice-call" className="btn btn-icon btn-light" aria-label="phone"><i className="ti ti-phone-calling"></i></Link>
                                                <Link to="/chat" className="btn btn-icon btn-light" aria-label="message"><i className="ti ti-message-chatbot"></i></Link>
                                                <Link to="/video-call" className="btn btn-icon btn-light" aria-label="video"><i className="ti ti-video-plus"></i></Link>
                                            </div>
                                        </td>
                                        <td>
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
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#/" className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <img src="/assets/img/avatars/avatar-73.png" alt="user" />
                                                </a>
                                                <h6 className="fs-14 fw-semibold mb-0">
                                                    <a href="#/">Jared Adams</a>
                                                </h6>
                                            </div>
                                        </td>
                                        <td>(120) 3728 039</td>
                                        <td>jaredadams@example.com</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <Link to="/voice-call" className="btn btn-icon btn-light" aria-label="phone"><i className="ti ti-phone-calling"></i></Link>
                                                <Link to="/chat" className="btn btn-icon btn-light" aria-label="message"><i className="ti ti-message-chatbot"></i></Link>
                                                <Link to="/video-call" className="btn btn-icon btn-light" aria-label="video"><i className="ti ti-video-plus"></i></Link>
                                            </div>
                                        </td>
                                        <td>
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
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#/" className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <img src="/assets/img/avatars/avatar-66.png" alt="user" />
                                                </a>
                                                <h6 className="fs-14 fw-semibold mb-0">
                                                    <a href="#/">Reyna Pelfrey</a>
                                                </h6>
                                            </div>
                                        </td>
                                        <td>(102) 8480 832</td>
                                        <td>reynapelfrey@example.com</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <Link to="/voice-call" className="btn btn-icon btn-light" aria-label="phone"><i className="ti ti-phone-calling"></i></Link>
                                                <Link to="/chat" className="btn btn-icon btn-light" aria-label="message"><i className="ti ti-message-chatbot"></i></Link>
                                                <Link to="/video-call" className="btn btn-icon btn-light" aria-label="video"><i className="ti ti-video-plus"></i></Link>
                                            </div>
                                        </td>
                                        <td>
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
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#/" className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <img src="/assets/img/avatars/avatar-65.png" alt="user" />
                                                </a>
                                                <h6 className="fs-14 fw-semibold mb-0">
                                                    <a href="#/">Rafael Lowe</a>
                                                </h6>
                                            </div>
                                        </td>
                                        <td>(162) 8920 713</td>
                                        <td>rafeallowe@example.com</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <Link to="/voice-call" className="btn btn-icon btn-light" aria-label="phone"><i className="ti ti-phone-calling"></i></Link>
                                                <Link to="/chat" className="btn btn-icon btn-light" aria-label="message"><i className="ti ti-message-chatbot"></i></Link>
                                                <Link to="/video-call" className="btn btn-icon btn-light" aria-label="video"><i className="ti ti-video-plus"></i></Link>
                                            </div>
                                        </td>
                                        <td>
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
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#/" className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <img src="/assets/img/avatars/avatar-74.png" alt="user" />
                                                </a>
                                                <h6 className="fs-14 fw-semibold mb-0">
                                                    <a href="#/">Enrique Ratcliff</a>
                                                </h6>
                                            </div>
                                        </td>
                                        <td>(189) 0920 723</td>
                                        <td>enrique@example.com</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <Link to="/voice-call" className="btn btn-icon btn-light" aria-label="phone"><i className="ti ti-phone-calling"></i></Link>
                                                <Link to="/chat" className="btn btn-icon btn-light" aria-label="message"><i className="ti ti-message-chatbot"></i></Link>
                                                <Link to="/video-call" className="btn btn-icon btn-light" aria-label="video"><i className="ti ti-video-plus"></i></Link>
                                            </div>
                                        </td>
                                        <td>
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
                                        </td>
                                    </tr>
                                                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#/" className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <img src="/assets/img/avatars/avatar-64.png" alt="user" />
                                                </a>
                                                <h6 className="fs-14 fw-semibold mb-0">
                                                    <a href="#/">Elizabeth Pegues</a>
                                                </h6>
                                            </div>
                                        </td>
                                        <td>(168) 8392 823</td>
                                        <td>elizabeth@example.com</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <Link to="/voice-call" className="btn btn-icon btn-light" aria-label="phone"><i className="ti ti-phone-calling"></i></Link>
                                                <Link to="/chat" className="btn btn-icon btn-light" aria-label="message"><i className="ti ti-message-chatbot"></i></Link>
                                                <Link to="/video-call" className="btn btn-icon btn-light" aria-label="video"><i className="ti ti-video-plus"></i></Link>
                                            </div>
                                        </td>
                                        <td>
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
                                        </td>
                                    </tr>
                                                            </tbody>
                        </table>
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

export default ContactList;
