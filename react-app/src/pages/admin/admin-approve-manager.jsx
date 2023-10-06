import { useState, useEffect } from "react";
import {
  getPendingManagers,
  approveManager,
  rejectManager,
} from "../../api/Api";
import "./admin.css";

const AdminApproveManagers = () => {
  const [pendingManagers, setPendingManagers] = useState([]);

  useEffect(() => {
    // API'den bekleyen yöneticileri getir
    getPendingManagers()
      .then((data) => setPendingManagers(data))
      .catch((error) =>
        console.error("Error fetching pending managers:", error)
      );
  }, []);

  const handleApproveManager = (authId) => {
    // Yöneticiyi onayla
    approveManager(authId)
      .then((success) => {
        if (success) {
          // Başarılı bir şekilde onaylandıktan sonra, listeyi güncelle
          setPendingManagers((prevManagers) =>
            prevManagers.filter((manager) => manager.authId !== authId)
          );
        } else {
          console.error("Manager approval failed");
        }
      })
      .catch((error) => console.error("Error approving manager:", error));
  };

  const handleRejectManager = (authId) => {
    // Yöneticiyi reddet
    rejectManager(authId)
      .then((unsuccess) => {
        if (unsuccess) {
          // Başarılı bir şekilde reddettikten sonra, listeyi güncelle
          setPendingManagers((prevManagers) =>
            prevManagers.filter((manager) => manager.authId !== authId)
          );
        } else {
          console.error("Manager rejection failed");
        }
      })
      .catch((error) => console.error("Error rejection manager:", error));
  };

  console.log(pendingManagers);

  return (
    <div className="admin-panel-pending">
        <h1>Pending Managers</h1>
        <ul>
          {pendingManagers !=null && pendingManagers.map((manager) => (
            <li key={manager.authId}>
              {`${manager.name} ${manager.surname}`}
              <span>Company Name: {manager.companyName}</span>
              <span>Tax Number: {manager.taxNumber}</span>
              <button
                className="approve-btn"
                onClick={() => handleApproveManager(manager.authId)}
              >
                Approve
              </button>
              <button
                className="reject-btn"
                onClick={() => handleRejectManager(manager.authId)}
              >
                Reject
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default AdminApproveManagers;