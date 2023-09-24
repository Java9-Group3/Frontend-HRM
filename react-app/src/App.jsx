import "./assets/styles/reset.css";
import "./assets/styles/App.css";

import { LogoRegister } from "./components/Logo";
import { LogoLogin } from "./components/Logo";
import { LogoHome } from "./components/Logo";

import { Home } from "./pages/home/home";

import { RegisterAdmin } from "./pages/register/admin";
import { RegisterVisitor } from "./pages/register/visitor";
import { RegisterManager } from "./pages/register/manager";

import { LoginVisitor } from "./pages/login/visitor";
import { LoginAdmin } from "./pages/login/admin";
import { LoginManager } from "./pages/login/manager";

import { WorksAdmin } from "./pages/admin/works";
import { DashboardAdmin } from "./pages/admin/dashboard";

import { Routes, Route } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";

import { NavBar } from "./components/Nav";

import { useLocation } from "react-router-dom";

function App() {
  // Şu anki sayfa yolu bilgisini almak için useLocation hooku
  const location = useLocation();
  // LogoLogin'i sadece /login sayfasında göster
  const shouldShowLoginLogo = location.pathname.startsWith("/login");
  // LogoRegister'ı sadece /register sayfasında göster
  const shouldShowRegisterLogo = location.pathname.startsWith("/register");
  // LogoHome'u sadece /home sayfasında göster
  const shouldShowHomeLogo = location.pathname.startsWith("/home");

  return (
    <>
      <header>
        {shouldShowLoginLogo && <LogoLogin />}
        {shouldShowRegisterLogo && <LogoRegister />}
        {shouldShowHomeLogo && <LogoHome />}
        <img id="logo" src="/images/logo-black.png" alt="Company Logo" />
      </header>

      <main>
        <header>
          <NavBar />
        </header>
        <section>
          <Routes>
            <Route path="/register">
              <Route path="admin" element={<RegisterAdmin />} />
              <Route path="visitor" element={<RegisterVisitor />} />
              <Route path="manager" element={<RegisterManager />} />
            </Route>

            <Route path="/login">
              <Route path="admin" element={<LoginAdmin />} />
              <Route path="visitor" element={<LoginVisitor />} />
              <Route path="manager" element={<LoginManager />} />
            </Route>

            <Route path="/admin" element={<ProtectedRoute />}>
              <Route path="works" element={<WorksAdmin />} />
              <Route path="dashboard" element={<DashboardAdmin />} />
            </Route>

            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
