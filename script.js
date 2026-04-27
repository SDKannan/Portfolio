const text = "DURAI KANNAN";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("name").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();