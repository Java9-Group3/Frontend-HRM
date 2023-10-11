//Company things i guess ***********

export function getAllExpenses() {
    return fetch(`http://localhost:9093/api/v1/expense/getallexpenses`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Server Error!!!');
        }
        return resp.json();
      })
      .then((data) => {
        return data; // Backend'den gelen verileri döndürüyoruz
      })
      .catch((err) => {
        console.log('Error fetching expenses:', err);
      });
}

export function getPendingExpenses() {
  const token=localStorage.getItem("token");
    return fetch(`http://localhost:9093/api/v1/expense/getallpendingexpenses/${token}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Server Error!!!');
        }
        return resp.json();
      })
      .then((data) => {
        return data; // Backend'den gelen verileri döndürüyoruz
      })
      .catch((err) => {
        console.log('Error fetching pending expenses:', err);
      });
}
//APPROVED
export function approveExpense(expenseId) {
  const token = window.localStorage.getItem("token");
  const approvedExpense={
    expenseId: expenseId,
    action: true,
    token: token,
  }
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(approvedExpense),
  };

  return fetch(`http://localhost:9093/api/v1/expense/change-expense-status/${token}`, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if(data.message)
      throw new Error(data.message);
      return data; // İsteğin başarılı olup olmadığını kontrol etmek için kullanılabilir
    })
    .catch((err) => {
      console.error('Error approving expense:', err);
    });
}

//rejected
export function rejectExpense(expenseId) {
  const token = window.localStorage.getItem("token");
  const rejectedExpense={
    expenseId: expenseId,
    action: false,
    token: token, // dto.getToken olursa kullanılacak
  }
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rejectedExpense),
  };

  return fetch(`http://localhost:9093/api/v1/expense/change-expense-status/${token}`, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if(data.message)
      throw new Error(data.message);
      return data;
    })
    .catch((err) => {
      console.error('Error approving expense:', err);
    });
}

