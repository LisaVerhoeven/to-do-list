var inputBar = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByClassName("listItem");




function inputLength() {
	return inputBar.value.length;
}

function createListElement() {
	var newItem = document.createElement("li");
	newItem.appendChild(document.createTextNode(inputBar.value));
	ul.appendChild(newItem);
	newItem.classList.add("listItem");
	newItem.addEventListener("click", lineThrough);
	inputBar.value = "";
}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function lineThrough(element) {
var target = element.target;
var finished = target.classList.toggle("done");
 
 if(finished === true) {
 	addButton(target);
 }
 else if(finished === false) {
 	removeButton(target);
 }
}


function addButton(item) {
var button = document.createElement("button");
button.appendChild(document.createTextNode("remove"));
button.classList.add("deletebtn");
item.appendChild(button);
button.addEventListener("click", function() {
	this.parentElement.remove();
})
}

function removeButton(item){
	var deleteButton = item.querySelector("button");
	deleteButton.parentNode.removeChild(deleteButton);
}

for (item of listItems) {
	item.addEventListener("click", lineThrough);
}


inputBar.addEventListener("keypress", addListAfterKeypress);


