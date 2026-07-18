import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

// Static database of user permissions/roles
const INITIAL_ROLES = [
  { id: 1, name: 'Owner', date: '22 Jun 2025', status: 'Active', statusClass: 'badge-soft-success' },
  { id: 2, name: 'Admin', date: '17 Jun 2025', status: 'Active', statusClass: 'badge-soft-success' },
  { id: 3, name: 'Patient', date: '10 Jun 2025', status: 'Inactive', statusClass: 'badge-soft-danger' },
  { id: 4, name: 'Doctor', date: '22 May 2025', status: 'Active', statusClass: 'badge-soft-success' },
  { id: 5, name: 'Nurse', date: '15 May 2025', status: 'Inactive', statusClass: 'badge-soft-danger' },
  { id: 6, name: 'Supervisor', date: '30 Apr 2025', status: 'Active', statusClass: 'badge-soft-success' },
  { id: 7, name: 'Pharmacist', date: '15 Jan 2025', status: 'Inactive', statusClass: 'badge-soft-danger' },
];

const UserPermissionsSettings = () => {
  const [roles, setRoles] = useState(INITIAL_ROLES);

  // Modals state
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState({ isOpen: false, item: null });
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, item: null });

  // Form Field states for Add/Edit
  const [formData, setFormData] = useState({
    name: '',
    status: 'Active'
  });

  // Add Action
  const handleOpenAddModal = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      status: 'Active'
    });
    setAddModal(true);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newRole = {
      id: Math.max(...roles.map(r => r.id), 0) + 1,
      name: formData.name || 'Unnamed Role',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: formData.status,
      statusClass: formData.status === 'Active' ? 'badge-soft-success' : 'badge-soft-danger'
    };
    setRoles(prev => [newRole, ...prev]);
    setAddModal(false);
  };

  // Edit Action
  const handleOpenEditModal = (item, e) => {
    e.preventDefault();
    setFormData({
      name: item.name,
      status: item.status
    });
    setEditModal({ isOpen: true, item });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editModal.item) {
      setRoles(prev => prev.map(r => r.id === editModal.item.id ? {
        ...r,
        name: formData.name || r.name,
        status: formData.status,
        statusClass: formData.status === 'Active' ? 'badge-soft-success' : 'badge-soft-danger'
      } : r));
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
      setRoles(prev => prev.filter(r => r.id !== deleteModal.item.id));
    }
    handleCloseDeleteModal();
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
              <li className="breadcrumb-item active">Permissions</li>
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
            <Link to="/user-permissions-settings" className="nav-link border rounded fw-semibold active">
              User Permissions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/plans-billings-settings" className="nav-link border rounded fw-semibold">
              Plans & Billing
            </Link>
          </li>
        </ul>

        {/* Roles Registry */}
        <div className="card border-0 shadow-sm mb-0">
          <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between py-3 px-4">
            <h5 className="mb-0 fw-bold d-inline-flex align-items-center">
              EMR System Roles
              <span className="badge bg-danger ms-2">{roles.length} Total</span>
            </h5>
            <div>
              <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-1.5" onClick={handleOpenAddModal}>
                <i className="ti ti-square-rounded-plus"></i>New Role
              </button>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-modern mb-0 align-middle">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4">Role Name</th>
                    <th>Created Date</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map(r => (
                    <tr key={r.id} className="hover-row">
                      <td className="ps-4 fw-semibold text-dark fs-14">{r.name}</td>
                      <td>
                        <div className="patients-list-date">{r.date}</div>
                      </td>
                      <td>
                        <span className={`badge ${r.statusClass} px-3 py-1.5 fs-12`}>
                          {r.status}
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
                                onClick={(e) => handleOpenEditModal(r, e)}
                              >
                                <i className="ti ti-edit fs-15 text-muted"></i>Edit Role
                              </button>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                              <a 
                                href="#/" 
                                className="dropdown-item rounded-1 d-flex align-items-center gap-2 py-2 text-danger"
                                onClick={(e) => handleOpenDeleteModal(r, e)}
                              >
                                <i className="ti ti-trash fs-15"></i>Delete Role
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
      </div>

      {/* Stateful Add Role Modal */}
      {addModal && <div className="modal-backdrop fade show"></div>}
      {addModal && (
        <div className="modal fade show d-block animate-fade-in" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <form onSubmit={handleAddSubmit}>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                    <i className="ti ti-square-rounded-plus text-primary fs-22"></i>
                    Add New System Role
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setAddModal(false)}></button>
                </div>
                <div className="modal-body py-4">
                  <div className="mb-3">
                    <label className="form-label fw-medium text-secondary">Role Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. Internist"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label fw-medium text-secondary">Initial Status</label>
                    <select 
                      className="form-select"
                      value={formData.status}
                      onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0 d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setAddModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary flex-fill py-2">Create Role</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Stateful Edit Role Modal */}
      {editModal.isOpen && editModal.item && <div className="modal-backdrop fade show"></div>}
      {editModal.isOpen && editModal.item && (
        <div className="modal fade show d-block animate-fade-in" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <form onSubmit={handleEditSubmit}>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                    <i className="ti ti-edit text-primary fs-22"></i>
                    Edit System Role
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setEditModal({ isOpen: false, item: null })}></button>
                </div>
                <div className="modal-body py-4">
                  <div className="mb-3">
                    <label className="form-label fw-medium text-secondary">Role Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. Internist"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label fw-medium text-secondary">Status</label>
                    <select 
                      className="form-select"
                      value={formData.status}
                      onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0 d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setEditModal({ isOpen: false, item: null })}>Cancel</button>
                  <button type="submit" className="btn btn-primary flex-fill py-2">Save Role</button>
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
                  Delete System Role
                </h5>
                <button type="button" className="btn-close" onClick={handleCloseDeleteModal}></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-2 fs-14 text-secondary">
                  Are you sure you want to permanently delete this system authorization role:
                </p>
                <div className="p-3 bg-light rounded-3 mb-3 border theme-card-bg-light text-center fw-bold text-dark">
                  {deleteModal.item.name}
                </div>
                <p className="mb-0 fs-12 text-danger">
                  <i className="ti ti-info-circle me-1"></i>Note: Deleting this role will instantly revoke privileges for all assigned portal users.
                </p>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={handleCloseDeleteModal}>Close</button>
                <button 
                  type="button" 
                  className="btn btn-danger flex-fill py-2"
                  onClick={handleConfirmDelete}
                >
                  Yes, Delete Role
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

export default UserPermissionsSettings;
