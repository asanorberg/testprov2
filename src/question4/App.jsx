// 4. Dela Favoritfärg med Context 3p
// Skapa en applikation som använder React Context för att hantera och
// dela en användares val av favoritfärg mellan komponenter.
// Applikationen ska bestå av två huvudkomponenter: ColorSelector och ColorDisplay.

// Steg 1: Skapa en ColorContext med React Context. Denna context ska innehålla
// användarens valda favoritfärg.

// Steg 2: ColorSelector-komponenten ska innehålla en dropdown-lista (select)
// där användaren kan välja en färg. När en färg väljs, uppdatera ColorContext
// med det nya värdet.

// Steg 3: ColorDisplay-komponenten ska använda ColorContext för att visa den valda
// favoritfärgen. Den ska lyssna på ändringar i context och uppdatera visningen
// automatiskt när en ny färg väljs.

// Genom att använda React Context kan du skapa en tät koppling mellan
// ColorSelector och ColorDisplay utan att direkt skicka props eller använda callbacks.

import { ColorProvider } from "../../context/ColorContext"; //Importera ColorProvider
import { useColor } from "../../context/ColorContext"; //Importera useColor custom hook

const ColorSelector = () => {
  const { colorSelect } = useColor(); // useColor hook för att få access till colorSelect-funktionen

  return (
    <>
      <select
        name="color"
        id="color-select"
        onChange={(e) => colorSelect(e.target.value)} // anropar colorSelect-funktionen när värdet i select ändras
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

const ColorDisplay = () => {
  const { state } = useColor(); // använder useColor hook för att få access till state-objektet från context
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: state.backgroundColor,
        }}
      >
        {" "}
        <p>ColorDisplay</p>
      </div>
    </>
  );
};

function App() {
  return (
    <div>
      <ColorProvider>
        {" "}
        {/*Wrappar ColorSelector och ColorDisplay för tillgång till color context */}
        <ColorSelector />
        <ColorDisplay></ColorDisplay>
      </ColorProvider>
    </div>
  );
}

export default App;
