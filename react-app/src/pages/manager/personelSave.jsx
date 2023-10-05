import { useState } from "react";

//aşağıya api/v1 gelebilir.
const registerEmployeeUrl = "http://localhost:9093/api/v1/user-profile";

// Backend Baglantisi

function registerEmployeeMethod() {
  const token=window.localStorage.getItem("token");
  const createPersonel={
    token: token,
    name: "",
    surname: "",
    email: "",
    password: "",
  }
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createPersonel),
  };
  return fetch(`${registerEmployeeUrl}/create-personal/${createPersonel.token}`,options)
    .then((resp) => {
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
  // const navigate= useNavigate();

  const [employeeData, setEmployeeData] = useState({
    // token: localStorage.getItem("token"),
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  // const [notificationStatus, setNotificationStatus] = useState(false);
  // const [error, setError] = useState(null);

  function handleChange(e) {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  }

  function handleRegisterVisitorSubmit(e) {
    e.preventDefault();
    registerEmployeeMethod(employeeData)
      .then((data) => {
        if (data) {
          // setNotificationStatus(true);
          console.log(data);
        }

      //   if (data.fields) {
      //     setError(data.fields[0]);
      //   } else {
      //     setError(data.message);
      //   }
      //   console.log(typeof error);
      // })
      // .catch((err) => console.log(err.message)
      });
  }

  return (
    <>
      <h2>Personel Kaydet</h2>
      <form onSubmit={handleRegisterVisitorSubmit}>
        

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ad"
          onChange={handleChange}
          value={employeeData.name}
        />

        <input
          type="text"
          name="surname"
          id="surname"
          placeholder="Soyad"
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
          placeholder="Şifre giriniz"
          onChange={handleChange}
          value={employeeData.password}
        />

        <button type="submit">Kaydet </button>
      </form>
      {/* {notificationStatus && <p>Kayit islemi basarili</p>}
      {error !== null && (
        <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
      )} */}
    </>
  );
}
