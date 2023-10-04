import { useState } from "react";

const showCompanyDetailedInformationUrl =
  "http://localhost:9091/api/v1/company/find-all-detailed-company-information?companyId=";

function showDetailedCompanyInformationMetod(selectedCompanyId) {
    console.log(selectedCompanyId)
    console.log(`${showCompanyDetailedInformationUrl}${selectedCompanyId}`)
  return fetch(`${showCompanyDetailedInformationUrl}${selectedCompanyId}`).then((resp)=>{
    return resp.json();
  }).then((data)=>{
    return data
  }).catch((err)=>{
    console.log(err.message);
  });
}

export function ShowDetailedCompanyInformationTable() {
const[company,setCompany]=useState("")
const[selectedCompanyId,setSelectedCompanyId]=useState("")


function handleChange(e){
    setSelectedCompanyId(e.target.value)
}
function handleCompanyInformationSubmit(e){
    e.preventDefault();
        if(selectedCompanyId !== ""){
          showDetailedCompanyInformationMetod(selectedCompanyId).then(data=>{
            setCompany(data)
        }).catch(err=>console.log(err.message))}
}
  return (
    <>
    <form onSubmit={handleCompanyInformationSubmit}>
        <h2>Detaylı bilgilerine ulaşmak istediğiniz şirketin idsini giriniz:</h2>
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
                <td>{company.companyNeighbourhood}</td>
                <td>{company.companyDistrict}</td>
            </tr>
        </tbody>
      </table>}
    </>
  );
}
