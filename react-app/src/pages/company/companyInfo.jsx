// hatalı
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function fetchCompanyInfo(companyName) {
  const employeeInfoUrl = `http://localhost:9091/company/findbycompanyname?companyName=${companyName}`;

  return fetch(employeeInfoUrl)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Şirket bilgileri alınamadı.");
      }
      return resp.json();
    })
    .then((data) => {
      return data;
    });
}

export function CompanyInfo() {
  const [companyInfo, setCompanyInfo] = useState("");
  const location = useLocation();
  const companyName = new URLSearchParams(location.search).get("companyName");

  useEffect(() => {
    if (companyName) {
      fetchCompanyInfo(companyName)
        .then((data) => {
          setCompanyInfo(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [companyName]);

  return (
    <div className="personelInfoPage">
      <h1>Şirket Bilgileri</h1>
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
        </li>
      </ul>
    </div>
  );
}
