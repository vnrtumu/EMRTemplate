import { useState } from 'react'
import { Link } from 'react-router-dom'

const LockScreen = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)' }}>
      <div className="card border-0 shadow-lg" style={{ maxWidth: '440px', width: '100%', borderRadius: '16px' }}>
        <div className="card-body p-5 text-center">
          <div className="mb-4">
            <img src="/assets/img/avatars/avatar-31.jpg" className="rounded-circle shadow-sm mb-3" width="80" height="80" alt="" />
            <h4 className="fw-bold">Jimmy Anderson</h4>
            <p className="text-muted">Enter your password to unlock</p>
          </div>
          <form onSubmit={e => e.preventDefault()}>
            <div className="mb-4">
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="ti ti-lock"></i></span>
                <input type={showPassword ? 'text' : 'password'} className="form-control" placeholder="Enter password" />
                <button className="input-group-text bg-white border-start-0" type="button" onClick={() => setShowPassword(!showPassword)}>
                  <i className={`ti ${showPassword ? 'ti-eye-off' : 'ti-eye'}`}></i>
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 fw-medium mb-3">
              <i className="ti ti-unlock me-2"></i>Unlock
            </button>
            <div>
              <Link to="/login" className="text-decoration-none small">
                <i className="ti ti-arrow-left me-1"></i>Sign in as a different user
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LockScreen
