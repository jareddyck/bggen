var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button")

function setGradient() {
    body.style.background =  
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value
    + ")";
    css.textContent = body.style.background + ";"
}

function randomizeColor(params) {
    color1.value = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
    color2.value = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomizeColor);
