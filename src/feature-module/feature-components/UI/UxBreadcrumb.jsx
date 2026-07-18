import { Link } from 'react-router-dom';
const UxBreadcrumb = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Breadcrumb</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Base UI</Link></li>
                        <li className="breadcrumb-item active">Breadcrumb</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Default Breadcrumb</h5>
                        </div>
                        <div className="card-body  py-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 py-2">
                                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 py-2">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 py-2">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Breadcrumb with Icons</h5>
                        </div>
                        <div className="card-body  py-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb py-2 mb-0">
                                    <li className="breadcrumb-item active" aria-current="page"><i className="ti ti-smart-home fs-16 me-1"></i>Home</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb py-2 mb-0">
                                    <li className="breadcrumb-item"><a href="#"><i className="ti ti-smart-home fs-16 me-1"></i>Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb py-2 mb-0">
                                    <li className="breadcrumb-item"><a href="#"><i className="ti ti-smart-home fs-16 me-1"></i>Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div> 
                    </div> 
                </div> 

            </div>
            

            
            <div className="row">

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Arrow Style</h5>
                        </div>
                        <div className="card-body py-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-arrow mb-0 py-2">
                                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-arrow mb-0 py-2">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-arrow mb-0 py-2">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Pipe Style</h5>
                        </div>
                        <div className="card-body py-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-pipe py-2 mb-0">
                                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-pipe py-2 mb-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-pipe py-2 mb-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
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

export default UxBreadcrumb;
