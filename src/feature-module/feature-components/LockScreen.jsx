import { Link } from 'react-router-dom';
const LockScreen = () => {
  return (
    <>
<div className="container-fuild position-relative z-1">
			<div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 lock-screen-cover">

				
				<div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
					<div className="col-lg-4 mx-auto">
						<form action="https://dreamsemr.dreamstechnologies.com/php/template/index.php" className="d-flex justify-content-center align-items-center">
							<div className="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
								<div className="card border-0 shadow-sm border-1 p-lg-3 shadow-md rounded-3">
									<div className="card-body">
                                        <div className="mb-4 text-center">
                                            <Link to="/">
                                                <img src="/assets/img/logo-dark.svg" className="img-fluid logo m-atuo" alt="Logo" />
                                            </Link>
                                        </div>
										<div className="text-center mb-3">
											<h5 className="mb-1 fs-20 fw-bold">Welcome Back!</h5>
										</div>
                                        <div className="text-center mb-3">
                                            <span className="avatar avatar-xxxl rounded-circle flex-shrink-0">
                                                <img src="/assets/img/avatars/avatar-31.jpg" className="rounded-circle" alt="img" />
                                            </span>
                                        </div>

										<div className="mb-3">
											<div className="input-group input-group-flat pass-group">
                                                <input type="password" className="form-control pass-input" />
                                                <span className="input-group-text toggle-password ">
                                                    <i className="ti ti-eye-off"></i>
                                                </span>
                                            </div>
										</div>

										<div>
											<button type="submit" className="btn bg-primary text-white w-100">Login</button>
										</div>

									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				

			</div>
		</div>
    </>
  );
};

export default LockScreen;
