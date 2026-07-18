import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Static database of requests from initial template
const INITIAL_REQUESTS = [
  { id: '#PT0025', patientName: 'James Carter', patientImg: 'avatar-05.jpg', doctorName: 'Dr. Andrew Clark', doctorImg: 'doctor-01.jpg', department: 'Anaesthesiology', date: '17 Jun 2025, 09:00 AM to 10:00 AM' },
  { id: '#PT0024', patientName: 'Emily Davis', patientImg: 'avatar-34.jpg', doctorName: 'Dr. Katherine Brooks', doctorImg: 'doctor-03.jpg', department: 'Dental Surgery', date: '10 Jun 2025, 10:30 AM to 11:30 AM' },
  { id: '#PT0023', patientName: 'Michael Johnson', patientImg: 'avatar-06.jpg', doctorName: 'Dr. Benjamin Harris', doctorImg: 'doctor-04.jpg', department: 'Dermatology', date: '22 May 2025, 01:15 PM to 02:15 PM' },
  { id: '#PT0022', patientName: 'Olivia Miller', patientImg: 'avatar-25.jpg', doctorName: 'Dr. Laura Mitchell', doctorImg: 'doctor-05.jpg', department: 'ENT Surgery', date: '15 May 2025, 11:30 AM to 12:30 PM' },
  { id: '#PT0021', patientName: 'David Smith', patientImg: 'avatar-14.jpg', doctorName: 'Dr. Christopher Lewis', doctorImg: 'doctor-06.jpg', department: 'General Medicine', date: '30 Apr 2025, 12:20 PM to 01:20 PM' },
  { id: '#PT0020', patientName: 'Sophia Wilson', patientImg: 'avatar-22.jpg', doctorName: 'Dr. Natalie Foster', doctorImg: 'doctor-07.jpg', department: 'Ophthalmology', date: '25 Apr 2025, 03:15 PM to 04:15 PM' },
  { id: '#PT0019', patientName: 'Daniel Williams', patientImg: 'avatar-30.jpg', doctorName: 'Dr. Jonathan Adams', doctorImg: 'doctor-10.jpg', department: 'Orthopaedics', date: '13 Mar 2025, 02:40 PM to 03:40 PM' },
  { id: '#PT0018', patientName: 'Isabella Anderson', patientImg: 'avatar-24.jpg', doctorName: 'Dr. Rebecca Scott', doctorImg: 'doctor-08.jpg', department: 'Paediatrics', date: '16 Feb 2025, 03:00 PM to 04:00 PM' },
  { id: '#PT0017', patientName: 'William Brown', patientImg: 'avatar-15.jpg', doctorName: 'Dr. Samuel Turner', doctorImg: 'doctor-12.jpg', department: 'Radiology', date: '20 Jan 2025, 04:45 PM to 05:45 PM' },
  { id: '#PT0016', patientName: 'Charlotte Taylor', patientImg: 'avatar-39.jpg', doctorName: 'Dr. Victoria Evans', doctorImg: 'doctor-11.jpg', department: 'Cardiology', date: '15 Jan 2025, 05:30 PM to 06:30 PM' },
];

const Requests = () => {
  const [requestsList, setRequestsList] = useState(INITIAL_REQUESTS);
  
  // Search parameters states
  const [searchQuery, setSearchQuery] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");

  // Active query filters state
  const [activeQuery, setActiveQuery] = useState({
    search: "",
    department: "All"
  });

  // Modal confirmation state
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null, // 'approve' or 'reject'
    request: null
  });

  // Action: Clear searches
  const handleClearFilters = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setDeptFilter("All");
    setActiveQuery({
      search: "",
      department: "All"
    });
  };

  // Action: Submit query search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveQuery({
      search: searchQuery,
      department: deptFilter
    });
  };

  // Open Approval Confirmation
  const handleOpenApproveModal = (req, e) => {
    e.preventDefault();
    setModalState({
      isOpen: true,
      type: 'approve',
      request: req
    });
  };

  // Open Rejection Confirmation
  const handleOpenRejectModal = (req, e) => {
    e.preventDefault();
    setModalState({
      isOpen: true,
      type: 'reject',
      request: req
    });
  };

  // Confirm and resolve modal action
  const handleConfirmAction = () => {
    if (!modalState.request) return;
    
    const { id } = modalState.request;
    setRequestsList(prev => prev.filter(req => req.id !== id));
    
    setModalState({
      isOpen: false,
      type: null,
      request: null
    });
  };

  // Close Confirmation Modal
  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      request: null
    });
  };

  // Action: Refresh all requests list
  const handleRefreshList = (e) => {
    e.preventDefault();
    setRequestsList(INITIAL_REQUESTS);
    handleClearFilters(e);
  };

  // Action: Simulate Print
  const handlePrint = (e) => {
    e.preventDefault();
    window.print();
  };

  // Filter conditions
  const filteredRequests = requestsList.filter(req => {
    const textQuery = activeQuery.search.toLowerCase().trim();
    
    const matchesSearch = textQuery === "" || 
      req.patientName.toLowerCase().includes(textQuery) || 
      req.id.toLowerCase().includes(textQuery) ||
      req.doctorName.toLowerCase().includes(textQuery);

    const matchesDept = activeQuery.department === "All" || 
      req.department === activeQuery.department;

    return matchesSearch && matchesDept;
  });

  return (
    <>
      <div className="content patients-list-page">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Appointment Requests</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Requests</li>
            </ol>
          </div>

          <div className="patients-list-toolbar d-flex align-items-center gap-2 flex-wrap">
            <button 
              type="button" 
              className="btn btn-icon btn-light" 
              onClick={handleRefreshList} 
              title="Refresh list"
            >
              <i className="ti ti-refresh"></i>
            </button>
            <button 
              type="button" 
              className="btn btn-icon btn-light" 
              onClick={handlePrint} 
              title="Print"
            >
              <i className="ti ti-printer"></i>
            </button>
            <a 
              href="#/" 
              className="btn btn-icon btn-light" 
              title="Download PDF"
              onClick={(e) => { e.preventDefault(); alert("Downloading PDF summary..."); }}
            >
              <i className="ti ti-cloud-download"></i>
            </a>
          </div>
        </div>

        {/* Filter Card */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="row g-3 align-items-end">
                {/* Search Text Input */}
                <div className="col-md-7 col-lg-6">
                  <label className="form-label fw-medium text-secondary">Search Requests</label>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      className="form-control ps-4" 
                      placeholder="Search by patient name, doctor, ID..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="ti ti-search position-absolute start-0 top-50 translate-middle-y ms-2 text-muted"></i>
                  </div>
                </div>

                {/* Department Dropdown */}
                <div className="col-md-5 col-lg-3">
                  <label className="form-label fw-medium text-secondary">Department</label>
                  <select 
                    className="form-select"
                    value={deptFilter}
                    onChange={(e) => setDeptFilter(e.target.value)}
                  >
                    <option value="All">All Departments</option>
                    <option value="Anaesthesiology">Anaesthesiology</option>
                    <option value="Dental Surgery">Dental Surgery</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="ENT Surgery">ENT Surgery</option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Orthopaedics">Orthopaedics</option>
                    <option value="Paediatrics">Paediatrics</option>
                    <option value="Radiology">Radiology</option>
                    <option value="Cardiology">Cardiology</option>
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="col-md-12 col-lg-3 d-flex gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center gap-1 py-2"
                  >
                    <i className="ti ti-search"></i> Search
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-light w-100 d-inline-flex align-items-center justify-content-center gap-1 py-2 border"
                    onClick={handleClearFilters}
                  >
                    <i className="ti ti-circle-x"></i> Clear
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Filters Active Alert Box */}
        {(activeQuery.search || activeQuery.department !== "All") && (
          <div className="d-flex align-items-center justify-content-between p-3 bg-primary-transparent rounded-2 mb-4 border border-primary-subtle text-primary">
            <div className="d-flex align-items-center gap-2">
              <i className="ti ti-info-circle"></i>
              <p className="fs-13 mb-0">
                Filters Active: 
                {activeQuery.search && ` Keyword "${activeQuery.search}"`}
                {activeQuery.department !== "All" && ` Department: ${activeQuery.department}`}
              </p>
            </div>
            <button type="button" className="btn btn-sm btn-link text-primary p-0 text-decoration-none fw-semibold" onClick={handleClearFilters}>
              Reset Filters
            </button>
          </div>
        )}

        {/* Requests Card Shell matching AllPatientsList / PatientSearch */}
        <div className="card border-0 shadow-sm patients-list-shell">
          <div className="card-body p-4 border-bottom patients-list-hero">
            <div className="d-flex align-items-start justify-content-between gap-3 flex-wrap">
              <div>
                <div className="patients-list-kicker mb-2">Incoming Requests</div>
                <h5 className="mb-2 fw-bold">Active Requests</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="patients-list-total">{filteredRequests.length}</span>
                  <span className="patients-list-subtitle">Pending approval / practitioner check</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            {filteredRequests.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-modern patients-list-table mb-0 align-middle">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }} className="ps-4">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" id="select-all" />
                        </div>
                      </th>
                      <th>Patient Name</th>
                      <th>Patient ID</th>
                      <th>Assigned Doctor</th>
                      <th>Department</th>
                      <th>Appointment Date</th>
                      <th className="text-end pe-4" style={{ width: '150px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRequests.map(req => (
                      <tr key={req.id} className="hover-row">
                        <td className="ps-4">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <Link to="/patient-details" className="avatar avatar-md patients-list-avatar flex-shrink-0">
                              <img 
                                src={`/assets/img/avatars/${req.patientImg}`} 
                                alt={req.patientName} 
                                className="rounded-circle"
                                onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                              />
                            </Link>
                            <div>
                              <h6 className="mb-1 fs-14 fw-semibold">
                                <Link to="/patient-details" className="text-decoration-none patients-list-link-dark">
                                  {req.patientName}
                                </Link>
                              </h6>
                              <p className="mb-0 patients-list-muted">Appointment request</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Link to="/patient-details" className="fw-semibold text-decoration-none">
                            {req.id}
                          </Link>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <Link to="/doctor-details" className="avatar avatar-sm flex-shrink-0">
                              <img 
                                src={`/assets/img/doctors/${req.doctorImg}`} 
                                alt={req.doctorName} 
                                className="rounded-circle" 
                                onError={(e) => { e.target.src = "/assets/img/doctors/doctor-01.jpg" }}
                              />
                            </Link>
                            <div>
                              <Link to="/doctor-details" className="text-decoration-none fw-medium patients-list-link-dark">
                                {req.doctorName}
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="patients-list-pill">{req.department}</span>
                        </td>
                        <td>
                          <div className="patients-list-date">{req.date}</div>
                        </td>
                        <td className="text-end pe-4">
                          <div className="d-inline-flex gap-2">
                            <button 
                              type="button"
                              className="btn btn-icon btn-sm btn-light border text-danger" 
                              onClick={(e) => handleOpenRejectModal(req, e)}
                              title="Reject Request"
                            >
                              <i className="ti ti-xbox-x fs-16"></i>
                            </button>
                            <button 
                              type="button"
                              className="btn btn-icon btn-sm btn-light border text-success" 
                              onClick={(e) => handleOpenApproveModal(req, e)}
                              title="Approve Request"
                            >
                              <i className="ti ti-check fs-16"></i>
                            </button>
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
                  <i className="ti ti-circle-check-filled text-success" style={{ fontSize: '3.5rem' }}></i>
                </div>
                <h5 className="fw-semibold">All Caught Up!</h5>
                <p className="text-muted fs-14 px-3">There are no pending requests matching your filters. Good work!</p>
                <button type="button" className="btn btn-primary btn-sm mt-2" onClick={handleRefreshList}>
                  Reset & Show All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Stateful Confirmation Modal */}
      {modalState.isOpen && modalState.request && (
        <div className="modal-backdrop fade show"></div>
      )}
      
      {modalState.isOpen && modalState.request && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className={`ti ${modalState.type === 'approve' ? 'ti-circle-check text-success' : 'ti-alert-circle text-danger'} fs-22`}></i>
                  {modalState.type === 'approve' ? 'Approve Appointment' : 'Reject Appointment'}
                </h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-2 fs-14 text-secondary">
                  Are you sure you want to {modalState.type === 'approve' ? 'approve' : 'reject'} the appointment request for:
                </p>
                <div className="p-3 bg-light rounded-3 mb-3 border">
                  <div className="d-flex align-items-center gap-3">
                    <img 
                      src={`/assets/img/avatars/${modalState.request.patientImg}`} 
                      alt={modalState.request.patientName} 
                      className="avatar avatar-md rounded-circle border"
                      onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                    />
                    <div>
                      <h6 className="mb-1 fw-bold text-dark">{modalState.request.patientName}</h6>
                      <p className="mb-0 text-muted fs-12">ID: {modalState.request.id} | Dept: {modalState.request.department}</p>
                    </div>
                  </div>
                  <hr className="my-2 text-muted opacity-25" />
                  <div className="fs-12 text-secondary">
                    <i className="ti ti-calendar me-1"></i>{modalState.request.date}
                  </div>
                </div>
                {modalState.type === 'reject' && (
                  <p className="mb-0 fs-12 text-danger">
                    <i className="ti ti-info-circle me-1"></i>Note: This action will cancel the booking request and remove it from the directory list.
                  </p>
                )}
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={handleCloseModal}>Cancel</button>
                <button 
                  type="button" 
                  className={`btn ${modalState.type === 'approve' ? 'btn-success' : 'btn-danger'} flex-fill py-2`}
                  onClick={handleConfirmAction}
                >
                  Yes, {modalState.type === 'approve' ? 'Approve' : 'Reject'}
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

export default Requests;
