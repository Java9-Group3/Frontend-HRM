import { useState, useEffect } from "react";
import {
  getPendingExpenses,
  approveExpense,
  rejectExpense,
} from "../../api/ExpenseApi";
//expense.css i dahil et
import "./expense.css";

const ManagerApproveExpenses = () => {
    const [pendingExpenses, setPendingExpenses] = useState([]);
    const token = window.localStorage.getItem("token");
    
    useEffect(() => {
      // API'den bekleyen expense getir
      getPendingExpenses()
        .then((expenseData) => setPendingExpenses(expenseData))
        
        .catch((error) =>
          console.error("Error fetching pending expenses:", error)
        );
    }, []);
  
    const handleApproveComments = (expenseId) => {
      // Expense onayla
      approveExpense(expenseId)
        .then((success) => {
          if (success) {
            // Başarılı bir şekilde onaylandıktan sonra, listeyi güncelle
            setPendingExpenses((prevExpenses) =>
            prevExpenses.filter((expense) => expense.expenseId !== expenseId)
            );
          } else {
            console.error("Expense approval failed");
          }
        })
        .catch((error) => console.error("Error approving Expense:", error));
    };
  
    const handleRejectComment = (expenseId) => {
      // Yöneticiyi reddet
      rejectExpense(expenseId)
        .then((unsuccess) => {
          if (unsuccess) {
            // Başarılı bir şekilde reddettikten sonra, listeyi güncelle
            setPendingExpenses((prevExpenses) =>
            prevExpenses.filter((expense) => expense.expenseId !== expenseId)
            );
          } else {
            console.error("Expense rejection failed");
          }
        })
        .catch((error) => console.error("Error rejection Expense:", error));
    };
  
    console.log(pendingExpenses);
  
    return (
      <div className="admin-panel-pending">
        <h1>Pending Expenses</h1>
        <ul>
          {pendingExpenses !=null && pendingExpenses.map((expense) => (
            <li key={expense.commentId}>
              {``}
              <span>Miktar: {expense.amount}</span>
              <span>Birim: {expense.currency}</span>
              <span>Tarih: {expense.requestDate}</span>
              <button
                className="approve-btn"
                onClick={() => handleApproveComments(expense.expenseId)}
              >
                Approve
              </button>
              <button
                className="reject-btn"
                onClick={() => handleRejectComment(expense.expenseId)}
              >
                Reject
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ManagerApproveExpenses;
  