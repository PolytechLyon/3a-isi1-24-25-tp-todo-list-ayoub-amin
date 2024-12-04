var ol = document.createElement("ol");
ol.id = "validated-items";
document.querySelector("ol").appendChild(ol);
var itemNumber = 1;

function afficherTexte() {
    var input = document.getElementById("new-todo-item-title").value;
    if (input) {
        var li = document.createElement("li");
        li.className = "todo-item";
        var textNode = document.createTextNode(itemNumber + ". " + input);
        var textSpan = document.createElement("span");
        textSpan.className = "todo-text";
        textSpan.appendChild(textNode);
        li.appendChild(textSpan);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function() {
            ol.removeChild(li);
            itemNumber--;
            updateItemNumbers();
        });

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        editButton.addEventListener("click", function() {
            document.getElementById("new-item").style.display = "none";
            document.getElementById("edit-item").style.display = "block";
            document.getElementById("edit-todo-item-title").value = input;

            document.getElementById("edit-todo-item-confirm").onclick = function() {
                textNode.nodeValue = itemNumber + ". " + document.getElementById("edit-todo-item-title").value;
                document.getElementById("new-item").style.display = "block";
                document.getElementById("edit-item").style.display = "none";
            };

            document.getElementById("edit-todo-item-cancel").onclick = function() {
                document.getElementById("new-item").style.display = "block";
                document.getElementById("edit-item").style.display = "none";
            };
        });

        var buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        li.appendChild(buttonContainer);
        ol.appendChild(li);
        document.getElementById("new-todo-item-title").value = "";
        itemNumber++;
    }
}

function updateItemNumbers() {
    var items = document.querySelectorAll("#validated-items .todo-item");
    items.forEach((item, index) => {
        var textSpan = item.querySelector(".todo-text");
        var text = textSpan.textContent.split(". ")[1];
        textSpan.textContent = (index + 1) + ". " + text;
    });
}

document.getElementById("new-todo-item-add").addEventListener("click", afficherTexte);

const inputField = document.getElementById('new-todo-item-title');


inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        afficherTexte();
    }
});