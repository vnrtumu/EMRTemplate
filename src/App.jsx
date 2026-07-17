import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/Layout/AppLayout'
import ThemeProvider from './components/ThemeProvider'
import Dashboard from './pages/Dashboard'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import ForgotPassword from './pages/Auth/ForgotPassword'
import ChangePassword from './pages/Auth/ChangePassword'
import LockScreen from './pages/Auth/LockScreen'
import Error404 from './pages/Error/Error404'
import Error500 from './pages/Error/Error500'
import Patients from './pages/Patients'
import PatientSearch from './pages/PatientSearch'
import AddPatient from './pages/AddPatient'
import EditPatient from './pages/EditPatient'
import PatientDetails from './pages/PatientDetails'
import AllPatientsList from './pages/AllPatientsList'
import PatientDetailsAppointments from './pages/PatientDetailsAppointments'
import PatientDetailsDocuments from './pages/PatientDetailsDocuments'
import PatientDetailsInsurance from './pages/PatientDetailsInsurance'
import PatientDetailsLabResults from './pages/PatientDetailsLabResults'
import PatientDetailsMedicalHistory from './pages/PatientDetailsMedicalHistory'
import PatientDetailsPrescription from './pages/PatientDetailsPrescription'
import PatientDetailsVisitHistory from './pages/PatientDetailsVisitHistory'
import PatientDetailsVitalSigns from './pages/PatientDetailsVitalSigns'
import Doctors from './pages/Doctors'
import AllDoctorsList from './pages/AllDoctorsList'
import AddDoctor from './pages/AddDoctor'
import EditDoctor from './pages/EditDoctor'
import DoctorDetails from './pages/DoctorDetails'
import Requests from './pages/Requests'
import Appointments from './pages/Appointments'
import AppointmentCalendar from './pages/AppointmentCalendar'
import AppointmentConsultation from './pages/AppointmentConsultation'
import Transactions from './pages/Transactions'
import TransactionDetails from './pages/TransactionDetails'
import Visits from './pages/Visits'
import StartVisits from './pages/StartVisits'
import LabResults from './pages/LabResults'
import MedicalResults from './pages/MedicalResults'
import Pharmacy from './pages/Pharmacy'
import Staffs from './pages/Staffs'
import Notifications from './pages/Notifications'
import Chat from './pages/Chat'
import VoiceCall from './pages/VoiceCall'
import VideoCall from './pages/VideoCall'
import Calendar from './pages/Calendar'
import Email from './pages/Email'
import EmailCompose from './pages/EmailCompose'
import EmailDetails from './pages/EmailDetails'
import Contacts from './pages/Contacts'
import ContactList from './pages/ContactList'
import Invoice from './pages/Invoice'
import InvoiceDetails from './pages/InvoiceDetails'
import AddInvoice from './pages/AddInvoice'
import EditInvoice from './pages/EditInvoice'
import Todo from './pages/Todo'
import Notes from './pages/Notes'
import KanbanView from './pages/KanbanView'
import FileManager from './pages/FileManager'
import SocialFeed from './pages/SocialFeed'
import SearchResult from './pages/SearchResult'
import GeneralSettings from './pages/Settings/GeneralSettings'
import AppearanceSettings from './pages/Settings/AppearanceSettings'
import NotificationSettings from './pages/Settings/NotificationSettings'
import PreferencesSettings from './pages/Settings/PreferencesSettings'
import SecuritySettings from './pages/Settings/SecuritySettings'
import PlansBillingsSettings from './pages/Settings/PlansBillingsSettings'
import PermissionSettings from './pages/Settings/PermissionSettings'
import UserPermissionsSettings from './pages/Settings/UserPermissionsSettings'
import LayoutMini from './pages/Layout/LayoutMini'
import LayoutHoverView from './pages/Layout/LayoutHoverView'
import LayoutHidden from './pages/Layout/LayoutHidden'
import LayoutFullwidth from './pages/Layout/LayoutFullwidth'
import LayoutRTL from './pages/Layout/LayoutRTL'
import LayoutDark from './pages/Layout/LayoutDark'
import StarterPage from './pages/StarterPage'
import ComingSoon from './pages/ComingSoon'
import UnderMaintenance from './pages/UnderMaintenance'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Widgets from './pages/Widgets'
import UxAccordion from './pages/UI/UxAccordion'
import UxAlerts from './pages/UI/UxAlerts'
import UxAvatar from './pages/UI/UxAvatar'
import UxBadges from './pages/UI/UxBadges'
import UxBreadcrumb from './pages/UI/UxBreadcrumb'
import UxButtons from './pages/UI/UxButtons'
import UxButtonsGroup from './pages/UI/UxButtonsGroup'
import UxCards from './pages/UI/UxCards'
import UxCarousel from './pages/UI/UxCarousel'
import UxCollapse from './pages/UI/UxCollapse'
import UxDropdowns from './pages/UI/UxDropdowns'
import UxRatio from './pages/UI/UxRatio'
import UxGrid from './pages/UI/UxGrid'
import UxImages from './pages/UI/UxImages'
import UxLinks from './pages/UI/UxLinks'
import UxListGroup from './pages/UI/UxListGroup'
import UxModals from './pages/UI/UxModals'
import UxOffcanvas from './pages/UI/UxOffcanvas'
import UxPagination from './pages/UI/UxPagination'
import UxPlaceholders from './pages/UI/UxPlaceholders'
import UxPopovers from './pages/UI/UxPopovers'
import UxProgress from './pages/UI/UxProgress'
import UxScrollspy from './pages/UI/UxScrollspy'
import UxSpinner from './pages/UI/UxSpinner'
import UxNavTabs from './pages/UI/UxNavTabs'
import UxToasts from './pages/UI/UxToasts'
import UxTooltips from './pages/UI/UxTooltips'
import UxTypography from './pages/UI/UxTypography'
import UxUtilities from './pages/UI/UxUtilities'
import UxDragula from './pages/UI/UxDragula'
import UxClipboard from './pages/UI/UxClipboard'
import UxRangeslider from './pages/UI/UxRangeslider'
import UxSweetalerts from './pages/UI/UxSweetalerts'
import UxLightbox from './pages/UI/UxLightbox'
import UxScrollbar from './pages/UI/UxScrollbar'
import FormBasicInputs from './pages/FormBasicInputs'
import FormCheckboxRadios from './pages/FormCheckboxRadios'
import FormInputGroups from './pages/FormInputGroups'
import FormGridGutters from './pages/FormGridGutters'
import FormMask from './pages/FormMask'
import FormFileupload from './pages/FormFileupload'
import FormHorizontal from './pages/FormHorizontal'
import FormVertical from './pages/FormVertical'
import FormFloatingLabels from './pages/FormFloatingLabels'
import FormValidation from './pages/FormValidation'
import FormSelect from './pages/FormSelect'
import FormWizard from './pages/FormWizard'
import FormPickers from './pages/FormPickers'
import FormEditors from './pages/FormEditors'
import TablesBasic from './pages/TablesBasic'
import DataTables from './pages/DataTables'
import ChartApex from './pages/ChartApex'
import ChartC3 from './pages/ChartC3'
import ChartJs from './pages/ChartJs'
import ChartMorris from './pages/ChartMorris'
import ChartFlot from './pages/ChartFlot'
import ChartPeity from './pages/ChartPeity'
import IconFontawesome from './pages/IconFontawesome'
import IconTabler from './pages/IconTabler'
import IconBootstrap from './pages/IconBootstrap'
import IconRemix from './pages/IconRemix'
import IconFeather from './pages/IconFeather'
import IconIonic from './pages/IconIonic'
import IconMaterial from './pages/IconMaterial'
import IconPe7 from './pages/IconPe7'
import IconSimpleline from './pages/IconSimpleline'
import IconThemify from './pages/IconThemify'
import IconWeather from './pages/IconWeather'
import IconTypicon from './pages/IconTypicon'
import IconFlag from './pages/IconFlag'

function App() {
  return (
    <ThemeProvider>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
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
