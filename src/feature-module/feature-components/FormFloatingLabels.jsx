import { Link } from 'react-router-dom';
const FormFloatingLabels = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Floating Label</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Forms</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Form Layouts</Link></li>
                        <li className="breadcrumb-item active">Floating Labels</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Basic Examples</h5>
                        </div>
                        <div className="card-body">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email Address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Readonly Plaintext</h5>
                        </div>
                        <div className="card-body">
                            <div className="form-floating mb-3">
                                <input type="email" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="name@example.com" />
                                <label htmlFor="floatingEmptyPlaintextInput">Empty Input</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" readOnly className="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="name@example.com" />
                                <label htmlFor="floatingPlaintextInput">Input with Value</label>
                            </div>
                        </div> 
                    </div> 
                </div> 

            </div>
            

            
            <div className="row">

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Floating Labels With Pre Defined Values</h5>
                        </div>
                        <div className="card-body">
                            <form className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com" />
                                <label htmlFor="floatingInputValue">Input with Value</label>
                            </form>
                            <form className="form-floating">
                                <input type="email" className="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com" />
                                <label htmlFor="floatingInputInvalid">Invalid Input</label>
                            </form>
                        </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Textareas</h5>
                        </div>
                        <div className="card-body">
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label htmlFor="floatingTextarea">Comments</label>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled" disabled></textarea>
                                <label htmlFor="floatingTextareaDisabled">Disabled</label>
                            </div>
                        </div> 
                    </div> 
                </div> 

            </div>
            

            
            <div className="row">

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Floating Labels In Select</h5>
                        </div>
                        <div className="card-body">
                            <div className="form-floating">
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label htmlFor="floatingSelect">Works with Selects</label>
                            </div>
                            </div> 
                    </div> 
                </div> 

                <div className="col-xl-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title">Floating Labels With Layouts</h5>
                        </div>
                        <div className="card-body">
                            <div className="row g-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com" />
                                        <label htmlFor="floatingInputGrid">Email Address</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <select className="form-select" id="floatingSelectGrid">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <label htmlFor="floatingSelectGrid">Works with Selects</label>
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

export default FormFloatingLabels;
