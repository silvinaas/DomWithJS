let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
let lisito = document.createElement("li");
lisito.innerHTML = "Forth element";
//lisito = 'innerHTML = "Fourth element";';
document.querySelector("#myList").appendChild(lisito);
});
