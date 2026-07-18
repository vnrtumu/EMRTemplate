import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

// Initial cards database
const INITIAL_CARDS = [
  { id: 1, cardholder: 'James Peterson', type: 'Visa', number: 'Visa •••• 1568', isDefault: true, img: '/assets/img/icons/payment-img-1.svg' },
  { id: 2, cardholder: 'Raymond Rowley', type: 'Mastercard', number: 'Mastercard •••• 1279', isDefault: false, img: '/assets/img/icons/payment-img-2.svg' }
];

// Initial invoices database
const INITIAL_INVOICES = [
  { id: '#IV0020', date: '22 Jun 2025', amount: '$299', plan: 'Basic', status: 'Success', statusClass: 'badge-soft-success' },
  { id: '#IV0019', date: '10 Jun 2025', amount: '$399', plan: 'Standard', status: 'Success', statusClass: 'badge-soft-success' },
  { id: '#IV0018', date: '22 May 2025', amount: '$499', plan: 'Professional', status: 'Success', statusClass: 'badge-soft-success' },
  { id: '#IV0017', date: '15 May 2025', amount: '$355', plan: 'Basic', status: 'Success', statusClass: 'badge-soft-success' },
  { id: '#IV0016', date: '05 May 2025', amount: '$499', plan: 'Standard', status: 'Success', statusClass: 'badge-soft-success' },
];

const PlansBillingsSettings = () => {
  const [currentPlan, setCurrentPlan] = useState({ name: 'Basic Plan', daysLeft: 20, price: '$299' });
  const [cardsList, setCardsList] = useState(INITIAL_CARDS);
  const [invoices, setInvoices] = useState(INITIAL_INVOICES);

  // Modals state
  const [upgradeModal, setUpgradeModal] = useState(false);
  const [cardModal, setCardModal] = useState({ isOpen: false, mode: 'add', item: null });
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, type: 'card', item: null });
  const [invoiceModal, setInvoiceModal] = useState({ isOpen: false, item: null });

  // Form Fields State
  const [formData, setFormData] = useState({
    cardholder: '',
    type: 'Visa',
    number: '',
    expiry: '',
    isDefault: false
  });

  // Upgrade Plan handler
  const handleUpgradePlan = (planName, price) => {
    setCurrentPlan({ name: `${planName} Plan`, daysLeft: 30, price });
    setUpgradeModal(false);
  };

  // Set card as default
  const handleSetDefaultCard = (cardId, e) => {
    e.preventDefault();
    setCardsList(prev => prev.map(c => ({
      ...c,
      isDefault: c.id === cardId
    })));
  };

  // Card Add/Edit handlers
  const handleOpenAddCard = (e) => {
    e.preventDefault();
    setFormData({
      cardholder: '',
      type: 'Visa',
      number: '',
      expiry: '',
      isDefault: false
    });
    setCardModal({ isOpen: true, mode: 'add', item: null });
  };

  const handleOpenEditCard = (card, e) => {
    e.preventDefault();
    setFormData({
      cardholder: card.cardholder,
      type: card.type,
      number: card.number.split('•••• ')[1] || '',
      expiry: '',
      isDefault: card.isDefault
    });
    setCardModal({ isOpen: true, mode: 'edit', item: card });
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();
    if (cardModal.mode === 'add') {
      const lastDigits = formData.number.slice(-4) || '1111';
      const newCard = {
        id: Math.max(...cardsList.map(c => c.id), 0) + 1,
        cardholder: formData.cardholder || 'Unnamed Holder',
        type: formData.type,
        number: `${formData.type} •••• ${lastDigits}`,
        isDefault: formData.isDefault,
        img: formData.type === 'Visa' ? '/assets/img/icons/payment-img-1.svg' : '/assets/img/icons/payment-img-2.svg'
      };

      let updatedList = [...cardsList];
      if (formData.isDefault) {
        updatedList = updatedList.map(c => ({ ...c, isDefault: false }));
      }
      setCardsList([...updatedList, newCard]);
    } else {
      const lastDigits = formData.number.slice(-4) || '1111';
      setCardsList(prev => {
        let list = prev.map(c => c.id === cardModal.item.id ? {
          ...c,
          cardholder: formData.cardholder || c.cardholder,
          type: formData.type,
          number: `${formData.type} •••• ${lastDigits}`,
          isDefault: formData.isDefault,
          img: formData.type === 'Visa' ? '/assets/img/icons/payment-img-1.svg' : '/assets/img/icons/payment-img-2.svg'
        } : c);

        if (formData.isDefault) {
          list = list.map(c => c.id === cardModal.item.id ? c : { ...c, isDefault: false });
        }
        return list;
      });
    }
    setCardModal({ isOpen: false, mode: 'add', item: null });
  };

  // Card & Invoice Delete Actions
  const handleOpenDelete = (type, item, e) => {
    e.preventDefault();
    setDeleteModal({ isOpen: true, type, item });
  };

  const handleConfirmDelete = () => {
    if (deleteModal.type === 'card') {
      setCardsList(prev => prev.filter(c => c.id !== deleteModal.item.id));
    } else {
      setInvoices(prev => prev.filter(inv => inv.id !== deleteModal.item.id));
    }
    setDeleteModal({ isOpen: false, type: 'card', item: null });
  };

  return (
    <>
      <style>{`
        .theme-card-bg-light {
          background-color: var(--bs-tertiary-bg) !important;
          border: 1px solid var(--bs-border-color) !important;
        }
      `}</style>

      <div className="content">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Settings</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/general-settings" className="text-decoration-none">Settings</Link></li>
              <li className="breadcrumb-item active">Plan & Billings</li>
            </ol>
          </div>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-tabs nav-item-primary mb-3 border-bottom pb-4 mb-4 d-flex align-items-center gap-2">
          <li className="nav-item">
            <Link to="/general-settings" className="nav-link border rounded fw-semibold">
              General
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/security-settings" className="nav-link border rounded fw-semibold">
              Security
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/preferences-settings" className="nav-link border rounded fw-semibold">
              Preferences
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/appearance-settings" className="nav-link border rounded fw-semibold">
              Appearance
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notifications-settings" className="nav-link border rounded fw-semibold">
              Notifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user-permissions-settings" className="nav-link border rounded fw-semibold">
              User Permissions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/plans-billings-settings" className="nav-link border rounded fw-semibold active">
              Plans & Billing
            </Link>
          </li>
        </ul>

        {/* Current Plan */}
        <div className="mb-4">
          <h6 className="mb-3 fw-bold text-dark">Current Plan Information</h6>
          <div className="rounded border theme-card-bg-light p-3 d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div>
              <h6 className="fw-bold mb-1 text-primary fs-15">{currentPlan.name}</h6>
              <p className="mb-0 text-secondary fs-13"><i className="ti ti-clock me-1"></i> {currentPlan.daysLeft} Days Left ({currentPlan.price}/month)</p>
            </div>
            <button type="button" className="btn btn-primary d-flex align-items-center gap-1.5" onClick={() => setUpgradeModal(true)}>
              <i className="ti ti-shield-star"></i> Upgrade Plan
            </button>
          </div>
        </div>

        {/* Saved Cards */}
        <div className="mb-4 pb-4 border-bottom">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <h6 className="mb-0 fw-bold text-dark">Saved Payment Cards</h6>
            <button type="button" className="btn btn-dark btn-sm d-flex align-items-center gap-1.5" onClick={handleOpenAddCard}>
              <i className="ti ti-plus"></i> New Card
            </button>
          </div>

          <div className="row g-3">
            {cardsList.map(card => (
              <div className="col-lg-6 col-xl-4" key={card.id}>
                <div className="card shadow-sm border mb-0 theme-card-bg-light">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="p-2 border rounded bg-white flex-shrink-0">
                        <img src={card.img} className="img-fluid" alt={card.type} style={{ width: '40px' }} />
                      </div>
                      <div>
                        <p className="fw-semibold text-dark fs-14 mb-0.5">{card.cardholder}</p>
                        <span className="fs-12 text-muted fw-medium">{card.number}</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      {card.isDefault ? (
                        <span className="badge bg-success-transparent text-success px-2.5 py-1 fs-11">Default</span>
                      ) : (
                        <button type="button" className="btn btn-sm btn-link text-primary p-0 text-decoration-none fs-13 fw-semibold" onClick={(e) => handleSetDefaultCard(card.id, e)}>
                          Set as Default
                        </button>
                      )}
                      <div className="d-flex align-items-center gap-1">
                        <button type="button" className="btn btn-icon btn-sm btn-light border rounded-circle" onClick={(e) => handleOpenEditCard(card, e)}>
                          <i className="ti ti-edit"></i>
                        </button>
                        <button type="button" className="btn btn-icon btn-sm btn-light border rounded-circle" onClick={(e) => handleOpenDelete('card', card, e)}>
                          <i className="ti ti-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Billing History */}
        <div>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <h5 className="mb-0 fw-bold d-inline-flex align-items-center">
              Billing Ledger
              <span className="badge bg-danger ms-2">{invoices.length} Paid</span>
            </h5>
          </div>
          <div className="table-responsive">
            <table className="table table-modern mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th className="ps-4">Invoice ID</th>
                  <th>Created Date</th>
                  <th>Amount</th>
                  <th>Plan</th>
                  <th>Status</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map(inv => (
                  <tr key={inv.id} className="hover-row">
                    <td className="ps-4">
                      <button 
                        type="button" 
                        className="btn btn-link text-primary p-0 text-decoration-none fw-bold"
                        onClick={() => setInvoiceModal({ isOpen: true, item: inv })}
                      >
                        {inv.id}
                      </button>
                    </td>
                    <td>
                      <div className="patients-list-date">{inv.date}</div>
                    </td>
                    <td className="fw-semibold text-dark fs-14">{inv.amount}</td>
                    <td className="fs-14">{inv.plan}</td>
                    <td>
                      <span className={`badge ${inv.statusClass} px-3 py-1.5 fs-12`}>
                        {inv.status}
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
                              onClick={() => setInvoiceModal({ isOpen: true, item: inv })}
                            >
                              <i className="ti ti-eye fs-15 text-muted"></i>View Invoice
                            </button>
                          </li>
                          <li><hr className="dropdown-divider" /></li>
                          <li>
                            <a 
                              href="#/" 
                              className="dropdown-item rounded-1 d-flex align-items-center gap-2 py-2 text-danger"
                              onClick={(e) => handleOpenDelete('invoice', inv, e)}
                            >
                              <i className="ti ti-trash fs-15"></i>Delete invoice
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
        </div>
      </div>

      {/* Stateful Plan Upgrade Modal */}
      {upgradeModal && <div className="modal-backdrop fade show"></div>}
      {upgradeModal && (
        <div className="modal fade show d-block animate-fade-in" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-shield-star text-primary fs-22"></i>
                  EMR License Options
                </h5>
                <button type="button" className="btn-close" onClick={() => setUpgradeModal(false)}></button>
              </div>
              <div className="modal-body py-4">
                <div className="row g-3">
                  {/* Basic */}
                  <div className="col-md-4">
                    <div className="p-3 border rounded text-center theme-card-bg-light">
                      <h6 className="fw-bold mb-1 text-dark fs-15">Basic License</h6>
                      <h4 className="fw-bold text-primary mb-3">$299<span className="fs-12 text-muted fw-normal">/mo</span></h4>
                      <p className="fs-12 text-muted mb-4">Best for private specialist practices and clinics</p>
                      <button type="button" className="btn btn-outline-primary btn-sm w-100" onClick={() => handleUpgradePlan('Basic', '$299')}>Choose Basic</button>
                    </div>
                  </div>

                  {/* Standard */}
                  <div className="col-md-4">
                    <div className="p-3 border rounded text-center theme-card-bg-light border-primary" style={{ borderWidth: '2px' }}>
                      <h6 className="fw-bold mb-1 text-dark fs-15">Standard Plan</h6>
                      <h4 className="fw-bold text-primary mb-3">$399<span className="fs-12 text-muted fw-normal">/mo</span></h4>
                      <p className="fs-12 text-muted mb-4">Includes advanced laboratory matrices and patient queues</p>
                      <button type="button" className="btn btn-primary btn-sm w-100" onClick={() => handleUpgradePlan('Standard', '$399')}>Upgrade Standard</button>
                    </div>
                  </div>

                  {/* Professional */}
                  <div className="col-md-4">
                    <div className="p-3 border rounded text-center theme-card-bg-light">
                      <h6 className="fw-bold mb-1 text-dark fs-15">Professional</h6>
                      <h4 className="fw-bold text-primary mb-3">$499<span className="fs-12 text-muted fw-normal">/mo</span></h4>
                      <p className="fs-12 text-muted mb-4">Complete EHR solution with accounting, ledger, and roles matrix</p>
                      <button type="button" className="btn btn-outline-primary btn-sm w-100" onClick={() => handleUpgradePlan('Professional', '$499')}>Choose Professional</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Card Edit/Add Modal */}
      {cardModal.isOpen && <div className="modal-backdrop fade show"></div>}
      {cardModal.isOpen && (
        <div className="modal fade show d-block animate-fade-in" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <form onSubmit={handleCardSubmit}>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                    <i className="ti ti-plus text-primary fs-22"></i>
                    {cardModal.mode === 'add' ? 'New Payment Card' : 'Edit Payment Card'}
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setCardModal({ isOpen: false, mode: 'add', item: null })}></button>
                </div>
                <div className="modal-body py-4">
                  <div className="mb-3">
                    <label className="form-label fw-medium text-secondary">Cardholder Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="James Peterson"
                      value={formData.cardholder}
                      onChange={(e) => setFormData(prev => ({ ...prev, cardholder: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Card Type</label>
                      <select 
                        className="form-select"
                        value={formData.type}
                        onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                      >
                        <option value="Visa">Visa</option>
                        <option value="Mastercard">Mastercard</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Card Number (Last 4)</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        maxLength="16"
                        placeholder="•••• •••• •••• 1568"
                        value={formData.number}
                        onChange={(e) => setFormData(prev => ({ ...prev, number: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-check form-switch m-0 d-flex align-items-center ps-0">
                    <input 
                      className="form-check-input ms-0 me-2" 
                      type="checkbox" 
                      id="cardDefaultSwitch"
                      checked={formData.isDefault}
                      onChange={(e) => setFormData(prev => ({ ...prev, isDefault: e.target.checked }))}
                    />
                    <label className="form-check-label fs-13 text-secondary" htmlFor="cardDefaultSwitch">Set as primary billing card</label>
                  </div>

                </div>
                <div className="modal-footer border-0 pt-0 d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setCardModal({ isOpen: false, mode: 'add', item: null })}>Cancel</button>
                  <button type="submit" className="btn btn-primary flex-fill py-2">Save Card</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Stateful Delete Confirmation Modal */}
      {deleteModal.isOpen && deleteModal.item && <div className="modal-backdrop fade show"></div>}
      {deleteModal.isOpen && deleteModal.item && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-alert-circle text-danger fs-22"></i>
                  Delete {deleteModal.type === 'card' ? 'Payment Card' : 'Invoice'}
                </h5>
                <button type="button" className="btn-close" onClick={() => setDeleteModal({ isOpen: false, type: 'card', item: null })}></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-0 text-secondary">
                  Are you sure you want to permanently delete this {deleteModal.type === 'card' ? `card ending in ${deleteModal.item.number.slice(-4)}` : `invoice record ${deleteModal.item.id}`} from active records?
                </p>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setDeleteModal({ isOpen: false, type: 'card', item: null })}>Close</button>
                <button type="button" className="btn btn-danger flex-fill py-2" onClick={handleConfirmDelete}>Yes, Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Details Modal */}
      {invoiceModal.isOpen && invoiceModal.item && <div className="modal-backdrop fade show"></div>}
      {invoiceModal.isOpen && invoiceModal.item && (
        <div className="modal fade show d-block animate-fade-in" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-file-text text-primary fs-22"></i>
                  Invoice Receipt
                </h5>
                <button type="button" className="btn-close" onClick={() => setInvoiceModal({ isOpen: false, item: null })}></button>
              </div>
              <div className="modal-body py-4">
                <div className="p-3 theme-card-bg-light rounded-3 mb-3 text-center">
                  <span className="fs-11 text-uppercase text-secondary fw-bold mb-1.5 d-block">Payment Paid</span>
                  <h4 className="fw-bold text-success mb-0">{invoiceModal.item.amount}</h4>
                  <p className="mb-0 text-muted fs-12">Invoice: {invoiceModal.item.id} | Date: {invoiceModal.item.date}</p>
                </div>
                <div className="p-3 theme-card-bg-light rounded-3 mb-1">
                  <div className="d-flex justify-content-between mb-2 fs-13">
                    <span className="text-secondary">Assigned Plan:</span>
                    <span className="fw-bold text-dark">{invoiceModal.item.plan}</span>
                  </div>
                  <div className="d-flex justify-content-between fs-13">
                    <span className="text-secondary">Payment Status:</span>
                    <span className="badge bg-success-transparent text-success">{invoiceModal.item.status}</span>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-primary w-100" onClick={() => setInvoiceModal({ isOpen: false, item: null })}>Close Receipt</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PlansBillingsSettings;
