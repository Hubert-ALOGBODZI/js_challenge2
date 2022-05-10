/*==============conditionnement pour l'alert=======*/
function Ajouter() {
    if(document.formSaisie.titre.value!=""){
      return true;
    }
    else {
        alert("Vous devez écrire une tache d'abord!");
        return false;
    }
}

