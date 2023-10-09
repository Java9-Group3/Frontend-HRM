import React from 'react';

function CompanyTotalLoss() {
  
  const totalLoss = 40000; 

  return (
    <div className="company-total-loss">
      <h1 className='total-loss-title'>Toplam Gider Bilgisi</h1>
      <p className='total-loss-amount'>$ {totalLoss}</p>
    </div>
  );
}

export default CompanyTotalLoss;