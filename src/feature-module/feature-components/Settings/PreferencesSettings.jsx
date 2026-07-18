import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const INITIAL_PREFERENCES = {
  patients: true,
  doctors: true,
  visits: true,
  appointments: true,
  laboratory: true,
  labResults: true,
  medicalRecords: true,
  pharmacy: true,
  staffs: true
};

const PreferencesSettings = () => {
  const [preferences, setPreferences] = useState(INITIAL_PREFERENCES);
  const [formData, setFormData] = useState({ ...INITIAL_PREFERENCES });

  // Modal State
  const [saveSuccessModal, setSaveSuccessModal] = useState(false);

  // Toggle single preference
  const handleToggle = (key) => {
    setFormData(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setPreferences({ ...formData });
    setSaveSuccessModal(true);
  };

  // Cancel revert
  const handleCancel = (e) => {
    e.preventDefault();
    setFormData({ ...preferences });
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
              <li className="breadcrumb-item active">Preferences</li>
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
            <Link to="/preferences-settings" className="nav-link border rounded fw-semibold active">
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

        {/* Preferences Form */}
        <form onSubmit={handleSubmit}>
          <div className="card border-0 shadow-sm mb-0">
            <div className="card-header border-0 pb-1 pt-4 px-4">
              <h5 className="mb-0 fw-bold">Module Preferences</h5>
            </div>

            <div className="card-body p-4">
              <div className="row g-3">
                
                {Object.keys(formData).map((key) => (
                  <div className="col-xxl-4 col-xl-4 col-sm-6" key={key}>
                    <div className="d-flex justify-content-between align-items-center border rounded theme-card-bg-light p-3">
                      <h6 className="fw-semibold mb-0 fs-14 text-dark text-capitalize">
                        {key === 'labResults' ? 'Lab Results' : key === 'medicalRecords' ? 'Medical Records' : key}
                      </h6>
                      <div className="form-check form-switch m-0 d-flex align-items-center ps-0">
                        <input 
                          className="form-check-input ms-0" 
                          type="checkbox" 
                          checked={formData[key]}
                          onChange={() => handleToggle(key)}
                        />
                      </div>
                    </div>
                  </div>
                ))}

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
                  Preferences Saved
                </h5>
                <button type="button" className="btn-close" onClick={() => setSaveSuccessModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-0 fs-14 text-secondary">
                  Your module preferences and interface visibility switches have been saved.
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

export default PreferencesSettings;
