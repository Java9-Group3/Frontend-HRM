import { useEffect, useState } from "react";
import { getCompanyInfo, companyData } from "../../api/Manager-Update-Company-Info-Api";


export function CompanyUpdate() {
  const token = window.localStorage.getItem("token");
  const defaultCompany = {
    companyPhone: "",
    companyMail: "",
    companyNeighbourhood: "",
    companyDistrict: "",
    companyProvince: "",
    companyCountry: "",
    companyBuildingNumber: "",
    companyApartmentNumber: "",
    sector: "",
    token: token,
  };
  const [formDataCorp, setFormDataCorp] = useState({...defaultCompany})
  
  useEffect(()=>{
    getCompanyInfo(token).then(data=>{
      const {companyName, taxNumber, ...rest} = data;
      setFormDataCorp({...rest});
    });
  }, [])
  
  function handleChange(e) {
    setFormDataCorp({ ...formDataCorp, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    companyData({...formDataCorp, token:token}).then((data) => {
      if (data) {
        console.log(data);
      }
    });
  };

  return (
    <section className="company-update">
      <h1>
        Update Information
      </h1>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="companyPhone"
          id="companyPhone"
          placeholder="companyPhone"
          value={formDataCorp.companyPhone == null ? "":formDataCorp.companyPhone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="companyMail"
          id="companyMail"
          placeholder="companyMail"
          value={formDataCorp.companyMail == null ? "":formDataCorp.companyMail}
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyNeighbourhood"
          id="companyNeighbourhood"
          placeholder="companyNeighbourhood"
          value={formDataCorp.companyNeighbourhood == null ? "":formDataCorp.companyNeighbourhood}
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyDistrict"
          id="companyDistrict"
          placeholder="companyDistrict"
          value={formDataCorp.companyDistrict == null ? "":formDataCorp.companyDistrict}
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyProvince"
          id="companyProvince"
          placeholder="companyProvince"
          value={formDataCorp.companyProvince == null ? "":formDataCorp.companyProvince}
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyCountry"
          id="companyCountry"
          placeholder="companyCountry"
          value={formDataCorp.companyCountry == null ? "":formDataCorp.companyCountry}
          onChange={handleChange}
        />
        <input
          type="number"
          name="companyBuildingNumber"
          id="companyBuildingNumber"
          placeholder="companyBuildingNumber"
          value={formDataCorp.companyBuildingNumber == null ? "":formDataCorp.companyBuildingNumber}
          onChange={handleChange}
        />
        <input
          type="number"
          name="companyApartmentNumber"
          id="companyApartmentNumber"
          placeholder="companyApartmentNumber"
          value={formDataCorp.companyApartmentNumber == null ? "":formDataCorp.companyApartmentNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sector"
          id="sector"
          placeholder="sector"
          value={formDataCorp.sector == null ? "":formDataCorp.sector}
          onChange={handleChange}
        />
        
        <button type="submit">Update</button>
      </form>
    </section>
  );
}
