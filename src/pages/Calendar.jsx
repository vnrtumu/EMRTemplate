import { Link } from 'react-router-dom';
const Calendar = () => {
  return (
    <>
<div className="content">

            
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div className="breadcrumb-arrow">
                    <h4 className="mb-1">Calendar</h4>
                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none">Applications</a></li>
                            <li className="breadcrumb-item active">Calendar</li>
                        </ol>
                    </div>
                </div>
            </div>
            

            <div className="card border-0 shadow-sm mb-0">
                <div className="card-body">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 d-flex">
                            <div className="flex-fill">
                                <div className="card border-0 shadow-sm">
                                    <div className="card-body">
                                        <div>
                                            <a href="#" className="btn btn-primary w-100 mb-3" data-bs-toggle="modal" data-bs-target="#add_new"><i className="ti ti-square-rounded-plus me-1"></i>Create Event </a>
                                            <div className="accordion accordion-flush custom-accordion mt-3" id="accordionFlushExample">

                                                <div className="accordion-item bg-transparent">
                                                    <h2 className="accordion-header mb-0">
                                                        <button className="accordion-button fw-semibold p-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        Events
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                                        <div id='external-events' className="d-flex flex-column gap-2 mt-3">
                                                            <div className="fc-event bg-soft-info p-2 d-inline-flex align-items-center rounded cursor-move" data-event='{ "title": "Meeting with Team Dev" }' data-event-classname="bg-info">
                                                                <i className="ti ti-point-filled text-info me-1 fs-18"></i>Meeting
                                                            </div>
                                                            <div className="fc-event bg-soft-secondary p-2 d-inline-flex align-items-center rounded cursor-move" data-event='{ "title": "Office Team..." }' data-event-classname="bg-secondary">
                                                                <i className="ti ti-point-filled text-secondary me-1 fs-18"></i>Office
                                                            </div>
                                                            <div className="fc-event bg-soft-success p-2 d-inline-flex align-items-center rounded cursor-move" data-event='{ "title": "Hiring For HR" }' data-event-classname="bg-success">
                                                                <i className="ti ti-point-filled text-success me-1 fs-18"></i>Hiring
                                                            </div>
                                                            <div className="fc-event bg-soft-pink p-2 d-inline-flex align-items-center rounded cursor-move" data-event='{ "title": "Optional Holiday" }' data-event-classname="bg-pink">
                                                                <i className="ti ti-point-filled text-pink me-1 fs-18"></i>Holiday
                                                            </div>
                                                            <div className="fc-event bg-soft-warning p-2 d-inline-flex align-items-center rounded cursor-move" data-event='{ "title": "Meeting with Team Dev" }' data-event-classname="bg-warning">
                                                                <i className="ti ti-point-filled text-warning me-1 fs-18"></i>Employee
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 shadow-sm mb-lg-0 d-none">
                                    <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <h6 className="mb-0">Upcoming Events</h6>
                                        <a href="#/" className="btn btn-outline-light fs-12 btn-sm">View All</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="border rounded shadow-sm p-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6 className="fs-14 fw-semibold mb-0">Team Sync-Up</h6>
                                                <span className="badge badge-soft-danger">16 July 2025</span>
                                            </div>
                                            <p className="mb-0 fs-14">A quick daily standup to align on current sprint tasks, blockers</p>
                                        </div>
                                        <div className="border rounded shadow-sm p-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6 className="fs-14 fw-semibold mb-0">Project Kickoff</h6>
                                                <span className="badge badge-soft-purple">16 July 2025</span>
                                            </div>
                                            <p className="mb-0 fs-14">Introductory meeting to outline goals, timelines...</p>
                                        </div>
                                        <div className="border rounded shadow-sm p-3">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6 className="fs-14 fw-semibold mb-0">Project Kickoff</h6>
                                                <span className="badge badge-soft-info">16 July 2025</span>
                                            </div>
                                            <p className="mb-0 fs-14"> Introductory meeting to outline goals,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 d-flex">
                            <div id="calendar" className="flex-fill"></div>
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

export default Calendar;
