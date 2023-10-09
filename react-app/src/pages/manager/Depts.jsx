import React from 'react';

function Depts() {

  const upcomingPayments = [
    { month: 'Ocak', amount: '$1,000' },
    { month: 'Şubat', amount: '$800' },
    { month: 'Mart', amount: '$1,200' },

  ];

  return (
    <div className="depts">
      <h1 className="depts-title">Yaklaşan Ödeme Bilgileri</h1>
      <table className="depts-table">
        <thead>
          <tr>
            <th>Ay</th>
            <th>Tutar</th>
          </tr>
        </thead>
        <tbody>
          {upcomingPayments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.month}</td>
              <td>{payment.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Depts;
