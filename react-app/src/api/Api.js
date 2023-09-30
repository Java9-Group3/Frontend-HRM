const BASE_URL_AUTH = "http://localhost:9090/api/v1/auth/register";
const BASE_URL_AUTH_LOGIN = "http://localhost:9090/api/v1/auth/login";
const BASE_URL_COMPANY = "http://localhost:9091/api/v1/company"
const BASE_URL_USERPROFILE= "http://localhost:9093/api/v1/user-profile";

// ==========Backend connection REGISTER==========

// ==========Visitor REGISTER==========
export function register(formData) {
  console.log(formData);
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  return fetch(`${BASE_URL_AUTH}/visitor`, options)
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
  return fetch(`${BASE_URL_AUTH}/manager`, options)
  .then((resp) => {
        
    console.log(resp);
    return resp.json();
  })
  .then((data) => {
    if(data.activationCode){
      return data;
    }
    throw new Error(data.message)
  })
  .catch((err)=>{
      console.log(err.message);
  });
}

// ==========Backend connection LOGIN==========

export function login(creadentials) {
  //localhosta bağlan-> method:post -> username password <---> token dönecek
  // fetch kullanacagız alternatif: axios veya kütüphaneler: swr,react-query
  console.log(creadentials);
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(creadentials),
  };
  return fetch(`${BASE_URL_AUTH_LOGIN}`, options)
    .then((resp) => {
        
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      if(data.token){
        return data;
      }
      throw new Error(data.message)
    })
    .catch((err)=>{
        console.log(err.message);
    });
}



// ==========Backend connection PERSONEL==========

export function personelData(personelCredentials) {
  //localhosta bağlan-> method:post -> username password <---> token dönecek
  // fetch kullanacagız alternatif: axios veya kütüphaneler: swr,react-query
  console.log(personelCredentials);
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(personelCredentials),
  };
  return fetch(`${BASE_URL_USERPROFILE}/update/personel`, options)
    .then((resp) => {
        
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      if(data.token){
        return data;
      }
      throw new Error(data.message)
    })
    .catch((err)=>{
        console.log(err.message);
    });
}

export function getPersonelInfo(){
  return fetch(`${BASE_URL_USERPROFILE}/personel/info`).then((resp)=>{
    if(!resp.ok){
      throw new Error("Server Error->getPersonelInfo");
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

// ==========Backend connection ADMIN==========

// admin için işlemler comment onaylama ve manager onaylama ->> bakılacak

export function getInActiveManagerList(){
  return fetch(`${BASE_URL_AUTH}/confirm"`).then((resp )=>{
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

/*
export function getWork(){

}
export function deleteWork(id){
  
}
export function updateWork(id){
  
}
export function addWork(){
  
}
*/





/**-------------------------------------------------------------COMPANY-PAGE/COMPANY-SERVICE--------------------------------------------------------------------*/
/**1.ŞİRKET KAYDET:*/
export const saveCompanyRequestDto = async (companyData) => {
  try {
    const response = await fetch(`${BASE_URL_COMPANY}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error saving company:', error);
    throw error;
  }
};
/**2.ŞİRKET BİLGİLERİNİ GÖSTER:*/
export const showCompanyInformation = async () => {
  try {
    const response = await fetch(`${BASE_URL_COMPANY}/save`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Şirket bilgileri alınırken bir hata oluştu: ', error);
    throw error;
  }
};
/**3.ŞİRKET'İN GENEL BİLGİLERİNİ GÖSTERİR*/
export const findAllCompanyPreviewInformation = async () => {
  try {
    const response = await fetch('/api/company/preview');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Şirket önizleme bilgileri alınırken bir hata oluştu: ', error);
    throw error;
  }
};

/**4.ŞİRKET'İN DETAYLI BİLGİLERİNİ GÖSTERİR*/
export const findCompanyDetailedInformation = async (companyId) => {
  try {
    const response = await fetch(`/api/company/${companyId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Şirket ayrıntılı bilgileri alınırken bir hata oluştu: ', error);
    throw error;
  }
};

/**5.BÜTÜN ŞİRKETLERİ GETİRİR*/
export const findAll = async () => {
  try {
    const response = await fetch('/api/companies');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Şirketler alınırken bir hata oluştu: ', error);
    throw error;
  }
};

/**6.ŞİRKET'İN İZİN GÜNLERİNİ GETİRİR*/
export const getPersonnelCompanyInformation = async (companyId) => {
  try {
    const response = await fetch(`/api/personnel/${companyId}/company`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Personel şirket bilgileri alınırken bir hata oluştu: ', error);
    throw error;
  }
};

/**7.ŞİRKET VAR MI YOK MU KONTROL EDER*/
export const doesCompanyExist = async (companyId) => {
  try {
    const response = await fetch(`/api/company/${companyId}/exists`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Şirket varlık kontrolü yapılırken bir hata oluştu: ', error);
    throw error;
  }
};