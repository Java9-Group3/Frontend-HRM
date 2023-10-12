export function getPendingAdvance() {
  const token = localStorage.getItem("token");
  return fetch(
    `http://localhost:9093/api/v1/advance/getAllPendingAdvance/${token}`
  )
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Server Error!!!");
      }
      return resp.json();
    })
    .then((data) => {
      return data; // Backend'den gelen verileri döndürüyoruz
    })
    .catch((err) => {
      console.log("Error fetching pending advance:", err);
    });
}

//APPROVED
export function approveAdvance(advanceId) {
  const token = window.localStorage.getItem("token");
  const approvedAdvance = {
    advanceId: advanceId,
    action: true,
    token: token,
  };
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(approvedAdvance),
  };

  return fetch(`http://localhost:9093/api/v1/advance/change-advance-status/${approvedAdvance.token}`, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if (data.message) 
      throw new Error(data.message);
      return data; // İsteğin başarılı olup olmadığını kontrol etmek için kullanılabilir
    })
    .catch((err) => {
      console.error("Error approving advance:", err);
    });
}

//rejected
export function rejectAdvance(advanceId) {
    const token = window.localStorage.getItem("token");
    const rejectedAdvance={
      advanceId: advanceId,
      action: false,
    }
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rejectedAdvance),
    };
  
    return fetch(`http://localhost:9093/api/v1/advance/change-advance-status/${token}`, options)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if(data.message)
        throw new Error(data.message);
        return data;
      })
      .catch((err) => {
        console.error('Error approving advance:', err);
      });
  }