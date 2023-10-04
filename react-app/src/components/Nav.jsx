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
    <section className="nav-bar">
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

// ????? ne nasıl kuruldu company ? personel ? yol ? endpoint falan ?
export function NavPersonel() {
  return (
    <section className="nav-personel">
      <nav>
          <ul>
            <li>
              <NavLink to="/personel/info">Personel Info</NavLink>
            </li>
            <li>
              <NavLink to="/personel/info">Company Info</NavLink>
            </li>
            <li>
              <NavLink to="/personel/info">Public Holidays Info</NavLink>
            </li>
            <li>
              <NavLink to="/personel/info">Shift-Break Info</NavLink>
            </li>
            <li>
              <NavLink to="/personel/update">Personel Update</NavLink>
            </li>
            <li><a href="#">fotograf</a></li>
          </ul>
        </nav>
    </section>
  );
}
