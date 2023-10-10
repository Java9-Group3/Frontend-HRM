import { useState, useEffect } from 'react';
import { getHolidays } from '../../api/Api';

const CompanyHolidays = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    getHolidays()
      .then((data) => setHolidays(data))
      .catch((error) =>
        console.error("Error fetching pending managers:", error)
      );
  }, []);

  return (
    <div className="company-holidays">
      <h1 className='holiday-title'>All Holidays</h1>
      <ul>
        {holidays != null &&
          holidays.map((holiday) => (
            <li key={holiday.id} className="manager-item">
              <p className="holiday-name">{holiday.name}</p>
              <p className="holiday-date">Tarih: {holiday.date}</p>
              <p className="holiday-description">Açıklama: {holiday.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CompanyHolidays;
