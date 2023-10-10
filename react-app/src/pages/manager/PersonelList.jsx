import { useState, useEffect } from 'react';
import { getPersonelList } from '../../api/Api';

export function PersonelList() {
  const token = window.localStorage.getItem("token");
  const defaultPersonel = {
    name: "",
    surname: "",
    email: "",
    token: token,
  };
  const [dataPersonel, setDataPersonel] = useState({ ...defaultPersonel });

  useEffect(() => {
    getPersonelList(token).then((data) => setDataPersonel({ ...data, token: token }));
  }, []);

    return (
        <div className="">
          <h1 className=''>Here is your Personel List</h1>
          <ul>
            {dataPersonel != null &&
              dataPersonel.map((personeller) => (
                <li key={personeller.id} className="manager-item">
                  <p className="">{personeller.name}</p>
                  <p className=""> {personeller.surname}</p>
                  <p className=""> {personeller.email}</p>
                </li>
              ))}
          </ul>
        </div>
      );
    };
    
    export default PersonelList;