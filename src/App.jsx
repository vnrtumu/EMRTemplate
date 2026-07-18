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
