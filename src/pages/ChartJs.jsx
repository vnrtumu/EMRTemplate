import { Link } from 'react-router-dom';
const ChartJs = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Chart JS</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Charts</Link></li>
                        <li className="breadcrumb-item active">Chart JS</li>
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
                            <div>
                                <canvas id="chartBar1" className="h-300"></canvas>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Transparency </div>
                        </div>
                        <div className="card-body">
                            <div>
                                <canvas id="chartBar2" className="h-300"></canvas>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Gradient Bar Chart</div>
                        </div>
                        <div className="card-body">
                            <div>
                                <canvas id="chartBar3" className="h-300"></canvas>
                            </div>
                        </div>
                    </div>
                </div> 


                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Horizontal Bar Chart</div>
                        </div>
                        <div className="card-body">
                            <div className="chartjs-wrapper-demo">
                                <canvas id="chartBar4" className="h-300"></canvas>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Horizontal Bar Chart Style2</div>
                        </div>
                        <div className="card-body">
                            <div className="chartjs-wrapper-demo">
                                <canvas id="chartBar5" className="h-300"></canvas>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Vertical Stacked Bar Chart</div>
                        </div>
                        <div className="card-body">
                            <div className="chartjs-wrapper-demo">
                                <canvas id="chartStacked1" className="h-300"></canvas>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Horizontal Stacked Bar Chart</div>
                        </div>
                        <div className="card-body">
                            <div className="chartjs-wrapper-demo">
                                <canvas id="chartStacked2" className="h-300"></canvas>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Line Chart</div>
                        </div>
                        <div className="card-body">
                            <div className="chartjs-wrapper-demo">
                                <canvas id="chartLine1" className="h-300"></canvas>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Donut Chart</div>
                        </div>
                        <div className="card-body">
                            <div className="chartjs-wrapper-demo">
                                <canvas id="chartPie" className="h-300"></canvas>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Pie Chart</div>
                        </div>
                        <div className="card-body">
                            <div className="chartjs-wrapper-demo">
                                <canvas id="chartDonut" className="h-300"></canvas>
                            </div>
                        </div>
                    </div>
                </div> 

                
                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Area Chart</div>
                        </div>
                        <div className="card-body">
                            <div className="chartjs-wrapper-demo">
                                <canvas id="chartArea1" className="h-300"></canvas>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Scatter Chart</div>
                        </div>
                        <div className="card-body">
                            <div className="chartjs-wrapper-demo">
                                <canvas id="chartRadar" className="h-300"></canvas>
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

export default ChartJs;
