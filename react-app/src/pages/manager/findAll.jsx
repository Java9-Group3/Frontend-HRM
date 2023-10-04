import { useState } from "react";

const showAllCompanyInformationUrl =
  "http://localhost:9091/api/v1/company/find-all";

function showAllCompanyInformationMethod() {
  return fetch(showAllCompanyInformationUrl)
    .then((resp) => {
      if (resp.status === 200) {
        return resp.json();
      } else {
        throw new Error("Unable to fetch company information");
      }
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });
}

export function ShowAllCompanyInformationTable() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleCompanyInformationSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    showAllCompanyInformationMethod()
      .then((data) => {
        setCompanies(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <form onSubmit={handleCompanyInformationSubmit}>
        <h2>Şirketleri Listele</h2>
        <button type="submit">Şirketleri Listele FIND ALL</button>
      </form>
      <h1>Şirket bilgileri</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr className="header">
              <th>Şirket ismi</th>
              <th>Mahallesi</th>
            </tr>
          </thead>
          <tbody id="companyInfo">
            {companies.map((company) => (
              <tr key={company.companyId}>
                <td>{company.companyName}</td>
                <td>{company.companyNeighbourhood}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}