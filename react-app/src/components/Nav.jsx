import { NavLink, useNavigate } from "react-router-dom";

export function NavBar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleClick(e){
    e.preventDefault();
    localStorage.clear("token");
    navigate("/login/login");
  }
  return (
    <section className="nav-bar" id="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/register/visitor">Register</NavLink>
          </li>
          {
            token ? <li>
            <NavLink onClick={handleClick} to="/login/login">Logout</NavLink>
          </li> : 
            <li>
            <NavLink to="/login/login">Login</NavLink>
          </li>
          }
        </ul>
      </nav>
    </section>
  );
}

export function NavRegister() {
  return (
    <section className="nav-register">
      <nav>
        <ul>
          <li>
            <NavLink to="/register/visitor">Visitor Register</NavLink>
          </li>
          <li>
            <NavLink to="/register/manager">Manager Register</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}


export function NavHome() {
  return (
    <section className="nav-home">
      <nav>
        <ul>
          <li>
            <NavLink to="/login">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">Feature</NavLink>
          </li>
          <li>
            <NavLink to="/login">Vision</NavLink>
          </li>
          <li>
            <NavLink to="/login">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export function NavLogin() {
  return (
    <section className="nav-login">
      <nav>
        <ul>
          <li>
            <NavLink to="/login/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export function NavAdmin({setAktivePage}) {
    function handleClick(e){
      e.preventDefault();
      setAktivePage(e.target.name);
    }
  return (
    <section className="nav-personel">
      <nav>
        <ul>
          <li>
            <NavLink to="/admin/pending-managers" name="pending-managers" onClick={handleClick}>Pending Managers</NavLink>
          </li>
          <li>
            <NavLink to="/admin/change-comment-status" name="pending-comments" onClick={handleClick}>Pending Comments</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export function NavPersonel() {
  return (
    <section className="nav-personel">
      <nav>
          <ul>
            <li>
              <NavLink to="/personel/info">Personel Info</NavLink>
            </li>
            <li>
              <NavLink to="/personel/companyinfo">Company Info</NavLink>
            </li>
            <li>
              <NavLink to="/personel/CompanyHolidays">Public Holidays Info</NavLink>
            </li>
            <li>
              <NavLink to="/personel/shiftandbreaks">Shift-Break Info</NavLink>
            </li>
            <li>
              <NavLink to="/personel/update">Personel Update</NavLink>
            </li>
            <li>
              <NavLink to="/personel/personel-make-comment">Make Comment</NavLink>
            </li>
            <li>
              <NavLink to="/manager">Manager Page</NavLink>
            </li>
          </ul>
        </nav>
    </section>
  );
}



export function NavManager() {
  return (
    <section className="nav-personel">
      <nav>
          <ul>
            <li>
              <NavLink to="/manager/personelSave">Personel Ekle</NavLink>
            </li>
            <li>
              <NavLink to="/manager/PersonelList">Personel Listesi</NavLink>
            </li>
            <li>
              <NavLink to="/manager/CompanyProfitLoss">Şirketin Senelik Kar-Zarar Bilgisi</NavLink>
            </li>
            <li>
              <NavLink to="/manager/CompanyTotalLoss">Şirketin Toplam Gider Bilgisi</NavLink>
            </li>
            <li>
              <NavLink to="/manager/Depts">Yaklaşan Ödeme Bilgileri</NavLink>
            </li>
            <li>
              <NavLink to="/manager/CompanyHolidays">Resmi Tatil Bilgileri</NavLink>
            </li>
            <li>
              <NavLink to="/manager/update-company-info">Update Company Info</NavLink>
            </li>
            <li>
              <NavLink to="/personel">Your Page</NavLink>
            </li>
          </ul>
        </nav>
    </section>
  );
}