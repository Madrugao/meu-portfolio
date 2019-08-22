function openNav(){
	var x = document.getElementById("navigation");

	if (x.className === "navigation") {
		x.className += " menujs";
		document.getElementById("threelines-icon").innerHTML = "&Cross;"; //Mudando o formato do botão pra "X"
	}else{
		x.className = "navigation"
		document.getElementById("threelines-icon").innerHTML = "&#9776;"; //Mudando o formato do botão pra os tracinhos
	}
}