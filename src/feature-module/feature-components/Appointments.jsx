import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Static database of appointments
const INITIAL_APPOINTMENTS = [
  { id: '#PT0025', patientName: 'James Carter', patientImg: 'avatar-31.jpg', doctorName: 'Dr. Andrew Clark', doctorImg: 'doctor-01.jpg', department: 'Anaesthesiology', date: '17 Jun 2025, 09:00 AM to 10:00 AM', status: 'Upcoming', statusClass: 'badge-soft-purple' },
  { id: '#PT0024', patientName: 'Emily Davis', patientImg: 'avatar-54.jpg', doctorName: 'Dr. Katherine Brooks', doctorImg: 'doctor-03.jpg', department: 'Dental Surgery', date: '10 Jun 2025, 10:30 AM to 11:30 AM', status: 'Upcoming', statusClass: 'badge-soft-purple' },
  { id: '#PT0023', patientName: 'Michael Johnson', patientImg: 'avatar-38.jpg', doctorName: 'Dr. Benjamin Harris', doctorImg: 'doctor-04.jpg', department: 'Dermatology', date: '22 May 2025, 01:15 PM to 02:15 PM', status: 'Upcoming', statusClass: 'badge-soft-purple' },
  { id: '#PT0022', patientName: 'Olivia Miller', patientImg: 'avatar-51.jpg', doctorName: 'Dr. Laura Mitchell', doctorImg: 'doctor-05.jpg', department: 'ENT Surgery', date: '15 May 2025, 11:30 AM to 12:30 PM', status: 'Inprogress', statusClass: 'badge-soft-info' },
  { id: '#PT0021', patientName: 'David Smith', patientImg: 'avatar-41.jpg', doctorName: 'Dr. Christopher Lewis', doctorImg: 'doctor-06.jpg', department: 'General Medicine', date: '30 Apr 2025, 12:20 PM to 01:20 PM', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#PT0020', patientName: 'Sophia Wilson', patientImg: 'avatar-48.jpg', doctorName: 'Dr. Natalie Foster', doctorImg: 'doctor-07.jpg', department: 'Ophthalmology', date: '25 Apr 2025, 03:15 PM to 04:15 PM', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#PT0019', patientName: 'Daniel Williams', patientImg: 'avatar-53.jpg', doctorName: 'Dr. Jonathan Adams', doctorImg: 'doctor-10.jpg', department: 'Orthopaedics', date: '13 Mar 2025, 02:40 PM to 03:40 PM', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#PT0018', patientName: 'Isabella Anderson', patientImg: 'avatar-50.jpg', doctorName: 'Dr. Rebecca Scott', doctorImg: 'doctor-08.jpg', department: 'Pediatrics', date: '16 Feb 2025, 03:00 PM to 04:00 PM', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#PT0017', patientName: 'William Brown', patientImg: 'avatar-42.jpg', doctorName: 'Dr. Samuel Turner', doctorImg: 'doctor-12.jpg', department: 'Radiology', date: '20 Jan 2025, 04:45 PM to 05:45 PM', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#PT0016', patientName: 'Charlotte Taylor', patientImg: 'avatar-56.jpg', doctorName: 'Dr. Victoria Evans', doctorImg: 'doctor-11.jpg', department: 'Cardiology', date: '15 Jan 2025, 05:30 PM to 06:30 PM', status: 'Completed', statusClass: 'badge-soft-success' },
];

const Appointments = () => {
  const [appointmentsList, setAppointmentsList] = useState(INITIAL_APPOINTMENTS);
  
  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [activeQuery, setActiveQuery] = useState({
    search: "",
    department: "All",
    status: "All"
  });

  // Modal State
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    appointment: null
  });

  // Reset Filters
  const handleClearFilters = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setDeptFilter("All");
    setStatusFilter("All");
    setActiveQuery({
      search: "",
      department: "All",
      status: "All"
    });
  };

  // Submit Search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveQuery({
      search: searchQuery,
      department: deptFilter,
      status: statusFilter
    });
  };

  // Delete Handlers
  const handleOpenDeleteModal = (appointment, e) => {
    e.preventDefault();
    setDeleteModal({
      isOpen: true,
      appointment
    });
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      appointment: null
    });
  };

  const handleConfirmDelete = () => {
    if (deleteModal.appointment) {
      setAppointmentsList(prev => prev.filter(apt => apt.id !== deleteModal.appointment.id));
    }
    handleCloseDeleteModal();
  };

  // Refresh
  const handleRefresh = (e) => {
    e.preventDefault();
    setAppointmentsList(INITIAL_APPOINTMENTS);
    handleClearFilters(e);
  };

  // Filter computation
  const filteredAppointments = appointmentsList.filter(apt => {
    const term = activeQuery.search.toLowerCase().trim();
    const matchesSearch = term === "" || 
      apt.patientName.toLowerCase().includes(term) ||
      apt.id.toLowerCase().includes(term) ||
      apt.doctorName.toLowerCase().includes(term);

    const matchesDept = activeQuery.department === "All" || apt.department === activeQuery.department;
    const matchesStatus = activeQuery.status === "All" || apt.status === activeQuery.status;

    return matchesSearch && matchesDept && matchesStatus;
  });

  return (
    <>
      <div className="content patients-list-page">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Appointments Directory</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Appointments</li>
            </ol>
          </div>
          <div className="patients-list-toolbar d-flex align-items-center gap-2 flex-wrap">
            <button type="button" className="btn btn-icon btn-light" onClick={handleRefresh} title="Refresh"><i className="ti ti-refresh"></i></button>
            <button type="button" className="btn btn-icon btn-light" onClick={() => window.print()} title="Print"><i className="ti ti-printer"></i></button>
            <Link to="/add-patient" className="btn btn-primary d-inline-flex align-items-center gap-2">
              <i className="ti ti-square-rounded-plus"></i>New Appointment
            </Link>
          </div>
        </div>

        {/* Filter Card */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="row g-3">
                {/* Search Text Input */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label fw-medium text-secondary">Search Appointment</label>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      className="form-control ps-4" 
                      placeholder="Patient name, doctor, ID..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="ti ti-search position-absolute start-0 top-50 translate-middle-y ms-2 text-muted"></i>
                  </div>
                </div>

                {/* Department dropdown */}
                <div className="col-md-3 col-lg-3">
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
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Radiology">Radiology</option>
                    <option value="Cardiology">Cardiology</option>
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
                    <option value="Upcoming">Upcoming</option>
                    <option value="Inprogress">Inprogress</option>
                    <option value="Completed">Completed</option>
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
        {(activeQuery.search || activeQuery.department !== "All" || activeQuery.status !== "All") && (
          <div className="d-flex align-items-center justify-content-between p-3 bg-primary-transparent rounded-2 mb-4 border border-primary-subtle text-primary">
            <div className="d-flex align-items-center gap-2">
              <i className="ti ti-info-circle"></i>
              <p className="fs-13 mb-0">
                Filters Active: 
                {activeQuery.search && ` Keyword "${activeQuery.search}"`}
                {activeQuery.department !== "All" && ` Department: ${activeQuery.department}`}
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
                <div className="patients-list-kicker mb-2">Appointments Tracker</div>
                <h5 className="mb-2 fw-bold">Active Bookings</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="patients-list-total">{filteredAppointments.length}</span>
                  <span className="patients-list-subtitle">Scheduled practitioner sessions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            {filteredAppointments.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-modern patients-list-table mb-0 align-middle">
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Patient ID</th>
                      <th>Assigned Doctor</th>
                      <th>Department</th>
                      <th>Scheduled Time</th>
                      <th>Status</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAppointments.map(apt => (
                      <tr key={apt.id} className="hover-row">
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <Link to="/patient-details" className="avatar avatar-md patients-list-avatar flex-shrink-0">
                              <img 
                                src={`/assets/img/avatars/${apt.patientImg}`} 
                                alt={apt.patientName} 
                                className="rounded-circle"
                                onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                              />
                            </Link>
                            <div>
                              <h6 className="mb-1 fs-14 fw-semibold">
                                <Link to="/patient-details" className="text-decoration-none patients-list-link-dark">
                                  {apt.patientName}
                                </Link>
                              </h6>
                              <p className="mb-0 patients-list-muted">Scheduled checkup</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Link to="/patient-details" className="fw-semibold text-decoration-none">
                            {apt.id}
                          </Link>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <Link to="/doctor-details" className="avatar avatar-sm flex-shrink-0">
                              <img 
                                src={`/assets/img/doctors/${apt.doctorImg}`} 
                                alt={apt.doctorName} 
                                className="rounded-circle"
                                onError={(e) => { e.target.src = "/assets/img/doctors/doctor-01.jpg" }} 
                              />
                            </Link>
                            <div>
                              <Link to="/doctor-details" className="text-decoration-none fw-medium patients-list-link-dark">
                                {apt.doctorName}
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="patients-list-pill">{apt.department}</span>
                        </td>
                        <td>
                          <div className="patients-list-date">{apt.date}</div>
                        </td>
                        <td>
                          <span className={`badge patients-list-badge ${apt.statusClass}`}>
                            {apt.status}
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="dropdown">
                            <button className="btn btn-icon btn-sm patients-list-action" data-bs-toggle="dropdown" aria-label="more options">
                              <i className="ti ti-dots-vertical"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-clean p-1">
                              <li>
                                <Link to="/patient-details" className="dropdown-item d-flex align-items-center gap-2 py-2">
                                  <i className="ti ti-eye fs-15 text-muted"></i>View Details
                                </Link>
                              </li>
                              <li>
                                <Link to="/edit-patient" className="dropdown-item d-flex align-items-center gap-2 py-2">
                                  <i className="ti ti-edit fs-15 text-muted"></i>Edit
                                </Link>
                              </li>
                              <li><hr className="dropdown-divider" /></li>
                              <li>
                                <a 
                                  href="#/" 
                                  className="dropdown-item rounded-1 d-flex align-items-center gap-2 py-2 text-danger"
                                  onClick={(e) => handleOpenDeleteModal(apt, e)}
                                >
                                  <i className="ti ti-trash fs-15"></i>Cancel booking
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
                  <i className="ti ti-calendar-cancel text-muted" style={{ fontSize: '3.5rem' }}></i>
                </div>
                <h5 className="fw-semibold">No Appointments Found</h5>
                <p className="text-muted fs-14 px-3">We couldn't find any appointment matching active filters. Try adjusting keywords.</p>
                <button type="button" className="btn btn-primary btn-sm mt-2" onClick={handleClearFilters}>
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Stateful confirmation Modal */}
      {deleteModal.isOpen && deleteModal.appointment && (
        <div className="modal-backdrop fade show"></div>
      )}
      {deleteModal.isOpen && deleteModal.appointment && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2">
                  <i className="ti ti-alert-circle text-danger fs-22"></i>
                  Cancel Appointment
                </h5>
                <button type="button" className="btn-close" onClick={handleCloseDeleteModal} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <p className="mb-2 fs-14 text-secondary">
                  Are you sure you want to cancel the scheduled checkup for:
                </p>
                <div className="p-3 bg-light rounded-3 mb-3 border">
                  <div className="d-flex align-items-center gap-3">
                    <img 
                      src={`/assets/img/avatars/${deleteModal.appointment.patientImg}`} 
                      alt={deleteModal.appointment.patientName} 
                      className="avatar avatar-md rounded-circle border"
                      onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                    />
                    <div>
                      <h6 className="mb-1 fw-bold text-dark">{deleteModal.appointment.patientName}</h6>
                      <p className="mb-0 text-muted fs-12">ID: {deleteModal.appointment.id} | Practitioner: {deleteModal.appointment.doctorName}</p>
                    </div>
                  </div>
                  <hr className="my-2 text-muted opacity-25" />
                  <div className="fs-12 text-secondary">
                    <i className="ti ti-calendar me-1"></i>{deleteModal.appointment.date}
                  </div>
                </div>
                <p className="mb-0 fs-12 text-danger">
                  <i className="ti ti-info-circle me-1"></i>Note: This action cannot be undone and will release the practitioner slot.
                </p>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={handleCloseDeleteModal}>Close</button>
                <button 
                  type="button" 
                  className="btn btn-danger flex-fill py-2"
                  onClick={handleConfirmDelete}
                >
                  Yes, Cancel Booking
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

export default Appointments;
