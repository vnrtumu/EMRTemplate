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
      { label: 'Calendar', path: '/calendar' },
      { label: 'Email', path: '/email' },
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
      { label: 'Kanban Board', path: '/kanban-view' },
      { label: 'File Manager', path: '/file-manager' },
      { label: 'Social Feed', path: '/social-feed' },
      { label: 'Search Result', path: '/search-result' },
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
  },
  { title: 'UI INTERFACE', type: 'menuTitle' },
  {
    label: 'Base UI', icon: 'ti-box', type: 'submenu',
    children: [
      { label: 'Accordion', path: '/ui-accordion' },
      { label: 'Alerts', path: '/ui-alerts' },
      { label: 'Avatar', path: '/ui-avatar' },
      { label: 'Badges', path: '/ui-badges' },
      { label: 'Breadcrumb', path: '/ui-breadcrumb' },
      { label: 'Buttons', path: '/ui-buttons' },
      { label: 'Button Group', path: '/ui-buttons-group' },
      { label: 'Card', path: '/ui-cards' },
      { label: 'Carousel', path: '/ui-carousel' },
      { label: 'Collapse', path: '/ui-collapse' },
      { label: 'Dropdowns', path: '/ui-dropdowns' },
      { label: 'Ratio', path: '/ui-ratio' },
      { label: 'Grid', path: '/ui-grid' },
      { label: 'Images', path: '/ui-images' },
      { label: 'Links', path: '/ui-links' },
      { label: 'List Group', path: '/ui-list-group' },
      { label: 'Modals', path: '/ui-modals' },
      { label: 'Offcanvas', path: '/ui-offcanvas' },
      { label: 'Pagination', path: '/ui-pagination' },
      { label: 'Placeholders', path: '/ui-placeholders' },
      { label: 'Popovers', path: '/ui-popovers' },
      { label: 'Progress', path: '/ui-progress' },
      { label: 'Scrollspy', path: '/ui-scrollspy' },
      { label: 'Spinner', path: '/ui-spinner' },
      { label: 'Tabs', path: '/ui-nav-tabs' },
      { label: 'Toasts', path: '/ui-toasts' },
      { label: 'Tooltips', path: '/ui-tooltips' },
      { label: 'Typography', path: '/ui-typography' },
      { label: 'Utilities', path: '/ui-utilities' },
    ]
  },
  {
    label: 'Advanced UI', icon: 'ti-stars', type: 'submenu',
    children: [
      { label: 'Dragula', path: '/ui-dragula' },
      { label: 'Clipboard', path: '/ui-clipboard' },
      { label: 'Range Slider', path: '/ui-rangeslider' },
      { label: 'Sweet Alerts', path: '/ui-sweetalerts' },
      { label: 'Lightbox', path: '/ui-lightbox' },
      { label: 'Scrollbar', path: '/ui-scrollbar' },
    ]
  },
  {
    label: 'Forms', icon: 'ti-input-search', type: 'submenu',
    children: [
      {
        label: 'Form Elements', type: 'submenu-two',
        children: [
          { label: 'Basic Inputs', path: '/form-basic-inputs' },
          { label: 'Checkbox & Radios', path: '/form-checkbox-radios' },
          { label: 'Input Groups', path: '/form-input-groups' },
          { label: 'Grid & Gutters', path: '/form-grid-gutters' },
          { label: 'Input Masks', path: '/form-mask' },
          { label: 'File Uploads', path: '/form-fileupload' },
        ]
      },
      {
        label: 'Layouts', type: 'submenu-two',
        children: [
          { label: 'Horizontal Form', path: '/form-horizontal' },
          { label: 'Vertical Form', path: '/form-vertical' },
          { label: 'Floating Labels', path: '/form-floating-labels' },
        ]
      },
      { label: 'Form Validation', path: '/form-validation' },
      { label: 'Form Select', path: '/form-select' },
      { label: 'Form Wizard', path: '/form-wizard' },
      { label: 'Form Picker', path: '/form-pickers' },
      { label: 'Form Editors', path: '/form-editors' },
    ]
  },
  {
    label: 'Tables', icon: 'ti-table', type: 'submenu',
    children: [
      { label: 'Basic Tables', path: '/tables-basic' },
      { label: 'Data Table', path: '/data-tables' },
    ]
  },
  {
    label: 'Charts', icon: 'ti-chart-bar', type: 'submenu',
    children: [
      { label: 'Apex Charts', path: '/chart-apex' },
      { label: 'Chart C3', path: '/chart-c3' },
      { label: 'Chart Js', path: '/chart-js' },
      { label: 'Morris Charts', path: '/chart-morris' },
      { label: 'Flot Charts', path: '/chart-flot' },
      { label: 'Peity Charts', path: '/chart-peity' },
    ]
  },
  {
    label: 'Icons', icon: 'ti-icons', type: 'submenu',
    children: [
      { label: 'Fontawesome Icons', path: '/icon-fontawesome' },
      { label: 'Tabler Icons', path: '/icon-tabler' },
      { label: 'Bootstrap Icons', path: '/icon-bootstrap' },
      { label: 'Remix Icons', path: '/icon-remix' },
      { label: 'Feather Icons', path: '/icon-feather' },
      { label: 'Ionic Icons', path: '/icon-ionic' },
      { label: 'Material Icons', path: '/icon-material' },
      { label: 'Pe7 Icons', path: '/icon-pe7' },
      { label: 'Simpleline Icons', path: '/icon-simpleline' },
      { label: 'Themify Icons', path: '/icon-themify' },
      { label: 'Weather Icons', path: '/icon-weather' },
      { label: 'Typicon Icons', path: '/icon-typicon' },
      { label: 'Flag Icons', path: '/icon-flag' },
    ]
  },
  { label: 'Widgets', icon: 'ti-widget', path: '/widgets' },
  { title: 'HELP', type: 'menuTitle' },
  { label: 'Documentation', icon: 'ti-file-text', path: '/documentation', external: true },
  { label: 'Changelog', icon: 'ti-clipboard-list', path: '/changelog', external: true },
];

export default menuItems;
