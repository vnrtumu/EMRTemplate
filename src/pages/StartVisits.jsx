import { Link } from 'react-router-dom';
const StartVisits = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Visits</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item active">Visits</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <Link to="/visits" className="fw-medium d-flex align-items-center text-decoration-none"><i className="ti ti-arrow-left me-1"></i>Back to Visits</Link>
                </div>
            </div>
            

            
            <div className="card border-0 shadow-sm border-0 shadow-sm">
                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h5 className="d-inline-flex align-items-center mb-0">Basic Information</h5>
                </div>
                <div className="card-body">

                    
                    <div className="row row-gap-3 align-items-center">
                        <div className="col-lg-6">
                            <div className="d-sm-flex align-items-center">
                                <a href="#/" className="avatar avatar-xxl me-3 flex-shrink-0">
                                    <img src="/assets/img/avatars/avatar-05.jpg" alt="img" className="rounded" />
                                </a>
                                <div>
                                    <span className="badge badge-soft-primary">Out Patient</span>
                                    <h6 className="mb-1 mt-1"><a href="#/">James Carter</a></h6>
                                    <p className="mb-0">Consultation ID : #C243546</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-3 bg-light rounded">
                                <div className="row row-gap-2">
                                    <div className="col-6 col-md-4">
                                        <h6 className="fs-14 fw-semibold mb-1 text-truncate">Age / Gender</h6>
                                        <p className="fs-13 mb-0 text-truncate">28 Years / Male</p>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <h6 className="fs-14 fw-semibold mb-1 text-truncate">Department</h6>
                                        <p className="fs-13 mb-0 text-truncate">Cardiology</p>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <h6 className="fs-14 fw-semibold mb-1">Date</h6>
                                        <p className="fs-13 mb-0 text-truncate">25 Jan 2024, 07:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            

            
            <div className="card border-0 shadow-sm border-0 shadow-sm">
                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h5 className="d-inline-flex align-items-center mb-0">Vitals</h5>
                </div>
                <div className="card-body pb-0">

                    
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="mb-3">
                                <label className="form-label">Temperature<span className="text-danger ms-1">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">F</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="mb-3">
                                <label className="form-label">Pulse<span className="text-danger ms-1">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">mmHg</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="mb-3">
                                <label className="form-label">Respiratory Rate<span className="text-danger ms-1">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">rpm</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="mb-3">
                                <label className="form-label">SPO2<span className="text-danger ms-1">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="mb-3">
                                <label className="form-label">Height<span className="text-danger ms-1">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">cm</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="mb-3">
                                <label className="form-label">Weight<span className="text-danger ms-1">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">Kg</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="mb-3">
                                <label className="form-label">BMI<span className="text-danger ms-1">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">kg/cm</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="mb-3">
                                <label className="form-label">Waist<span className="text-danger ms-1">*</span></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">cm</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
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
            </div>
            

            
            <div className="card border-0 shadow-sm border-0 shadow-sm">
                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h5 className="d-inline-flex align-items-center mb-0">Complaint</h5>
                </div>
                <div className="card-body">
                    
                    <div className="row">
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="mb-0">
                                <input type="text" className="form-control" />
                                <p className="mb-0 mt-1 fs-13">Enter value separated by comma </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            

            
            <div className="card border-0 shadow-sm border-0 shadow-sm">
                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h5 className="d-inline-flex align-items-center mb-0">Assessment</h5>
                </div>
                <div className="card-body">
                    
                    <div className="row row-gap-3">
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="mb-0">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            

            
            <div className="card border-0 shadow-sm border-0 shadow-sm">
                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h5 className="d-inline-flex align-items-center mb-0">Medications</h5>
                </div>
                <div className="card-body">
                    
                    <div className="row">
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
                    

                    
                    <div className="row">
                        <div className="col-xl-2 col-md-4 col-sm-6">
                            <div className="mb-3">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6">
                            <div className="mb-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">mg</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6">
                            <div className="mb-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">M</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6">
                            <div className="mb-3">
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
                                <select className="select">
                                    <option>Select</option>
                                    <option>Before Meal</option>
                                    <option>After Meal</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6">
                            <div className="d-flex align-items-center gap-2">
                                <input className="form-control" />
                                <a href="#/" className="btn btn-icon btn-soft-danger border-0 flex-shrink-0 rounded-circle d-linline-flex align-items-center gap-1"> <i className="ti ti-trash"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <a href="#/" className="text-primary d-linline-flex align-items-center gap-1 fw-medium"> <i className="ti ti-plus"></i>  Add More</a>
                </div>
            </div>
            

            
            <div className="card border-0 shadow-sm border-0 shadow-sm">
                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h5 className="d-inline-flex align-items-center mb-0">Advice</h5>
                </div>
                <div className="card-body">
                    
                    <div className="row row-gap-3">
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="mb-0">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            

            
            <div className="card border-0 shadow-sm border-0 shadow-sm mb-0">
                <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h5 className="d-inline-flex align-items-center mb-0">Follow Up</h5>
                </div>
                <div className="card-body pb-0">
                    
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label className="form-label mb-0">Next Visit</label>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="input-group w-auto input-group-flat mb-3">
                                <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                <span className="input-group-text">
                                    <i className="ti ti-calendar"></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label className="form-label">Whether to Come on Empty Stomach?</label>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="mb-3">
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
            

            <div className="d-flex justify-content-end flex-wrap align-items-center gap-2 mt-3">
                <button type="button" className="btn btn-white back-btn">Cancel</button>
                <a href="#/" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#success_modal">End Visits</a>
            </div>

        </div>
        

            
    <footer className="footer text-center">
        <p className="mb-0 text-dark"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default StartVisits;
