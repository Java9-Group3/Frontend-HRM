import { useState, useEffect } from "react";
import {
  getPendingComments,
  approveComment,
  rejectComment,
} from "../../api/Api";
import "./admin.css";

const AdminApproveComments = () => {
  const [pendingComments, setPendingComments] = useState([]);

  useEffect(() => {
    // API'den bekleyen yöneticileri getir
    getPendingComments()
      .then((commentsData) => setPendingComments(commentsData))
      .catch((error) =>
        console.error("Error fetching pending comments:", error)
      );
  }, []);

  const handleApproveComments = (commentId) => {
    // Comment onayla
    approveComment(commentId)
      .then((success) => {
        if (success) {
          // Başarılı bir şekilde onaylandıktan sonra, listeyi güncelle
          setPendingComments((prevComments) =>
            prevComments.filter((comment) => comment.commentId !== commentId)
          );
        } else {
          console.error("Comment approval failed");
        }
      })
      .catch((error) => console.error("Error approving manager:", error));
  };

  const handleRejectComment = (commentId) => {
    // Yöneticiyi reddet
    rejectComment(commentId)
      .then((unsuccess) => {
        if (unsuccess) {
          // Başarılı bir şekilde reddettikten sonra, listeyi güncelle
          setPendingComments((prevComments) =>
            prevComments.filter((comment) => comment.commentId !== commentId)
          );
        } else {
          console.error("Comment rejection failed");
        }
      })
      .catch((error) => console.error("Error rejection comment:", error));
  };

  console.log(pendingComments);

  return (
    <div className="admin-panel-pending">
      <h1>Pending Comments</h1>
      <ul>
        {pendingComments !=null && pendingComments.map((comment) => (
          <li key={comment.commentId}>
            {``}
            <span>Name: {comment.name}</span>
            <span>Comment: {comment.comment}</span>
            <button
              className="approve-btn"
              onClick={() => handleApproveComments(comment.commentId)}
            >
              Approve
            </button>
            <button
              className="reject-btn"
              onClick={() => handleRejectComment(comment.commentId)}
            >
              Reject
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminApproveComments;
