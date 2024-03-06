// 5. Skapa Custom Hook för API-anrop 3p
// Målet med denna uppgift är att skapa en custom
// hook i React, useFetchData, för att hämta data från
//en angiven URL. Din hook ska enbart hantera datahämtning och laddningsstatus.

// Skapa en custom hook som heter: useFetchData, som tar en URL som argument
// och använder fetch för att hämta data.
// Hooken ska returnera ett objekt med två egenskaper: data (datan som hämtats)
// och isLoading (en boolean som indikerar om datahämtningen pågår).

// Använd https://jsonplaceholder.typicode.com/users som test-URL för att demonstrera
// hur din hook kan användas i en komponent för att visa användardata och en
// laddningsindikator.

import { useState, useEffect } from "react";

const useFetchData = (url) => {
  //custom fetch hook
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true); //börjar ladda
    setTimeout(() => {
      //fördröj hämtning av data
      fetch(url)
        .then((result) => result.json())
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  }, [url]);

  return { data, isLoading };
};

// Exempel på användning:

function App() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  const { data, isLoading } = useFetchData(url);

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Laddar i 3 sekunder...</div>}
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
