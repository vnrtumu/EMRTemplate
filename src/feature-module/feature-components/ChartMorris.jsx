import { Link } from 'react-router-dom';
const ChartMorris = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Morris Chart</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Charts</Link></li>
                        <li className="breadcrumb-item active">Morris Chart</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Bar Chart</div>
                        </div>
                        <div className="card-body">
                            <div id="morrisBar1" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Stacked Bar Chart </div>
                        </div>
                        <div className="card-body">
                            <div id="morrisBar3" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Line Chart</div>
                        </div>
                        <div className="card-body">
                            <div id="morrisLine1" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Area Chart</div>
                        </div>
                        <div className="card-body">
                            <div id="morrisArea1" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Line Chart</div>
                        </div>
                        <div className="card-body">
                            <div id="morrisBar6" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Line Chart</div>
                        </div>
                        <div className="card-body">
                            <div id="morrisBar7" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Donut Chart</div>
                        </div>
                        <div className="card-body">
                            <div id="morrisDonut1" className="chart-set"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Line Chart</div>
                        </div>
                        <div className="card-body">
                            <div id="morrisline" className="chart-set"></div>
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

export default ChartMorris;
