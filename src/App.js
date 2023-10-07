import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/Appbar";
import EmployeeDetails from "./components/admin-console/EmployeeDetails";
import NoPage from "./pages/NoPage";
import CompanyProfile from "./components/admin-console/CompanyProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<EmployeeDetails />} />
          <Route path="/companyprofile" element={<CompanyProfile />}></Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
