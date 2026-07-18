import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Static database of medical scan results
const INITIAL_MEDICAL_RESULTS = [
  { id: '#MR0025', patientName: 'James Carter', patientImg: 'avatar-31.jpg', gender: 'Male', record: 'Blood Report', date: '17 Jun 2025', findings: 'Complete blood count within normal limits. Cholesterol levels slightly elevated at 210 mg/dL.' },
  { id: '#MR0024', patientName: 'Emily Davis', patientImg: 'avatar-54.jpg', gender: 'Female', record: 'X-ray', date: '10 Jun 2025', findings: 'Chest X-ray shows clear lung fields. No cardiomegaly, pleural effusion, or active infiltrate.' },
  { id: '#MR0023', patientName: 'Michael Johnson', patientImg: 'avatar-45.jpg', gender: 'Male', record: 'Glucose Report', date: '22 May 2025', findings: 'Fasting blood glucose is 95 mg/dL. HbA1c is 5.4%, indicating normal glycemic control.' },
  { id: '#MR0022', patientName: 'Olivia Miller', patientImg: 'avatar-51.jpg', gender: 'Female', record: 'CT Scan', date: '15 May 2025', findings: 'Abdominal CT scan shows normal liver, spleen, pancreas, and kidneys. No lymphadenopathy.' },
  { id: '#MR0021', patientName: 'David Smith', patientImg: 'avatar-41.jpg', gender: 'Male', record: 'Angiogram Record', date: '30 Apr 2025', findings: 'Coronary angiogram shows minor luminal irregularities. No hemodynamically significant stenosis.' },
  { id: '#MR0020', patientName: 'Sophia Wilson', patientImg: 'avatar-48.jpg', gender: 'Female', record: 'MRI Scan', date: '25 Apr 2025', findings: 'Brain MRI reveals no acute ischemic stroke, hemorrhage, mass effect, or demyelinating disease.' },
  { id: '#MR0019', patientName: 'Daniel Williams', patientImg: 'avatar-53.jpg', gender: 'Male', record: 'PET Scan', date: '13 Mar 2025', findings: 'Whole-body PET scan shows normal physiological tracer distribution. No hypermetabolic malignancy.' },
  { id: '#MR0018', patientName: 'Isabella Anderson', patientImg: 'avatar-50.jpg', gender: 'Female', record: 'Doppler Report', date: '16 Feb 2025', findings: 'Carotid duplex Doppler shows normal velocities. No hemodynamically significant stenosis.' },
  { id: '#MR0017', patientName: 'William Brown', patientImg: 'avatar-42.jpg', gender: 'Male', record: 'MRA Scan', date: '20 Jan 2025', findings: 'MRA of head and neck shows patent major cerebral arteries. No aneurysm or stenosis.' },
  { id: '#MR0016', patientName: 'Charlotte Taylor', patientImg: 'avatar-56.jpg', gender: 'Female', record: 'Echocardiogram Report', date: '15 Jan 2025', findings: 'Echocardiogram shows LVEF of 60%. Normal valvular structure. No pericardial effusion.' },
];

const MedicalResults = () => {
  const [resultsList, setResultsList] = useState(INITIAL_MEDICAL_RESULTS);

  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [recordTypeFilter, setRecordTypeFilter] = useState("All");

  const [activeQuery, setActiveQuery] = useState({
    search: "",
    recordType: "All"
  });

  // Modals state
  const [viewModal, setViewModal] = useState({ isOpen: false, item: null });
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, item: null });

  // Reset Filters
  const handleClearFilters = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setRecordTypeFilter("All");
    setActiveQuery({
      search: "",
      recordType: "All"
    });
  };

  // Submit Search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveQuery({
      search: searchQuery,
      recordType: recordTypeFilter
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
      setResultsList(prev => prev.filter(res => res.id !== deleteModal.item.id));
    }
    handleCloseDeleteModal();
  };

  // Refresh
  const handleRefresh = (e) => {
    e.preventDefault();
    setResultsList(INITIAL_MEDICAL_RESULTS);
    handleClearFilters(e);
  };

  // Compute filtered dataset
  const filteredResults = resultsList.filter(res => {
    const term = activeQuery.search.toLowerCase().trim();
    const matchesSearch = term === "" || 
      res.patientName.toLowerCase().includes(term) ||
      res.id.toLowerCase().includes(term) ||
      res.record.toLowerCase().includes(term);

    const matchesType = activeQuery.recordType === "All" || res.record === activeQuery.record;

    return matchesSearch && matchesType;
  });

  // Extract unique record types for dropdown
  const uniqueRecordTypes = Array.from(new Set(resultsList.map(res => res.record)));

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
            <h4 className="mb-1 fw-bold">Medical Results</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Medical Results</li>
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
                <div className="col-md-6 col-lg-5">
                  <label className="form-label fw-medium text-secondary">Search Record</label>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      className="form-control ps-4" 
                      placeholder="Patient name, ID, record type..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="ti ti-search position-absolute start-0 top-50 translate-middle-y ms-2 text-muted"></i>
                  </div>
                </div>

                {/* Record Type dropdown */}
                <div className="col-md-3 col-lg-4">
                  <label className="form-label fw-medium text-secondary">Record Type</label>
                  <select 
                    className="form-select"
                    value={recordTypeFilter}
                    onChange={(e) => setRecordTypeFilter(e.target.value)}
                  >
                    <option value="All">All Types</option>
                    {uniqueRecordTypes.map((t, idx) => (
                      <option key={idx} value={t}>{t}</option>
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
        {(activeQuery.search || activeQuery.recordType !== "All") && (
          <div className="d-flex align-items-center justify-content-between p-3 bg-primary-transparent rounded-2 mb-4 border border-primary-subtle text-primary">
            <div className="d-flex align-items-center gap-2">
              <i className="ti ti-info-circle"></i>
              <p className="fs-13 mb-0">
                Filters Active: 
                {activeQuery.search && ` Keyword "${activeQuery.search}"`}
                {activeQuery.recordType !== "All" && ` Type: ${activeQuery.recordType}`}
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
                <div className="patients-list-kicker mb-2">Diagnostic Imaging</div>
                <h5 className="mb-2 fw-bold">Scan Results Ledger</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="patients-list-total">{filteredResults.length}</span>
                  <span className="patients-list-subtitle">Logged scan records</span>
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
                      <th className="ps-4">Record ID</th>
                      <th>Patient Name</th>
                      <th>Gender</th>
                      <th>Record Name</th>
                      <th>Scan Date</th>
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
                              <p className="mb-0 patients-list-muted">Clinical scan file</p>
                            </div>
                          </div>
                        </td>
                        <td className="fs-14">{res.gender}</td>
                        <td className="fw-semibold text-dark fs-14">{res.record}</td>
                        <td>
                          <div className="patients-list-date">{res.date}</div>
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
                  <i className="ti ti-report-medical text-muted" style={{ fontSize: '3.5rem' }}></i>
                </div>
                <h5 className="fw-semibold">No Medical Reports Found</h5>
                <p className="text-muted fs-14 px-3">We couldn't find any medical results matching active filters. Try adjusting keywords.</p>
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
                  <i className="ti ti-file-text text-primary fs-22"></i>
                  Clinical Findings
                </h5>
                <button type="button" className="btn-close" onClick={() => setViewModal({ isOpen: false, item: null })} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                
                {/* Header info */}
                <div className="p-3 theme-card-bg-light rounded-3 mb-4">
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

                <div className="row g-2 mb-4">
                  <div className="col-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold mb-1 d-block">Record Name</span>
                      <div className="fs-13 fw-bold text-primary">{viewModal.item.record}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold mb-1 d-block">Scan Date</span>
                      <div className="fs-13 fw-semibold text-dark">{viewModal.item.date}</div>
                    </div>
                  </div>
                </div>

                {/* Findings text */}
                <div>
                  <h5 className="fw-bold mb-2">Findings & Diagnosis</h5>
                  <div className="p-3 bg-light rounded-3 border fs-13 text-secondary" style={{ lineHeight: '1.6' }}>
                    {viewModal.item.findings}
                  </div>
                </div>

              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-primary" onClick={() => setViewModal({ isOpen: false, item: null })}>Close File</button>
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
                  Delete Medical Record
                </h5>
                <button type="button" className="btn-close" onClick={handleCloseDeleteModal} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-2 fs-14 text-secondary">
                  Are you sure you want to permanently delete this medical result record:
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
                      <p className="mb-0 text-muted fs-12">ID: {deleteModal.item.id} | Scan Type: {deleteModal.item.record}</p>
                    </div>
                  </div>
                </div>
                <p className="mb-0 fs-12 text-danger">
                  <i className="ti ti-info-circle me-1"></i>Note: This record will be permanently purged from the patient's medical result history.
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

export default MedicalResults;
