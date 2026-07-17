import { Link } from 'react-router-dom';
const AddDoctor = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Add Doctors</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item active">Add Doctors</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <Link to="/doctors" className="fw-medium d-flex align-items-center text-decoration-none"><i className="ti ti-arrow-left me-1"></i>Back to Doctors</Link>
                </div>
            </div>
            


            
            <div className="row row-gap-3 vertical-tab">
                <div className="col-xl-3 col-lg-4">
                    <div className="nav flex-column nav-pills">
                        <button className="nav-link active fw-medium d-flex align-items-center rounded"><span></span><i className="ti ti-info-circle fs-16 me-2"></i>Basic Information</button>
                        <button className="nav-link fw-medium d-flex align-items-center rounded"><span></span><i className="ti ti-vector-spline fs-16 me-2"></i>Extra Information</button>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-8">
                    <div className="patient-form-wizard flex-fill">

                        
                        <div className="form-wizard-content active">
                            <form action="https://dreamsemr.dreamstechnologies.com/php/template/add-doctors.php">

                                
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Basic Information</h5>
                                    </div>
                                    <div className="card-body pb-0">
                                        <div className="mb-3">
                                            <label className="form-label">Profile Image<span className="text-danger ms-1">*</span>  </label>
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="flex-shrink-0">
                                                    <div className="position-relative d-flex align-items-center border rounded">
                                                        <img src="/assets/img/doctors/doctor-01.jpg" className="avatar avatar-xxl" alt="doctor" />
                                                    </div>
                                                </div>
                                                <div className="d-inline-flex flex-column align-items-start">
                                                    <div className="d-inline-flex align-items-start gap-2">
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
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">ID</label>
                                                    <input type="text" className="form-control" value="#DR0025" disabled />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">First Name<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Last Name<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Department<span className="text-danger ms-1">*</span></label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>Dentistry</option>
                                                        <option>Pediatrics</option>
                                                        <option>Cardiology</option>
                                                        <option>Orthopedics</option>
                                                        <option>Dermatology</option>
                                                        <option>Neurology</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Specialist<span className="text-danger ms-1">*</span></label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>Dentist</option>
                                                        <option>Pediatrics</option>
                                                        <option>Pediatrics</option>
                                                        <option>Orthopedic Surgeon </option>
                                                        <option>Dermatologist</option>
                                                        <option>Neurologist</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Fees ($)<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Phone Number<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Email Address<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
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
                                                    <label className="form-label">Registration Number<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Known Languages<span className="text-danger ms-1">*</span></label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>English</option>
                                                        <option>Arabic</option>
                                                        <option>French</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">About</label>
                                                    <textarea className="form-control" rows="4"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Address Information</h5>
                                    </div>
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-xl-12 col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Address<span className="text-danger ms-1">*</span></label>
                                                    <input className="form-control" name="phone" type="tel" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Country</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>United States</option>
                                                        <option>Canada</option>
                                                        <option>Germany</option>
                                                        <option>France</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">State</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>California</option>
                                                        <option>New York</option>
                                                        <option>Texas</option>
                                                        <option>Florida</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">City</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>Los Angeles</option>
                                                        <option>San Diego</option>
                                                        <option>Fresno</option>
                                                        <option>San Francisco</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Pin code</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Account Details</h5>
                                    </div>
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Display Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">User Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Confirm Password</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="d-flex justify-content-end flex-wrap align-items-center gap-2">
                                    <button type="submit" className="btn btn-white">Cancel</button>
                                    <button type="button" className="btn btn-primary next-tab-btn" id="save-basic-info">Save & Next</button>
                                </div>
                            </form>
                        </div>

                        
                        <div className="form-wizard-content">
                            <form>

                                
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Educational Details</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Institute Name</label>
                                                    <input type="text" className="form-control" value="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Qualification<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Year<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group w-auto input-group-flat">
                                                        <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                                        <span className="input-group-text">
                                                            <i className="ti ti-calendar"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Institute Name</label>
                                                    <input type="text" className="form-control" value="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Qualification<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Year<span className="text-danger ms-1">*</span></label>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="input-group w-auto input-group-flat">
                                                            <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                                            <span className="input-group-text">
                                                                <i className="ti ti-calendar"></i>
                                                            </span>
                                                        </div>
                                                        <a href="#/" className="btn btn-icon btn-soft-danger border-0 flex-shrink-0 rounded-circle d-linline-flex align-items-center gap-1"> <i className="ti ti-trash"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#/" className="text-primary d-linline-flex align-items-center gap-1 fw-medium"> <i className="ti ti-plus"></i>  Add More</a>
                                    </div>
                                </div>
                                

                                
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Experience</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Hospital Name</label>
                                                    <input type="text" className="form-control" value="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">No of Years<span className="text-danger ms-1">*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Year<span className="text-danger ms-1">*</span></label>
                                                    <div className="input-group w-auto input-group-flat">
                                                        <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                                        <span className="input-group-text">
                                                            <i className="ti ti-calendar"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#/" className="text-primary d-linline-flex align-items-center gap-1 fw-medium"> <i className="ti ti-plus"></i>  Add More</a>
                                    </div>
                                </div>
                                

                                
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Social Media</h5>
                                    </div>
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Facebook</label>
                                                    <input type="text" className="form-control" value="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Twitter</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Linkedin</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Instagram</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="card border-0 shadow-sm border-0 shadow-sm">
                                    <div className="card-header">
                                        <h5 className="mb-0">Membership</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Title</label>
                                                    <input type="text" className="form-control" value="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Year</label>
                                                    <div className="input-group w-auto input-group-flat">
                                                        <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                                        <span className="input-group-text">
                                                            <i className="ti ti-calendar"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Description</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#/" className="text-primary d-linline-flex align-items-center gap-1 fw-medium"> <i className="ti ti-plus"></i>  Add More</a>
                                    </div>
                                </div>
                                

                                
                                <div className="card border-0 shadow-sm border-0 shadow-sm mb-0">
                                    <div className="card-header">
                                        <h5 className="mb-0">Awards</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Title</label>
                                                    <input type="text" className="form-control" value="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Year</label>
                                                    <div className="input-group w-auto input-group-flat">
                                                        <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                                        <span className="input-group-text">
                                                            <i className="ti ti-calendar"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Description</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#/" className="text-primary d-linline-flex align-items-center gap-1 fw-medium"> <i className="ti ti-plus"></i>  Add More</a>
                                    </div>
                                </div>
                                

                                <div className="d-flex justify-content-end flex-wrap align-items-center gap-2 mt-3">
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

export default AddDoctor;
