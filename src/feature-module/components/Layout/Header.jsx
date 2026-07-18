import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="navbar-header">
      <div className="page-container topbar-menu">
        <div className="d-flex align-items-center gap-2">
          <a id="mobile_btn" className="mobile-btn" href="#sidebar">
            <i className="ti ti-menu-deep fs-24"></i>
          </a>
          <Link to="/dashboard" className="logo">
            <span className="logo-light">
              <span className="logo-lg"><img src="/assets/img/logo.svg" alt="logo" /></span>
            </span>
            <span className="logo-dark">
              <span className="logo-lg"><img src="/assets/img/logo-dark.svg" alt="dark logo" /></span>
            </span>
            <span className="logo-small">
              <span className="logo-lg"><img src="/assets/img/logo-small.svg" alt="small logo" /></span>
            </span>
          </Link>
          <button className="sidenav-toggle-btn btn border-0 p-0 active" id="toggle_btn2">
            <i className="ti ti-arrow-bar-to-right"></i>
          </button>
          <div className="me-auto d-flex align-items-center header-search d-lg-flex d-none">
            <div className="input-icon position-relative me-2">
              <input type="text" className="form-control" placeholder="Search Keyword" />
              <span className="input-icon-addon d-inline-flex p-0 header-search-icon"><i className="ti ti-command"></i></span>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="me-auto d-flex align-items-center header-search d-lg-none d-sm-flex d-none">
            <div className="input-icon position-relative me-2">
              <input type="text" className="form-control" placeholder="Search Keyword" />
              <span className="input-icon-addon d-inline-flex p-0 header-search-icon"><i className="ti ti-command"></i></span>
            </div>
          </div>
          <div className="header-item">
            <div className="dropdown me-2">
              <button className="btn topbar-link btnFullscreen" aria-label="minimize">
                <i className="ti ti-minimize"></i>
              </button>
            </div>
          </div>
          <div className="header-item">
            <div className="dropdown me-2">
              <button className="topbar-link btn" data-bs-toggle="dropdown" type="button">
                <img src="/assets/img/flags/us.svg" alt="flags" height="16" />
              </button>
              <div className="dropdown-menu dropdown-menu-end p-2">
                <button className="dropdown-item">
                  <img src="/assets/img/flags/us.svg" alt="" className="me-1" height="16" />
                  <span className="align-middle">English</span>
                </button>
                <button className="dropdown-item">
                  <img src="/assets/img/flags/de.svg" alt="" className="me-1" height="16" />
                  <span className="align-middle">German</span>
                </button>
                <button className="dropdown-item">
                  <img src="/assets/img/flags/fr.svg" alt="" className="me-1" height="16" />
                  <span className="align-middle">French</span>
                </button>
                <button className="dropdown-item">
                  <img src="/assets/img/flags/ae.svg" alt="" className="me-1" height="16" />
                  <span className="align-middle">Arabic</span>
                </button>
              </div>
            </div>
          </div>
          <div className="header-item">
            <div className="dropdown me-2">
              <button className="topbar-link btn topbar-link dropdown-toggle drop-arrow-none" data-bs-toggle="dropdown" type="button">
                <i className="ti ti-bell-check fs-16 animate-ring"></i>
                <span className="notification-badge"></span>
              </button>
              <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg" style={{ minHeight: '300px' }}>
                <div className="p-2 border-bottom">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0 fs-16 fw-semibold">Notifications</h6>
                    </div>
                  </div>
                </div>
                <div className="notification-body position-relative z-2 rounded-0" data-simplebar>
                  <div className="dropdown-item notification-item py-3 text-wrap border-bottom">
                    <div className="d-flex">
                      <div className="me-2 position-relative flex-shrink-0">
                        <img src="/assets/img/avatars/avatar-28.jpg" className="avatar-md rounded-circle" alt="" />
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-medium text-dark">John Doe</p>
                        <p className="mb-1 text-wrap">added new patient <span className="fw-medium text-dark">appointment booking.</span></p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fs-12"><i className="ti ti-clock me-1"></i>4 min ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-item notification-item py-3 text-wrap border-bottom">
                    <div className="d-flex">
                      <div className="me-2 position-relative flex-shrink-0">
                        <img src="/assets/img/avatars/avatar-39.jpg" className="avatar-md rounded-circle" alt="" />
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-medium text-dark">Thomas William</p>
                        <p className="mb-1 text-wrap">booked a new appointment</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fs-12"><i className="ti ti-clock me-1"></i>8 min ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 rounded-bottom border-top text-center">
                  <Link to="/notifications" className="text-center text-decoration-underline fs-14 mb-0">View All Notifications</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="header-item d-flex me-2">
            <button className="topbar-link btn topbar-link" id="light-dark-mode" type="button" onClick={toggleTheme}>
              <i className={`ti ${theme === 'dark' ? 'ti-sun' : 'ti-moon'} fs-16`}></i>
            </button>
          </div>
          <div className="dropdown profile-dropdown d-flex align-items-center justify-content-center">
            <button className="topbar-link btn dropdown-toggle drop-arrow-none position-relative" data-bs-toggle="dropdown">
              <img src="/assets/img/avatars/avatar-31.jpg" width="32" className="rounded-2" alt="" />
              <span className="online text-success"><i className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"></i></span>
            </button>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-md p-2">
              <div className="d-flex align-items-center bg-light rounded p-2 mb-2">
                <img src="/assets/img/avatars/avatar-31.jpg" className="rounded-circle" width="42" height="42" alt="" />
                <div className="ms-2">
                  <p className="fw-medium text-dark mb-0">Jimmy Anderson</p>
                  <span className="d-block fs-13">Administrator</span>
                </div>
              </div>
              <Link to="/general-settings" className="dropdown-item">
                <i className="ti ti-user-circle me-1 align-middle"></i>
                <span className="align-middle">Profile Settings</span>
              </Link>
              <Link to="/notifications" className="dropdown-item">
                <i className="ti ti-bell me-1 align-middle"></i>
                <span className="align-middle">Notifications</span>
              </Link>
              <button className="dropdown-item">
                <i className="ti ti-help-circle me-1 align-middle"></i>
                <span className="align-middle">Help & Support</span>
              </button>
              <Link to="/general-settings" className="dropdown-item">
                <i className="ti ti-settings me-1 align-middle"></i>
                <span className="align-middle">Settings</span>
              </Link>
              <div className="pt-2 mt-2 border-top">
                <Link to="/login" className="dropdown-item text-danger">
                  <i className="ti ti-logout me-1 fs-17 align-middle"></i>
                  <span className="align-middle">Sign Out</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
