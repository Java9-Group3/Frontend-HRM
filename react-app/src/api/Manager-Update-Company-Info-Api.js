const BASE_URL_COMPANY = "http://localhost:9091/api/v1/company"

// ==========Backend connection manager-comp==========

export function companyData(companyCredentials) {
    console.log(companyCredentials);
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(companyCredentials),
    };
    return fetch(`${BASE_URL_COMPANY}/update/company`, options)
      .then((resp) => {
          
        console.log(resp);
        return resp.json();
      })
      .then((data) => {
        if(data.message){
          throw new Error(data.message)
        }
        return data;
      })
      .catch((err)=>{
          console.log(err.message);
      });
  }
  
  export function getCompanyInfo(token) { 
    return fetch(`${BASE_URL_COMPANY}/show-company-information/${token}`)
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((data) => {
        if(data.message)
          throw new Error(data.message)
        return data;
      })
      .catch((err)=>{
          console.log(err.message);
      });
  }