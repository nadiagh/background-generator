var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn=document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", function(){
	//Math.random() gives a random value between 0 and 1 when the method toString is applied to it it gives the  
	// hexadecimal value of the one generated by random() (it contains F ...) then we only need 6 digits next to
	// # that we obtain using slice(2,8) (we choose 2 to start just after the comma and the 8th not included).
	color1.value="#" + Math.random().toString(16).slice(2, 8);
	do

	   color2.value="#" + Math.random().toString(16).slice(2, 8);

	while(color2.value==color1.value);
	setGradient();
})


window.addEventListener("load", setGradient);