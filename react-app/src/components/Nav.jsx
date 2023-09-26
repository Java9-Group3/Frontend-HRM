import { NavLink, useNavigate } from "react-router-dom";

export function NavBar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleClick(e){
    e.preventDefault();
    localStorage.clear("token");
    navigate("/login/visitor");
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
            <NavLink onClick={handleClick} to="/login/visitor">Logout</NavLink>
          </li> : 
            <li>
            <NavLink to="/login/visitor">Login</NavLink>
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
            <NavLink to="/login/visitor">Visitor Login</NavLink>
          </li>
          <li>
            <NavLink to="/login/manager">Manager Login</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
