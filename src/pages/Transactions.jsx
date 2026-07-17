import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Static database of transactions
const INITIAL_TRANSACTIONS = [
  { id: '#TS0025', patientName: 'James Carter', patientImg: 'avatar-05.jpg', desc: 'Payment for a follow-up appointment', date: '17 Jun 2025', amount: '$500', method: 'Cash', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#TS0024', patientName: 'Emily Davis', patientImg: 'avatar-34.jpg', desc: 'Diagnostic Test Payment', date: '10 Jun 2025', amount: '$500', method: 'Paytm', status: 'Pending', statusClass: 'badge-soft-warning' },
  { id: '#TS0023', patientName: 'Michael Johnson', patientImg: 'avatar-06.jpg', desc: 'Fee for consultations with a Doctor', date: '22 May 2025', amount: '$300', method: 'Paytm', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#TS0022', patientName: 'Olivia Miller', patientImg: 'avatar-25.jpg', desc: 'Medical Equipment Purchase Payment', date: '15 May 2025', amount: '$200', method: 'Paytm', status: 'Pending', statusClass: 'badge-soft-warning' },
  { id: '#TS0021', patientName: 'David Smith', patientImg: 'avatar-14.jpg', desc: 'Flu Shot or Vaccination', date: '30 Apr 2025', amount: '$100', method: 'Cash', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#TS0020', patientName: 'Sophia Wilson', patientImg: 'avatar-22.jpg', desc: 'Medication Refill Fee Payment', date: '25 Apr 2025', amount: '$600', method: 'Paytm', status: 'Pending', statusClass: 'badge-soft-warning' },
  { id: '#TS0019', patientName: 'Daniel Williams', patientImg: 'avatar-30.jpg', desc: 'Physical Therapy Session Payment', date: '13 Mar 2025', amount: '$700', method: 'Cash', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#TS0018', patientName: 'Isabella Anderson', patientImg: 'avatar-24.jpg', desc: 'Vision Exam Payment', date: '16 Feb 2025', amount: '$800', method: 'Paytm', status: 'Pending', statusClass: 'badge-soft-warning' },
  { id: '#TS0017', patientName: 'William Brown', patientImg: 'avatar-15.jpg', desc: 'X-ray or Imaging Payment', date: '20 Jan 2025', amount: '$900', method: 'Cash', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#TS0016', patientName: 'Charlotte Taylor', patientImg: 'avatar-39.jpg', desc: 'Allergy Testing Service Payment', date: '15 Jan 2025', amount: '$500', method: 'Paytm', status: 'Pending', statusClass: 'badge-soft-warning' },
];

const Transactions = () => {
  const [transactionsList, setTransactionsList] = useState(INITIAL_TRANSACTIONS);
  
  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [methodFilter, setMethodFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [activeQuery, setActiveQuery] = useState({
    search: "",
    method: "All",
    status: "All"
  });

  // Modal State
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    transaction: null
  });

  // Reset Filters
  const handleClearFilters = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setMethodFilter("All");
    setStatusFilter("All");
    setActiveQuery({
      search: "",
      method: "All",
      status: "All"
    });
  };

  // Submit Search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveQuery({
      search: searchQuery,
      method: methodFilter,
      status: statusFilter
    });
  };

  // Delete Handlers
  const handleOpenDeleteModal = (transaction, e) => {
    e.preventDefault();
    setDeleteModal({
      isOpen: true,
      transaction
    });
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      transaction: null
    });
  };

  const handleConfirmDelete = () => {
    if (deleteModal.transaction) {
      setTransactionsList(prev => prev.filter(t => t.id !== deleteModal.transaction.id));
    }
    handleCloseDeleteModal();
  };

  // Refresh
  const handleRefresh = (e) => {
    e.preventDefault();
    setTransactionsList(INITIAL_TRANSACTIONS);
    handleClearFilters(e);
  };

  // Filter computation
  const filteredTransactions = transactionsList.filter(t => {
    const term = activeQuery.search.toLowerCase().trim();
    const matchesSearch = term === "" || 
      t.patientName.toLowerCase().includes(term) ||
      t.id.toLowerCase().includes(term) ||
      t.desc.toLowerCase().includes(term);

    const matchesMethod = activeQuery.method === "All" || t.method === activeQuery.method;
    const matchesStatus = activeQuery.status === "All" || t.status === activeQuery.status;

    return matchesSearch && matchesMethod && matchesStatus;
  });

  return (
    <>
      <div className="content patients-list-page">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Transactions</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Transactions</li>
            </ol>
          </div>
          <div className="patients-list-toolbar d-flex align-items-center gap-2 flex-wrap">
            <button type="button" className="btn btn-icon btn-light" onClick={handleRefresh} title="Refresh"><i className="ti ti-refresh"></i></button>
            <button type="button" className="btn btn-icon btn-light" onClick={() => window.print()} title="Print"><i className="ti ti-printer"></i></button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="row row-gap-3 row-cols-1 row-cols-xl-6 row-cols-md-3 row-cols-sm-2">
              <div className="col text-center border-sm-end">
                <p className="mb-1 text-truncate fs-13 text-secondary">Total Transactions</p>
                <h5 className="fw-bold mb-0 text-dark">$54,644.54</h5>
              </div>
              <div className="col text-center border-md-end">
                <p className="mb-1 text-truncate fs-13 text-secondary">Last Month</p>
                <h5 className="fw-bold mb-0 text-dark">$4,64,454</h5>
              </div>
              <div className="col text-center border-sm-end border-md-0 border-xl-end">
                <p className="mb-1 text-truncate fs-13 text-secondary">This Month</p>
                <h5 className="fw-bold mb-0 text-dark">$2,45,445 <span className="ms-1"><i className="ti ti-square-rounded-chevron-up-filled text-success"></i></span></h5>
              </div>
              <div className="col text-center border-md-end">
                <p className="mb-1 text-truncate fs-13 text-secondary">Last week</p>
                <h5 className="fw-bold mb-0 text-dark">$2,64,454 <span className="ms-1"><i className="ti ti-square-rounded-chevron-down-filled text-danger"></i></span></h5>
              </div>
              <div className="col text-center border-sm-end">
                <p className="mb-1 text-truncate fs-13 text-secondary">This Week</p>
                <h5 className="fw-bold mb-0 text-dark">$2,45,445 <span className="ms-1"><i className="ti ti-square-rounded-chevron-up-filled text-success"></i></span></h5>
              </div>
              <div className="col text-center">
                <p className="mb-1 text-truncate fs-13 text-secondary">Today</p>
                <h5 className="fw-bold mb-0 text-dark">$2,45,445 <span className="ms-1"><i className="ti ti-square-rounded-chevron-up-filled text-success"></i></span></h5>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section Placeholder */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body pb-1">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fs-16 fw-semibold mb-0 text-truncate">Transaction Trends</h6>
              <div className="dropdown">
                <a href="#/" className="dropdown-toggle btn btn-sm btn-outline-light border d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  <i className="ti ti-calendar me-1"></i>2025
                </a>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li><a href="#/" className="dropdown-item rounded-1">2025</a></li>
                  <li><a href="#/" className="dropdown-item rounded-1">2024</a></li>
                  <li><a href="#/" className="dropdown-item rounded-1">2023</a></li>
                </ul>
              </div>
            </div>
            {/* Visual spacer instead of missing chart script dependency */}
            <div className="chart-set bg-light rounded-3 d-flex align-items-center justify-content-center border" style={{ height: '240px' }} id="transaction-chart">
              <div className="text-center text-muted">
                <i className="ti ti-chart-bar fs-32 mb-2"></i>
                <p className="fs-13 mb-0">Monthly transaction breakdown active</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Card */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="row g-3">
                {/* Search Text Input */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label fw-medium text-secondary">Search Transaction</label>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      className="form-control ps-4" 
                      placeholder="Patient, ID, description..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="ti ti-search position-absolute start-0 top-50 translate-middle-y ms-2 text-muted"></i>
                  </div>
                </div>

                {/* Method dropdown */}
                <div className="col-md-3 col-lg-3">
                  <label className="form-label fw-medium text-secondary">Payment Method</label>
                  <select 
                    className="form-select"
                    value={methodFilter}
                    onChange={(e) => setMethodFilter(e.target.value)}
                  >
                    <option value="All">All Methods</option>
                    <option value="Cash">Cash</option>
                    <option value="Paytm">Paytm</option>
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
                    <option value="Completed">Completed</option>
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
        {(activeQuery.search || activeQuery.method !== "All" || activeQuery.status !== "All") && (
          <div className="d-flex align-items-center justify-content-between p-3 bg-primary-transparent rounded-2 mb-4 border border-primary-subtle text-primary">
            <div className="d-flex align-items-center gap-2">
              <i className="ti ti-info-circle"></i>
              <p className="fs-13 mb-0">
                Filters Active: 
                {activeQuery.search && ` Keyword "${activeQuery.search}"`}
                {activeQuery.method !== "All" && ` Method: ${activeQuery.method}`}
                {activeQuery.status !== "All" && ` Status: ${activeQuery.status}`}
              </p>
            </div>
            <button type="button" className="btn btn-sm btn-link text-primary p-0 text-decoration-none fw-semibold" onClick={handleClearFilters}>
              Reset Filters
            </button>
          </div>
        )}

        {/* Card Shell */}
        <div className="card border-0 shadow-sm patients-list-shell">
          <div className="card-body p-4 border-bottom patients-list-hero">
            <div className="d-flex align-items-start justify-content-between gap-3 flex-wrap">
              <div>
                <div className="patients-list-kicker mb-2">Ledger Directory</div>
                <h5 className="mb-2 fw-bold">Active Receipts</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="patients-list-total">{filteredTransactions.length}</span>
                  <span className="patients-list-subtitle">Patient ledger payments</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            {filteredTransactions.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-modern patients-list-table mb-0 align-middle">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }} className="ps-4">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" id="select-all" />
                        </div>
                      </th>
                      <th>ID</th>
                      <th>Patient Name</th>
                      <th>Description</th>
                      <th>Transaction Date</th>
                      <th>Amount</th>
                      <th>Payment Method</th>
                      <th>Status</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTransactions.map(t => (
                      <tr key={t.id} className="hover-row">
                        <td className="ps-4">
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <Link to="/transaction-details" className="fw-semibold text-primary text-decoration-none">
                            {t.id}
                          </Link>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <Link to="/patient-details" className="avatar avatar-md patients-list-avatar flex-shrink-0">
                              <img 
                                src={`/assets/img/avatars/${t.patientImg}`} 
                                alt={t.patientName} 
                                className="rounded-circle"
                                onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                              />
                            </Link>
                            <div>
                              <h6 className="mb-1 fs-14 fw-semibold">
                                <Link to="/patient-details" className="text-decoration-none patients-list-link-dark">
                                  {t.patientName}
                                </Link>
                              </h6>
                              <p className="mb-0 patients-list-muted">Billing account</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="mb-0 text-muted fs-14" style={{ maxWidth: '280px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                            {t.desc}
                          </p>
                        </td>
                        <td>
                          <div className="patients-list-date">{t.date}</div>
                        </td>
                        <td className="fw-semibold text-dark fs-14">{t.amount}</td>
                        <td>
                          <span className="patients-list-pill py-1 px-3 fs-12">{t.method}</span>
                        </td>
                        <td>
                          <span className={`badge patients-list-badge ${t.statusClass}`}>
                            {t.status}
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="dropdown">
                            <button className="btn btn-icon btn-sm patients-list-action" data-bs-toggle="dropdown" aria-label="more options">
                              <i className="ti ti-dots-vertical"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-clean p-1">
                              <li>
                                <Link to="/transaction-details" className="dropdown-item d-flex align-items-center gap-2 py-2">
                                  <i className="ti ti-eye fs-15 text-muted"></i>View Details
                                </Link>
                              </li>
                              <li><hr className="dropdown-divider" /></li>
                              <li>
                                <a 
                                  href="#/" 
                                  className="dropdown-item rounded-1 d-flex align-items-center gap-2 py-2 text-danger"
                                  onClick={(e) => handleOpenDeleteModal(t, e)}
                                >
                                  <i className="ti ti-trash fs-15"></i>Void record
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
                  <i className="ti ti-currency-dollar-off text-muted" style={{ fontSize: '3.5rem' }}></i>
                </div>
                <h5 className="fw-semibold">No Receipts Found</h5>
                <p className="text-muted fs-14 px-3">We couldn't find any transaction matching active filters. Try adjusting keywords.</p>
                <button type="button" className="btn btn-primary btn-sm mt-2" onClick={handleClearFilters}>
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Void Stateful confirmation Modal */}
      {deleteModal.isOpen && deleteModal.transaction && (
        <div className="modal-backdrop fade show"></div>
      )}
      {deleteModal.isOpen && deleteModal.transaction && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-alert-circle text-danger fs-22"></i>
                  Void Transaction
                </h5>
                <button type="button" className="btn-close" onClick={handleCloseDeleteModal} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-2 fs-14 text-secondary">
                  Are you sure you want to void and remove this transaction receipt?
                </p>
                <div className="p-3 bg-light rounded-3 mb-3 border">
                  <div className="d-flex align-items-center gap-3">
                    <img 
                      src={`/assets/img/avatars/${deleteModal.transaction.patientImg}`} 
                      alt={deleteModal.transaction.patientName} 
                      className="avatar avatar-md rounded-circle border"
                      onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                    />
                    <div>
                      <h6 className="mb-1 fw-bold text-dark">{deleteModal.transaction.patientName}</h6>
                      <p className="mb-0 text-muted fs-12">Receipt: {deleteModal.transaction.id} | Amount: {deleteModal.transaction.amount}</p>
                    </div>
                  </div>
                  <hr className="my-2 text-muted opacity-25" />
                  <div className="fs-12 text-secondary">
                    <i className="ti ti-calendar me-1"></i>Date: {deleteModal.transaction.date} | Method: {deleteModal.transaction.method}
                  </div>
                </div>
                <p className="mb-0 fs-12 text-danger">
                  <i className="ti ti-info-circle me-1"></i>Warning: Voiding this record removes it permanently from EMR accounting.
                </p>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={handleCloseDeleteModal}>Close</button>
                <button 
                  type="button" 
                  className="btn btn-danger flex-fill py-2"
                  onClick={handleConfirmDelete}
                >
                  Yes, Void Record
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

export default Transactions;
