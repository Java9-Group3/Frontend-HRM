import React, { useState, useEffect } from "react";
import "./expense.css";

const ManagerExpenseAll = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9093/api/v1/expense/getAllExpenses")
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error("Error fetching expenses:", error));
  }, []);

  return (
    <div>
      <h1>Expense List</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <p>Amount: {expense.amount}</p>
            <p>Tarih: {expense.requestDate}</p>
            <p>Durumu: {expense.approvalStatus}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagerExpenseAll;
