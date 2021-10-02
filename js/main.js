//base Hexadecimal
var characters = "0123456789ABCDEF";

const body = document.querySelector("body");
const colorBox = document.querySelector("#color");

//Call main function when page is loaded
document.ready = generateColor();

//define main function
function generateColor() {
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = color;
    colorBox.value = color;
    document.getElementById("tooltip").innerHTML = "Click to copy to clipboard.";
}

//define function used to copy the color code
function copyColor() {
    colorBox.select();
    navigator.clipboard.writeText(colorBox.value);
    document.getElementById("tooltip").innerHTML = "Copied!";
}

colorBox.addEventListener("click", copyColor);
document.getElementById("generator").addEventListener("click", generateColor);
