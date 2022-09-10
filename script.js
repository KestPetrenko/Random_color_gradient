let bod = document.querySelector("#bod");
let letSpan1 = document.querySelector("#span1");
let letSpan2 = document.querySelector("#span2");
bod.onclick = getRandomColor;

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color1 = '#';
    let color2 = '#';
    for (var i = 0; i < 6; i++) {
        color1 += letters[getRandomValue(16)];
        color2 += letters[getRandomValue(16)];
        letSpan1.textContent = color1;
        letSpan2.textContent = color2;
        document.body.style.background = `linear-gradient(70deg, ${color1}  0%, ${color2} 100%)`;
    }
}

function getRandomValue(max) {
    return Math.floor(Math.random() * max);
}