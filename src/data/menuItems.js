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
  {
    label: 'Layouts', icon: 'ti-layout', type: 'submenu',
    children: [
      { label: 'Mini', path: '/layout-mini' },
      { label: 'Hover View', path: '/layout-hoverview' },
      { label: 'Hidden', path: '/layout-hidden' },
      { label: 'Full Width', path: '/layout-fullwidth' },
      { label: 'RTL', path: '/layout-rtl' },
      { label: 'Dark', path: '/layout-dark' },
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
  { title: 'PAGES', type: 'menuTitle' },
  {
    label: 'Authentication', icon: 'ti-shield-lock', type: 'submenu',
    children: [
      { label: 'Login', path: '/login' },
      { label: 'Sign Up', path: '/sign-up' },
      { label: 'Forgot Password', path: '/forgot-password' },
      { label: 'Change Password', path: '/change-password' },
      { label: 'Lock Screen', path: '/lock-screen' },
    ]
  },
  {
    label: 'Error Pages', icon: 'ti-alert-triangle', type: 'submenu',
    children: [
      { label: 'Error 404', path: '/error-404' },
      { label: 'Error 500', path: '/error-500' },
    ]
  },
  {
    label: 'Other Pages', icon: 'ti-file', type: 'submenu',
    children: [
      { label: 'Starter Page', path: '/starter-page' },
      { label: 'Coming Soon', path: '/coming-soon' },
      { label: 'Under Maintenance', path: '/under-maintenance' },
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms & Conditions', path: '/terms-and-conditions' },
    ]
  }
];

export default menuItems;
