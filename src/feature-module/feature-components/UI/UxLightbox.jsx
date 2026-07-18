import { Link } from 'react-router-dom';
const UxLightbox = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Lightbox</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Advanced UI</Link></li>
                        <li className="breadcrumb-item active">Lightbox</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-md-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Single Image Lightbox</h5>
                        </div>
                        <div className="card-body pb-1">

                            
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <a href="assets/img/media/img-01.jpg" className="image-popup">
                                        <img src="/assets/img/media/img-01.jpg" className="img-fluid" alt="image" />
                                    </a>
                                </div> 

                                <div className="col-md-4 mb-3">
                                    <a href="assets/img/media/img-02.jpg" className="image-popup">
                                        <img src="/assets/img/media/img-02.jpg" className="img-fluid" alt="image" />
                                    </a>
                                </div> 

                            </div>
                            

                        </div> 
                    </div> 
                </div> 

                <div className="col-md-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Image with Description</h5>
                        </div>
                        <div className="card-body pb-1">

                            
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <a href="assets/img/media/img-03.jpg" className="image-popup-desc" data-title="Title 01" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit">
                                        <img src="/assets/img/media/img-03.jpg" className="img-fluid" alt="work-thumbnail" />
                                    </a>
                                </div> 

                                <div className="col-md-4 mb-3">
                                    <a href="assets/img/media/img-04.jpg" className="image-popup-desc" data-title="Title 02" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit">
                                        <img src="/assets/img/media/img-04.jpg" className="img-fluid" alt="work-thumbnail" />
                                    </a>
                                </div> 

                                <div className="col-md-4 mb-3">
                                    <a href="assets/img/media/img-05.jpg" className="image-popup-desc" data-title="Title 03" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit">
                                        <img src="/assets/img/media/img-05.jpg" className="img-fluid" alt="work-thumbnail" />
                                    </a>
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

export default UxLightbox;
