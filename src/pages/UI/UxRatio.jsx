import { Link } from 'react-router-dom';
const UxRatio = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Ratio Video</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Base UI</Link></li>
                        <li className="breadcrumb-item active">Ratio Video</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Responsive Ratio video 21:9</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">Use class <code>.ratio-21x9</code></p>
                            <div className="ratio ratio-21x9">
                                <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&amp;showinfo=0&amp;controls=0"></iframe>
                            </div>
                        </div> 
                    </div> 

                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Responsive Ratio video 1:1</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">Use class <code>.ratio-1x1</code></p>
                            
                            <div className="ratio ratio-1x1">
                                <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&amp;showinfo=0&amp;controls=0"></iframe>
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Responsive Ratio video 16:9</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">Use class <code>.ratio-16x9</code></p>
                                
                                <div className="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&amp;showinfo=0&amp;controls=0"></iframe>
                                </div>
                        </div> 
                    </div> 

                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Responsive Ratio video 4:3</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">Use class <code>.ratio-4x3</code></p>
                                
                                <div className="ratio ratio-4x3">
                                <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&amp;showinfo=0&amp;controls=0"></iframe>
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

export default UxRatio;
