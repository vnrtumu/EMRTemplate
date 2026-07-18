import { Link } from 'react-router-dom';
import '../../style/css/Applications.css';

const Contacts = () => {
  const contactsData = [
    { name: 'James Jackson', email: 'jamesjackson@example.com', img: 'avatar-21.jpg', status: 'online' },
    { name: 'Robin Coffin', email: 'robin@example.com', img: 'avatar-22.jpg', status: 'offline' },
    { name: 'Vincent Thornburg', email: 'vincent@example.com', img: 'avatar-23.jpg', status: 'online' },
    { name: 'Fran Faulkner', email: 'franfaulkner@example.com', img: 'avatar-24.jpg', status: 'away' },
    { name: 'Ernestine Waller', email: 'Waller@example.com', img: 'avatar-25.jpg', status: 'online' },
    { name: 'Jared Adams', email: 'jaredadams@example.com', img: 'avatar-26.jpg', status: 'offline' },
    { name: 'Reyna Pelfrey', email: 'renyapelfrey@example.com', img: 'avatar-27.jpg', status: 'online' },
    { name: 'Rafael Lowe', email: 'rafeallowe@example.com', img: 'avatar-28.jpg', status: 'online' },
    { name: 'Enrique Ratcliff', email: 'enrique@example.com', img: 'avatar-29.jpg', status: 'away' },
    { name: 'Elizabeth Pegues', email: 'elizabeth@example.com', img: 'avatar-30.jpg', status: 'online' },
    { name: 'Jenna Alford', email: 'jennaalford@example.com', img: 'avatar-31.jpg', status: 'offline' },
    { name: 'Teresa Boggs', email: 'teresaboggs@example.com', img: 'avatar-33.jpg', status: 'online' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return '#10b981'; // success
      case 'away': return '#f59e0b'; // warning
      case 'offline': default: return '#94a3b8'; // slate
    }
  };

  return (
    <>
      <div className="content pb-0">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div className="breadcrumb-arrow">
            <h4 className="mb-1">Contacts</h4>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item"><span className="text-decoration-none text-muted">Applications</span></li>
                <li className="breadcrumb-item active">Contacts</li>
              </ol>
            </div>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <Link to="/contacts" className="btn btn-icon btn-white active shadow-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Grid"><i className="ti ti-layout-grid text-primary"></i></Link>
            <Link to="/contact-list" className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="List"><i className="ti ti-layout-list"></i></Link>
            <button className="btn btn-primary premium-btn" data-bs-toggle="modal" data-bs-target="#add_modal"><i className="ti ti-square-rounded-plus me-2"></i>New Contact</button>
          </div>
        </div>

        <div className="row g-4">
          {contactsData.map((contact, index) => (
            <div className="col-xxl-3 col-xl-4 col-md-6" key={index}>
              <div className="premium-card contact-grid-card">
                <div className="position-relative d-inline-block">
                  <div className="avatar">
                    <img src={`/assets/img/avatars/${contact.img}`} className="w-100 h-100 rounded-circle object-fit-cover" alt={contact.name} />
                  </div>
                  <span className="contact-status-dot" style={{ backgroundColor: getStatusColor(contact.status) }}></span>
                </div>
                
                <h5 className="fs-16 fw-bold mt-2 mb-1"><a href="#/" className="text-dark text-decoration-none">{contact.name}</a></h5>
                <p className="fs-13 text-muted mb-3">{contact.email}</p>
                
                <div className="contact-social-links mb-4">
                  <a href="#/"><i className="ti ti-brand-facebook"></i></a>
                  <a href="#/"><i className="ti ti-brand-twitter"></i></a>
                  <a href="#/"><i className="ti ti-brand-linkedin"></i></a>
                </div>
                
                <div className="d-flex align-items-center justify-content-center gap-3 pt-3 border-top">
                  <Link to="/voice-call" className="btn btn-icon btn-light rounded-circle text-primary hover-scale"><i className="ti ti-phone-calling"></i></Link>
                  <Link to="/chat" className="btn btn-icon btn-light rounded-circle text-info hover-scale"><i className="ti ti-message-chatbot"></i></Link>
                  <Link to="/video-call" className="btn btn-icon btn-light rounded-circle text-success hover-scale"><i className="ti ti-video-plus"></i></Link>
                </div>

                <div className="position-absolute top-0 end-0 m-3">
                  <button className="btn btn-icon btn-sm btn-white rounded-circle shadow-sm" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical"></i></button>
                  <ul className="dropdown-menu dropdown-menu-end p-2 border-0 shadow-lg" style={{ borderRadius: '12px' }}>
                    <li><button className="dropdown-item rounded py-2" data-bs-toggle="modal" data-bs-target="#edit_modal"><i className="ti ti-edit me-2 text-muted"></i>Edit</button></li>
                    <li><button className="dropdown-item rounded py-2 text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="ti ti-trash me-2"></i>Delete</button></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contacts;
