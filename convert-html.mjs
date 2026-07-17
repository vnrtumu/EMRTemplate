import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const TEMPLATE_DIR = '/var/folders/rp/c38ly5td3pvbqdxqs3g6h42m0000gn/T/opencode/dreamsemr/dreamsemr.dreamstechnologies.com/php/template';
const PAGES_DIR = join(__dirname, 'src/pages');

const FILE_MAP = {
  'index.html': 'Dashboard.jsx',
  'patients.html': 'Patients.jsx',
  'patient-search.html': 'PatientSearch.jsx',
  'add-patient.html': 'AddPatient.jsx',
  'edit-patient.html': 'EditPatient.jsx',
  'patient-details.html': 'PatientDetails.jsx',
  'doctors.html': 'Doctors.jsx',
  'all-doctors-list.html': 'AllDoctorsList.jsx',
  'add-doctors.html': 'AddDoctor.jsx',
  'edit-doctors.html': 'EditDoctor.jsx',
  'doctor-details.html': 'DoctorDetails.jsx',
  'requests.html': 'Requests.jsx',
  'appointments.html': 'Appointments.jsx',
  'appointment-calendar.html': 'AppointmentCalendar.jsx',
  'appointment-consultation.html': 'AppointmentConsultation.jsx',
  'transactions.html': 'Transactions.jsx',
  'transaction-details.html': 'TransactionDetails.jsx',
  'visits.html': 'Visits.jsx',
  'start-visits.html': 'StartVisits.jsx',
  'lab-results.html': 'LabResults.jsx',
  'medical-results.html': 'MedicalResults.jsx',
  'pharmacy.html': 'Pharmacy.jsx',
  'staffs.html': 'Staffs.jsx',
  'notifications.html': 'Notifications.jsx',
  'chat.html': 'Chat.jsx',
  'voice-call.html': 'VoiceCall.jsx',
  'video-call.html': 'VideoCall.jsx',
  'calendar.html': 'Calendar.jsx',
  'email.html': 'Email.jsx',
  'email-compose.html': 'EmailCompose.jsx',
  'email-details.html': 'EmailDetails.jsx',
  'contacts.html': 'Contacts.jsx',
  'contact-list.html': 'ContactList.jsx',
  'invoice.html': 'Invoice.jsx',
  'invoice-details.html': 'InvoiceDetails.jsx',
  'add-invoice.html': 'AddInvoice.jsx',
  'edit-invoice.html': 'EditInvoice.jsx',
  'todo.html': 'Todo.jsx',
  'notes.html': 'Notes.jsx',
  'kanban-view.html': 'KanbanView.jsx',
  'file-manager.html': 'FileManager.jsx',
  'social-feed.html': 'SocialFeed.jsx',
  'search-result.html': 'SearchResult.jsx',
  'general-settings.html': 'Settings/GeneralSettings.jsx',
  'appearance-settings.html': 'Settings/AppearanceSettings.jsx',
  'notifications-settings.html': 'Settings/NotificationSettings.jsx',
  'preferences-settings.html': 'Settings/PreferencesSettings.jsx',
  'security-settings.html': 'Settings/SecuritySettings.jsx',
  'plans-billings-settings.html': 'Settings/PlansBillingsSettings.jsx',
  'permission-settings.html': 'Settings/PermissionSettings.jsx',
  'user-permissions-settings.html': 'Settings/UserPermissionsSettings.jsx',
  'layout-mini.html': 'Layout/LayoutMini.jsx',
  'layout-hoverview.html': 'Layout/LayoutHoverView.jsx',
  'layout-hidden.html': 'Layout/LayoutHidden.jsx',
  'layout-fullwidth.html': 'Layout/LayoutFullwidth.jsx',
  'layout-rtl.html': 'Layout/LayoutRTL.jsx',
  'layout-dark.html': 'Layout/LayoutDark.jsx',
  'starter-page.html': 'StarterPage.jsx',
  'coming-soon.html': 'ComingSoon.jsx',
  'under-maintenance.html': 'UnderMaintenance.jsx',
  'privacy-policy.html': 'PrivacyPolicy.jsx',
  'terms-and-conditions.html': 'TermsAndConditions.jsx',
  'widgets.html': 'Widgets.jsx',
  'ui-accordion.html': 'UI/UxAccordion.jsx',
  'ui-alerts.html': 'UI/UxAlerts.jsx',
  'ui-avatar.html': 'UI/UxAvatar.jsx',
  'ui-badges.html': 'UI/UxBadges.jsx',
  'ui-breadcrumb.html': 'UI/UxBreadcrumb.jsx',
  'ui-buttons.html': 'UI/UxButtons.jsx',
  'ui-buttons-group.html': 'UI/UxButtonsGroup.jsx',
  'ui-cards.html': 'UI/UxCards.jsx',
  'ui-carousel.html': 'UI/UxCarousel.jsx',
  'ui-collapse.html': 'UI/UxCollapse.jsx',
  'ui-dropdowns.html': 'UI/UxDropdowns.jsx',
  'ui-ratio.html': 'UI/UxRatio.jsx',
  'ui-grid.html': 'UI/UxGrid.jsx',
  'ui-images.html': 'UI/UxImages.jsx',
  'ui-links.html': 'UI/UxLinks.jsx',
  'ui-list-group.html': 'UI/UxListGroup.jsx',
  'ui-modals.html': 'UI/UxModals.jsx',
  'ui-offcanvas.html': 'UI/UxOffcanvas.jsx',
  'ui-pagination.html': 'UI/UxPagination.jsx',
  'ui-placeholders.html': 'UI/UxPlaceholders.jsx',
  'ui-popovers.html': 'UI/UxPopovers.jsx',
  'ui-progress.html': 'UI/UxProgress.jsx',
  'ui-scrollspy.html': 'UI/UxScrollspy.jsx',
  'ui-spinner.html': 'UI/UxSpinner.jsx',
  'ui-nav-tabs.html': 'UI/UxNavTabs.jsx',
  'ui-toasts.html': 'UI/UxToasts.jsx',
  'ui-tooltips.html': 'UI/UxTooltips.jsx',
  'ui-typography.html': 'UI/UxTypography.jsx',
  'ui-utilities.html': 'UI/UxUtilities.jsx',
  'ui-dragula.html': 'UI/UxDragula.jsx',
  'ui-clipboard.html': 'UI/UxClipboard.jsx',
  'ui-rangeslider.html': 'UI/UxRangeslider.jsx',
  'ui-sweetalerts.html': 'UI/UxSweetalerts.jsx',
  'ui-lightbox.html': 'UI/UxLightbox.jsx',
  'ui-scrollbar.html': 'UI/UxScrollbar.jsx',
  'form-basic-inputs.html': 'FormBasicInputs.jsx',
  'form-checkbox-radios.html': 'FormCheckboxRadios.jsx',
  'form-input-groups.html': 'FormInputGroups.jsx',
  'form-grid-gutters.html': 'FormGridGutters.jsx',
  'form-mask.html': 'FormMask.jsx',
  'form-fileupload.html': 'FormFileupload.jsx',
  'form-horizontal.html': 'FormHorizontal.jsx',
  'form-vertical.html': 'FormVertical.jsx',
  'form-floating-labels.html': 'FormFloatingLabels.jsx',
  'form-validation.html': 'FormValidation.jsx',
  'form-select.html': 'FormSelect.jsx',
  'form-wizard.html': 'FormWizard.jsx',
  'form-pickers.html': 'FormPickers.jsx',
  'form-editors.html': 'FormEditors.jsx',
  'tables-basic.html': 'TablesBasic.jsx',
  'data-tables.html': 'DataTables.jsx',
  'chart-apex.html': 'ChartApex.jsx',
  'chart-c3.html': 'ChartC3.jsx',
  'chart-js.html': 'ChartJs.jsx',
  'chart-morris.html': 'ChartMorris.jsx',
  'chart-flot.html': 'ChartFlot.jsx',
  'chart-peity.html': 'ChartPeity.jsx',
  'icon-fontawesome.html': 'IconFontawesome.jsx',
  'icon-tabler.html': 'IconTabler.jsx',
  'icon-bootstrap.html': 'IconBootstrap.jsx',
  'icon-remix.html': 'IconRemix.jsx',
  'icon-feather.html': 'IconFeather.jsx',
  'icon-ionic.html': 'IconIonic.jsx',
  'icon-material.html': 'IconMaterial.jsx',
  'icon-pe7.html': 'IconPe7.jsx',
  'icon-simpleline.html': 'IconSimpleline.jsx',
  'icon-themify.html': 'IconThemify.jsx',
  'icon-weather.html': 'IconWeather.jsx',
  'icon-typicon.html': 'IconTypicon.jsx',
  'icon-flag.html': 'IconFlag.jsx',
  'login.html': 'Login.jsx',
  'sign-up.html': 'SignUp.jsx',
  'forgot-password.html': 'ForgotPassword.jsx',
  'change-password.html': 'ChangePassword.jsx',
  'lock-screen.html': 'LockScreen.jsx',
  'error-404.html': 'Error404.jsx',
  'error-500.html': 'Error500.jsx',
  'all-patients-list.html': 'AllPatientsList.jsx',
  'index-2.html': 'Dashboard.jsx',
  'patient-details-appointments.html': 'PatientDetailsAppointments.jsx',
  'patient-details-documents.html': 'PatientDetailsDocuments.jsx',
  'patient-details-insurance.html': 'PatientDetailsInsurance.jsx',
  'patient-details-lab-results.html': 'PatientDetailsLabResults.jsx',
  'patient-details-medical-history.html': 'PatientDetailsMedicalHistory.jsx',
  'patient-details-prescription.html': 'PatientDetailsPrescription.jsx',
  'patient-details-visit-history.html': 'PatientDetailsVisitHistory.jsx',
  'patient-details-vital-signs.html': 'PatientDetailsVitalSigns.jsx',
};

function htmlToJsx(html) {
  if (!html) return '';
  html = html.replace(/<!-- Mirrored from .+? -->/g, '');
  html = html.replace(/<!-- Added by HTTrack -->.*?<!-- \/Added by HTTrack -->/g, '');
  html = html.replace(/<meta[^>]*http-equiv=["']content-type["'][^>]*>/gi, '');
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<link[\s\S]*?\/?>/gi, '');
  html = html.replace(/\bclass\s*=/g, 'className=');
  html = html.replace(/\bfor\s*=/g, 'htmlFor=');
  html = html.replace(/\btabindex\s*=/g, 'tabIndex=');
  html = html.replace(/\breadonly\s*/g, 'readOnly ');
  html = html.replace(/<input([^>]*?) checked([\s>])/gi, '<input$1 defaultChecked$2');
  html = html.replace(/href="javascript:void\(0\);?"/gi, 'href="#/"');
  html = html.replace(/href="javascript:void\(0\)"/gi, 'href="#/"');
  html = html.replace(/src="([^"]*)\.html"/g, 'src="$1.png"');
  html = html.replace(/srcset="([^"]*)\.html"/g, 'srcset="$1.png"');
  html = html.replace(/\bstroke-width\s*=/g, 'strokeWidth=');
  html = html.replace(/\bstroke-linecap\s*=/g, 'strokeLinecap=');
  html = html.replace(/\bstroke-linejoin\s*=/g, 'strokeLinejoin=');
  html = html.replace(/\bfill-rule\s*=/g, 'fillRule=');
  html = html.replace(/\bclip-rule\s*=/g, 'clipRule=');
  html = html.replace(/\bclip-path\s*=/g, 'clipPath=');
  const selfClosing = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
  selfClosing.forEach(tag => {
    const re = new RegExp(`<${tag}([^>]*?)\\s*>`, 'gi');
    html = html.replace(re, `<${tag}$1 />`);
  });
  return html.trim();
}

function extractBalancedContent(html, openTag) {
  const startIdx = html.indexOf(openTag);
  if (startIdx === -1) return '';
  const contentStart = startIdx + openTag.length;
  let depth = 1;
  let i = contentStart;
  const tagRe = /<\/?(\w+)[^>]*>/g;
  tagRe.lastIndex = i;
  let match;
  while ((match = tagRe.exec(html)) !== null) {
    const fullTag = match[0];
    const tagName = match[1];
    if (fullTag.startsWith('</')) {
      depth--;
      if (depth === 0) {
        return html.slice(contentStart, match.index);
      }
    } else if (!fullTag.endsWith('/>') && !['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'].includes(tagName)) {
      depth++;
    }
  }
  return '';
}

function extractPageContent(html) {
  const wrapperMatch = html.match(/<div class="page-wrapper[^"]*">/);
  if (!wrapperMatch) return '';
  const content = extractBalancedContent(html, wrapperMatch[0]);
  return content ? content.trim() : '';
}

function extractAuthContent(html) {
  let mainContent = extractPageContent(html);
  if (mainContent) {
    mainContent = mainContent.replace(/<header[\s\S]*?<\/header>/s, '');
    mainContent = mainContent.replace(/<div class="sidebar"[\s\S]*?<\/div>\s*<!-- Sidenav Menu End -->/s, '');
    return mainContent.trim();
  }
  const mainMatch = html.match(/<div class="main-wrapper">/);
  if (mainMatch) {
    const content = extractBalancedContent(html, mainMatch[0]);
    if (content) {
      return content.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<link[\s\S]*?\/?>/gi, '').trim();
    }
  }
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) return '';
  let body = bodyMatch[1];
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<link[\s\S]*?\/?>/gi, '');
  return body.replace(/<header[\s\S]*?<\/header>/s, '').replace(/<div class="sidebar"[\s\S]*?-->/s, '');
}

const htmlFiles = readdirSync(TEMPLATE_DIR).filter(f => f.endsWith('.html'));
let converted = 0;
let errors = [];
let skipped = [];

htmlFiles.forEach(file => {
  try {
    const targetPath = FILE_MAP[file];
    if (!targetPath) {
      skipped.push(file);
      return;
    }

    const fullPath = join(PAGES_DIR, targetPath);
    const html = readFileSync(join(TEMPLATE_DIR, file), 'utf-8');

    const authFiles = ['login.html', 'sign-up.html', 'forgot-password.html', 'change-password.html', 'lock-screen.html',
                       'error-404.html', 'error-500.html', 'coming-soon.html', 'under-maintenance.html'];

    let content = authFiles.includes(file) ? extractAuthContent(html) : extractPageContent(html);

    if (!content || content.length < 30) {
      errors.push(`${file}: insufficient content`);
      return;
    }

    content = htmlToJsx(content);

    const componentName = targetPath.replace(/\.jsx$/, '').split('/').pop();

    const jsx = `const ${componentName} = () => {
  return (
    <>
${content}
    </>
  );
};

export default ${componentName};
`;
    mkdirSync(dirname(fullPath), { recursive: true });
    writeFileSync(fullPath, jsx);
    converted++;
  } catch (err) {
    errors.push(`${file}: ${err.message}`);
  }
});

console.log(`Converted ${converted} pages, skipped ${skipped.length}, errors ${errors.length}`);
if (errors.length) {
  console.log('First 5 errors:');
  errors.slice(0, 5).forEach(e => console.log(`  - ${e}`));
}
if (skipped.length) {
  console.log('Skipped (not in map):');
  skipped.slice(0, 5).forEach(e => console.log(`  - ${e}`));
}
