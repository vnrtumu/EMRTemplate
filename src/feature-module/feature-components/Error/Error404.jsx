import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h4 className="mb-2">Page Not Found</h4>
        <p className="text-muted mb-4">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default Error404;
