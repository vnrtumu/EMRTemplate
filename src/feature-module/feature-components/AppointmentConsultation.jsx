import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AppointmentConsultation = () => {
  // Page Modals state
  const [medicalHistoryOpen, setMedicalHistoryOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  // Vitals State
  const [vitals, setVitals] = useState({
    temperature: '',
    pulse: '',
    respiratoryRate: '',
    spo2: '',
    height: '',
    weight: '',
    bmi: '',
    waist: '',
    bsa: ''
  });

  // Complaint input state
  const [complaintText, setComplaintText] = useState("");
  const [complaintsList, setComplaintsList] = useState(["Chest Pain", "Shortness of breath"]);

  // Medications list state
  const [medications, setMedications] = useState([
    { name: 'Aspirin', dosage: '75', duration: '30', frequency: '1-0-0', timing: 'After Meal', instructions: 'Take in morning' },
    { name: 'Atorvastatin', dosage: '20', duration: '30', frequency: '0-0-1', timing: 'After Meal', instructions: 'Take before bedtime' }
  ]);

  // Investigations state
  const [investigations, setInvestigations] = useState(['Electrocardiogram (ECG)', 'Echocardiogram']);
  const [invInput, setInvInput] = useState("");

  // Advices state
  const [advices, setAdvices] = useState(['Avoid strenuous exercise', 'Low sodium diet', 'Regular blood pressure monitoring']);
  const [adviceInput, setAdviceInput] = useState("");

  // Follow up state
  const [followUp, setFollowUp] = useState({
    nextConsultation: 'Select',
    emptyStomach: 'Select'
  });

  // Dynamic Vitals Handler (BMI & BSA Auto-Calculator)
  const handleVitalChange = (field, val) => {
    setVitals(prev => {
      const updated = { ...prev, [field]: val };
      
      const h = parseFloat(updated.height);
      const w = parseFloat(updated.weight);
      
      if (h > 0 && w > 0) {
        // BMI = weight(kg) / height(m)^2
        const bmiVal = (w / ((h / 100) * (h / 100))).toFixed(2);
        updated.bmi = bmiVal;
        
        // BSA = sqrt((height(cm) * weight(kg)) / 3600)
        const bsaVal = Math.sqrt((h * w) / 3600).toFixed(2);
        updated.bsa = bsaVal;
      } else {
        updated.bmi = '';
        updated.bsa = '';
      }
      
      return updated;
    });
  };

  // Complaint add
  const handleAddComplaint = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const val = complaintText.trim().replace(',', '');
      if (val && !complaintsList.includes(val)) {
        setComplaintsList(prev => [...prev, val]);
        setComplaintText("");
      }
    }
  };

  const removeComplaint = (idx) => {
    setComplaintsList(prev => prev.filter((_, i) => i !== idx));
  };

  // Medications CRUD
  const addMedication = (e) => {
    e.preventDefault();
    setMedications(prev => [
      ...prev,
      { name: '', dosage: '', duration: '', frequency: 'Select', timing: 'Select', instructions: '' }
    ]);
  };

  const handleMedicationChange = (index, field, value) => {
    setMedications(prev => prev.map((med, i) => i === index ? { ...med, [field]: value } : med));
  };

  const removeMedication = (index, e) => {
    e.preventDefault();
    setMedications(prev => prev.filter((_, i) => i !== index));
  };

  // Investigations CRUD
  const addInvestigation = (e) => {
    e.preventDefault();
    if (invInput.trim() && !investigations.includes(invInput.trim())) {
      setInvestigations(prev => [...prev, invInput.trim()]);
      setInvInput("");
    }
  };

  const removeInvestigation = (index, e) => {
    e.preventDefault();
    setInvestigations(prev => prev.filter((_, i) => i !== index));
  };

  // Advices CRUD
  const addAdvice = (e) => {
    e.preventDefault();
    if (adviceInput.trim() && !advices.includes(adviceInput.trim())) {
      setAdvices(prev => [...prev, adviceInput.trim()]);
      setAdviceInput("");
    }
  };

  const removeAdvice = (index, e) => {
    e.preventDefault();
    setAdvices(prev => prev.filter((_, i) => i !== index));
  };

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSuccessOpen(true);
  };

  const handleCloseSuccess = () => {
    setSuccessOpen(false);
    // Optionally redirect or clean
  };

  return (
    <>
      <style>{`
        .theme-card-bg-light {
          background-color: var(--bs-tertiary-bg) !important;
          border: 1px solid var(--bs-border-color) !important;
        }
        .consultation-pill-badge {
          background-color: var(--bs-tertiary-bg);
          border: 1px solid var(--bs-border-color);
          color: var(--bs-body-color);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 13px;
        }
        .consultation-pill-badge .remove-btn {
          color: var(--bs-danger);
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>

      <div className="content patients-list-page">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Consultation Portal</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/appointments" className="text-decoration-none">Appointments</Link></li>
              <li className="breadcrumb-item active">Consultation</li>
            </ol>
          </div>
          <div>
            <Link to="/appointments" className="btn btn-outline-light border d-inline-flex align-items-center gap-1">
              <i className="ti ti-arrow-left"></i> Back to Appointments
            </Link>
          </div>
        </div>

        {/* Basic Information Section */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-transparent border-bottom d-flex align-items-center justify-content-between flex-wrap gap-2 py-3">
            <h5 className="mb-0 fw-bold">Basic Information</h5>
            <button 
              type="button"
              className="btn btn-link text-primary p-0 text-decoration-none fw-semibold d-inline-flex align-items-center gap-1"
              onClick={() => setMedicalHistoryOpen(true)}
            >
              View Medical History <i className="ti ti-arrow-right"></i>
            </button>
          </div>
          <div className="card-body">
            <div className="row row-gap-3 align-items-center">
              <div className="col-xxl-6 col-xl-5">
                <div className="d-sm-flex align-items-center">
                  <div className="avatar avatar-xxxl mb-3 mb-sm-0 me-sm-3 flex-shrink-0">
                    <img 
                      src="/assets/img/avatars/avatar-05.jpg" 
                      alt="patient" 
                      className="rounded"
                      onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                    />
                  </div>
                  <div>
                    <span className="badge patients-list-badge badge-soft-primary mb-1.5 px-3 py-1.5 fs-12">Out Patient</span>
                    <h5 className="mb-1 fw-bold">
                      <Link to="/patient-details" className="text-decoration-none text-dark hover-primary">Reyan Verol</Link>
                    </h5>
                    <p className="mb-0 text-secondary fs-13">Consultation ID: #C243546</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7">
                <div className="p-3 theme-card-bg-light rounded">
                  <div className="row row-gap-2">
                    <div className="col-sm-4">
                      <h6 className="fs-13 text-secondary mb-1 text-truncate">Age / Gender</h6>
                      <p className="fs-14 fw-bold mb-0 text-truncate">28 Years / Male</p>
                    </div>
                    <div className="col-sm-4">
                      <h6 className="fs-13 text-secondary mb-1 text-truncate">Department</h6>
                      <p className="fs-14 fw-bold mb-0 text-truncate">Cardiology</p>
                    </div>
                    <div className="col-sm-4">
                      <h6 className="fs-13 text-secondary mb-1">Date</h6>
                      <p className="fs-14 fw-bold mb-0">25 Jan 2025, 07:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Form */}
        <form onSubmit={handleFormSubmit}>
          
          {/* Vitals Form Section */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-transparent border-bottom py-3">
              <h5 className="mb-0 fw-bold">Vitals</h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-xl-4 col-md-6">
                  <label className="form-label text-secondary">Temperature</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="e.g. 98.6"
                      value={vitals.temperature}
                      onChange={(e) => handleVitalChange('temperature', e.target.value)}
                    />
                    <span className="input-group-text">F</span>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <label className="form-label text-secondary">Pulse</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="e.g. 72"
                      value={vitals.pulse}
                      onChange={(e) => handleVitalChange('pulse', e.target.value)}
                    />
                    <span className="input-group-text">bpm</span>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <label className="form-label text-secondary">Respiratory Rate</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="e.g. 16"
                      value={vitals.respiratoryRate}
                      onChange={(e) => handleVitalChange('respiratoryRate', e.target.value)}
                    />
                    <span className="input-group-text">rpm</span>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <label className="form-label text-secondary">SPO2</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="e.g. 98"
                      value={vitals.spo2}
                      onChange={(e) => handleVitalChange('spo2', e.target.value)}
                    />
                    <span className="input-group-text">%</span>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <label className="form-label text-secondary">Height</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="e.g. 175"
                      value={vitals.height}
                      onChange={(e) => handleVitalChange('height', e.target.value)}
                    />
                    <span className="input-group-text">cm</span>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <label className="form-label text-secondary">Weight</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="e.g. 70"
                      value={vitals.weight}
                      onChange={(e) => handleVitalChange('weight', e.target.value)}
                    />
                    <span className="input-group-text">Kg</span>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <label className="form-label text-secondary">BMI (Auto-calculated)</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control bg-light"
                      value={vitals.bmi}
                      placeholder="Height & Weight required"
                      readOnly
                    />
                    <span className="input-group-text">kg/m²</span>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <label className="form-label text-secondary">Waist</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="e.g. 85"
                      value={vitals.waist}
                      onChange={(e) => handleVitalChange('waist', e.target.value)}
                    />
                    <span className="input-group-text">cm</span>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <label className="form-label text-secondary">BSA (Auto-calculated)</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control bg-light"
                      value={vitals.bsa}
                      placeholder="Height & Weight required"
                      readOnly
                    />
                    <span className="input-group-text">m²</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complaints Form Section */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-transparent border-bottom py-3">
              <h5 className="mb-0 fw-bold">Chief Complaints</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Type a complaint and press Enter or Comma (,)..." 
                  value={complaintText}
                  onChange={(e) => setComplaintText(e.target.value)}
                  onKeyDown={handleAddComplaint}
                />
                <p className="mb-0 mt-2 text-muted fs-12">Press Enter or Comma after typing each complaint symptom.</p>
              </div>

              {complaintsList.length > 0 && (
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {complaintsList.map((comp, idx) => (
                    <div key={idx} className="consultation-pill-badge">
                      <span>{comp}</span>
                      <span className="remove-btn" onClick={() => removeComplaint(idx)}>&times;</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Medications Prescription Builder */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-transparent border-bottom d-flex align-items-center justify-content-between py-3">
              <h5 className="mb-0 fw-bold">Prescribe Medications</h5>
              <button 
                type="button" 
                className="btn btn-primary btn-sm d-inline-flex align-items-center gap-1"
                onClick={addMedication}
              >
                <i className="ti ti-plus"></i> Add Row
              </button>
            </div>
            <div className="card-body">
              {medications.length > 0 ? (
                <div className="row g-3">
                  {medications.map((med, idx) => (
                    <div key={idx} className="col-12 p-3 theme-card-bg-light rounded-3 mb-2">
                      <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                        <span className="fw-bold fs-13 text-primary">Medicine #{idx + 1}</span>
                        <button 
                          type="button" 
                          className="btn btn-sm btn-icon btn-soft-danger rounded-circle"
                          onClick={(e) => removeMedication(idx, e)}
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </div>

                      <div className="row g-2">
                        {/* Name */}
                        <div className="col-xl-3 col-md-6">
                          <label className="form-label text-secondary fs-12 mb-1">Medicine Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="e.g. Paracetamol"
                            value={med.name}
                            onChange={(e) => handleMedicationChange(idx, 'name', e.target.value)}
                          />
                        </div>

                        {/* Dosage */}
                        <div className="col-xl-2 col-md-6">
                          <label className="form-label text-secondary fs-12 mb-1">Dosage</label>
                          <div className="input-group">
                            <input 
                              type="text" 
                              className="form-control" 
                              placeholder="e.g. 500"
                              value={med.dosage}
                              onChange={(e) => handleMedicationChange(idx, 'dosage', e.target.value)}
                            />
                            <span className="input-group-text">mg</span>
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="col-xl-2 col-md-6">
                          <label className="form-label text-secondary fs-12 mb-1">Duration</label>
                          <div className="input-group">
                            <input 
                              type="text" 
                              className="form-control" 
                              placeholder="e.g. 5"
                              value={med.duration}
                              onChange={(e) => handleMedicationChange(idx, 'duration', e.target.value)}
                            />
                            <span className="input-group-text">Days</span>
                          </div>
                        </div>

                        {/* Frequency */}
                        <div className="col-xl-2 col-md-3">
                          <label className="form-label text-secondary fs-12 mb-1">Frequency</label>
                          <select 
                            className="form-select"
                            value={med.frequency}
                            onChange={(e) => handleMedicationChange(idx, 'frequency', e.target.value)}
                          >
                            <option value="Select">Select</option>
                            <option value="1-0-1">1-0-1 (Twice a day)</option>
                            <option value="1-0-0">1-0-0 (Morning only)</option>
                            <option value="0-0-1">0-0-1 (Night only)</option>
                            <option value="1-1-1">1-1-1 (Thrice a day)</option>
                            <option value="As Needed">PRN (As Needed)</option>
                          </select>
                        </div>

                        {/* Timing */}
                        <div className="col-xl-3 col-md-3">
                          <label className="form-label text-secondary fs-12 mb-1">Timing</label>
                          <select 
                            className="form-select"
                            value={med.timing}
                            onChange={(e) => handleMedicationChange(idx, 'timing', e.target.value)}
                          >
                            <option value="Select">Select</option>
                            <option value="Before Meal">Before Meal</option>
                            <option value="After Meal">After Meal</option>
                            <option value="With Meal">With Meal</option>
                          </select>
                        </div>

                        {/* Instructions */}
                        <div className="col-12 mt-2">
                          <label className="form-label text-secondary fs-12 mb-1">Special Instructions</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="e.g. Swallow whole, take with warm water"
                            value={med.instructions}
                            onChange={(e) => handleMedicationChange(idx, 'instructions', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 bg-light rounded-3">
                  <p className="text-secondary mb-2 fs-13">No medications prescribed yet.</p>
                  <button type="button" className="btn btn-sm btn-primary" onClick={addMedication}>
                    Prescribe Medication
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Investigations & Procedure */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-transparent border-bottom py-3">
              <h5 className="mb-0 fw-bold">Investigations & Procedure</h5>
            </div>
            <div className="card-body">
              <div className="d-flex gap-2 mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter test / procedure name (e.g. Lipid Profile, MRI Brain)..." 
                  value={invInput}
                  onChange={(e) => setInvInput(e.target.value)}
                />
                <button type="button" className="btn btn-primary" onClick={addInvestigation}>Add</button>
              </div>

              {investigations.length > 0 ? (
                <div className="d-flex flex-wrap gap-2">
                  {investigations.map((inv, idx) => (
                    <div key={idx} className="consultation-pill-badge">
                      <span>{inv}</span>
                      <span className="remove-btn" onClick={(e) => removeInvestigation(idx, e)}>&times;</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-secondary fs-13 mb-0">No investigations ordered.</p>
              )}
            </div>
          </div>

          {/* Clinical Advice */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-transparent border-bottom py-3">
              <h5 className="mb-0 fw-bold">Clinical Advice</h5>
            </div>
            <div className="card-body">
              <div className="d-flex gap-2 mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter dietary or general lifestyle advice..." 
                  value={adviceInput}
                  onChange={(e) => setAdviceInput(e.target.value)}
                />
                <button type="button" className="btn btn-primary" onClick={addAdvice}>Add</button>
              </div>

              {advices.length > 0 ? (
                <div className="d-flex flex-wrap gap-2">
                  {advices.map((adv, idx) => (
                    <div key={idx} className="consultation-pill-badge">
                      <span>{adv}</span>
                      <span className="remove-btn" onClick={(e) => removeAdvice(idx, e)}>&times;</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-secondary fs-13 mb-0">No advice written.</p>
              )}
            </div>
          </div>

          {/* Follow Up */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-transparent border-bottom py-3">
              <h5 className="mb-0 fw-bold">Follow Up</h5>
            </div>
            <div className="card-body">
              <div className="row g-3 align-items-center">
                <div className="col-md-6">
                  <label className="form-label fw-semibold text-secondary mb-0">Next Consultation Recommended?</label>
                </div>
                <div className="col-md-6">
                  <select 
                    className="form-select"
                    value={followUp.nextConsultation}
                    onChange={(e) => setFollowUp(prev => ({ ...prev, nextConsultation: e.target.value }))}
                  >
                    <option value="Select">Select</option>
                    <option value="Yes">Yes (In 1 week)</option>
                    <option value="Yes - 2 weeks">Yes (In 2 weeks)</option>
                    <option value="Yes - 1 month">Yes (In 1 month)</option>
                    <option value="No">No (As needed)</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold text-secondary mb-0">Whether to Come on Empty Stomach?</label>
                </div>
                <div className="col-md-6">
                  <select 
                    className="form-select"
                    value={followUp.emptyStomach}
                    onChange={(e) => setFollowUp(prev => ({ ...prev, emptyStomach: e.target.value }))}
                  >
                    <option value="Select">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="d-flex align-items-center gap-2 mt-4 justify-content-end mb-4">
            <Link to="/appointments" className="btn btn-light border">Cancel</Link>
            <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-1">
              <i className="ti ti-checkbox"></i> End Consultation
            </button>
          </div>

        </form>
      </div>

      {/* Stateful View Medical History Modal */}
      {medicalHistoryOpen && (
        <div className="modal-backdrop fade show"></div>
      )}
      {medicalHistoryOpen && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-history text-primary fs-22"></i>
                  Medical History: Reyan Verol
                </h5>
                <button type="button" className="btn-close" onClick={() => setMedicalHistoryOpen(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                
                {/* Diagnoses */}
                <div className="mb-4">
                  <h6 className="fw-bold text-dark mb-2"><i className="ti ti-activity me-1 text-primary"></i>Past Diagnoses</h6>
                  <div className="p-3 theme-card-bg-light rounded-3">
                    <ul className="mb-0 fs-13 text-secondary ps-3">
                      <li className="mb-1"><span className="fw-bold text-dark">Mild Hypertension</span> - Diagnosed in April 2024. Controlled by Lisinopril 10mg daily.</li>
                      <li><span className="fw-bold text-dark">Chronic Seasonal Allergies</span> - Diagnosed in May 2022. Takes Cetirizine 10mg PRN.</li>
                    </ul>
                  </div>
                </div>

                {/* Allergies */}
                <div className="mb-4">
                  <h6 className="fw-bold text-dark mb-2"><i className="ti ti-alert-triangle me-1 text-danger"></i>Drug & Food Allergies</h6>
                  <div className="p-3 theme-card-bg-light rounded-3 border-danger-subtle">
                    <ul className="mb-0 fs-13 text-danger ps-3">
                      <li className="mb-1"><span className="fw-bold">Penicillin</span> - Severe anaphylaxis reaction. Avoid all beta-lactam derivatives.</li>
                      <li><span className="fw-bold">Peanuts</span> - Mild urticaria / skin rashes.</li>
                    </ul>
                  </div>
                </div>

                {/* Past Visits */}
                <div>
                  <h6 className="fw-bold text-dark mb-2"><i className="ti ti-calendar me-1 text-success"></i>Past Visits List</h6>
                  <div className="table-responsive">
                    <table className="table table-bordered fs-12 mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Date</th>
                          <th>Practitioner</th>
                          <th>Department</th>
                          <th>Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>12 Dec 2024</td>
                          <td>Dr. Andrew Clark</td>
                          <td>Cardiology</td>
                          <td>Routine cardiology follow-up</td>
                        </tr>
                        <tr>
                          <td>15 May 2024</td>
                          <td>Dr. Christopher Lewis</td>
                          <td>General Medicine</td>
                          <td>Annual general body health check</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-primary" onClick={() => setMedicalHistoryOpen(false)}>Close History</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stateful Success Modal */}
      {successOpen && (
        <div className="modal-backdrop fade show"></div>
      )}
      {successOpen && (
        <div className="modal fade show d-block animate-fade-in" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-body text-center py-5">
                <div className="mb-3 text-success">
                  <i className="ti ti-circle-check" style={{ fontSize: '4.5rem' }}></i>
                </div>
                <h4 className="fw-bold text-dark mb-2">Consultation Completed</h4>
                <p className="text-secondary fs-14 px-3 mb-4">
                  The clinical consultation details for patient <span className="fw-bold">Reyan Verol</span> have been logged and saved in EMR records successfully.
                </p>

                {/* Prescription Summary Box */}
                <div className="p-3 theme-card-bg-light rounded-3 text-start mb-4 mx-3">
                  <h6 className="fw-bold text-dark border-bottom pb-1.5 mb-2 fs-13">Logged Prescriptions:</h6>
                  <div className="fs-12 text-secondary">
                    <div><span className="fw-bold">Complaints:</span> {complaintsList.join(', ') || 'None'}</div>
                    <div className="mt-1"><span className="fw-bold">Meds:</span> {medications.map(m => m.name ? `${m.name} (${m.dosage}mg)` : null).filter(Boolean).join(', ') || 'None'}</div>
                    <div className="mt-1"><span className="fw-bold">Procedures:</span> {investigations.join(', ') || 'None'}</div>
                    <div className="mt-1"><span className="fw-bold">Follow up:</span> {followUp.nextConsultation !== 'Select' ? followUp.nextConsultation : 'Not scheduled'}</div>
                  </div>
                </div>

                <div className="d-flex gap-2 justify-content-center px-3">
                  <button type="button" className="btn btn-light flex-fill border" onClick={handleCloseSuccess}>Close</button>
                  <Link to="/appointments" className="btn btn-primary flex-fill">Go to Appointments</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default AppointmentConsultation;
