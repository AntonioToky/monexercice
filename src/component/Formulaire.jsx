import { useState } from "react";

function Formulaire({ajouterUtilisateur, data}){
const [nom, setNom] = useState("");
const [prenom, setPrenom] = useState("");
const [edit, setEdit] = useState(data);

const ajouter = (e) => {
    e.preventDefault();
    if(nom.trim() === "" || prenom.trim() === ""){
        alert("Ampidiro ny soratra");
        return; 
    }
    const personne = {id:Date.now(), nom, prenom};
    ajouterUtilisateur(personne);
    setNom("");
    setPrenom("");
}

const sauvegarde = (edit) => {
    setUtilisateurs(utilisateurs.map(utilisateur => utilisateur.id === updateId ? {...utilisateur, nom, prenom} : utilisateur));
    setNom(edit.nom);
    setPrenom(edit.prenom);
}

return(
    <>
        <form action="" method="post" onSubmit={edit ? sauvegarde : ajouter}>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} name="" id="" placeholder="Entrer votre nom" /><br/>
            <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} name="" id="" placeholder="Entrer votre prenom" /><br/>
            <button type="submit">{edit ? "Sauvegarder" : "Ajouter"}</button>
        </form>
    </>
)
}

export default Formulaire;