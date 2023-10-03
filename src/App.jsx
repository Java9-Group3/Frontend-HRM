import "./assets/styles/reset.css";
import "./assets/styles/App.css";

import { LogoHome, LogoPersonel, LogoRegister, LogoLogin, LogoAdmin } from "./components/Logo";

import { Home } from "./pages/home/home";
//COMPANY*********************************************************
import { ShowCompanyInformationTable } from "./pages/company/showCompanyInformation";

import { ShowAllCompanyInformationTable } from "./pages/company/findAll";

import { ShowDetailedCompanyInformationTable } from "./pages/company/findCompanyDetailedInformation";

import {ShowPersonnelCompanyInformation } from "./pages/company/getPersonnelCompanyInformation";

import { SaveCompanyRequestDto } from "./pages/company/saveCompanyRequestDto";
//COMPANY**********************************************************
import { RegisterVisitor } from "./pages/register/visitor";
import { RegisterManager } from "./pages/register/manager";

import { Login } from "./pages/login/login";
//check4

import { PersonelUpdate } from "./pages/personel/update";
import { PersonelInfo } from "./pages/personel/personel";

import { Routes, Route } from "react-router";

import { NavBar, NavPersonel, NavAdmin } from "./components/Nav";

import { useLocation } from "react-router-dom";

import Admin from "./pages/admin/admin";

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

  return (
    <>
      <header>
        {shouldShowLoginLogo && <LogoLogin />}
        {shouldShowRegisterLogo && <LogoRegister />}
        {shouldShowHomeLogo && <LogoHome />}
        {shouldShowPersonelLogo && <LogoPersonel />}
        {shouldShowLogoAdmin && <LogoAdmin />}
        <img id="logo" src="/images/logo-black.png" alt="Company Logo" />
        {shouldShowAdminLogo && <NavAdmin />}
        {shouldShowPersonelPage && <NavPersonel />}

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
              <Route path="info" element={<PersonelInfo />} />
              <Route path="update" element={<PersonelUpdate />} />
            </Route>

            <Route path="/admin">
              <Route path="pending-managers" element={<Admin />} />
            </Route>

            <Route path="/company">
              <Route path="information" element=
              {<ShowCompanyInformationTable />} />
              <Route path="findAll" element=
              {<ShowAllCompanyInformationTable />} />
              <Route path="detailed" element=
              {<ShowDetailedCompanyInformationTable />} />
              <Route path="dates" element=
              {<ShowPersonnelCompanyInformation />} />
              <Route path="save" element=
              {<SaveCompanyRequestDto />} />
            </Route>

          </Routes>
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
