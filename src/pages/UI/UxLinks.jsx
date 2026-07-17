import { Link } from 'react-router-dom';
const UxLinks = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Links</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Base UI</Link></li>
                        <li className="breadcrumb-item active">Links</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Colored links</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">You can use the <code>.link-*</code> classes to colorize links. Unlike the <Link to="/ui-utilities"><code>.text-*</code> classes</Link>, these classes have a <code>:hover</code> and <code>:focus</code> state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.</p>
                            <p><a href="#" className="link-primary text-decoration-none">Primary link</a></p>
                            <p><a href="#" className="link-secondary">Secondary link</a></p>
                            <p><a href="#" className="link-success">Success link</a></p>
                            <p><a href="#" className="link-danger">Danger link</a></p>
                            <p><a href="#" className="link-warning">Warning link</a></p>
                            <p><a href="#" className="link-info">Info link</a></p>
                            <p><a href="#" className="link-light">Light link</a></p>
                            <p><a href="#" className="link-dark">Dark link</a></p>
                            <p className="mb-0"><a href="#" className="link-body-emphasis">Emphasis link</a></p>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Link utilities</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted"><Link to="/ui-utilities">Colored link helpers</Link> have been updated to pair with our link utilities. Use the new utilities to modify the link opacity, underline opacity, and underline offset.</p>
                            <p><a href="#" className="link-primary text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Primary link</a></p>
                            <p><a href="#" className="link-secondary text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Secondary link</a></p>
                            <p><a href="#" className="link-success text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Success link</a></p>
                            <p><a href="#" className="link-danger text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Danger link</a></p>
                            <p><a href="#" className="link-warning text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Warning link</a></p>
                            <p><a href="#" className="link-info text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Info link</a></p>
                            <p><a href="#" className="link-light text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Light link</a></p>
                            <p><a href="#" className="link-dark text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Dark link</a></p>
                            <p><a href="#" className="link-body-emphasis text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>
                        </div> 
                    </div> 
                </div> 

            </div>
            

            
            <div className="row">

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Link opacity</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">Change the alpha opacity of the link <code>rgba()</code> color value with utilities. Please be aware that changes to a color’s opacity can lead to links with <em>insufficient</em> contrast.</p>
                            <p><a className="link-opacity-10" href="#">Link opacity 10</a></p>
                            <p><a className="link-opacity-25" href="#">Link opacity 25</a></p>
                            <p><a className="link-opacity-50" href="#">Link opacity 50</a></p>
                            <p><a className="link-opacity-75" href="#">Link opacity 75</a></p>
                            <p className="mb-0"><a className="link-opacity-100" href="#">Link opacity 100</a></p>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Link hover opacity</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">You can even change the opacity level on hover.</p>

                            <p><a className="link-opacity-10-hover" href="#">Link hover opacity 10</a></p>
                            <p><a className="link-opacity-25-hover" href="#">Link hover opacity 25</a></p>
                            <p><a className="link-opacity-50-hover" href="#">Link hover opacity 50</a></p>
                            <p><a className="link-opacity-75-hover" href="#">Link hover opacity 75</a></p>
                            <p className="mb-0"><a className="link-opacity-100-hover" href="#">Link hover opacity 100</a></p>
                        </div> 
                    </div> 
                </div> 
            </div>
            

            
            <div className="row">
                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Underline color</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">Change the underline’s color independent of the link text color.</p>

                            <p><a href="#" className="text-decoration-underline link-underline-primary">Primary underline</a></p>
                            <p><a href="#" className="text-decoration-underline link-underline-secondary">Secondary underline</a></p>
                            <p><a href="#" className="text-decoration-underline link-underline-success">Success underline</a></p>
                            <p><a href="#" className="text-decoration-underline link-underline-danger">Danger underline</a></p>
                            <p><a href="#" className="text-decoration-underline link-underline-warning">Warning underline</a></p>
                            <p><a href="#" className="text-decoration-underline link-underline-info">Info underline</a></p>
                            <p><a href="#" className="text-decoration-underline link-underline-light">Light underline</a></p>
                            <p className="mb-0"><a href="#" className="text-decoration-underline link-underline-dark">Dark underline</a></p>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Underline opacity</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">Change the underline’s opacity. Requires adding <code>.link-underline</code> to first set an <code>rgba()</code> color we use to then modify the alpha opacity.</p>

                            <p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0" href="#">Underline opacity 0</a></p>
                            <p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10" href="#">Underline opacity 10</a></p>
                            <p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25" href="#">Underline opacity 25</a></p>
                            <p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50" href="#">Underline opacity 50</a></p>
                            <p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75" href="#">Underline opacity 75</a></p>
                            <p className="mb-0"><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100" href="#">Underline opacity 100</a></p>
                        </div> 
                    </div> 
                </div> 
            </div>
            

            
            <div className="row">
                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Underline offset</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">Change the underline’s opacity. Requires adding <code>.link-underline</code> to first set an <code>rgba()</code> color we use to then modify the alpha opacity.</p>

                            <p><a href="#">Default link</a></p>
                            <p><a className="text-decoration-underline link-offset-1" href="#">Offset 1 link</a></p>
                            <p><a className="text-decoration-underline link-offset-2" href="#">Offset 2 link</a></p>
                            <p className="mb-0"><a className="text-decoration-underline link-offset-3" href="#">Offset 3 link</a></p>

                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Hover variants</h5>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">Just like the <code>.link-opacity-*-hover</code> utilities, <code>.link-offset</code> and <code>.link-underline-opacity</code> utilities include <code>:hover</code> variants by default. Mix and match to create unique link styles.</p>

                            <a className="link-offset-2 link-offset-3-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
                                Underline opacity 0
                            </a>
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

export default UxLinks;
