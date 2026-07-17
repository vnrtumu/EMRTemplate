import { Link } from 'react-router-dom';
const UxImages = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Images</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Base UI</Link></li>
                        <li className="breadcrumb-item active">Images</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-xl-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Images Shapes</h5>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-xl-12">
                                    <p className="text-muted">Add classes to an <code>&lt;img&gt;</code> element to easily style images in any project.</p>

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <img src="/assets/img/media/img-4.jpg" alt="image" className="img-fluid rounded" width="200" />
                                            <p className="mb-0">
                                                <code>.rounded</code>
                                            </p>
                                        </div>

                                        <div className="col-sm-3">
                                            <img src="/assets/img/avatars/avatar-03.jpg" alt="image" className="img-fluid rounded-circle" width="133" />
                                            <p className="mb-0">
                                                <code>.rounded-circle</code>
                                            </p>
                                        </div>

                                        <div className="col-sm-3">
                                            <img src="/assets/img/media/img-1.jpg" alt="image" className="img-fluid img-thumbnail" width="200" />
                                            <p className="mb-0">
                                                <code>.img-thumbnail</code>
                                            </p>
                                        </div>

                                        <div className="col-sm-3">
                                            <img src="/assets/img/avatars/avatar-02.jpg" alt="image" className="img-thumbnail rounded-pill" width="133" />
                                            <p className="mb-0">
                                                <code>.rounded-pill</code>
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 

            </div>
            

            <div className="row">

                <div className="col-xl-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Image Left Align</h5>
                        </div>
                        <div className="card-body">
                            <img className="rounded float-start" src="/assets/img/media/img-1.jpg" alt="..." width="200" />
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Image Center Align</h5>
                        </div>
                        <div className="card-body">
                            <img className="rounded mx-auto d-block" src="/assets/img/media/img-1.jpg" alt="..." width="200" />
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Image Right Align</h5>
                        </div>
                        <div className="card-body">
                            <img className="rounded float-end" src="/assets/img/media/img-1.jpg" alt="..." width="200" />
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Figures</h5>
                        </div>
                        <div className="card-body d-flex justify-content-between gap-2 pb-1">
                            <figure className="figure">
                                <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src="/assets/img/media/img-1.jpg" alt="..." />
                                <figcaption className="figure-caption">A caption for the above image.</figcaption>
                            </figure>
                            <figure className="figure float-end">
                                <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src="/assets/img/media/img-1.jpg" alt="..." />
                                <figcaption className="figure-caption text-end">A caption for the above image.
                                </figcaption>
                            </figure>
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

export default UxImages;
