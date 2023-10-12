import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getPersonelInfo2, personelData } from "../../api/Api";
import "./personel.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function PersonelUpdate() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const defaultPersonel = {
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    wage: "",
    jobShift: "",
    jobBreak: "",
    token: token,
  };
  const [dataPersonel, setDataPersonel] = useState({...defaultPersonel})

  useEffect(()=>{
    getPersonelInfo2(token).then(data=>setDataPersonel({...data, token:token}));
  }, [])

  function errNotify() {
    toast.error("Unexpected Error. Check the parameters or login! ");
  }

  function handleChange(e) {
    setDataPersonel({ ...dataPersonel, [e.target.name]: e.target.value });
  }
  
/*
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setDataPersonel({
      ...dataPersonel,
      foto: file,
    });
  };
*/

  const handleSubmit = (e) => {
    e.preventDefault();
    personelData(dataPersonel).then((data) => {
      if (data) {
        console.log(data);
      }
      navigate("/personel/info");
      if(!data){
        errNotify();
      }
    });
  };

  return (
    <section className="personel-update">
      <h1>
        Update Information
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={dataPersonel.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          id="surname"
          placeholder="Surname"
          value={dataPersonel.surname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={dataPersonel.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={dataPersonel.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          value={dataPersonel.phone == null ? "" : dataPersonel.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="wage"
          id="wage"
          placeholder="Wage"
          value={dataPersonel.wage == null ? "" : dataPersonel.wage}
          onChange={handleChange}
        />
        <input
          type="text"
          name="jobShift"
          id="jobShift"
          placeholder="Job Shift"
          value={dataPersonel.jobShift == null ? "" : dataPersonel.jobShift}
          onChange={handleChange}
        />
        <input
          type="text"
          name="jobBreak"
          id="jobBreak"
          placeholder="Job Break"
          value={dataPersonel.jobBreak == null ? "" : dataPersonel.jobBreak}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
        <ToastContainer />
      </form>
    </section>
  );
}
