import React, { useState, useEffect } from "react";
import "./personellist.css"; // CSS dosyasını içe aktarın

function fetchPersonalTable() {
  const token = localStorage.getItem("token");
  return fetch(`http://localhost:9090/api/v1/auth/getPersonelList?token=${token}`)
    .then((resp) => resp.json())
    .catch((err) => {
      console.error(err.message);
      throw err; // Hata yakalandığında yeniden atar, bu sayede bileşen durumu güncellenir.
    });
}

export function PersonelList() {
  const [personelList, setPersonelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPersonalTable()
      .then((data) => {
        if (Array.isArray(data)) {
          setPersonelList(data);
          setLoading(false); // Veri başarıyla yüklendiğinde loading'i kapat
        } else {
          if (data.fields) {
            setError(data.fields);
          } else {
            setError(data.message);
          }
          setLoading(false); // Hata durumunda da loading'i kapat
        }
      })
      .catch((error) => {
        console.error(error.message);
        setError("Bir hata oluştu."); // Hata yakalandığında hata mesajını göster
        setLoading(false); // Hata durumunda da loading'i kapat
      });
  }, []);

  return (
    <div>
      <h1>Çalışan Tablosu</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Henuz veri yukleniyor...</p>
      ) : (
        <table className="personel-table">
          <thead>
            <tr>
              <th>EMAİL</th>
              <th>Name</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>
            {personelList.map((item) => (
              <tr key={item.email}>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PersonelList;
