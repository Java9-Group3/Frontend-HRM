import { useState } from "react";
import { useNavigate } from "react-router";
import { register } from "../../api/Api";
import { NavRegister } from "../../components/Nav";

export function RegisterVisitor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    middleName: "",
    surname: "",
    password: "",
    repassword: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    register(formData).then((data) => {
      if (data) {
        console.log(data);
        navigate("/home");
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
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          id="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="middleName"
          id="middleName"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="repassword"
          name="repassword"
          id="repassword"
          placeholder="Re-password"
          value={formData.repassword}
          onChange={handleChange}
        />

        <button id="btn-register" type="submit">
          Register
        </button>
      </form>
    </section>
  );
}
