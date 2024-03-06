// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

import { useState } from "react";

const CommentList = () => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");

  const handleClickAdd = () => {
    setCommentList((comments) => [
      ...comments,
      { id: comments.length + 1, comment: comment },
    ]);
    setComment("");
  };

  const handleClickRemove = (id) => {
    setCommentList((comments) =>
      comments.filter((comment) => comment.id !== id)
    );
  };

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="container">
      <input type="text" value={comment} onChange={handleInput}></input>{" "}
      <button onClick={handleClickAdd}>Add comment</button>
      <h4>Comments</h4>
      <div>
        <ul>
          {commentList.map((comment) => (
            <li key={comment.id}>
              {comment.id} {comment.comment}
              <button onClick={() => handleClickRemove(comment.id)}>
                {" "}
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <CommentList />
    </div>
  );
}

export default App;
