import { useState } from "react";
import Formulaire from "./component/Formulaire"
import AfficheDonnee from "./component/AfficheDonnee"

function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [dataEdit, setDataEdit] = useState([]);

  const ajouterUtilisateur = (utilisateur) => {
    setUtilisateurs([...utilisateurs, utilisateur]);
  }

  const supprimer = (id) => {
    setUtilisateurs(utilisateurs.filter((utilisateur) => utilisateur.id !== id));
  } 

  const modifier = (data) => {
    setDataEdit(data);
  }

  return (
    <>
      <Formulaire ajouterUtilisateur={ajouterUtilisateur} data={dataEdit} />
      <AfficheDonnee personnes={utilisateurs} supprimer={supprimer} modifier={modifier} />
    </>
  )
}

export default App
