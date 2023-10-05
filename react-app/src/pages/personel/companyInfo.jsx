// CompanyInfo.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCompanyInfo } from "../../api/Api"; // API çağrısı buraya eklenmeli
import "./company.css";

export function CompanyInfo() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const defaultCompanyInfo = {
    companyName: "",
    companyDistrict: "",
    companyCountry: "",
    token: token,
  };
  const [companyInfo, setCompanyInfo] = useState({ ...defaultCompanyInfo });

  useEffect(() => {
    getCompanyInfo(token).then((data) => setCompanyInfo({ ...data, token: token }));
  }, []);

  return (
    <section className="company-info">
      <h1>Company Information</h1>
      <div>
        <p>
          <strong>Company Name:</strong> {companyInfo.companyName}
        </p>
        <p>
          <strong>Şehir:</strong> {companyInfo.companyDistrict}
        </p>
        <p>
          <strong>Ülke:</strong> {companyInfo.companyCountry}
        </p>
        {/* Diğer bilgileri buraya ekleyebilirsiniz */}
      </div>
    </section>
  );
}
