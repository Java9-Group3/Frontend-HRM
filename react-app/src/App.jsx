import "./assets/styles/reset.css";
import "./assets/styles/App.css";

import { LogoHome, LogoPersonel, LogoRegister, LogoLogin, LogoAdmin, LogoManager } from "./components/Logo";

import { Home } from "./pages/home/home";
//COMPANY*********************************************************
import { ShowCompanyInformationTable } from "./pages/manager/showCompanyInformation";

import { ShowAllCompanyInformationTable } from "./pages/manager/findAll";

import Depts from "./pages/manager/Depts";

import CompanyProfitLoss from "./pages/manager/CompanyProfitLoss"; 

import { SaveCompanyRequestDto } from "./pages/manager/saveCompanyRequestDto";
//COMPANY**********************************************************
import { RegisterVisitor } from "./pages/register/visitor";
import { RegisterManager } from "./pages/register/manager";

import { RegisterEmployeeFrm } from "./pages/manager/personelSave";
import CompanyTotalLoss from "./pages/manager/CompanyTotalLoss";


import CompanyHolidays from "./pages/manager/CompanyHolidays";

import { Login } from "./pages/login/login";

//personel **********************************************************
import { PersonelUpdate } from "./pages/personel/update";
import { ExpensePersonel } from "./pages/personel/ExpensePersonel";
import { AdvancePersonel } from "./pages/personel/AdvancePersonel";
import { PersonalInfo } from "./pages/personel/PersonalInfo";
import ManagerApproveExpenses from "./pages/manager/managerExpense";
import { CompanyInfo } from "./pages/personel/companyInfo";
import ManagerExpenseAll from "./pages/manager/ManagerExpenseAll";
import ManagerApproveAdvance from "./pages/manager/managerAdvance";
import { Routes, Route } from "react-router";

import { NavBar, NavPersonel, NavAdmin, NavManager } from "./components/Nav";

import { useLocation } from "react-router-dom";
import {PersonelList} from "./pages/manager/PersonelList";
import Admin from "./pages/admin/admin";
import { useState } from "react";
import RedirectPage from "./pages/redirect/redirect";
import CompanyInfo2 from "./pages/manager/companyinfo2";
import { CompanyUpdate } from "./pages/manager/update-company-info";
import { PersonelMakeComment } from "./pages/personel/personel-make-comment";
import { ShiftAndBreakInfo } from "./pages/personel/shift-break";



function App() {
  // Şu anki sayfa yolu bilgisini almak için useLocation hooku
  const location = useLocation();
  // LogoLogin'i sadece /login sayfasında göster
  const shouldShowLoginLogo = location.pathname.startsWith("/login");
  // LogoRegister'ı sadece /register sayfasında göster
  const shouldShowRegisterLogo = location.pathname.startsWith("/register");
  // LogoHome'u sadece /home sayfasında göster
  const shouldShowHomeLogo = location.pathname.startsWith("/home");
  const shouldShowLogoAdmin = location.pathname.startsWith("/admin")
  const shouldShowAdminLogo = location.pathname.startsWith("/admin");
  const shouldShowPersonelLogo = location.pathname.startsWith("/personel");
  const shouldShowPersonelPage = location.pathname.startsWith("/personel");
  const shouldShowManagerLogo = location.pathname.startsWith("/manager");

  const [aktivePage, setAktivePage] = useState(null);

  return (
    <>
      <header>
        {shouldShowLoginLogo && <LogoLogin />}
        {shouldShowRegisterLogo && <LogoRegister />}
        {shouldShowHomeLogo && <LogoHome />}
        {shouldShowPersonelLogo && <LogoPersonel />}
        {shouldShowManagerLogo && <LogoManager />}
        {shouldShowLogoAdmin && <LogoAdmin setAktivePage={setAktivePage} />}
        <img id="logo" src="/images/logo-black.png" alt="Company Logo" />
        {shouldShowAdminLogo && <NavAdmin setAktivePage={setAktivePage}/>}
        {shouldShowPersonelPage && <NavPersonel />}
        {(location.pathname.includes("/manager") && !location.pathname.includes("/register/manager")) && <NavManager />}
      </header>

      <main>
        <header>
          <NavBar />
        </header>
        <section>
          <Routes>
            <Route path="/register">
              <Route path="visitor" element={<RegisterVisitor />} />
              <Route path="manager" element={<RegisterManager />} />
            </Route>

            <Route path="/login">
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="/home" element={<Home />}></Route>

            <Route path="/personel">
              <Route path="info" element={<PersonalInfo />} />
              <Route path="companyinfo" element={<CompanyInfo />} />
              <Route path="get-shift-break-info" element={<ShiftAndBreakInfo />} />
              <Route path="update" element={<PersonelUpdate />} />
              <Route path="CompanyHolidays" element={<CompanyHolidays />} />
              <Route path="ExpensePersonel" element={<ExpensePersonel />} />
              <Route path="AdvancePersonel" element={<AdvancePersonel />} />

              <Route path="personel-make-comment" element={<PersonelMakeComment />} />
            </Route>

            <Route path="/admin" element={<Admin aktivePage={aktivePage}/>}>
            </Route>

            <Route>
                <Route path="/redirect" element={<RedirectPage/>} />
            </Route>

            <Route>
            <Route path="/companyinfo2" element={<CompanyInfo2 />} />
            </Route>
            
            <Route path="/manager">
              <Route path="update-company-info" element={<CompanyUpdate />} />
              <Route path="information" element=
              {<ShowCompanyInformationTable />} />
              <Route path="PersonelList" element={<PersonelList />} />
              <Route path="findAll" element=
              {<ShowAllCompanyInformationTable />} />
              <Route path="CompanyProfitLoss" element={<CompanyProfitLoss />} /> 
              <Route path="CompanyTotalLoss" element=
              {<CompanyTotalLoss />} />
              <Route path="Depts" element={<Depts />} /> 
              <Route path="CompanyHolidays" element={<CompanyHolidays />} />
              <Route path="save" element=
              {<SaveCompanyRequestDto />} />
              <Route path="personelSave" element=
              {<RegisterEmployeeFrm/>} />
              <Route path="ManagerExpense" element=
              {<ManagerApproveExpenses/>} />
              <Route path="ManagerExpenseAll" element=
              {<ManagerExpenseAll/>} />
              <Route path="ManagerAdvance" element=
              {<ManagerApproveAdvance/>} />
            </Route>

          </Routes>
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;