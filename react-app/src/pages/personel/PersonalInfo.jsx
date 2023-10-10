import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getPersonelInfo2 } from "../../api/Api";
import "./personel.css";

export function PersonalInfo() {
  const token = window.localStorage.getItem("token");
  const defaultPersonel = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    wage: "",
    token: token,
  };
  const [dataPersonel, setDataPersonel] = useState({ ...defaultPersonel });

  useEffect(() => {
    getPersonelInfo2(token).then((data) => setDataPersonel({ ...data, token: token }));
  }, []);

  return (
    <section className="personal-info">
      <h1>Personal Information</h1>
      <div>
        <p>
          <strong>Name:</strong> {dataPersonel.name}
        </p>
        <p>
          <strong>Surname:</strong> {dataPersonel.surname}
        </p>
        <p>
          <strong>Email:</strong> {dataPersonel.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {dataPersonel.phone}
        </p>
        <p>
          <strong>Wage:</strong> {dataPersonel.wage}
        </p>
      </div>
    </section>
  );
}
