import { Link } from 'react-router-dom';
const ChartPeity = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Peity Chart</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Charts</Link></li>
                        <li className="breadcrumb-item active">Peity Chart</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-md-12">
                    <div className="card border-0 shadow-sm border-0 shadow-sm">
                        <div className="card-header">
                            <div className="card-title">Donut Chart</div>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="donut" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>1/5</span>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="donut" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>226/360</span>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="donut" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>0.52/1.561</span>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="donut" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>1,4</span>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="donut" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>226,134</span>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="donut" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>0.52,1.041</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> 

                <div className="col-md-12">
                    <div className="card border-0 shadow-sm border-0 shadow-sm">
                        <div className="card-header">
                            <div className="card-title">Pie Chart</div>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="pie" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>1/5</span>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="pie" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>226/360</span>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="pie" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>0.52/1.561</span>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="pie" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>1,4</span>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="pie" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>226,134</span>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <span className="pie" data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"]}'>0.52,1.041</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> 

                <div className="col-md-12">
                    <div className="card border-0 shadow-sm border-0 shadow-sm">
                        <div className="card-header">
                            <h3 className="card-title">Line Charts</h3>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card-body ">
                                        <span className="peity-line" data-width="100%">6,2,8,4,3,8,1,3,6,5,9,2,8,1,4,8,9,8,2,1</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-body ">
                                        <span className="peity-line" data-width="100%">6,2,8,4,-3,8,1,-3,6,-5,9,2,-8,1,4,8,9,8,2,1</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-body ">
                                        <span className="peity-line" data-width="100%">6,2,8,4,3,8,1,3,6,5,9,2,8,1,4,8,9,8,2,1</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> 

                <div className="col-md-12">
                    <div className="card border-0 shadow-sm border-0 shadow-sm">
                        <div className="card-header">
                            <h3 className="card-title">Bar Charts</h3>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card-body ">
                                        <span className="bar" data-peity='{ "fill": ["#1F6DB2", "#E65100"]}'>6,2,8,4,3,8,1,3,6,5,9,2,8,1,4,8,9,8,2,1</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-body ">
                                        <span className="bar" data-peity='{ "fill": ["#1F6DB2", "#E65100"]}'>6,2,8,4,-3,8,1,-3,6,-5,9,2,-8,1,4,8,9,8,2,1</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-body ">
                                        <span className="bar" data-peity='{ "fill": ["#1F6DB2", "#E65100"]}'>6,2,8,4,3,8,1,3,6,5,9,2,8,1,4,8,9,8,2,1</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> 

                <div className="col-lg-12 col-md-12">
                    <div className="card border-0 shadow-sm border-0 shadow-sm">
                        <div className="card-header">
                            <h3 className="card-title">Data attributes</h3>
                        </div>
                        <div className="text-center">

                            <div className="row">
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <p className="data-attributes">
                                            <span data-peity='{ "fill": ["#1F6DB2", "#EEF2F7"],    "innerRadius": 10, "radius": 40 }'>1/7</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <p className="data-attributes">
                                            <span data-peity='{ "fill": ["#1976D2", "#EEF2F7"], "innerRadius": 14, "radius": 36 }'>2/7</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <p className="data-attributes">
                                            <span data-peity='{ "fill": ["#09800F", "#EEF2F7"], "innerRadius": 16, "radius": 32 }'>3/7</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <p className="data-attributes">
                                            <span data-peity='{ "fill": ["#B71C1C", "#EEF2F7"],  "innerRadius": 18, "radius": 28 }'>4/7</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <p className="data-attributes">
                                            <span data-peity='{ "fill": ["#CC25B0", "#EEF2F7"],   "innerRadius": 20, "radius": 24 }'>5/7</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="card-body ">
                                        <p className="data-attributes">
                                            <span data-peity='{ "fill": ["#E65100", "#EEF2F7"], "innerRadius": 18, "radius": 20 }'>6/7</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> 

                <div className="col-lg-12 col-md-12">
                    <div className="card border-0 shadow-sm border-0 shadow-sm">
                        <div className="card-header">
                            <h3 className="card-title">Setting Colours Dynamically</h3>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="card-body ">
                                        <span className="bar-colours-1">5,3,9,6,5,9,7,3,5,2</span>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card-body ">
                                        <span className="bar-colours-2">5,3,2,-1,-3,-2,2,3,5,2</span>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card-body ">
                                        <span className="bar-colours-3">0,-3,-6,-4,-5,-4,-7,-3,-5,-2</span>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card-body ">
                                        <span className="pie-colours-2">5,3,9,6,5</span>
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

export default ChartPeity;
