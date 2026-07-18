import { Link } from 'react-router-dom';

const PageHeader = ({ title, breadcrumbs = [] }) => {
  return (
    <div className="page-header d-md-flex align-items-center justify-content-between mb-3">
      <div>
        <h3 className="page-title mb-0">{title}</h3>
      </div>
      {breadcrumbs.length > 0 && (
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className={`breadcrumb-item ${crumb.active ? 'active' : ''}`}>
                {crumb.path ? <Link to={crumb.path}>{crumb.label}</Link> : crumb.label}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  );
};

export default PageHeader;
