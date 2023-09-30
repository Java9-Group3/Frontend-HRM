import "./assets/styles/reset.css";
import "./assets/styles/App.css";

import { LogoHome, LogoPersonel, LogoRegister, LogoLogin, LogoAdmin } from "./components/Logo";

import { Home } from "./pages/home/home";

import { RegisterVisitor } from "./pages/register/visitor";
import { RegisterManager } from "./pages/register/manager";

import { LoginVisitor } from "./pages/login/visitor";
import { LoginAdmin } from "./pages/login/admin";
import { LoginManager } from "./pages/login/manager";
import { LoginPersonel } from "./pages/login/personel";




import { PersonelUpdate } from "./pages/personel/update";
import { PersonelInfo } from "./pages/personel/personel";

import { Routes, Route } from "react-router";

import { NavBar, NavPersonel, NavAdmin } from "./components/Nav";

import { useLocation } from "react-router-dom";
import { Dashboard } from "./pages/admin/dashboard";

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
              <Route path="admin" element={<LoginAdmin />} />
              <Route path="visitor" element={<LoginVisitor />} />
              <Route path="manager" element={<LoginManager />} />
              <Route path="personel" element={<LoginPersonel />} />
            </Route>

            <Route path="/home" element={<Home />}></Route>

            <Route path="/personel">
              <Route path="info" element={<PersonelInfo />} />
              <Route path="update" element={<PersonelUpdate />} />
            </Route>

            <Route path="/admin">
              <Route path="dashboard" element={<Dashboard />} />
            </Route>

          </Routes>
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
