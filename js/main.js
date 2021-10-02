var characters = "0123456789ABCDEF";
const body = document.querySelector("body");
const colorBox = document.querySelector("#color");
document.ready = generateColor();
function generateColor() {
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = color;
    colorBox.value = color;
}
function copyColor() {
    colorBox.select();
    navigator.clipboard.writeText(colorBox.value);
    document.getElementById("tooltip").innerHTML = "Copied!";
}
colorBox.addEventListener("click", copyColor);
document.getElementById("generator").addEventListener("click", generateColor);