import { Link } from 'react-router-dom';
const UxAvatar = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Avatars</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Base UI</Link></li>
                        <li className="breadcrumb-item active">Avatars</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-xl-6">
                    <div className="card card-h-100">
                        <div className="card-header">
                            <h5 className="card-title">Avatars</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-flex align flex-wrap gap-2">
                                <span className="avatar avatar-xl me-2 avatar-rounded">
                                    <img src="/assets/img/avatars/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xl me-2 avatar-radius-0">
                                    <img src="/assets/img/avatars/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xl me-2">
                                    <img src="/assets/img/avatars/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xl bg-primary avatar-rounded">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar avatar-xl bg-success avatar-radius-0">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar avatar-xl bg-danger">
                                    <span className="avatar-title">SR</span>
                                </span>
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Avatar Sizes</h5>
                        </div>
                        <div className="card-body d-flex align-items-center">
                            <span className="avatar avatar-xss me-2">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                            </span>
                            <span className="avatar avatar-xs me-2">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                            </span>
                            <span className="avatar avatar-sm me-2">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                            </span>
                            <span className="avatar avatar-md me-2">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                            </span>
                            <span className="avatar avatar-lg me-2">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                            </span>
                            <span className="avatar avatar-xl me-2">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                            </span>
                            <span className="avatar avatar-xxl me-2">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                            </span>
                        </div> 
                    </div> 
                </div> 

            </div>
            

            
            <div className="row">

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Avatar with Status</h5>
                        </div>
                        <div className="card-body d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                                <img src="/assets/img/avatars/avatar-03.jpg" alt="avatar" />
                            </span>
                            <span className="avatar avatar-sm online me-2 avatar-rounded">
                                <img src="/assets/img/avatars/avatar-03.jpg" alt="avatar" />
                            </span>
                            <span className="avatar avatar-md me-2 online avatar-rounded">
                                <img src="/assets/img/avatars/avatar-03.jpg" alt="avatar" />
                            </span>
                            <span className="avatar avatar-lg me-2 away avatar-rounded">
                                <img src="/assets/img/avatars/avatar-03.jpg" alt="avatar" />
                            </span>
                            <span className="avatar avatar-xl me-2 online avatar-rounded">
                                <img src="/assets/img/avatars/avatar-03.jpg" alt="avatar" />
                            </span>
                            <span className="avatar avatar-xxl me-2 offline avatar-rounded">
                                <img src="/assets/img/avatars/avatar-03.jpg" alt="avatar" />
                            </span>

                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Avatar with Badge</h5>
                        </div>
                        <div className="card-body d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 avatar-rounded">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                                <span className="badge rounded-pill bg-primary avatar-notification">2</span>
                            </span>
                            <span className="avatar avatar-sm me-2 avatar-rounded">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                                <span className="badge rounded-pill bg-secondary avatar-notification">5</span>
                            </span>
                            <span className="avatar avatar-md me-2 avatar-rounded">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                                <span className="badge rounded-pill bg-warning avatar-notification">1</span>
                            </span>
                            <span className="avatar avatar-lg me-2 avatar-rounded">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                                <span className="badge rounded-pill bg-info avatar-notification">7</span>
                            </span>
                            <span className="avatar avatar-xl me-2 avatar-rounded">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                                <span className="badge rounded-pill bg-success avatar-notification">3</span>
                            </span>
                            <span className="avatar avatar-xxl me-2 avatar-rounded">
                                <img src="/assets/img/avatars/avatar-02.jpg" alt="avatar" />
                                <span className="badge rounded-pill bg-danger avatar-notification">9</span>
                            </span>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Solid Background Color</h5>
                        </div>
                        <div className="card-body">
                            <span className="avatar bg-primary avatar-rounded">
                                <span className="avatar-title">JD</span>
                            </span>
                            <span className="avatar bg-secondary avatar-rounded">
                                <span className="avatar-title">SR</span>
                            </span>
                            <span className="avatar bg-success avatar-rounded">
                                <span className="avatar-title">BJ</span>
                            </span>
                            <span className="avatar bg-info avatar-rounded">
                                <span className="avatar-title">AD</span>
                            </span>
                            <span className="avatar bg-warning avatar-rounded">
                                <span className="avatar-title">CB</span>
                            </span>
                            <span className="avatar bg-danger avatar-rounded">
                                <span className="avatar-title">KL</span>
                            </span>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Soft Background Color</h5>
                        </div>
                        <div className="card-body">
                            <span className="avatar bg-primary-subtle rounded">
                                <span className="avatar-title text-primary">JD</span>
                            </span>
                            <span className="avatar bg-secondary-subtle rounded">
                                <span className="avatar-title text-secondary">SR</span>
                            </span>
                            <span className="avatar bg-success-subtle rounded">
                                <span className="avatar-title text-success">BJ</span>
                            </span>
                            <span className="avatar bg-info-subtle rounded">
                                <span className="avatar-title text-info">AD</span>
                            </span>
                            <span className="avatar bg-warning-subtle rounded">
                                <span className="avatar-title text-warning">CB</span>
                            </span>
                            <span className="avatar bg-danger-subtle rounded">
                                <span className="avatar-title text-danger">KL</span>
                            </span>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Avatar Group - Square</h5>
                        </div>
                        <div className="card-body">
                            <div className="avatar-list-stacked avatar-group-lg mb-3">
                                <span className="avatar">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-04.jpg" alt="avatar" />
                                </span>
                                <span className="avatar">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-04.jpg" alt="avatar" />
                                </span>
                                <span className="avatar">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-04.jpg" alt="avatar" />
                                </span>
                                <a className="avatar bg-primary" href="#/">
                                    +8
                                </a>
                            </div>
                            <div className="avatar-list-stacked mb-3">
                                <span className="avatar">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-04.jpg" alt="avatar" />
                                </span>
                                <span className="avatar">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-04.jpg" alt="avatar" />
                                </span>
                                <span className="avatar">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-04.jpg" alt="avatar" />
                                </span>
                                <a className="avatar bg-primary" href="#/">
                                    +8
                                </a>
                            </div>
                            <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-04.jpg" alt="avatar" />
                                </span>
                                <span className="avatar">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-04.jpg" alt="avatar" />
                                </span>
                                <span className="avatar">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-04.jpg" alt="avatar" />
                                </span>
                                <a className="avatar bg-primary" href="#/">
                                    +8
                                </a>
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Avatar Group - Rounded</h5>
                        </div>
                        <div className="card-body">
                            <div className="avatar-list-stacked avatar-group-lg mb-3">
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-05.jpg" alt="avatar" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-05.jpg" alt="avatar" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-05.jpg" alt="avatar" />
                                </span>
                                <a className="avatar bg-primary avatar-rounded" href="#/">
                                    +8
                                </a>
                            </div>
                            <div className="avatar-list-stacked mb-3">
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-05.jpg" alt="avatar" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-05.jpg" alt="avatar" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-05.jpg" alt="avatar" />
                                </span>
                                <a className="avatar bg-primary avatar-rounded" href="#/">
                                    +8
                                </a>
                            </div>
                            <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-05.jpg" alt="avatar" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-05.jpg" alt="avatar" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="/assets/img/avatars/avatar-05.jpg" alt="avatar" />
                                </span>
                                <a className="avatar bg-primary avatar-rounded" href="#/">
                                    +8
                                </a>
                            </div>
                        </div> 
                    </div> 
                </div> 

            </div>
            

        </div>
        

            
    <footer className="footer text-center">
        <p className="mb-0 text-dark"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default UxAvatar;
