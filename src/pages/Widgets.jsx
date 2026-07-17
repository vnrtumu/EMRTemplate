import { Link } from 'react-router-dom';
const Widgets = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Widgets</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item active">Widgets</li>
                        </ol>
                    </div>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print" data-bs-original-title="Print"><i className="ti ti-printer"></i></a>
                    <a href="#/" className="btn btn-icon btn-white" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Download" data-bs-original-title="Download"><i className="ti ti-cloud-download"></i></a>
                    <Link to="/add-patient" className="btn btn-primary"><i className="ti ti-square-rounded-plus me-1"></i>New Patient</Link>
                </div>
            </div>
            

            
            <div className="row">
                
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card border-0 shadow-sm pb-2 flex-fill border-0 shadow-sm">
                        <div className="d-flex align-items-center justify-content-between gap-1 card-body pb-0 mb-1">
                            <div className="d-flex align-items-center overflow-hidden">
                                <span className="avatar bg-primary rounded-circle flex-shrink-0"><i className="ti ti-user-exclamation fs-20"></i></span>
                                <div className="ms-2 overflow-hidden">
                                    <p className="mb-1 text-truncate">Patients</p>
                                    <h5 className="mb-0">108</h5>
                                </div>
                            </div>
                            <div className="text-end">
                                <span className="badge badge-soft-success">+20%</span>
                            </div>
                        </div>
                        <div id="chart-1" className="chart-set"></div>
                    </div>
                </div>
                

                
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card border-0 shadow-sm pb-2 flex-fill border-0 shadow-sm">
                        <div className="d-flex align-items-center justify-content-between gap-1 card-body pb-0 mb-1">
                            <div className="d-flex align-items-center overflow-hidden">
                                <span className="avatar bg-orange rounded-circle flex-shrink-0"><i className="ti ti-calendar-check fs-20"></i></span>
                                <div className="ms-2 overflow-hidden">
                                    <p className="mb-1 text-truncate">Appointments</p>
                                    <h5 className="mb-0">658</h5>
                                </div>
                            </div>
                            <div className="text-end">
                                <span className="badge badge-soft-danger">-15%</span>
                            </div>
                        </div>
                        <div id="chart-2" className="chart-set"></div>
                    </div>
                </div>
                

                
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card border-0 shadow-sm pb-2 flex-fill border-0 shadow-sm">
                        <div className="d-flex align-items-center justify-content-between gap-1 card-body pb-0 mb-1">
                            <div className="d-flex align-items-center overflow-hidden">
                                <span className="avatar bg-purple rounded-circle flex-shrink-0"><i className="ti ti-stethoscope fs-20"></i></span>
                                <div className="ms-2 overflow-hidden">
                                    <p className="mb-1 text-truncate">Doctors</p>
                                    <h5 className="mb-0">565</h5>
                                </div>
                            </div>
                            <div className="text-end">
                                <span className="badge badge-soft-success">+18%</span>
                            </div>
                        </div>
                        <div id="chart-3" className="chart-set"></div>
                    </div>
                </div>
                

                
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card border-0 shadow-sm pb-2 flex-fill border-0 shadow-sm">
                        <div className="d-flex align-items-center justify-content-between gap-1 card-body pb-0 mb-1">
                            <div className="d-flex align-items-center overflow-hidden">
                                <span className="avatar bg-pink rounded-circle flex-shrink-0"><i className="ti ti-moneybag fs-20"></i></span>
                                <div className="ms-2 overflow-hidden">
                                    <p className="mb-1 text-truncate">Transactions</p>
                                    <h5 className="mb-0">$5,523.56</h5>
                                </div>
                            </div>
                            <div className="text-end">
                                <span className="badge badge-soft-success">+12%</span>
                            </div>
                        </div>
                        <div id="chart-4" className="chart-set"></div>
                    </div>
                </div>
                
                </div>
            

            <div className="row">
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                <div>
                                    <p className="mb-1">Total Invoice</p>
                                    <h6 className="mb-0">$2,45,445</h6>
                                </div>
                                <span className="avatar rounded-circle badge-soft-primary"><i className="ti ti-components fs-24"></i></span>
                            </div>
                            <div>
                                <p className="d-flex align-items-center fs-13 mb-0"><span className="text-success me-1">+31%</span> From Last Month</p>
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                <div>
                                    <p className="mb-1">Unpaid Invoice</p>
                                    <h6 className="mb-0">$50,000</h6>
                                </div>
                                <span className="avatar rounded-circle badge-soft-pink"><i className="ti ti-clipboard-data fs-24"></i></span>
                            </div>
                            <div>
                                <p className="d-flex align-items-center fs-13 mb-0"><span className="text-danger me-1">-15%</span> From Last Month</p>
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                <div>
                                    <p className="mb-1">Pending Invoice</p>
                                    <h6 className="mb-0">$45,000</h6>
                                </div>
                                <span className="avatar rounded-circle badge-soft-indigo"><i className="ti ti-cards fs-24"></i></span>
                            </div>
                            <div>
                                <p className="d-flex align-items-center fs-13 mb-0"><span className="text-success me-1">+48%</span> From Last Month</p>
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                <div>
                                    <p className="mb-1">Overdue Invoice</p>
                                    <h6 className="mb-0">$2,50,550</h6>
                                </div>
                                <span className="avatar rounded-circle badge-soft-orange"><i className="ti ti-calendar-event fs-24"></i></span>
                            </div>
                            <div>
                                <p className="d-flex align-items-center fs-13 mb-0"><span className="text-success me-1">+39%</span> From Last Month</p>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div>
            

            
            <div className="row">
                
                <div className="col-xl-5 d-flex">
                    <div className="card border-0 shadow-sm border-0 shadow-sm flex-fill w-100">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="mb-0">Top Departments</h5>
                            <Link to="/medical-results" className="btn btn-sm btn-white flex-shrink-0">View All</Link>
                        </div>
                        <div className="card-body">
                            <div className="row row-gap-3 align-items-center mb-4">
                                <div className="col-sm-6">
                                    <div className="position-relative">
                                        <canvas id="attendance" height="180"></canvas>
                                        <div className="position-absolute text-center top-50 start-50 translate-middle">
                                            <p className="fs-13 mb-1">Appointments</p>
                                            <h3>3656</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-sm-start text-center">
                                        <p className="text-dark mb-2"><i className="ti ti-circle-filled text-info fs-13 me-1"></i>Cardiology</p>
                                        <p className="text-dark mb-2"><i className="ti ti-circle-filled text-cyan fs-13 me-1"></i>Neurology</p>
                                        <p className="text-dark mb-2"><i className="ti ti-circle-filled text-purple fs-13 me-1"></i>Dermatology</p>
                                        <p className="text-dark mb-2"><i className="ti ti-circle-filled text-orange fs-13 me-1"></i>Orthopedics</p>
                                        <p className="text-dark mb-2"><i className="ti ti-circle-filled text-warning fs-13 me-1"></i>Urology</p>
                                        <p className="text-dark mb-0"><i className="ti ti-circle-filled text-indigo fs-13 me-1"></i>Radiology</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded p-1">
                                <div className="row g-0">
                                    <div className="col-6 p-2 border-end text-center">
                                        <h5 className="mb-1">$2512.32</h5>
                                        <p className="mb-0 text-body">Revenue Generated</p>
                                    </div>
                                    <div className="col-6 p-2 text-center">
                                        <h5 className="mb-1">3125+</h5>
                                        <p className="mb-0 text-body">Appointments last month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xl-7 d-flex">
                    
                    <div className="card border-0 shadow-sm border-0 shadow-sm flex-fill w-100">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                            <h5 className="mb-0">Patient Record</h5>
                            <Link to="/medical-results" className="btn btn-sm btn-white flex-shrink-0">View All</Link>
                        </div>
                        <div className="card-body">
                            
                            <div className="table-responsive table-nowrap">
                                <table className="table border mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Patient Name</th>
                                            <th>Diagnosis</th>
                                            <th>Department</th>
                                            <th>Last Visit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">James Carter</Link></h6>
                                            </td>
                                            <td>Male</td>
                                            <td><span className="badge badge-soft-info">Cardiology</span></td>
                                            <td>17 Jun 2025</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">Emily Davis</Link></h6>
                                            </td>
                                            <td>Female</td>
                                            <td><span className="badge badge-soft-success">Urology</span></td>
                                            <td>10 Jun 2025</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">Michael John</Link></h6>
                                            </td>
                                            <td>Male</td>
                                            <td><span className="badge badge-soft-info">Radiology</span></td>
                                            <td>22 May 2025</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">Olivia Miller</Link></h6>
                                            </td>
                                            <td>Female</td>
                                            <td><span className="badge badge-soft-purple">ENT Surgery</span></td>
                                            <td>15 May 2025</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="fs-14 mb-0 fw-medium"><Link to="/patient-details">David Smith</Link></h6>
                                            </td>
                                            <td>Male</td>
                                            <td><span className="badge badge-soft-teal">Dermatology</span></td>
                                            <td>30 Apr 2025</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            

            
            <div className="row">
                
                <div className="col-xl-4 d-flex">
                    <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm w-100 border-0 shadow-sm">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                            <h5 className="mb-0">Patient Reports</h5>
                            <Link to="/lab-results" className="btn btn-sm btn-white flex-shrink-0">View All</Link>
                        </div>
                        <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <a href="#/" className="avatar me-2 badge-soft-primary rounded-circle">
                                        <i className="ti ti-droplet fs-20"></i>
                                    </a>
                                    <div>
                                        <h6 className="fs-14 fw-semibold text-truncate mb-1"><Link to="/patient-details">David Marshall</Link></h6>
                                        <p className="mb-0 fs-13">Hemoglobin</p>
                                    </div>
                                </div>
                                <a href="#/" className="btn btn-icon btn-light me-1"><i className="ti ti-download"></i></a>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <a href="#/" className="avatar me-2 badge-soft-success rounded-circle">
                                        <i className="ti ti-mood-neutral fs-20"></i>
                                    </a>
                                    <div>
                                        <h6 className="fs-14 fw-semibold text-truncate mb-1"><Link to="/patient-details">Thomas McLean</Link></h6>
                                        <p className="mb-0 fs-13">X Ray</p>
                                    </div>
                                </div>
                                <a href="#/" className="btn btn-icon btn-light me-1"><i className="ti ti-download"></i></a>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <a href="#/" className="avatar me-2 badge-soft-danger rounded-circle">
                                        <i className="ti ti-rainbow fs-20"></i>
                                    </a>
                                    <div>
                                        <h6 className="fs-14 fw-semibold text-truncate mb-1"><Link to="/patient-details">Greta Kinney</Link></h6>
                                        <p className="mb-0 fs-13">MRI Scan</p>
                                    </div>
                                </div>
                                <a href="#/" className="btn btn-icon btn-light me-1"><i className="ti ti-download"></i></a>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <a href="#/" className="avatar me-2 badge-soft-purple rounded-circle">
                                        <i className="ti ti-rosette fs-20"></i>
                                    </a>
                                    <div>
                                        <h6 className="fs-14 fw-semibold text-truncate mb-1"><Link to="/patient-details">Larry Wilburn</Link></h6>
                                        <p className="mb-0 fs-13">Blood Test</p>
                                    </div>
                                </div>
                                <a href="#/" className="btn btn-icon btn-light me-1"><i className="ti ti-download"></i></a>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <a href="#/" className="avatar me-2 badge-soft-teal rounded-circle">
                                        <i className="ti ti-radio fs-20"></i>
                                    </a>
                                    <div>
                                        <h6 className="fs-14 fw-semibold text-truncate mb-1"><Link to="/patient-details">Reyan Verol</Link></h6>
                                        <p className="mb-0 fs-13">CT Scan</p>
                                    </div>
                                </div>
                                <a href="#/" className="btn btn-icon btn-light me-1"><i className="ti ti-download"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xl-4 col-md-6 d-flex">
                    <div className="card border-0 shadow-sm border-0 shadow-sm flex-fill w-100">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                            <h5 className="mb-0">Patient Visits</h5>
                            <Link to="/visits" className="btn btn-sm btn-white flex-shrink-0">View All</Link>
                        </div>
                        <div className="card-body">
                            <div id="patients-visits" className="mb-3"></div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <span className="avatar bg-primary rounded-circle flex-shrink-0"><i className="ti ti-gender-male fs-20"></i></span>
                                    <div className="ms-2">
                                        <h6 className="mb-1 fs-14 fw-semibold">Male</h6>
                                        <p className="mb-1 fs-13 text-truncate"><span className="text-success">-15%</span> Since Last Week</p>
                                    </div>
                                </div>
                                <h6 className="mb-0">69%</h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-0">
                                <div className="d-flex align-items-center">
                                    <span className="avatar bg-purple rounded-circle flex-shrink-0"><i className="ti ti-gender-female fs-20"></i></span>
                                    <div className="ms-2">
                                        <h6 className="mb-1 fs-14 fw-semibold">Female</h6>
                                        <p className="mb-1 fs-13 text-truncate"><span className="text-success">-15%</span> Since Last Week</p>
                                    </div>
                                </div>
                                <h6 className="mb-0">56%</h6>
                            </div>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xl-4 col-md-6 d-flex">
                    <div className="card border-0 shadow-sm border-0 shadow-sm flex-fill w-100">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                            <h5 className="mb-0">Doctors</h5>
                            <Link to="/doctors" className="btn btn-sm btn-white flex-shrink-0">View All</Link>
                        </div>
                        <div className="card-body">
                            <div className="overflow-auto">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center">
                                        <Link to="/doctor-details" className="avatar flex-shrink-0">
                                            <img src="/assets/img/doctors/doctor-01.jpg" className="rounded" alt="doctor" />
                                        </Link>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-semibold fs-14 text-truncate mb-1"><Link to="/doctor-details">Dr. William Harrison</Link></h6>
                                                <p className="fs-13 mb-0">Cardiology</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 ms-2">
                                        <span className="badge badge-soft-success">Available</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center">
                                        <Link to="/doctor-details" className="avatar flex-shrink-0">
                                            <img src="/assets/img/doctors/doctor-11.jpg" className="rounded" alt="doctor" />
                                        </Link>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-semibold fs-14 text-truncate mb-1"><Link to="/doctor-details">Dr. Victoria Adams</Link></h6>
                                                <p className="fs-13 mb-0">Urology</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 ms-2">
                                        <span className="badge badge-soft-danger">Unavailable</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center">
                                        <Link to="/doctor-details" className="avatar flex-shrink-0">
                                            <img src="/assets/img/doctors/doctor-06.jpg" className="rounded" alt="doctor" />
                                        </Link>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-semibold fs-14 text-truncate mb-1"><Link to="/doctor-details">Dr. Jonathan Bennett</Link></h6>
                                                <p className="fs-13 mb-0">Radiology</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 ms-2">
                                        <span className="badge badge-soft-success">Available</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center">
                                        <Link to="/doctor-details" className="avatar flex-shrink-0">
                                            <img src="/assets/img/doctors/doctor-07.jpg" className="rounded" alt="doctor" />
                                        </Link>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-semibold fs-14 text-truncate mb-1"><Link to="/doctor-details">Dr. Natalie Brooks</Link></h6>
                                                <p className="fs-13 mb-0">ENT Surgery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 ms-2">
                                        <span className="badge badge-soft-success">Available</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-0">
                                    <div className="d-flex align-items-center">
                                        <Link to="/doctor-details" className="avatar flex-shrink-0">
                                            <img src="/assets/img/doctors/doctor-12.jpg" className="rounded" alt="doctor" />
                                        </Link>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-semibold fs-14 text-truncate mb-1"><Link to="/doctor-details">Dr. Samuel Reed</Link></h6>
                                                <p className="fs-13 mb-0">Dermatology</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 ms-2">
                                        <span className="badge badge-soft-success">Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            

            
            <div className="row row-gap-3">
                
                <div className="col-xl-6 d-flex">
                    <div className="card border-0 shadow-sm flex-fill border-0 shadow-sm w-100 border-0 shadow-sm mb-0">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                            <h5 className="fw-bold mb-0">Appointment Request</h5>
                            <Link to="/appointments" className="btn btn-sm btn-white flex-shrink-0">All Appointments</Link>
                        </div>
                        <div className="card-body p-1 py-2">
                            
                            <div className="table-responsive table-nowrap">
                                <table className="table table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Link to="/patient-details" className="avatar me-2">
                                                        <img src="/assets/img/avatars/avatar-23.jpg" alt="patient" className="rounded" />
                                                    </Link>
                                                    <div>
                                                        <h6 className="fs-14 mb-1 fw-semibold"><Link to="/patient-details">Dominic Foster</Link></h6>
                                                        <div className="d-flex align-items-center gap-1">
                                                            <p className="mb-0 fs-13 d-inline-flex align-items-center text-body"><i className="ti ti-calendar me-1"></i>12 Aug 2025</p>
                                                            <span><i className="ti ti-minus-vertical text-light fs-14"></i></span>
                                                            <p className="mb-0 fs-13 d-inline-flex align-items-center text-body"><i className="ti ti-clock-hour-7 me-1"></i>11:35 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge badge-soft-success">Urology</span></td>
                                                <td className="text-end border-0">
                                                <div className="d-flex align-items-center justify-content-end gap-2">
                                                    <a href="#/" className="btn btn-icon btn-light"><i className="ti ti-xbox-x"></i></a>
                                                    <a href="#/" className="btn btn-icon btn-light"><i className="ti ti-check"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Link to="/patient-details" className="avatar me-2">
                                                        <img src="/assets/img/avatars/avatar-08.jpg" alt="patient" className="rounded" />
                                                    </Link>
                                                    <div>
                                                        <h6 className="fs-14 mb-1 fw-semibold"><Link to="/patient-details">Charlotte Bennett</Link></h6>
                                                        <div className="d-flex align-items-center gap-1">
                                                            <p className="mb-0 fs-13 d-inline-flex align-items-center text-body"><i className="ti ti-calendar me-1"></i>06 Aug 2025</p>
                                                            <span><i className="ti ti-minus-vertical text-light fs-14"></i></span>
                                                            <p className="mb-0 fs-13 d-inline-flex align-items-center text-body"><i className="ti ti-clock-hour-7 me-1"></i>09:58 AM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge badge-soft-info">Cardiology</span></td>
                                                <td className="text-end border-0">
                                                <div className="d-flex align-items-center justify-content-end gap-2">
                                                    <a href="#/" className="btn btn-icon btn-light"><i className="ti ti-xbox-x"></i></a>
                                                    <a href="#/" className="btn btn-icon btn-light"><i className="ti ti-check"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Link to="/patient-details" className="avatar me-2">
                                                        <img src="/assets/img/avatars/avatar-21.jpg" alt="patient" className="rounded" />
                                                    </Link>
                                                    <div>
                                                        <h6 className="fs-14 mb-1 fw-semibold"><Link to="/patient-details">Ethan Sullivan</Link></h6>
                                                        <div className="d-flex align-items-center gap-1">
                                                            <p className="mb-0 fs-13 d-inline-flex align-items-center text-body"><i className="ti ti-calendar me-1"></i>01 Aug 2025</p>
                                                            <span><i className="ti ti-minus-vertical text-light fs-14"></i></span>
                                                            <p className="mb-0 fs-13 d-inline-flex align-items-center text-body"><i className="ti ti-clock-hour-7 me-1"></i>12:10 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge badge-soft-teal">Dermatology</span></td>
                                                <td className="text-end border-0">
                                                <div className="d-flex align-items-center justify-content-end gap-2">
                                                    <a href="#/" className="btn btn-icon btn-light"><i className="ti ti-xbox-x"></i></a>
                                                    <a href="#/" className="btn btn-icon btn-light"><i className="ti ti-check"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Link to="/patient-details" className="avatar me-2">
                                                        <img src="/assets/img/avatars/avatar-55.jpg" alt="patient" className="rounded" />
                                                    </Link>
                                                    <div>
                                                        <h6 className="fs-14 mb-1 fw-semibold"><Link to="/patient-details">Brianna Thompson</Link></h6>
                                                        <div className="d-flex align-items-center gap-1">
                                                            <p className="mb-0 fs-13 d-inline-flex align-items-center text-body"><i className="ti ti-calendar me-1"></i>26 Jul 2025</p>
                                                            <span><i className="ti ti-minus-vertical text-light fs-14"></i></span>
                                                            <p className="mb-0 fs-13 d-inline-flex align-items-center text-body"><i className="ti ti-clock-hour-7 me-1"></i>08:20 AM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge badge-soft-purple">ENT Surgery</span></td>
                                                <td className="text-end border-0">
                                                <div className="d-flex align-items-center justify-content-end gap-2">
                                                    <a href="#/" className="btn btn-icon btn-light"><i className="ti ti-xbox-x"></i></a>
                                                    <a href="#/" className="btn btn-icon btn-light"><i className="ti ti-check"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Link to="/patient-details" className="avatar me-2">
                                                        <img src="/assets/img/avatars/avatar-28.jpg" alt="patient" className="rounded" />
                                                    </Link>
                                                    <div>
                                                        <h6 className="fs-14 mb-1 fw-semibold"><Link to="/patient-details">Braun Tucker</Link></h6>
                                                        <div className="d-flex align-items-center gap-1">
                                                            <p className="mb-0 fs-13 d-inline-flex align-items-center text-body"><i className="ti ti-calendar me-1"></i>23 Jul 2025</p>
                                                            <span><i className="ti ti-minus-vertical text-light fs-14"></i></span>
                                                            <p className="mb-0 fs-13 d-inline-flex align-items-center text-body"><i className="ti ti-clock-hour-7 me-1"></i>10:30 AM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge badge-soft-info">Radiology</span></td>
                                            <td className="text-end border-0">
                                                <div className="d-flex align-items-center justify-content-end gap-2">
                                                    <a href="#/" className="btn btn-icon btn-light"><i className="ti ti-xbox-x"></i></a>
                                                    <a href="#/" className="btn btn-icon btn-light"><i className="ti ti-check"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
                

                
                <div className="col-xl-6 d-flex">
                    <div className="card border-0 shadow-sm border-0 shadow-sm flex-fill w-100 mb-0">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="fw-bold mb-0">Patients Statistics</h5>
                            <Link to="/all-patients-list" className="btn btn-sm btn-white">View All</Link>
                        </div>
                        <div className="card-body pb-0">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h6 className="fs-14 fw-semibold mb-0">Total No of Patients : 480</h6>
                                <div className="d-flex align-items-center gap-3">
                                    <p className="mb-0 text-dark"><i className="ti ti-point-filled me-1 text-primary"></i>New Patients</p>
                                    <p className="mb-0 text-dark"><i className="ti ti-point-filled me-1 text-soft-primary"></i>Old Patients</p>
                                </div>
                            </div>
                            <div id="chart-5" className="chart-set"></div>
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

export default Widgets;
