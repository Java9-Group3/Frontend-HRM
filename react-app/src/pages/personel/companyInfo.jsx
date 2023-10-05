import { useState, useEffect } from "react";

function getCompanyUrl() {
  return `http://localhost:9091/company/findbycompanyname?companyName=${localStorage.getItem("companyName")}`;
}

async function fetchCompanyInfo() {
  const url = getCompanyUrl();
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Bir hata oluştu.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export function CompanyInfo() {
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    async function getCompanyData() {
      try {
        const data = await fetchCompanyInfo();
        setCompanyInfo(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    getCompanyData();
  }, []);

  return (
    <div className="companyInfoPage">
      <h1>Şirket Bilgileri</h1>
      {companyInfo && (
        <ul>
          <li>
            <div>
              <h4>Şirket İsmi</h4>
              <p>{companyInfo.companyName}</p>
            </div>
            <div>
              <h4>Vergi No</h4>
              <p>{companyInfo.taxNo}</p>
            </div>
            <div>
              <h4>Şirket Açıklaması</h4>
              <p>{companyInfo.description}</p>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}
