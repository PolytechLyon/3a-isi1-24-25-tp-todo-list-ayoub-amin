var ol = document.createElement("ol");
ol.id = "validated-items";
document.querySelector("ol").appendChild(ol);
itemNumber = 1;

function afficherTexte() {
    var input = document.getElementById("new-todo-item-title").value;
    if (input) {
        var li = document.createElement("li");

        
        li.appendChild(document.createTextNode(input));


        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            ol.removeChild(li);
            itemNumber--;
        });

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function() {
            var newText = prompt("Edit your item:", li.firstChild.textContent);
            if (newText !== null) {
                li.firstChild.textContent = newText;
            }
        });

        let tabSpace = document.createElement('span');
        tabSpace.style.marginLeft = '200px';  
        li.appendChild(tabSpace);
        li.appendChild(deleteButton);
        let space = document.createTextNode(' ');
        li.appendChild(space);
        li.appendChild(editButton);

        

        ol.appendChild(li);
        document.getElementById("new-todo-item-title").value = "";
        itemNumber++;
    }
}

document.getElementById("new-todo-item-add").addEventListener("click", afficherTexte);