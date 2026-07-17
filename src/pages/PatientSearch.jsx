import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../components/PatientDetailTabs.css';

const PatientSearch = () => {
  return (
    <>
      <div className="content">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div className="breadcrumb-arrow">
            <h4 className="mb-0 fw-semibold">Patient Search</h4>
            <ol className="breadcrumb m-0 py-0 mt-1">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active">Patient Search</li>
            </ol>
          </div>
          <a href="#/" className="btn btn-icon btn-light" data-bs-toggle="tooltip" title="Refresh"><i className="ti ti-refresh"></i></a>
        </div>

        <div className="card border-0 shadow-sm">
          <div className="card-body p-3">
            <div className="row g-2 align-items-center">
              <div className="col-md-6 col-lg-4">
                <div className="search-wrapper">
                  <i className="ti ti-search search-icon"></i>
                  <input type="text" className="form-control" placeholder="Search by name, ID, phone..." defaultValue="James Carter" />
                </div>
              </div>
              <div className="col-md-3 col-lg-2">
                <button type="submit" className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center gap-1">
                  <i className="ti ti-search"></i> Search
                </button>
              </div>
              <div className="col-md-3 col-lg-2">
                <button className="btn btn-light w-100 d-inline-flex align-items-center justify-content-center gap-1">
                  <i className="ti ti-circle-x"></i> Clear
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2 p-3 bg-primary-transparent rounded-2 mb-3 d-none">
          <i className="ti ti-info-circle text-primary"></i>
          <p className="fs-13 mb-0">Quickly find patient records by entering basic details.</p>
        </div>

        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent d-flex align-items-center flex-wrap gap-2 justify-content-between py-3">
            <h5 className="mb-0 fw-semibold d-inline-flex align-items-center gap-2">
              <i className="ti ti-users text-primary"></i>
              Search Results
              <span className="badge bg-primary rounded-pill fs-12">1</span>
            </h5>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-modern mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-3">Patient ID</th>
                    <th>Patient Name</th>
                    <th>Gender</th>
                    <th>Last Visit</th>
                    <th>Status</th>
                    <th className="text-end pe-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ps-3">
                      <Link to="/patient-details" className="fw-medium text-primary text-decoration-none">#PT0025</Link>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <Link to="/patient-details" className="avatar avatar-sm flex-shrink-0">
                          <img src="/assets/img/avatars/avatar-31.jpg" alt="patient" className="rounded-circle" />
                        </Link>
                        <h6 className="fs-14 mb-0 fw-medium">
                          <Link to="/patient-details" className="text-decoration-none text-dark">James Carter</Link>
                        </h6>
                      </div>
                    </td>
                    <td><span className="d-inline-flex align-items-center gap-1"><i className="ti ti-gender-male text-info"></i>Male</span></td>
                    <td>17 Jun 2025</td>
                    <td><span className="badge badge-soft-orange">Out Patient</span></td>
                    <td className="text-end pe-3">
                      <div className="dropdown d-inline-block">
                        <a href="#/" className="btn btn-icon btn-sm btn-outline-light" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-clean p-1">
                          <li><Link to="/patient-details" className="dropdown-item rounded-1 d-flex align-items-center gap-2"><i className="ti ti-eye fs-15"></i>View Details</Link></li>
                          <li><Link to="/edit-patient" className="dropdown-item rounded-1 d-flex align-items-center gap-2"><i className="ti ti-edit fs-15"></i>Edit</Link></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><a href="#/" className="dropdown-item rounded-1 d-flex align-items-center gap-2 text-danger"><i className="ti ti-trash fs-15"></i>Delete</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PatientSearch;
