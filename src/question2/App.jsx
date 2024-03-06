// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

import React, { useState } from "react";

const UpdateEmail = () => {
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState("sam.smith@email.com");

  const editEmail = () => {
    setEditMode(true);
  };

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <div>
      <h4>Email address:</h4>
      <div className="flex">
        {!editMode && (
          <>
            <div>{email}</div>
            <button onClick={editEmail}>Edit</button>
          </>
        )}
        {editMode && (
          <>
            <input value={email} onChange={handleInput} />
            <button onClick={handleSave}>Save</button>
          </>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <UpdateEmail />
    </div>
  );
}

export default App;
