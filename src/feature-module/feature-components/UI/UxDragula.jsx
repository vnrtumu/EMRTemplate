import { Link } from 'react-router-dom';
const UxDragula = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Dragula</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Base UI</Link></li>
                        <li className="breadcrumb-item active">Dragula</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header border-bottom d-flex align-items-center">
                            <h4 className="header-title">Simple Drag and Drop Example</h4>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">
                                Just specify the data attribute <code>data-plugin='dragula'</code> to have drag and drop support in your container.
                            </p>

                            
                            <div className="row" id="simple-dragula" data-plugin="dragula">

                                <div className="col-md-4">
                                    <div className="card mb-0 mt-3 text-white bg-primary">
                                        <div className="card-body">
                                            <blockquote className="card-bodyquote mb-0">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                <footer>Someone famous in <cite title="Source Title">Source Title</cite>
                                                </footer>
                                            </blockquote>
                                        </div> 
                                    </div> 
                                </div> 

                                <div className="col-md-4">
                                    <div className="card mb-0 mt-3 bg-secondary text-white">
                                        <div className="card-body">
                                            <blockquote className="card-bodyquote mb-0">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                <footer>Someone famous in <cite title="Source Title">Source Title</cite>
                                                </footer>
                                            </blockquote>
                                        </div> 
                                    </div> 
                                </div> 

                                <div className="col-md-4">
                                    <div className="card mb-0 mt-3 text-white bg-success">
                                        <div className="card-body">
                                            <blockquote className="card-bodyquote mb-0">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                <footer>Someone famous in <cite title="Source Title">Source Title</cite>
                                                </footer>
                                            </blockquote>
                                        </div> 
                                    </div> 
                                </div> 

                                <div className="col-md-4">
                                    <div className="card mb-0 mt-3 text-white bg-info text-xs-center">
                                        <div className="card-body">
                                            <blockquote className="card-bodyquote mb-0">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                <footer>Someone famous in <cite title="Source Title">Source Title</cite>
                                                </footer>
                                            </blockquote>
                                        </div> 
                                    </div> 
                                </div> 

                                <div className="col-md-4">
                                    <div className="card mb-0 mt-3 text-white bg-warning text-xs-center">
                                        <div className="card-body">
                                            <blockquote className="card-bodyquote mb-0">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                <footer>Someone famous in <cite title="Source Title">Source Title</cite>
                                                </footer>
                                            </blockquote>
                                        </div> 
                                    </div> 
                                </div> 

                                <div className="col-md-4">
                                    <div className="card mb-0 mt-3 text-white bg-danger text-xs-center">
                                        <div className="card-body">
                                            <blockquote className="card-bodyquote mb-0">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                <footer>Someone famous in <cite title="Source Title">Source Title</cite>
                                                </footer>
                                            </blockquote>
                                        </div> 
                                    </div> 
                                </div> 

                            </div>
                            

                        </div> 
                    </div> 
                </div> 

            </div>
            

            
            <div className="row">

                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header border-bottom d-flex align-items-center">
                            <h4 className="header-title">Move stuff between containers</h4>
                        </div>

                        <div className="card-body">
                            <p className="text-muted">
                                Just specify the data attribute <code>data-plugin='dragula'</code> and <code>data-containers='["first-container-id", "second-container-id"]'</code>.
                            </p>

                            
                            <div className="row" data-plugin="dragula" data-containers='["company-list-left", "company-list-right"]'>

                                <div className="col-md-6">
                                    <div className="bg-light bg-opacity-50 p-2 p-lg-4">
                                        <h5 className="mt-0">Part 1</h5>
                                        <div id="company-list-left" className="pt-2">

                                            <div className="card mb-0 mt-2">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-start">
                                                        <img src="/assets/img/avatars/avatar-01.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1 mt-0">Louis K. Bond</h5>
                                                            <p> Founder & CEO </p>
                                                            <p className="mb-0 text-muted">
                                                                <span className="fst-italic"><b>"</b>Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div> 

                                            <div className="card mb-0 mt-2">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-start">
                                                        <img src="/assets/img/avatars/avatar-02.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1 mt-0">Dennis N. Cloutier</h5>
                                                            <p> Software Engineer </p>
                                                            <p className="mb-0 text-muted">
                                                                <span className="fst-italic"><b>"</b>Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div> 

                                            <div className="card mb-0 mt-2">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-start">
                                                        <img src="/assets/img/avatars/avatar-03.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1 mt-0">Susan J. Sander</h5>
                                                            <p> Web Designer </p>
                                                            <p className="mb-0 text-muted">
                                                                <span className="fst-italic"><b>"</b>Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div> 

                                        </div> 
                                    </div> 
                                </div> 

                                <div className="col-md-6">
                                    <div className="bg-light bg-opacity-50 p-2 p-lg-4">
                                        <h5 className="mt-0">Part 2</h5>
                                        <div id="company-list-right" className="pt-2">
                                            <div className="card mb-0 mt-2">

                                                <div className="card-body p-3">
                                                    <div className="d-flex align-items-start">
                                                        <img src="/assets/img/avatars/avatar-04.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1 mt-0">James M. Short</h5>
                                                            <p> Web Developer </p>
                                                            <p className="mb-0 text-muted">
                                                                <span className="fst-italic"><b>"</b>Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div> 

                                            <div className="card mb-0 mt-2">
                                                <div className="card-body p-3">
                                                    <div className="d-flex align-items-start">
                                                        <img src="/assets/img/avatars/avatar-05.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1 mt-0">Gabriel J. Snyder</h5>
                                                            <p> Business Analyst </p>
                                                            <p className="mb-0 text-muted">
                                                                <span className="fst-italic"><b>"</b>Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div> 

                                            <div className="card mb-0 mt-2">
                                                <div className="card-body p-3">
                                                    <div className="d-flex align-items-start">
                                                        <img src="/assets/img/avatars/avatar-06.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1 mt-0">Louie C. Mason</h5>
                                                            <p>Human Resources</p>
                                                            <p className="mb-0 text-muted">
                                                                <span className="fst-italic"><b>"</b>Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div> 

                                        </div> 
                                    </div> 
                                </div> 

                            </div> 

                        </div> 
                    </div> 
                </div> 

            </div>
            

            
            <div className="row">

                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header border-bottom d-flex align-items-center">
                            <h4 className="header-title">Move stuff between containers using handle</h4>
                        </div>

                        <div className="card-body">
                            <p className="text-muted">
                                Just specify the data attribute <code>data-plugin='dragula'</code>, <code>data-containers='["first-container-id", "second-container-id"]'</code> and <code>data-handle-className='dragula-handle'</code>.
                            </p>

                            
                            <div className="row" data-plugin="dragula" data-containers='["handle-dragula-left", "handle-dragula-right"]' data-handleClass="dragula-handle">

                                <div className="col-md-6">
                                    <div className="bg-light bg-opacity-50 p-2 p-lg-4">
                                        <h5 className="mt-0">Part 1</h5>
                                        <div id="handle-dragula-left" className="pt-2">

                                            <div className="card mb-0 mt-2">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/img/avatars/avatar-07.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1">Louis K. Bond</h5>
                                                            <p className="mb-0"> Founder & CEO </p>
                                                        </div>
                                                        <span className="dragula-handle"></span>
                                                    </div>
                                                </div> 
                                            </div> 

                                            <div className="card mb-0 mt-2">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/img/avatars/avatar-08.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1">Dennis N. Cloutier</h5>
                                                            <p className="mb-0"> Software Engineer </p>
                                                        </div>
                                                        <span className="dragula-handle"></span>
                                                    </div>
                                                </div> 
                                            </div> 

                                            <div className="card mb-0 mt-2">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/img/avatars/avatar-09.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1">Susan J. Sander</h5>
                                                            <p className="mb-0"> Web Designer </p>
                                                        </div>
                                                        <span className="dragula-handle"></span>
                                                    </div>
                                                </div> 
                                            </div> 

                                        </div> 
                                    </div> 
                                </div> 

                                <div className="col-md-6">
                                    <div className="bg-light bg-opacity-50 p-2 p-lg-4">
                                        <h5 className="mt-0">Part 2</h5>
                                        <div id="handle-dragula-right" className="pt-2">
                                            <div className="card mb-0 mt-2">

                                                <div className="card-body p-3">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/img/avatars/avatar-10.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1">James M. Short</h5>
                                                            <p className="mb-0"> Web Developer </p>
                                                        </div>
                                                        <span className="dragula-handle"></span>
                                                    </div>
                                                </div> 
                                            </div> 

                                            <div className="card mb-0 mt-2">
                                                <div className="card-body p-3">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/img/avatars/avatar-05.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1">Gabriel J. Snyder</h5>
                                                            <p className="mb-0"> Business Analyst </p>
                                                        </div>
                                                        <span className="dragula-handle"></span>
                                                    </div>
                                                </div> 
                                            </div> 

                                            <div className="card mb-0 mt-2">
                                                <div className="card-body p-3">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/img/avatars/avatar-03.jpg" alt="image" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mb-1">Louie C. Mason</h5>
                                                            <p className="mb-0">Human Resources</p>
                                                        </div>
                                                        <span className="dragula-handle"></span>
                                                    </div>
                                                </div> 
                                            </div> 

                                        </div> 
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

export default UxDragula;
