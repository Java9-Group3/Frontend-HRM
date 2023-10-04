import { useState } from "react";

//aşağıya api/v1 gelebilir.
const createEmployeeWithRegister = "http://localhost:9092/user-profile/managerCreatePersonelUserProfile";

function managerCreatePersonelUserProfile(employeeData) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employeeData),
    };
    return fetch(createEmployeeWithRegister, options)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err.message));
  }

export function createPersonel(){
    const [employeeData, setEmployeeData] = useState({
        token: localStorage.getItem("token"),
        name: "",
        surname: "",
        personalEmail: "",
        salary: "",
      });
      const [notificationStatus, setNotificationStatus] = useState(false);
      const [error, setError] = useState(null);
    
      function handleChange(e) {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
      }
    
      function handleRegisterVisitorSubmit(e) {
        e.preventDefault();
        managerCreatePersonelUserProfile(employeeData)
          .then((data) => {
            if (data) {
              setNotificationStatus(true);
            }
    
            if (data.fields) {
              setError(data.fields[0]);
            } else {
              setError(data.message);
            }
            console.log(typeof error);
          })
          .catch((err) => console.log(err.message));
      }
    
      return (
        <>
          <form onSubmit={handleRegisterVisitorSubmit}>
            <h2>Personel Kaydet</h2>
    
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Personelin Adı"
              onChange={handleChange}
              value={employeeData.name}
            />
    
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Personelin Soyadı"
              onChange={handleChange}
              value={employeeData.surname}
            />
    
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Personelin Emaili"
              onChange={handleChange}
              value={employeeData.email}
            />
    
            <input
              type="number"
              name="wage"
              id="wage"
              placeholder="Personelin maaşı"
              onChange={handleChange}
              value={employeeData.wage}
            />
    
            <button type="submit">Kaydet </button>
          </form>
          {notificationStatus && <p>Kayit islemi basarili</p>}
          {error !== null && (
            <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
          )}
        </>
      );
}