import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddDoctor = () => {
  // Active Tab state (0: Basic & Account, 1: Extra Info - Education, Experience, Awards)
  const [activeTab, setActiveTab] = useState(0);

  // Form fields state
  const [formData, setFormData] = useState({
    id: "#DR0025",
    firstName: "",
    lastName: "",
    department: "",
    specialist: "",
    fees: "",
    phoneNumber: "",
    emailAddress: "",
    dob: "",
    gender: "",
    registrationNumber: "",
    languages: "",
    about: "",
    profileImage: "/assets/img/doctors/doctor-01.jpg",
    address: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
    displayName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: ""
  });

  // Dynamic list states
  const [educations, setEducations] = useState([
    { instituteName: "", qualification: "", year: "" }
  ]);
  const [experiences, setExperiences] = useState([
    { hospitalName: "", yearsCount: "", year: "" }
  ]);
  const [memberships, setMemberships] = useState([
    { title: "", year: "", description: "" }
  ]);
  const [awards, setAwards] = useState([
    { title: "", year: "", description: "" }
  ]);

  // Success modal state
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Image uploader handlers
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    setFormData(prev => ({ ...prev, profileImage: "/assets/img/doctors/doctor-01.jpg" }));
  };

  // Education list handlers
  const handleEducationChange = (index, field, value) => {
    setEducations(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const addEducation = (e) => {
    e.preventDefault();
    setEducations(prev => [...prev, { instituteName: "", qualification: "", year: "" }]);
  };

  const removeEducation = (index) => {
    setEducations(prev => {
      if (prev.length === 1) return [{ instituteName: "", qualification: "", year: "" }];
      return prev.filter((_, i) => i !== index);
    });
  };

  // Experience list handlers
  const handleExperienceChange = (index, field, value) => {
    setExperiences(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const addExperience = (e) => {
    e.preventDefault();
    setExperiences(prev => [...prev, { hospitalName: "", yearsCount: "", year: "" }]);
  };

  const removeExperience = (index) => {
    setExperiences(prev => {
      if (prev.length === 1) return [{ hospitalName: "", yearsCount: "", year: "" }];
      return prev.filter((_, i) => i !== index);
    });
  };

  // Membership list handlers
  const handleMembershipChange = (index, field, value) => {
    setMemberships(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const addMembership = (e) => {
    e.preventDefault();
    setMemberships(prev => [...prev, { title: "", year: "", description: "" }]);
  };

  const removeMembership = (index) => {
    setMemberships(prev => {
      if (prev.length === 1) return [{ title: "", year: "", description: "" }];
      return prev.filter((_, i) => i !== index);
    });
  };

  // Award list handlers
  const handleAwardChange = (index, field, value) => {
    setAwards(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const addAward = (e) => {
    e.preventDefault();
    setAwards(prev => [...prev, { title: "", year: "", description: "" }]);
  };

  const removeAward = (index) => {
    setAwards(prev => {
      if (prev.length === 1) return [{ title: "", year: "", description: "" }];
      return prev.filter((_, i) => i !== index);
    });
  };

  // Form submission / validation
  const handleNext = (e) => {
    e.preventDefault();
    // Bypassing validation (all fields optional per request)
    setActiveTab(1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bypassing validation (all fields optional per request)
    setShowSuccessModal(true);
  };

  const handleResetForm = () => {
    setFormData({
      id: `#DR${Math.floor(1000 + Math.random() * 9000)}`,
      firstName: "",
      lastName: "",
      department: "",
      specialist: "",
      fees: "",
      phoneNumber: "",
      emailAddress: "",
      dob: "",
      gender: "",
      registrationNumber: "",
      languages: "",
      about: "",
      profileImage: "/assets/img/doctors/doctor-01.jpg",
      address: "",
      country: "",
      state: "",
      city: "",
      pinCode: "",
      displayName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: ""
    });
    setEducations([{ instituteName: "", qualification: "", year: "" }]);
    setExperiences([{ hospitalName: "", yearsCount: "", year: "" }]);
    setMemberships([{ title: "", year: "", description: "" }]);
    setAwards([{ title: "", year: "", description: "" }]);
    setActiveTab(0);
    setShowSuccessModal(false);
  };

  const progressPercent = activeTab === 0 ? 50 : 100;

  return (
    <>
      <div className="content">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Add Doctor</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/doctors" className="text-decoration-none">Doctors</Link></li>
              <li className="breadcrumb-item active">Add Doctor</li>
            </ol>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <Link to="/doctors" className="fw-medium d-flex align-items-center text-decoration-none">
              <i className="ti ti-arrow-left me-1"></i>Back to Doctors
            </Link>
          </div>
        </div>

        {/* Step Progress Tracker */}
        <div className="card border-0 shadow-sm mb-4 overflow-hidden">
          <div className="card-body p-3">
            <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
              <span className="fs-14 fw-semibold text-secondary">
                Step {activeTab + 1} of 2: {activeTab === 0 ? 'Basic Information' : 'Extra Information'}
              </span>
              <span className="fs-14 fw-bold text-primary">{progressPercent}% Complete</span>
            </div>
            <div className="progress" style={{ height: '8px', borderRadius: '4px' }}>
              <div 
                className="progress-bar progress-bar-striped progress-bar-animated bg-primary" 
                role="progressbar" 
                style={{ width: `${progressPercent}%`, transition: 'width 0.4s ease', borderRadius: '4px' }} 
                aria-valuenow={progressPercent} 
                aria-valuemin="0" 
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="row row-gap-3 vertical-tab">
          {/* Left Sidebar */}
          <div className="col-xl-3 col-lg-4">
            <div className="nav flex-column nav-pills bg-white p-3 rounded shadow-sm">
              <button 
                type="button" 
                className={`nav-link text-start fw-medium d-flex align-items-center rounded w-100 border-0 mb-2 py-2 px-3 ${activeTab === 0 ? 'active text-white bg-primary' : 'text-dark bg-transparent'}`}
                onClick={() => { setActiveTab(0); window.scrollTo(0, 0); }}
              >
                <i className="ti ti-info-circle fs-18 me-2"></i>Basic Information
              </button>
              <button 
                type="button" 
                className={`nav-link text-start fw-medium d-flex align-items-center rounded w-100 border-0 py-2 px-3 ${activeTab === 1 ? 'active text-white bg-primary' : 'text-dark bg-transparent'}`}
                onClick={() => { setActiveTab(1); window.scrollTo(0, 0); }}
              >
                <i className="ti ti-vector-spline fs-18 me-2"></i>Extra Information
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="col-xl-9 col-lg-8">
            <div className="patient-form-wizard flex-fill">

              {/* STEP 0: BASIC INFORMATION */}
              {activeTab === 0 && (
                <div className="form-wizard-content active animate__animated animate__fadeIn">
                  <form onSubmit={handleNext}>
                    {/* Basic Info Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3">
                        <h5 className="mb-0 fw-bold">Basic Information</h5>
                      </div>
                      <div className="card-body pb-1">
                        {/* Profile Image Uploader */}
                        <div className="mb-4">
                          <label className="form-label fw-semibold">Profile Image</label>
                          <div className="d-flex align-items-center flex-wrap gap-3">
                            <div className="flex-shrink-0">
                              <div className="position-relative d-flex align-items-center border rounded p-1 bg-light">
                                <img src={formData.profileImage} className="avatar avatar-xxl rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="doctor" />
                              </div>
                            </div>
                            <div className="d-inline-flex flex-column align-items-start">
                              <div className="d-inline-flex align-items-start gap-2 flex-wrap mb-2">
                                <div className="drag-upload-btn btn btn-dark position-relative overflow-hidden btn-sm">
                                  <i className="ti ti-arrows-exchange-2 me-1"></i>Change Image
                                  <input type="file" className="position-absolute start-0 top-0 opacity-0 w-100 h-100" style={{ cursor: 'pointer' }} onChange={handleImageChange} accept="image/*" />
                                </div>
                                <button type="button" className="btn btn-danger btn-sm d-flex align-items-center gap-1" onClick={handleRemoveImage}>
                                  <i className="ti ti-trash"></i> Remove
                                </button>
                              </div>
                              <span className="fs-12 text-muted">Use JPEG, PNG, or GIF. Best size: 200x200 pixels. Keep it under 5MB</span>
                            </div>
                          </div>
                        </div>

                        {/* Fields */}
                        <div className="row">
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">ID</label>
                              <input type="text" className="form-control bg-light" value={formData.id} disabled />
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">First Name</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleInputChange} 
                                placeholder="Enter First Name"
                              />
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Last Name</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleInputChange} 
                                placeholder="Enter Last Name"
                              />
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Department</label>
                              <select 
                                className="form-select" 
                                name="department" 
                                value={formData.department} 
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="Dentistry">Dentistry</option>
                                <option value="Pediatrics">Pediatrics</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Orthopedics">Orthopedics</option>
                                <option value="Dermatology">Dermatology</option>
                                <option value="Neurology">Neurology</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Specialist</label>
                              <select 
                                className="form-select" 
                                name="specialist" 
                                value={formData.specialist} 
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="Dentist">Dentist</option>
                                <option value="Pediatrician">Pediatrician</option>
                                <option value="Cardiologist">Cardiologist</option>
                                <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Neurologist">Neurologist</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Fees ($)</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="fees" 
                                value={formData.fees} 
                                onChange={handleInputChange} 
                                placeholder="Enter Consultation Fees"
                              />
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Phone Number</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="phoneNumber" 
                                value={formData.phoneNumber} 
                                onChange={handleInputChange} 
                                placeholder="Enter Phone Number"
                              />
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Email Address</label>
                              <input 
                                type="email" 
                                className="form-control" 
                                name="emailAddress" 
                                value={formData.emailAddress} 
                                onChange={handleInputChange} 
                                placeholder="Enter Email"
                              />
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">DOB</label>
                              <input 
                                type="date" 
                                className="form-control" 
                                name="dob" 
                                value={formData.dob} 
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Gender</label>
                              <select 
                                className="form-select" 
                                name="gender" 
                                value={formData.gender} 
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Registration Number</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="registrationNumber" 
                                value={formData.registrationNumber} 
                                onChange={handleInputChange} 
                                placeholder="Enter Reg No"
                              />
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Known Languages</label>
                              <select 
                                className="form-select" 
                                name="languages" 
                                value={formData.languages} 
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="English">English</option>
                                <option value="Arabic">Arabic</option>
                                <option value="French">French</option>
                                <option value="Spanish">Spanish</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-12 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">About</label>
                              <textarea 
                                className="form-control" 
                                rows="4" 
                                name="about" 
                                value={formData.about} 
                                onChange={handleInputChange} 
                                placeholder="Short profile description..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Address Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3">
                        <h5 className="mb-0 fw-bold">Address Information</h5>
                      </div>
                      <div className="card-body pb-1">
                        <div className="row">
                          <div className="col-xl-12 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Address</label>
                              <input 
                                className="form-control" 
                                name="address" 
                                type="text" 
                                value={formData.address} 
                                onChange={handleInputChange} 
                                placeholder="Enter Street Address"
                              />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Country</label>
                              <select 
                                className="form-select" 
                                name="country" 
                                value={formData.country} 
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">State</label>
                              <select 
                                className="form-select" 
                                name="state" 
                                value={formData.state} 
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="California">California</option>
                                <option value="New York">New York</option>
                                <option value="Texas">Texas</option>
                                <option value="Florida">Florida</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">City</label>
                              <select 
                                className="form-select" 
                                name="city" 
                                value={formData.city} 
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="San Diego">San Diego</option>
                                <option value="Fresno">Fresno</option>
                                <option value="San Francisco">San Francisco</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Pin code</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="pinCode" 
                                value={formData.pinCode} 
                                onChange={handleInputChange} 
                                placeholder="Zip or Postal code"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Account Details Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3">
                        <h5 className="mb-0 fw-bold">Account Details</h5>
                      </div>
                      <div className="card-body pb-1">
                        <div className="row">
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Display Name</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="displayName" 
                                value={formData.displayName} 
                                onChange={handleInputChange} 
                                placeholder="Name to display on portal"
                              />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">User Name</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="userName" 
                                value={formData.userName} 
                                onChange={handleInputChange} 
                                placeholder="Enter Username"
                              />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Password</label>
                              <input 
                                type="password" 
                                className="form-control" 
                                name="password" 
                                value={formData.password} 
                                onChange={handleInputChange} 
                                placeholder="Enter Password"
                              />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Confirm Password</label>
                              <input 
                                type="password" 
                                className="form-control" 
                                name="confirmPassword" 
                                value={formData.confirmPassword} 
                                onChange={handleInputChange} 
                                placeholder="Confirm Password"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer buttons */}
                    <div className="d-flex justify-content-end gap-2 mb-4">
                      <Link to="/doctors" className="btn btn-white border px-3">Cancel</Link>
                      <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-1">
                        Save & Next <i className="ti ti-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 1: EXTRA INFORMATION */}
              {activeTab === 1 && (
                <div className="form-wizard-content active animate__animated animate__fadeIn">
                  <form onSubmit={handleSubmit}>
                    {/* Educational Details Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fw-bold">Educational Details</h5>
                        <button type="button" className="btn btn-primary btn-sm d-flex align-items-center gap-1" onClick={addEducation}>
                          <i className="ti ti-plus"></i> Add Education
                        </button>
                      </div>
                      <div className="card-body">
                        {educations.map((edu, index) => (
                          <div key={index} className="edu-record mb-4 p-3 border rounded bg-light-subtle position-relative">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h6 className="mb-0 fw-bold text-primary">Education record #{index + 1}</h6>
                              {educations.length > 1 && (
                                <button 
                                  type="button" 
                                  className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                                  onClick={() => removeEducation(index)}
                                >
                                  <i className="ti ti-trash"></i> Remove
                                </button>
                              )}
                            </div>
                            <div className="row">
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Institute Name</label>
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    value={edu.instituteName} 
                                    onChange={(e) => handleEducationChange(index, 'instituteName', e.target.value)}
                                    placeholder="Enter school/college name"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Qualification</label>
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    value={edu.qualification}
                                    onChange={(e) => handleEducationChange(index, 'qualification', e.target.value)}
                                    placeholder="e.g. MBBS, MD"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Year of Completion</label>
                                  <input 
                                    type="date" 
                                    className="form-control" 
                                    value={edu.year}
                                    onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        <button type="button" className="btn btn-outline-primary btn-sm mt-2 fw-medium" onClick={addEducation}>
                          <i className="ti ti-plus"></i> Add More Education Details
                        </button>
                      </div>
                    </div>

                    {/* Experience Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fw-bold">Experience</h5>
                        <button type="button" className="btn btn-primary btn-sm d-flex align-items-center gap-1" onClick={addExperience}>
                          <i className="ti ti-plus"></i> Add Experience
                        </button>
                      </div>
                      <div className="card-body">
                        {experiences.map((exp, index) => (
                          <div key={index} className="exp-record mb-4 p-3 border rounded bg-light-subtle position-relative">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h6 className="mb-0 fw-bold text-primary">Experience record #{index + 1}</h6>
                              {experiences.length > 1 && (
                                <button 
                                  type="button" 
                                  className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                                  onClick={() => removeExperience(index)}
                                >
                                  <i className="ti ti-trash"></i> Remove
                                </button>
                              )}
                            </div>
                            <div className="row">
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Hospital / Clinic Name</label>
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    value={exp.hospitalName}
                                    onChange={(e) => handleExperienceChange(index, 'hospitalName', e.target.value)}
                                    placeholder="Enter Hospital Name"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">No of Years</label>
                                  <input 
                                    type="number" 
                                    className="form-control" 
                                    value={exp.yearsCount}
                                    onChange={(e) => handleExperienceChange(index, 'yearsCount', e.target.value)}
                                    placeholder="Years spent"
                                    min="0"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Year of Employment</label>
                                  <input 
                                    type="date" 
                                    className="form-control" 
                                    value={exp.year}
                                    onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        <button type="button" className="btn btn-outline-primary btn-sm mt-2 fw-medium" onClick={addExperience}>
                          <i className="ti ti-plus"></i> Add More Experience Details
                        </button>
                      </div>
                    </div>

                    {/* Social Media Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3">
                        <h5 className="mb-0 fw-bold">Social Media</h5>
                      </div>
                      <div className="card-body pb-0">
                        <div className="row">
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Facebook</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="facebook" 
                                value={formData.facebook} 
                                onChange={handleInputChange} 
                                placeholder="URL link"
                              />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Twitter</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="twitter" 
                                value={formData.twitter} 
                                onChange={handleInputChange} 
                                placeholder="URL link"
                              />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Linkedin</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="linkedin" 
                                value={formData.linkedin} 
                                onChange={handleInputChange} 
                                placeholder="URL link"
                              />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Instagram</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="instagram" 
                                value={formData.instagram} 
                                onChange={handleInputChange} 
                                placeholder="URL link"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Membership Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fw-bold">Membership</h5>
                        <button type="button" className="btn btn-primary btn-sm d-flex align-items-center gap-1" onClick={addMembership}>
                          <i className="ti ti-plus"></i> Add Membership
                        </button>
                      </div>
                      <div className="card-body">
                        {memberships.map((mem, index) => (
                          <div key={index} className="record-row mb-4 p-3 border rounded bg-light-subtle position-relative">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h6 className="mb-0 fw-bold text-primary">Membership record #{index + 1}</h6>
                              {memberships.length > 1 && (
                                <button 
                                  type="button" 
                                  className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                                  onClick={() => removeMembership(index)}
                                >
                                  <i className="ti ti-trash"></i> Remove
                                </button>
                              )}
                            </div>
                            <div className="row">
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Title</label>
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    value={mem.title}
                                    onChange={(e) => handleMembershipChange(index, 'title', e.target.value)}
                                    placeholder="Enter association name"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Year</label>
                                  <input 
                                    type="date" 
                                    className="form-control" 
                                    value={mem.year}
                                    onChange={(e) => handleMembershipChange(index, 'year', e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Description</label>
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    value={mem.description}
                                    onChange={(e) => handleMembershipChange(index, 'description', e.target.value)}
                                    placeholder="Enter details"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        <button type="button" className="btn btn-outline-primary btn-sm mt-2 fw-medium" onClick={addMembership}>
                          <i className="ti ti-plus"></i> Add More Membership Items
                        </button>
                      </div>
                    </div>

                    {/* Awards Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fw-bold">Awards</h5>
                        <button type="button" className="btn btn-primary btn-sm d-flex align-items-center gap-1" onClick={addAward}>
                          <i className="ti ti-plus"></i> Add Award
                        </button>
                      </div>
                      <div className="card-body">
                        {awards.map((awd, index) => (
                          <div key={index} className="record-row mb-4 p-3 border rounded bg-light-subtle position-relative">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h6 className="mb-0 fw-bold text-primary">Award record #{index + 1}</h6>
                              {awards.length > 1 && (
                                <button 
                                  type="button" 
                                  className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                                  onClick={() => removeAward(index)}
                                >
                                  <i className="ti ti-trash"></i> Remove
                                </button>
                              )}
                            </div>
                            <div className="row">
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Title</label>
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    value={awd.title}
                                    onChange={(e) => handleAwardChange(index, 'title', e.target.value)}
                                    placeholder="Enter award name"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Year</label>
                                  <input 
                                    type="date" 
                                    className="form-control" 
                                    value={awd.year}
                                    onChange={(e) => handleAwardChange(index, 'year', e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Description</label>
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    value={awd.description}
                                    onChange={(e) => handleAwardChange(index, 'description', e.target.value)}
                                    placeholder="Enter details"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        <button type="button" className="btn btn-outline-primary btn-sm mt-2 fw-medium" onClick={addAward}>
                          <i className="ti ti-plus"></i> Add More Award Items
                        </button>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-end gap-2 mb-4">
                      <button type="button" className="btn btn-white border px-3" onClick={() => { setActiveTab(0); window.scrollTo(0, 0); }}>
                        <i className="ti ti-arrow-left me-1"></i> Back
                      </button>
                      <button type="submit" className="btn btn-success d-inline-flex align-items-center gap-2">
                        <i className="ti ti-circle-check"></i> Save & Confirm
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <>
          <div className="modal-backdrop fade show" style={{ zIndex: 1050 }}></div>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ zIndex: 1060, backgroundColor: 'rgba(0,0,0,0.45)' }}>
            <div className="modal-dialog modal-dialog-centered modal-md" role="document">
              <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <div className="modal-body p-5 text-center bg-white">
                  <div className="mb-4 d-inline-flex align-items-center justify-content-center bg-success-subtle text-success rounded-circle" style={{ width: '80px', height: '80px' }}>
                    <i className="ti ti-circle-check text-success" style={{ fontSize: '3.5rem' }}></i>
                  </div>
                  
                  <h3 className="fw-bold mb-2 text-dark">Doctor Saved Successfully!</h3>
                  <p className="text-secondary mb-4">The doctor record for <strong className="text-dark">Dr. {formData.firstName} {formData.lastName}</strong> has been created with ID <strong className="text-dark">{formData.id}</strong>.</p>
                  
                  {/* Summary Box */}
                  <div className="bg-light p-3 rounded-3 text-start mb-4 fs-14 border text-dark">
                    <div className="row g-2">
                      <div className="col-6"><strong>Doctor ID:</strong> {formData.id}</div>
                      <div className="col-6"><strong>Department:</strong> {formData.department || "N/A"}</div>
                      <div className="col-6"><strong>Specialist:</strong> {formData.specialist || "N/A"}</div>
                      <div className="col-6"><strong>Gender:</strong> {formData.gender || "N/A"}</div>
                      {formData.fees && <div className="col-6"><strong>Fees:</strong> ${formData.fees}</div>}
                      {formData.phoneNumber && <div className="col-6"><strong>Phone:</strong> {formData.phoneNumber}</div>}
                      {formData.registrationNumber && <div className="col-6"><strong>Reg No:</strong> {formData.registrationNumber}</div>}
                    </div>
                  </div>
                  
                  <div className="d-grid gap-2">
                    <Link to="/doctors" className="btn btn-primary py-2 d-flex align-items-center justify-content-center gap-2">
                      <i className="ti ti-users"></i> View All Doctors
                    </Link>
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary py-2" 
                      onClick={handleResetForm}
                    >
                      Add Another Doctor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="footer text-center py-3 bg-white mt-auto border-top">
        <p className="mb-0 text-muted"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default AddDoctor;
