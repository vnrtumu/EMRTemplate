import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddPatient = () => {
  // Step navigation state (0: Basic Info & Contacts, 1: Vitals, 2: Medical History, 3: Complaints)
  const [activeTab, setActiveTab] = useState(0);

  // Form fields state
  const [formData, setFormData] = useState({
    // Basic Information
    id: "#PT0005",
    firstName: "",
    middleName: "",
    lastName: "",
    bloodGroup: "",
    age: "",
    dob: "",
    patientType: "",
    gender: "",
    companyName: "",
    maritalStatus: "",
    profileImage: "/assets/img/avatars/avatar-39.jpg",
    
    // Contact Information
    mobileNumber: "",
    emergencyNumber: "",
    guardianName: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    city: "",
    state: "",
    pinCode: "",
    
    // Referral Doctor's Info
    referredBy: "",
    referredOn: "",
    department: "",
    
    // Other Info
    notes: "",
    
    // Vitals
    temperature: "",
    pulse: "",
    respiratoryRate: "",
    spo2: "",
    height: "",
    weight: "",
    bmi: "",
    waist: "",
    bsa: "",
    vitalsNotes: "",
    
    // Complaints
    overallHealthCondition: "",
    hasHealthCondition: true,
    healthConditionDetails: "Fever, Cough, Headache",
    hasAllergies: true,
    allergyDetails: "Sore Throat"
  });

  // Medical History dynamic list state
  const [medicalHistories, setMedicalHistories] = useState([
    { type: "", reason: "", dateOfIllness: "", hospitalName: "", assessment: "", notes: "" }
  ]);

  // Validation error state
  const [errors, setErrors] = useState({});

  // Success modal state
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Auto calculation of BMI and BSA
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      
      // Calculate BMI & BSA on height or weight change
      if (name === 'height' || name === 'weight') {
        const h = parseFloat(name === 'height' ? value : prev.height);
        const w = parseFloat(name === 'weight' ? value : prev.weight);
        
        if (h > 0 && w > 0) {
          // BMI = weight (kg) / (height (m) ^ 2)
          const bmiVal = (w / ((h / 100) * (h / 100))).toFixed(2);
          updated.bmi = bmiVal;
          
          // BSA = sqrt( (height * weight) / 3600 )
          const bsaVal = Math.sqrt((h * w) / 3600).toFixed(2);
          updated.bsa = bsaVal;
        } else {
          updated.bmi = '';
          updated.bsa = '';
        }
      }
      
      return updated;
    });

    // Clear error
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  // Image upload handlers
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
    setFormData(prev => ({ ...prev, profileImage: "/assets/img/avatars/avatar-39.jpg" }));
  };

  // Medical history handlers
  const handleMedicalHistoryChange = (index, field, value) => {
    setMedicalHistories(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const addMedicalHistory = (e) => {
    e.preventDefault();
    setMedicalHistories(prev => [
      ...prev,
      { type: "", reason: "", dateOfIllness: "", hospitalName: "", assessment: "", notes: "" }
    ]);
  };

  const removeMedicalHistory = (index) => {
    setMedicalHistories(prev => {
      if (prev.length === 1) {
        return [{ type: "", reason: "", dateOfIllness: "", hospitalName: "", assessment: "", notes: "" }];
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  // Validates a specific step in the wizard
  const validateStep = (step) => {
    // For now, make all fields not mandatory per user request
    setErrors({});
    return true;
  };

  const handleNext = (currentStep) => {
    if (validateStep(currentStep)) {
      setActiveTab(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleTabClick = (targetStep) => {
    if (targetStep < activeTab) {
      setActiveTab(targetStep);
      window.scrollTo(0, 0);
    } else {
      let valid = true;
      for (let s = activeTab; s < targetStep; s++) {
        if (!validateStep(s)) {
          valid = false;
          break;
        }
      }
      if (valid) {
        setActiveTab(targetStep);
        window.scrollTo(0, 0);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let allValid = true;
    for (let s = 0; s <= 3; s++) {
      if (!validateStep(s)) {
        setActiveTab(s);
        allValid = false;
        window.scrollTo(0, 0);
        break;
      }
    }
    
    if (allValid) {
      setShowSuccessModal(true);
    }
  };

  const handleResetForm = () => {
    setFormData({
      id: `#PT${Math.floor(1000 + Math.random() * 9000)}`,
      firstName: "",
      middleName: "",
      lastName: "",
      bloodGroup: "",
      age: "",
      dob: "",
      patientType: "",
      gender: "",
      companyName: "",
      maritalStatus: "",
      profileImage: "/assets/img/avatars/avatar-39.jpg",
      mobileNumber: "",
      emergencyNumber: "",
      guardianName: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      city: "",
      state: "",
      pinCode: "",
      referredBy: "",
      referredOn: "",
      department: "",
      notes: "",
      temperature: "",
      pulse: "",
      respiratoryRate: "",
      spo2: "",
      height: "",
      weight: "",
      bmi: "",
      waist: "",
      bsa: "",
      vitalsNotes: "",
      overallHealthCondition: "",
      hasHealthCondition: true,
      healthConditionDetails: "Fever, Cough, Headache",
      hasAllergies: true,
      allergyDetails: "Sore Throat"
    });
    setMedicalHistories([
      { type: "", reason: "", dateOfIllness: "", hospitalName: "", assessment: "", notes: "" }
    ]);
    setErrors({});
    setActiveTab(0);
    setShowSuccessModal(false);
  };

  // Completion percentages for each step visual feedback
  const progressPercent = [25, 50, 75, 100][activeTab];

  return (
    <>
      <div className="content">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Add Patient</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/patients" className="text-decoration-none">Patients</Link></li>
              <li className="breadcrumb-item active">Add Patient</li>
            </ol>
          </div>
          <Link to="/patients" className="fw-medium d-flex align-items-center text-decoration-none">
            <i className="ti ti-arrow-left me-1"></i>Back to Patients
          </Link>
        </div>

        {/* Step Progress Tracker */}
        <div className="card border-0 shadow-sm mb-4 overflow-hidden">
          <div className="card-body p-3">
            <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
              <span className="fs-14 fw-semibold text-secondary">
                Step {activeTab + 1} of 4: {['Basic Information', 'Vitals', 'Medical History', 'Complaints'][activeTab]}
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

        {/* Main Content Row */}
        <div className="row vertical-tab">
          {/* Sidebar Tabs */}
          <div className="col-xl-3 col-lg-4">
            <div className="nav flex-column nav-pills vertical-tab mb-lg-0 mb-4 bg-white p-3 rounded shadow-sm">
              <button 
                type="button" 
                className={`nav-link text-start fw-medium d-flex align-items-center rounded w-100 border-0 mb-2 py-2 px-3 ${activeTab === 0 ? 'active text-white bg-primary' : 'text-dark bg-transparent'}`}
                onClick={() => handleTabClick(0)}
              >
                <i className="ti ti-info-circle fs-18 me-2"></i>Basic Information
              </button>
              <button 
                type="button" 
                className={`nav-link text-start fw-medium d-flex align-items-center rounded w-100 border-0 mb-2 py-2 px-3 ${activeTab === 1 ? 'active text-white bg-primary' : 'text-dark bg-transparent'}`}
                onClick={() => handleTabClick(1)}
              >
                <i className="ti ti-vector-spline fs-18 me-2"></i>Vitals
              </button>
              <button 
                type="button" 
                className={`nav-link text-start fw-medium d-flex align-items-center rounded w-100 border-0 mb-2 py-2 px-3 ${activeTab === 2 ? 'active text-white bg-primary' : 'text-dark bg-transparent'}`}
                onClick={() => handleTabClick(2)}
              >
                <i className="ti ti-files fs-18 me-2"></i>Medical History
              </button>
              <button 
                type="button" 
                className={`nav-link text-start fw-medium d-flex align-items-center rounded w-100 border-0 py-2 px-3 ${activeTab === 3 ? 'active text-white bg-primary' : 'text-dark bg-transparent'}`}
                onClick={() => handleTabClick(3)}
              >
                <i className="ti ti-vaccine fs-18 me-2"></i>Complaints
              </button>
            </div>
          </div>

          {/* Form Wizard Pages */}
          <div className="col-xl-9 col-lg-8">
            <div className="patient-form-wizard flex-fill">

              {/* STEP 0: BASIC INFORMATION */}
              {activeTab === 0 && (
                <div className="form-wizard-content active animate__animated animate__fadeIn">
                  <form onSubmit={(e) => { e.preventDefault(); handleNext(0); }}>
                    {/* Basic Info Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3">
                        <h5 className="mb-0 fw-bold">Basic Information</h5>
                      </div>
                      <div className="card-body pb-1">
                        {/* Profile Image Uploader */}
                        <div className="mb-4">
                          <label className="form-label fw-semibold">Profile Image<span className="text-danger ms-1">*</span></label>
                          <div className="d-flex align-items-center flex-wrap gap-3">
                            <div className="flex-shrink-0">
                              <div className="position-relative d-flex align-items-center border rounded p-1 bg-light">
                                <img src={formData.profileImage} className="avatar avatar-xxl rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="patient" />
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

                        {/* Basic Info Fields */}
                        <div className="row">
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Patient ID</label>
                              <input type="text" className="form-control bg-light" value={formData.id} disabled />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">First Name<span className="text-danger ms-1">*</span></label>
                              <input 
                                type="text" 
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="Enter First Name"
                              />
                              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Middle Name<span className="text-danger ms-1">*</span></label>
                              <input 
                                type="text" 
                                className={`form-control ${errors.middleName ? 'is-invalid' : ''}`}
                                name="middleName"
                                value={formData.middleName}
                                onChange={handleInputChange}
                                placeholder="Enter Middle Name"
                              />
                              {errors.middleName && <div className="invalid-feedback">{errors.middleName}</div>}
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Last Name<span className="text-danger ms-1">*</span></label>
                              <input 
                                type="text" 
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Enter Last Name"
                              />
                              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Blood Group<span className="text-danger ms-1">*</span></label>
                              <select 
                                className={`form-select ${errors.bloodGroup ? 'is-invalid' : ''}`}
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                              </select>
                              {errors.bloodGroup && <div className="invalid-feedback">{errors.bloodGroup}</div>}
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Age<span className="text-danger ms-1">*</span></label>
                              <input 
                                type="number" 
                                className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                placeholder="Enter Age"
                                min="0"
                              />
                              {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">DOB<span className="text-danger ms-1">*</span></label>
                              <input 
                                type="date" 
                                className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                                name="dob"
                                value={formData.dob}
                                onChange={handleInputChange}
                              />
                              {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Patient Type<span className="text-danger ms-1">*</span></label>
                              <select 
                                className={`form-select ${errors.patientType ? 'is-invalid' : ''}`}
                                name="patientType"
                                value={formData.patientType}
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="Out Patient">Out Patient</option>
                                <option value="In Patient">In Patient</option>
                              </select>
                              {errors.patientType && <div className="invalid-feedback">{errors.patientType}</div>}
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Gender<span className="text-danger ms-1">*</span></label>
                              <select 
                                className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                              </select>
                              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Company Name & Location</label>
                              <input 
                                type="text" 
                                className="form-control"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                placeholder="Enter Company Details"
                              />
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Marital Status<span className="text-danger ms-1">*</span></label>
                              <select 
                                className={`form-select ${errors.maritalStatus ? 'is-invalid' : ''}`}
                                name="maritalStatus"
                                value={formData.maritalStatus}
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                              </select>
                              {errors.maritalStatus && <div className="invalid-feedback">{errors.maritalStatus}</div>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3">
                        <h5 className="mb-0 fw-bold">Contact Information</h5>
                      </div>
                      <div className="card-body pb-1">
                        <div className="row">
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Mobile Number<span className="text-danger ms-1">*</span></label>
                              <input 
                                type="tel" 
                                className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Phone Number"
                              />
                              {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Emergency Number<span className="text-danger ms-1">*</span></label>
                              <input 
                                type="tel" 
                                className={`form-control ${errors.emergencyNumber ? 'is-invalid' : ''}`}
                                name="emergencyNumber"
                                value={formData.emergencyNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Emergency Number"
                              />
                              {errors.emergencyNumber && <div className="invalid-feedback">{errors.emergencyNumber}</div>}
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Guardian / Person Name<span className="text-danger ms-1">*</span></label>
                              <input 
                                type="text" 
                                className={`form-control ${errors.guardianName ? 'is-invalid' : ''}`}
                                name="guardianName"
                                value={formData.guardianName}
                                onChange={handleInputChange}
                                placeholder="Enter Guardian Name"
                              />
                              {errors.guardianName && <div className="invalid-feedback">{errors.guardianName}</div>}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Address Line 1<span className="text-danger ms-1">*</span></label>
                              <input 
                                type="text" 
                                className={`form-control ${errors.addressLine1 ? 'is-invalid' : ''}`}
                                name="addressLine1"
                                value={formData.addressLine1}
                                onChange={handleInputChange}
                                placeholder="Street Address, P.O. box"
                              />
                              {errors.addressLine1 && <div className="invalid-feedback">{errors.addressLine1}</div>}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Address Line 2</label>
                              <input 
                                type="text" 
                                className="form-control"
                                name="addressLine2"
                                value={formData.addressLine2}
                                onChange={handleInputChange}
                                placeholder="Apartment, suite, unit, building, floor"
                              />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Country<span className="text-danger ms-1">*</span></label>
                              <select 
                                className={`form-select ${errors.country ? 'is-invalid' : ''}`}
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="United States">United States</option>
                                <option value="India">India</option>
                                <option value="Canada">Canada</option>
                                <option value="Germany">Germany</option>
                                <option value="Brazil">Brazil</option>
                              </select>
                              {errors.country && <div className="invalid-feedback">{errors.country}</div>}
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
                                <option value="San Francisco">San Francisco</option>
                                <option value="San Jose">San Jose</option>
                                <option value="Fresno">Fresno</option>
                                <option value="New York City">New York City</option>
                                <option value="Bengaluru">Bengaluru</option>
                                <option value="New Delhi">New Delhi</option>
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
                                <option value="Texas">Texas</option>
                                <option value="New York">New York</option>
                                <option value="Florida">Florida</option>
                                <option value="Karnataka">Karnataka</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Pin Code</label>
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

                    {/* Referral Info Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3">
                        <h5 className="mb-0 fw-bold">Referral Doctor's Info</h5>
                      </div>
                      <div className="card-body pb-1">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label className="form-label">Referred By<span className="text-danger ms-1">*</span></label>
                              <select 
                                className={`form-select ${errors.referredBy ? 'is-invalid' : ''}`}
                                name="referredBy"
                                value={formData.referredBy}
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="Dr. Andrew Clark">Dr. Andrew Clark</option>
                                <option value="Dr. Katherine Brooks">Dr. Katherine Brooks</option>
                                <option value="Dr. Benjamin Harris">Dr. Benjamin Harris</option>
                                <option value="Dr. Laura Mitchell">Dr. Laura Mitchell</option>
                                <option value="Dr. Christopher Lewis">Dr. Christopher Lewis</option>
                              </select>
                              {errors.referredBy && <div className="invalid-feedback">{errors.referredBy}</div>}
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label className="form-label">Referred On<span className="text-danger ms-1">*</span></label>
                              <input 
                                type="date" 
                                className={`form-control ${errors.referredOn ? 'is-invalid' : ''}`}
                                name="referredOn"
                                value={formData.referredOn}
                                onChange={handleInputChange}
                              />
                              {errors.referredOn && <div className="invalid-feedback">{errors.referredOn}</div>}
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label className="form-label">Department<span className="text-danger ms-1">*</span></label>
                              <select 
                                className={`form-select ${errors.department ? 'is-invalid' : ''}`}
                                name="department"
                                value={formData.department}
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="Anaesthesiology">Anaesthesiology</option>
                                <option value="Dental Surgery">Dental Surgery</option>
                                <option value="Dermatology">Dermatology</option>
                                <option value="ENT Surgery">ENT Surgery</option>
                                <option value="General Medicine">General Medicine</option>
                                <option value="Cardiology">Cardiology</option>
                              </select>
                              {errors.department && <div className="invalid-feedback">{errors.department}</div>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Other Info Card */}
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3">
                        <h5 className="mb-0 fw-bold">Other Information</h5>
                      </div>
                      <div className="card-body pb-1">
                        <div className="mb-3">
                          <label className="form-label">Notes if any</label>
                          <textarea 
                            rows="4" 
                            className="form-control"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder="Add additional remarks..."
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-end mb-4">
                      <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-1">
                        Save & Add Vitals <i className="ti ti-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 1: VITALS */}
              {activeTab === 1 && (
                <div className="form-wizard-content active animate__animated animate__fadeIn">
                  <form onSubmit={(e) => { e.preventDefault(); handleNext(1); }}>
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3">
                        <h5 className="mb-0 fw-bold">Vitals</h5>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Temperature <span className="text-danger ms-1">*</span></label>
                              <div className="input-group">
                                <input 
                                  type="text" 
                                  className={`form-control ${errors.temperature ? 'is-invalid' : ''}`}
                                  name="temperature"
                                  value={formData.temperature}
                                  onChange={handleInputChange}
                                  placeholder="e.g. 98.6"
                                />
                                <span className="input-group-text bg-light fw-medium">°F</span>
                                {errors.temperature && <div className="invalid-feedback">{errors.temperature}</div>}
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Pulse<span className="text-danger ms-1">*</span></label>
                              <div className="input-group">
                                <input 
                                  type="text" 
                                  className={`form-control ${errors.pulse ? 'is-invalid' : ''}`}
                                  name="pulse"
                                  value={formData.pulse}
                                  onChange={handleInputChange}
                                  placeholder="e.g. 72"
                                />
                                <span className="input-group-text bg-light fw-medium">bpm</span>
                                {errors.pulse && <div className="invalid-feedback">{errors.pulse}</div>}
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Respiratory Rate<span className="text-danger ms-1">*</span></label>
                              <div className="input-group">
                                <input 
                                  type="text" 
                                  className={`form-control ${errors.respiratoryRate ? 'is-invalid' : ''}`}
                                  name="respiratoryRate"
                                  value={formData.respiratoryRate}
                                  onChange={handleInputChange}
                                  placeholder="e.g. 16"
                                />
                                <span className="input-group-text bg-light fw-medium">rpm</span>
                                {errors.respiratoryRate && <div className="invalid-feedback">{errors.respiratoryRate}</div>}
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">SPO2<span className="text-danger ms-1">*</span></label>
                              <div className="input-group">
                                <input 
                                  type="text" 
                                  className={`form-control ${errors.spo2 ? 'is-invalid' : ''}`}
                                  name="spo2"
                                  value={formData.spo2}
                                  onChange={handleInputChange}
                                  placeholder="e.g. 98"
                                />
                                <span className="input-group-text bg-light fw-medium">%</span>
                                {errors.spo2 && <div className="invalid-feedback">{errors.spo2}</div>}
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Height<span className="text-danger ms-1">*</span></label>
                              <div className="input-group">
                                <input 
                                  type="number" 
                                  className={`form-control ${errors.height ? 'is-invalid' : ''}`}
                                  name="height"
                                  value={formData.height}
                                  onChange={handleInputChange}
                                  placeholder="e.g. 175"
                                  min="1"
                                />
                                <span className="input-group-text bg-light fw-medium">cm</span>
                                {errors.height && <div className="invalid-feedback">{errors.height}</div>}
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Weight<span className="text-danger ms-1">*</span></label>
                              <div className="input-group">
                                <input 
                                  type="number" 
                                  className={`form-control ${errors.weight ? 'is-invalid' : ''}`}
                                  name="weight"
                                  value={formData.weight}
                                  onChange={handleInputChange}
                                  placeholder="e.g. 70"
                                  min="1"
                                />
                                <span className="input-group-text bg-light fw-medium">kg</span>
                                {errors.weight && <div className="invalid-feedback">{errors.weight}</div>}
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">BMI<span className="text-danger ms-1">*</span></label>
                              <div className="input-group">
                                <input 
                                  type="text" 
                                  className="form-control bg-light"
                                  name="bmi"
                                  value={formData.bmi}
                                  disabled
                                  placeholder="Calculated automatically"
                                />
                                <span className="input-group-text bg-light fw-medium">kg/m²</span>
                              </div>
                              <span className="fs-12 text-muted">Auto-calculated from Height & Weight</span>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Waist Circumference<span className="text-danger ms-1">*</span></label>
                              <div className="input-group">
                                <input 
                                  type="text" 
                                  className={`form-control ${errors.waist ? 'is-invalid' : ''}`}
                                  name="waist"
                                  value={formData.waist}
                                  onChange={handleInputChange}
                                  placeholder="e.g. 88"
                                />
                                <span className="input-group-text bg-light fw-medium">cm</span>
                                {errors.waist && <div className="invalid-feedback">{errors.waist}</div>}
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">BSA (Body Surface Area)<span className="text-danger ms-1">*</span></label>
                              <div className="input-group">
                                <input 
                                  type="text" 
                                  className="form-control bg-light"
                                  name="bsa"
                                  value={formData.bsa}
                                  disabled
                                  placeholder="Calculated automatically"
                                />
                                <span className="input-group-text bg-light fw-medium">m²</span>
                              </div>
                              <span className="fs-12 text-muted">Auto-calculated from Height & Weight</span>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-0">
                              <label className="form-label">Vitals Notes</label>
                              <textarea 
                                rows="4" 
                                className="form-control"
                                placeholder="Add observations about patient's physical state"
                                name="vitalsNotes"
                                value={formData.vitalsNotes}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-end gap-2 mb-4">
                      <button type="button" className="btn btn-white border px-3" onClick={() => setActiveTab(0)}>
                        <i className="ti ti-arrow-left me-1"></i> Back
                      </button>
                      <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-1">
                        Save & Add Medical History <i className="ti ti-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 2: MEDICAL HISTORY */}
              {activeTab === 2 && (
                <div className="form-wizard-content active animate__animated animate__fadeIn">
                  <form onSubmit={(e) => { e.preventDefault(); handleNext(2); }}>
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fw-bold">Medical History</h5>
                        <button type="button" className="btn btn-primary btn-sm d-flex align-items-center gap-1" onClick={addMedicalHistory}>
                          <i className="ti ti-plus"></i> Add History Record
                        </button>
                      </div>
                      <div className="card-body">
                        {medicalHistories.map((history, index) => (
                          <div key={index} className="medical-history-record mb-4 p-3 border rounded bg-light-subtle position-relative">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h6 className="mb-0 fw-bold text-primary">History Record #{index + 1}</h6>
                              {medicalHistories.length > 1 && (
                                <button 
                                  type="button" 
                                  className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                                  onClick={() => removeMedicalHistory(index)}
                                >
                                  <i className="ti ti-trash"></i> Remove
                                </button>
                              )}
                            </div>
                            
                            <div className="row">
                              <div className="col-xl-6 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Type</label>
                                  <select 
                                    className="form-select"
                                    value={history.type}
                                    onChange={(e) => handleMedicalHistoryChange(index, 'type', e.target.value)}
                                  >
                                    <option value="">Select</option>
                                    <option value="Allergy">Allergy</option>
                                    <option value="Fever">Fever</option>
                                    <option value="Surgery">Surgery</option>
                                    <option value="Diabetes">Diabetes</option>
                                    <option value="Hypertension">Hypertension</option>
                                    <option value="Chronic Illness">Chronic Illness</option>
                                    <option value="Other">Other</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-xl-6 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Reason / Diagnosis</label>
                                  <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Enter diagnosis or reason"
                                    value={history.reason}
                                    onChange={(e) => handleMedicalHistoryChange(index, 'reason', e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-xl-6 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Date of Illness / Procedure</label>
                                  <input 
                                    type="date" 
                                    className="form-control"
                                    value={history.dateOfIllness}
                                    onChange={(e) => handleMedicalHistoryChange(index, 'dateOfIllness', e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-xl-6 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Hospital / Clinic Name</label>
                                  <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Enter hospital name"
                                    value={history.hospitalName}
                                    onChange={(e) => handleMedicalHistoryChange(index, 'hospitalName', e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">Assessment / Treatment Done</label>
                                  <textarea 
                                    rows="2" 
                                    className="form-control"
                                    placeholder="Details of medication or therapy"
                                    value={history.assessment}
                                    onChange={(e) => handleMedicalHistoryChange(index, 'assessment', e.target.value)}
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-0">
                                  <label className="form-label">Progress Notes</label>
                                  <textarea 
                                    rows="2" 
                                    className="form-control"
                                    placeholder="Add any follow-up observations"
                                    value={history.notes}
                                    onChange={(e) => handleMedicalHistoryChange(index, 'notes', e.target.value)}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="mt-4 pt-3 border-top text-start">
                          <button type="button" className="btn btn-outline-primary d-inline-flex align-items-center gap-1 fw-medium" onClick={addMedicalHistory}>
                            <i className="ti ti-plus"></i> Add Another Medical History Item
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-end gap-2 mb-4">
                      <button type="button" className="btn btn-white border px-3" onClick={() => setActiveTab(1)}>
                        <i className="ti ti-arrow-left me-1"></i> Back
                      </button>
                      <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-1">
                        Save & Add Complaints <i className="ti ti-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 3: COMPLAINTS */}
              {activeTab === 3 && (
                <div className="form-wizard-content active animate__animated animate__fadeIn">
                  <form onSubmit={handleSubmit}>
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header bg-white border-bottom py-3">
                        <h5 className="mb-0 fw-bold">Complaints</h5>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-4">
                              <label className="form-label">Patient's Overall Health Condition<span className="text-danger ms-1">*</span></label>
                              <select 
                                className={`form-select ${errors.overallHealthCondition ? 'is-invalid' : ''}`}
                                name="overallHealthCondition"
                                value={formData.overallHealthCondition}
                                onChange={handleInputChange}
                              >
                                <option value="">Select</option>
                                <option value="Very Poor">Very Poor</option>
                                <option value="Poor">Poor</option>
                                <option value="Fair">Fair</option>
                                <option value="Good">Good</option>
                                <option value="Excellent">Excellent</option>
                              </select>
                              {errors.overallHealthCondition && <div className="invalid-feedback">{errors.overallHealthCondition}</div>}
                            </div>
                          </div>
                          
                          <div className="col-md-12">
                            <div className="mb-4">
                              <div className="form-check mb-2">
                                <input 
                                  type="checkbox" 
                                  className="form-check-input" 
                                  id="hasHealthConditionCheck" 
                                  checked={formData.hasHealthCondition} 
                                  onChange={(e) => setFormData(prev => ({ ...prev, hasHealthCondition: e.target.checked }))}
                                />
                                <label className="form-check-label form-label mb-0 fw-semibold" htmlFor="hasHealthConditionCheck">
                                  Patient has an active health condition / symptoms
                                </label>
                              </div>
                              <input 
                                className="form-control" 
                                value={formData.healthConditionDetails}
                                onChange={(e) => setFormData(prev => ({ ...prev, healthConditionDetails: e.target.value }))}
                                placeholder="Describe current condition (e.g. Fever, Cough, Headache)"
                                disabled={!formData.hasHealthCondition}
                              />
                            </div>
                          </div>
                          
                          <div className="col-md-12">
                            <div className="mb-3">
                              <div className="form-check mb-2">
                                <input 
                                  type="checkbox" 
                                  className="form-check-input" 
                                  id="hasAllergiesCheck" 
                                  checked={formData.hasAllergies} 
                                  onChange={(e) => setFormData(prev => ({ ...prev, hasAllergies: e.target.checked }))}
                                />
                                <label className="form-check-label form-label mb-0 fw-semibold" htmlFor="hasAllergiesCheck">
                                  Known allergies
                                </label>
                              </div>
                              <input 
                                className="form-control" 
                                value={formData.allergyDetails}
                                onChange={(e) => setFormData(prev => ({ ...prev, allergyDetails: e.target.value }))}
                                placeholder="Describe allergies (e.g. Sore Throat, Penicillin)"
                                disabled={!formData.hasAllergies}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-end gap-2 mb-4">
                      <button type="button" className="btn btn-white border px-3" onClick={() => setActiveTab(2)}>
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
                  
                  <h3 className="fw-bold mb-2 text-dark">Patient Saved Successfully!</h3>
                  <p className="text-secondary mb-4">The patient record for <strong className="text-dark">{formData.firstName} {formData.lastName}</strong> has been created with ID <strong className="text-dark">{formData.id}</strong>.</p>
                  
                  {/* Summary Box */}
                  <div className="bg-light p-3 rounded-3 text-start mb-4 fs-14 border text-dark">
                    <div className="row g-2">
                      <div className="col-6"><strong>Patient ID:</strong> {formData.id}</div>
                      <div className="col-6"><strong>Blood Group:</strong> {formData.bloodGroup}</div>
                      <div className="col-6"><strong>Gender:</strong> {formData.gender}</div>
                      <div className="col-6"><strong>Age:</strong> {formData.age} Years</div>
                      {formData.temperature && <div className="col-6"><strong>Temp:</strong> {formData.temperature} °F</div>}
                      {formData.pulse && <div className="col-6"><strong>Pulse:</strong> {formData.pulse} bpm</div>}
                      {formData.bmi && <div className="col-6"><strong>BMI:</strong> {formData.bmi} kg/m²</div>}
                      {formData.bsa && <div className="col-6"><strong>BSA:</strong> {formData.bsa} m²</div>}
                    </div>
                  </div>
                  
                  <div className="d-grid gap-2">
                    <Link to="/patients" className="btn btn-primary py-2 d-flex align-items-center justify-content-center gap-2">
                      <i className="ti ti-users"></i> View All Patients
                    </Link>
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary py-2" 
                      onClick={handleResetForm}
                    >
                      Add Another Patient
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

export default AddPatient;
