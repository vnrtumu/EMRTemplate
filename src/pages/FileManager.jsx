import { Link } from 'react-router-dom';
const FileManager = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">File Manager</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none">Applications</a></li>
                            <li className="breadcrumb-item active">File Manager</li>
                        </ol>
                    </div>
                </div>
                <div className="input-group w-auto input-group-flat">
                    <span className="input-group-text"><i className="ti ti-search"></i></span>
                    <input type="text" className="form-control" placeholder="Search Keyword" />
                </div>
            </div>
            

            <div className="card border-0 shadow-sm mb-0">
                <div className="card-body p-0">
                    
                    <div className="row g-0">

                        
                        <div className="col-xl-3 border-end">
                            <div className="p-4">
                                <div>
                                    <div className="border-bottom pb-3 mb-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center overflow-hidden">
                                                <span className="avatar flex-shrink-0">
                                                    <img src="/assets/img/avatars/avatar-01.jpg" alt="user" className="rounded-circle" />
                                                </span>
                                                <div className="overflow-hidden ms-2">
                                                    <h5 className="text-truncate mb-1">James Hong</h5>
                                                    <p className="fs-13 text-truncate mb-0">jameshong@example.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-primary btn-lg w-100 mb-3"><i className="ti ti-square-rounded-plus me-1"></i>Create New </a>
                                    <div className="files-list nav d-block mb-3">
                                        <a href="#/" className="d-flex align-items-center fw-medium bg-light rounded text-primary p-2 active"><i className="ti ti-folder-up me-2"></i>All Folder / Files</a>
                                        <a href="#/" className="d-flex align-items-center fw-medium p-2"><i className="ti ti-star me-2"></i>Drive</a>
                                        <a href="#/" className="d-flex align-items-center fw-medium p-2"><i className="ti ti-octahedron me-2"></i>Dropbox</a>
                                        <a href="#/" className="d-flex align-items-center fw-medium p-2"><i className="ti ti-share-2 me-2"></i>Shared with Me</a>
                                        <a href="#/" className="d-flex align-items-center fw-medium p-2"><i className="ti ti-file me-2"></i>Document</a>
                                        <a href="#/" className="d-flex align-items-center fw-medium p-2"><i className="ti ti-clock-hour-11 me-2"></i>Recent File</a>
                                        <a href="#/" className="d-flex align-items-center fw-medium p-2"><i className="ti ti-star me-2"></i>Important</a>
                                        <a href="#/" className="d-flex align-items-center fw-medium p-2"><i className="ti ti-music me-2"></i>Media</a>
                                    </div>
                                    <div className="bg-light p-3 text-center rounded">
                                        <div className="mb-3"><img src="/assets/img/icons/file-manager-bg.svg" alt="file-manager-bg" /></div>
                                        <h6 className="mb-2">Upgrade To PRO </h6>
                                        <p className="mb-0">Unlock Pro for faster transfers, stronger security, and unlimited storage.</p>
                                    </div>
                                </div>
                            </div>

                        </div> 
                        

                        <div className="col-xl-9">

                            <div className="p-4">
                                <div className="border-bottom mb-3">
                                    <h6 className="mb-3">Quick Access</h6>
                                    
                                    <div className="row">

                                        <div className="col-md-4 col-sm-6 d-flex">
                                            <div className="card border-0 shadow-sm flex-fill">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <div className="d-flex align-items-center">
                                                            <img src="/assets/img/icons/dropbox.svg" alt="user" />
                                                            <h6 className="ms-2 fs-14 mb-0">Dropbox</h6>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a href="#/" className="fs-16" data-bs-toggle="dropdown">
                                                                <i className="ti ti-dots-vertical"></i>
                                                            </a>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Preview</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Duplicate</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Move</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Invite</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Share Link</a>
                                                                </li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">View Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Download</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="progress progress-sm flex-grow-1 mb-2">
                                                        <div className="progress-bar bg-danger rounded" role="progressbar" style="width: 20%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="mb-0">1454 Files</p>
                                                        <p className="text-dark mb-0">28GB / 300GB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 

                                        <div className="col-md-4 col-sm-6 d-flex">
                                            <div className="card border-0 shadow-sm flex-fill">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <div className="d-flex align-items-center">
                                                            <img src="/assets/img/icons/drive.svg" alt="user" />
                                                            <h6 className="ms-2 fs-14 mb-0">Google Drive</h6>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a href="#/" className="fs-16" data-bs-toggle="dropdown">
                                                                <i className="ti ti-dots-vertical"></i>
                                                            </a>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Preview</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Duplicate</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Move</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Invite</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Share Link</a>
                                                                </li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">View Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Download</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="progress progress-sm flex-grow-1 mb-2">
                                                        <div className="progress-bar bg-pink rounded" role="progressbar" style="width: 80%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="mb-0">200 Files</p>
                                                        <p className="text-dark mb-0">24GB / 65GB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 

                                        <div className="col-md-4 col-sm-6 d-flex">
                                            <div className="card border-0 shadow-sm flex-fill">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <div className="d-flex align-items-center">
                                                            <img src="/assets/img/icons/cloud.svg" alt="user" />
                                                            <h6 className="ms-2 fs-14 mb-0">Cloud Storage</h6>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a href="#/" className="fs-16" data-bs-toggle="dropdown">
                                                                <i className="ti ti-dots-vertical"></i>
                                                            </a>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Preview</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Duplicate</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Move</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Invite</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Share Link</a>
                                                                </li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">View Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Download</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="progress progress-sm flex-grow-1 mb-2">
                                                        <div className="progress-bar bg-success rounded" role="progressbar" style="width: 50%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="mb-0">144 Files</p>
                                                        <p className="text-dark mb-0">54GB / 60GB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 

                                    </div>
                                    
                                </div>

                                
                                <div className="border-bottom mb-3">
                                <h6 className="mb-3">Recent Files</h6>
                                    
                                    <div className="row justify-content-center">

                                        <div className="col-md-3 col-sm-6 d-flex">
                                            <div className="card border-0 shadow-sm position-relative flex-fill">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <img src="/assets/img/icons/file.svg" alt="user" />
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="dropdown">
                                                                <a href="#/" className="fs-16" data-bs-toggle="dropdown">
                                                                    <i className="ti ti-dots-vertical"></i>
                                                                </a>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-eye me-2"></i>View Details</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-download me-2"></i>Download</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-trash-x me-2"></i>Delete</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="mb-2 fs-14"><a href="#/">Final Change.doc</a></h6>
                                                    <p className="mb-0 fs-13 d-flex align-items-center gap-2 file-line">26 Jul 2025<span className="fs-10">|</span>8MB</p>
                                                </div>

                                            </div>
                                        </div> 

                                        <div className="col-md-3 col-sm-6 d-flex">
                                            <div className="card border-0 shadow-sm position-relative flex-fill">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <img src="/assets/img/icons/pdf-icon.svg" alt="user" />
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="dropdown">
                                                                <a href="#/" className="fs-16" data-bs-toggle="dropdown">
                                                                    <i className="ti ti-dots-vertical"></i>
                                                                </a>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-eye me-2"></i>View Details</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-download me-2"></i>Download</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-trash-x me-2"></i>Delete</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="mb-2 fs-14"><a href="#/">Marklist.pdf</a></h6>
                                                    <p className="mb-0 fs-13 d-flex align-items-center gap-2 file-line">25 Jul 2025<span className="fs-10">|</span>6MB</p>
                                                </div>

                                            </div>
                                        </div> 

                                        <div className="col-md-3 col-sm-6 d-flex">
                                            <div className="card border-0 shadow-sm position-relative flex-fill">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <img src="/assets/img/icons/image.svg" alt="user" />
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="dropdown">
                                                                <a href="#/" className="fs-16" data-bs-toggle="dropdown">
                                                                    <i className="ti ti-dots-vertical"></i>
                                                                </a>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-eye me-2"></i>View Details</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-download me-2"></i>Download</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-trash-x me-2"></i>Delete</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="mb-2 fs-14"><a href="#/">Nature.png</a></h6>
                                                    <p className="mb-0 fs-13 d-flex align-items-center gap-2 file-line">24 Jul 2025<span className="fs-10">|</span>8MB</p>
                                                </div>

                                            </div>
                                        </div> 

                                        <div className="col-md-3 col-sm-6 d-flex">
                                            <div className="card border-0 shadow-sm position-relative flex-fill">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <img src="/assets/img/icons/folder-icon.svg" alt="user" />
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="dropdown">
                                                                <a href="#/" className="fs-16" data-bs-toggle="dropdown">
                                                                    <i className="ti ti-dots-vertical"></i>
                                                                </a>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-eye me-2"></i>View Details</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-download me-2"></i>Download</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-trash-x me-2"></i>Delete</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="mb-2 fs-14"><a href="#/">Group Photos</a></h6>
                                                    <p className="mb-0 fs-13 d-flex align-items-center gap-2 file-line">23 Jul 2025<span className="fs-10">|</span>10MB</p>
                                                </div>

                                            </div>
                                        </div> 

                                    </div>
                                    

                                </div>
                                

                                
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                    <h4 className="mb-0">Files</h4>
                                    <a href="#/" className="btn btn-outline-light">View All</a>
                                </div>

                                <div className="table-responsive table-nowrap">

                                    
                                    <table className="table mb-0 border">
                                        <thead className="table-light bg-light">
                                            <tr>
                                                <th className="fs-14 fw-medium">Name</th>
                                                <th className="fs-14 fw-medium">Size</th>
                                                <th className="fs-14 fw-medium">Type</th>
                                                <th className="fs-14 fw-medium">Modified</th>
                                                <th className="fs-14 fw-medium">Share</th>
                                                <th className="fs-14 fw-medium"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-sm bg-light" data-bs-toggle="offcanvas" data-bs-target="#preview">
                                                            <img src="/assets/img/icons/file-01.svg" className="img-fluid w-auto h-auto" alt="user" /></a>
                                                        <div className="ms-2">
                                                            <p className="text-dark fw-medium  mb-0"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#preview">Secret</a></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>7.6 MB</td>
                                                <td>Doc</td>
                                                <td>
                                                    <p className="text-dark mb-0">Mar 15, 2025</p>
                                                    <span>05:00:14 PM</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-03.jpg" alt="user" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-04.jpg" alt="user" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-12.jpg" alt="user" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="star me-2"><i className="ti ti-star fs-16"></i></span>
                                                        <div className="dropdown">
                                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                                <i className="ti ti-dots-vertical"></i>
                                                            </a>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-eye me-2"></i>View Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-download me-2"></i>Download</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-trash-x me-2"></i>Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-sm bg-light" data-bs-toggle="offcanvas" data-bs-target="#preview">
                                                            <img src="/assets/img/icons/file-02.svg" className="img-fluid w-auto h-auto" alt="user" /></a>
                                                        <div className="ms-2">
                                                            <p className="text-dark fw-medium  mb-0"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#preview">Sophie Headrick</a></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>7.4 MB</td>
                                                <td>PDF</td>
                                                <td>
                                                    <p className="text-dark mb-0">Jan 8, 2025</p>
                                                    <span>08:20:13 PM</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-15.jpg" alt="user" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-16.jpg" alt="user" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="star me-2"><i className="ti ti-star fs-16"></i></span>
                                                        <div className="dropdown">
                                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                                <i className="ti ti-dots-vertical"></i>
                                                            </a>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-eye me-2"></i>View Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-download me-2"></i>Download</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-trash-x me-2"></i>Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-sm bg-light" data-bs-toggle="offcanvas" data-bs-target="#preview">
                                                            <img src="/assets/img/icons/file-03.svg" className="img-fluid w-auto h-auto" alt="user" /></a>
                                                        <div className="ms-2">
                                                            <p className="text-dark fw-medium  mb-0"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#preview">Gallery</a></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>6.1 MB</td>
                                                <td>Image</td>
                                                <td>
                                                    <p className="text-dark mb-0">Aug 6, 2025</p>
                                                    <span>04:10:12 PM</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-02.jpg" alt="user" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-03.jpg" alt="user" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-05.jpg" alt="user" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-06.jpg" alt="user" />
                                                        </span>
                                                        <a className="avatar bg-primary avatar-rounded text-fixed-white" href="#/">
                                                            +1
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="star me-2"><i className="ti ti-star fs-16"></i></span>
                                                        <div className="dropdown">
                                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                                <i className="ti ti-dots-vertical"></i>
                                                            </a>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-eye me-2"></i>View Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-download me-2"></i>Download</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-trash-x me-2"></i>Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-sm bg-light" data-bs-toggle="offcanvas" data-bs-target="#preview">
                                                            <img src="/assets/img/icons/file-04.svg" className="img-fluid w-auto h-auto" alt="user" /></a>
                                                        <div className="ms-2">
                                                            <p className="text-dark fw-medium  mb-0"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#preview">Doris Crowley</a></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>5.2 MB</td>
                                                <td>Folder</td>
                                                <td>
                                                    <p className="text-dark mb-0">Jan 6, 2025</p>
                                                    <span>03:40:14 PM</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-06.jpg" alt="user" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-10.jpg" alt="user" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-15.jpg" alt="user" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="star me-2"><i className="ti ti-star fs-16"></i></span>
                                                        <div className="dropdown">
                                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                                <i className="ti ti-dots-vertical"></i>
                                                            </a>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-eye me-2"></i>View Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-download me-2"></i>Download</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-trash-x me-2"></i>Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-sm bg-light" data-bs-toggle="offcanvas" data-bs-target="#preview">
                                                            <img src="/assets/img/icons/file-05.svg" className="img-fluid w-auto h-auto" alt="user" /></a>
                                                        <div className="ms-2">
                                                            <p className="text-dark fw-medium  mb-0"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#preview">Cheat_codez</a></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>8 MB</td>
                                                <td>Xml</td>
                                                <td>
                                                    <p className="text-dark mb-0">Oct 12, 2025</p>
                                                    <span>05:00:14 PM</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-04.jpg" alt="user" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-05.jpg" alt="user" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-12.jpg" alt="user" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white" src="/assets/img/avatars/avatar-11.jpg" alt="user" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="star me-2"><i className="ti ti-star fs-16"></i></span>
                                                        <div className="dropdown">
                                                            <a href="#/" className="btn btn-icon btn-outline-light" data-bs-toggle="dropdown">
                                                                <i className="ti ti-dots-vertical"></i>
                                                            </a>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-eye me-2"></i>View Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-download me-2"></i>Download</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#/" className="dropdown-item rounded-1"><i className="ti ti-trash-x me-2"></i>Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default FileManager;
