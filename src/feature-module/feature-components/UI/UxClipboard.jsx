import { Link } from 'react-router-dom';
const UxClipboard = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Clipboard</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Advanced UI</Link></li>
                        <li className="breadcrumb-item active">Clipboard</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-md-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Copy from input</h5>
                        </div>
                        <div className="card-body pb-3">
                            <div className="clipboard">
                                <form className="form-horizontal">
                                    <input type="text" className="form-control mb-3" id="input-copy" value="http://www.admin-dashboard.com/" />
                                    <div className="d-flex align-items-center gap-1">
                                        <a className="btn clip-btn btn-primary" href="#/" data-clipboard-action="copy" data-clipboard-target="#input-copy"><i className="far fa-copy me-1"></i> Copy from Input</a>
                                        <a className="btn clip-btn btn-dark" href="#/" data-clipboard-action="cut" data-clipboard-target="#input-copy"><i className="fas fa-cut me-1"></i> Cut from Input</a>
                                    </div>
                                </form>
                            </div>
                        </div> 
                    </div> 

                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Copy from Text Area</h5>
                        </div>
                        <div className="card-body pb-3">
                            <div className="clipboard">
                                <form className="form-horizontal">
                                    <textarea className="form-control mb-3" rows="4" id="textarea-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</textarea>
                                    <div className="d-flex align-items-center gap-1">
                                        <a className="btn clip-btn btn-primary" href="#/" data-clipboard-action="copy" data-clipboard-target="#textarea-copy"><i className="far fa-copy me-1"></i> Copy from Input</a>
                                        <a className="btn clip-btn btn-dark" href="#/" data-clipboard-action="cut" data-clipboard-target="#textarea-copy"><i className="fas fa-cut me-1"></i> Cut from Input</a>
                                    </div>
                                </form>
                            </div>
                        </div> 
                    </div> 

                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Copy Text from Paragraph</h5>
                        </div>
                        <div className="card-body pb-3">
                            <div className="clipboard copy-txt">
                                <p className="otp-pass">Here is your OTP <span id="paragraph-copy1">22991</span>.</p>
                                <p className="mb-3">Please do not share it to anyone</p>
                                <a className="btn clip-btn btn-primary" href="#/" data-clipboard-action="copy" data-clipboard-target="#paragraph-copy1"><i className="far fa-copy me-1"></i> Copy from Input</a>
                            </div>
                        </div> 
                    </div> 

                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Copy Hidden Text (Advanced)</h5>
                        </div>
                        <div className="card-body pb-3">
                            <div className="clipboard copy-txt">
                                <p className="mb-3">Link -&gt; <span id="advanced-paragraph">http://www.example.com/example</span></p>
                                <a className="mb-1 btn clip-btn btn-primary" href="#/" data-clipboard-action="copy" data-clipboard-target="#advanced-paragraph"><i className="far fa-copy me-1"></i> Copy Link</a>
                                <a className="mb-1 btn clip-btn btn-warning" href="#/" data-clipboard-action="copy" data-clipboard-text="2291"><i className="far fa-copy me-1"></i> Copy Hidden Code</a>
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

export default UxClipboard;
