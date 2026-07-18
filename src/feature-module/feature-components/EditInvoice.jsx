import { Link } from 'react-router-dom';
const EditInvoice = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <h6 className="mb-0"><Link to="/invoice"><i className="ti ti-arrow-left me-2"></i>Invoice</Link></h6>
                <Link to="/invoice-details" className="btn btn-primary"><i className="ti ti-eye me-1"></i>Preview</Link>
            </div>
            

            <div className="card border-0 shadow-sm mb-0">
                <div className="card-body">
                    <h6 className="mb-3">Company Info</h6>
                    <form action="https://dreamsemr.dreamstechnologies.com/php/template/edit-invoice.php">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-4">
                                <div className="bg-light rounded position-relative p-4 text-center mb-3">
                                    <i className="ti ti-upload fs-16 mb-2 d-block"></i>
                                    <p className="mb-0">Upload Your Company Logo</p>
                                    <input type="file" className="position-absolute top-0 start-0 opacity-0 w-100 h-100" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label className="form-label">Invoice Number</label>
                                    <input type="text" className="form-control" value="123456" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" className="form-control" value="123456" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" value="123456" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" value="123456" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" value="123456" />
                                </div>
                            </div>
                        </div>
                        <div className="border-top mt-3 pt-3 mb-3">
                            <h6 className="mb-3">Item Details</h6>
                            <div className="table-responsive table-nowrap">
                                <table className="table border">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Item</th>
                                            <th>Quantity</th>
                                            <th>Unit Price ($)</th>
                                            <th>Discount ($)</th>
                                            <th>Amount($)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><div><input type="text" className="form-control" value="Surgical Gloves" /></div></td>
                                            <td>
                                                <div className="custom-increment cart">
                                                    <div className="position-relative">
                                                        <div className="position-absolute start-0 top-50 translate-middle-y">
                                                            <button type="button" className="decrement-btn btn btn-icon border-0"  data-type="minus" data-field="">
                                                                <span><i className="ti ti-minus"></i></span>
                                                            </button>
                                                        </div>
                                                        <input type="text" id="quantity" name="quantity" className="form-control text-center" value="10" style="width: 110px;" />
                                                        <div className="position-absolute end-0 top-50 translate-middle-y">
                                                            <button type="button" className="increment-btn btn btn-icon border-0" data-type="plus" data-field="">
                                                                <span><i className="ti ti-plus"></i></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input type="text" className="form-control" value="45" />
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input type="text" className="form-control" value="$10" />
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input type="text" className="form-control" value="40.50" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-lg-4">
                                <div>
                                    <div className="row align-items-center mb-3">
                                        <div className="col-6">
                                            <h6 className="mb-0 fw-semibold fs-14">Amount</h6>
                                        </div>
                                        <div className="col-6">
                                            <input type="text" className="form-control" value="40.50" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-3">
                                        <div className="col-6 text-dark fw-medium">
                                            <h6 className="mb-0 fw-semibold fs-14">Tax (16%)</h6>
                                        </div>
                                        <div className="col-6">
                                            <input type="text" className="form-control" value="2.43" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-3">
                                        <div className="col-6 text-dark fw-medium">
                                            <h6 className="mb-0 fw-semibold fs-14">Discount (10%)</h6>
                                        </div>
                                        <div className="col-6">
                                            <input type="text" className="form-control" value="24" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-3">
                                        <div className="col-6 text-dark fw-medium">
                                            <h6 className="mb-0 fw-semibold fs-14">Shipping Charge</h6>
                                        </div>
                                        <div className="col-6">
                                            <input type="text" className="form-control" value="45" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-3">
                                        <div className="col-6 text-dark fw-medium">
                                            <h6 className="mb-0 fw-semibold fs-14">Total Amount</h6>
                                        </div>
                                        <div className="col-6">
                                            <input type="text" className="form-control" value="78.21" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Notes</label>
                            <textarea className="form-control" rows="4"></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Terms & Conditions</label>
                            <textarea className="form-control" rows="4"></textarea>
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-3 border-top pt-3 mt-3">
                            <Link to="/invoice-details" className="btn btn-dark"><i className="ti ti-eye me-1"></i>Preview</Link>
                            <button className="btn btn-info" type="submit"><i className="ti ti-message-share me-1"></i>Save Invoice</button>
                            <button className="btn btn-primary" type="button"><i className="ti ti-send me-1"></i>Send Invoice</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        

            
    <footer className="footer text-center">
        <p className="mb-0 text-dark"> &copy; <a href="#/" className="link-primary text-decoration-none">Dreams EMR</a> - All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default EditInvoice;
