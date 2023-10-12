import { useState } from "react";
import "./expense.css";


// Backend Baglantisi

function expensePersonelMethod(employeeData) {
  const token=window.localStorage.getItem("token");
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employeeData),
  };
  return fetch(`http://localhost:9093/api/v1/expense/save/${token}`,options)
  .then((resp) => {
    if (!resp.ok) {
      throw new Error("Server Error");
    }
    console.log(resp);
    return resp.json();
  })
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err.message);
  });
}


// =============Sayfa Componentleri============
export function ExpensePersonel() {
  // const navigate= useNavigate();

  const [employeeData, setEmployeeData] = useState({
    // token: localStorage.getItem("token"),
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    wage: "",
  }); //burası nasıl çalışıyor :D ?

  function handleChange(e) {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  }

  function expenseSaveSubmit(e) {
    e.preventDefault();
    expensePersonelMethod(employeeData).then((data) => {
        if (data) {
          console.log(data);
        }
      });
  }
  return (
    <>
      <h2>Harcama Talep Et</h2>
      <form onSubmit={expenseSaveSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={employeeData.amount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Expense Type:</label>
          <select
            name="expenseType"
            value={employeeData.expenseType}
            onChange={handleChange}
          >
            <option value="ACCOMMODATION">Accommodation</option>
            <option value="ABROAD">Abroad</option>
            <option value="FOOD">Food</option>
            <option value="DONATION">Donation</option>
          </select>
        </div>
        <div>
          <label>Currency:</label>
          <input
            type="text"
            name="currency"
            value={employeeData.currency}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
