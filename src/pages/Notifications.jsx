import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Static database of user notifications
const INITIAL_NOTIFICATIONS = [
  { id: 1, name: 'John Doe', avatar: 'avatar-28.jpg', text: 'added new patient appointment booking', details: 'Cardiology Visit', time: '4 min ago', isUnread: true },
  { id: 2, name: 'Thomas William', avatar: 'avatar-30.jpg', text: 'booked a new appointment.', details: '', time: '15 min ago', isUnread: true },
  { id: 3, name: 'Sarah Anderson', avatar: 'avatar-29.jpg', text: 'has been successfully booked for', details: 'April 5 at 10:00 AM.', time: '45 Min Ago', isUnread: false },
  { id: 4, name: 'Ann McClure', avatar: 'avatar-31.jpg', text: 'cancelled her appointment scheduled for', details: 'February 5, 2024', time: '58 Min Ago', isUnread: false },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, target: 'all', itemId: null });

  // Mark all as read
  const handleMarkAllRead = (e) => {
    e.preventDefault();
    setNotifications(prev => prev.map(n => ({ ...n, isUnread: false })));
  };

  // Open single delete confirmation
  const handleOpenDeleteSingle = (id, e) => {
    e.preventDefault();
    setDeleteModal({ isOpen: true, target: 'single', itemId: id });
  };

  // Open clear-all confirmation
  const handleOpenDeleteAll = (e) => {
    e.preventDefault();
    setDeleteModal({ isOpen: true, target: 'all', itemId: null });
  };

  // Confirm delete handler
  const handleConfirmDelete = () => {
    if (deleteModal.target === 'all') {
      setNotifications([]);
    } else if (deleteModal.target === 'single' && deleteModal.itemId !== null) {
      setNotifications(prev => prev.filter(n => n.id !== deleteModal.itemId));
    }
    setDeleteModal({ isOpen: false, target: 'all', itemId: null });
  };

  // Refresh
  const handleRefresh = (e) => {
    e.preventDefault();
    setNotifications(INITIAL_NOTIFICATIONS);
  };

  const unreadCount = notifications.filter(n => n.isUnread).length;

  return (
    <>
      <style>{`
        .unread-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--bs-danger);
          display: inline-block;
        }
        .noti-card-unread {
          border-left: 3px solid var(--bs-primary) !important;
        }
      `}</style>

      <div className="content">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Notifications</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Notifications</li>
            </ol>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <button type="button" className="btn btn-icon btn-light" onClick={handleRefresh} title="Refresh"><i className="ti ti-refresh"></i></button>
          </div>
        </div>

        {/* Notifications Shell */}
        <div className="card border-0 shadow-sm mb-0">
          <div className="card-header d-flex align-items-center flex-wrap gap-3 justify-content-between">
            <h5 className="d-inline-flex align-items-center mb-0 fw-bold">
              Alerts & Activity 
              {unreadCount > 0 && (
                <span className="badge bg-danger ms-2">{unreadCount} Unread</span>
              )}
            </h5>
            {notifications.length > 0 && (
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <button type="button" className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1.5" onClick={handleMarkAllRead}>
                  <i className="ti ti-checks"></i>Mark all as read
                </button>
                <button type="button" className="btn btn-sm btn-danger d-inline-flex align-items-center gap-1.5" onClick={handleOpenDeleteAll}>
                  <i className="ti ti-trash"></i>Delete All
                </button>
              </div>
            )}
          </div>
          <div className="card-body">
            {notifications.length > 0 ? (
              <div className="d-flex flex-column gap-3">
                {notifications.map(n => (
                  <div key={n.id} className={`card border-0 shadow-sm notication-card mb-0 ${n.isUnread ? 'noti-card-unread' : ''}`}>
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div className="d-flex align-items-center gap-3">
                          <Link to="/patient-details" className="avatar flex-shrink-0">
                            <img 
                              src={`/assets/img/avatars/${n.avatar}`} 
                              alt="avatar" 
                              className="rounded-circle border" 
                              onError={(e) => { e.target.src = "/assets/img/avatars/avatar-28.jpg" }}
                            />
                          </Link>
                          <div>
                            <p className="mb-1 text-secondary fs-14">
                              <Link to="/patient-details" className="fw-semibold text-decoration-none text-dark me-1">
                                {n.name}
                              </Link>
                              {n.text}
                              {n.details && (
                                <span className="fw-medium text-dark ms-1">{n.details}</span>
                              )}
                            </p>
                            <p className="fs-12 mb-0 d-inline-flex align-items-center text-muted">
                              <i className="ti ti-clock me-1"></i> {n.time}
                              {n.isUnread && (
                                <span className="ms-2 d-inline-flex align-items-center gap-1 text-danger fw-semibold">
                                  <span className="unread-indicator"></span> New
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="noti-btn">
                          <button 
                            type="button" 
                            className="btn btn-icon btn-sm btn-outline-danger" 
                            onClick={(e) => handleOpenDeleteSingle(n.id, e)}
                            title="Delete alert"
                          >
                            <i className="ti ti-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5 bg-white">
                <div className="mb-3">
                  <i className="ti ti-bell-off text-muted" style={{ fontSize: '3.5rem' }}></i>
                </div>
                <h5 className="fw-semibold">All Caught Up!</h5>
                <p className="text-muted fs-14 px-3">There are no new notifications or activities to review at this time.</p>
                <button type="button" className="btn btn-primary btn-sm mt-2" onClick={handleRefresh}>
                  Reset Notifications
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stateful Delete Confirmation Modal */}
      {deleteModal.isOpen && (
        <div className="modal-backdrop fade show"></div>
      )}
      {deleteModal.isOpen && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-alert-circle text-danger fs-22"></i>
                  {deleteModal.target === 'all' ? 'Clear Notifications' : 'Delete Notification'}
                </h5>
                <button type="button" className="btn-close" onClick={() => setDeleteModal({ isOpen: false, target: 'all', itemId: null })} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-0 fs-14 text-secondary">
                  {deleteModal.target === 'all' 
                    ? 'Are you sure you want to permanently delete all notifications from your ledger?' 
                    : 'Are you sure you want to delete this notification alert?'}
                </p>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setDeleteModal({ isOpen: false, target: 'all', itemId: null })}>Cancel</button>
                <button 
                  type="button" 
                  className="btn btn-danger flex-fill py-2"
                  onClick={handleConfirmDelete}
                >
                  Yes, Delete
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

export default Notifications;
