const BASE_URL_AUTH = "http://localhost:9090/api/v1/auth";
const BASE_URL_AUTH_LOGIN = "http://localhost:9090/api/v1/auth/login";
const BASE_URL_COMMENT = "http://localhost:9091/api/v1/comment"
const BASE_URL_COMPANY = "http://localhost:9091/api/v1/company"
const BASE_URL_USERPROFILE= "http://localhost:9093/api/v1/user-profile";

export function approveManager(authId) {
  const token = window.localStorage.getItem("token");
  const approvedManager={
    userId: authId,
    action: true,
    token: token, // dto.getToken olursa kullanılacak
  }
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(approvedManager), // ChangeManagerStatusRequestDto'ya uygun olarak gönderiyoruz
  };

  return fetch(`http://localhost:9093/api/v1/user-profile/adminchangemanagerstatus/${approvedManager.token}`, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if(data.message)
      throw new Error(data.message);
      return data; // İsteğin başarılı olup olmadığını kontrol etmek için kullanılabilir
    })
    .catch((err) => {
      console.error('Error approving manager:', err);
    });
}

export function rejectManager(authId) {
  const token = window.localStorage.getItem("token");
  const rejectManager={
    userId: authId,
    action: false,
    token: token, // dto.getToken olursa kullanılacak
  }
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rejectManager), // ChangeManagerStatusRequestDto'ya uygun olarak gönderiyoruz
  };

  return fetch(`http://localhost:9093/api/v1/user-profile/adminchangemanagerstatus/${rejectManager.token}`, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if(data.message)
      throw new Error(data.message);
      return data; // İsteğin başarılı olup olmadığını kontrol etmek için kullanılabilir
    })
    .catch((err) => {
      console.error('Error approving manager:', err);
    });
}

export function getPendingManagers() {
  return fetch(`${BASE_URL_AUTH}/pending-managers`)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('Server Error');
      }
      return resp.json();
    })
    .then((data) => {
      return data; // Backend'den gelen verileri döndürüyoruz
    })
    .catch((err) => {
      console.error('Error fetching pending managers:', err);
      throw err;
    });
}

export function approveComment(commentId) {
  const token = window.localStorage.getItem("token");
  const approvedComment={
    commentId: commentId,
    action: true,
    token: token,
    // token: localStorage.getItem("token"), // dto.getToken olursa kullanılacak
  }
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(approvedComment),
  };

  return fetch(`http://localhost:9091/api/v1/comment/change-comment-status/${approvedComment.token}`, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if(data.message)
      throw new Error(data.message);
      return data; // İsteğin başarılı olup olmadığını kontrol etmek için kullanılabilir
    })
    .catch((err) => {
      console.error('Error approving manager:', err);
    });
}

export function rejectComment(commentId) {
  const token = window.localStorage.getItem("token");
  const rejectedComment={
    commentId: commentId,
    action: false,
    token: token, // dto.getToken olursa kullanılacak
  }
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rejectedComment),
  };

  return fetch(`http://localhost:9091/api/v1/comment/change-comment-status/${rejectedComment.token}`, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if(data.message)
      throw new Error(data.message);
      return data;
    })
    .catch((err) => {
      console.error('Error approving manager:', err);
    });
}

export function getPendingComments() {
  return fetch(`${BASE_URL_COMMENT}/pending-comments`)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('Server Error');
      }
      return resp.json();
    })
    .then((data) => {
      return data; // Backend'den gelen verileri döndürüyoruz
    })
    .catch((err) => {
      console.log('Error fetching pending managers:', err);
    });
}


// ==========Backend connection REGISTER==========

// ==========Visitor REGISTER==========
export function register(formData) {
  console.log(formData);
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  return fetch(`${BASE_URL_AUTH}/register/visitor`, options)
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
  return fetch(`${BASE_URL_AUTH}/register/manager`, options)
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
  console.log(personelCredentials);
  const options = {
    method: "PUT",
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

export function getPersonelInfo2(token) { 
  return fetch(`${BASE_URL_USERPROFILE}/user-info/${token}`)
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




//getcompanyinfo
export function getCompanyInfo(token) { 
  return fetch(`http://localhost:9093/api/v1/user-profile/show-personnel-information/${token}`)
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
  return fetch(`${BASE_URL_AUTH}/confirm-account"`).then((resp )=>{
    if(!resp.ok){
      throw new Error("Server Error-Cannot Get Inactive Manager List")
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