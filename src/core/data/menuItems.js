const menuItems = [
  { title: 'MAIN', type: 'menuTitle' },
  { label: 'Dashboard', icon: 'ti-layout-board', path: '/' },
  {
    label: 'Applications', icon: 'ti-apps', type: 'submenu',
    children: [
      { label: 'Chat', path: '/chat' },
      {
        label: 'Calls', type: 'submenu-two',
        children: [
          { label: 'Voice Call', path: '/voice-call' },
          { label: 'Video Call', path: '/video-call' },
        ]
      },
      { label: 'Contacts', path: '/contacts' },
      {
        label: 'Invoices', type: 'submenu-two',
        children: [
          { label: 'Invoices', path: '/invoice' },
          { label: 'Invoice Details', path: '/invoice-details' },
        ]
      },
      { label: 'To Do', path: '/todo' },
      { label: 'Notes', path: '/notes' },
      { label: 'File Manager', path: '/file-manager' },
      { label: 'Social Feed', path: '/social-feed' }
    ]
  },

  { title: 'HEALTHCARE', type: 'menuTitle' },
  {
    label: 'Patients', icon: 'ti-users', type: 'submenu',
    children: [
      { label: 'Patients', path: '/patients' },
      { label: 'Patient Search', path: '/patient-search' },
    ]
  },
  { label: 'Doctors', icon: 'ti-stethoscope', path: '/doctors' },
  { label: 'Requests', icon: 'ti-file-description', path: '/requests' },
  {
    label: 'Appointments', icon: 'ti-calendar-check', type: 'submenu',
    children: [
      { label: 'Calendar', path: '/appointment-calendar' },
      { label: 'Appointments', path: '/appointments' },
      { label: 'Consultations', path: '/appointment-consultation' },
      { label: 'Transactions', path: '/transactions' },
    ]
  },
  { label: 'Visits', icon: 'ti-ambulance', path: '/visits' },
  {
    label: 'Laboratory', icon: 'ti-flask', type: 'submenu',
    children: [
      { label: 'Lab Results', path: '/lab-results' },
      { label: 'Medical Results', path: '/medical-results' },
    ]
  },
  { label: 'Pharmacy', icon: 'ti-pill', path: '/pharmacy' },
  { title: 'MANAGE', type: 'menuTitle' },
  { label: 'Staffs', icon: 'ti-user-star', path: '/staffs' },
  { label: 'Notifications', icon: 'ti-bell', path: '/notifications' },
  { label: 'Settings', icon: 'ti-settings', path: '/general-settings' },
];

export default menuItems;
