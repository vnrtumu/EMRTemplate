import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Loaded database matching the exact schema of AllPatientsList.jsx
const INITIAL_PATIENTS = [
  {
    id: '#PT0025',
    name: 'James Carter',
    patientImg: 'avatar-31.jpg',
    gender: 'Male',
    department: 'Anaesthesiology',
    doctor: 'Dr. Andrew Clark',
    doctorImg: 'doctor-01.jpg',
    lastVisit: '17 Jun 2025',
    status: 'Out Patient',
    statusClass: 'badge-soft-orange',
    location: 'California'
  },
  {
    id: '#PT0024',
    name: 'Emily Davis',
    patientImg: 'avatar-54.jpg',
    gender: 'Female',
    department: 'Dental Surgery',
    doctor: 'Dr. Katherine Brooks',
    doctorImg: 'doctor-03.jpg',
    lastVisit: '10 Jun 2025',
    status: 'In Patient',
    statusClass: 'badge-soft-purple',
    location: 'Texas'
  },
  {
    id: '#PT0023',
    name: 'Michael Johnson',
    patientImg: 'avatar-45.jpg',
    gender: 'Male',
    department: 'Dermatology',
    doctor: 'Dr. Benjamin Harris',
    doctorImg: 'doctor-04.jpg',
    lastVisit: '22 May 2025',
    status: 'Out Patient',
    statusClass: 'badge-soft-orange',
    location: 'Florida'
  },
  {
    id: '#PT0022',
    name: 'Olivia Miller',
    patientImg: 'avatar-51.jpg',
    gender: 'Female',
    department: 'ENT Surgery',
    doctor: 'Dr. Laura Mitchell',
    doctorImg: 'doctor-05.jpg',
    lastVisit: '15 May 2025',
    status: 'In Patient',
    statusClass: 'badge-soft-purple',
    location: 'New York'
  },
  {
    id: '#PT0021',
    name: 'David Smith',
    patientImg: 'avatar-41.jpg',
    gender: 'Male',
    department: 'General Medicine',
    doctor: 'Dr. Christopher Lewis',
    doctorImg: 'doctor-06.jpg',
    lastVisit: '30 Apr 2025',
    status: 'Out Patient',
    statusClass: 'badge-soft-orange',
    location: 'Illinois'
  },
  {
    id: '#PT0020',
    name: 'Sophia Wilson',
    patientImg: 'avatar-48.jpg',
    gender: 'Female',
    department: 'Ophthalmology',
    doctor: 'Dr. Natalie Foster',
    doctorImg: 'doctor-07.jpg',
    lastVisit: '25 Apr 2025',
    status: 'In Patient',
    statusClass: 'badge-soft-purple',
    location: 'Georgia'
  },
  {
    id: '#PT0019',
    name: 'Daniel Williams',
    patientImg: 'avatar-53.jpg',
    gender: 'Male',
    department: 'Orthopaedics',
    doctor: 'Dr. Jonathan Adams',
    doctorImg: 'doctor-08.jpg',
    lastVisit: '13 Mar 2025',
    status: 'Out Patient',
    statusClass: 'badge-soft-orange',
    location: 'Texas'
  },
  {
    id: '#PT0018',
    name: 'Isabella Anderson',
    patientImg: 'avatar-50.jpg',
    gender: 'Female',
    department: 'Pediatrics',
    doctor: 'Dr. Rebecca Scott',
    doctorImg: 'doctor-09.jpg',
    lastVisit: '16 Feb 2025',
    status: 'In Patient',
    statusClass: 'badge-soft-purple',
    location: 'Ohio'
  },
  {
    id: '#PT0017',
    name: 'William Brown',
    patientImg: 'avatar-42.jpg',
    gender: 'Male',
    department: 'Radiology',
    doctor: 'Dr. Samuel Turner',
    doctorImg: 'doctor-10.jpg',
    lastVisit: '20 Jan 2025',
    status: 'Out Patient',
    statusClass: 'badge-soft-orange',
    location: 'Michigan'
  }
];

const PatientSearch = () => {
  const [patientsList, setPatientsList] = useState(INITIAL_PATIENTS);
  
  // Search query states
  const [searchQuery, setSearchQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationQuery, setLocationQuery] = useState("");

  // Target query states triggering filter render
  const [activeQuery, setActiveQuery] = useState({
    search: "",
    gender: "All",
    type: "All",
    location: ""
  });

  // Action: Reset filter parameters
  const handleClearSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setGenderFilter("All");
    setTypeFilter("All");
    setLocationQuery("");
    setActiveQuery({
      search: "",
      gender: "All",
      type: "All",
      location: ""
    });
  };

  // Action: Trigger query filter
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveQuery({
      search: searchQuery,
      gender: genderFilter,
      type: typeFilter,
      location: locationQuery
    });
  };

  // Action: Remove record locally
  const handleDeletePatient = (id, e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete patient record ${id}?`)) {
      setPatientsList(prev => prev.filter(patient => patient.id !== id));
    }
  };

  // Filter conditions
  const filteredPatients = patientsList.filter(patient => {
    const query = activeQuery.search.toLowerCase().trim();
    const locQuery = activeQuery.location.toLowerCase().trim();
    
    const matchesSearch = query === "" || 
      patient.name.toLowerCase().includes(query) || 
      patient.id.toLowerCase().includes(query);
      
    const matchesLocation = locQuery === "" || 
      patient.location.toLowerCase().includes(locQuery);

    const matchesGender = activeQuery.gender === "All" || 
      patient.gender === activeQuery.gender;

    const matchesType = activeQuery.type === "All" || 
      patient.status === activeQuery.type;

    return matchesSearch && matchesLocation && matchesGender && matchesType;
  });

  // Status Counts
  const inpatientCount = filteredPatients.filter(p => p.status === 'In Patient').length;
  const outpatientCount = filteredPatients.length - inpatientCount;

  return (
    <>
      <div className="content patients-list-page">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Patient Search</h4>
            <ol className="breadcrumb m-0 p-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/patients" className="text-decoration-none">Patients</Link></li>
              <li className="breadcrumb-item active">Search</li>
            </ol>
          </div>
          <button 
            type="button" 
            className="btn btn-icon btn-light" 
            onClick={handleClearSearch} 
            title="Refresh list"
          >
            <i className="ti ti-refresh"></i>
          </button>
        </div>

        {/* Filter Card */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="row g-3">
                {/* Search Text Query */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label fw-medium text-secondary">Search Patient</label>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      className="form-control ps-4" 
                      placeholder="Search by name, ID..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="ti ti-search position-absolute start-0 top-50 translate-middle-y ms-2 text-muted"></i>
                  </div>
                </div>

                {/* Location Input */}
                <div className="col-md-6 col-lg-2">
                  <label className="form-label fw-medium text-secondary">Location</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="State or city..." 
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                </div>

                {/* Gender Dropdown */}
                <div className="col-md-6 col-lg-2">
                  <label className="form-label fw-medium text-secondary">Gender</label>
                  <select 
                    className="form-select"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                  >
                    <option value="All">All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Patient Type Dropdown */}
                <div className="col-md-6 col-lg-2">
                  <label className="form-label fw-medium text-secondary">Patient Type</label>
                  <select 
                    className="form-select"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="All">All Types</option>
                    <option value="In Patient">In Patient</option>
                    <option value="Out Patient">Out Patient</option>
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="col-md-12 col-lg-2 d-flex align-items-end gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center gap-1 py-2"
                  >
                    <i className="ti ti-search"></i> Search
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-light w-100 d-inline-flex align-items-center justify-content-center gap-1 py-2 border"
                    onClick={handleClearSearch}
                  >
                    <i className="ti ti-circle-x"></i> Clear
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Search Info Alert Box */}
        {(activeQuery.search || activeQuery.location || activeQuery.gender !== "All" || activeQuery.type !== "All") && (
          <div className="d-flex align-items-center justify-content-between p-3 bg-primary-transparent rounded-2 mb-4 border border-primary-subtle text-primary">
            <div className="d-flex align-items-center gap-2">
              <i className="ti ti-info-circle"></i>
              <p className="fs-13 mb-0">
                Filters Active: 
                {activeQuery.search && ` Name/ID "${activeQuery.search}"`}
                {activeQuery.location && ` Location "${activeQuery.location}"`}
                {activeQuery.gender !== "All" && ` Gender: ${activeQuery.gender}`}
                {activeQuery.type !== "All" && ` Type: ${activeQuery.type}`}
              </p>
            </div>
            <button type="button" className="btn btn-sm btn-link text-primary p-0 text-decoration-none fw-semibold" onClick={handleClearSearch}>
              Reset Filters
            </button>
          </div>
        )}

        {/* Results Card Shell matching AllPatientsList.jsx */}
        <div className="card border-0 shadow-sm patients-list-shell">
          <div className="card-body p-4 border-bottom patients-list-hero">
            <div className="d-flex align-items-start justify-content-between gap-3 flex-wrap">
              <div>
                <div className="patients-list-kicker mb-2">Search Directory</div>
                <h5 className="mb-2 fw-bold">Patients Found</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="patients-list-total">{filteredPatients.length}</span>
                  <span className="patients-list-subtitle">Matching EMR records</span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 flex-wrap">
                <span className="patients-list-stat-chip">
                  <span className="dot dot-purple"></span>
                  In Patient {inpatientCount}
                </span>
                <span className="patients-list-stat-chip">
                  <span className="dot dot-orange"></span>
                  Out Patient {outpatientCount}
                </span>
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            {filteredPatients.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-modern patients-list-table mb-0 align-middle">
                  <thead>
                    <tr>
                      <th>Patient</th>
                      <th>ID</th>
                      <th>Gender</th>
                      <th>Department</th>
                      <th>Doctor</th>
                      <th>Last Visit</th>
                      <th>Status</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.map(patient => (
                      <tr key={patient.id} className="hover-row">
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <Link to="/patient-details" className="avatar avatar-md patients-list-avatar flex-shrink-0">
                              <img 
                                src={`/assets/img/avatars/${patient.patientImg}`} 
                                alt={patient.name} 
                                className="rounded-circle"
                                onError={(e) => { e.target.src = "/assets/img/avatars/avatar-39.jpg" }} 
                              />
                            </Link>
                            <div>
                              <h6 className="mb-1 fs-14 fw-semibold">
                                <Link to="/patient-details" className="text-decoration-none patients-list-link-dark">
                                  {patient.name}
                                </Link>
                              </h6>
                              <p className="mb-0 patients-list-muted">Patient record</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Link to="/patient-details" className="fw-semibold text-decoration-none">
                            {patient.id}
                          </Link>
                        </td>
                        <td>{patient.gender}</td>
                        <td>
                          <span className="patients-list-pill">{patient.department}</span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <Link to="/doctor-details" className="avatar avatar-sm flex-shrink-0">
                              <img src={`/assets/img/doctors/${patient.doctorImg}`} alt={patient.doctor} className="rounded-circle" />
                            </Link>
                            <div>
                              <Link to="/doctor-details" className="text-decoration-none fw-medium patients-list-link-dark">
                                {patient.doctor}
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="patients-list-date">{patient.lastVisit}</div>
                        </td>
                        <td>
                          <span className={`badge patients-list-badge ${patient.statusClass}`}>
                            {patient.status}
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
                                  className="dropdown-item d-flex align-items-center gap-2 py-2 text-danger"
                                  onClick={(e) => handleDeletePatient(patient.id, e)}
                                >
                                  <i className="ti ti-trash fs-15"></i>Delete
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
                  <i className="ti ti-users-minus text-muted" style={{ fontSize: '3.5rem' }}></i>
                </div>
                <h5 className="fw-semibold">No Patients Found</h5>
                <p className="text-muted fs-14 px-3">We couldn't find any patient matching the filters or query search. Try adjusting keywords.</p>
                <button type="button" className="btn btn-primary btn-sm mt-2" onClick={handleClearSearch}>
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PatientSearch;
