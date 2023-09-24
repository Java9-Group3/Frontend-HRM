const BASE_URL_AUTH = "http://localhost:8888/auth";

// ==========Backend connection REGISTER==========
// ==========Visitor REGISTER==========
export function register(formData) {

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  return fetch(`${BASE_URL_AUTH}/register`, options)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Server Error");
      }
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
}
// ==========Manager REGISTER==========
export function registerManager(formDataCorp) {

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDataCorp),
  };
  return fetch(`${BASE_URL_AUTH}/register`, options)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Server Error");
      }
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// ==========Backend connection LOGIN==========

export function login(creadentials) {
  //localhosta bağlan-> method:post -> username password <---> token dönecek
  // fetch kullanacagız alternatif: axios veya kütüphaneler: swr,react-query

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(creadentials),
  };
  return fetch(`${BASE_URL_AUTH}/login`, options)
    .then((resp) => {
        if(!resp.ok){
            throw new Error("Server Error")
        }
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err)=>{
        console.log(err.message);
    });
}




// admin için işlemler daha sonra admin için ayarlanacak
/*
export function getWorks(){
  return fetch(`${BASE_URL_AUTH}/works`).then((resp )=>{
    if(!resp.ok){
      throw new Error("Server Error")
    }
    return resp.json();
  })
  .then((data)=>{
    return data;
  })
  .catch((err)=>{
    console.log(err.message);
  });
}

export function getWork(){

}
export function deleteWork(id){
  
}
export function updateWork(id){
  
}
export function addWork(){
  
}
*/