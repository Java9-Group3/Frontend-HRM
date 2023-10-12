import { useState, useEffect } from "react";
import{
    getPendingAdvance,
    approveAdvance,
    rejectAdvance,
} from "../../api/advanceApi";


const ManagerApproveAdvance = () => {
    const [pendingAdvance, setPendingAdvance] = useState([]);



    useEffect(() => {
      // API'den bekleyen expense getir
      getPendingAdvance()
        .then((advanceData) => setPendingAdvance(advanceData))
        
        .catch((error) =>
          console.error("Error fetching pending advance:", error)
        );
    }, []);
  
    const handleApproveAdvance = (advanceId) => {
      // Expense onayla
      approveAdvance(advanceId)
        .then((success) => {
          if (success) {
            // Başarılı bir şekilde onaylandıktan sonra, listeyi güncelle
            setPendingAdvance((prevAdvance) =>
            prevAdvance.filter((advance) => advance.advanceId !== advanceId)
            );
          } else {
            console.error("Advance approval failed");
          }
        })
        .catch((error) => console.error("Error approving advance:", error));
    };
  
    const handleRejectAdvance = (advanceId) => {
      // Yöneticiyi reddet
      rejectAdvance(advanceId)
        .then((unsuccess) => {
          if (unsuccess) {
            // Başarılı bir şekilde reddettikten sonra, listeyi güncelle
            setPendingAdvance((prevAdvance) =>
            prevAdvance.filter((advance) => advance.advanceId !== advanceId)
            );
          } else {
            console.error("Advance rejection failed");
          }
        })
        .catch((error) => console.error("Error rejection Advance:", error));
    };
  
    console.log(pendingAdvance);
  
    return (
      <div className="admin-panel-pending">
        <h1>Pending Advance</h1>
        <ul>
          {pendingAdvance !=null && pendingAdvance.map((advance) => (
            <li key={advance.advanceId}>
              {``}
              <span>Miktar: {advance.amount}</span>
              <span>Birim: {advance.currency}</span>
              <span>Sebep: {advance.description}</span>
              <button
                className="approve-btn"
                onClick={() => handleApproveAdvance(advance.advanceId)}
              >
                Approve
              </button>
              <button
                className="reject-btn"
                onClick={() => handleRejectAdvance(advance.advanceId)}
              >
                Reject
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ManagerApproveAdvance;
  