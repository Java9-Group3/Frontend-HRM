import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export function Home() {


  return (
    <div className="container-home">
      <section>
        <h1>İnsan Kaynakları Yönetim Platformzzzzzzzzzzzzzuna Hoşgeldiniz!</h1>
        <h5>
          Bu platform, şirketlerin ihtiyaç duyduğu bilgi ve hizmetlere erişim
          sağlamak amacıyla oluşturulmuştur.
        </h5>
      </section>
      <section>
        <h1>Site Bilgileri</h1>
        <ul>
          <li>
            Platformumuz, şirketlerin iş süreçlerini optimize etmek ve
            verimliliği artırmak için tasarlanmıştır.
          </li>
          <li>
            Kullanıcı dostu arayüzü ve kolay kullanılabilirlik özellikleriyle,
            şirketlerin ihtiyaç duyduğu bilgilere hızlı erişim sağlar.
          </li>
          <li>
            Güvenli bir ortamda verilerinizi saklamak ve gizliliklerini korumak
            için modern güvenlik önlemleri kullanırız.
          </li>
        </ul>
      </section>
      <section>
        <h1>Platformun Amacı</h1>
        <ul>
          <li>
            Amacımız, şirketlerin rekabet gücünü artırmak ve büyümelerine
            katkıda bulunmaktır.
          </li>
          <li>
            İş süreçlerini optimize etmek, verimliliği artırmak ve karar verme
            süreçlerini desteklemek için çeşitli hizmetler sunmaktayız.
          </li>
          <li>
            Şirketlerin ihtiyaçlarına uygun çözümler sunarak, onlara rekabet
            avantajı sağlamayı hedefliyoruz.
          </li>
        </ul>
      </section>
      <section>
        <h1>Ortaklarımız</h1>
        <ul>
          <li>
            İşletmelerin her ölçekteki ihtiyaçlarına cevap verebilmek için geniş
            bir müşteri tabanına hizmet sunuyoruz.
          </li>
          <li>
            Küçük ve orta ölçekli işletmelerden büyük kuruluşlara kadar birçok
            farklı sektörde faaliyet gösteren şirketlere yardımcı olmaktayız.
          </li>
          <li>
            Müşteri memnuniyetini ön planda tutarak, en iyi hizmeti sunmak için
            çalışıyoruz.
          </li>
          <li>
            Bu platform, şirketlerin ihtiyaç duyduğu bilgi ve hizmetlere erişimi
            kolaylaştırmayı hedeflemektedir.
          </li>
          <li> Siz de bu platforma katılarak iş
            süreçlerinizi optimize edebilir, verimliliğinizi artırabilir ve
            rekabet avantajı elde edebilirsiniz.
          </li>
        </ul>
        <h1>İş Ortaklarımız</h1>
        <div >
          <div className="findCompany">
            <FindWithName />
          </div>
          <hr></hr>
          <div className="companylist">
            <FindAllCompany />
          </div>


        </div>
      </section>

    </div>

  );
}

function GetAllCompany() {
  const url = "http://localhost:9091/api/v1/company/find-all"
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(url, options)
    .then((resp) => {
      if (!resp.ok) {
        return resp.json().then((error) => {
          throw new Error(error.message); // API'den dönen hata mesajını yakala ve fırlat
        });
      }
      return resp.json();
    })
    .then((data) => {
      console.log("Veri Tipi:", typeof data);
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
}


function GetCompanyWith(companyName) {
  const url = `http://localhost:9091/api/v1/company/findbycompanyname?companyName=${companyName}`;

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(url, options)
    .then((resp) => {
      if (!resp.ok) {
        return resp.json().then((error) => {
          throw new Error(error.message); // API'den dönen hata mesajını yakala ve fırlat
        });
      }
      return resp.json();
    })
    .then((data) => {
      console.log("Veri Tipi:", typeof data);
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
}

function FindAllCompany() {
  // Şirket verilerini ve hata durumunu saklayacak state'leri tanımlayın
  const [companyData, setCompanyData] = useState([]);
  const [error, setError] = useState(null);

  // Sayfa yönlendirmesi yapmak için useNavigate'i kullanın
  const navigateTo = useNavigate();

  // Şirket düğmesine tıklandığında çalışacak fonksiyon
  const handleClick = (value) => {
    // Tıklanan şirketin ayrıntılarına yönlendirme yapın
    navigateTo(`/companypage?value=${value}`);
  };

  useEffect(() => {
    // Şirket verilerini almak için API çağrısı yapın
    GetAllCompany()
      .then((data) => {
        // Verileri state'e kaydedin
        setCompanyData(data);
      })
      .catch((err) => {
        // Hata durumunda hatayı state'e kaydedin
        setError(err.message);
        console.log("Hata:", err.message);
      });
  }, []);

  if (error) {
    // Hata durumunda hata mesajını gösterin
    return <div className="hata">{error}</div>;
  }

  return (
    <div className="btnCompanyContainer">
      <NavLink to="/findAllCompanyPreviewInformation">
        {companyData.map((obj) => (
          <button className="btnCompanyName" key={obj.id} onClick={() => handleClick(obj.id)}>
            {obj.companyName}
          </button>
        ))}
      </NavLink>
    </div>
  );
}


function FindWithName() {
  const [companyName, setCompanyName] = useState("");
  const [databaseData, setDatabaseData] = useState([]);

  const handleQueryClick = () => {
    if (companyName) {
      GetCompanyWith(companyName)
        .then((data) => {
          setDatabaseData(data);
        })
        .catch((err) => console.log("Hata:", err.message));
    }
  };
  return (
    <div className="findCompany">
      <input className="findCompanyInput"
        placeholder="Şirket Bul..."
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <button className="findCompanybtn1"></button>
      <button className="findCompanybtn2" onClick={() => handleQueryClick(companyName)}>ARA</button>
      {databaseData.companyName && (
        <div className="databaseCompany">
          <h1>{databaseData.companyName}</h1>
          <hr></hr>
          <p>{databaseData.logo}</p>
          <p>{databaseData.companyDistrict}</p>
        </div>
      )}


    </div>
  );
}


