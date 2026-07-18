import { Link } from 'react-router-dom';
import './Applications.css';

const FileManager = () => {
  const recentFiles = [
    { id: 1, name: 'Final Change.doc', date: '26 Jul 2025', size: '8MB', type: 'doc', icon: 'file' },
    { id: 2, name: 'Marklist.pdf', date: '25 Jul 2025', size: '6MB', type: 'pdf', icon: 'pdf-icon' },
    { id: 3, name: 'Nature.png', date: '24 Jul 2025', size: '8MB', type: 'image', icon: 'image' },
    { id: 4, name: 'Group Photos', date: '23 Jul 2025', size: '10MB', type: 'folder', icon: 'folder-icon' },
  ];

  const filesList = [
    { id: 1, name: 'Secret', size: '7.6 MB', type: 'Doc', date: 'Mar 15, 2025', time: '05:00:14 PM', icon: 'file-01', avatars: ['avatar-21.jpg', 'avatar-22.jpg', 'avatar-23.jpg'] },
    { id: 2, name: 'Sophie Headrick', size: '7.4 MB', type: 'PDF', date: 'Jan 8, 2025', time: '08:20:13 PM', icon: 'file-02', avatars: ['avatar-24.jpg', 'avatar-25.jpg'] },
    { id: 3, name: 'Gallery', size: '6.1 MB', type: 'Image', date: 'Aug 6, 2025', time: '04:10:12 PM', icon: 'file-03', avatars: ['avatar-26.jpg', 'avatar-27.jpg', 'avatar-28.jpg', 'avatar-29.jpg', '+1'] },
    { id: 4, name: 'Design Assets', size: '12.4 MB', type: 'Folder', date: 'Sep 12, 2025', time: '11:30:00 AM', icon: 'folder-icon', avatars: ['avatar-30.jpg'] },
  ];

  return (
    <>
      <div className="content">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div className="breadcrumb-arrow">
            <h4 className="mb-1">File Manager</h4>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item"><span className="text-decoration-none text-muted">Applications</span></li>
                <li className="breadcrumb-item active">File Manager</li>
              </ol>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div className="input-group input-group-sm rounded-pill border bg-white px-3 py-1 shadow-sm" style={{ width: '250px' }}>
              <i className="ti ti-search text-muted mt-1 me-2"></i>
              <input type="text" className="form-control border-0 bg-transparent shadow-none p-0" placeholder="Search files, folders..." />
            </div>
            <button className="btn btn-primary premium-btn shadow-sm px-4 rounded-pill d-flex align-items-center">
              <i className="ti ti-upload me-2"></i> Upload
            </button>
          </div>
        </div>

        <div className="premium-card mb-0 shadow-lg">
          <div className="card-body p-0">
            <div className="row g-0">
              {/* Sidebar */}
              <div className="col-xl-3 border-end bg-light bg-opacity-50">
                <div className="p-4 d-flex flex-column h-100">
                  <div className="border-bottom pb-4 mb-4">
                    <div className="d-flex align-items-center bg-white p-3 rounded-4 shadow-sm">
                      <span className="avatar avatar-lg flex-shrink-0 border border-2 border-primary rounded-circle p-1">
                        <img src="/assets/img/avatars/avatar-21.jpg" alt="user" className="rounded-circle w-100 h-100 object-fit-cover" />
                      </span>
                      <div className="ms-3 overflow-hidden">
                        <h5 className="text-truncate mb-1 fw-bold">Dr. James Hong</h5>
                        <p className="fs-13 text-muted mb-0 text-truncate">jameshong@example.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn btn-outline-primary w-100 mb-4 py-2 border-2 d-flex align-items-center justify-content-center fw-bold rounded-3 transition-all hover-bg-primary hover-text-white">
                    <i className="ti ti-folder-plus me-2 fs-5"></i> Create New Folder
                  </button>

                  <div className="files-list nav flex-column gap-2 mb-auto">
                    <a href="#/" className="d-flex align-items-center fw-medium bg-white shadow-sm rounded-3 p-3 active text-primary border border-primary border-opacity-25">
                      <i className="ti ti-folder-up me-3 fs-5"></i>All Folders / Files
                    </a>
                    <a href="#/" className="d-flex align-items-center fw-medium p-3 rounded-3 text-secondary hover-bg-white transition-all"><i className="ti ti-star me-3 fs-5 text-warning"></i>Starred</a>
                    <a href="#/" className="d-flex align-items-center fw-medium p-3 rounded-3 text-secondary hover-bg-white transition-all"><i className="ti ti-share-2 me-3 fs-5 text-info"></i>Shared with Me</a>
                    <a href="#/" className="d-flex align-items-center fw-medium p-3 rounded-3 text-secondary hover-bg-white transition-all"><i className="ti ti-clock-hour-11 me-3 fs-5 text-success"></i>Recent Files</a>
                    <a href="#/" className="d-flex align-items-center fw-medium p-3 rounded-3 text-secondary hover-bg-white transition-all"><i className="ti ti-trash me-3 fs-5 text-danger"></i>Trash</a>
                  </div>

                  <div className="mt-4 bg-primary bg-opacity-10 p-4 text-center rounded-4 border border-primary border-opacity-25">
                    <div className="mb-3">
                      <i className="ti ti-cloud-lock fs-1 text-primary"></i>
                    </div>
                    <h6 className="mb-2 fw-bold text-primary">Storage Usage</h6>
                    <div className="progress mb-2 bg-white" style={{ height: '8px' }}>
                      <div className="progress-bar bg-primary rounded-pill" role="progressbar" style={{ width: '70%' }}></div>
                    </div>
                    <p className="mb-0 fs-12 text-muted fw-medium">70 GB / 100 GB Used</p>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-xl-9 bg-white">
                <div className="p-4 p-xl-5">
                  <h5 className="fw-bold mb-4 d-flex align-items-center">
                    <i className="ti ti-folder-open text-primary me-2"></i> Quick Access
                  </h5>
                  
                  <div className="row g-4 mb-5">
                    {[
                      { name: 'Dropbox', icon: 'dropbox', color: 'bg-primary', used: '20', files: '1,454', storage: '28GB / 100GB' },
                      { name: 'Google Drive', icon: 'drive', color: 'bg-success', used: '65', files: '2,890', storage: '65GB / 100GB' },
                      { name: 'iCloud', icon: 'cloud', color: 'bg-info', used: '45', files: '840', storage: '45GB / 100GB' }
                    ].map((drive, i) => (
                      <div className="col-md-4 col-sm-6" key={i}>
                        <div className="premium-card border p-4 shadow-sm h-100 transition-all hover-shadow-lg">
                          <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                              <div className="bg-light p-2 rounded-3 me-3 border">
                                <img src={`/assets/img/icons/${drive.icon}.svg`} alt={drive.name} width="24" height="24" />
                              </div>
                              <h6 className="fw-bold mb-0">{drive.name}</h6>
                            </div>
                            <button className="btn btn-icon btn-sm btn-white rounded-circle shadow-sm"><i className="ti ti-dots-vertical"></i></button>
                          </div>
                          <div className="progress mb-3 bg-light" style={{ height: '6px' }}>
                            <div className={`progress-bar ${drive.color} rounded-pill`} style={{ width: `${drive.used}%` }}></div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between fs-13 fw-medium text-muted">
                            <span>{drive.files} Files</span>
                            <span className="text-dark">{drive.storage}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h5 className="fw-bold mb-4 d-flex align-items-center">
                    <i className="ti ti-clock-play text-primary me-2"></i> Recent Files
                  </h5>
                  
                  <div className="row g-4 mb-5">
                    {recentFiles.map(file => (
                      <div className="col-md-3 col-sm-6" key={file.id}>
                        <div className="premium-card border p-4 shadow-sm text-center h-100 transition-all hover-shadow-lg position-relative group">
                          <div className="position-absolute top-0 end-0 p-3 opacity-0 group-hover-opacity-100 transition-all">
                            <button className="btn btn-icon btn-sm btn-white rounded-circle shadow"><i className="ti ti-dots-vertical"></i></button>
                          </div>
                          <div className="mb-3 d-inline-flex align-items-center justify-content-center bg-light rounded-4 p-4 border border-opacity-50" style={{ width: '80px', height: '80px' }}>
                            <img src={`/assets/img/icons/${file.icon}.svg`} alt={file.type} className="img-fluid" style={{ maxWidth: '40px' }} />
                          </div>
                          <h6 className="fw-bold fs-14 mb-2 text-truncate" title={file.name}>{file.name}</h6>
                          <div className="d-flex align-items-center justify-content-center gap-2 fs-12 text-muted fw-medium">
                            <span>{file.date}</span>
                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></span>
                            <span>{file.size}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h5 className="fw-bold mb-0 d-flex align-items-center">
                      <i className="ti ti-files text-primary me-2"></i> All Files
                    </h5>
                    <button className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-medium border-2">View All</button>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="fw-bold text-muted border-0 rounded-start">Name</th>
                          <th className="fw-bold text-muted border-0">Size</th>
                          <th className="fw-bold text-muted border-0">Modified</th>
                          <th className="fw-bold text-muted border-0">Shared With</th>
                          <th className="fw-bold text-muted border-0 text-end rounded-end">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="border-top-0">
                        {filesList.map(item => (
                          <tr key={item.id} className="transition-all">
                            <td className="border-bottom-0 py-3">
                              <div className="d-flex align-items-center">
                                <div className="bg-light p-2 rounded-3 me-3 border">
                                  <img src={`/assets/img/icons/${item.icon}.svg`} alt={item.type} width="24" height="24" />
                                </div>
                                <div>
                                  <h6 className="fw-bold mb-1"><a href="#/" className="text-dark text-decoration-none hover-primary">{item.name}</a></h6>
                                  <span className="badge bg-light text-muted fs-11 px-2 border">{item.type}</span>
                                </div>
                              </div>
                            </td>
                            <td className="border-bottom-0 py-3 fw-medium text-muted">{item.size}</td>
                            <td className="border-bottom-0 py-3">
                              <div className="fw-medium text-dark">{item.date}</div>
                              <div className="fs-12 text-muted">{item.time}</div>
                            </td>
                            <td className="border-bottom-0 py-3">
                              <div className="avatar-group">
                                {item.avatars.map((av, idx) => (
                                  av === '+1' ? 
                                    <span key={idx} className="avatar avatar-sm rounded-circle bg-primary text-white fw-bold fs-10 border border-2 border-white d-flex align-items-center justify-content-center" style={{ zIndex: 10 - idx }}>{av}</span> :
                                    <div key={idx} className="avatar avatar-sm rounded-circle border border-2 border-white shadow-sm" style={{ zIndex: 10 - idx }}>
                                      <img src={`/assets/img/avatars/${av}`} alt="user" className="rounded-circle w-100 h-100 object-fit-cover" />
                                    </div>
                                ))}
                              </div>
                            </td>
                            <td className="border-bottom-0 py-3 text-end">
                              <button className="btn btn-icon btn-sm btn-light rounded-circle shadow-sm me-2"><i className="ti ti-star text-muted"></i></button>
                              <button className="btn btn-icon btn-sm btn-light rounded-circle shadow-sm"><i className="ti ti-dots-vertical"></i></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer text-center mt-4">
        <p className="mb-0 text-dark"> &copy; <Link to="/" className="link-primary text-decoration-none">Dreams EMR</Link> - All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default FileManager;
