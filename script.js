var ol = document.createElement("ol");
ol.id = "validated-items";
document.querySelector("ol").appendChild(ol);
itemNumber = 1;

function afficherTexte() {
    var input = document.getElementById("new-todo-item-title").value;
    if (input) {
        var li = document.createElement("li");
        var textNode = document.createTextNode(input);
        li.appendChild(textNode);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            ol.removeChild(li);
            itemNumber--;
        });

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function() {
            document.getElementById("new-item").style.display = "none";
            document.getElementById("edit-item").style.display = "block";
            document.getElementById("edit-todo-item-title").value = textNode.nodeValue;

            document.getElementById("edit-todo-item-confirm").onclick = function() {
                textNode.nodeValue = document.getElementById("edit-todo-item-title").value;
                document.getElementById("new-item").style.display = "block";
                document.getElementById("edit-item").style.display = "none";
            };

            document.getElementById("edit-todo-item-cancel").onclick = function() {
                document.getElementById("new-item").style.display = "block";
                document.getElementById("edit-item").style.display = "none";
            };
        });


        li.appendChild(deleteButton);
        li.appendChild(editButton);
        ol.appendChild(li);
        document.getElementById("new-todo-item-title").value = "";
        itemNumber++;
    }
}

document.getElementById("new-todo-item-add").addEventListener("click", afficherTexte);