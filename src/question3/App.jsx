// 3. Välj Favoritfärg via Dropdown 3p
// Skapa två React-komponenter: ParentComponent och ChildComponent.
// ChildComponent ska innehålla en dropdown-lista (select i html) där
// användaren kan välja sin favoritfärg.
// När en färg väljs, skicka detta val till ParentComponent genom en callback-funktion.
// ParentComponent ska visa användarens valda favoritfärg.

import { useState } from "react";

// I ChildComponent, implementera ett <select>-element med några färgalternativ.
// Använd en callback-funktion för att meddela ParentComponent om användarens val.
// ParentComponent ska ta emot och visa det valda färgalternativet.

const ParentComponent = ({ value, onSelection }) => {
  return (
    <div style={{ width: "200px", height: "200px", backgroundColor: value }}>
      <ChildComponent onSelection={onSelection} />
    </div>
  );
};

const ChildComponent = ({ onSelection }) => {
  return (
    <>
      <select
        name="color"
        id="color-select"
        onChange={(e) => onSelection(e.target.value)}
      >
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </select>
    </>
  );
};

function App() {
  const [selectedColor, setSelectedColor] = useState("red");

  const handleSelection = (selectedColor) => {
    setSelectedColor(selectedColor);
  };

  return (
    <div className="container">
      <ParentComponent
        value={selectedColor}
        onSelection={handleSelection}
      ></ParentComponent>
    </div>
  );
}

export default App;
