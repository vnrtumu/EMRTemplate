import { Link } from 'react-router-dom';
const DoctorDetails = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Doctor Details</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item active">Doctor Details</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <Link to="/doctors" className="fw-medium d-flex align-items-center text-decoration-none"><i className="ti ti-arrow-left me-1"></i>Back to Doctors</Link>
                </div>
            </div>
            

            
            <div className="row">
                
                <div className="col-xl-4">
                    <div className="card border-0 shadow-sm border-0 shadow-sm mb-0">
                        <div className="card-body">
                            <div className="d-flex align-items-center pb-3 mb-3 border-bottom gap-3">
                                <a href="#/" className="avatar avatar-xxl">
                                    <img src="/assets/img/doctors/doctor-01.jpg" alt="doctor" className="rounded" />
                                </a>
                                <div>
                                    <span className="badge badge-md badge-soft-primary">#DR0025</span>
                                    <h5 className="mb-1 fw-semibold mt-2"><a href="#/">Dr. Andrew Clark</a></h5>
                                    <p className="fs-13 mb-0">Cardiology, MD, FRCS</p>
                                </div>
                            </div>
                            <h6 className="mb-3">Basic Information</h6>
                            <p className="mb-3">Specialist <span className="float-end text-dark">Interventional Cardiology</span></p>
                            <p className="mb-3">Member Since <span className="float-end text-dark">24 May 2024</span></p>
                            <p className="mb-3">DOB <span className="float-end text-dark">10 Jan 1991</span></p>
                            <p className="mb-3">Gender <span className="float-end text-dark">Male</span></p>
                            <p className="mb-3">Experience <span className="float-end text-dark">+16 years</span></p>
                            <p className="mb-3">Phone Number <span className="float-end text-dark">+1 75964 25493</span></p>
                            <p className="mb-3">Email <span className="float-end text-dark">andrew@example.com</span></p>
                            <p className="mb-3">Registered On <span className="float-end text-dark">24 May 1996</span></p>
                            <p className="mb-3">Registration Number <span className="float-end text-dark">DV457888AY4542</span></p>
                            <p className="mb-3">Total No of Appointments <span className="float-end text-dark">+300</span></p>
                            <h6 className="mt-3 mb-2 pt-3 border-top">Address Information</h6>
                            <p className="mb-0">8/15 Francis street, UK 454787</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xl-8">
                    <div className="accordion accordion-bordered" id="BorderedaccordionExample">

                        
                        <div className="accordion-item bg-white mb-4">
                            <h2 className="accordion-header" id="about_view_header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#about_view" aria-expanded="true" aria-controls="about_view">
                                    About
                                </button>
                            </h2>
                            <div id="about_view" className="accordion-collapse collapse show" aria-labelledby="about_view_header" data-bs-parent="#BorderedaccordionExample">
                                <div className="accordion-body">
                                    <p className="mb-0">Highly motivated and experienced doctor with a passion for providing excellent care to patients. Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine. Skilled in using the latest technology to streamline patient care. Committed to delivering compassionate, personalized care to each and every patient.</p>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="accordion-item bg-white  mb-4">
                            <h2 className="accordion-header" id="education_view_header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#education_view" aria-expanded="false" aria-controls="education_view">
                                    Education
                                </button>
                            </h2>
                            <div id="education_view" className="accordion-collapse collapse" aria-labelledby="education_view_header" data-bs-parent="#BorderedaccordionExample">
                                <div className="accordion-body">
                                    <div className="d-flex align-items-center flex-wrap gap-2 p-3 rounded border justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <a href="#/" className="avatar flex-shrink-0 bg-light text-dark">
                                                <i className="ti ti-book-2 fs-16"></i>
                                            </a>
                                            <div className="ms-2">
                                                <div>
                                                    <h6 className="fw-semibold fs-14 text-truncate mb-1">Oxford Medical Center</h6>
                                                    <p className="fs-13 mb-0">BAMS</p>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="badge bg-primary">2015 - 2020</span>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-2 p-3 rounded border justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <a href="#/" className="avatar flex-shrink-0 bg-light text-dark">
                                                <i className="ti ti-book-2 fs-16"></i>
                                            </a>
                                            <div className="ms-2">
                                                <div>
                                                    <h6 className="fw-semibold fs-14 text-truncate mb-1">Duke University Medical Center</h6>
                                                    <p className="fs-13 mb-0">MD/MS</p>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="badge bg-primary">2021 - 2023</span>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-2 p-3 rounded border justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <a href="#/" className="avatar flex-shrink-0 bg-light text-dark">
                                                <i className="ti ti-book-2 fs-16"></i>
                                            </a>
                                            <div className="ms-2">
                                                <div>
                                                    <h6 className="fw-semibold fs-14 text-truncate mb-1">City of Hope National Medical Center</h6>
                                                    <p className="fs-13 mb-0">Super - Specialization</p>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="badge bg-primary">2023 - Present</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="accordion-item bg-white  mb-4">
                            <h2 className="accordion-header" id="about_experience_header">
                                <button className="accordion-button fs-16 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#about_experience" aria-expanded="false" aria-controls="about_experience">
                                    Experience
                                </button>
                            </h2>
                            <div id="about_experience" className="accordion-collapse collapse" aria-labelledby="about_experience_header" data-bs-parent="#BorderedaccordionExample">
                                <div className="accordion-body">
                                    <div className="p-3 rounded border mb-3">
                                        <h6 className="fs-14 fw-semibold mb-1">Cambridge University Hospital, NHS Foundation Trust Cambridge</h6>
                                        <p className="fs-13 mb-2">Jan 2022 - Jan 2023</p>
                                        <p className="mb-0">Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine.</p>
                                    </div>
                                    <div className="p-3 rounded border">
                                        <h6 className="fs-14 fw-semibold mb-1">Hill Medical Hospital, Newcastle</h6>
                                        <p className="fs-13 mb-2">Jan 2021 - Jan 2022</p>
                                        <p className="mb-0">Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="accordion-item bg-white  mb-4">
                            <h2 className="accordion-header" id="member_view_header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#member_view" aria-expanded="false" aria-controls="member_view">
                                    Membership
                                </button>
                            </h2>
                            <div id="member_view" className="accordion-collapse collapse" aria-labelledby="member_view_header" data-bs-parent="#BorderedaccordionExample">
                                <div className="accordion-body">
                                    <div className="p-3 rounded border mb-3">
                                        <h6 className="fs-14 fw-semibold mb-1">Affilate Member</h6>
                                        <p className="fs-13 mb-2">Jan 2022</p>
                                        <p className="mb-0">Affiliate members include related allied health professionals- evidence based (Dietitians, Physiotherapist, Occupational therapist and Clinical Psychologist) who will team up with allopathic physicians to support the Lifestyle Medicine movement in India through ISLM.</p>
                                    </div>
                                    <div className="p-3 rounded border">
                                        <h6 className="fs-14 fw-semibold mb-1">Group Head</h6>
                                        <p className="fs-13 mb-2">Jan 2022</p>
                                        <p className="mb-0">Physician members include the allopathic doctors only</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="accordion-item bg-white">
                            <h2 className="accordion-header" id="awards_view_header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#awards_view" aria-expanded="false" aria-controls="awards_view">
                                    Awards
                                </button>
                            </h2>
                            <div id="awards_view" className="accordion-collapse collapse" aria-labelledby="awards_view_header" data-bs-parent="#BorderedaccordionExample">
                                <div className="accordion-body">
                                    
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="p-3 rounded border">
                                                <div className="d-flex align-items-center mb-2">
                                                    <a href="#/" className="avatar flex-shrink-0 bg-light text-dark">
                                                        <i className="ti ti-award fs-16"></i>
                                                    </a>
                                                    <div className="ms-2">
                                                        <div>
                                                            <h6 className="fw-semibold fs-14 text-truncate mb-1"><a href="#/">McLaughlin Medal</a></h6>
                                                            <p className="fs-13 mb-0">Dec 2022</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-truncate line-clamb-2">Important research of sustained excellence in any branch of medical sciences</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-3 rounded border">
                                                <div className="d-flex align-items-center mb-2">
                                                    <a href="#/" className="avatar flex-shrink-0 bg-light text-dark">
                                                        <i className="ti ti-award fs-16"></i>
                                                    </a>
                                                    <div className="ms-2">
                                                        <div>
                                                            <h6 className="fw-semibold fs-14 text-truncate mb-1"><a href="#/">Chanchlani Global Health</a></h6>
                                                            <p className="fs-13 mb-0">Mar 2023</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-truncate line-clamb-2">Vital world-class research to explore the causes of blindness and vision loss...</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
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

export default DoctorDetails;
