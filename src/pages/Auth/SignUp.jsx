import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)' }}>
      <div className="card border-0 shadow-lg" style={{ maxWidth: '440px', width: '100%', borderRadius: '16px' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <img src="/assets/img/logo.svg" alt="logo" height="48" className="mb-3" />
            <h4 className="fw-bold">Create Account</h4>
            <p className="text-muted">Sign up to get started with DreamsEMR</p>
          </div>
          <form onSubmit={e => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label fw-medium">Full Name</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="ti ti-user"></i></span>
                <input type="text" className="form-control" placeholder="Enter full name" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium">Email</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="ti ti-mail"></i></span>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium">Password</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="ti ti-lock"></i></span>
                <input type={showPassword ? 'text' : 'password'} className="form-control" placeholder="Enter password" />
                <button className="input-group-text bg-white border-start-0" type="button" onClick={() => setShowPassword(!showPassword)}>
                  <i className={`ti ${showPassword ? 'ti-eye-off' : 'ti-eye'}`}></i>
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label fw-medium">Confirm Password</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="ti ti-lock"></i></span>
                <input type={showConfirm ? 'text' : 'password'} className="form-control" placeholder="Confirm password" />
                <button className="input-group-text bg-white border-start-0" type="button" onClick={() => setShowConfirm(!showConfirm)}>
                  <i className={`ti ${showConfirm ? 'ti-eye-off' : 'ti-eye'}`}></i>
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 fw-medium mb-3">Create Account</button>
            <div className="text-center">
              <span className="text-muted small">Already have an account?</span>
              <Link to="/login" className="text-decoration-none small ms-1 fw-medium">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
