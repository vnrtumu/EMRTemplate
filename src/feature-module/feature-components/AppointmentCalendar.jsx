import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Static initial database of scheduled appointments for July 2026
const INITIAL_APPOINTMENTS = [
  { id: '#APT025', patientName: 'James Carter', patientImg: 'avatar-05.jpg', doctorName: 'Dr. Andrew Clark', doctorImg: 'doctor-01.jpg', department: 'Anaesthesiology', date: new Date(2026, 6, 17), timeSlot: '09:00 AM - 10:00 AM', status: 'Upcoming', statusClass: 'badge-soft-purple' },
  { id: '#APT024', patientName: 'Emily Davis', patientImg: 'avatar-34.jpg', doctorName: 'Dr. Katherine Brooks', doctorImg: 'doctor-03.jpg', department: 'Dental Surgery', date: new Date(2026, 6, 18), timeSlot: '10:30 AM - 11:30 AM', status: 'Upcoming', statusClass: 'badge-soft-purple' },
  { id: '#APT023', patientName: 'Michael Johnson', patientImg: 'avatar-06.jpg', doctorName: 'Dr. Benjamin Harris', doctorImg: 'doctor-04.jpg', department: 'Dermatology', date: new Date(2026, 6, 17), timeSlot: '01:15 PM - 02:15 PM', status: 'Inprogress', statusClass: 'badge-soft-info' },
  { id: '#APT022', patientName: 'Olivia Miller', patientImg: 'avatar-25.jpg', doctorName: 'Dr. Laura Mitchell', doctorImg: 'doctor-05.jpg', department: 'ENT Surgery', date: new Date(2026, 6, 15), timeSlot: '11:30 AM - 12:30 PM', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#APT021', patientName: 'David Smith', patientImg: 'avatar-14.jpg', doctorName: 'Dr. Christopher Lewis', doctorImg: 'doctor-06.jpg', department: 'General Medicine', date: new Date(2026, 6, 10), timeSlot: '12:20 PM - 01:20 PM', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#APT020', patientName: 'Sophia Wilson', patientImg: 'avatar-22.jpg', doctorName: 'Dr. Natalie Foster', doctorImg: 'doctor-07.jpg', department: 'Ophthalmology', date: new Date(2026, 6, 25), timeSlot: '03:15 PM - 04:15 PM', status: 'Completed', statusClass: 'badge-soft-success' },
  { id: '#APT019', patientName: 'Daniel Williams', patientImg: 'avatar-30.jpg', doctorName: 'Dr. Jonathan Adams', doctorImg: 'doctor-10.jpg', department: 'Orthopaedics', date: new Date(2026, 6, 17), timeSlot: '02:40 PM - 03:40 PM', status: 'Upcoming', statusClass: 'badge-soft-purple' },
  { id: '#APT018', patientName: 'Isabella Anderson', patientImg: 'avatar-24.jpg', doctorName: 'Dr. Rebecca Scott', doctorImg: 'doctor-08.jpg', department: 'Paediatrics', date: new Date(2026, 6, 16), timeSlot: '03:00 PM - 04:00 PM', status: 'Completed', statusClass: 'badge-soft-success' },
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

const STATUS_STYLES = {
  Upcoming: {
    backgroundColor: '#F2EAFE',
    color: '#7C3AED'
  },
  Inprogress: {
    backgroundColor: '#E0F2FE',
    color: '#0369A1'
  },
  Completed: {
    backgroundColor: '#DCFCE7',
    color: '#15803D'
  }
};

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// List of doctors for checklist filter
const DOCTORS_LIST = [
  { name: 'Dr. Andrew Clark', dept: 'Anaesthesiology' },
  { name: 'Dr. Katherine Brooks', dept: 'Dental Surgery' },
  { name: 'Dr. Benjamin Harris', dept: 'Dermatology' },
  { name: 'Dr. Laura Mitchell', dept: 'ENT' },
  { name: 'Dr. Christopher Lewis', dept: 'General Medicine' },
  { name: 'Dr. Natalie Foster', dept: 'Ophthalmology' },
  { name: 'Dr. Jonathan Adams', dept: 'Orthopaedics' },
  { name: 'Dr. Rebecca Scott', dept: 'Paediatrics' }
];

const AppointmentCalendar = () => {
  // Calendar Year & Month states
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(6); // July (0-indexed: June = 5, July = 6)
  
  // Selection states
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 6, 17));
  const [activeDoctorFilters, setActiveDoctorFilters] = useState(
    DOCTORS_LIST.map(doc => doc.name)
  );

  // Stateful appointments database
  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS);

  // Modals state
  const [addModal, setAddModal] = useState({ isOpen: false });
  const [viewModal, setViewModal] = useState({ isOpen: false, appointment: null });

  // Add Appointment Form State
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '#PT' + Math.floor(1000 + Math.random() * 9000),
    doctorName: DOCTORS_LIST[0].name,
    department: DOCTORS_LIST[0].dept,
    dateString: '2026-07-17',
    timeSlot: '09:00 AM - 10:00 AM',
    status: 'Upcoming'
  });

  // Calculate calendar days list
  const getDaysGrid = () => {
    const days = [];
    const date = new Date(currentYear, currentMonth, 1);
    
    // Starting index day of week
    const startDay = date.getDay();
    
    // Fill padding from previous month
    const prevMonthDate = new Date(currentYear, currentMonth, 0);
    const prevDaysCount = prevMonthDate.getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      const d = prevDaysCount - i;
      days.push({
        day: d,
        type: 'prev',
        date: new Date(currentYear, currentMonth - 1, d)
      });
    }

    // Fill current month days
    const currentMonthDate = new Date(currentYear, currentMonth + 1, 0);
    const currentDaysCount = currentMonthDate.getDate();
    for (let d = 1; d <= currentDaysCount; d++) {
      days.push({
        day: d,
        type: 'current',
        date: new Date(currentYear, currentMonth, d)
      });
    }

    // Fill padding for next month (42 cells limit)
    const nextPadding = 42 - days.length;
    for (let d = 1; d <= nextPadding; d++) {
      days.push({
        day: d,
        type: 'next',
        date: new Date(currentYear, currentMonth + 1, d)
      });
    }

    return days;
  };

  const daysGrid = getDaysGrid();

  // Navigation handlers
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handleToday = () => {
    const today = new Date();
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
    setSelectedDate(today);
  };

  // Toggle Doctor filter check
  const handleDoctorFilterToggle = (docName) => {
    setActiveDoctorFilters(prev => 
      prev.includes(docName) 
        ? prev.filter(name => name !== docName)
        : [...prev, docName]
    );
  };

  // Verify if two dates match day/month/year
  const isSameDay = (d1, d2) => {
    return d1.getDate() === d2.getDate() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getFullYear() === d2.getFullYear();
  };

  // Find appointments on a date
  const getAppointmentsForDate = (date) => {
    return appointments.filter(apt => 
      isSameDay(apt.date, date) && 
      activeDoctorFilters.includes(apt.doctorName)
    );
  };

  // Open detailed popup
  const handleOpenViewModal = (apt, e) => {
    e.stopPropagation();
    setViewModal({
      isOpen: true,
      appointment: apt
    });
  };

  // Form submit handler
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === 'doctorName') {
      const matchedDoc = DOCTORS_LIST.find(d => d.name === value);
      setFormData(prev => ({
        ...prev,
        doctorName: value,
        department: matchedDoc ? matchedDoc.dept : prev.department
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName) {
      alert("Please enter patient name");
      return;
    }

    const [y, m, d] = formData.dateString.split('-').map(Number);
    const statusClasses = {
      Upcoming: 'badge-soft-purple',
      Inprogress: 'badge-soft-info',
      Completed: 'badge-soft-success'
    };

    const newApt = {
      id: formData.patientId,
      patientName: formData.patientName,
      patientImg: 'avatar-39.jpg',
      doctorName: formData.doctorName,
      doctorImg: 'doctor-01.jpg',
      department: formData.department,
      date: new Date(y, m - 1, d),
      timeSlot: formData.timeSlot,
      status: formData.status,
      statusClass: statusClasses[formData.status] || 'badge-soft-purple'
    };

    setAppointments(prev => [...prev, newApt]);
    setAddModal({ isOpen: false });
    
    // Reset form fields
    setFormData({
      patientName: '',
      patientId: '#PT' + Math.floor(1000 + Math.random() * 9000),
      doctorName: DOCTORS_LIST[0].name,
      department: DOCTORS_LIST[0].dept,
      dateString: '2026-07-17',
      timeSlot: '09:00 AM - 10:00 AM',
      status: 'Upcoming'
    });
  };

  // Delete appointment action
  const handleCancelAppointment = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment slot?")) {
      setAppointments(prev => prev.filter(apt => apt.id !== id));
      setViewModal({ isOpen: false, appointment: null });
    }
  };

  // Side schedule details
  const selectedDayAppointments = getAppointmentsForDate(selectedDate);

  return (
    <>
      <style>{`
        /* Theme-aware calendar styles */
        .calendar-grid-cell {
          background-color: var(--bs-card-bg);
          border-right: 1px solid var(--bs-border-color);
          border-bottom: 1px solid var(--bs-border-color);
          min-height: 105px;
          position: relative;
          padding: 0.25rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .calendar-grid-cell:hover {
          background-color: var(--bs-tertiary-bg) !important;
        }
        .calendar-header-day {
          background-color: var(--bs-tertiary-bg) !important;
          color: var(--bs-body-color) !important;
          border-bottom: 1px solid var(--bs-border-color);
        }
        .timeline-card-item {
          background-color: var(--bs-tertiary-bg) !important;
          border: 1px solid var(--bs-border-color) !important;
        }
        .timeline-badge-time {
          background-color: var(--bs-card-bg) !important;
          color: var(--bs-body-color) !important;
          border: 1px solid var(--bs-border-color) !important;
        }
        .practitioner-checkbox-label {
          color: var(--bs-body-color) !important;
        }
        .theme-card-bg-light {
          background-color: var(--bs-tertiary-bg) !important;
          border: 1px solid var(--bs-border-color) !important;
        }
      `}</style>
      <div className="content patients-list-page">
        {/* Header Breadcrumbs */}
        <div className="d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Scheduler</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/appointments" className="text-decoration-none">Appointments</Link></li>
              <li className="breadcrumb-item active">Calendar</li>
            </ol>
          </div>
          <div>
            <button 
              type="button" 
              className="btn btn-primary d-inline-flex align-items-center gap-2"
              onClick={() => setAddModal({ isOpen: true })}
            >
              <i className="ti ti-square-rounded-plus"></i>
              Add Appointment
            </button>
          </div>
        </div>

        <div className="row g-4">
          {/* Left panel: Filter doctors list */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-transparent py-3 border-bottom">
                <h5 className="mb-0 fw-semibold fs-15">Practitioners</h5>
              </div>
              <div className="card-body py-2">
                <p className="fs-12 text-muted mb-3">Check / uncheck checkbox to toggle appointments on the scheduler calendar.</p>
                {DOCTORS_LIST.map((doc, idx) => (
                  <div key={idx} className="form-check form-check-md mb-2.5 d-flex align-items-center">
                    <input 
                      className="form-check-input me-2" 
                      type="checkbox" 
                      id={`doc-check-${idx}`} 
                      checked={activeDoctorFilters.includes(doc.name)}
                      onChange={() => handleDoctorFilterToggle(doc.name)}
                    />
                    <label className="form-check-label fs-13 text-secondary text-truncate cursor-pointer" htmlFor={`doc-check-${idx}`} style={{ width: '85%' }}>
                      <span className="fw-semibold practitioner-checkbox-label d-block">{doc.name}</span>
                      <span className="fs-11 text-muted">{doc.dept}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats widget */}
            <div className="card border-0 shadow-sm bg-primary text-white mb-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="ti ti-calendar-event fs-22"></i>
                  <h6 className="mb-0 text-white fw-bold">Scheduler Stats</h6>
                </div>
                <div className="fs-32 fw-bold mb-1">{appointments.length}</div>
                <p className="fs-12 text-white-50 mb-0">Total active scheduled slots in EMR ledger directory.</p>
              </div>
            </div>
          </div>

          {/* Center Calendar section */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm mb-0">
              {/* Calendar control bar */}
              <div className="card-header bg-transparent border-bottom d-flex align-items-center justify-content-between py-3 flex-wrap gap-2">
                <h5 className="mb-0 fw-bold d-flex align-items-center gap-2">
                  <i className="ti ti-calendar text-primary fs-18"></i>
                  {MONTH_NAMES[currentMonth]} {currentYear}
                </h5>
                <div className="d-flex align-items-center gap-1">
                  <button type="button" className="btn btn-sm btn-icon btn-light border" onClick={handlePrevMonth} title="Previous Month">
                    <i className="ti ti-chevron-left"></i>
                  </button>
                  <button type="button" className="btn btn-sm btn-light border px-2.5" onClick={handleToday}>
                    Today
                  </button>
                  <button type="button" className="btn btn-sm btn-icon btn-light border" onClick={handleNextMonth} title="Next Month">
                    <i className="ti ti-chevron-right"></i>
                  </button>
                </div>
              </div>

              {/* Monthly calendar matrix */}
              <div className="card-body p-0">
                <div className="d-grid text-center border-bottom text-muted fw-bold calendar-header-day" style={{ gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', fontSize: '0.75rem', padding: '0.5rem 0' }}>
                  {WEEK_DAYS.map(day => (
                    <div key={day}>{day}</div>
                  ))}
                </div>
                
                <div className="d-grid" style={{ gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', background: 'var(--bs-border-color)' }}>
                  {daysGrid.map((cell, idx) => {
                    const cellAppointments = getAppointmentsForDate(cell.date);
                    const isSelected = isSameDay(cell.date, selectedDate);
                    const isToday = isSameDay(cell.date, new Date());
                    
                    return (
                      <div 
                        key={idx} 
                        className="calendar-grid-cell position-relative p-1"
                        style={{ 
                          minHeight: '105px', 
                          opacity: cell.type === 'current' ? 1 : 0.45,
                          outline: isSelected ? '2px solid var(--bs-primary)' : 'none',
                          zIndex: isSelected ? 2 : 1
                        }}
                        onClick={() => setSelectedDate(cell.date)}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          {isToday && (
                            <span className="badge bg-primary-transparent text-primary rounded-pill py-0.5 px-1.5 fs-10 fw-semibold">TODAY</span>
                          )}
                          <span className={`fs-12 fw-semibold ms-auto p-1 rounded-circle ${isToday ? 'bg-primary text-white d-inline-flex align-items-center justify-content-center' : ''}`} style={isToday ? { width: '22px', height: '22px' } : {}}>
                            {cell.day}
                          </span>
                        </div>
                        
                        {/* Event list container */}
                        <div className="event-list" style={{ maxHeight: '72px', overflowY: 'auto' }}>
                          {cellAppointments.map(apt => (
                            <div 
                              key={apt.id} 
                              className="d-block text-start mb-0.5 py-1 px-1.5 fs-9 text-truncate rounded-1 fw-semibold text-decoration-none"
                              style={{
                                backgroundColor: STATUS_STYLES[apt.status]?.backgroundColor || '#F2EAFE',
                                color: STATUS_STYLES[apt.status]?.color || '#7C3AED',
                                cursor: 'pointer'
                              }}
                              title={`${apt.patientName} - ${apt.timeSlot}`}
                              onClick={(e) => handleOpenViewModal(apt, e)}
                            >
                              <span className="fw-bold">{apt.timeSlot.split(' ')[0]}</span> {apt.patientName}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Day schedule */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-transparent py-3 border-bottom">
                <h5 className="mb-0 fw-semibold fs-15">
                  Schedule: {selectedDate.getDate()} {MONTH_NAMES[selectedDate.getMonth()]}
                </h5>
              </div>
              <div className="card-body p-3">
                {selectedDayAppointments.length > 0 ? (
                  <div className="vertical-timeline-container">
                    {selectedDayAppointments.map(apt => (
                      <div 
                        key={apt.id} 
                        className="p-3 timeline-card-item rounded-3 mb-3 hover-card cursor-pointer position-relative"
                        onClick={(e) => handleOpenViewModal(apt, e)}
                      >
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="badge timeline-badge-time fs-11 fw-semibold">{apt.timeSlot}</span>
                          <span className={`badge patients-list-badge ${apt.statusClass} fs-10`}>{apt.status}</span>
                        </div>
                        
                        <div className="d-flex align-items-center gap-2.5 mb-2">
                          <img 
                            src={`/assets/img/avatars/${apt.patientImg}`} 
                            alt={apt.patientName} 
                            className="avatar avatar-sm rounded-circle border"
                            onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                          />
                          <div>
                            <h6 className="mb-0 fs-13 fw-bold">{apt.patientName}</h6>
                            <p className="mb-0 text-muted fs-11">Patient ID: {apt.id}</p>
                          </div>
                        </div>
                        
                        <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                          <span className="fs-11 text-muted"><i className="ti ti-stethoscope me-1 text-primary"></i>{apt.doctorName}</span>
                          <span className="fs-11 text-secondary font-weight-medium">{apt.department}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-5">
                    <div className="mb-2">
                      <i className="ti ti-clipboard-list text-muted fs-32"></i>
                    </div>
                    <h6 className="fw-semibold fs-13">No Bookings</h6>
                    <p className="text-muted fs-12 mb-0 px-2">There are no appointments scheduled for this date in EMR tracker.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stateful Add Appointment Modal Overlay */}
      {addModal.isOpen && (
        <div className="modal-backdrop fade show"></div>
      )}
      {addModal.isOpen && (
        <div className="modal fade show d-block animate-fade-in" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <form onSubmit={handleAddSubmit}>
                 <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold d-flex align-items-center gap-2">
                    <i className="ti ti-square-rounded-plus text-primary fs-22"></i>
                    Schedule Appointment
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setAddModal({ isOpen: false })} aria-label="Close"></button>
                </div>
                <div className="modal-body py-4">
                  <div className="mb-3">
                    <label className="form-label fw-medium text-secondary">Patient Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter patient full name..." 
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Patient ID</label>
                      <input 
                        type="text" 
                        className="form-control theme-card-bg-light" 
                        name="patientId"
                        value={formData.patientId}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Practitioner</label>
                      <select 
                        className="form-select"
                        name="doctorName"
                        value={formData.doctorName}
                        onChange={handleFormChange}
                      >
                        {DOCTORS_LIST.map((doc, idx) => (
                          <option key={idx} value={doc.name}>{doc.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-medium text-secondary">Assigned Department</label>
                    <input 
                      type="text" 
                      className="form-control theme-card-bg-light" 
                      name="department"
                      value={formData.department}
                      readOnly
                    />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Date</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        name="dateString"
                        value={formData.dateString}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-secondary">Time Slot</label>
                      <select 
                        className="form-select"
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleFormChange}
                      >
                        <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                        <option value="10:30 AM - 11:30 AM">10:30 AM - 11:30 AM</option>
                        <option value="11:30 AM - 12:30 PM">11:30 AM - 12:30 PM</option>
                        <option value="12:20 PM - 01:20 PM">12:20 PM - 01:20 PM</option>
                        <option value="01:15 PM - 02:15 PM">01:15 PM - 02:15 PM</option>
                        <option value="02:40 PM - 03:40 PM">02:40 PM - 03:40 PM</option>
                        <option value="03:15 PM - 04:15 PM">03:15 PM - 04:15 PM</option>
                        <option value="04:45 PM - 05:45 PM">04:45 PM - 05:45 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="form-label fw-medium text-secondary">Status</label>
                    <select 
                      className="form-select"
                      name="status"
                      value={formData.status}
                      onChange={handleFormChange}
                    >
                      <option value="Upcoming">Upcoming</option>
                      <option value="Inprogress">Inprogress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0 d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setAddModal({ isOpen: false })}>Cancel</button>
                  <button type="submit" className="btn btn-primary flex-fill py-2">Schedule Slot</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Stateful View Appointment Details Modal Overlay */}
      {viewModal.isOpen && viewModal.appointment && (
        <div className="modal-backdrop fade show"></div>
      )}
      {viewModal.isOpen && viewModal.appointment && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold d-flex align-items-center gap-2">
                  <i className="ti ti-calendar text-primary fs-22"></i>
                  Booking Details
                </h5>
                <button type="button" className="btn-close" onClick={() => setViewModal({ isOpen: false, appointment: null })} aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <div className="p-3 theme-card-bg-light rounded-3 mb-3">
                  <span className="fs-11 text-uppercase text-secondary fw-bold tracking-wider mb-2 d-block">Patient Information</span>
                  <div className="d-flex align-items-center gap-3">
                    <img 
                      src={`/assets/img/avatars/${viewModal.appointment.patientImg}`} 
                      alt={viewModal.appointment.patientName} 
                      className="avatar avatar-md rounded-circle border"
                      onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                    />
                    <div>
                      <h6 className="mb-0.5 fw-bold fs-15">{viewModal.appointment.patientName}</h6>
                      <p className="mb-0 text-muted fs-12">Patient ID: {viewModal.appointment.id}</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 theme-card-bg-light rounded-3 mb-3">
                  <span className="fs-11 text-uppercase text-secondary fw-bold tracking-wider mb-2 d-block">Practitioner Assignment</span>
                  <div className="d-flex align-items-center gap-3">
                    <img 
                      src={`/assets/img/doctors/${viewModal.appointment.doctorImg}`} 
                      alt={viewModal.appointment.doctorName} 
                      className="avatar avatar-md rounded-circle border"
                      onError={(e) => { e.target.src = "/assets/img/doctors/doctor-01.jpg" }} 
                    />
                    <div>
                      <h6 className="mb-0.5 fw-bold fs-15">{viewModal.appointment.doctorName}</h6>
                      <p className="mb-0 text-muted fs-12">Specialist: {viewModal.appointment.department}</p>
                    </div>
                  </div>
                </div>

                <div className="row g-2">
                  <div className="col-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold mb-1 d-block">Scheduled date</span>
                      <div className="fs-13 fw-semibold">
                        {viewModal.appointment.date.getDate()} {MONTH_NAMES[viewModal.appointment.date.getMonth()]} {viewModal.appointment.date.getFullYear()}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 theme-card-bg-light rounded-3">
                      <span className="fs-11 text-uppercase text-secondary fw-bold mb-1 d-block">Time slot</span>
                      <div className="fs-13 fw-semibold">{viewModal.appointment.timeSlot}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-3 theme-card-bg-light rounded-3 d-flex align-items-center justify-content-between">
                  <span className="fs-12 text-secondary fw-medium">Appointment status</span>
                  <span className={`badge patients-list-badge ${viewModal.appointment.statusClass} px-3 py-1.5 fs-12`}>
                    {viewModal.appointment.status}
                  </span>
                </div>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex gap-2">
                <button type="button" className="btn btn-light flex-fill border py-2" onClick={() => setViewModal({ isOpen: false, appointment: null })}>Close</button>
                <button 
                  type="button" 
                  className="btn btn-danger flex-fill py-2"
                  onClick={() => handleCancelAppointment(viewModal.appointment.id)}
                >
                  Cancel Appointment
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

export default AppointmentCalendar;
