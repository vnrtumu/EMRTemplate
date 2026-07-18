import { Link } from 'react-router-dom';
const UxRangeslider = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Rangeslider</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Advanced UI</Link></li>
                        <li className="breadcrumb-item active">Rangeslider</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-lg-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="header-title">Basic Range Slider</h5>
                        </div>
                        <div className="card-body">
                            <div id="rangeslider_basic"></div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="header-title">Multi Elements Range</h5>
                        </div>
                        <div className="card-body">
                            <div id="rangeslider_multielement"></div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="header-title">Value Range Slider</h5>
                        </div>
                        <div className="card-body pb-2">
                            <div>
                                <div id="nonlinear"></div>
                                <div className="d-flex justify-content-between">
                                    <div className="example-val" id="lower-value"></div>
                                    <div className="example-val" id="upper-value"></div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="header-title">Color Scheme</h5>
                        </div>
                        <div className="card-body">

                            <div>
                                <h5 className="fs-14">Primary</h5>
                                <div id="slider-primary" data-slider-color="primary"></div>
                            </div>

                            <div className="mt-3">
                                <h5 className="fs-14">Secondary</h5>
                                <div id="slider-secondary" data-slider-color="secondary"></div>
                            </div>

                            <div className="mt-3">
                                <h5 className="fs-14">Success</h5>
                                <div id="slider-success" data-slider-color="success"></div>
                            </div>

                            <div className="mt-3">
                                <h5 className="fs-14">Info</h5>
                                <div id="slider-info" data-slider-color="info"></div>
                            </div>

                            <div className="mt-3">
                                <h5 className="fs-14">Warning</h5>
                                <div id="slider-warning" data-slider-color="warning"></div>
                            </div>

                            <div className="mt-3">
                                <h5 className="fs-14">Danger</h5>
                                <div id="slider-danger" data-slider-color="danger"></div>
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="header-title">Locking Sliders Together</h5>
                        </div>
                        <div className="card-body">
                            <div className="slider" id="slider1"></div>
                            <span className="example-val mt-2" id="slider1-span"></span>

                            <div className="slider" id="slider2"></div>
                            <span className="example-val mt-2" id="slider2-span"></span>

                            <button id="lockbutton" className="btn btn-primary">Lock</button>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="header-title">Tooltip</h5>
                        </div>
                        <div className="card-body">
                            <div className="slider" id="slider-merging-tooltips"></div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="header-title">Soft Limits</h5>
                        </div>
                        <div className="card-body">
                            <div className="pb-4">
                                <div className="slider mb-2" id="soft"></div>
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="header-title">Color Picker</h5>
                        </div>
                        <div className="card-body pb-2">
                            <div>
                                <div className="sliders" id="red"></div>
                                <div className="sliders" id="green"></div>
                                <div className="sliders" id="blue"></div>

                                <div id="result"></div>
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="header-title">Vertical Range Slider</h5>
                        </div>
                        <div className="card-body">
                            <div id="slider-vertical" className="mx-auto"></div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="header-title">Vertical Range Slider</h5>
                        </div>
                        <div className="card-body">
                            <div id="slider-connect-upper" className="mx-auto"></div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="header-title">Vertical Range Slider</h5>
                        </div>
                        <div className="card-body">
                            <div id="slider-vertical-tooltip" className="mx-auto"></div>
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

export default UxRangeslider;
