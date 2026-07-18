import { Link } from 'react-router-dom';
const ChartFlot = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Flot Charts</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Charts</Link></li>
                        <li className="breadcrumb-item active">Flot Charts</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Bar Chart</div>
                        </div>
                        <div className="card-body  chart-set">
                            <div className="h-250" id="flotBar1"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Bar Chart</div>
                        </div>
                        <div className="card-body chart-set">
                            <div className="h-250" id="flotBar2"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Line Chart</div>
                        </div>
                        <div className="card-body chart-set">
                            <div className="h-250" id="flotLine1"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Line Chart Points</div>
                        </div>
                        <div className="card-body chart-set">
                            <div className="h-250" id="flotLine2"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Area Chart</div>
                        </div>
                        <div className="card-body chart-set">
                            <div className="h-250" id="flotArea1"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Area Chart Points</div>
                        </div>
                        <div className="card-body chart-set">
                            <div className="h-250" id="flotArea2"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Pie Chart</div>
                        </div>
                        <div className="card-body chart-set">
                            <div className="h-250" id="flotPie1"></div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm border-0 shadow-sm card-h-100">
                        <div className="card-header">
                            <div className="card-title">Donut Chart</div>
                        </div>
                        <div className="card-body chart-set">
                            <div className="h-250" id="flotPie2"></div>
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

export default ChartFlot;
