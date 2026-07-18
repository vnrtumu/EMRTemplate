import { Link } from 'react-router-dom';
const FormMask = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Form Mask</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Forms</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Form Elements</Link></li>
                        <li className="breadcrumb-item active">Form Mask</li>
                    </ol>
                </div>
            </div>
            

            <div className="card border-0 shadow-sm">
                <div className="card-header">
                    <h5 className="card-title">Form Inputmask</h5>
                </div>
                <div className="card-body pb-0">
                    <p className="text-muted">A JavaScript plugin for applying input masks to form fields and HTML elements</p>

                    
                    <div className="row">

                        <div className="col-md-6">
                            <form action="#">
                                <div className="mb-3">
                                    <label className="form-label">Date</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="00/00/0000" />
                                    <span className="fs-13 text-muted">e.g "DD/MM/YYYY"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="00/00/0000"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Hour</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="00:00:00" />
                                    <span className="fs-13 text-muted">e.g "HH:MM:SS"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="00:00:00"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Date & Hour</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="00/00/0000 00:00:00" />
                                    <span className="fs-13 text-muted">e.g "DD/MM/YYYY HH:MM:SS"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="00/00/0000 00:00:00"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">ZIP Code</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="00000-000" />
                                    <span className="fs-13 text-muted">e.g "xxxxx-xxx"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="00000-000"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">SSN field 1</label>
                                    <input type="text" id="ssn" className="form-control" data-toggle="input-mask" data-mask-format="000-00-0000" />
                                    <span className="form-text text-muted">e.g "999-99-9999"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="000-00-0000"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Crazy Zip Code</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="0-00-00-00" />
                                    <span className="fs-13 text-muted">e.g "x-xx-xx-xx"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="0-00-00-00"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Money</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="000.000.000.000.000,00" data-reverse="true" />
                                    <span className="fs-13 text-muted">e.g "Your money"</span>
                                    <p className="mt-1">Add attribute <code>data-mask-format="000.000.000.000.000,00" data-reverse="true"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Percent</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="00%" data-reverse="true" />
                                    <span className="fs-13 text-muted">e.g "99%"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="00%" data-reverse="true"</code></p>
                                </div>
                            </form>
                        </div> 

                        <div className="col-md-6">
                            <form action="#">
                                <div className="mb-3">
                                    <label className="form-label">Telephone</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="0000-0000" />
                                    <span className="fs-13 text-muted">e.g "xxxx-xxxx"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="0000-0000"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Telephone with Code Area</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="(00) 0000-0000" />
                                    <span className="fs-13 text-muted">e.g "(xx) xxxx-xxxx"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="(00) 0000-0000"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">US Telephone</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="(000) 000-0000" />
                                    <span className="fs-13 text-muted">e.g "(xxx) xxx-xxxx"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="(000) 000-0000"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">São Paulo Celphones</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="(00) 00000-0000" />
                                    <span className="fs-13 text-muted">e.g "(xx) xxxxx-xxxx"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="(00) 00000-0000"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">CPF</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="000.000.000-00" data-reverse="true" />
                                    <span className="fs-13 text-muted">e.g "xxx.xxx.xxxx-xx"</span>
                                    <p className="mt-1">Add attribute <code>data-mask-format="000.000.000-00" data-reverse="true"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">IP Address</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="099.099.099.099" data-reverse="true" />
                                    <span className="fs-13 text-muted">e.g "xxx.xxx.xxx.xxx"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="099.099.099.099"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Credit Card Number</label>
                                    <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="0000.0000.0000.0000" />
                                    <span className="form-text text-muted">e.g "xxxx.xxxx.xxxx.xxxx"</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="0000.0000.0000.0000"</code></p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Eye Script</label>
                                    <input type="text" id="eyescript" className="form-control" data-toggle="input-mask" data-mask-format="~0.00 ~0.00 000" />
                                    <span className="form-text text-muted">~9.99 ~9.99 999</span>
                                    <p className="mt-1">Add attribute <code>data-toggle="input-mask" data-mask-format="~0.00 ~0.00 000"</code></p>
                                </div>
                            </form>
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

export default FormMask;
