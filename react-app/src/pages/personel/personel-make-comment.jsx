import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { makeCommentData } from "../../api/Personel-Make-Comment-Api";
import 'react-toastify/dist/ReactToastify.css';

export function PersonelMakeComment() {
  
    const [commentData, setCommentData] = useState({
      comment: "",
    });

    function notify(){
        toast("Yorumunuz onay için yöneticiye gönderilmiştir!");
    }
    function errNotify(message){
        toast.error(message);
    }
  
    function handleChange(e) {
        setCommentData({ ...commentData, [e.target.name]: e.target.value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      makeCommentData(commentData).then((data) => {
          if (data.message) {
            errNotify(data.message)
          } else {
            notify();
          }
        });
    }

  return (
    <section className="company-update">
      <h1>
        Make a comment
      </h1>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Comment"
          value={commentData.comment == null ? "":commentData.comment}
          onChange={handleChange}
        />
        <button type="submit">Comment</button>
        <ToastContainer />
      </form>
    </section>
  );
}
