import { Link } from 'react-router-dom';
const AppointmentConsultation = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Consultation</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/appointments">Appointments</Link></li>
                            <li className="breadcrumb-item active">Consultation</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <Link to="/appointments" className="fw-medium d-flex align-items-center text-decoration-none"><i className="ti ti-arrow-left me-1"></i>Back to Appointments</Link>
                </div>
            </div>
            

            
            <div className="card border-0 shadow-sm border-0 shadow-sm">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <h5 className="mb-0">Basic Information</h5>
                    <a href="#" className="fw-medium d-inline-flex align-items-center"  data-bs-toggle="modal" data-bs-target="#medical_history">View Medical History<i className="ti ti-arrow-right ms-1"></i></a>
                </div>
                <div className="card-body">
                    <div className="row row-gap-3 align-items-center">
                        <div className="col-xxl-6 col-xl-5">
                            <div className="d-sm-flex align-items-center">
                                <a href="#/" className="avatar avatar-xxxl mb-3 mb-sm-0 me-sm-3 flex-shrink-0">
                                    <img src="/assets/img/avatars/avatar-05.jpg" alt="patient" className="rounded" />
                                </a>
                                <div>
                                    <span className="badge badge-soft-primary mb-1">Out Patient</span>
                                    <h6 className="mb-1"><Link to="/patient-details">Reyan Verol</Link></h6>
                                    <p className="mb-1">Consultation ID : #C243546</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-7">
                            <div className="p-3 bg-light rounded">
                                <div className="row row-gap-2">
                                    <div className="col-sm-4">
                                        <h6 className="fs-14 fw-semibold mb-1 text-truncate">Age / Gender</h6>
                                        <p className="fs-13 mb-0 text-truncate">28 Years / Male</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <h6 className="fs-14 fw-semibold mb-1 text-truncate">Department</h6>
                                        <p className="fs-13 mb-0 text-truncate">Cardiology</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <h6 className="fs-14 fw-semibold mb-1">Date</h6>
                                        <p className="fs-13 mb-0">25 Jan 2025, 07:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <form action="https://dreamsemr.dreamstechnologies.com/php/template/appointments.php">

                
                <div className="card border-0 shadow-sm border-0 shadow-sm">
                    <div className="card-header">
                        <h5 className="mb-0">Vitals</h5>
                    </div>
                    <div className="card-body">
                        <div className="vitals-info">
                            <div className="row gx-3">
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
                            </div>
                        </div>
                        <a href="#/" className="link-primary fw-medium"><i className="ti ti-plus me-1"></i>Add New</a>
                    </div>
                </div>
                

                
                <div className="card border-0 shadow-sm border-0 shadow-sm">
                    <div className="card-header">
                        <h5 className="mb-0">Complaint</h5>
                    </div>
                    <div className="card-body">
                            <div className="mb-0">
                            <input type="text" className="form-control" />
                            <p className="mb-0 mt-1 fs-13">Enter value separated by comma </p>
                        </div>
                    </div>
                </div>
                

                
                <div className="card border-0 shadow-sm border-0 shadow-sm">
                    <div className="card-header">
                        <h5 className="mb-0">Medications</h5>
                    </div>
                    <div className="card-body">
                        <div className="row gx-3">
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">Medicine Name<span className="text-danger ms-1">*</span></label>
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">Dosage<span className="text-danger ms-1">*</span></label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-text">mg</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">Duration<span className="text-danger ms-1">*</span></label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-text">M</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">Frequency<span className="text-danger ms-1">*</span></label>
                                    <select className="select">
                                        <option>Select</option>
                                        <option>1-0-1</option>
                                        <option>1-0-0</option>
                                        <option>0-0-1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">Timing<span className="text-danger ms-1">*</span></label>
                                    <select className="select">
                                        <option>Select</option>
                                        <option>Before Meal</option>
                                        <option>After Meal</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">Instructions<span className="text-danger ms-1">*</span></label>
                                    <input className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3">
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">Medicine Name<span className="text-danger ms-1">*</span></label>
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">Dosage<span className="text-danger ms-1">*</span></label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-text">mg</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">Duration<span className="text-danger ms-1">*</span></label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-text">M</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">Frequency<span className="text-danger ms-1">*</span></label>
                                    <select className="select">
                                        <option>Select</option>
                                        <option>1-0-1</option>
                                        <option>1-0-0</option>
                                        <option>0-0-1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label">Timing<span className="text-danger ms-1">*</span></label>
                                    <select className="select">
                                        <option>Select</option>
                                        <option>Before Meal</option>
                                        <option>After Meal</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <label className="form-label">Instructions<span className="text-danger ms-1">*</span></label>
                                <div className="d-flex align-items-center">
                                    <div className="mb-3 w-100">
                                        <input className="form-control" />
                                    </div>
                                    <a href="#/" className="ms-2 mb-3 d-flex align-items-center rounded-circle btn-icon btn-xs fs-12 btn-soft-danger p-0 flex-shrink-0"><i className="ti ti-trash"></i></a>
                                </div>
                            </div>
                        </div>
                        <a href="#/" className="link-primary fw-medium"><i className="ti ti-plus me-1 "></i>Add New</a>
                    </div>
                </div>
                

                
                <div className="card border-0 shadow-sm border-0 shadow-sm">
                    <div className="card-header">
                        <h5 className="mb-0">Investigations & Procedure</h5>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <input type="text" className="form-control" />
                        </div>
                        <a href="#/" className="link-primary fw-medium"><i className="ti ti-plus me-1"></i>Add New</a>
                    </div>
                </div>
                

                
                <div className="card border-0 shadow-sm border-0 shadow-sm">
                    <div className="card-header">
                        <h5 className="mb-0">Advice</h5>
                    </div>
                    <div className="card-body pb-1">
                        <div className="mb-3">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                

                
                <div className="card border-0 shadow-sm border-0 shadow-sm mb-0">
                    <div className="card-header">
                        <h5 className="mb-0">Follow Up</h5>
                    </div>
                    <div className="card-body pb-1">
                        <div className="row gx-3 align-items-center">
                            <div className="col-md-6">
                                <div className="mb-md-3">
                                    <label className="form-label mb-md-0">Next Consultation</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <select className="select">
                                        <option>Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-md-3">
                                    <label className="form-label mb-md-0">Whether to Come on Empty Stomach?</label>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="mb-3 w-100">
                                    <select className="select">
                                        <option>Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="d-flex align-items-center gap-2 mt-4 justify-content-end">
                    <button type="button" className="btn btn-white">Cancel</button>
                    <button type="submit" className="btn btn-primary">End Consultation</button>
                </div>

            </form>

        </div>
        

            
    <footer className="footer text-center">
        <p className="mb-0 text-dark"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default AppointmentConsultation;
