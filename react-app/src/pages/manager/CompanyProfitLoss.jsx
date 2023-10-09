import React from 'react';
import "./manager.css"; 

function CompanyProfitLoss() {
  return (
    <div className="company-profit-loss">
      <h1 className='profit-loss-title'>Kar ve Zarar Bilgileri</h1>
      <table className='profit-loss-table'>
        <thead>
          <tr className='table-header-row'>
            <th className='table-header-cell'>Yıl</th>
            <th className='table-header-cell'>Kar</th>
            <th className='table-header-cell'>Zarar</th>
          </tr>
        </thead>
        <tbody>
          <tr className='table-row'>
            <td className='table-cell'>2023</td>
            <td className='table-cell'>$50,000</td>
            <td className='table-cell'>$5,000</td>
          </tr>
          <tr className='table-row'>
            <td className='table-cell'>2022</td>
            <td className='table-cell'>$100,000</td>
            <td className='table-cell'>$20,000</td>
          </tr>
          <tr className='table-row'>
            <td className='table-cell'>2021</td>
            <td className='table-cell'>$90,000</td>
            <td className='table-cell'>$15,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompanyProfitLoss;
