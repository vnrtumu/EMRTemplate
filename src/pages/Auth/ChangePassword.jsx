import { useState } from 'react'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
  const [showOld, setShowOld] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)' }}>
      <div className="card border-0 shadow-lg" style={{ maxWidth: '440px', width: '100%', borderRadius: '16px' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
              <i className="ti ti-key fs-32 text-warning"></i>
            </div>
            <h4 className="fw-bold">Change Password</h4>
            <p className="text-muted">Enter your current and new password</p>
          </div>
          <form onSubmit={e => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label fw-medium">Current Password</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="ti ti-lock"></i></span>
                <input type={showOld ? 'text' : 'password'} className="form-control" placeholder="Enter current password" />
                <button className="input-group-text bg-white border-start-0" type="button" onClick={() => setShowOld(!showOld)}>
                  <i className={`ti ${showOld ? 'ti-eye-off' : 'ti-eye'}`}></i>
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium">New Password</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="ti ti-lock"></i></span>
                <input type={showNew ? 'text' : 'password'} className="form-control" placeholder="Enter new password" />
                <button className="input-group-text bg-white border-start-0" type="button" onClick={() => setShowNew(!showNew)}>
                  <i className={`ti ${showNew ? 'ti-eye-off' : 'ti-eye'}`}></i>
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label fw-medium">Confirm New Password</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="ti ti-lock"></i></span>
                <input type={showConfirm ? 'text' : 'password'} className="form-control" placeholder="Confirm new password" />
                <button className="input-group-text bg-white border-start-0" type="button" onClick={() => setShowConfirm(!showConfirm)}>
                  <i className={`ti ${showConfirm ? 'ti-eye-off' : 'ti-eye'}`}></i>
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 fw-medium mb-3">
              <i className="ti ti-device-floppy me-2"></i>Update Password
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

export default ChangePassword
