import { Link } from 'react-router-dom';
import '../../style/css/Applications.css';

const Invoice = () => {
  const invoices = [
    { id: '#IV0025', patient: 'James Carter', avatar: 'avatar-21.jpg', created: '17 Jun 2025', amount: '$500', due: '$50', dueDate: '17 Jun 2025', status: 'Paid', statusColor: 'bg-success' },
    { id: '#IV0024', patient: 'Emily Davis', avatar: 'avatar-22.jpg', created: '10 Jun 2025', amount: '$500', due: '$50', dueDate: '10 Jun 2025', status: 'Overdue', statusColor: 'bg-danger' },
    { id: '#IV0023', patient: 'Michael Johnson', avatar: 'avatar-23.jpg', created: '22 May 2025', amount: '$300', due: '$30', dueDate: '22 May 2025', status: 'Draft', statusColor: 'bg-info' },
    { id: '#IV0022', patient: 'Olivia Miller', avatar: 'avatar-24.jpg', created: '15 May 2025', amount: '$200', due: '$20', dueDate: '15 May 2025', status: 'Pending', statusColor: 'bg-warning' },
    { id: '#IV0021', patient: 'David Smith', avatar: 'avatar-25.jpg', created: '30 Apr 2025', amount: '$100', due: '$10', dueDate: '30 Apr 2025', status: 'Paid', statusColor: 'bg-success' },
    { id: '#IV0020', patient: 'Sophia Wilson', avatar: 'avatar-26.jpg', created: '25 Apr 2025', amount: '$600', due: '$60', dueDate: '25 Apr 2025', status: 'Overdue', statusColor: 'bg-danger' },
    { id: '#IV0019', patient: 'Daniel Williams', avatar: 'avatar-27.jpg', created: '13 Mar 2025', amount: '$700', due: '$70', dueDate: '13 Mar 2025', status: 'Draft', statusColor: 'bg-info' },
    { id: '#IV0018', patient: 'Isabella Anderson', avatar: 'avatar-28.jpg', created: '16 Feb 2025', amount: '$800', due: '$80', dueDate: '16 Feb 2025', status: 'Pending', statusColor: 'bg-warning' },
  ];

  return (
    <>
      <div className="content">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div className="breadcrumb-arrow">
            <h4 className="mb-1">Invoice</h4>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item"><span className="text-decoration-none text-muted">Applications</span></li>
                <li className="breadcrumb-item active">Invoice</li>
              </ol>
            </div>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <button className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" aria-label="Refresh"><i className="ti ti-refresh"></i></button>
            <button className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" aria-label="Print"><i className="ti ti-printer"></i></button>
            <button className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" aria-label="Download"><i className="ti ti-cloud-download"></i></button>
            <Link to="/add-invoice" className="btn btn-primary premium-btn px-4 rounded-pill shadow-sm d-flex align-items-center"><i className="ti ti-plus me-2"></i>New Invoice</Link>
          </div>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-xl-3 col-md-6 d-flex">
            <div className="premium-card border p-4 shadow-sm flex-fill position-relative overflow-hidden group">
              <div className="position-absolute end-0 top-0 mt-3 me-3 opacity-25 group-hover-opacity-50 transition-all">
                <i className="ti ti-receipt-2 display-4 text-primary"></i>
              </div>
              <p className="fs-14 fw-medium text-muted mb-2">Total Invoice</p>
              <h3 className="fw-bold mb-3">$245,445</h3>
              <p className="d-flex align-items-center fs-13 mb-0 fw-medium">
                <span className="text-success bg-success bg-opacity-10 px-2 py-1 rounded-pill me-2"><i className="ti ti-arrow-up-right me-1"></i>+31%</span>
                <span className="text-muted">From Last Month</span>
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex">
            <div className="premium-card border p-4 shadow-sm flex-fill position-relative overflow-hidden group">
              <div className="position-absolute end-0 top-0 mt-3 me-3 opacity-25 group-hover-opacity-50 transition-all">
                <i className="ti ti-file-alert display-4 text-pink"></i>
              </div>
              <p className="fs-14 fw-medium text-muted mb-2">Unpaid Invoice</p>
              <h3 className="fw-bold mb-3">$50,000</h3>
              <p className="d-flex align-items-center fs-13 mb-0 fw-medium">
                <span className="text-danger bg-danger bg-opacity-10 px-2 py-1 rounded-pill me-2"><i className="ti ti-arrow-down-right me-1"></i>-15%</span>
                <span className="text-muted">From Last Month</span>
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex">
            <div className="premium-card border p-4 shadow-sm flex-fill position-relative overflow-hidden group">
              <div className="position-absolute end-0 top-0 mt-3 me-3 opacity-25 group-hover-opacity-50 transition-all">
                <i className="ti ti-file-time display-4 text-indigo"></i>
              </div>
              <p className="fs-14 fw-medium text-muted mb-2">Pending Invoice</p>
              <h3 className="fw-bold mb-3">$45,000</h3>
              <p className="d-flex align-items-center fs-13 mb-0 fw-medium">
                <span className="text-success bg-success bg-opacity-10 px-2 py-1 rounded-pill me-2"><i className="ti ti-arrow-up-right me-1"></i>+48%</span>
                <span className="text-muted">From Last Month</span>
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex">
            <div className="premium-card border p-4 shadow-sm flex-fill position-relative overflow-hidden group">
              <div className="position-absolute end-0 top-0 mt-3 me-3 opacity-25 group-hover-opacity-50 transition-all">
                <i className="ti ti-calendar-exclamation display-4 text-warning"></i>
              </div>
              <p className="fs-14 fw-medium text-muted mb-2">Overdue Invoice</p>
              <h3 className="fw-bold mb-3">$250,550</h3>
              <p className="d-flex align-items-center fs-13 mb-0 fw-medium">
                <span className="text-success bg-success bg-opacity-10 px-2 py-1 rounded-pill me-2"><i className="ti ti-arrow-up-right me-1"></i>+39%</span>
                <span className="text-muted">From Last Month</span>
              </p>
            </div>
          </div>
        </div>

        <div className="premium-card border p-0 shadow-lg">
          <div className="p-4 border-bottom d-flex align-items-center justify-content-between bg-light bg-opacity-50">
            <h5 className="fw-bold mb-0 d-flex align-items-center">
              Total Invoices <span className="badge bg-danger ms-3 rounded-pill">658</span>
            </h5>
            <div className="d-flex align-items-center gap-3">
              <div className="input-group input-group-sm rounded-pill border bg-white px-3 py-1 shadow-sm" style={{ width: '250px' }}>
                <i className="ti ti-search text-muted mt-1 me-2"></i>
                <input type="text" className="form-control border-0 bg-transparent shadow-none p-0" placeholder="Search Invoices..." />
              </div>
              <div className="dropdown">
                <button className="btn btn-white btn-sm px-3 rounded-pill border shadow-sm fw-medium d-flex align-items-center" data-bs-toggle="dropdown">
                  <i className="ti ti-sort-descending-2 me-2"></i> Sort By: Newest
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2 border-0 shadow-lg rounded-3">
                  <li><a href="#/" className="dropdown-item rounded-2 active">Newest</a></li>
                  <li><a href="#/" className="dropdown-item rounded-2">Oldest</a></li>
                  <li><a href="#/" className="dropdown-item rounded-2">Amount: High to Low</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className="fw-bold text-muted border-0 ps-4">Invoice ID</th>
                  <th className="fw-bold text-muted border-0">Patient Info</th>
                  <th className="fw-bold text-muted border-0">Created Date</th>
                  <th className="fw-bold text-muted border-0">Total Amount</th>
                  <th className="fw-bold text-muted border-0">Amount Due</th>
                  <th className="fw-bold text-muted border-0">Due Date</th>
                  <th className="fw-bold text-muted border-0">Status</th>
                  <th className="fw-bold text-muted border-0 text-end pe-4">Action</th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="transition-all">
                    <td className="border-bottom-0 py-3 ps-4">
                      <Link to="/invoice-details" className="fw-bold text-primary text-decoration-none hover-primary">{inv.id}</Link>
                    </td>
                    <td className="border-bottom-0 py-3">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-md rounded-circle border border-2 border-white shadow-sm me-3">
                          <img src={`/assets/img/avatars/${inv.avatar}`} alt="patient" className="rounded-circle w-100 h-100 object-fit-cover" />
                        </div>
                        <h6 className="fw-bold mb-0"><a href="#/" className="text-dark text-decoration-none hover-primary">{inv.patient}</a></h6>
                      </div>
                    </td>
                    <td className="border-bottom-0 py-3 fw-medium text-muted">{inv.created}</td>
                    <td className="border-bottom-0 py-3 fw-bold text-dark">{inv.amount}</td>
                    <td className="border-bottom-0 py-3 fw-medium text-muted">{inv.due}</td>
                    <td className="border-bottom-0 py-3 fw-medium text-muted">{inv.dueDate}</td>
                    <td className="border-bottom-0 py-3">
                      <span className={`badge ${inv.statusColor} bg-opacity-10 text-${inv.statusColor.split('-')[1]} border border-${inv.statusColor.split('-')[1]} border-opacity-25 px-3 py-1 rounded-pill fw-medium`}>{inv.status}</span>
                    </td>
                    <td className="border-bottom-0 py-3 text-end pe-4">
                      <div className="dropdown">
                        <button className="btn btn-icon btn-sm btn-light rounded-circle shadow-sm" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical"></i></button>
                        <ul className="dropdown-menu dropdown-menu-end p-2 border-0 shadow-lg rounded-3">
                          <li><Link to="/invoice-details" className="dropdown-item rounded-2 d-flex align-items-center"><i className="ti ti-eye me-2 text-muted"></i>Preview</Link></li>
                          <li><Link to="/edit-invoice" className="dropdown-item rounded-2 d-flex align-items-center"><i className="ti ti-edit me-2 text-muted"></i>Edit</Link></li>
                          <li><hr className="dropdown-divider my-1" /></li>
                          <li><a href="#/" className="dropdown-item rounded-2 d-flex align-items-center text-danger"><i className="ti ti-trash me-2"></i>Delete</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-4 border-top d-flex align-items-center justify-content-between">
            <span className="text-muted fs-14 fw-medium">Showing 1 to 8 of 658 entries</span>
            <ul className="pagination mb-0">
              <li className="page-item disabled"><a className="page-link rounded-circle border-0 me-1" href="#/"><i className="ti ti-chevron-left"></i></a></li>
              <li className="page-item active"><a className="page-link rounded-circle border-0 me-1 shadow-sm" href="#/">1</a></li>
              <li className="page-item"><a className="page-link rounded-circle border-0 me-1" href="#/">2</a></li>
              <li className="page-item"><a className="page-link rounded-circle border-0 me-1" href="#/">3</a></li>
              <li className="page-item"><a className="page-link rounded-circle border-0" href="#/"><i className="ti ti-chevron-right"></i></a></li>
            </ul>
          </div>
        </div>

      </div>
      
      <footer className="footer text-center mt-4">
        <p className="mb-0 text-dark"> &copy; <Link to="/" className="link-primary text-decoration-none">Dreams EMR</Link> - All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Invoice;
