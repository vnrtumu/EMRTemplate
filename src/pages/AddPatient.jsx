import { Link } from 'react-router-dom';
const AddPatient = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Patients</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item active">Add Patient</li>
                        </ol>
                    </div>
                </div>
                <Link to="/patients" className="fw-medium d-flex align-items-center text-decoration-none"><i className="ti ti-arrow-left me-1"></i>Back to Patients</Link>
            </div>
            

            
            <div className="row vertical-tab">
                <div className="col-xl-3 col-lg-4">
                    <div className="nav flex-column nav-pills vertical-tab mb-lg-0 mb-4">
                        <button className="nav-link active fw-medium d-flex align-items-center rounded"><span></span><i className="ti ti-info-circle fs-16 me-2"></i>Basic Information</button>
                        <button className="nav-link fw-medium d-flex align-items-center rounded"><span></span><i className="ti ti-vector-spline fs-16 me-2"></i>Vitals</button>
                        <button className="nav-link fw-medium d-flex align-items-center rounded"><span></span><i className="ti ti-files fs-16 me-2"></i>Medical HIstory</button>
                        <button className="nav-link fw-medium d-flex align-items-center rounded"><span></span><i className="ti ti-vaccine fs-16 me-2"></i>Complaints</button>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-8">
                    <div className="patient-form-wizard flex-fill">

                        
                        <div className="form-wizard-content active">
                            <form action="https://dreamsemr.dreamstechnologies.com/php/template/add-patient.php">
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Basic Information</h5>
                                    </div>
                                    <div className="card-body pb-1">
                                        <div className="mb-3">
                                            <label className="form-label">Profile Image<span className="text-danger ms-1">*</span>  </label>
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="flex-shrink-0">
                                                    <div className="position-relative d-flex align-items-center border rounded">
                                                        <img src="/assets/img/avatars/avatar-39.jpg" className="avatar avatar-xxl" alt="patient" />
                                                    </div>
                                                </div>
                                                <div className="d-inline-flex flex-column align-items-start">
                                                    <div className="d-inline-flex align-items-start gap-2 flex-wrap">
                                                        <div className="drag-upload-btn btn btn-dark position-relative mb-2">
                                                            <i className="ti ti-arrows-exchange-2 me-1"></i>Change Image
                                                            <input type="file" className="form-control image-sign" multiple="" />
                                                        </div>
                                                        <div>
                                                            <a href="#/" className="btn btn-danger d-flex align-items-center gap-1"> <i className="ti ti-trash"></i>  Remove</a>
                                                        </div>
                                                    </div>
                                                    <span className="fs-13 text-body">Use JPEG, PNG, or GIF. Best size: 200x200 pixels. Keep it under 5MB</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">ID</label>
                                                    <input type="text" className="form-control" value="#PT0005" disabled />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">First Name<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Middle Name<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Last Name<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Blood Group<span className="text-danger ms-1">*</span></label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>O+</option>
                                                        <option>O-</option>
                                                        <option>A+</option>
                                                        <option>A-</option>
                                                        <option>B+</option>
                                                        <option>B-</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Age<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">DOB<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group w-auto input-group-flat">
                                                        <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                                        <span className="input-group-text">
                                                            <i className="ti ti-calendar"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Patient Type<span className="text-danger ms-1">*</span></label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>Out Patient</option>
                                                        <option>In Patient</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Gender<span className="text-danger ms-1">*</span></label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Company Name with Location</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Martial Status<span className="text-danger ms-1">*</span></label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>Married</option>
                                                        <option>Unmarried</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Contact Information</h5>
                                    </div>
                                    <div className="card-body pb-1">
                                        <div className="row">
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Mobile Number<span className="text-danger ms-1">*</span></label>
                                                    <input className="form-control" name="phone" type="tel" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Emergency Number<span className="text-danger ms-1">*</span></label>
                                                    <input className="form-control" name="phone" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Guardian / Person Name<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Address Line 1<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Address Line 2</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Country<span className="text-danger ms-1">*</span></label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>United States</option>
                                                        <option>India</option>
                                                        <option>Canada</option>
                                                        <option>Germany</option>
                                                        <option>Brazil</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">City</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>Los Angeles</option>
                                                        <option>San Francisco</option>
                                                        <option>San Jose</option>
                                                        <option>Fresno</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">State</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>California</option>
                                                        <option>Texas</option>
                                                        <option>New York</option>
                                                        <option>Florida</option>
                                                        <option>Illinois</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Pin Code</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Referral Doctor’s Info</h5>
                                    </div>
                                    <div className="card-body pb-1">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label className="form-label">Referred By<span className="text-danger ms-1">*</span></label>
                                                    <select className="select2" data-toggle="select2">
                                                        <option>Select</option>
                                                        <option>Dr. Andrew Clark</option>
                                                        <option>Dr. Katherine Brooks</option>
                                                        <option>Dr. Benjamin Harris</option>
                                                        <option>Dr. Laura Mitchell</option>
                                                        <option>Dr. Christopher Lewis</option>
                                                        <option>Dr. Natalie Foster</option>
                                                        <option>Dr. Jonathan Adams</option>
                                                        <option>Dr. Rebecca Scott</option>
                                                        <option>Dr. Samuel Turner</option>
                                                        <option>Dr. Victoria Evans</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label className="form-label">Referred On<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group w-auto input-group-flat">
                                                        <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                                        <span className="input-group-text">
                                                            <i className="ti ti-calendar"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label className="form-label">Department<span className="text-danger ms-1">*</span></label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>Anaesthesiology</option>
                                                        <option>Dental Surgery</option>
                                                        <option>Dermatology</option>
                                                        <option>ENT Surgery</option>
                                                        <option>General Medicine</option>
                                                        <option>Ophthalmology</option>
                                                        <option>Orthopaedics</option>
                                                        <option>Pediatrics </option>
                                                        <option>Radiology</option>
                                                        <option>Cardiology</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Other Information</h5>
                                    </div>
                                    <div className="card-body pb-1">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Notes if any</label>
                                                    <textarea rows="4" className="form-control"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end flex-wrap align-items-center gap-2">
                                    <button type="button" className="btn btn-primary next-tab-btn" id="save-basic-info">Save & Add Vitals</button>
                                </div>
                            </form>

                        </div>

                        
                        <div className="form-wizard-content">
                            <form action="https://dreamsemr.dreamstechnologies.com/php/template/add-patient.php">
                                <div className="card border-0 shadow-sm border-0 shadow-sm pb-0">
                                    <div className="card-header">
                                        <h5 className="mb-0">Vitals</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Temperature <span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <span className="input-group-text">F</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Pulse<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <span className="input-group-text">mmHg</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Respiratory Rate<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <span className="input-group-text">rpm</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">SPO2<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <span className="input-group-text">%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Height<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <span className="input-group-text">cm</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Weight<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <span className="input-group-text">Kg</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">BMI<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <span className="input-group-text">kg/cm</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Waist<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <span className="input-group-text">cm</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">BSA<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <span className="input-group-text">M</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-0">
                                                    <label className="form-label">Quick Notes</label>
                                                    <textarea rows="4" className="form-control" placeholder="Description"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end flex-wrap align-items-center gap-2">
                                    <button type="button" className="btn btn-white back-btn">Back</button>
                                    <button type="button" className="btn btn-primary next-tab-btn" id="save-vitals">Save & Add Medical Histroy</button>
                                </div>
                            </form>
                        </div>

                        
                        <div className="form-wizard-content">
                            <form action="https://dreamsemr.dreamstechnologies.com/php/template/add-patient.php">
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Medical History</h5>
                                    </div>
                                    <div className="card-body">
                                        
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Type</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>Allergy</option>
                                                        <option>Fever</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Reason</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Date of Illness</label>
                                                    <div className="input-group w-auto input-group-flat">
                                                        <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                                        <span className="input-group-text">
                                                            <i className="ti ti-calendar"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Hospital Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Assessment done if any</label>
                                                    <textarea rows="4" className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div>
                                                    <label className="form-label">Notes</label>
                                                    <textarea rows="4" className="form-control" placeholder="Add Notes"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        <div className="mt-4 pt-4 border-top"></div>

                                        
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Type</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>Allergy</option>
                                                        <option>Fever</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Reason</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Date of Illness</label>
                                                    <div className="input-group w-auto input-group-flat">
                                                        <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                                        <span className="input-group-text">
                                                            <i className="ti ti-calendar"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Hospital Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Assessment done if any</label>
                                                    <textarea rows="4" className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div>
                                                    <label className="form-label">Notes</label>
                                                    <textarea rows="4" className="form-control" placeholder="Add Notes"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        <div className="mt-4 pt-4 border-top">
                                            <a href="#/" className="text-orange d-linline-flex align-items-center gap-1 fw-medium"> <i className="ti ti-plus"></i>  Add More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end flex-wrap align-items-center gap-2">
                                    <button type="button" className="btn btn-white back-btn">Back</button>
                                    <button type="button" className="btn btn-primary next-tab-btn" id="save-medical-history">Save & Add Complaints</button>
                                </div>
                            </form>
                        </div>

                        
                        <div className="form-wizard-content">
                            <form>
                                <div className="card border-0 shadow-sm border-0 shadow-sm pb-0">
                                    <div className="card-header">
                                        <h5 className="mb-0">Complaints</h5>
                                    </div>
                                    <div className="card-body pb-1">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="mb-4">
                                                    <label className="form-label">Patients Overall Health Condition</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>Very Poor</option>
                                                        <option>Poor</option>
                                                        <option>Fair</option>
                                                        <option>Good</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-4">
                                                    <div className="form-check mb-2">
                                                        <input type="checkbox" className="form-check-input" id="customCheck4" defaultChecked />
                                                        <label className="form-check-label form-label mb-0" htmlFor="customCheck4">Does patient have any health Condition</label>
                                                    </div>
                                                    <input className="form-control" value="Fever, Cough, Headache" />

                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <div className="form-check mb-2">
                                                        <input type="checkbox" className="form-check-input" id="customCheck8" defaultChecked />
                                                        <label className="form-check-label form-label mb-0" htmlFor="customCheck8">Allergies if any Before</label>
                                                    </div>
                                                    <input className="form-control" value="Sore Throat" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end flex-wrap align-items-center gap-2">
                                    <button type="button" className="btn btn-white back-btn">Back</button>
                                    <a href="#/" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#success_modal">Save & Confirm</a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            

        </div>
        

            
    <footer className="footer text-center">
        <p className="mb-0 text-dark"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default AddPatient;
