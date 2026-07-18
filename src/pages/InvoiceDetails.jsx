import { Link } from 'react-router-dom';
import './Applications.css';

const InvoiceDetails = () => {
  const items = [
    { id: 1, name: 'Syringes & Needles', qty: 2, rate: '$200.00', amount: '$396.00' },
    { id: 2, name: 'Face Masks (3-ply/N95)', qty: 1, rate: '$350.00', amount: '$365.75' },
    { id: 3, name: 'Catheters', qty: 1, rate: '$399.00', amount: '$398.90' },
    { id: 4, name: 'Surgical Drapes', qty: 4, rate: '$100.00', amount: '$396.00' }
  ];

  return (
    <>
      <div className="content">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
              <h6 className="mb-0">
                <Link to="/invoice" className="d-flex align-items-center text-dark text-decoration-none hover-primary transition-all">
                  <div className="btn btn-icon btn-sm btn-white rounded-circle shadow-sm me-2"><i className="ti ti-arrow-left"></i></div>
                  <span className="fw-bold fs-16">Back to Invoices</span>
                </Link>
              </h6>
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-white shadow-sm px-4 rounded-pill d-flex align-items-center fw-medium hover-primary transition-all">
                  <i className="ti ti-file-download me-2"></i> Download PDF
                </button>
                <button className="btn btn-primary premium-btn shadow-sm px-4 rounded-pill d-flex align-items-center fw-medium">
                  <i className="ti ti-printer me-2"></i> Print Invoice
                </button>
              </div>
            </div>

            <div className="premium-card border p-0 shadow-lg">
              <div className="p-4 p-md-5">
                
                {/* Header */}
                <div className="bg-light bg-opacity-50 rounded-4 p-4 p-md-5 mb-5 border border-opacity-50 position-relative overflow-hidden">
                  
                  <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-5 position-relative z-1">
                    <div className="invoice-logo bg-white p-3 rounded-3 shadow-sm d-inline-block border">
                      <img src="/assets/img/logo-dark.svg" className="logo-dark" alt="logo" height="36" />
                    </div>
                    <div className="text-md-end mt-4 mt-md-0">
                      <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-1 rounded-pill fw-bold fs-12 mb-2 d-inline-flex align-items-center">
                        <i className="ti ti-check me-1"></i> PAID
                      </span>
                      <h4 className="fw-bold mb-1 text-primary">Invoice #INV5465</h4>
                      <p className="text-muted fs-14 fw-medium mb-0">Issued: 17 Jun 2025</p>
                    </div>
                  </div>

                  <div className="row gy-4 position-relative z-1">
                    <div className="col-md-5">
                      <div className="h-100">
                        <h6 className="fs-13 fw-bold text-uppercase text-muted mb-3 d-flex align-items-center">
                          <i className="ti ti-building-hospital me-2 text-primary"></i> Invoice From
                        </h6>
                        <h5 className="fw-bold mb-2">Dreams Medical Center</h5>
                        <p className="mb-2 text-muted fs-15 lh-base">
                          15 Hodges Mews, High Wycombe HP12 3JL, <br />
                          United Kingdom
                        </p>
                        <p className="mb-0 text-dark fw-medium d-flex align-items-center">
                          <i className="ti ti-phone-call me-2 text-muted"></i> +1 45659 96566
                        </p>
                      </div>
                    </div> 

                    <div className="col-md-5">
                      <div className="h-100">
                        <h6 className="fs-13 fw-bold text-uppercase text-muted mb-3 d-flex align-items-center">
                          <i className="ti ti-user text-primary me-2"></i> Bill To
                        </h6>
                        <div className="d-flex align-items-center mb-2">
                          <div className="avatar avatar-sm rounded-circle me-2 border border-2 border-white shadow-sm">
                             <img src="/assets/img/avatars/avatar-21.jpg" alt="user" className="rounded-circle w-100 h-100 object-fit-cover" />
                          </div>
                          <h5 className="fw-bold mb-0">Andrew Fletcher</h5>
                        </div>
                        <p className="mb-2 text-muted fs-15 lh-base">
                          1147 Rohan Drive Suite, Burlington, VT / 8202115 <br />
                          United Kingdom
                        </p>
                        <p className="mb-0 text-dark fw-medium d-flex align-items-center">
                          <i className="ti ti-phone-call me-2 text-muted"></i> +1 36254 56589
                        </p>
                      </div>
                    </div> 

                    <div className="col-md-2 d-flex justify-content-md-end align-items-end">
                      <div className="bg-white p-2 rounded-3 shadow-sm border text-center">
                        <img src="/assets/img/icons/qr-code.svg" alt="qr-code" className="img-fluid" style={{ maxWidth: '80px' }} />
                        <p className="fs-10 text-muted mt-1 mb-0 fw-medium">Scan to Pay</p>
                      </div>
                    </div> 
                  </div>
                </div>

                <h5 className="fw-bold mb-4 d-flex align-items-center">
                  <i className="ti ti-list-details text-primary me-2"></i> Items Details
                </h5>
                
                <div className="table-responsive rounded-4 border mb-5 overflow-hidden shadow-sm">
                  <table className="table align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="fw-bold text-muted border-0 py-3 ps-4">#</th>
                        <th className="fw-bold text-muted border-0 py-3">Item Details</th>
                        <th className="fw-bold text-muted border-0 py-3 text-end">Quantity</th>
                        <th className="fw-bold text-muted border-0 py-3 text-end">Rate</th>
                        <th className="fw-bold text-muted border-0 py-3 text-end pe-4">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="border-top-0">
                      {items.map(item => (
                        <tr key={item.id} className="transition-all hover-bg-light">
                          <td className="border-bottom-0 py-4 ps-4 fw-medium text-muted">{item.id}</td>
                          <td className="border-bottom-0 py-4 fw-bold text-dark">{item.name}</td>
                          <td className="border-bottom-0 py-4 text-end fw-medium">{item.qty}</td>
                          <td className="border-bottom-0 py-4 text-end fw-medium text-muted">{item.rate}</td>
                          <td className="border-bottom-0 py-4 text-end pe-4 fw-bold text-dark">{item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="row">
                  <div className="col-xl-7 mt-4 mt-xl-0">
                    <div className="bg-light bg-opacity-50 p-4 rounded-4 border h-100">
                      <h6 className="fw-bold mb-3 d-flex align-items-center">
                        <i className="ti ti-shield-check text-primary me-2"></i> Terms and Conditions
                      </h6>
                      <ol className="text-muted fs-14 lh-lg ps-3 mb-4">
                        <li>Goods once sold cannot be taken back or exchanged.</li>
                        <li>We are not the manufacturers; the company provides warranty.</li>
                      </ol>
                      <div className="bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-3 p-3 d-flex gap-3">
                        <i className="ti ti-info-circle text-primary fs-4 flex-shrink-0 mt-1"></i>
                        <p className="mb-0 fs-14 text-dark lh-base">
                          <span className="fw-bold text-primary">Note:</span> Payment for all accounts is due within 7 days from the date of invoice receipt. Payments can be made via cheque, credit card, or direct online payment. Failure to settle the account within 7 days will result in the agreed quoted fee.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-xl-5">
                    <div className="bg-light p-4 rounded-4 border shadow-sm">
                      <div className="d-flex align-items-center justify-content-between mb-3 fs-15">
                        <span className="fw-medium text-muted">Subtotal</span>
                        <span className="fw-bold text-dark">$1,793.12</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3 fs-15">
                        <span className="fw-medium text-muted">CGST (9%)</span>
                        <span className="fw-bold text-dark">$18.00</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3 fs-15">
                        <span className="fw-medium text-muted">SGST (9%)</span>
                        <span className="fw-bold text-dark">$18.00</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-4 fs-15">
                        <span className="fw-medium text-muted">Discount (25%)</span>
                        <span className="fw-bold text-danger bg-danger bg-opacity-10 px-2 py-1 rounded">- $18.00</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-top border-dark border-opacity-10 pt-4">
                        <span className="fs-18 fw-bold text-dark d-flex align-items-center">
                          Total (USD)
                        </span>
                        <span className="fs-24 fw-black text-primary">$1,972.43</span>
                      </div>
                    </div>

                    <div className="text-end mt-5 pt-4">
                      <div className="mb-2 signature d-inline-block border-bottom border-dark pb-2 px-4">
                        <img src="/assets/img/icons/signature.svg" alt="sign" style={{ height: '40px' }} />
                      </div>
                      <p className="mb-0 fw-bold fs-15 text-dark">Authorized Signature</p>
                      <p className="mb-0 fs-13 text-muted">Dr. James Hong</p>
                    </div>
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

export default InvoiceDetails;
