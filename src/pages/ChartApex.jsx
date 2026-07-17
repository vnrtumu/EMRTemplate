import { Link } from 'react-router-dom';
const ChartApex = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Apex Charts</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Charts</Link></li>
                        <li className="breadcrumb-item active">Apex Charts</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <h5 className="card-title">Apex Simple</h5>
                        </div>
                        <div className="card-body">
                            <div id="s-line" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <h5 className="card-title">Area Chart</h5>
                        </div>
                        <div className="card-body">
                            <div id="s-line-area" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <h5 className="card-title">Column Chart</h5>
                        </div>
                        <div className="card-body">
                            <div id="s-col" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <h5 className="card-title">Column Stacked Chart</h5>
                        </div>
                        <div className="card-body">
                            <div id="s-col-stacked" className="chart-set"></div>
                        </div>
                    </div>
                </div> 


                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <h5 className="card-title">Bar Chart</h5>
                        </div>
                        <div className="card-body">
                            <div id="s-bar" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <h5 className="card-title">Mixed Chart</h5>
                        </div>
                        <div className="card-body">
                            <div id="mixed-chart" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <h5 className="card-title">Donut Chart</h5>
                        </div>
                        <div className="card-body">
                            <div id="donut-chart" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <h5 className="card-title">Radial Chart</h5>
                        </div>
                        <div className="card-body">
                            <div id="radial-chart" className="chart-set"></div>
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

export default ChartApex;
