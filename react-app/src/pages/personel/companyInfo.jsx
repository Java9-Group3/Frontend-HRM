import { useEffect, useState } from "react";
import { getCompanyInfo } from "../../api/Manager-Update-Company-Info-Api";
import "./personel.css";

export function CompanyInfo() {
  const token = window.localStorage.getItem("token");
  const defaultCompany = {
    companyName: "",
    companyPhone: "",
    companyMail: "",
    taxNumber: "",
    companyCountry: "",
    companyProvince: "",
    companyDistrict: "",
    companyNeighbourhood: "",
    companyBuildingNumber: "",
    companyApartmentNumber: "",
    sector: "",
    token: token,
  };
  const [dataPersonel, setDataPersonel] = useState({ ...defaultCompany });

  useEffect(() => {
    getCompanyInfo(token).then((data) => setDataPersonel({ ...data, token: token }));
  }, []);

  return (
    <section className="personal-info">
      <h1>Company Information</h1>
      <div>
        <p>
          <strong>Company Name:</strong> {dataPersonel.companyName}
        </p>
        <p>
          <strong>Company Phone:</strong> {dataPersonel.companyPhone}
        </p>
        <p>
          <strong>Company Sector:</strong> {dataPersonel.sector}
        </p>
        <p>
          <strong>Tax Number:</strong> {dataPersonel.taxNumber}
        </p>
        <hr />
        <strong>Address</strong>
        <p>
          <strong>Company Country:</strong> {dataPersonel.companyCountry}
        </p>
        <p>
          <strong>Company Province:</strong> {dataPersonel.companyProvince}
        </p>
        <p>
          <strong>Company District:</strong> {dataPersonel.companyDistrict}
        </p>
        <p>
          <strong>Company Neighbourhood:</strong> {dataPersonel.companyNeighbourhood}
        </p>
        <p>
          <strong>Company Building Number:</strong> {dataPersonel.companyBuildingNumber}
        </p>
        <p>
          <strong>Company Apartment Number:</strong> {dataPersonel.companyApartmentNumber}
        </p>
      </div>
    </section>
  );
}