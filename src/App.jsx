import { useState, useEffect } from "react";

function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    async function makaDonner() {
      try {
        setChargement(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUtilisateurs(data);
      } catch (erreur) {
        console.log("Misy olana: ", erreur);
      } finally {
        setChargement(false);
      }
    }
    makaDonner();
  }, []);

  if(chargement) return <h1>Miandrasa kely ...</h1>;

  return (
    <>
      <div>
        <h1>Listr'ireo olona avy amin'ny Data:</h1>
        <ul>
          {utilisateurs.map(user => (
            <li key={user.id}>{user.name} {user.username} - {user.email}</li>
          ))}
        </ul>
      </div> 
    </>
  );
}

export default App;