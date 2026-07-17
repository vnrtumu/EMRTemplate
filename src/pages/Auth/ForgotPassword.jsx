import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)' }}>
      <div className="card border-0 shadow-lg" style={{ maxWidth: '440px', width: '100%', borderRadius: '16px' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
              <i className="ti ti-shield-lock fs-32 text-primary"></i>
            </div>
            <h4 className="fw-bold">Forgot Password?</h4>
            <p className="text-muted">Enter your email to receive a reset link</p>
          </div>
          <form onSubmit={e => e.preventDefault()}>
            <div className="mb-4">
              <label className="form-label fw-medium">Email</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="ti ti-mail"></i></span>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 fw-medium mb-3">
              <i className="ti ti-send me-2"></i>Send Reset Link
            </button>
            <div className="text-center">
              <Link to="/login" className="text-decoration-none small">
                <i className="ti ti-arrow-left me-1"></i>Back to Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
