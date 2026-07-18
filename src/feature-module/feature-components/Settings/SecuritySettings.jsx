import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const SecuritySettings = () => {
  // Authentication switches
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [googleAuthEnabled, setGoogleAuthEnabled] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('+1 89103 24901');
  const [emailAddress, setEmailAddress] = useState('contact@dreams-emr.com');

  // Modals state
  const [passwordModal, setPasswordModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [deactivateModal, setDeactivateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [successAlert, setSuccessAlert] = useState({ isOpen: false, title: '', message: '' });

  // Password fields
  const [passwords, setPasswords] = useState({ oldPass: '', newPass: '', confirmPass: '' });
  const [newPhone, setNewPhone] = useState(phoneNumber);
  const [newEmail, setNewEmail] = useState(emailAddress);

  // Form handlers
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setPasswordModal(false);
    setPasswords({ oldPass: '', newPass: '', confirmPass: '' });
    setSuccessAlert({
      isOpen: true,
      title: 'Password Updated',
      message: 'Your account login credentials have been changed successfully.'
    });
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setPhoneNumber(newPhone);
    setPhoneModal(false);
    setSuccessAlert({
      isOpen: true,
      title: 'Phone Verified',
      message: `Your account security phone has been updated to ${newPhone}.`
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailAddress(newEmail);
    setEmailModal(false);
    setSuccessAlert({
      isOpen: true,
      title: 'Email Address Updated',
      message: `Your account notification email has been changed to ${newEmail}.`
    });
  };

  const handleConfirmDeactivate = () => {
    setDeactivateModal(false);
    setSuccessAlert({
      isOpen: true,
      title: 'Account Deactivated',
      message: 'Your portal login session has been frozen. Log in again to reactive your profile.'
    });
  };

  const handleConfirmDelete = () => {
    setDeleteModal(false);
    setSuccessAlert({
      isOpen: true,
      title: 'Account Purged',
      message: 'Your account profile deletion request has been registered in our records.'
    });
  };

  return (
    <>
      <style>{`
        .theme-card-bg-light {
          background-color: var(--bs-tertiary-bg) !important;
          border: 1px solid var(--bs-border-color) !important;
        }
      `}</style>

      <div className="content">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Settings</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/general-settings" className="text-decoration-none">Settings</Link></li>
              <li className="breadcrumb-item active">Security</li>
            </ol>
          </div>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-tabs nav-item-primary mb-3 border-bottom pb-4 mb-4 d-flex align-items-center gap-2">
          <li className="nav-item">
            <Link to="/general-settings" className="nav-link border rounded fw-semibold">
              General
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/security-settings" className="nav-link border rounded fw-semibold active">
              Security
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/preferences-settings" className="nav-link border rounded fw-semibold">
              Preferences
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/appearance-settings" className="nav-link border rounded fw-semibold">
              Appearance
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notifications-settings" className="nav-link border rounded fw-semibold">
              Notifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user-permissions-settings" className="nav-link border rounded fw-semibold">
              User Permissions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/plans-billings-settings" className="nav-link border rounded fw-semibold">
              Plans & Billing
            </Link>
          </li>
        </ul>

        {/* Security Shell */}
        <div className="card border-0 shadow-sm mb-0">
          <div className="card-header border-0 pb-1 pt-4 px-4">
            <h5 className="mb-0 fw-bold">Security Settings</h5>
          </div>

          <div className="card-body p-4">
            
            {/* Password */}
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
              <div className="d-flex align-items-center flex-wrap gap-3">
                <span className="avatar avatar-lg border theme-card-bg-light flex-shrink-0 rounded d-flex align-items-center justify-content-center">
                  <i className="ti ti-lock-check text-primary fs-24"></i>
                </span>
                <div>
                  <h6 className="fw-semibold fs-14 mb-1">Account Password</h6>
                  <p className="mb-0 text-muted fs-13">Set a unique password to secure your EMR access credentials</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-primary-transparent text-primary px-3 py-1.5 fs-12">Last Changed: Mar 18, 2025</span>
                <button type="button" className="btn btn-outline-primary btn-sm px-3" onClick={() => setPasswordModal(true)}>Edit</button>
              </div>
            </div>

            {/* Two Factor */}
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
              <div className="d-flex align-items-center flex-wrap gap-3">
                <span className="avatar avatar-lg border theme-card-bg-light flex-shrink-0 rounded d-flex align-items-center justify-content-center">
                  <i className="ti ti-shield-half text-primary fs-24"></i>
                </span>
                <div>
                  <h6 className="fw-semibold fs-14 mb-1">Two-Factor Authentication (2FA)</h6>
                  <p className="mb-0 text-muted fs-13">Require mobile PIN validation for all administrative logins</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className={`badge ${twoFactorEnabled ? 'bg-success-transparent text-success' : 'bg-danger-transparent text-danger'} px-3 py-1.5 fs-12`}>
                  {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                </span>
                <div className="form-check form-switch m-0 d-flex align-items-center ps-0">
                  <input 
                    className="form-check-input ms-0" 
                    type="checkbox" 
                    checked={twoFactorEnabled}
                    onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                  />
                </div>
              </div>
            </div>

            {/* Google Auth */}
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
              <div className="d-flex align-items-center flex-wrap gap-3">
                <span className="avatar avatar-lg border theme-card-bg-light flex-shrink-0 rounded d-flex align-items-center justify-content-center">
                  <i className="ti ti-brand-google-filled text-primary fs-24"></i>
                </span>
                <div>
                  <h6 className="fw-semibold fs-14 mb-1">Google Identity Link</h6>
                  <p className="mb-0 text-muted fs-13">Allow authentication via hospital single sign-on services</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className={`badge ${googleAuthEnabled ? 'bg-success-transparent text-success' : 'bg-danger-transparent text-danger'} px-3 py-1.5 fs-12`}>
                  {googleAuthEnabled ? 'Connected' : 'Disconnected'}
                </span>
                <div className="form-check form-switch m-0 d-flex align-items-center ps-0">
                  <input 
                    className="form-check-input ms-0" 
                    type="checkbox" 
                    checked={googleAuthEnabled}
                    onChange={(e) => setGoogleAuthEnabled(e.target.checked)}
                  />
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
              <div className="d-flex align-items-center flex-wrap gap-3">
                <span className="avatar avatar-lg border theme-card-bg-light flex-shrink-0 rounded d-flex align-items-center justify-content-center">
                  <i className="ti ti-phone text-primary fs-24"></i>
                </span>
                <div>
                  <h6 className="fw-semibold fs-14 mb-1">Backup Phone Number</h6>
                  <p className="mb-0 text-muted fs-13">Current: <span className="fw-bold text-dark">{phoneNumber}</span></p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-success-transparent text-success px-3 py-1.5 fs-12">Verified</span>
                <button type="button" className="btn btn-outline-primary btn-sm px-3" onClick={() => { setNewPhone(phoneNumber); setPhoneModal(true); }}>Edit</button>
              </div>
            </div>

            {/* Email Address */}
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
              <div className="d-flex align-items-center flex-wrap gap-3">
                <span className="avatar avatar-lg border theme-card-bg-light flex-shrink-0 rounded d-flex align-items-center justify-content-center">
                  <i className="ti ti-mail text-primary fs-24"></i>
                </span>
                <div>
                  <h6 className="fw-semibold fs-14 mb-1">Recovery Email Address</h6>
                  <p className="mb-0 text-muted fs-13">Current: <span className="fw-bold text-dark">{emailAddress}</span></p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-success-transparent text-success px-3 py-1.5 fs-12">Verified</span>
                <button type="button" className="btn btn-outline-primary btn-sm px-3" onClick={() => { setNewEmail(emailAddress); setEmailModal(true); }}>Edit</button>
              </div>
            </div>

            {/* Deactivate */}
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
              <div className="d-flex align-items-center flex-wrap gap-3">
                <span className="avatar avatar-lg border theme-card-bg-light flex-shrink-0 rounded d-flex align-items-center justify-content-center">
                  <i className="ti ti-xbox-x text-danger fs-24"></i>
                </span>
                <div>
                  <h6 className="fw-semibold fs-14 mb-1 text-danger">Freeze Account Session</h6>
                  <p className="mb-0 text-muted fs-13">Logs out all devices and locks system access until next admin credential verification</p>
                </div>
              </div>
              <div>
                <button type="button" className="btn btn-outline-danger btn-sm px-3" onClick={() => setDeactivateModal(true)}>Deactivate</button>
              </div>
            </div>

            {/* Delete Account */}
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="d-flex align-items-center flex-wrap gap-3">
                <span className="avatar avatar-lg border theme-card-bg-light flex-shrink-0 rounded d-flex align-items-center justify-content-center">
                  <i className="ti ti-trash text-danger fs-24"></i>
                </span>
                <div>
                  <h6 className="fw-semibold fs-14 mb-1 text-danger">Permanently Delete EMR Profile</h6>
                  <p className="mb-0 text-muted fs-13">Request permanent erasure of all administrative privileges. This action is irreversible.</p>
                </div>
              </div>
              <div>
                <button type="button" className="btn btn-danger btn-sm px-3" onClick={() => setDeleteModal(true)}>Delete Account</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Stateful Edit Password Modal */}
      {passwordModal && <div className="modal-backdrop fade show"></div>}
      {passwordModal && (
        <div className="modal fade show d-block animate-fade-in" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <form onSubmit={handlePasswordSubmit}>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                    <i className="ti ti-lock-check text-primary fs-22"></i>
                    Change Account Password
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setPasswordModal(false)}></button>
                </div>
                <div className="modal-body py-4">
                  <div className="mb-3">
                    <label className="form-label fw-medium text-secondary">Old Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      value={passwords.oldPass}
                      onChange={(e) => setPasswords(prev => ({ ...prev, oldPass: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-medium text-secondary">New Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      value={passwords.newPass}
                      onChange={(e) => setPasswords(prev => ({ ...prev, newPass: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label fw-medium text-secondary">Confirm New Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      value={passwords.confirmPass}
                      onChange={(e) => setPasswords(prev => ({ ...prev, confirmPass: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0 d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setPasswordModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary flex-fill py-2">Save Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Phone Number Modal */}
      {phoneModal && <div className="modal-backdrop fade show"></div>}
      {phoneModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <form onSubmit={handlePhoneSubmit}>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                    <i className="ti ti-phone text-primary fs-22"></i>
                    Update Phone Number
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setPhoneModal(false)}></button>
                </div>
                <div className="modal-body py-4">
                  <label className="form-label fw-medium text-secondary">Phone Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="modal-footer border-0 pt-0 d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setPhoneModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary flex-fill py-2">Verify & Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Email Address Modal */}
      {emailModal && <div className="modal-backdrop fade show"></div>}
      {emailModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <form onSubmit={handleEmailSubmit}>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                    <i className="ti ti-mail text-primary fs-22"></i>
                    Update Recovery Email
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setEmailModal(false)}></button>
                </div>
                <div className="modal-body py-4">
                  <label className="form-label fw-medium text-secondary">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="modal-footer border-0 pt-0 d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setEmailModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary flex-fill py-2">Save Email</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Deactivate confirmation */}
      {deactivateModal && <div className="modal-backdrop fade show"></div>}
      {deactivateModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark">Freeze Account</h5>
                <button type="button" className="btn-close" onClick={() => setDeactivateModal(false)}></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-0 text-secondary">Are you sure you want to deactivate your administrative session? You will be logged out of all connected browsers.</p>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setDeactivateModal(false)}>Cancel</button>
                <button type="button" className="btn btn-danger flex-fill py-2" onClick={handleConfirmDeactivate}>Deactivate Session</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation */}
      {deleteModal && <div className="modal-backdrop fade show"></div>}
      {deleteModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-danger">Permanently Delete Account</h5>
                <button type="button" className="btn-close" onClick={() => setDeleteModal(false)}></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-0 text-secondary">This action cannot be undone. All clinical authorizations, system logs, and roles under your EMR profile will be removed.</p>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setDeleteModal(false)}>Cancel</button>
                <button type="button" className="btn btn-danger flex-fill py-2" onClick={handleConfirmDelete}>Permanently Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Save Success Alert Modal */}
      {successAlert.isOpen && <div className="modal-backdrop fade show"></div>}
      {successAlert.isOpen && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-circle-check text-success fs-22"></i>
                  {successAlert.title}
                </h5>
                <button type="button" className="btn-close" onClick={() => setSuccessAlert({ isOpen: false, title: '', message: '' })}></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-0 text-secondary">{successAlert.message}</p>
              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-primary w-100" onClick={() => setSuccessAlert({ isOpen: false, title: '', message: '' })}>Continue</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default SecuritySettings;
