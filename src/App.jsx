import { Routes, Route } from 'react-router-dom'
import AppLayout from './feature-module/components/Layout/AppLayout'
import ThemeProvider from './feature-module/components/ThemeProvider'
import Dashboard from './feature-module/feature-components/Dashboard'
import Login from './feature-module/feature-components/Auth/Login'
import SignUp from './feature-module/feature-components/Auth/SignUp'
import ForgotPassword from './feature-module/feature-components/Auth/ForgotPassword'
import ChangePassword from './feature-module/feature-components/Auth/ChangePassword'
import LockScreen from './feature-module/feature-components/Auth/LockScreen'
import Error404 from './feature-module/feature-components/Error/Error404'
import Error500 from './feature-module/feature-components/Error/Error500'
import Patients from './feature-module/feature-components/Patients'
import PatientSearch from './feature-module/feature-components/PatientSearch'
import AddPatient from './feature-module/feature-components/AddPatient'
import EditPatient from './feature-module/feature-components/EditPatient'
import PatientDetails from './feature-module/feature-components/PatientDetails'
import AllPatientsList from './feature-module/feature-components/AllPatientsList'
import PatientDetailsAppointments from './feature-module/feature-components/PatientDetailsAppointments'
import PatientDetailsDocuments from './feature-module/feature-components/PatientDetailsDocuments'
import PatientDetailsInsurance from './feature-module/feature-components/PatientDetailsInsurance'
import PatientDetailsLabResults from './feature-module/feature-components/PatientDetailsLabResults'
import PatientDetailsMedicalHistory from './feature-module/feature-components/PatientDetailsMedicalHistory'
import PatientDetailsPrescription from './feature-module/feature-components/PatientDetailsPrescription'
import PatientDetailsVisitHistory from './feature-module/feature-components/PatientDetailsVisitHistory'
import PatientDetailsVitalSigns from './feature-module/feature-components/PatientDetailsVitalSigns'
import Doctors from './feature-module/feature-components/Doctors'
import AllDoctorsList from './feature-module/feature-components/AllDoctorsList'
import AddDoctor from './feature-module/feature-components/AddDoctor'
import EditDoctor from './feature-module/feature-components/EditDoctor'
import DoctorDetails from './feature-module/feature-components/DoctorDetails'
import Requests from './feature-module/feature-components/Requests'
import Appointments from './feature-module/feature-components/Appointments'
import AppointmentCalendar from './feature-module/feature-components/AppointmentCalendar'
import AppointmentConsultation from './feature-module/feature-components/AppointmentConsultation'
import Transactions from './feature-module/feature-components/Transactions'
import TransactionDetails from './feature-module/feature-components/TransactionDetails'
import Visits from './feature-module/feature-components/Visits'
import StartVisits from './feature-module/feature-components/StartVisits'
import LabResults from './feature-module/feature-components/LabResults'
import MedicalResults from './feature-module/feature-components/MedicalResults'
import Pharmacy from './feature-module/feature-components/Pharmacy'
import Staffs from './feature-module/feature-components/Staffs'
import Notifications from './feature-module/feature-components/Notifications'
import Chat from './feature-module/feature-components/Chat'
import VoiceCall from './feature-module/feature-components/VoiceCall'
import VideoCall from './feature-module/feature-components/VideoCall'
import Calendar from './feature-module/feature-components/Calendar'
import Email from './feature-module/feature-components/Email'
import EmailCompose from './feature-module/feature-components/EmailCompose'
import EmailDetails from './feature-module/feature-components/EmailDetails'
import Contacts from './feature-module/feature-components/Contacts'
import ContactList from './feature-module/feature-components/ContactList'
import Invoice from './feature-module/feature-components/Invoice'
import InvoiceDetails from './feature-module/feature-components/InvoiceDetails'
import AddInvoice from './feature-module/feature-components/AddInvoice'
import EditInvoice from './feature-module/feature-components/EditInvoice'
import Todo from './feature-module/feature-components/Todo'
import Notes from './feature-module/feature-components/Notes'
import KanbanView from './feature-module/feature-components/KanbanView'
import FileManager from './feature-module/feature-components/FileManager'
import SocialFeed from './feature-module/feature-components/SocialFeed'
import SearchResult from './feature-module/feature-components/SearchResult'
import GeneralSettings from './feature-module/feature-components/Settings/GeneralSettings'
import AppearanceSettings from './feature-module/feature-components/Settings/AppearanceSettings'
import NotificationSettings from './feature-module/feature-components/Settings/NotificationSettings'
import PreferencesSettings from './feature-module/feature-components/Settings/PreferencesSettings'
import SecuritySettings from './feature-module/feature-components/Settings/SecuritySettings'
import PlansBillingsSettings from './feature-module/feature-components/Settings/PlansBillingsSettings'
import PermissionSettings from './feature-module/feature-components/Settings/PermissionSettings'
import UserPermissionsSettings from './feature-module/feature-components/Settings/UserPermissionsSettings'
import LayoutMini from './feature-module/feature-components/Layout/LayoutMini'
import LayoutHoverView from './feature-module/feature-components/Layout/LayoutHoverView'
import LayoutHidden from './feature-module/feature-components/Layout/LayoutHidden'
import LayoutFullwidth from './feature-module/feature-components/Layout/LayoutFullwidth'
import LayoutRTL from './feature-module/feature-components/Layout/LayoutRTL'
import LayoutDark from './feature-module/feature-components/Layout/LayoutDark'
import StarterPage from './feature-module/feature-components/StarterPage'
import ComingSoon from './feature-module/feature-components/ComingSoon'
import UnderMaintenance from './feature-module/feature-components/UnderMaintenance'
import PrivacyPolicy from './feature-module/feature-components/PrivacyPolicy'
import TermsAndConditions from './feature-module/feature-components/TermsAndConditions'
import Widgets from './feature-module/feature-components/Widgets'
import UxAccordion from './feature-module/feature-components/UI/UxAccordion'
import UxAlerts from './feature-module/feature-components/UI/UxAlerts'
import UxAvatar from './feature-module/feature-components/UI/UxAvatar'
import UxBadges from './feature-module/feature-components/UI/UxBadges'
import UxBreadcrumb from './feature-module/feature-components/UI/UxBreadcrumb'
import UxButtons from './feature-module/feature-components/UI/UxButtons'
import UxButtonsGroup from './feature-module/feature-components/UI/UxButtonsGroup'
import UxCards from './feature-module/feature-components/UI/UxCards'
import UxCarousel from './feature-module/feature-components/UI/UxCarousel'
import UxCollapse from './feature-module/feature-components/UI/UxCollapse'
import UxDropdowns from './feature-module/feature-components/UI/UxDropdowns'
import UxRatio from './feature-module/feature-components/UI/UxRatio'
import UxGrid from './feature-module/feature-components/UI/UxGrid'
import UxImages from './feature-module/feature-components/UI/UxImages'
import UxLinks from './feature-module/feature-components/UI/UxLinks'
import UxListGroup from './feature-module/feature-components/UI/UxListGroup'
import UxModals from './feature-module/feature-components/UI/UxModals'
import UxOffcanvas from './feature-module/feature-components/UI/UxOffcanvas'
import UxPagination from './feature-module/feature-components/UI/UxPagination'
import UxPlaceholders from './feature-module/feature-components/UI/UxPlaceholders'
import UxPopovers from './feature-module/feature-components/UI/UxPopovers'
import UxProgress from './feature-module/feature-components/UI/UxProgress'
import UxScrollspy from './feature-module/feature-components/UI/UxScrollspy'
import UxSpinner from './feature-module/feature-components/UI/UxSpinner'
import UxNavTabs from './feature-module/feature-components/UI/UxNavTabs'
import UxToasts from './feature-module/feature-components/UI/UxToasts'
import UxTooltips from './feature-module/feature-components/UI/UxTooltips'
import UxTypography from './feature-module/feature-components/UI/UxTypography'
import UxUtilities from './feature-module/feature-components/UI/UxUtilities'
import UxDragula from './feature-module/feature-components/UI/UxDragula'
import UxClipboard from './feature-module/feature-components/UI/UxClipboard'
import UxRangeslider from './feature-module/feature-components/UI/UxRangeslider'
import UxSweetalerts from './feature-module/feature-components/UI/UxSweetalerts'
import UxLightbox from './feature-module/feature-components/UI/UxLightbox'
import UxScrollbar from './feature-module/feature-components/UI/UxScrollbar'
import FormBasicInputs from './feature-module/feature-components/FormBasicInputs'
import FormCheckboxRadios from './feature-module/feature-components/FormCheckboxRadios'
import FormInputGroups from './feature-module/feature-components/FormInputGroups'
import FormGridGutters from './feature-module/feature-components/FormGridGutters'
import FormMask from './feature-module/feature-components/FormMask'
import FormFileupload from './feature-module/feature-components/FormFileupload'
import FormHorizontal from './feature-module/feature-components/FormHorizontal'
import FormVertical from './feature-module/feature-components/FormVertical'
import FormFloatingLabels from './feature-module/feature-components/FormFloatingLabels'
import FormValidation from './feature-module/feature-components/FormValidation'
import FormSelect from './feature-module/feature-components/FormSelect'
import FormWizard from './feature-module/feature-components/FormWizard'
import FormPickers from './feature-module/feature-components/FormPickers'
import FormEditors from './feature-module/feature-components/FormEditors'
import TablesBasic from './feature-module/feature-components/TablesBasic'
import DataTables from './feature-module/feature-components/DataTables'
import ChartApex from './feature-module/feature-components/ChartApex'
import ChartC3 from './feature-module/feature-components/ChartC3'
import ChartJs from './feature-module/feature-components/ChartJs'
import ChartMorris from './feature-module/feature-components/ChartMorris'
import ChartFlot from './feature-module/feature-components/ChartFlot'
import ChartPeity from './feature-module/feature-components/ChartPeity'
import IconFontawesome from './feature-module/feature-components/IconFontawesome'
import IconTabler from './feature-module/feature-components/IconTabler'
import IconBootstrap from './feature-module/feature-components/IconBootstrap'
import IconRemix from './feature-module/feature-components/IconRemix'
import IconFeather from './feature-module/feature-components/IconFeather'
import IconIonic from './feature-module/feature-components/IconIonic'
import IconMaterial from './feature-module/feature-components/IconMaterial'
import IconPe7 from './feature-module/feature-components/IconPe7'
import IconSimpleline from './feature-module/feature-components/IconSimpleline'
import IconThemify from './feature-module/feature-components/IconThemify'
import IconWeather from './feature-module/feature-components/IconWeather'
import IconTypicon from './feature-module/feature-components/IconTypicon'
import IconFlag from './feature-module/feature-components/IconFlag'
import Landing from './feature-module/feature-components/Landing'

function App() {
  return (
    <ThemeProvider>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patient-search" element={<PatientSearch />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/edit-patient" element={<EditPatient />} />
        <Route path="/patient-details" element={<PatientDetails />} />
        <Route path="/all-patients-list" element={<AllPatientsList />} />
        <Route path="/patient-details-appointments" element={<PatientDetailsAppointments />} />
        <Route path="/patient-details-documents" element={<PatientDetailsDocuments />} />
        <Route path="/patient-details-insurance" element={<PatientDetailsInsurance />} />
        <Route path="/patient-details-lab-results" element={<PatientDetailsLabResults />} />
        <Route path="/patient-details-medical-history" element={<PatientDetailsMedicalHistory />} />
        <Route path="/patient-details-prescription" element={<PatientDetailsPrescription />} />
        <Route path="/patient-details-visit-history" element={<PatientDetailsVisitHistory />} />
        <Route path="/patient-details-vital-signs" element={<PatientDetailsVitalSigns />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/all-doctors-list" element={<AllDoctorsList />} />
        <Route path="/add-doctors" element={<AddDoctor />} />
        <Route path="/edit-doctors" element={<EditDoctor />} />
        <Route path="/doctor-details" element={<DoctorDetails />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointment-calendar" element={<AppointmentCalendar />} />
        <Route path="/appointment-consultation" element={<AppointmentConsultation />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transaction-details" element={<TransactionDetails />} />
        <Route path="/visits" element={<Visits />} />
        <Route path="/start-visits" element={<StartVisits />} />
        <Route path="/lab-results" element={<LabResults />} />
        <Route path="/medical-results" element={<MedicalResults />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/staffs" element={<Staffs />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/voice-call" element={<VoiceCall />} />
        <Route path="/video-call" element={<VideoCall />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/email" element={<Email />} />
        <Route path="/email-compose" element={<EmailCompose />} />
        <Route path="/email-details" element={<EmailDetails />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contact-list" element={<ContactList />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/invoice-details" element={<InvoiceDetails />} />
        <Route path="/add-invoice" element={<AddInvoice />} />
        <Route path="/edit-invoice" element={<EditInvoice />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/kanban-view" element={<KanbanView />} />
        <Route path="/file-manager" element={<FileManager />} />
        <Route path="/social-feed" element={<SocialFeed />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/general-settings" element={<GeneralSettings />} />
        <Route path="/appearance-settings" element={<AppearanceSettings />} />
        <Route path="/notifications-settings" element={<NotificationSettings />} />
        <Route path="/preferences-settings" element={<PreferencesSettings />} />
        <Route path="/security-settings" element={<SecuritySettings />} />
        <Route path="/plans-billings-settings" element={<PlansBillingsSettings />} />
        <Route path="/permission-settings" element={<PermissionSettings />} />
        <Route path="/user-permissions-settings" element={<UserPermissionsSettings />} />
        <Route path="/layout-mini" element={<LayoutMini />} />
        <Route path="/layout-hoverview" element={<LayoutHoverView />} />
        <Route path="/layout-hidden" element={<LayoutHidden />} />
        <Route path="/layout-fullwidth" element={<LayoutFullwidth />} />
        <Route path="/layout-rtl" element={<LayoutRTL />} />
        <Route path="/layout-dark" element={<LayoutDark />} />
        <Route path="/starter-page" element={<StarterPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/under-maintenance" element={<UnderMaintenance />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/widgets" element={<Widgets />} />
        <Route path="/ui-accordion" element={<UxAccordion />} />
        <Route path="/ui-alerts" element={<UxAlerts />} />
        <Route path="/ui-avatar" element={<UxAvatar />} />
        <Route path="/ui-badges" element={<UxBadges />} />
        <Route path="/ui-breadcrumb" element={<UxBreadcrumb />} />
        <Route path="/ui-buttons" element={<UxButtons />} />
        <Route path="/ui-buttons-group" element={<UxButtonsGroup />} />
        <Route path="/ui-cards" element={<UxCards />} />
        <Route path="/ui-carousel" element={<UxCarousel />} />
        <Route path="/ui-collapse" element={<UxCollapse />} />
        <Route path="/ui-dropdowns" element={<UxDropdowns />} />
        <Route path="/ui-ratio" element={<UxRatio />} />
        <Route path="/ui-grid" element={<UxGrid />} />
        <Route path="/ui-images" element={<UxImages />} />
        <Route path="/ui-links" element={<UxLinks />} />
        <Route path="/ui-list-group" element={<UxListGroup />} />
        <Route path="/ui-modals" element={<UxModals />} />
        <Route path="/ui-offcanvas" element={<UxOffcanvas />} />
        <Route path="/ui-pagination" element={<UxPagination />} />
        <Route path="/ui-placeholders" element={<UxPlaceholders />} />
        <Route path="/ui-popovers" element={<UxPopovers />} />
        <Route path="/ui-progress" element={<UxProgress />} />
        <Route path="/ui-scrollspy" element={<UxScrollspy />} />
        <Route path="/ui-spinner" element={<UxSpinner />} />
        <Route path="/ui-nav-tabs" element={<UxNavTabs />} />
        <Route path="/ui-toasts" element={<UxToasts />} />
        <Route path="/ui-tooltips" element={<UxTooltips />} />
        <Route path="/ui-typography" element={<UxTypography />} />
        <Route path="/ui-utilities" element={<UxUtilities />} />
        <Route path="/ui-dragula" element={<UxDragula />} />
        <Route path="/ui-clipboard" element={<UxClipboard />} />
        <Route path="/ui-rangeslider" element={<UxRangeslider />} />
        <Route path="/ui-sweetalerts" element={<UxSweetalerts />} />
        <Route path="/ui-lightbox" element={<UxLightbox />} />
        <Route path="/ui-scrollbar" element={<UxScrollbar />} />
        <Route path="/form-basic-inputs" element={<FormBasicInputs />} />
        <Route path="/form-checkbox-radios" element={<FormCheckboxRadios />} />
        <Route path="/form-input-groups" element={<FormInputGroups />} />
        <Route path="/form-grid-gutters" element={<FormGridGutters />} />
        <Route path="/form-mask" element={<FormMask />} />
        <Route path="/form-fileupload" element={<FormFileupload />} />
        <Route path="/form-horizontal" element={<FormHorizontal />} />
        <Route path="/form-vertical" element={<FormVertical />} />
        <Route path="/form-floating-labels" element={<FormFloatingLabels />} />
        <Route path="/form-validation" element={<FormValidation />} />
        <Route path="/form-select" element={<FormSelect />} />
        <Route path="/form-wizard" element={<FormWizard />} />
        <Route path="/form-pickers" element={<FormPickers />} />
        <Route path="/form-editors" element={<FormEditors />} />
        <Route path="/tables-basic" element={<TablesBasic />} />
        <Route path="/data-tables" element={<DataTables />} />
        <Route path="/chart-apex" element={<ChartApex />} />
        <Route path="/chart-c3" element={<ChartC3 />} />
        <Route path="/chart-js" element={<ChartJs />} />
        <Route path="/chart-morris" element={<ChartMorris />} />
        <Route path="/chart-flot" element={<ChartFlot />} />
        <Route path="/chart-peity" element={<ChartPeity />} />
        <Route path="/icon-fontawesome" element={<IconFontawesome />} />
        <Route path="/icon-tabler" element={<IconTabler />} />
        <Route path="/icon-bootstrap" element={<IconBootstrap />} />
        <Route path="/icon-remix" element={<IconRemix />} />
        <Route path="/icon-feather" element={<IconFeather />} />
        <Route path="/icon-ionic" element={<IconIonic />} />
        <Route path="/icon-material" element={<IconMaterial />} />
        <Route path="/icon-pe7" element={<IconPe7 />} />
        <Route path="/icon-simpleline" element={<IconSimpleline />} />
        <Route path="/icon-themify" element={<IconThemify />} />
        <Route path="/icon-weather" element={<IconWeather />} />
        <Route path="/icon-typicon" element={<IconTypicon />} />
        <Route path="/icon-flag" element={<IconFlag />} />
      </Route>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/lock-screen" element={<LockScreen />} />
      <Route path="/error-404" element={<Error404 />} />
      <Route path="/error-500" element={<Error500 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    </ThemeProvider>
  )
}

export default App
