import { useState } from "react";

function createCompany(data) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch("/api/v1/company/save", options)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      return resp.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("Error creating company:", err.message);
      throw err;
    });
}

export function SaveCompanyRequestDto() {
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    province: "",
  });

  function handleChange(e) {
    setCompanyDetails({
      ...companyDetails,
      [e.target.name]: e.target.value,
    });
  }

  function handleCompanyInformationSubmit(e) {
    e.preventDefault();
    const { companyName, province } = companyDetails;
    const simplifiedData = {
      companyName,
      province,
    };

    createCompany(simplifiedData)
      .then((data) => {
        console.log("Company created successfully:", data);
      })
      .catch((error) => {
        console.error("Error creating company:", error.message);
      });
  }

  return (
    <>
      <form onSubmit={handleCompanyInformationSubmit}>
        <h2>Şirket Bilgilerini Giriniz</h2>
        <input
          type="text"
          name="companyName"
          placeholder="Şirket Adı"
          onChange={handleChange}
          value={companyDetails.companyName}
        />
        <input
          type="text"
          name="province"
          placeholder="Şehir"
          onChange={handleChange}
          value={companyDetails.province}
        />
        <button type="submit">Şirket Kaydet</button>
      </form>
    </>
  );
}