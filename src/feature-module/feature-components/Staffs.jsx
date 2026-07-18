import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Static database of laboratory and clinic staff
const INITIAL_STAFF = [
  { id: '#SF0025', name: 'Benjamin Clark', gender: 'Male', designation: 'Compounder', phone: '+1 81934 71892', email: 'benjamin@example.com', date: '17 Jun 2025', avatar: 'avatar-31.jpg' },
  { id: '#SF0024', name: 'Charlotte Hayes', gender: 'Female', designation: 'Nurse', phone: '+1 48912 78015', email: 'charlotte@example.com', date: '10 Jun 2025', avatar: 'avatar-29.jpg' },
  { id: '#SF0023', name: 'Anthony Foster', gender: 'Male', designation: 'Purchase Officer', phone: '+1 61397 47103', email: 'anthony@example.com', date: '22 May 2025', avatar: 'avatar-30.jpg' },
  { id: '#SF0022', name: 'Isabella Morgan', gender: 'Female', designation: 'Supervisor', phone: '+1 84910 67381', email: 'isabella@example.com', date: '15 May 2025', avatar: 'avatar-33.jpg' },
  { id: '#SF0021', name: 'William Turner', gender: 'Male', designation: 'Nurse', phone: '+1 19047 89036', email: 'william@example.com', date: '30 Apr 2025', avatar: 'avatar-34.jpg' },
  { id: '#SF0020', name: 'Amanda Richardson', gender: 'Female', designation: 'Receptionist', phone: '+1 71289 45017', email: 'amanda@example.com', date: '25 Apr 2025', avatar: 'avatar-43.jpg' },
  { id: '#SF0019', name: 'Nathaniel Lewis', gender: 'Male', designation: 'Lab Assistant', phone: '+1 57109 25913', email: 'nathaniel@example.com', date: '13 Mar 2025', avatar: 'avatar-36.jpg' },
  { id: '#SF0018', name: 'Katherine Stewart', gender: 'Female', designation: 'Pharmacist', phone: '+1 56193 61902', email: 'katherine@example.com', date: '16 Feb 2025', avatar: 'avatar-48.jpg' },
  { id: '#SF0017', name: 'Eric Patterson', gender: 'Male', designation: 'Nurse', phone: '+1 89105 78103', email: 'eric@example.com', date: '20 Jan 2025', avatar: 'avatar-38.jpg' },
  { id: '#SF0016', name: 'Lauren Simmons', gender: 'Female', designation: 'Lab Technician', phone: '+1 78103 78591', email: 'lauren@example.com', date: '15 Jan 2025', avatar: 'avatar-52.jpg' },
];

const Staffs = () => {
  const [staffsList, setStaffsList] = useState(INITIAL_STAFF);

  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [designationFilter, setDesignationFilter] = useState("All");

  const [activeQuery, setActiveQuery] = useState({
    search: "",
    designation: "All"
  });

  // Modals state
  const [viewModal, setViewModal] = useState({ isOpen: false, item: null });
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, item: null });
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState({ isOpen: false, item: null });

  // Form Field states for Add/Edit
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    designation: 'Nurse',
    phone: '',
    email: '',
    date: '',
    avatar: 'avatar-31.jpg',
    avatarFile: null
  });

  // Reset Filters
  const handleClearFilters = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setDesignationFilter("All");
    setActiveQuery({
      search: "",
      designation: "All"
    });
  };

  // Submit Search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveQuery({
      search: searchQuery,
      designation: designationFilter
    });
  };

  // Handle Image Upload Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          avatarFile: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData(prev => ({
      ...prev,
      avatarFile: null
    }));
  };

  // Add Action
  const handleOpenAddModal = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      gender: 'Male',
      designation: 'Nurse',
      phone: '',
      email: '',
      date: '',
      avatar: 'avatar-31.jpg',
      avatarFile: null
    });
    setAddModal(true);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newStaff = {
      id: '#SF' + Math.floor(1000 + Math.random() * 9000),
      name: formData.name || 'Unnamed Staff',
      gender: formData.gender,
      designation: formData.designation,
      phone: formData.phone || 'N/A',
      email: formData.email || 'N/A',
      date: formData.date || 'N/A',
      avatar: 'avatar-31.jpg',
      avatarFile: formData.avatarFile
    };
    setStaffsList(prev => [newStaff, ...prev]);
    setAddModal(false);
  };

  // Edit Action
  const handleOpenEditModal = (item, e) => {
    e.preventDefault();
    setFormData({
      name: item.name,
      gender: item.gender,
      designation: item.designation,
      phone: item.phone,
      email: item.email,
      date: item.date,
      avatar: item.avatar,
      avatarFile: item.avatarFile || null
    });
    setEditModal({ isOpen: true, item });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editModal.item) {
      setStaffsList(prev => prev.map(s => s.id === editModal.item.id ? {
        ...s,
        name: formData.name || s.name,
        gender: formData.gender,
        designation: formData.designation,
        phone: formData.phone || s.phone,
        email: formData.email || s.email,
        date: formData.date || s.date,
        avatarFile: formData.avatarFile || s.avatarFile
      } : s));
    }
    setEditModal({ isOpen: false, item: null });
  };

  // Delete Action
  const handleOpenDeleteModal = (item, e) => {
    e.preventDefault();
    setDeleteModal({ isOpen: true, item });
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal({ isOpen: false, item: null });
  };

  const handleConfirmDelete = () => {
    if (deleteModal.item) {
      setStaffsList(prev => prev.filter(s => s.id !== deleteModal.item.id));
    }
    handleCloseDeleteModal();
  };

  // Refresh
  const handleRefresh = (e) => {
    e.preventDefault();
    setStaffsList(INITIAL_STAFF);
    handleClearFilters(e);
  };

  // Compute filtered dataset
  const filteredStaff = staffsList.filter(s => {
    const term = activeQuery.search.toLowerCase().trim();
    const matchesSearch = term === "" || 
      s.name.toLowerCase().includes(term) ||
      s.id.toLowerCase().includes(term) ||
      s.email.toLowerCase().includes(term);

    const matchesDesignation = activeQuery.designation === "All" || s.designation === activeQuery.designation;

    return matchesSearch && matchesDesignation;
  });

  // Extract unique designations for filters
  const uniqueDesignations = Array.from(new Set(staffsList.map(s => s.designation)));

  return (
    <>
      <style>{`
        .theme-card-bg-light {
          background-color: var(--bs-tertiary-bg) !important;
          border: 1px solid var(--bs-border-color) !important;
        }
      `}</style>

      <div className="content patients-list-page">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Staffs</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Staffs</li>
            </ol>
          </div>
          <div className="patients-list-toolbar d-flex align-items-center gap-2 flex-wrap">
            <button type="button" className="btn btn-icon btn-light" onClick={handleRefresh} title="Refresh"><i className="ti ti-refresh"></i></button>
            <button type="button" className="btn btn-icon btn-light" onClick={() => window.print()} title="Print"><i className="ti ti-printer"></i></button>
            <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2" onClick={handleOpenAddModal}>
              <i className="ti ti-square-rounded-plus"></i> New Staff
            </button>
          </div>
        </div>

        {/* Filter Card */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="row g-3">
                {/* Search Text Input */}
                <div className="col-md-6 col-lg-5">
                  <label className="form-label fw-medium text-secondary">Search Staff</label>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      className="form-control ps-4" 
                      placeholder="Name, email, staff ID..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="ti ti-search position-absolute start-0 top-50 translate-middle-y ms-2 text-muted"></i>
                  </div>
                </div>

                {/* Designation dropdown */}
                <div className="col-md-3 col-lg-4">
                  <label className="form-label fw-medium text-secondary">Designation</label>
                  <select 
                    className="form-select"
                    value={designationFilter}
                    onChange={(e) => setDesignationFilter(e.target.value)}
                  >
                    <option value="All">All Designations</option>
                    {uniqueDesignations.map((d, idx) => (
                      <option key={idx} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Action buttons */}
                <div className="col-md-3 col-lg-3 d-flex align-items-end gap-2">
                  <button type="submit" className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center gap-1 py-2">
                    <i className="ti ti-search"></i> Search
                  </button>
                  <button type="button" className="btn btn-light w-100 d-inline-flex align-items-center justify-content-center gap-1 py-2 border" onClick={handleClearFilters}>
                    <i className="ti ti-circle-x"></i> Clear
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Filters Active Alert Box */}
        {(activeQuery.search || activeQuery.designation !== "All") && (
          <div className="d-flex align-items-center justify-content-between p-3 bg-primary-transparent rounded-2 mb-4 border border-primary-subtle text-primary">
            <div className="d-flex align-items-center gap-2">
              <i className="ti ti-info-circle"></i>
              <p className="fs-13 mb-0">
                Filters Active: 
                {activeQuery.search && ` Keyword "${activeQuery.search}"`}
                {activeQuery.designation !== "All" && ` Designation: ${activeQuery.designation}`}
              </p>
            </div>
            <button type="button" className="btn btn-sm btn-link text-primary p-0 text-decoration-none fw-semibold" onClick={handleClearFilters}>
              Reset Filters
            </button>
          </div>
        )}

        {/* Table card shell */}
        <div className="card border-0 shadow-sm patients-list-shell mb-0">
          <div className="card-body p-4 border-bottom patients-list-hero">
            <div className="d-flex align-items-start justify-content-between gap-3 flex-wrap">
              <div>
                <div className="patients-list-kicker mb-2">Hospital Directory</div>
                <h5 className="mb-2 fw-bold">Staff Directory</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="patients-list-total">{filteredStaff.length}</span>
                  <span className="patients-list-subtitle">Active staff accounts</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            {filteredStaff.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-modern patients-list-table mb-0 align-middle">
                  <thead>
                    <tr>
                      <th className="ps-4">Staff ID</th>
                      <th>Staff Name</th>
                      <th>Gender</th>
                      <th>Designation</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Appointment Date</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStaff.map(s => (
                      <tr key={s.id} className="hover-row">
                        <td className="ps-4">
                          <button 
                            type="button" 
                            className="btn btn-link text-primary p-0 text-decoration-none fw-bold"
                            onClick={() => setViewModal({ isOpen: true, item: s })}
                          >
                            {s.id}
                          </button>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <button 
                              type="button"
                              className="btn btn-link p-0 avatar avatar-md patients-list-avatar flex-shrink-0"
                              onClick={() => setViewModal({ isOpen: true, item: s })}
                            >
                              <img 
                                src={s.avatarFile || `/assets/img/avatars/${s.avatar}`} 
                                alt={s.name} 
                                className="rounded-circle"
                                onError={(e) => { e.target.src = "/assets/img/avatars/avatar-31.jpg" }} 
                              />
                            </button>
                            <div>
                              <h6 className="mb-1 fs-14 fw-semibold">
                                <button 
                                  type="button" 
                                  className="btn btn-link p-0 text-decoration-none patients-list-link-dark fw-semibold"
                                  onClick={() => setViewModal({ isOpen: true, item: s })}
                                >
                                  {s.name}
                                </button>
                              </h6>
                              <p className="mb-0 patients-list-muted">Clinical Specialist</p>
                            </div>
                          </div>
                        </td>
                        <td className="fs-14">{s.gender}</td>
                        <td className="fw-semibold text-dark fs-14">{s.designation}</td>
                        <td className="fs-14">{s.phone}</td>
                        <td className="fs-14">{s.email}</td>
                        <td>
                          <div className="patients-list-date">{s.date}</div>
                        </td>
                        <td className="text-end">
                          <div className="dropdown">
                            <button className="btn btn-icon btn-sm patients-list-action" data-bs-toggle="dropdown" aria-label="more options">
                              <i className="ti ti-dots-vertical"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-clean p-1">
                              <li>
                                <button 
                                  type="button" 
                                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                                  onClick={() => setViewModal({ isOpen: true, item: s })}
                                >
                                  <i className="ti ti-eye fs-15 text-muted"></i>View Details
                                </button>
                              </li>
                              <li>
                                <button 
                                  type="button" 
                                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                                  onClick={(e) => handleOpenEditModal(s, e)}
                                >
                                  <i className="ti ti-edit fs-15 text-muted"></i>Edit
                                </button>
                              </li>
                              <li><hr className="dropdown-divider" /></li>
                              <li>
                                <a 
                                  href="#/" 
                                  className="dropdown-item rounded-1 d-flex align-items-center gap-2 py-2 text-danger"
                                  onClick={(e) => handleOpenDeleteModal(s, e)}
                                >
                                  <i className="ti ti-trash fs-15"></i>Delete staff
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-5 bg-white">
                <div className="mb-3">
                  <i className="ti ti-users text-muted" style={{ fontSize: '3.5rem' }}></i>
                </div>
                <h5 className="fw-semibold">No Staff Found</h5>
                <p className="text-muted fs-14 px-3">We couldn't find any staff matching active filters. Try adjusting keywords.</p>
                <button type="button" className="btn btn-primary btn-sm mt-2" onClick={handleClearFilters}>
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stateful View Details Modal */}
      {viewModal.isOpen && viewModal.item && (
        <div className="modal-backdrop fade show"></div>
      )}
      {viewModal.isOpen && viewModal.item && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg animate-fade-in">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-user text-primary fs-22"></i>
                  Staff Member Details
                </h5>
                <button type="button" className="btn-close" onClick={() => setViewModal({ isOpen: false, item: null })} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                
                <div className="p-3 theme-card-bg-light rounded-3 mb-3 text-center">
                  <img 
                    src={viewModal.item.avatarFile || `/assets/img/avatars/${viewModal.item.avatar}`} 
                    alt={viewModal.item.name} 
                    className="avatar avatar-xxl rounded-circle border mb-3"
                    onError={(e) => { e.target.src = "/assets/img/avatars/avatar-31.jpg" }} 
                  />
                  <h6 className="mb-0.5 fw-bold text-dark fs-16">{viewModal.item.name}</h6>
                  <p className="mb-0 text-primary fw-medium fs-13">{viewModal.item.designation}</p>
                  <p className="mb-0 text-muted fs-12">Staff ID: {viewModal.item.id}</p>
                </div>

                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold mb-1 d-block">Gender</span>
                      <div className="fs-13 fw-semibold text-dark">{viewModal.item.gender}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold mb-1 d-block">Hired Date</span>
                      <div className="fs-13 fw-semibold text-dark">{viewModal.item.date}</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 theme-card-bg-light rounded-3 mb-2">
                  <span className="fs-11 text-uppercase text-secondary fw-bold mb-1.5 d-block">Contact Info</span>
                  <div className="d-flex flex-column gap-1.5">
                    <div className="fs-13 text-secondary d-flex align-items-center gap-1.5">
                      <i className="ti ti-mail"></i> {viewModal.item.email}
                    </div>
                    <div className="fs-13 text-secondary d-flex align-items-center gap-1.5">
                      <i className="ti ti-phone"></i> {viewModal.item.phone}
                    </div>
                  </div>
                </div>

              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-primary w-100" onClick={() => setViewModal({ isOpen: false, item: null })}>Close Details</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stateful Add Staff Modal */}
      {addModal && (
        <div className="modal-backdrop fade show"></div>
      )}
      {addModal && (
        <div className="modal fade show d-block animate-fade-in" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <form onSubmit={handleAddSubmit}>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                    <i className="ti ti-square-rounded-plus text-primary fs-22"></i>
                    New Staff Member
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setAddModal(false)} aria-label="Close"></button>
                </div>
                <div className="modal-body py-4">
                  {/* Photo picker */}
                  <div className="mb-3 text-center">
                    <div className="d-inline-block position-relative mb-2">
                      <img 
                        src={formData.avatarFile || `/assets/img/avatars/${formData.avatar}`} 
                        alt="Preview" 
                        className="avatar avatar-xxl rounded-circle border" 
                      />
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                      <div className="btn btn-sm btn-dark btn-file position-relative">
                        Upload Image
                        <input type="file" className="position-absolute opacity-0 start-0 top-0 w-100 h-100" style={{ cursor: 'pointer' }} onChange={handleImageChange} />
                      </div>
                      {formData.avatarFile && (
                        <button type="button" className="btn btn-sm btn-outline-danger" onClick={handleRemoveImage}>Remove</button>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-medium text-secondary">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Benjamin Clark"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Gender</label>
                      <select 
                        className="form-select"
                        value={formData.gender}
                        onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Designation</label>
                      <select 
                        className="form-select"
                        value={formData.designation}
                        onChange={(e) => setFormData(prev => ({ ...prev, designation: e.target.value }))}
                      >
                        <option value="Compounder">Compounder</option>
                        <option value="Nurse">Nurse</option>
                        <option value="Purchase Officer">Purchase Officer</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Receptionist">Receptionist</option>
                        <option value="Lab Assistant">Lab Assistant</option>
                        <option value="Pharmacist">Pharmacist</option>
                        <option value="Lab Technician">Lab Technician</option>
                      </select>
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Phone Number</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="+1 81934 71892"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Email Address</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="benjamin@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label fw-medium text-secondary">Hired Date</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="17 Jun 2025"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    />
                  </div>

                </div>
                <div className="modal-footer border-0 pt-0 d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setAddModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary flex-fill py-2">Add Staff</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Stateful Edit Staff Modal */}
      {editModal.isOpen && editModal.item && (
        <div className="modal-backdrop fade show"></div>
      )}
      {editModal.isOpen && editModal.item && (
        <div className="modal fade show d-block animate-fade-in" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <form onSubmit={handleEditSubmit}>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                    <i className="ti ti-edit text-primary fs-22"></i>
                    Edit Staff Profile
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setEditModal({ isOpen: false, item: null })} aria-label="Close"></button>
                </div>
                <div className="modal-body py-4">
                  {/* Photo picker */}
                  <div className="mb-3 text-center">
                    <div className="d-inline-block position-relative mb-2">
                      <img 
                        src={formData.avatarFile || `/assets/img/avatars/${formData.avatar}`} 
                        alt="Preview" 
                        className="avatar avatar-xxl rounded-circle border" 
                      />
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                      <div className="btn btn-sm btn-dark btn-file position-relative">
                        Upload Image
                        <input type="file" className="position-absolute opacity-0 start-0 top-0 w-100 h-100" style={{ cursor: 'pointer' }} onChange={handleImageChange} />
                      </div>
                      {(formData.avatarFile || formData.avatar) && (
                        <button type="button" className="btn btn-sm btn-outline-danger" onClick={handleRemoveImage}>Remove</button>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-medium text-secondary">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Benjamin Clark"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Gender</label>
                      <select 
                        className="form-select"
                        value={formData.gender}
                        onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Designation</label>
                      <select 
                        className="form-select"
                        value={formData.designation}
                        onChange={(e) => setFormData(prev => ({ ...prev, designation: e.target.value }))}
                      >
                        <option value="Compounder">Compounder</option>
                        <option value="Nurse">Nurse</option>
                        <option value="Purchase Officer">Purchase Officer</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Receptionist">Receptionist</option>
                        <option value="Lab Assistant">Lab Assistant</option>
                        <option value="Pharmacist">Pharmacist</option>
                        <option value="Lab Technician">Lab Technician</option>
                      </select>
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Phone Number</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="+1 81934 71892"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Email Address</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="benjamin@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label fw-medium text-secondary">Hired Date</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="17 Jun 2025"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    />
                  </div>

                </div>
                <div className="modal-footer border-0 pt-0 d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setEditModal({ isOpen: false, item: null })}>Cancel</button>
                  <button type="submit" className="btn btn-primary flex-fill py-2">Save Profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Stateful Delete Confirmation Modal */}
      {deleteModal.isOpen && deleteModal.item && (
        <div className="modal-backdrop fade show"></div>
      )}
      {deleteModal.isOpen && deleteModal.item && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-alert-circle text-danger fs-22"></i>
                  Delete Staff Record
                </h5>
                <button type="button" className="btn-close" onClick={handleCloseDeleteModal} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-2 fs-14 text-secondary">
                  Are you sure you want to permanently delete this staff member:
                </p>
                <div className="p-3 bg-light rounded-3 mb-3 border theme-card-bg-light">
                  <div className="d-flex align-items-center gap-3">
                    <img 
                      src={deleteModal.item.avatarFile || `/assets/img/avatars/${deleteModal.item.avatar}`} 
                      alt={deleteModal.item.name} 
                      className="avatar avatar-md rounded-circle border"
                      onError={(e) => { e.target.src = "/assets/img/avatars/avatar-31.jpg" }} 
                    />
                    <div>
                      <h6 className="mb-1 fw-bold text-dark">{deleteModal.item.name}</h6>
                      <p className="mb-0 text-muted fs-12">ID: {deleteModal.item.id} | Designation: {deleteModal.item.designation}</p>
                    </div>
                  </div>
                </div>
                <p className="mb-0 fs-12 text-danger">
                  <i className="ti ti-info-circle me-1"></i>Note: This action is permanent and will revoke system access privileges for this user.
                </p>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={handleCloseDeleteModal}>Close</button>
                <button 
                  type="button" 
                  className="btn btn-danger flex-fill py-2"
                  onClick={handleConfirmDelete}
                >
                  Yes, Delete User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Staffs;
