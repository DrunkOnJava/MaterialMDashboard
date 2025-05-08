import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chip } from "./screens/Chip/Chip";
import { Dashboard } from "./screens/Dashboard/Dashboard";
import { Toaster } from "./components/ui/toaster";
import { PrimaryButtons } from "./screens/Buttons/PrimaryButtons";
import { SecondaryButtons } from "./screens/Buttons/SecondaryButtons";
import { OutlineButtons } from "./screens/Buttons/OutlineButtons";
import { GhostButtons } from "./screens/Buttons/GhostButtons";
import { IconButtons } from "./screens/Buttons/IconButtons";
import { SuccessButtons } from "./screens/Buttons/SuccessButtons";
import { WarningButtons } from "./screens/Buttons/WarningButtons";
import { DangerButtons } from "./screens/Buttons/DangerButtons";
import { LinkButtons } from "./screens/Buttons/LinkButtons";
import { LoadingButtons } from "./screens/Buttons/LoadingButtons";
import { GroupedButtons } from "./screens/Buttons/GroupedButtons";
import { InputFields } from "./screens/Forms/InputFields";
import { SelectFields } from "./screens/Forms/SelectFields";
import { CheckboxRadio } from "./screens/Forms/CheckboxRadio";
import { FormValidation } from "./screens/Forms/FormValidation";
import { DatePickerDemo } from "./screens/Forms/DatePickerDemo";
import { Cards } from "./screens/Components/Cards";
import { Alerts } from "./screens/Components/Alerts";
import { Modals } from "./screens/Components/Modals";
import { TabsPage } from "./screens/Components/Tabs";
import { AccordionPage } from "./screens/Components/Accordion";
import { TablesPage } from "./screens/Components/Tables";
import { AvatarsPage } from "./screens/Components/Avatars";
import { ProgressPage } from "./screens/Components/Progress";
import { PaginationPage } from "./screens/Components/Pagination";
import { FileUpload } from "./screens/Examples/FileUpload";
import { Ecommerce } from "./screens/Ecommerce/Ecommerce";
import { BlueMountainWicks } from "./screens/BlueMountainWicks/BlueMountainWicks";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ui-components" element={<Chip />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/blue-mountain-wicks" element={<BlueMountainWicks />} />
        
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
        
        {/* Example Routes */}
        <Route path="/examples/file-upload" element={<FileUpload />} />
      </Routes>
      <Toaster />
    </Router>
  </StrictMode>,
);