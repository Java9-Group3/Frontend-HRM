import { useState } from "react";
import { login } from "../../api/Api";
import { useNavigate } from "react-router";
import { NavLogin } from "../../components/Nav";

export function Login() {
  const navigate = useNavigate();
  const [creadentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setCredentials({ ...creadentials, [e.target.name]: e.target.value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    login(creadentials).then((object) => {
      if (object) {
        //console.log(typeof token); //->> object geliyor JSONa çevircez.
        localStorage.setItem("token", object.token);
        //console.log(localStorage.getItem("token")); //->kontrol: string gelmesi lazım
        if(object.roles.includes("ADMIN")){
          navigate("/admin");
        }
        else if(object.roles.includes("MANAGER")){
          navigate("/manager")
        }
        else if(object.roles.includes("PERSONEL")){
          navigate("/personel")
        }
        else if(object.roles.includes("VISITOR")){
          navigate("/home")
        }
        else{
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
          Login
        </button>
      </form>
    </section>
  );
}
