var btnNew = document.querySelector("#add_todo");
var ul = document.getElementsByTagName("ul")[0];
var listItem = document.getElementById("input");


btnNew.addEventListener("click", function(e) {
	e.preventDefault();

	var newText = "";
	var li = document.createElement("LI");
	console.log("hi");
	li.innerHTML = listItem.value;
	ul.appendChild(li);
	listItem.value = "";
})	

ul.addEventListener("click", function(f) {
	if(f.srcElement.className) {
		f.srcElement.className = "";
	}
	else {
		f.srcElement.className = "completed";
	}
});


// input.value = "";

	// e.preventDefault();
	// alert(newValue);
	
	// listItem.appendChild(newValue);


// listItem.addEventListener("click", function(e) {
// 	var newInput = input.value;
// 	e.preventDefault();
// 	alert(newInput);

// });






