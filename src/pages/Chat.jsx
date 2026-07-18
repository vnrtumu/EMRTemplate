import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Chat.css';

/* ─── Shared Mock Files/Media Data ───────────────────────────────────── */
const sharedFiles = [
  { name: 'X-Ray_Chest_Mark.pdf', size: '2.4 MB', type: 'pdf', bg: '#fee2e2', color: '#ef4444', icon: 'ti-file-type-pdf' },
  { name: 'Blood_Test_Report.pdf', size: '1.1 MB', type: 'pdf', bg: '#fee2e2', color: '#ef4444', icon: 'ti-file-type-pdf' },
  { name: 'Prescription_Jul_18.docx', size: '512 KB', type: 'doc', bg: '#dbeafe', color: '#2563eb', icon: 'ti-file-type-docx' },
  { name: 'Lab_Results_Cardiac.xlsx', size: '840 KB', type: 'xls', bg: '#dcfce7', color: '#16a34a', icon: 'ti-file-type-xls' }
];

const sharedMedia = [
  { path: '/assets/img/social/attachment-03.jpg', label: 'Chest X-Ray Thumbnail' },
  { path: '/assets/img/social/attachment-04.jpg', label: 'EGC Report Graph' }
];

/* ─── Main Chat Component ────────────────────────────────────────────── */
const Chat = () => {
  // Available users list categorized by Role Groups
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Mark Smith',
      role: 'Patient',
      category: 'patients',
      status: 'online',
      initials: 'MS',
      avatar: '/assets/img/avatars/avatar-03.jpg',
      phone: '+1 (555) 234-5678',
      email: 'mark.smith@email.com',
      bloodGroup: 'O+',
      age: 34,
      history: [
        { sender: 'them', text: 'Hey doctor! Did you check out the new prescription design?', time: '10:10 AM', status: 'read' },
        { sender: 'me', text: 'Not yet. Can you share the details here?', time: '10:12 AM', status: 'read' },
        { sender: 'them', text: 'Sure! Please check the attachments below.', time: '10:14 AM', media: true, status: 'read' }
      ],
      replyBank: [
        "Thanks for checking, Doctor. I've uploaded the daily log.",
        "Could you check if I need to schedule another consultation next week?",
        "Perfect, I will take the dose as recommended. Thanks!",
        "Yes, the chest pain has decreased since I started taking the medication."
      ]
    },
    {
      id: 2,
      name: 'Dr. Eugene Sikora',
      role: 'Neurologist',
      category: 'specialists',
      status: 'away',
      initials: 'ES',
      avatar: '/assets/img/avatars/avatar-05.jpg',
      phone: '+1 (555) 876-5432',
      email: 'e.sikora@dreams-emr.com',
      bloodGroup: 'A-',
      age: 48,
      history: [
        { sender: 'them', text: 'Hello, are you available for the neurology consult today?', time: '08:26 AM', status: 'read' },
        { sender: 'me', text: 'Yes, I can join at 11:00 AM.', time: '08:30 AM', status: 'read' }
      ],
      replyBank: [
        "Sounds good! Let's connect in the main conference room.",
        "I'll bring the EEG graphs and MRI reports.",
        "Great, see you there shortly."
      ]
    },
    {
      id: 3,
      name: 'Robert Fassett',
      role: 'Patient',
      category: 'patients',
      status: 'offline',
      initials: 'RF',
      avatar: '/assets/img/avatars/avatar-04.jpg',
      phone: '+1 (555) 432-1098',
      email: 'robert.f@email.com',
      bloodGroup: 'B+',
      age: 62,
      history: [
        { sender: 'them', text: 'Here are the vital sign records for this week.', time: 'Yesterday', status: 'read' }
      ],
      replyBank: [
        "I'll make sure to record my blood pressure twice daily.",
        "Thank you, I appreciate the prompt advice."
      ]
    },
    {
      id: 4,
      name: 'Dr. Andrew Fletcher',
      role: 'Cardiologist',
      category: 'specialists',
      status: 'online',
      initials: 'AF',
      avatar: '/assets/img/avatars/avatar-06.jpg',
      phone: '+1 (555) 789-0123',
      email: 'a.fletcher@dreams-emr.com',
      bloodGroup: 'AB+',
      age: 51,
      history: [
        { sender: 'them', text: 'We should update the cardiac monitoring schedule for room 402.', time: 'Yesterday', status: 'read' }
      ],
      replyBank: [
        "I have updated the ward charts. Let me know if you need modifications.",
        "I will be on rounds in 20 minutes if you wish to discuss."
      ]
    },
    {
      id: 5,
      name: 'Tyron Derby',
      role: 'Lab Technician',
      category: 'staff',
      status: 'online',
      initials: 'TD',
      avatar: '/assets/img/avatars/avatar-07.jpg',
      phone: '+1 (555) 901-2345',
      email: 't.derby@dreams-emr.com',
      bloodGroup: 'O-',
      age: 29,
      history: [
        { sender: 'them', text: 'The blood test reports for James Carter are ready and uploaded.', time: '12:55 PM', status: 'read' }
      ],
      replyBank: [
        "Perfect. I will review the CBC profiles now.",
        "Thanks for processing these samples so quickly."
      ]
    }
  ]);

  const [activeUserId, setActiveUserId] = useState(1);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'patients', 'specialists', 'staff'
  const [hoveredMessageIdx, setHoveredMessageIdx] = useState(null);
  
  const chatBodyEndRef = useRef(null);

  // Active user reference
  const activeUser = useMemo(() => {
    return users.find(u => u.id === activeUserId) || users[0];
  }, [users, activeUserId]);

  // Scroll to bottom helper
  const scrollToBottom = () => {
    chatBodyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeUser.history, isTyping]);

  // Handle message send
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { sender: 'me', text: inputText, time: timeString, status: 'sent' };

    setUsers(prev => prev.map(u => {
      if (u.id === activeUser.id) {
        return { ...u, history: [...u.history, userMsg] };
      }
      return u;
    }));
    setInputText('');

    // Trigger double checkmark check mark update after brief delay
    setTimeout(() => {
      setUsers(prev => prev.map(u => {
        if (u.id === activeUser.id) {
          return {
            ...u,
            history: u.history.map(m => m.text === userMsg.text ? { ...m, status: 'read' } : m)
          };
        }
        return u;
      }));
    }, 1000);

    // Simulated medical bot reply
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const replyBank = activeUser.replyBank || ["Acknowledged. I'll get back to you shortly."];
      const botResponseText = replyBank[Math.floor(Math.random() * replyBank.length)];
      const botMsg = { 
        sender: 'them', 
        text: botResponseText, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'read' 
      };

      setUsers(prev => prev.map(u => {
        if (u.id === activeUser.id) {
          return { ...u, history: [...u.history, botMsg] };
        }
        return u;
      }));
    }, 2000);
  };

  // Quick message templates
  const handleQuickTemplate = (text) => {
    setInputText(text);
  };

  // Filter users based on query and tab segment
  const filteredUsers = useMemo(() => {
    return users.filter(u => {
      const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            u.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === 'all' || u.category === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [users, searchQuery, activeTab]);

  return (
    <>
      <div className="content mb-0">
        
        {/* ── Page Header ── */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1 fw-bold">Chat Inbox</h4>
            <p className="mb-0 text-muted">Secure, HIPAA-compliant messaging with patients and medical specialists.</p>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <button className="btn btn-icon btn-white border shadow-sm" title="Refresh messages"><i className="ti ti-refresh text-muted"></i></button>
            <button className="btn btn-icon btn-white border shadow-sm" title="Print transcript"><i className="ti ti-printer text-muted"></i></button>
          </div>
        </div>

        {/* ── Main Layout Wrapper ── */}
        <div className="card chat-container-card">
          <div className="row g-0 h-100">

            {/* ── Left Navigation Area (User List & Search Tabs) ── */}
            <div className="col-lg-3 chat-sidebar-left h-100 d-flex flex-column">
              <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-light-subtle">
                <div className="d-flex align-items-center gap-2">
                  <span className="avatar avatar-md rounded-circle flex-shrink-0">
                    <img src="/assets/img/avatars/avatar-02.jpg" alt="James Hong" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                  </span>
                  <div>
                    <h6 className="fs-14 fw-bold mb-0">James Hong</h6>
                    <small className="text-success d-flex align-items-center gap-1">
                      <span className="status-pulse online position-static d-inline-block" style={{ width: 8, height: 8 }}></span>
                      Physician (Admin)
                    </small>
                  </div>
                </div>
                <button className="btn btn-icon btn-primary btn-sm rounded-circle" title="New message thread"><i className="ti ti-plus"></i></button>
              </div>

              {/* Search bar */}
              <div className="p-3 pb-2">
                <div className="input-group search-input-group shadow-sm">
                  <span className="input-group-text bg-white border-end-0"><i className="ti ti-search text-muted"></i></span>
                  <input
                    type="text"
                    className="form-control border-start-0 ps-0"
                    placeholder="Search doctor, patient..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Tab Categories */}
              <div className="px-3 mb-2">
                <div className="nav nav-pills chat-pills justify-content-between p-1 bg-light rounded-pill" style={{ fontSize: '11px' }}>
                  <button className={`nav-link py-1 px-2 rounded-pill ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All</button>
                  <button className={`nav-link py-1 px-2 rounded-pill ${activeTab === 'patients' ? 'active' : ''}`} onClick={() => setActiveTab('patients')}>Patients</button>
                  <button className={`nav-link py-1 px-2 rounded-pill ${activeTab === 'specialists' ? 'active' : ''}`} onClick={() => setActiveTab('specialists')}>Doctors</button>
                  <button className={`nav-link py-1 px-2 rounded-pill ${activeTab === 'staff' ? 'active' : ''}`} onClick={() => setActiveTab('staff')}>Staff</button>
                </div>
              </div>

              {/* Users scroll list */}
              <div className="flex-fill px-3 py-2 overflow-y-auto" style={{ maxHeight: 'calc(100% - 160px)' }}>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((u) => {
                    const lastMsg = u.history[u.history.length - 1];
                    const isUserActive = u.id === activeUserId;
                    return (
                      <div
                        key={u.id}
                        className={`d-flex align-items-center justify-content-between p-3 chat-user-item ${isUserActive ? 'active' : ''}`}
                        onClick={() => setActiveUserId(u.id)}
                      >
                        <div className="d-flex align-items-center gap-2 overflow-hidden w-100">
                          {u.avatar ? (
                            <span className="chat-avatar">
                              <img src={u.avatar} alt={u.name} />
                              <span className={`status-pulse ${u.status}`}></span>
                            </span>
                          ) : (
                            <span className="chat-avatar bg-primary-subtle text-primary">
                              {u.initials}
                              <span className={`status-dot ${u.status}`}></span>
                            </span>
                          )}
                          <div className="overflow-hidden flex-fill">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="fs-13 fw-bold mb-0 text-truncate text-dark">{u.name}</h6>
                              <span className="text-muted fs-10 ms-1 flex-shrink-0">
                                {lastMsg ? lastMsg.time : ''}
                              </span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-1">
                              <p className="mb-0 text-muted fs-11 text-truncate pe-2">
                                {lastMsg ? lastMsg.text : 'Start conversation...'}
                              </p>
                              {u.status === 'online' && !isUserActive && (
                                <span className="badge bg-primary rounded-circle" style={{ width: 6, height: 6, padding: 0 }}> </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center text-muted py-5 fs-13">No matching threads.</div>
                )}
              </div>
            </div>

            {/* ── Middle Chat Area (Main conversational display) ── */}
            <div className="col-lg-6 chat-main-area h-100 d-flex flex-column border-end bg-white">
              {/* Header Info */}
              <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-light-subtle">
                <div className="d-flex align-items-center gap-2">
                  {activeUser.avatar ? (
                    <span className="chat-avatar">
                      <img src={activeUser.avatar} alt={activeUser.name} />
                      <span className={`status-pulse ${activeUser.status}`}></span>
                    </span>
                  ) : (
                    <span className="chat-avatar bg-primary-subtle text-primary">
                      {activeUser.initials}
                      <span className={`status-dot ${activeUser.status}`}></span>
                    </span>
                  )}
                  <div>
                    <h6 className="fs-14 fw-bold mb-0 text-dark">{activeUser.name}</h6>
                    <small className="text-muted fs-12">
                      <span className="badge bg-secondary-subtle text-secondary-emphasis me-1 px-2 py-1 fs-10">{activeUser.role}</span>
                      <span className="text-capitalize text-success font-monospace">{activeUser.status}</span>
                    </small>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <Link to="/voice-call" className="btn btn-chat-action" title="Start voice call"><i className="ti ti-phone fs-16 text-primary"></i></Link>
                  <Link to="/video-call" className="btn btn-chat-action" title="Start video consultation"><i className="ti ti-video fs-16 text-primary"></i></Link>
                  <button className="btn btn-chat-action" title="Clinical options"><i className="ti ti-dots-vertical fs-16"></i></button>
                </div>
              </div>

              {/* Message Feed */}
              <div className="chat-body-scroll bg-light-subtle flex-fill overflow-y-auto">
                <div className="text-center mb-4">
                  <span className="badge bg-light text-muted border px-3 rounded-pill fs-11">HIPAA Encrypted Channel</span>
                </div>
                {activeUser.history.map((msg, idx) => {
                  const isMe = msg.sender === 'me';
                  return (
                    <div
                      key={idx}
                      className={`message-row ${isMe ? 'outgoing' : 'incoming'}`}
                      onMouseEnter={() => setHoveredMessageIdx(idx)}
                      onMouseLeave={() => setHoveredMessageIdx(null)}
                    >
                      <div className="message-content-wrapper position-relative">
                        <div className="message-bubble">
                          <p className="mb-0 fs-14">{msg.text}</p>
                          {msg.media && (
                            <div className="d-flex flex-wrap gap-2 mt-2">
                              {sharedMedia.map((img, i) => (
                                <div key={i} className="msg-attachment shadow-sm">
                                  <img src={img.path} alt={img.label} className="w-100 d-block" style={{ height: 65, objectFit: 'cover' }} />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="message-meta">
                          {isMe && (
                            <i className={`ti ${msg.status === 'read' ? 'ti-checks text-primary' : 'ti-check text-muted'} fs-12 me-1`}></i>
                          )}
                          {msg.time}
                        </div>
                        {/* Hover Reactions Panel */}
                        {hoveredMessageIdx === idx && (
                          <div className={`reactions-popover p-1 border rounded bg-white shadow-sm position-absolute ${isMe ? 'start-0' : 'end-0'}`} style={{ top: '-30px', zIndex: 10 }}>
                            <span className="reaction-emoji" title="Like">👍</span>
                            <span className="reaction-emoji" title="Done">✅</span>
                            <span className="reaction-emoji" title="Exclamation">❗</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="message-row incoming">
                    <div className="message-content-wrapper">
                      <div className="typing-indicator">
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={chatBodyEndRef} />
              </div>

              {/* Quick Template Suggestion Panel */}
              <div className="px-3 py-2 bg-light border-top d-flex gap-2 flex-wrap">
                <small className="text-muted align-self-center me-1">Templates:</small>
                <button className="btn btn-sm btn-white border rounded-pill py-1 px-2 fs-10" onClick={() => handleQuickTemplate("Please schedule a follow-up appointment.")}>Follow-up</button>
                <button className="btn btn-sm btn-white border rounded-pill py-1 px-2 fs-10" onClick={() => handleQuickTemplate("Your lab results are ready for download.")}>Lab Results</button>
                <button className="btn btn-sm btn-white border rounded-pill py-1 px-2 fs-10" onClick={() => handleQuickTemplate("The prescription dosage has been modified.")}>Prescription</button>
              </div>

              {/* Message Input Box */}
              <form onSubmit={handleSendMessage} className="chat-input-container border-top">
                <button type="button" className="btn-chat-action" title="Attach file"><i className="ti ti-paperclip fs-18"></i></button>
                <button type="button" className="btn-chat-action" title="Attach image"><i className="ti ti-photo-plus fs-18"></i></button>
                <input
                  type="text"
                  className="form-control chat-input-field flex-fill"
                  placeholder="Type message here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit" className="btn-chat-send" title="Send message">
                  <i className="ti ti-send fs-18"></i>
                </button>
              </form>
            </div>

            {/* ── Right Sidebar (Clinical Context & Medical Files) ── */}
            <div className="col-lg-3 chat-sidebar-right h-100 d-flex flex-column bg-light-subtle">
              {/* Profile card summary */}
              <div className="p-4 text-center border-bottom bg-white">
                {activeUser.avatar ? (
                  <img src={activeUser.avatar} alt={activeUser.name} className="rounded-circle mb-3 border p-1 shadow-sm" style={{ width: 72, height: 72, objectFit: 'cover' }} />
                ) : (
                  <div className="rounded-circle mb-3 bg-primary-subtle text-primary d-flex align-items-center justify-content-center mx-auto shadow-sm" style={{ width: 72, height: 72, fontSize: 24, fontWeight: 'bold' }}>
                    {activeUser.initials}
                  </div>
                )}
                <h5 className="fs-15 fw-bold mb-1 text-dark">{activeUser.name}</h5>
                <p className="text-muted fs-12 mb-3">{activeUser.role}</p>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-sm btn-primary px-3 rounded-pill fs-11"><i className="ti ti-folder me-1"></i>EMR Chart</button>
                  <button className="btn btn-sm btn-outline-secondary px-3 rounded-pill fs-11"><i className="ti ti-bell-off me-1"></i>Mute</button>
                </div>
              </div>

              {/* Clinical Context & Shared Documents Panel */}
              <div className="flex-fill p-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 200px)' }}>
                
                {/* Medical Meta details */}
                <span className="info-section-title d-block mb-3">Patient Summary</span>
                <div className="card border-0 rounded p-3 mb-4 bg-white shadow-sm" style={{ fontSize: '12px' }}>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Age / Sex:</span>
                    <strong className="text-dark">{activeUser.age || 34} Yrs / Male</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Blood Group:</span>
                    <strong className="text-dark">{activeUser.bloodGroup || 'O+'}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Email:</span>
                    <span className="text-dark text-truncate" style={{ maxWidth: '140px' }}>{activeUser.email}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Contact:</span>
                    <strong className="text-dark">{activeUser.phone}</strong>
                  </div>
                </div>

                {/* Shared Documents list */}
                <span className="info-section-title d-block mb-3">Clinical Documents</span>
                <div className="d-flex flex-column gap-2 mb-4">
                  {sharedFiles.map((file, i) => (
                    <div key={i} className="shared-file-item bg-white p-2 rounded border border-light-subtle shadow-sm">
                      <span className="file-icon-box flex-shrink-0" style={{ background: file.bg, color: file.color }}>
                        <i className={`ti ${file.icon}`}></i>
                      </span>
                      <div className="overflow-hidden flex-fill">
                        <h6 className="fs-12 fw-semibold mb-0 text-truncate text-dark">{file.name}</h6>
                        <small className="text-muted fs-10">{file.size}</small>
                      </div>
                      <button className="btn btn-link text-muted p-0 ms-2" title="Download report"><i className="ti ti-download fs-15"></i></button>
                    </div>
                  ))}
                </div>

                {/* Recent shared media */}
                <span className="info-section-title d-block mb-3">Medical Imaging</span>
                <div className="row g-2">
                  {sharedMedia.map((media, i) => (
                    <div key={i} className="col-6">
                      <div className="msg-attachment m-0 shadow-sm border">
                        <img src={media.path} alt={media.label} className="w-100 d-block rounded" style={{ height: 65, objectFit: 'cover' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <footer className="footer text-center mt-4">
        <p className="mb-0 text-muted small">&copy; Dreams EMR - All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Chat;
