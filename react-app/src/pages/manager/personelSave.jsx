import { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Backend Baglantisi

function registerEmployeeMethod(employeeData) {
  const token=window.localStorage.getItem("token");
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employeeData),
  };
  return fetch(`http://localhost:9093/api/v1/user-profile/create-personal/${token}`,options)
  .then((resp) => {
    if (!resp.ok) {
      throw new Error("Server Error");
    }
    console.log(resp);
    return resp.json();
  })
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err.message);
  });
}

// =============Sayfa Componentleri============
export function RegisterEmployeeFrm() {
  const navigate= useNavigate();

  const [employeeData, setEmployeeData] = useState({
    // token: localStorage.getItem("token"),
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    wage: "",
    jobShift: "",
    jobBreak: "",
  });

  function errNotify() {
    toast.error("Unexpected Error. Check the parameters and personal list. ");
  }

  function handleChange(e) {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  }

  function handleRegisterPersonelSubmit(e) {
    e.preventDefault();
    registerEmployeeMethod(employeeData).then((data) => {
        if (data) {
          console.log(data);
          navigate("/manager/PersonelList");
        } else {
          errNotify();
        }
      });
  }
  return (
    <section>
      <h2>Personel Kaydet</h2>
      <form onSubmit={handleRegisterPersonelSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          value={employeeData.name}
        />

        <input
          type="text"
          name="surname"
          id="surname"
          placeholder="Surname"
          onChange={handleChange}
          value={employeeData.surname}
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={employeeData.email}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={employeeData.password}
        />
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          value={employeeData.phone}
        />
        <input
          type="text"
          name="wage"
          id="wage"
          placeholder="Wage"
          onChange={handleChange}
          value={employeeData.wage}
        />
        <input
          type="text"
          name="jobShift"
          id="jobShift"
          placeholder="Job Shift"
          onChange={handleChange}
          value={employeeData.jobShift}
        />
        <input
          type="text"
          name="jobBreak"
          id="jobBreak"
          placeholder="Job Break"
          onChange={handleChange}
          value={employeeData.jobBreak}
        />

        <button id="btn-register" type="submit"> Kaydet </button>
        <ToastContainer />
      </form>
    </section>
  );
}
