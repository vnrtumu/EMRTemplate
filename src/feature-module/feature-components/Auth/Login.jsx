import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)' }}>
      <div className="card border-0 shadow-lg" style={{ maxWidth: '440px', width: '100%', borderRadius: '16px' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <img src="/assets/img/logo.svg" alt="logo" height="48" className="mb-3" />
            <h4 className="fw-bold">Welcome Back</h4>
            <p className="text-muted">Sign in to continue to DreamsEMR</p>
          </div>
          <form onSubmit={handleLogin}>
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
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label" htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-decoration-none small">Forgot Password?</Link>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 fw-medium mb-3">Sign In</button>
            <div className="text-center">
              <span className="text-muted small">Don't have an account?</span>
              <Link to="/sign-up" className="text-decoration-none small ms-1 fw-medium">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
