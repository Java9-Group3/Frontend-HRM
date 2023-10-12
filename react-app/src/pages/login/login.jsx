import { useState } from "react";
import { login } from "../../api/Api";
import { useNavigate } from "react-router";
import { NavLogin } from "../../components/Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const navigate = useNavigate();
  const [creadentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function notify() {
    toast("Loging in");
  }
  function errNotify(message) {
    toast.error(message);
  }

  function handleChange(e) {
    setCredentials({ ...creadentials, [e.target.name]: e.target.value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    login(creadentials).then((data) => {
      if (data.message) {
        errNotify(data.message);
      } else if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("roles", data.roles);
        switch (true) {
          case data.roles.includes("ADMIN"):
            notify();
            setTimeout(() => {
              navigate("/admin");
            }, 1000);
            break;
          case data.roles.includes("MANAGER"):
            notify();
            setTimeout(() => {
              navigate("/manager");
            }, 1000);
            break;
          case data.roles.includes("PERSONEL"):
            notify();
            setTimeout(() => {
              navigate("/personel");
            }, 1000);
            break;
          case data.roles.includes("VISITOR"):
            notify();
            setTimeout(() => {
              navigate("/home");
            }, 1000);
            break;
          default:
            navigate("/home");
        }
      }
    });
  }

  return (
    <section>
      <div className="container-navRegisterLogin">
        <h2>
          <NavLogin />
        </h2>
      </div>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={creadentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={creadentials.password}
          onChange={handleChange}
        />

        <button id="btn-login" type="submit">
          {" "}
          Login{" "}
        </button>
        <ToastContainer />
      </form>
    </section>
  );
}
