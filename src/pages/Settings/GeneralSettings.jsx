import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const INITIAL_SETTINGS = {
  hospitalName: 'Dreams EMR Hospital',
  email: 'contact@dreams-emr.com',
  mobileNumber: '+1 89103 24901',
  addressLine1: '123 Medical Plaza',
  addressLine2: 'Suite 400',
  pincode: '90001',
  country: 'United States',
  state: 'California',
  city: 'Los Angeles',
  avatarFile: null
};

const GeneralSettings = () => {
  const [settings, setSettings] = useState(INITIAL_SETTINGS);
  const [formData, setFormData] = useState({ ...INITIAL_SETTINGS });

  // Modal State
  const [saveSuccessModal, setSaveSuccessModal] = useState(false);

  // Handle Input Changes
  const handleInputChange = (field, val) => {
    setFormData(prev => ({
      ...prev,
      [field]: val
    }));
  };

  // Image Upload Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          avatarFile: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData(prev => ({
      ...prev,
      avatarFile: null
    }));
  };

  // Save Settings Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSettings({ ...formData });
    setSaveSuccessModal(true);
  };

  // Revert changes on cancel
  const handleCancel = (e) => {
    e.preventDefault();
    setFormData({ ...settings });
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
              <li className="breadcrumb-item active">Settings</li>
            </ol>
          </div>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-tabs nav-item-primary mb-3 border-bottom pb-4 mb-4 d-flex align-items-center gap-2">
          <li className="nav-item">
            <Link to="/general-settings" className="nav-link border rounded fw-semibold active">
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

        {/* Form panel */}
        <form onSubmit={handleSubmit}>
          <div className="card border-0 shadow-sm mb-0">
            <div className="card-header border-0 pb-1 pt-4 px-4">
              <h5 className="mb-0 fw-bold">Personal Information</h5>
            </div>
            <div className="card-body p-4">
              
              {/* Profile Image changer */}
              <div className="mb-4">
                <label className="form-label fw-semibold text-secondary">Profile Image</label>
                <div className="d-flex align-items-center flex-wrap gap-3">
                  <div className="flex-shrink-0">
                    <div className="position-relative d-flex align-items-center border rounded">
                      <img 
                        src={formData.avatarFile || "/assets/img/avatars/avatar-44.jpg"} 
                        className="avatar avatar-xxl rounded" 
                        alt="patient" 
                      />
                    </div>
                  </div>
                  <div className="d-inline-flex flex-column align-items-start">
                    <div className="d-inline-flex align-items-start gap-2 mb-2">
                      <div className="drag-upload-btn btn btn-dark position-relative py-1.5 px-3">
                        <i className="ti ti-arrows-exchange-2 me-1"></i>Change Image
                        <input type="file" className="position-absolute opacity-0 start-0 top-0 w-100 h-100" style={{ cursor: 'pointer' }} onChange={handleImageChange} />
                      </div>
                      {(formData.avatarFile) && (
                        <button type="button" className="btn btn-danger d-flex align-items-center gap-1 py-1.5 px-3" onClick={handleRemoveImage}>
                          <i className="ti ti-trash"></i> Remove
                        </button>
                      )}
                    </div>
                    <span className="fs-12 text-muted">Use JPEG, PNG, or GIF. Best size: 200x200 pixels. Keep it under 5MB</span>
                  </div>
                </div>
              </div>

              {/* Hospital fields */}
              <div className="border-bottom mb-4 pb-4">
                <div className="row g-3">
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label fw-medium text-secondary">Hospital Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.hospitalName}
                      onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label fw-medium text-secondary">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label fw-medium text-secondary">Mobile Number</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.mobileNumber}
                      onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Address details */}
              <div className="border-bottom mb-4 pb-4">
                <h5 className="mb-3 fw-bold">Address</h5>
                
                <div className="row g-3">
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label fw-medium text-secondary">Address Line 1</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.addressLine1}
                      onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label fw-medium text-secondary">Address Line 2</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.addressLine2}
                      onChange={(e) => handleInputChange('addressLine2', e.target.value)}
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label fw-medium text-secondary">Pincode</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label fw-medium text-secondary">Country</label>
                    <select 
                      className="form-select"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                    >
                      <option value="Select">Select</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                    </select>
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label fw-medium text-secondary">State</label>
                    <select 
                      className="form-select"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                    >
                      <option value="Select">Select</option>
                      <option value="California">California</option>
                      <option value="New York">New York</option>
                      <option value="Texas">Texas</option>
                      <option value="Florida">Florida</option>
                    </select>
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label fw-medium text-secondary">City</label>
                    <select 
                      className="form-select"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    >
                      <option value="Select">Select</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="San Diego">San Diego</option>
                      <option value="Fresno">Fresno</option>
                      <option value="San Francisco">San Francisco</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Form buttons */}
              <div className="d-flex align-items-center justify-content-end gap-2">
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
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-circle-check text-success fs-22"></i>
                  Settings Saved
                </h5>
                <button type="button" className="btn-close" onClick={() => setSaveSuccessModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-0 fs-14 text-secondary">
                  Your general hospital and address settings have been updated successfully.
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

export default GeneralSettings;
