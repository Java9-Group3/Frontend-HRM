
export function makeCommentData(commentData) {
    const token=window.localStorage.getItem("token");
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
    };
    return fetch(`http://localhost:9091/api/v1/comment/personel-make-comment/${token}`,options)
    .then((resp) => {
      
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
