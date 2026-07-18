import { Link } from 'react-router-dom';
const FormWizard = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Form Wizard</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Forms</Link></li>
                        <li className="breadcrumb-item active">Form Wizard</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header d-flex align-items-center">
                            <h4 className="header-title">A Basic Wizard</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div id="basicwizard">
                                    <ul className="nav nav-pills nav-justified form-wizard-header mb-4">
                                        <li className="nav-item">
                                            <a href="#basictab1" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                                                <i className="bi bi-person-circle fs-18 align-middle me-1"></i>
                                                <span className="d-none d-sm-inline">Account</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#basictab2" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                                                <i className="bi bi-emoji-smile fs-18 align-middle me-1"></i>
                                                <span className="d-none d-sm-inline">Profile</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#basictab3" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                                                <i className="bi bi-check2-circle fs-18 align-middle me-1"></i>
                                                <span className="d-none d-sm-inline">Finish</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="tab-content b-0 mb-0">
                                        <div className="tab-pane" id="basictab1">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="userName">User Name</label>
                                                        <div className="col-md-9">
                                                            <input type="text" className="form-control" id="userName" name="userName" value="johne" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="password"> Password</label>
                                                        <div className="col-md-9">
                                                            <input type="password" id="password" name="password" className="form-control" value="123456789" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="confirm">Re Password</label>
                                                        <div className="col-md-9">
                                                            <input type="password" id="confirm" name="confirm" className="form-control" value="123456789" />
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div> 
                                        </div>

                                        <div className="tab-pane" id="basictab2">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="name"> First Name</label>
                                                        <div className="col-md-9">
                                                            <input type="text" id="name" name="name" className="form-control" value="Francis" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="surname"> Last Name</label>
                                                        <div className="col-md-9">
                                                            <input type="text" id="surname" name="surname" className="form-control" value="Brinkman" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="email">Email</label>
                                                        <div className="col-md-9">
                                                            <input type="email" id="email" name="email" className="form-control" value="cory1979@example.com" />
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div> 
                                        </div>

                                        <div className="tab-pane" id="basictab3">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="text-center">
                                                        <h3 className="mt-0">Thank you !</h3>

                                                        <p className="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet.</p>

                                                        <div className="mb-3">
                                                            <div className="form-check d-inline-block">
                                                                <input type="checkbox" className="form-check-input fs-15" id="customCheck1" />
                                                                <label className="form-check-label" htmlFor="customCheck1">I agree with the Terms and Conditions</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div> 
                                        </div>

                                        <div className="d-flex wizard justify-content-between flex-wrap gap-2 mt-3">
                                            <div className="first">
                                                <a href="#/" className="btn btn-primary">
                                                    First
                                                </a>
                                            </div>
                                            <div className="d-flex flex-wrap gap-2">
                                                <div className="previous">
                                                    <a href="#/" className="btn btn-primary">
                                                        <i className="bx bx-left-arrow-alt me-2"></i>Back To Previous
                                                    </a>
                                                </div>
                                                <div className="next">
                                                    <a href="#/" className="btn btn-primary mt-3 mt-md-0">
                                                        Next Step<i className="bx bx-right-arrow-alt ms-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="last">
                                                <a href="#/" className="btn btn-primary mt-3 mt-md-0">
                                                    Finish
                                                </a>
                                            </div>
                                        </div>
                                    </div> 

                                </div> 
                            </form>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header d-flex align-items-center">
                            <h4 className="header-title">Wizard With Progress Bar</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div id="progressbarwizard">

                                    <ul className="nav nav-pills nav-justified form-wizard-header mb-3">
                                        <li className="nav-item">
                                            <a href="#account-2" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                                                <i className="bi bi-person-circle fs-18 align-middle me-1"></i>
                                                <span className="d-none d-sm-inline">Account</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#profile-tab-2" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                                                <i className="bi bi-emoji-smile fs-18 align-middle me-1"></i>
                                                <span className="d-none d-sm-inline">Profile</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#finish-2" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                                                <i className="bi bi-check2-circle fs-18 align-middle me-1"></i>
                                                <span className="d-none d-sm-inline">Finish</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="tab-content b-0 mb-0">

                                        <div id="bar" className="progress mb-3" style={{ height: 7 }}>
                                            <div className="bar progress-bar progress-bar-striped progress-bar-animated bg-success"></div>
                                        </div>

                                        <div className="tab-pane" id="account-2">

                                            
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="userName1">User Name</label>
                                                        <div className="col-md-9">
                                                            <input type="text" className="form-control" id="userName1" name="userName1" value="johne" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="password1"> Password</label>
                                                        <div className="col-md-9">
                                                            <input type="password" id="password1" name="password1" className="form-control" value="123456789" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="confirm1">Re Password</label>
                                                        <div className="col-md-9">
                                                            <input type="password" id="confirm1" name="confirm1" className="form-control" value="123456789" />
                                                        </div>
                                                    </div>
                                                </div> 

                                            </div>
                                            

                                        </div>

                                        <div className="tab-pane" id="profile-tab-2">

                                            
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="name1"> First Name</label>
                                                        <div className="col-md-9">
                                                            <input type="text" id="name1" name="name1" className="form-control" value="Francis" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="surname1"> Last Name</label>
                                                        <div className="col-md-9">
                                                            <input type="text" id="surname1" name="surname1" className="form-control" value="Brinkman" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-3 col-form-label" htmlFor="email1">Email</label>
                                                        <div className="col-md-9">
                                                            <input type="email" id="email1" name="email1" className="form-control" value="cory1979@example.com" />
                                                        </div>
                                                    </div>
                                                </div> 

                                            </div>
                                            

                                        </div>

                                        <div className="tab-pane" id="finish-2">

                                            
                                            <div className="row">

                                                <div className="col-12">
                                                    <div className="text-center">
                                                        <h3 className="mt-0">Thank you !</h3>

                                                        <p className="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                            mattis dictum aliquet.</p>

                                                        <div className="mb-3">
                                                            <div className="form-check d-inline-block">
                                                                <input type="checkbox" className="form-check-input fs-15" id="customCheck3" />
                                                                <label className="form-check-label" htmlFor="customCheck3">I agree with the Terms and Conditions</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 

                                            </div>
                                            

                                        </div>

                                        <div className="d-flex wizard justify-content-between flex-wrap gap-2 mt-3">
                                            <div className="first">
                                                <a href="#/" className="btn btn-primary">
                                                    First
                                                </a>
                                            </div>
                                            <div className="d-flex flex-wrap gap-2">
                                                <div className="previous">
                                                    <a href="#/" className="btn btn-primary">
                                                        <i className="bx bx-left-arrow-alt me-2"></i>Back To Previous
                                                    </a>
                                                </div>
                                                <div className="next">
                                                    <a href="#/" className="btn btn-primary mt-3 mt-md-0">
                                                        Next Step<i className="bx bx-right-arrow-alt ms-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="last">
                                                <a href="#/" className="btn btn-primary mt-3 mt-md-0">
                                                    Finish
                                                </a>
                                            </div>
                                        </div>

                                    </div> 
                                </div> 
                            </form>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header d-flex align-items-center">
                            <h4 className="header-title">Wizard With Form Validation</h4>
                        </div>

                        <div className="card-body">
                                <div id="validation-wizard">
                                    <ul className="nav nav-pills nav-justified form-wizard-header mb-3">
                                        <li className="nav-item" data-target-form="#accountForm">
                                            <a href="#first" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                                                <i className="bi bi-person-circle fs-18 align-middle me-1"></i>
                                                <span className="d-none d-sm-inline">Account</span>
                                            </a>
                                        </li>
                                        <li className="nav-item" data-target-form="#profileForm">
                                            <a href="#second" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                                                <i className="bi bi-emoji-smile fs-18 align-middle me-1"></i>
                                                <span className="d-none d-sm-inline">Profile</span>
                                            </a>
                                        </li>
                                        <li className="nav-item" data-target-form="#otherForm">
                                            <a href="#third" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                                                <i className="bi bi-check2-circle fs-18 align-middle me-1"></i>
                                                <span className="d-none d-sm-inline">Finish</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="tab-content">

                                        <div className="tab-pane" id="first">
                                            <form id="accountForm" method="post" action="#" className="form-horizontal">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row mb-3">
                                                            <label className="col-md-3 col-form-label" htmlFor="userName3">User Name</label>
                                                            <div className="col-md-9">
                                                                <input type="text" className="form-control" id="userName3" name="userName3" required />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <label className="col-md-3 col-form-label" htmlFor="password3"> Password</label>
                                                            <div className="col-md-9">
                                                                <input type="password" id="password3" name="password3" className="form-control" required />
                                                            </div>
                                                        </div>

                                                        <div className="row mb-3">
                                                            <label className="col-md-3 col-form-label" htmlFor="confirm3">Re Password</label>
                                                            <div className="col-md-9">
                                                                <input type="password" id="confirm3" name="confirm3" className="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div> 

                                                </div>
                                                

                                            </form>
                                        </div>

                                        <div className="tab-pane fade" id="second">
                                            <form id="profileForm" method="post" action="#" className="form-horizontal">

                                                
                                                <div className="row">

                                                    <div className="col-12">
                                                        <div className="row mb-3">
                                                            <label className="col-md-3 col-form-label" htmlFor="name3"> First Name</label>
                                                            <div className="col-md-9">
                                                                <input type="text" id="name3" name="name3" className="form-control" required />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <label className="col-md-3 col-form-label" htmlFor="surname3"> Last Name</label>
                                                            <div className="col-md-9">
                                                                <input type="text" id="surname3" name="surname3" className="form-control" required />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <label className="col-md-3 col-form-label" htmlFor="email3">Email</label>
                                                            <div className="col-md-9">
                                                                <input type="email" id="email3" name="email3" className="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div> 

                                                </div>
                                                

                                            </form>
                                        </div>

                                        <div className="tab-pane fade" id="third">
                                            <form id="otherForm" method="post" action="#" className="form-horizontal">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="text-center">
                                                            <h3 className="mt-0">Thank you !</h3>

                                                            <p className="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet.</p>

                                                            <div className="mb-3">
                                                                <div className="form-check d-inline-block">
                                                                    <input type="checkbox" className="form-check-input fs-15" id="customCheck4" required />
                                                                    <label className="form-check-label" htmlFor="customCheck4">I agree with the Terms and Conditions</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> 

                                                </div>
                                                

                                            </form>
                                        </div>

                                        <div className="d-flex wizard justify-content-between flex-wrap gap-2 mt-3">
                                            <div className="first">
                                                <a href="#/" className="btn btn-primary">
                                                    First
                                                </a>
                                            </div>
                                            <div className="d-flex flex-wrap gap-2">
                                                <div className="previous">
                                                    <a href="#/" className="btn btn-primary">
                                                        <i className="bx bx-left-arrow-alt me-2"></i>Back To Previous
                                                    </a>
                                                </div>
                                                <div className="next">
                                                    <a href="#/" className="btn btn-primary mt-3 mt-md-0">
                                                        Next Step<i className="bx bx-right-arrow-alt ms-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="last">
                                                <a href="#/" className="btn btn-primary mt-3 mt-md-0">
                                                    Finish
                                                </a>
                                            </div>
                                        </div>

                                    </div> 
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

export default FormWizard;
