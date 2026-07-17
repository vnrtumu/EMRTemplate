import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const INITIAL_NOTI_SETTINGS = [
  { key: 'emailNoti', label: 'Email Notifications', push: false, email: true, sms: true },
  { key: 'apptAlerts', label: 'Appointment Alerts', push: true, email: false, sms: true },
  { key: 'subAlerts', label: 'Subscription Alerts', push: true, email: true, sms: false },
  { key: 'securityAlerts', label: 'Security Alerts', push: true, email: false, sms: true },
  { key: 'deviceAlerts', label: 'Device Login Alerts', push: false, email: true, sms: true },
];

const NotificationSettings = () => {
  const [notiSettings, setNotiSettings] = useState(INITIAL_NOTI_SETTINGS);
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(INITIAL_NOTI_SETTINGS)));

  // Modal State
  const [saveSuccessModal, setSaveSuccessModal] = useState(false);

  // Toggle switch in row
  const handleToggle = (idx, channel) => {
    setFormData(prev => prev.map((row, rIdx) => rIdx === idx ? {
      ...row,
      [channel]: !row[channel]
    } : row));
  };

  // Submit changes
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotiSettings(JSON.parse(JSON.stringify(formData)));
    setSaveSuccessModal(true);
  };

  // Cancel changes
  const handleCancel = (e) => {
    e.preventDefault();
    setFormData(JSON.parse(JSON.stringify(notiSettings)));
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
              <li className="breadcrumb-item active">Notifications</li>
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
            <Link to="/security-settings" className="nav-link border rounded fw-semibold">
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
            <Link to="/notifications-settings" className="nav-link border rounded fw-semibold active">
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

        {/* Notification Settings Table */}
        <form onSubmit={handleSubmit}>
          <div className="card border-0 shadow-sm mb-0">
            <div className="card-header border-0 pb-1 pt-4 px-4">
              <h5 className="mb-0 fw-bold">Notification Channels</h5>
            </div>

            <div className="card-body p-4">
              <div className="table-responsive">
                <table className="table table-modern mb-0 align-middle">
                  <thead className="table-light">
                    <tr>
                      <th className="w-50 ps-4">General Notifications</th>
                      <th>Push</th>
                      <th>Email</th>
                      <th>SMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.map((row, idx) => (
                      <tr key={row.key}>
                        <td className="ps-4 fw-semibold text-dark fs-14">{row.label}</td>
                        <td>
                          <div className="form-check form-switch p-0 d-flex align-items-center ps-0">
                            <input 
                              className="form-check-input ms-0" 
                              type="checkbox" 
                              checked={row.push}
                              onChange={() => handleToggle(idx, 'push')}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check form-switch p-0 d-flex align-items-center ps-0">
                            <input 
                              className="form-check-input ms-0" 
                              type="checkbox" 
                              checked={row.email}
                              onChange={() => handleToggle(idx, 'email')}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check form-switch p-0 d-flex align-items-center ps-0">
                            <input 
                              className="form-check-input ms-0" 
                              type="checkbox" 
                              checked={row.sms}
                              onChange={() => handleToggle(idx, 'sms')}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Form buttons */}
              <div className="d-flex align-items-center justify-content-end gap-2 border-top mt-4 pt-3">
                <button type="button" className="btn btn-light border py-2 px-4" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary py-2 px-4">Save Changes</button>
              </div>

            </div>
          </div>
        </form>
      </div>

      {/* Stateful Save Success Modal */}
      {saveSuccessModal && (
        <div className="modal-backdrop fade show"></div>
      )}
      {saveSuccessModal && (
        <div className="modal fade show d-block animate-fade-in" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-circle-check text-success fs-22"></i>
                  Notification Settings Saved
                </h5>
                <button type="button" className="btn-close" onClick={() => setSaveSuccessModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-0 fs-14 text-secondary">
                  Your notification alerts, push triggers, and SMS gateways have been updated.
                </p>
              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-primary w-100" onClick={() => setSaveSuccessModal(false)}>Continue</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default NotificationSettings;
