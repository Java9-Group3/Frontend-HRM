import { useState, useEffect } from "react";

function getToken() {
  return localStorage.getItem("token");
}

async function fetchPersonalInfo() {
  const token = getToken();
  const personelUrl = `http://localhost:9093/api/v1/user-profile/showPersonalInfo?token=${token}`;

  try {
    const response = await fetch(personelUrl);
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

export function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    // Kullanıcı bilgilerini almak için async fonksiyonu çağırın
    async function getPersonalInfo() {
      try {
        const data = await fetchPersonalInfo();
        setPersonalInfo(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    getPersonalInfo();
  }, []);

  return (
    <div className="personelInfoPage">
      <h1>Personel Kişisel Bilgiler</h1>
      {personalInfo && (
        <ul>
          <li>
            <div>
              <h4>İsim</h4>
              <p>{personalInfo.name}</p>
            </div>
            <div>
              <h4>Soyisim</h4>
              <p>{personalInfo.surname}</p>
            </div>
            <div>
              <h4>Kullanıcı adı</h4>
              <p>{personalInfo.username}</p>
            </div>
            <div>
              <h4>Şifre</h4>
              <p>{personalInfo.password}</p>
            </div>
            <div>
              <h4>Personel E-posta</h4>
              <p>{personalInfo.email}</p>
            </div>
            <div>
              <h4>Şirket Adı</h4>
              <p>{personalInfo.companyName}</p>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}
