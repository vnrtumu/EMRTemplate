import { Link } from 'react-router-dom';
const FormFileupload = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">File Uploads</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Forms</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Form Elements</Link></li>
                        <li className="breadcrumb-item active">File Uploads</li>
                    </ol>
                </div>
            </div>
            

            <div className="card border-0 shadow-sm">
                <div className="card-header">
                    <h5 className="card-title">Dropzone File Upload</h5>
                </div>
                <div className="card-body">
                    <p className="text-muted">
                        DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.
                    </p>
                    <form action="https://dreamsemr.dreamstechnologies.com/" method="post" className="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                        <div className="fallback">
                            <input name="file" type="file" multiple />
                        </div>
                        <div className="dz-message needsclick">
                            <i className="ti ti-cloud-upload h1 text-muted"></i>
                            <h3>Drop files here or click to upload.</h3>
                            <span className="text-muted fs-13">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
                        </div>
                    </form>

                    
                    <div className="dropzone-previews" id="file-previews"></div>

                </div> 
            </div>  

            
            <div className="d-none" id="uploadPreviewTemplate">
                <div className="card border-0 shadow-sm border-0 shadow-sm mt-2 mb-0 border">
                    <div className="p-2">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <img data-dz-thumbnail src="#" className="avatar-sm rounded bg-light" alt="" />
                            </div>
                            <div className="col ps-0">
                                <a href="#/" className="text-muted fw-bold" data-dz-name></a>
                                <p className="mb-0" data-dz-size></p>
                            </div>
                            <div className="col-auto">
                                
                                <a href="#" className="btn btn-link btn-lg text-muted" data-dz-remove>
                                    <i className="ti ti-x"></i>
                                </a>
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

export default FormFileupload;
