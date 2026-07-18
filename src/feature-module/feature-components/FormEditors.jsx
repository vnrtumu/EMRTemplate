import { Link } from 'react-router-dom';
const FormEditors = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Form Editors</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Forms</Link></li>
                        <li className="breadcrumb-item active">Form Editors</li>
                    </ol>
                </div>
            </div>
            

            <div className="card border-0 shadow-sm">
                <div className="card-header">
                    <h5 className="card-title">Quill Editor</h5>
                </div>

                <div className="card-body">
                    <p className="text-muted">Snow is a clean, flat toolbar theme.</p>

                    <div id="snow-editor" style={{ height: 300 }}>
                        <h3><span className="ql-size-large">Hello World!</span></h3>
                        <p><br /></p>
                        <h3>This is an simple editable area.</h3>
                        <p><br /></p>
                        <ul>
                            <li>
                                Select a text to reveal the toolbar.
                            </li>
                            <li>
                                Edit rich document on-the-fly, so elastic!
                            </li>
                        </ul>
                        <p><br /></p>
                        <p>
                            End of simple area
                        </p>
                    </div>
                </div> 
            </div> 

            <div className="card border-0 shadow-sm">
                <div className="card-header">
                    <h5 className="card-title">Quill Bubble Editor</h5>
                </div>
                <div className="card-body">
                    <p className="text-muted">Bubble is a simple tooltip based theme.</p>

                    <div id="bubble-editor" style={{ height: 300 }}>
                        <h3><span className="ql-size-large">Hello World!</span></h3>
                        <p><br /></p>
                        <h3>This is an simple editable area.</h3>
                        <p><br /></p>
                        <ul>
                            <li>
                                Select a text to reveal the toolbar.
                            </li>
                            <li>
                                Edit rich document on-the-fly, so elastic!
                            </li>
                        </ul>
                        <p><br /></p>
                        <p>
                            End of simple area
                        </p>
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

export default FormEditors;
