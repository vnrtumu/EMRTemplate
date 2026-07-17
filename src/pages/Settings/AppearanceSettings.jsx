import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const INITIAL_APPEARANCE = {
  theme: 'light',
  accentColor: 'primary',
  expandSidebar: true,
  timezone: 'India Standard Time - UTC +5:30',
  language: 'English (US)',
  sidebarSize: 'Medium - 250px',
  fontFamily: 'Mulish'
};

const AppearanceSettings = () => {
  const [appearance, setAppearance] = useState(INITIAL_APPEARANCE);
  const [formData, setFormData] = useState({ ...INITIAL_APPEARANCE });

  // Modal State
  const [saveSuccessModal, setSaveSuccessModal] = useState(false);

  // Handle Theme Selection Card click
  const selectTheme = (selectedTheme, e) => {
    e.preventDefault();
    setFormData(prev => ({ ...prev, theme: selectedTheme }));
    
    // Apply changes to page immediately
    const themeValue = selectedTheme === 'automatic' ? 'light' : selectedTheme;
    document.documentElement.setAttribute('data-bs-theme', themeValue);
  };

  // Handle dropdown change
  const handleDropdownChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  // Submit changes
  const handleSubmit = (e) => {
    e.preventDefault();
    setAppearance({ ...formData });
    setSaveSuccessModal(true);
  };

  // Cancel revert
  const handleCancel = (e) => {
    e.preventDefault();
    setFormData({ ...appearance });
    
    // Revert page theme immediately
    const themeValue = appearance.theme === 'automatic' ? 'light' : appearance.theme;
    document.documentElement.setAttribute('data-bs-theme', themeValue);
  };

  return (
    <>
      <style>{`
        .theme-card-bg-light {
          background-color: var(--bs-tertiary-bg) !important;
          border: 1px solid var(--bs-border-color) !important;
        }
        .theme-image-card {
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .theme-image-card:hover {
          transform: translateY(-2px);
        }
        .theme-card-active {
          border: 2px solid var(--bs-primary) !important;
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
              <li className="breadcrumb-item active">Appearance</li>
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
            <Link to="/appearance-settings" className="nav-link border rounded fw-semibold active">
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

        {/* Appearance Form */}
        <form onSubmit={handleSubmit}>
          <div className="card border-0 shadow-sm mb-0">
            <div className="card-header border-0 pb-1 pt-4 px-4">
              <h5 className="mb-0 fw-bold">Appearance Settings</h5>
            </div>

            <div className="card-body p-4">
              
              {/* Select Theme */}
              <div className="row align-items-start mb-4 g-3 border-bottom pb-4">
                <div className="col-xl-4 col-md-12">
                  <h6 className="mb-1 fs-14 fw-semibold text-dark">Theme Mode</h6>
                  <p className="fs-12 text-muted mb-0">Select your preferred color template interface</p>
                </div> 

                <div className="col-xl-8 col-md-12">
                  <div className="row g-3">
                    {/* Light */}
                    <div className="col-md-4 col-sm-6">
                      <div 
                        className={`card theme-image-card border mb-0 rounded-3 ${formData.theme === 'light' ? 'theme-card-active' : ''}`}
                        onClick={(e) => selectTheme('light', e)}
                      >
                        <div className="card-body p-2 text-center">
                          <div className="border rounded border-gray mb-2 overflow-hidden">
                            <img src="/assets/img/theme/light.jpg" className="img-fluid w-100" alt="Light theme" />
                          </div>
                          <span className={`fw-bold fs-13 ${formData.theme === 'light' ? 'text-primary' : 'text-secondary'}`}>Light</span>
                        </div> 
                      </div> 
                    </div> 

                    {/* Dark */}
                    <div className="col-md-4 col-sm-6">
                      <div 
                        className={`card theme-image-card border mb-0 rounded-3 ${formData.theme === 'dark' ? 'theme-card-active' : ''}`}
                        onClick={(e) => selectTheme('dark', e)}
                      >
                        <div className="card-body p-2 text-center">
                          <div className="border rounded border-gray mb-2 overflow-hidden">
                            <img src="/assets/img/theme/dark.jpg" className="img-fluid w-100" alt="Dark theme" />
                          </div>
                          <span className={`fw-bold fs-13 ${formData.theme === 'dark' ? 'text-primary' : 'text-secondary'}`}>Dark</span>
                        </div> 
                      </div> 
                    </div> 

                    {/* Automatic */}
                    <div className="col-md-4 col-sm-6">
                      <div 
                        className={`card theme-image-card border mb-0 rounded-3 ${formData.theme === 'automatic' ? 'theme-card-active' : ''}`}
                        onClick={(e) => selectTheme('automatic', e)}
                      >
                        <div className="card-body p-2 text-center">
                          <div className="border rounded border-gray mb-2 overflow-hidden">
                            <img src="/assets/img/theme/automatic.jpg" className="img-fluid w-100" alt="Automatic theme" />
                          </div>
                          <span className={`fw-bold fs-13 ${formData.theme === 'automatic' ? 'text-primary' : 'text-secondary'}`}>Automatic</span>
                        </div> 
                      </div> 
                    </div> 
                  </div>
                </div> 
              </div>

              {/* Accent Color */}
              <div className="row align-items-center mb-4 border-bottom pb-4">
                <div className="col-xl-4 col-md-4">
                  <h6 className="mb-1 fs-14 fw-semibold text-dark">Accent Color</h6>
                  <p className="fs-12 text-muted mb-0">Choose website theme primary accents</p>
                </div> 

                <div className="col-xl-8 col-md-8">
                  <div className="d-flex align-items-center gap-2 flex-wrap mt-2">
                    {['primary', 'secondary', 'success', 'danger', 'info', 'warning'].map(col => (
                      <div className="theme-colorsset" key={col}>
                        <input 
                          type="radio" 
                          name="color" 
                          id={`${col}color`} 
                          checked={formData.accentColor === col}
                          onChange={() => setFormData(prev => ({ ...prev, accentColor: col }))}
                        />
                        <label htmlFor={`${col}color`} className={`${col}-clr`} style={{ cursor: 'pointer' }}></label>
                      </div>
                    ))}
                  </div>
                </div> 
              </div>

              {/* Expand Sidebar */}
              <div className="row align-items-center mb-4 border-bottom pb-4">
                <div className="col-xl-8 col-md-8 col-8">
                  <h6 className="mb-1 fs-14 fw-semibold text-dark">Expand Sidebar</h6>
                  <p className="fs-12 text-muted mb-0">Default left navigation panel to expanded width</p>
                </div> 

                <div className="col-xl-4 col-md-4 col-4 d-flex align-items-center justify-content-end">
                  <div className="form-check form-switch m-0 d-flex align-items-center ps-0">
                    <input 
                      className="form-check-input ms-0" 
                      type="checkbox" 
                      checked={formData.expandSidebar}
                      onChange={(e) => setFormData(prev => ({ ...prev, expandSidebar: e.target.checked }))}
                    />
                  </div>
                </div> 
              </div>

              {/* Dropdowns row */}
              <div className="row g-4 mb-4">
                {/* Timezone */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label fw-semibold text-secondary">Timezone</label>
                  <select 
                    className="form-select"
                    value={formData.timezone}
                    onChange={(e) => handleDropdownChange('timezone', e.target.value)}
                  >
                    <option value="Pacific Standard Time - UTC -8">Pacific Standard Time - UTC -8</option>
                    <option value="Eastern Standard Time - UTC -5">Eastern Standard Time - UTC -5</option>
                    <option value="Central Standard Time - UTC -6">Central Standard Time - UTC -6</option>
                    <option value="India Standard Time - UTC +5:30">India Standard Time - UTC +5:30</option>
                    <option value="Central European Time - UTC +1">Central European Time - UTC +1</option>
                  </select>
                </div>

                {/* Language */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label fw-semibold text-secondary">Language</label>
                  <select 
                    className="form-select"
                    value={formData.language}
                    onChange={(e) => handleDropdownChange('language', e.target.value)}
                  >
                    <option value="English (US)">English (US)</option>
                    <option value="German (DE)">German (DE)</option>
                    <option value="French (FR)">French (FR)</option>
                  </select>
                </div>

                {/* Sidebar Size */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label fw-semibold text-secondary">Sidebar Size</label>
                  <select 
                    className="form-select"
                    value={formData.sidebarSize}
                    onChange={(e) => handleDropdownChange('sidebarSize', e.target.value)}
                  >
                    <option value="Small (252px)">Small (252px)</option>
                    <option value="Medium - 250px">Medium - 250px</option>
                    <option value="Large - 300px">Large - 300px</option>
                  </select>
                </div>

                {/* Font Family */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label fw-semibold text-secondary">Font Family</label>
                  <select 
                    className="form-select"
                    value={formData.fontFamily}
                    onChange={(e) => handleDropdownChange('fontFamily', e.target.value)}
                  >
                    <option value="Mulish">Mulish</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Popins">Popins</option>
                  </select>
                </div>
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
                  Appearance Saved
                </h5>
                <button type="button" className="btn-close" onClick={() => setSaveSuccessModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-0 fs-14 text-secondary">
                  Your website display settings, theme preferences, and font families have been updated.
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

export default AppearanceSettings;
