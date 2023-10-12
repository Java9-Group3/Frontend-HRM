import { useState } from "react";
import { useNavigate } from "react-router";
import { registerManager } from "../../api/Api";
import { NavRegister } from "../../components/Nav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function RegisterManager() {
  const navigate = useNavigate();
  const [formDataCorp, setFormDataCorp] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    repassword: "",
    companyName: "",
    taxNumber: "",
  });

  function notify() {
    toast("Register Success");
  }
  function errNotify() {
    toast.error("Unexpected Error. Check the parameters or mail box.");
  }

  function handleChange(e) {
    setFormDataCorp({ ...formDataCorp, [e.target.name]: e.target.value });
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    registerManager(formDataCorp).then((data) => {
      if (data) {
        console.log(data);
        notify();
        setTimeout(() => {
          navigate("/login/login");
        }, 1000);
      }else{
        errNotify();
      }
    });
  }

  return (
    <section>
        <div className="container-navRegisterLogin">
        <h2>
          <NavRegister />
        </h2>
      </div>
      <form onSubmit={handleRegisterSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formDataCorp.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formDataCorp.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          id="surname"
          placeholder="Surname"
          value={formDataCorp.surname}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formDataCorp.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="repassword"
          id="repassword"
          placeholder="Re-password"
          value={formDataCorp.repassword}
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Company Name"
          value={formDataCorp.companyName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="taxNumber"
          id="taxNumber"
          placeholder="Tax Number"
          value={formDataCorp.taxNumber}
          onChange={handleChange}
        />

        <button id="btn-register" type="submit">
          Register
        </button>
        <ToastContainer />
      </form>
    </section>
  );
}
