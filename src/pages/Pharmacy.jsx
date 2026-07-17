import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Static database of laboratory pharmacy products
const INITIAL_PRODUCTS = [
  { id: '#PR0025', name: 'Acetaminophen', price: '$500', offerPrice: '$50', purchaseDate: '17 Jun 2025', expiryDate: '22 Jun 2025', stock: '280', desc: 'Prevents heart attacks and strokes', unit: '20mg' },
  { id: '#PR0024', name: 'Cymbalta', price: '$500', offerPrice: '$50', purchaseDate: '10 Jun 2025', expiryDate: '15 Jun 2025', stock: '468', desc: 'Treats hypertension, angina, and heart failure', unit: '17mg' },
  { id: '#PR0023', name: 'Dupixent', price: '$300', offerPrice: '$30', purchaseDate: '22 May 2025', expiryDate: '27 May 2025', stock: '261', desc: 'Used for muscle spasms and spasticity', unit: '40mg' },
  { id: '#PR0022', name: 'Entresto', price: '$200', offerPrice: '$20', purchaseDate: '15 May 2025', expiryDate: '20 May 2025', stock: '550', desc: 'Treats depression and panic disorder', unit: '28mg' },
  { id: '#PR0021', name: 'Rybelsus', price: '$100', offerPrice: '$10', purchaseDate: '30 Apr 2025', expiryDate: '05 May 2025', stock: '303', desc: 'Treats angina by dilating blood vessels.', unit: '30ml' },
  { id: '#PR0020', name: 'Pantoprazole', price: '$600', offerPrice: '$60', purchaseDate: '25 Apr 2025', expiryDate: '30 Apr 2025', stock: '468', desc: 'Used for schizophrenia and bipolar disorder', unit: '10mg' },
  { id: '#PR0019', name: 'Prednisone', price: '$700', offerPrice: '$70', purchaseDate: '13 Mar 2025', expiryDate: '18 Mar 2025', stock: '100', desc: 'Reduces stomach acid', unit: '20ml' },
  { id: '#PR0018', name: 'Entyvio', price: '$800', offerPrice: '$80', purchaseDate: '16 Feb 2025', expiryDate: '21 Feb 2025', stock: '250', desc: 'For chest pain associated with heart conditions', unit: '25mg' },
  { id: '#PR0017', name: 'Farxiga', price: '$900', offerPrice: '$90', purchaseDate: '20 Jan 2025', expiryDate: '25 Jan 2025', stock: '180', desc: 'Treats bacterial infections', unit: '35mg' },
  { id: '#PR0016', name: 'Apexitecan', price: '$500', offerPrice: '$50', purchaseDate: '15 Jan 2025', expiryDate: '20 Jan 2025', stock: '220', desc: 'Reduces stomach acid, treats acid reflux', unit: '45mg' },
];

const Pharmacy = () => {
  const [productsList, setProductsList] = useState(INITIAL_PRODUCTS);

  // Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");

  // Modals state
  const [viewModal, setViewModal] = useState({ isOpen: false, item: null });
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, item: null });
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState({ isOpen: false, item: null });

  // Form Field states for Add/Edit
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    offerPrice: '',
    purchaseDate: '',
    expiryDate: '',
    stock: '',
    desc: '',
    unit: ''
  });

  // Reset Filters
  const handleClearFilters = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setActiveQuery("");
  };

  // Submit Search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveQuery(searchQuery);
  };

  // Add Action
  const handleOpenAddModal = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      price: '',
      offerPrice: '',
      purchaseDate: '',
      expiryDate: '',
      stock: '',
      desc: '',
      unit: ''
    });
    setAddModal(true);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: '#PR' + Math.floor(1000 + Math.random() * 9000),
      name: formData.name || 'Unnamed Product',
      price: formData.price ? `$${formData.price}` : '$0',
      offerPrice: formData.offerPrice ? `$${formData.offerPrice}` : '$0',
      purchaseDate: formData.purchaseDate || 'N/A',
      expiryDate: formData.expiryDate || 'N/A',
      stock: formData.stock || '0',
      desc: formData.desc || 'No description',
      unit: formData.unit || 'N/A'
    };
    setProductsList(prev => [newProduct, ...prev]);
    setAddModal(false);
  };

  // Edit Action
  const handleOpenEditModal = (item, e) => {
    e.preventDefault();
    setFormData({
      name: item.name,
      price: item.price.replace('$', ''),
      offerPrice: item.offerPrice.replace('$', ''),
      purchaseDate: item.purchaseDate,
      expiryDate: item.expiryDate,
      stock: item.stock,
      desc: item.desc,
      unit: item.unit
    });
    setEditModal({ isOpen: true, item });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editModal.item) {
      setProductsList(prev => prev.map(p => p.id === editModal.item.id ? {
        ...p,
        name: formData.name || p.name,
        price: formData.price ? `$${formData.price}` : p.price,
        offerPrice: formData.offerPrice ? `$${formData.offerPrice}` : p.offerPrice,
        purchaseDate: formData.purchaseDate || p.purchaseDate,
        expiryDate: formData.expiryDate || p.expiryDate,
        stock: formData.stock || p.stock,
        desc: formData.desc || p.desc,
        unit: formData.unit || p.unit
      } : p));
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
      setProductsList(prev => prev.filter(p => p.id !== deleteModal.item.id));
    }
    handleCloseDeleteModal();
  };

  // Refresh
  const handleRefresh = (e) => {
    e.preventDefault();
    setProductsList(INITIAL_PRODUCTS);
    handleClearFilters(e);
  };

  // Compute filtered dataset
  const filteredProducts = productsList.filter(p => {
    const term = activeQuery.toLowerCase().trim();
    return term === "" || 
      p.name.toLowerCase().includes(term) ||
      p.id.toLowerCase().includes(term) ||
      p.desc.toLowerCase().includes(term);
  });

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
            <h4 className="mb-1 fw-bold">Pharmacy</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Pharmacy</li>
            </ol>
          </div>
          <div className="patients-list-toolbar d-flex align-items-center gap-2 flex-wrap">
            <button type="button" className="btn btn-icon btn-light" onClick={handleRefresh} title="Refresh"><i className="ti ti-refresh"></i></button>
            <button type="button" className="btn btn-icon btn-light" onClick={() => window.print()} title="Print"><i className="ti ti-printer"></i></button>
            <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2" onClick={handleOpenAddModal}>
              <i className="ti ti-square-rounded-plus"></i> New Product
            </button>
          </div>
        </div>

        {/* Filter Card */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="row g-3">
                {/* Search Text Input */}
                <div className="col-md-9">
                  <label className="form-label fw-medium text-secondary">Search Catalog</label>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      className="form-control ps-4" 
                      placeholder="Product name, description, ID..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="ti ti-search position-absolute start-0 top-50 translate-middle-y ms-2 text-muted"></i>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="col-md-3 d-flex align-items-end gap-2">
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
        {activeQuery && (
          <div className="d-flex align-items-center justify-content-between p-3 bg-primary-transparent rounded-2 mb-4 border border-primary-subtle text-primary">
            <div className="d-flex align-items-center gap-2">
              <i className="ti ti-info-circle"></i>
              <p className="fs-13 mb-0">
                Filters Active: Keyword "{activeQuery}"
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
                <div className="patients-list-kicker mb-2">Inventory Management</div>
                <h5 className="mb-2 fw-bold">Stock Catalog</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="patients-list-total">{filteredProducts.length}</span>
                  <span className="patients-list-subtitle">Active pharmacy items</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            {filteredProducts.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-modern patients-list-table mb-0 align-middle">
                  <thead>
                    <tr>
                      <th className="ps-4">Product ID</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Offer Price</th>
                      <th>Purchase Date</th>
                      <th>Expiry Date</th>
                      <th>Stock</th>
                      <th>Unit (ml/mg)</th>
                      <th>Description</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map(prod => (
                      <tr key={prod.id} className="hover-row">
                        <td className="ps-4">
                          <button 
                            type="button" 
                            className="btn btn-link text-primary p-0 text-decoration-none fw-bold"
                            onClick={() => setViewModal({ isOpen: true, item: prod })}
                          >
                            {prod.id}
                          </button>
                        </td>
                        <td className="fw-semibold text-dark fs-14">{prod.name}</td>
                        <td className="fs-14">{prod.price}</td>
                        <td className="fs-14 fw-semibold text-success">{prod.offerPrice}</td>
                        <td>
                          <div className="patients-list-date">{prod.purchaseDate}</div>
                        </td>
                        <td>
                          <div className="patients-list-date">{prod.expiryDate}</div>
                        </td>
                        <td>
                          <span className={`badge ${parseInt(prod.stock) < 150 ? 'bg-danger-transparent text-danger' : 'bg-success-transparent text-success'} rounded-pill px-2.5 py-1 fs-11`}>
                            {prod.stock} Units
                          </span>
                        </td>
                        <td className="fs-14">{prod.unit}</td>
                        <td>
                          <p className="mb-0 text-muted fs-13 text-truncate" style={{ maxWidth: '240px' }}>
                            {prod.desc}
                          </p>
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
                                  onClick={() => setViewModal({ isOpen: true, item: prod })}
                                >
                                  <i className="ti ti-eye fs-15 text-muted"></i>View Details
                                </button>
                              </li>
                              <li>
                                <button 
                                  type="button" 
                                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                                  onClick={(e) => handleOpenEditModal(prod, e)}
                                >
                                  <i className="ti ti-edit fs-15 text-muted"></i>Edit
                                </button>
                              </li>
                              <li><hr className="dropdown-divider" /></li>
                              <li>
                                <a 
                                  href="#/" 
                                  className="dropdown-item rounded-1 d-flex align-items-center gap-2 py-2 text-danger"
                                  onClick={(e) => handleOpenDeleteModal(prod, e)}
                                >
                                  <i className="ti ti-trash fs-15"></i>Delete product
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
                  <i className="ti ti-pill text-muted" style={{ fontSize: '3.5rem' }}></i>
                </div>
                <h5 className="fw-semibold">No Products Found</h5>
                <p className="text-muted fs-14 px-3">We couldn't find any pharmacy items matching active filters. Try adjusting keywords.</p>
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
                  <i className="ti ti-pill text-primary fs-22"></i>
                  Product Details
                </h5>
                <button type="button" className="btn-close" onClick={() => setViewModal({ isOpen: false, item: null })} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                
                <div className="p-3 theme-card-bg-light rounded-3 mb-3">
                  <span className="fs-11 text-uppercase text-secondary fw-bold tracking-wider mb-1.5 d-block">Product Name</span>
                  <h6 className="mb-0 fw-bold text-dark fs-15">{viewModal.item.name}</h6>
                  <p className="mb-0 text-muted fs-12">Product ID: {viewModal.item.id} | Unit: {viewModal.item.unit}</p>
                </div>

                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold mb-1 d-block">Price</span>
                      <div className="fs-14 fw-bold text-dark">{viewModal.item.price}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold mb-1 d-block">Offer Price</span>
                      <div className="fs-14 fw-bold text-success">{viewModal.item.offerPrice}</div>
                    </div>
                  </div>
                </div>

                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold mb-1 d-block">Purchase Date</span>
                      <div className="fs-13 fw-semibold text-secondary">{viewModal.item.purchaseDate}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold mb-1 d-block">Expiry Date</span>
                      <div className="fs-13 fw-semibold text-secondary">{viewModal.item.expiryDate}</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 theme-card-bg-light rounded-3 mb-3 d-flex align-items-center justify-content-between">
                  <span className="fs-12 text-secondary fw-medium">Stock Availability</span>
                  <span className={`badge ${parseInt(viewModal.item.stock) < 150 ? 'bg-danger-transparent text-danger' : 'bg-success-transparent text-success'} px-3 py-1.5 fs-12`}>
                    {viewModal.item.stock} Units
                  </span>
                </div>

                <div>
                  <span className="fs-11 text-uppercase text-secondary fw-bold mb-1 d-block">Description</span>
                  <div className="p-3 bg-light rounded-3 border fs-13 text-secondary" style={{ lineHeight: '1.5' }}>
                    {viewModal.item.desc}
                  </div>
                </div>

              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-primary" onClick={() => setViewModal({ isOpen: false, item: null })}>Close Details</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stateful Add Product Modal */}
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
                    New Pharmacy Product
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setAddModal(false)} aria-label="Close"></button>
                </div>
                <div className="modal-body py-4">
                  <div className="mb-3">
                    <label className="form-label fw-medium text-secondary">Product Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. Paracetamol"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Base Price ($)</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 100"
                        value={formData.price}
                        onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Offer Price ($)</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 10"
                        value={formData.offerPrice}
                        onChange={(e) => setFormData(prev => ({ ...prev, offerPrice: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Expiry Date</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 22 Jun 2025"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, expiryDate: e.target.value }))}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Stock Quantity</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 150"
                        value={formData.stock}
                        onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Unit (e.g. 20mg, 50ml)</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 20mg"
                        value={formData.unit}
                        onChange={(e) => setFormData(prev => ({ ...prev, unit: e.target.value }))}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Purchase Date</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 17 Jun 2025"
                        value={formData.purchaseDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, purchaseDate: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label fw-medium text-secondary">Description</label>
                    <textarea 
                      className="form-control" 
                      rows="3" 
                      placeholder="Enter drug indication description..."
                      value={formData.desc}
                      onChange={(e) => setFormData(prev => ({ ...prev, desc: e.target.value }))}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0 d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setAddModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary flex-fill py-2">Add Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Stateful Edit Product Modal */}
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
                    Edit Product Info
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setEditModal({ isOpen: false, item: null })} aria-label="Close"></button>
                </div>
                <div className="modal-body py-4">
                  <div className="mb-3">
                    <label className="form-label fw-medium text-secondary">Product Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. Paracetamol"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Base Price ($)</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 100"
                        value={formData.price}
                        onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Offer Price ($)</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 10"
                        value={formData.offerPrice}
                        onChange={(e) => setFormData(prev => ({ ...prev, offerPrice: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Expiry Date</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 22 Jun 2025"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, expiryDate: e.target.value }))}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Stock Quantity</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 150"
                        value={formData.stock}
                        onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Unit (e.g. 20mg, 50ml)</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 20mg"
                        value={formData.unit}
                        onChange={(e) => setFormData(prev => ({ ...prev, unit: e.target.value }))}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Purchase Date</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 17 Jun 2025"
                        value={formData.purchaseDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, purchaseDate: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label fw-medium text-secondary">Description</label>
                    <textarea 
                      className="form-control" 
                      rows="3" 
                      placeholder="Enter drug indication description..."
                      value={formData.desc}
                      onChange={(e) => setFormData(prev => ({ ...prev, desc: e.target.value }))}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0 d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setEditModal({ isOpen: false, item: null })}>Cancel</button>
                  <button type="submit" className="btn btn-primary flex-fill py-2">Save Product</button>
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
                  Delete Product
                </h5>
                <button type="button" className="btn-close" onClick={handleCloseDeleteModal} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-2 fs-14 text-secondary">
                  Are you sure you want to permanently delete this pharmacy catalog item:
                </p>
                <div className="p-3 bg-light rounded-3 mb-3 border theme-card-bg-light">
                  <div className="d-flex align-items-center gap-3">
                    <div>
                      <h6 className="mb-1 fw-bold text-dark">{deleteModal.item.name}</h6>
                      <p className="mb-0 text-muted fs-12">ID: {deleteModal.item.id} | Unit: {deleteModal.item.unit} | Stock: {deleteModal.item.stock} Units</p>
                    </div>
                  </div>
                </div>
                <p className="mb-0 fs-12 text-danger">
                  <i className="ti ti-info-circle me-1"></i>Note: This action is permanent and will remove the item from active pharmacy stock sheets.
                </p>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={handleCloseDeleteModal}>Close</button>
                <button 
                  type="button" 
                  className="btn btn-danger flex-fill py-2"
                  onClick={handleConfirmDelete}
                >
                  Yes, Delete Product
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

export default Pharmacy;
