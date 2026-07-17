import { Link, useLocation } from 'react-router-dom';

const tabs = [
  { path: '/patient-details', label: 'Profile', icon: 'ti ti-user-circle' },
  { path: '/patient-details-appointments', label: 'Appointments', icon: 'ti ti-calendar-check' },
  { path: '/patient-details-vital-signs', label: 'Vitals', icon: 'ti ti-heart-rate-monitor' },
  { path: '/patient-details-visit-history', label: 'Visit History', icon: 'ti ti-clipboard-list' },
  { path: '/patient-details-lab-results', label: 'Lab Results', icon: 'ti ti-flask' },
  { path: '/patient-details-prescription', label: 'Prescription', icon: 'ti ti-prescription' },
  { path: '/patient-details-medical-history', label: 'Medical History', icon: 'ti ti-notes' },
  { path: '/patient-details-documents', label: 'Documents', icon: 'ti ti-file-text' },
  { path: '/patient-details-insurance', label: 'Insurance', icon: 'ti ti-shield-check' },
];

const PatientDetailTabs = () => {
  const location = useLocation();

  return (
    <div className="patient-detail-tabs mb-4">
      <div className="tabs-scroll">
        <div className="patient-tabs-surface d-inline-flex gap-2 p-2 rounded-4">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`tab-item d-inline-flex align-items-center gap-2 px-3 py-2 rounded-3 fs-13 fw-medium text-decoration-none transition-all ${
                  isActive
                    ? 'tab-active text-primary shadow-sm'
                    : 'text-muted hover-primary'
                }`}
              >
                <span className="tab-icon-wrap">
                  <i className={`${tab.icon} fs-15`}></i>
                </span>
                <span className="d-none d-md-inline">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PatientDetailTabs;
