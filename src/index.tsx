import { StrictMode, lazy, Suspense } from 'react';
import './styles.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Chip } from './screens/Chip/Chip';
import { Dashboard } from './screens/Dashboard/Dashboard';
import { Toaster } from './components/ui/toaster';
import { Layout } from './components/layout/Layout';
import { PageLoadingFallback } from './components/layout/PageLoadingFallback';
import { ErrorBoundary } from './components/ErrorBoundary';
import { OnboardingProvider } from './contexts/OnboardingContext';
import { OnboardingTooltip } from './components/OnboardingTooltip';
import { HelpButton } from './components/HelpButton';
import { PrimaryButtons } from './screens/Buttons/PrimaryButtons';
import { SecondaryButtons } from './screens/Buttons/SecondaryButtons';
import { OutlineButtons } from './screens/Buttons/OutlineButtons';
import { GhostButtons } from './screens/Buttons/GhostButtons';
import { IconButtons } from './screens/Buttons/IconButtons';
import { SuccessButtons } from './screens/Buttons/SuccessButtons';
import { WarningButtons } from './screens/Buttons/WarningButtons';
import { DangerButtons } from './screens/Buttons/DangerButtons';
import { LinkButtons } from './screens/Buttons/LinkButtons';
import { LoadingButtons } from './screens/Buttons/LoadingButtons';
import { GroupedButtons } from './screens/Buttons/GroupedButtons';
import { InputFields } from './screens/Forms/InputFields';
import { SelectFields } from './screens/Forms/SelectFields';
import { CheckboxRadio } from './screens/Forms/CheckboxRadio';
import { FormValidation } from './screens/Forms/FormValidation';
import { DatePickerDemo } from './screens/Forms/DatePickerDemo';
import { Cards } from './screens/Components/Cards';
import { Alerts } from './screens/Components/Alerts';
import { Modals } from './screens/Components/Modals';
import { TabsPage } from './screens/Components/Tabs';
import { AccordionPage } from './screens/Components/Accordion';
import { TablesPage } from './screens/Components/Tables';
import { AvatarsPage } from './screens/Components/Avatars';
import { ProgressPage } from './screens/Components/Progress';
import { PaginationPage } from './screens/Components/Pagination';
import { Tooltips } from './screens/Components/Tooltips';
import { SliderDemo } from './screens/Components/SliderDemo';
import { DataTableDemo } from './screens/Components/DataTable';
import { FileUpload } from './screens/Examples/FileUpload';
import { Ecommerce } from './screens/Ecommerce/Ecommerce';
// Lazy load heavy components
const BlueMountainWicks = lazy(() => import('./screens/BlueMountainWicks/BlueMountainWicks').then(m => ({ default: m.BlueMountainWicks })));
// Lazy load chart components for better bundle splitting
const BarCharts = lazy(() => import('./screens/Charts/BarCharts').then(m => ({ default: m.BarCharts })));
const LineCharts = lazy(() => import('./screens/Charts/LineCharts').then(m => ({ default: m.LineCharts })));
const PieCharts = lazy(() => import('./screens/Charts/PieCharts').then(m => ({ default: m.PieCharts })));
const AreaCharts = lazy(() => import('./screens/Charts/AreaCharts').then(m => ({ default: m.AreaCharts })));
const ScatterCharts = lazy(() => import('./screens/Charts/ScatterCharts').then(m => ({ default: m.ScatterCharts })));
import { Calendar } from './screens/Examples/Calendar';
import { UserProfile } from './screens/Examples/UserProfile';
import { Timeline } from './screens/Examples/Timeline';
import { NotificationsCenter } from './screens/Examples/NotificationsCenter';
import { Typography } from './screens/UI/Typography';
import { Colors } from './screens/UI/Colors';
import { IconsGallery } from './screens/UI/IconsGallery';
import { GridSystem } from './screens/UI/GridSystem';

// Import new screen components
import { Analytics } from './screens/Analytics/Analytics';
import { CRM } from './screens/CRM/CRM';
import { Settings } from './screens/Settings/Settings';
import { Help } from './screens/Help/Help';
import { Notes } from './screens/Notes/Notes';
import { Chat } from './screens/Chat/Chat';
import { Kanban } from './screens/Kanban/Kanban';
import { ContactTable } from './screens/Contact/ContactTable';
import { ContactList } from './screens/Contact/ContactList';
import { Invoice } from './screens/Invoice/Invoice';
import { TodoList } from './screens/Todo/TodoList';
import TodoDemo from './screens/Todo/TodoDemo';

// Import error pages
import { NotFound, ServerError, Unauthorized } from './screens/Error';

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <OnboardingProvider>
        <Router future={{ 
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}>
          <OnboardingTooltip />
          <HelpButton />
          <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ui-components" element={<Chip />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/blue-mountain-wicks" element={<Suspense fallback={<PageLoadingFallback />}><BlueMountainWicks /></Suspense>} />

          {/* Button Routes */}
          <Route path="/buttons/primary" element={<PrimaryButtons />} />
          <Route path="/buttons/secondary" element={<SecondaryButtons />} />
          <Route path="/buttons/outline" element={<OutlineButtons />} />
          <Route path="/buttons/ghost" element={<GhostButtons />} />
          <Route path="/buttons/icon" element={<IconButtons />} />
          <Route path="/buttons/success" element={<SuccessButtons />} />
          <Route path="/buttons/warning" element={<WarningButtons />} />
          <Route path="/buttons/danger" element={<DangerButtons />} />
          <Route path="/buttons/link" element={<LinkButtons />} />
          <Route path="/buttons/loading" element={<LoadingButtons />} />
          <Route path="/buttons/grouped" element={<GroupedButtons />} />

          {/* Form Routes */}
          <Route path="/forms/input-fields" element={<InputFields />} />
          <Route path="/forms/select-fields" element={<SelectFields />} />
          <Route path="/forms/checkbox-radio" element={<CheckboxRadio />} />
          <Route path="/forms/form-validation" element={<FormValidation />} />
          <Route path="/forms/date-picker" element={<DatePickerDemo />} />

          {/* Component Routes */}
          <Route path="/components/cards" element={<Cards />} />
          <Route path="/components/alerts" element={<Alerts />} />
          <Route path="/components/modals" element={<Modals />} />
          <Route path="/components/tabs" element={<TabsPage />} />
          <Route path="/components/accordion" element={<AccordionPage />} />
          <Route path="/components/tables" element={<TablesPage />} />
          <Route path="/components/avatars" element={<AvatarsPage />} />
          <Route path="/components/progress" element={<ProgressPage />} />
          <Route path="/components/pagination" element={<PaginationPage />} />
          <Route path="/components/tooltips" element={<Tooltips />} />
          <Route path="/components/slider" element={<SliderDemo />} />
          <Route path="/components/data-table" element={<DataTableDemo />} />

          {/* Example Routes */}
          <Route path="/examples/file-upload" element={<FileUpload />} />
          <Route path="/examples/calendar" element={<Calendar />} />

          {/* Chart Routes - Lazy loaded for better performance */}
          <Route path="/charts/bar" element={<Suspense fallback={<PageLoadingFallback />}><BarCharts /></Suspense>} />
          <Route path="/charts/line" element={<Suspense fallback={<PageLoadingFallback />}><LineCharts /></Suspense>} />
          <Route path="/charts/pie" element={<Suspense fallback={<PageLoadingFallback />}><PieCharts /></Suspense>} />
          <Route path="/charts/area" element={<Suspense fallback={<PageLoadingFallback />}><AreaCharts /></Suspense>} />
          <Route path="/charts/scatter" element={<Suspense fallback={<PageLoadingFallback />}><ScatterCharts /></Suspense>} />

          {/* UI Routes */}
          <Route path="/ui/typography" element={<Typography />} />
          <Route path="/ui/colors" element={<Colors />} />
          <Route path="/ui/icons" element={<IconsGallery />} />
          <Route path="/ui/grid-system" element={<GridSystem />} />

          {/* Additional Example Routes */}
          <Route path="/examples/user-profile" element={<UserProfile />} />
          <Route path="/examples/timeline" element={<Timeline />} />
          <Route path="/examples/notifications" element={<NotificationsCenter />} />

          {/* Dashboard Routes */}
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />

          {/* App Routes */}
          <Route path="/notes" element={<Notes />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/todo-demo" element={<TodoDemo />} />
          <Route path="/chat" element={<div className="p-6"><h1 className="text-3xl font-bold">Chat</h1><p className="mt-4">Chat functionality coming soon.</p></div>} />
          <Route path="/kanban" element={<div className="p-6"><h1 className="text-3xl font-bold">Kanban</h1><p className="mt-4">Kanban board coming soon.</p></div>} />
          <Route path="/contact-table" element={<div className="p-6"><h1 className="text-3xl font-bold">Contact Table</h1><p className="mt-4">Contact table view coming soon.</p></div>} />
          <Route path="/contact-list" element={<div className="p-6"><h1 className="text-3xl font-bold">Contact List</h1><p className="mt-4">Contact list view coming soon.</p></div>} />
          <Route path="/invoice" element={<div className="p-6"><h1 className="text-3xl font-bold">Invoice</h1><p className="mt-4">Invoice management coming soon.</p></div>} />
          
          {/* Error Pages */}
          <Route path="/error/404" element={<NotFound />} />
          <Route path="/error/500" element={<ServerError />} />
          <Route path="/error/403" element={<Unauthorized />} />
        </Route>
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
      </OnboardingProvider>
    </ErrorBoundary>
  </StrictMode>
);
