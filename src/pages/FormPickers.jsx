import { Link } from 'react-router-dom';
const FormPickers = () => {
  return (
    <>
<div className="content pb-0">

            
            <div className="breadcrumb-arrow mb-4">
                <h4 className="mb-1">Form Picker</h4>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#/" className="text-decoration-none">Forms</Link></li>
                        <li className="breadcrumb-item active">Form Picker</li>
                    </ol>
                </div>
            </div>
            

            
            <div className="row">

                <div className="col-xl-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Flatpickr - Datepicker</h5>
                        </div>
                        <div className="card-body">
                            <form action="#">

                                
                                <div className="row gy-3">

                                    <div className="col-lg-6">
                                        <div>
                                            <label className="form-label mb-0">Basic</label>
                                            <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y"</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                        </div>
                                    </div> 

                                    <div className="col-lg-6">
                                        <div>
                                            <label className="form-label mb-0">DateTime</label>
                                            <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d.m.y" data-enable-time</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d.m.y" data-enable-time />
                                        </div>
                                    </div> 

                                </div>
                                

                                
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <label className="form-label mb-0">Human-Friendly Dates</label>
                                            <p className="text-muted">Set <code>data-provider="flatpickr" data-altFormat="F j, Y"</code> attribute.</p>
                                            <input type="text" className="form-control flatpickr-input" data-provider="flatpickr" data-altFormat="F j, Y" />
                                        </div>
                                    </div> 

                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <label className="form-label mb-0">MinDate and MaxDate</label>
                                            <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-minDate="Your Min. Date" data-maxDate="Your Max. date"</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" data-minDate="25 12, 2021" data-maxDate="29 12,2021" />
                                        </div>
                                    </div> 

                                </div>
                                

                                
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <label className="form-label mb-0">Default Date</label>
                                            <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-deafult-date="Your Default Date"</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" data-deafult-date="25 12,2021" />
                                        </div>
                                    </div> 

                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <label className="form-label mb-0">Disabling Dates</label>
                                            <p className="text-muted">Set <code>data-provider="flatpickr" data-disable="true"</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" data-disable-date="15 12,2021" />
                                        </div>
                                    </div> 

                                </div>
                                

                                
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <label className="form-label mb-0">Selecting Multiple Dates</label>
                                            <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-multiple-date="true"</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" data-multiple-date="true" />
                                        </div>
                                    </div> 

                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <label className="form-label mb-0">Range</label>
                                            <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true"</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" data-range-date="true" />
                                        </div>
                                    </div> 

                                </div>
                                

                                
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <label className="form-label mb-0">Inline</label>
                                            <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-deafult-date="today" data-inline-date="true"</code> attribute.</p>
                                            <input type="text" className="form-control d-none" data-provider="flatpickr" data-date-format="d M, Y" data-deafult-date="today" data-inline-date="true" />
                                        </div>
                                    </div> 

                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <label className="form-label mb-0">Week Numbers</label>
                                            <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-week-number</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="dd/mm/yyyy" data-week-number />
                                        </div>
                                    </div> 

                                </div>
                                

                            </form> 

                        </div> 
                    </div> 
                </div> 

            </div>
            

            
            <div className="row">

                <div className="col-lg-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Flatpickr - Timepicker</h4>
                        </div>
                        <div className="card-body">
                            <form action="#">

                                
                                <div className="row gy-3">

                                    <div className="col-lg-6">
                                        <div>
                                            <label className="form-label mb-0">Timepicker</label>
                                            <p className="text-muted">Set <code>data-provider="timepickr" data-time-basic="true"</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="timepickr" data-time-basic="true" id="timepicker-example" />
                                        </div>
                                    </div> 

                                    <div className="col-lg-6">
                                        <div>
                                            <label className="form-label mb-0">24-hour Time Picker</label>
                                            <p className="text-muted">Set <code>data-provider="timepickr" data-time-hrs="true"</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="timepickr" data-time-hrs="true" id="timepicker-24hrs" />
                                        </div>
                                    </div> 

                                </div>
                                

                                
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <label className="form-label mb-0">Time Picker w/ Limits</label>
                                            <p className="text-muted">Set <code>data-provider="timepickr" data-min-time="Min.Time" data-max-time="Max.Time"</code>attribute.</p>
                                            <input type="text" className="form-control" data-provider="timepickr" data-min-time="13:00" data-max-time="16:00" />
                                        </div>
                                    </div> 

                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <label className="form-label mb-0">Preloading Time</label>
                                            <p className="text-muted">Set <code>data-provider="timepickr" data-default-time="Your Default Time"</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="timepickr" data-default-time="16:45" />
                                        </div>
                                    </div> 

                                </div>
                                

                                
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <label className="form-label mb-0">Inline</label>
                                            <p className="text-muted">Set <code>data-provider="timepickr" data-time-inline="Your Default Time"</code> attribute.</p>
                                            <input type="text" className="form-control" data-provider="timepickr" data-time-inline="11:42" />
                                        </div>
                                    </div> 

                                </div>
                                

                            </form> 

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

export default FormPickers;
