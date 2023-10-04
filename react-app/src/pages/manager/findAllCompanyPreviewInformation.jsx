import { useState } from "react";

const showAllCompanyShortInformationUrl =
  "http://localhost:9091/api/v1/company/find-all-company-preview-information";

function showCompanyInformationMetod(selectedCompanyId) {
    console.log(selectedCompanyId)
    console.log(`${showAllCompanyShortInformationUrl}${selectedCompanyId}`)
  return fetch(`${showAllCompanyShortInformationUrl}${selectedCompanyId}`).then((resp)=>{
    return resp.json();
  }).then((data)=>{
    return data
  }).catch((err)=>{
    console.log(err.message);
  });
}

export function ShowCompanyInformationTable() {
const[company,setCompany]=useState("")
const[selectedCompanyId,setSelectedCompanyId]=useState("")


function handleChange(e){
    setSelectedCompanyId(e.target.value)
}
function handleCompanyInformationSubmit(e){
    e.preventDefault();
        if(selectedCompanyId !== ""){
        showCompanyInformationMetod(selectedCompanyId).then(data=>{
            setCompany(data)
        }).catch(err=>console.log(err.message))}
}
  return (
    <>
    <form onSubmit={handleCompanyInformationSubmit}>
        <h2>Aramak istediğiniz şirketin idsini giriniz.</h2>
        <input 
        type="number" 
        name="companyId" 
        id="companyId" 
        onChange={handleChange}
        value={selectedCompanyId}
        />
        <button type="submit">Şirket Ara</button>
    </form>
      <h1>Şirket bilgileri</h1>
      {company&&<table>
        <thead>
          <tr className="header">
            <th>Şirket ismi</th>
            <th>Mahallesi</th>
          </tr>
        </thead>
        <tbody id='companyInfo'>
            <tr>
                <td>{company.companyName}</td>
                <td>{company.companyCountry}</td>
            </tr>
        </tbody>
      </table>}
    </>
  );
}
