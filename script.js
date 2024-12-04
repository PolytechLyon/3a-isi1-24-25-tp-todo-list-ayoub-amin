// Fonction javascript qui affiche la chaine de caractères saisie dans un formulaire après avoir appuyé sur un bouton de validation
/*
function afficherTexte() {
    var input = document.getElementById("new-todo-item-title").value;
    alert(input);
}

document.getElementById("new-todo-item-add").addEventListener("click", afficherTexte);
*/

// Créez dynamiquement une section pour afficher les éléments validés
var ul = document.createElement("ul");
ul.id = "validated-items";
document.body.appendChild(ul);

function afficherTexte() {
    var input = document.getElementById("new-todo-item-title").value;
    if (input) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input));
        ul.appendChild(li);
        document.getElementById("new-todo-item-title").value = "";
    }
}

document.getElementById("new-todo-item-add").addEventListener("click", afficherTexte);

ul = document.createElement("ol");
ul.id = "validated-items";
document.body.appendChild(ul);

