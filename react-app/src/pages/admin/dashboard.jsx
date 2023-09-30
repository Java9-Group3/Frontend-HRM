


export function Dashboard(){

  
  return <h1>admin dashboard</h1>
}





/*
import { useState } from "react";

export function AdminDashboard() {
  const [approvedData, setApprovedData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Veri çekme işlemi durumu

  function fetchData()  {
    setIsLoading(true);

    // Onaylanmış verileri çekmek için
    fetch("http://localhost:9093/api/v1/user-profile/adminchangemanagerstatus")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setApprovedData(data);
        setIsLoading(false); // Veri çekme işlemi tamamlandığında durumu güncelle
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setIsLoading(false); // Hata durumunda da durumu güncelle
      });

    // Yorum verilerini çekmek için
    fetch("http://localhost:9091/api/v1/company/findAcomment")
      .then((response) => {
        if (!response.ok) {
          throw Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCommentsData(data);
        setIsLoading(false); // Veri çekme işlemi tamamlandığında durumu güncelle
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setIsLoading(false); // Hata durumunda da durumu güncelle
      });
  }

  return (
    <div>
      <button onClick={fetchData}>Veriyi Çek</button>
      {isLoading ? (
        <p>Veri yükleniyor...</p>
      ) : (
        <section>
          <div>
            <h2>Yöneticilerin Onaylandığı Sayfa</h2>
            <ul>
              {approvedData.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Yorum Onay Sayfası</h2>
            <ul>
              {commentsData.map((item) => (
                <li key={item.id}>{item.comment}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
*/