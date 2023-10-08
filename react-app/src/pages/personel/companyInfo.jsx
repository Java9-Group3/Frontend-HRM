import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCompanyInfo } from "../../api/Api";
import "./personel.css";

export function CompanyInfo() {
  const token = window.localStorage.getItem("token");
  const defaultPersonel = {
    companyName: "",
    wage: "",
    department: "",
    logo: "",
    token: token,
  };
  const [dataPersonel, setDataPersonel] = useState({ ...defaultPersonel });

  useEffect(() => {
    getCompanyInfo(token).then((data) => setDataPersonel({ ...data, token: token }));
  }, []);

  return (
    <section className="personal-info">
      <h1>Company Information</h1>
      <div>
        <p>
          <strong>companyName:</strong> {dataPersonel.companyName}
        </p>
        <p>
          <strong>Your wage:</strong> {dataPersonel.wage}
        </p>
        <p>
          <strong>Your department:</strong> {dataPersonel.department}
        </p>
        <p>
          <strong>logo:</strong> {dataPersonel.logo}
        </p>
      </div>
    </section>
  );
}