import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Static database of laboratory results
const INITIAL_LAB_RESULTS = [
  { id: '#TE0025', patientName: 'James Carter', patientImg: 'avatar-31.jpg', gender: 'Male', date: '17 Jun 2025', doctorName: 'Dr. Andrew Clark', doctorImg: 'doctor-01.jpg', testName: 'Blood Test', status: 'Received', statusClass: 'badge-soft-success', report: [
    { parameter: 'Hemoglobin', value: '14.2 g/dL', normalRange: '13.5 - 17.5 g/dL', status: 'Normal' },
    { parameter: 'White Blood Cell (WBC)', value: '6.8 x10³/µL', normalRange: '4.5 - 11.0 x10³/µL', status: 'Normal' },
    { parameter: 'Platelet Count', value: '250 x10³/µL', normalRange: '150 - 450 x10³/µL', status: 'Normal' }
  ] },
  { id: '#TE0024', patientName: 'Emily Davis', patientImg: 'avatar-54.jpg', gender: 'Female', date: '10 Jun 2025', doctorName: 'Dr. Katherine Brooks', doctorImg: 'doctor-03.jpg', testName: 'Urinalysis', status: 'In Progress', statusClass: 'badge-soft-info', report: [
    { parameter: 'Color', value: 'Straw Yellow', normalRange: 'Pale to Dark Yellow', status: 'Normal' },
    { parameter: 'Clarity', value: 'Clear', normalRange: 'Clear', status: 'Normal' },
    { parameter: 'Specific Gravity', value: '1.015', normalRange: '1.002 - 1.030', status: 'Normal' }
  ] },
  { id: '#TE0023', patientName: 'Michael Johnson', patientImg: 'avatar-45.jpg', gender: 'Male', date: '22 May 2025', doctorName: 'Dr. Benjamin Harris', doctorImg: 'doctor-04.jpg', testName: 'Throat Culture', status: 'Pending', statusClass: 'badge-soft-warning', report: [] },
  { id: '#TE0022', patientName: 'Olivia Miller', patientImg: 'avatar-51.jpg', gender: 'Female', date: '15 May 2025', doctorName: 'Dr. Laura Mitchell', doctorImg: 'doctor-05.jpg', testName: 'Iron Panel', status: 'Received', statusClass: 'badge-soft-success', report: [
    { parameter: 'Serum Iron', value: '115 µg/dL', normalRange: '50 - 170 µg/dL', status: 'Normal' },
    { parameter: 'Ferritin', value: '98 ng/mL', normalRange: '10 - 150 ng/mL', status: 'Normal' }
  ] },
  { id: '#TE0021', patientName: 'David Smith', patientImg: 'avatar-41.jpg', gender: 'Male', date: '30 Apr 2025', doctorName: 'Dr. Christopher Lewis', doctorImg: 'doctor-06.jpg', testName: 'Vitamin D Test', status: 'In Progress', statusClass: 'badge-soft-info', report: [
    { parameter: '25-hydroxyvitamin D', value: '28 ng/mL', normalRange: '30 - 100 ng/mL', status: 'Deficient' }
  ] },
  { id: '#TE0020', patientName: 'Sophia Wilson', patientImg: 'avatar-48.jpg', gender: 'Female', date: '25 Apr 2025', doctorName: 'Dr. Natalie Foster', doctorImg: 'doctor-07.jpg', testName: 'Liver Function Test', status: 'Pending', statusClass: 'badge-soft-warning', report: [] },
  { id: '#TE0019', patientName: 'Daniel Williams', patientImg: 'avatar-53.jpg', gender: 'Male', date: '13 Mar 2025', doctorName: 'Dr. Jonathan Adams', doctorImg: 'doctor-10.jpg', testName: 'Thyroid Test', status: 'Received', statusClass: 'badge-soft-success', report: [
    { parameter: 'TSH', value: '2.1 mIU/L', normalRange: '0.4 - 4.0 mIU/L', status: 'Normal' },
    { parameter: 'Free T4', value: '1.2 ng/dL', normalRange: '0.8 - 1.8 ng/dL', status: 'Normal' }
  ] },
  { id: '#TE0018', patientName: 'Isabella Anderson', patientImg: 'avatar-50.jpg', gender: 'Female', date: '16 Feb 2025', doctorName: 'Dr. Rebecca Scott', doctorImg: 'doctor-08.jpg', testName: 'Lipid Panel', status: 'In Progress', statusClass: 'badge-soft-info', report: [
    { parameter: 'Total Cholesterol', value: '210 mg/dL', normalRange: '< 200 mg/dL', status: 'High' }
  ] },
  { id: '#TE0017', patientName: 'William Brown', patientImg: 'avatar-42.jpg', gender: 'Male', date: '20 Jan 2025', doctorName: 'Dr. Samuel Turner', doctorImg: 'doctor-12.jpg', testName: 'Troponin Test', status: 'Pending', statusClass: 'badge-soft-warning', report: [] },
  { id: '#TE0016', patientName: 'Charlotte Taylor', patientImg: 'avatar-56.jpg', gender: 'Female', date: '15 Jan 2025', doctorName: 'Dr. Victoria Evans', doctorImg: 'doctor-11.jpg', testName: 'Hepatitis Panel', status: 'Received', statusClass: 'badge-soft-success', report: [
    { parameter: 'Hep B Surface Antigen', value: 'Non-reactive', normalRange: 'Non-reactive', status: 'Normal' }
  ] },
];

const LabResults = () => {
  const [labResults, setLabResults] = useState(INITIAL_LAB_RESULTS);

  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [testFilter, setTestFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [activeQuery, setActiveQuery] = useState({
    search: "",
    test: "All",
    status: "All"
  });

  // Modals state
  const [viewModal, setViewModal] = useState({ isOpen: false, item: null });
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, item: null });

  // Reset Filters
  const handleClearFilters = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setTestFilter("All");
    setStatusFilter("All");
    setActiveQuery({
      search: "",
      test: "All",
      status: "All"
    });
  };

  // Submit Search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveQuery({
      search: searchQuery,
      test: testFilter,
      status: statusFilter
    });
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
      setLabResults(prev => prev.filter(res => res.id !== deleteModal.item.id));
    }
    handleCloseDeleteModal();
  };

  // Refresh
  const handleRefresh = (e) => {
    e.preventDefault();
    setLabResults(INITIAL_LAB_RESULTS);
    handleClearFilters(e);
  };

  // Compute filtered dataset
  const filteredResults = labResults.filter(res => {
    const term = activeQuery.search.toLowerCase().trim();
    const matchesSearch = term === "" || 
      res.patientName.toLowerCase().includes(term) ||
      res.id.toLowerCase().includes(term) ||
      res.doctorName.toLowerCase().includes(term);

    const matchesTest = activeQuery.test === "All" || res.testName === activeQuery.test;
    const matchesStatus = activeQuery.status === "All" || res.status === activeQuery.status;

    return matchesSearch && matchesTest && matchesStatus;
  });

  // Extract unique tests for filter select dropdown
  const uniqueTests = Array.from(new Set(labResults.map(res => res.testName)));

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
            <h4 className="mb-1 fw-bold">Lab Results</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Lab Results</li>
            </ol>
          </div>
          <div className="patients-list-toolbar d-flex align-items-center gap-2 flex-wrap">
            <button type="button" className="btn btn-icon btn-light" onClick={handleRefresh} title="Refresh"><i className="ti ti-refresh"></i></button>
            <button type="button" className="btn btn-icon btn-light" onClick={() => window.print()} title="Print"><i className="ti ti-printer"></i></button>
          </div>
        </div>

        {/* Filter Card */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="row g-3">
                {/* Search Text Input */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label fw-medium text-secondary">Search Record</label>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      className="form-control ps-4" 
                      placeholder="Patient, doctor, test ID..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="ti ti-search position-absolute start-0 top-50 translate-middle-y ms-2 text-muted"></i>
                  </div>
                </div>

                {/* Test Name dropdown */}
                <div className="col-md-3 col-lg-3">
                  <label className="form-label fw-medium text-secondary">Diagnostic Test</label>
                  <select 
                    className="form-select"
                    value={testFilter}
                    onChange={(e) => setTestFilter(e.target.value)}
                  >
                    <option value="All">All Diagnostics</option>
                    {uniqueTests.map((t, idx) => (
                      <option key={idx} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Status dropdown */}
                <div className="col-md-3 col-lg-2">
                  <label className="form-label fw-medium text-secondary">Status</label>
                  <select 
                    className="form-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="All">All Statuses</option>
                    <option value="Received">Received</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>

                {/* Action buttons */}
                <div className="col-md-12 col-lg-3 d-flex align-items-end gap-2">
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
        {(activeQuery.search || activeQuery.test !== "All" || activeQuery.status !== "All") && (
          <div className="d-flex align-items-center justify-content-between p-3 bg-primary-transparent rounded-2 mb-4 border border-primary-subtle text-primary">
            <div className="d-flex align-items-center gap-2">
              <i className="ti ti-info-circle"></i>
              <p className="fs-13 mb-0">
                Filters Active: 
                {activeQuery.search && ` Keyword "${activeQuery.search}"`}
                {activeQuery.test !== "All" && ` Test: ${activeQuery.test}`}
                {activeQuery.status !== "All" && ` Status: ${activeQuery.status}`}
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
                <div className="patients-list-kicker mb-2">Clinical Diagnostics</div>
                <h5 className="mb-2 fw-bold">Lab Registry</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="patients-list-total">{filteredResults.length}</span>
                  <span className="patients-list-subtitle">Logged diagnostic reports</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            {filteredResults.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-modern patients-list-table mb-0 align-middle">
                  <thead>
                    <tr>
                      <th className="ps-4">Test ID</th>
                      <th>Patient Name</th>
                      <th>Gender</th>
                      <th>Appointment Date</th>
                      <th>Referred By</th>
                      <th>Test Name</th>
                      <th>Status</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResults.map(res => (
                      <tr key={res.id} className="hover-row">
                        <td className="ps-4">
                          <button 
                            type="button" 
                            className="btn btn-link text-primary p-0 text-decoration-none fw-bold"
                            onClick={() => setViewModal({ isOpen: true, item: res })}
                          >
                            {res.id}
                          </button>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <Link to="/patient-details" className="avatar avatar-md patients-list-avatar flex-shrink-0">
                              <img 
                                src={`/assets/img/avatars/${res.patientImg}`} 
                                alt={res.patientName} 
                                className="rounded-circle"
                                onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                              />
                            </Link>
                            <div>
                              <h6 className="mb-1 fs-14 fw-semibold">
                                <Link to="/patient-details" className="text-decoration-none patients-list-link-dark">
                                  {res.patientName}
                                </Link>
                              </h6>
                              <p className="mb-0 patients-list-muted">Laboratory panel</p>
                            </div>
                          </div>
                        </td>
                        <td className="fs-14">{res.gender}</td>
                        <td>
                          <div className="patients-list-date">{res.date}</div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <Link to="/doctor-details" className="avatar avatar-sm flex-shrink-0">
                              <img 
                                src={`/assets/img/doctors/${res.doctorImg}`} 
                                alt={res.doctorName} 
                                className="rounded-circle"
                                onError={(e) => { e.target.src = "/assets/img/doctors/doctor-01.jpg" }} 
                              />
                            </Link>
                            <div>
                              <Link to="/doctor-details" className="text-decoration-none fw-medium patients-list-link-dark fs-13">
                                {res.doctorName}
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className="fw-semibold text-dark fs-14">{res.testName}</td>
                        <td>
                          <span className={`badge patients-list-badge ${res.statusClass}`}>
                            {res.status}
                          </span>
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
                                  onClick={() => setViewModal({ isOpen: true, item: res })}
                                >
                                  <i className="ti ti-eye fs-15 text-muted"></i>View Details
                                </button>
                              </li>
                              <li><hr className="dropdown-divider" /></li>
                              <li>
                                <a 
                                  href="#/" 
                                  className="dropdown-item rounded-1 d-flex align-items-center gap-2 py-2 text-danger"
                                  onClick={(e) => handleOpenDeleteModal(res, e)}
                                >
                                  <i className="ti ti-trash fs-15"></i>Delete record
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
                  <i className="ti ti-microscope text-muted" style={{ fontSize: '3.5rem' }}></i>
                </div>
                <h5 className="fw-semibold">No Lab Records Found</h5>
                <p className="text-muted fs-14 px-3">We couldn't find any lab results matching active filters. Try adjusting keywords.</p>
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
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg animate-fade-in">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-microscope text-primary fs-22"></i>
                  Lab Report Summary
                </h5>
                <button type="button" className="btn-close" onClick={() => setViewModal({ isOpen: false, item: null })} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                
                {/* Header overview */}
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold tracking-wider mb-2.5 d-block">Patient Information</span>
                      <div className="d-flex align-items-center gap-3">
                        <img 
                          src={`/assets/img/avatars/${viewModal.item.patientImg}`} 
                          alt={viewModal.item.patientName} 
                          className="avatar avatar-md rounded-circle border"
                          onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                        />
                        <div>
                          <h6 className="mb-0.5 fw-bold text-dark fs-14">{viewModal.item.patientName}</h6>
                          <p className="mb-0 text-muted fs-12">Gender: {viewModal.item.gender} | ID: {viewModal.item.id}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold tracking-wider mb-2.5 d-block">Test Assignment</span>
                      <div className="d-flex align-items-center gap-3">
                        <img 
                          src={`/assets/img/doctors/${viewModal.item.doctorImg}`} 
                          alt={viewModal.item.doctorName} 
                          className="avatar avatar-md rounded-circle border"
                          onError={(e) => { e.target.src = "/assets/img/doctors/doctor-01.jpg" }} 
                        />
                        <div>
                          <h6 className="mb-0.5 fw-bold text-dark fs-14">{viewModal.item.doctorName}</h6>
                          <p className="mb-0 text-muted fs-12">Referral Doctor | Date: {viewModal.item.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Report breakdown */}
                <div>
                  <h5 className="fw-bold mb-3">Diagnostic Results: <span className="text-primary">{viewModal.item.testName}</span></h5>
                  
                  {viewModal.item.report && viewModal.item.report.length > 0 ? (
                    <div className="table-responsive">
                      <table className="table table-bordered align-middle text-center mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>Parameter</th>
                            <th>Value</th>
                            <th>Reference Interval</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {viewModal.item.report.map((rep, idx) => (
                            <tr key={idx}>
                              <td className="text-start fw-semibold">{rep.parameter}</td>
                              <td className="fw-bold text-dark">{rep.value}</td>
                              <td>{rep.normalRange}</td>
                              <td>
                                <span className={`badge ${rep.status === 'Normal' ? 'bg-success-transparent text-success' : 'bg-danger-transparent text-danger'} rounded-pill px-2.5 py-1 fs-11`}>
                                  {rep.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-4 bg-light rounded-3 border">
                      <i className="ti ti-clock-hour-4 text-muted fs-28 mb-1.5 d-block"></i>
                      <h6 className="fw-semibold text-secondary mb-1">Result status: {viewModal.item.status}</h6>
                      <p className="text-muted fs-12 mb-0 px-4">This laboratory work is still being processed. Baselines will display once analysis is signed.</p>
                    </div>
                  )}
                </div>

              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-primary" onClick={() => setViewModal({ isOpen: false, item: null })}>Close Report</button>
              </div>
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
                  Delete Lab Record
                </h5>
                <button type="button" className="btn-close" onClick={handleCloseDeleteModal} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-2 fs-14 text-secondary">
                  Are you sure you want to permanently delete this lab diagnostic entry:
                </p>
                <div className="p-3 bg-light rounded-3 mb-3 border theme-card-bg-light">
                  <div className="d-flex align-items-center gap-3">
                    <img 
                      src={`/assets/img/avatars/${deleteModal.item.patientImg}`} 
                      alt={deleteModal.item.patientName} 
                      className="avatar avatar-md rounded-circle border"
                      onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                    />
                    <div>
                      <h6 className="mb-1 fw-bold text-dark">{deleteModal.item.patientName}</h6>
                      <p className="mb-0 text-muted fs-12">ID: {deleteModal.item.id} | Test: {deleteModal.item.testName}</p>
                    </div>
                  </div>
                </div>
                <p className="mb-0 fs-12 text-danger">
                  <i className="ti ti-info-circle me-1"></i>Note: This record will be permanently purged from the patient's lab ledger history.
                </p>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={handleCloseDeleteModal}>Close</button>
                <button 
                  type="button" 
                  className="btn btn-danger flex-fill py-2"
                  onClick={handleConfirmDelete}
                >
                  Yes, Delete Record
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

export default LabResults;
