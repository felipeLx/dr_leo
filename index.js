let clicked = document.getElementById("clickme");
let count = 0;

clicked.onclick = function() {
    count += 1;
    clicked.innerHTML = count;
}