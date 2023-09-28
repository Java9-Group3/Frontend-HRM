import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { showCompanyInformation, findAllCompanyPreviewInformation, findCompanyDetailedInformation, findAll, getPersonnelCompanyInformation, doesCompanyExist } from "../../api/Api";

const CompanyDashboard = () => {
  const history = useHistory();
  const [companyId, setCompanyId] = useState(null);
  const [companyInformation, setCompanyInformation] = useState(null);
  const [companyPreviewInformation, setCompanyPreviewInformation] = useState([]);
  const [companyDetailedInformation, setCompanyDetailedInformation] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [personnelCompanyInformation, setPersonnelCompanyInformation] = useState(null);
  const [companyExists, setCompanyExists] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Şirket bilgilerini getirme
        const companyInformationData = await showCompanyInformation();
        setCompanyInformation(companyInformationData);

        // Tüm şirket önizleme bilgilerini getirme
        const companyPreviewInformationData = await findAllCompanyPreviewInformation();
        setCompanyPreviewInformation(companyPreviewInformationData);

        // Şirket ayrıntılı bilgilerini getirme
        const companyDetailedInformationData = await findCompanyDetailedInformation(companyId);
        setCompanyDetailedInformation(companyDetailedInformationData);

        // Tüm şirketleri getirme
        const companiesData = await findAll();
        setCompanies(companiesData);

        // Personelin şirket bilgilerini getirme
        const personnelCompanyInformationData = await getPersonnelCompanyInformation(companyId);
        setPersonnelCompanyInformation(personnelCompanyInformationData);

        // Şirketin var olup olmadığını kontrol etme
        const companyExistsData = await doesCompanyExist(companyId);
        setCompanyExists(companyExistsData);
      } catch (error) {
        console.error('Veriler getirilirken bir hata oluştu: ', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    // Kullanıcıyı çıkış yapmaya yönlendirme
    history.push('/logout');
  };

  return (
    <div>
      <h1>Company Dashboard</h1>

      {/* Şirket bilgileri */}
      {companyInformation && (
        <div>
          <h2>Company Information</h2>
          <p>Name: {companyInformation.name}</p>
          <p>Address: {companyInformation.address}</p>
          {/* Diğer bilgiler */}
        </div>
      )}

      {/* Şirket önizleme bilgileri */}
      {companyPreviewInformation.length > 0 && (
        <div>
          <h2>Company Preview Information</h2>
          <ul>
            {companyPreviewInformation.map((info) => (
              <li key={info.id}>{info.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Şirket ayrıntılı bilgileri */}
      {companyDetailedInformation && (
        <div>
          <h2>Company Detailed Information</h2>
          <p>Name: {companyDetailedInformation.name}</p>
          <p>Address: {companyDetailedInformation.address}</p>
          {/* Diğer bilgiler */}
        </div>
      )}

      {/* Tüm şirketler */}
      {companies.length > 0 && (
        <div>
          <h2>All Companies</h2>
          <ul>
            {companies.map((company) => (
              <li key={company.id}>{company.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Personellerin izin bilgileri */}
      {personnelCompanyInformation && (
        <div>
          <h2>Personnel Company Information</h2>
          <p>Name: {personnelCompanyInformation.name}</p>
          <p>Department: {personnelCompanyInformation.department}</p>
          {/* Diğer bilgiler */}
        </div>
      )}

      {/* Şirket var mı yok mu kontrolü */}
      {companyExists && <p>Company exists</p>}
      {!companyExists && <p>Company does not exist</p>}

      {/* Çıkış yapma butonu */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default CompanyDashboard;





