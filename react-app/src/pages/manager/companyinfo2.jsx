import React from "react";
import { useLocation } from "react-router-dom";
import "./manager.css";

function CompanyInfo2() {
  const location = useLocation();
  const companyData = location.state.companyData;

  return (
    <div className="company-info-container">
      <h1>{companyData.companyName}</h1>
      <div className="company-details">
        <p><strong>Şirket Mahalle:</strong> {companyData.companyNeighbourhood}</p>
        <p><strong>Şirket İlçe:</strong> {companyData.companyDistrict}</p>
        <p><strong>Şirket İl:</strong> {companyData.companyProvince}</p>
        <p><strong>Şirket Ülke:</strong> {companyData.companyCountry}</p>
        <p><strong>Bina Numarası:</strong> {companyData.companyBuildingNumber}</p>
        <p><strong>Daire Numarası:</strong> {companyData.companyApartmentNumber}</p>
        <p><strong>Posta Kodu:</strong> {companyData.companyPostalCode}</p>
        <p><strong>Bakiye Durumu:</strong> {companyData.companyBalanceStatus}</p>
        <p><strong>Logo:</strong> <img src={companyData.logo} alt="Şirket Logosu" /></p>
        <p><strong>Vergi Numarası:</strong> {companyData.taxNumber}</p>
        <p><strong>Sektör:</strong> {companyData.sector}</p>
      </div>
    </div>
  );
}

export default CompanyInfo2;
