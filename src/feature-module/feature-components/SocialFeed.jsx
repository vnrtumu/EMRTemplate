import { Link } from 'react-router-dom';
import '../../style/css/Applications.css';

const SocialFeed = () => {
  return (
    <>
      <div className="content pb-0">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div className="breadcrumb-arrow">
            <h4 className="mb-1">Social Feed</h4>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item"><span className="text-decoration-none text-muted">Applications</span></li>
                <li className="breadcrumb-item active">Social Feed</li>
              </ol>
            </div>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <button className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" aria-label="Refresh"><i className="ti ti-refresh"></i></button>
            <button className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" aria-label="Print"><i className="ti ti-printer"></i></button>
            <button className="btn btn-icon btn-white shadow-sm" data-bs-toggle="tooltip" aria-label="Download"><i className="ti ti-cloud-download"></i></button>
          </div>
        </div>

        <div className="row g-4 mb-4">
          {/* Left Sidebar */}
          <div className="col-xxl-3 col-xl-4">
            <div className="premium-card border-0 shadow-lg h-100 position-sticky top-0 p-4">
              <div className="d-flex flex-column align-items-center mb-4 p-4 bg-light rounded-4 border border-opacity-50">
                <div className="avatar avatar-xl rounded-circle border border-4 border-white shadow mb-3 position-relative">
                  <img src="/assets/img/avatars/avatar-21.jpg" alt="Profile" className="rounded-circle w-100 h-100 object-fit-cover" />
                  <span className="position-absolute bottom-0 end-0 bg-success border border-2 border-white rounded-circle" style={{ width: '16px', height: '16px' }}></span>
                </div>
                <h5 className="fw-bold mb-1">Dr. James Hong</h5>
                <p className="text-muted fs-14 mb-3">@jameshong324</p>
                <div className="d-flex gap-3 text-center">
                  <div>
                    <h6 className="fw-bold mb-0">1.2k</h6>
                    <span className="fs-12 text-muted">Followers</span>
                  </div>
                  <div style={{ width: '1px', backgroundColor: '#e2e8f0' }}></div>
                  <div>
                    <h6 className="fw-bold mb-0">842</h6>
                    <span className="fs-12 text-muted">Following</span>
                  </div>
                </div>
              </div>

              <div className="nav flex-column gap-2 mb-4">
                <a href="#/" className="d-flex align-items-center fw-medium bg-primary bg-opacity-10 rounded-3 p-3 active text-primary border border-primary border-opacity-25">
                  <i className="ti ti-brand-feedly me-3 fs-5"></i>All Feeds <span className="badge bg-primary rounded-pill ms-auto">56</span>
                </a>
                <a href="#/" className="d-flex align-items-center fw-medium p-3 rounded-3 text-secondary hover-bg-light transition-all"><i className="ti ti-mood-search me-3 fs-5"></i>Explore</a>
                <a href="#/" className="d-flex align-items-center fw-medium p-3 rounded-3 text-secondary hover-bg-light transition-all"><i className="ti ti-mail-check me-3 fs-5"></i>Messages</a>
                <a href="#/" className="d-flex align-items-center fw-medium p-3 rounded-3 text-secondary hover-bg-light transition-all"><i className="ti ti-bookmark me-3 fs-5"></i>Bookmarks</a>
              </div>

              <div>
                <h6 className="fw-bold fs-14 text-uppercase text-muted mb-3">Pages You Liked</h6>
                <div className="d-flex flex-column gap-3">
                  <a href="#/" className="d-flex align-items-center text-dark text-decoration-none group">
                    <div className="bg-light p-2 rounded me-3 group-hover-bg-primary transition-all">
                      <img src="/assets/img/icons/liked-page-01.svg" alt="page" width="20" height="20" />
                    </div>
                    <span className="fw-medium">Dribbble</span>
                  </a>
                  <a href="#/" className="d-flex align-items-center text-dark text-decoration-none group">
                    <div className="bg-light p-2 rounded me-3 group-hover-bg-primary transition-all">
                      <img src="/assets/img/icons/liked-page-02.svg" alt="page" width="20" height="20" />
                    </div>
                    <span className="fw-medium">UI/UX Designs</span>
                  </a>
                  <a href="#/" className="d-flex align-items-center text-dark text-decoration-none group">
                    <div className="bg-light p-2 rounded me-3 group-hover-bg-primary transition-all">
                      <img src="/assets/img/icons/liked-page-03.svg" alt="page" width="20" height="20" />
                    </div>
                    <span className="fw-medium">Figma Update</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="col-xxl-6 col-xl-8">
            <div className="d-flex flex-column gap-4">
              
              {/* Create Post */}
              <div className="premium-card border p-4 shadow-sm">
                <h5 className="fw-bold mb-3 d-flex align-items-center">
                  <i className="ti ti-edit text-primary me-2"></i> Create Post
                </h5>
                <div className="d-flex gap-3 mb-3">
                  <div className="avatar avatar-md flex-shrink-0">
                    <img src="/assets/img/avatars/avatar-21.jpg" alt="Profile" className="rounded-circle w-100 h-100 object-fit-cover" />
                  </div>
                  <textarea className="form-control border-0 bg-light rounded-4 p-3 shadow-none focus-ring focus-ring-light" rows="2" placeholder="What's on your mind, Dr. Hong?"></textarea>
                </div>
                <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                  <div className="d-flex gap-2">
                    <button className="btn btn-icon btn-light rounded-circle text-primary" data-bs-toggle="tooltip" title="Photo"><i className="ti ti-photo fs-5"></i></button>
                    <button className="btn btn-icon btn-light rounded-circle text-success" data-bs-toggle="tooltip" title="Video"><i className="ti ti-video fs-5"></i></button>
                    <button className="btn btn-icon btn-light rounded-circle text-info" data-bs-toggle="tooltip" title="Attachment"><i className="ti ti-paperclip fs-5"></i></button>
                    <button className="btn btn-icon btn-light rounded-circle text-warning" data-bs-toggle="tooltip" title="Emoji"><i className="ti ti-mood-smile fs-5"></i></button>
                  </div>
                  <button className="btn btn-primary premium-btn rounded-pill px-4 fw-medium shadow-sm d-flex align-items-center">
                    Share Post <i className="ti ti-send ms-2"></i>
                  </button>
                </div>
              </div>

              {/* Post 1 */}
              <div className="premium-card border p-0 shadow-sm overflow-hidden">
                <div className="p-4 border-bottom">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="avatar avatar-lg rounded-circle border border-2 border-white shadow-sm">
                        <img src="/assets/img/avatars/avatar-22.jpg" alt="User" className="rounded-circle w-100 h-100 object-fit-cover" />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1 d-flex align-items-center">
                          Richard Smith <i className="ti ti-rosette-discount-check-filled text-primary ms-1 fs-5"></i>
                        </h6>
                        <span className="fs-13 text-muted d-flex align-items-center">
                          @richard442 <span className="mx-2">•</span> 1 hr ago <span className="mx-2">•</span> <i className="ti ti-world"></i>
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-icon btn-sm btn-white rounded-circle shadow-sm"><i className="ti ti-dots-vertical"></i></button>
                  </div>
                  <p className="fs-15 text-dark lh-lg mb-3">
                    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle." 🌟
                    <br /><span className="text-primary fw-medium cursor-pointer">#MotivationMonday</span> <span className="text-primary fw-medium cursor-pointer">#Inspiration</span>
                  </p>
                  <div className="rounded-4 overflow-hidden shadow-sm">
                    <img src="/assets/img/social/social-feed-01.jpg" className="img-fluid w-100" alt="feed" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                  </div>
                </div>
                <div className="p-3 bg-light d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-4 fs-14 fw-medium text-secondary">
                    <span className="d-flex align-items-center cursor-pointer hover-primary transition-all"><i className="ti ti-heart me-2 fs-5 text-danger"></i> 340K</span>
                    <span className="d-flex align-items-center cursor-pointer hover-primary transition-all"><i className="ti ti-message-circle me-2 fs-5"></i> 45</span>
                    <span className="d-flex align-items-center cursor-pointer hover-primary transition-all"><i className="ti ti-share me-2 fs-5"></i> 28</span>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="avatar-group">
                      <div className="avatar avatar-sm rounded-circle border border-2 border-white"><img src="/assets/img/avatars/avatar-23.jpg" className="w-100 h-100 rounded-circle object-fit-cover" alt="a"/></div>
                      <div className="avatar avatar-sm rounded-circle border border-2 border-white"><img src="/assets/img/avatars/avatar-24.jpg" className="w-100 h-100 rounded-circle object-fit-cover" alt="a"/></div>
                      <div className="avatar avatar-sm rounded-circle border border-2 border-white"><img src="/assets/img/avatars/avatar-25.jpg" className="w-100 h-100 rounded-circle object-fit-cover" alt="a"/></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post 2 */}
              <div className="premium-card border p-0 shadow-sm overflow-hidden mb-4">
                <div className="p-4 border-bottom">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="avatar avatar-lg rounded-circle border border-2 border-white shadow-sm">
                        <img src="/assets/img/avatars/avatar-26.jpg" alt="User" className="rounded-circle w-100 h-100 object-fit-cover" />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1 d-flex align-items-center">
                          Sophie Headrick <i className="ti ti-rosette-discount-check-filled text-primary ms-1 fs-5"></i>
                        </h6>
                        <span className="fs-13 text-muted d-flex align-items-center">
                          @sophie241 <span className="mx-2">•</span> 2 hrs ago <span className="mx-2">•</span> <i className="ti ti-world"></i>
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-icon btn-sm btn-white rounded-circle shadow-sm"><i className="ti ti-dots-vertical"></i></button>
                  </div>
                  <p className="fs-15 text-dark lh-lg mb-3">
                    Excited to announce the launch of our new product! Get yours now and enjoy a special discount. 🎉
                    <br /><span className="text-primary fw-medium cursor-pointer">#NewRelease</span> <span className="text-primary fw-medium cursor-pointer">#Innovation</span>
                  </p>
                  <div className="card border rounded-4 overflow-hidden mb-3 shadow-sm">
                    <img src="/assets/img/social/social-feed-03.jpg" className="img-fluid w-100" alt="feed" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                    <div className="card-body p-3 bg-light">
                      <h6 className="fw-bold mb-1 text-truncate">Drinking water boosts skin health and beauty. Stay hydrated! 💧</h6>
                      <span className="text-muted fs-13">Health.com</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-light d-flex justify-content-between align-items-center border-bottom">
                  <div className="d-flex gap-4 fs-14 fw-medium text-secondary">
                    <span className="d-flex align-items-center cursor-pointer hover-primary transition-all"><i className="ti ti-heart-filled text-danger me-2 fs-5"></i> 1.2M</span>
                    <span className="d-flex align-items-center cursor-pointer hover-primary transition-all"><i className="ti ti-message-circle me-2 fs-5"></i> 342</span>
                    <span className="d-flex align-items-center cursor-pointer hover-primary transition-all"><i className="ti ti-share me-2 fs-5"></i> 102</span>
                  </div>
                </div>
                {/* Comments Section */}
                <div className="p-4 bg-white">
                  <h6 className="fw-bold mb-4 fs-14">Comments (342)</h6>
                  
                  <div className="d-flex gap-3 mb-4">
                    <div className="avatar avatar-md flex-shrink-0">
                      <img src="/assets/img/avatars/avatar-27.jpg" alt="User" className="rounded-circle w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="flex-grow-1">
                      <div className="bg-light p-3 rounded-4 rounded-top-0 rounded-end-4 mb-2">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="fw-bold mb-0 fs-14">Frank Hoffman</h6>
                          <span className="fs-12 text-muted">12:45 PM</span>
                        </div>
                        <p className="mb-0 fs-14 text-dark lh-base">Congratulations on the launch! I've been eagerly waiting for this product, and the special discount makes it even more exciting.</p>
                      </div>
                      <div className="d-flex gap-3 fs-13 fw-medium text-muted ms-2">
                        <span className="cursor-pointer hover-primary">Like</span>
                        <span className="cursor-pointer hover-primary">Reply</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mb-4 ms-5">
                    <div className="avatar avatar-md flex-shrink-0">
                      <img src="/assets/img/avatars/avatar-26.jpg" alt="User" className="rounded-circle w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="flex-grow-1">
                      <div className="bg-primary bg-opacity-10 border border-primary border-opacity-25 p-3 rounded-4 rounded-top-0 rounded-end-4 mb-2">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="fw-bold mb-0 fs-14 text-primary">Sophie Headrick <span className="badge bg-primary ms-2 rounded-pill fs-10">Author</span></h6>
                          <span className="fs-12 text-muted">12:48 PM</span>
                        </div>
                        <p className="mb-0 fs-14 text-dark lh-base">Thank you so much for your enthusiasm and support! 🙌</p>
                      </div>
                      <div className="d-flex gap-3 fs-13 fw-medium text-muted ms-2">
                        <span className="cursor-pointer hover-primary text-primary">Liked (2)</span>
                        <span className="cursor-pointer hover-primary">Reply</span>
                      </div>
                    </div>
                  </div>

                  {/* Add Comment */}
                  <div className="d-flex gap-3 align-items-center mt-3 pt-3 border-top">
                    <div className="avatar avatar-md flex-shrink-0 border border-2 border-primary rounded-circle p-1">
                      <img src="/assets/img/avatars/avatar-21.jpg" alt="Profile" className="rounded-circle w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="input-group bg-light rounded-pill p-1 flex-grow-1 border">
                      <input type="text" className="form-control border-0 bg-transparent shadow-none px-3" placeholder="Write a comment..." />
                      <button className="btn btn-icon btn-white rounded-circle text-warning shadow-sm me-1"><i className="ti ti-mood-smile"></i></button>
                      <button className="btn btn-icon btn-primary premium-btn rounded-circle shadow-sm"><i className="ti ti-send"></i></button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-xxl-3 d-none d-xxl-block">
            <div className="premium-card border-0 shadow-lg position-sticky top-0 p-4">
              <h5 className="fw-bold mb-4 d-flex align-items-center">
                <i className="ti ti-users text-primary me-2"></i> Suggested People
              </h5>
              <div className="d-flex flex-column gap-4 mb-4">
                {[
                  { name: 'Anthony Lewis', loc: 'United States', av: 'avatar-28.jpg', verified: true },
                  { name: 'Harvey Smith', loc: 'Ukraine', av: 'avatar-29.jpg', verified: false },
                  { name: 'William Blake', loc: 'Canada', av: 'avatar-30.jpg', verified: true },
                  { name: 'George Harris', loc: 'Australia', av: 'avatar-31.jpg', verified: false },
                ].map((person, i) => (
                  <div className="d-flex align-items-center justify-content-between" key={i}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="avatar avatar-md rounded-circle border border-2 border-white shadow-sm">
                        <img src={`/assets/img/avatars/${person.av}`} alt={person.name} className="rounded-circle w-100 h-100 object-fit-cover" />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-0 fs-14 d-flex align-items-center">
                          <a href="#/" className="text-dark text-decoration-none hover-primary">{person.name}</a>
                          {person.verified && <i className="ti ti-circle-check-filled text-success ms-1"></i>}
                        </h6>
                        <span className="fs-12 text-muted">{person.loc}</span>
                      </div>
                    </div>
                    <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle border-2 hover-bg-primary hover-text-white transition-all"><i className="ti ti-user-plus"></i></button>
                  </div>
                ))}
              </div>
              <button className="btn btn-light text-primary w-100 fw-bold border-0 shadow-sm py-2">See All Suggestions</button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer text-center mt-4">
        <p className="mb-0 text-dark"> &copy; <Link to="/" className="link-primary text-decoration-none">Dreams EMR</Link> - All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default SocialFeed;
