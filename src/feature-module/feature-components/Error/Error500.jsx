import { Link } from 'react-router-dom';

const Error500 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">500</h1>
        <h4 className="mb-2">Internal Server Error</h4>
        <p className="text-muted mb-4">Something went wrong on our end. Please try again later.</p>
        <Link to="/" className="btn btn-primary">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default Error500;
