// Your code goes here

// img in header goes opacity 0.5 when mouseover event and goes back to opacity 1 when mouseout

document.querySelector(".intro img").addEventListener('mouseover', e => {
    e.target.style.opacity = 0.5;
});
document.querySelector(".intro img").addEventListener('mouseout', e => {
    e.target.style.opacity = 1;
});

// try typing b i n g o on the window, see what happens :)

const title = document.querySelector(".logo-heading");
const bingo = [];
window.addEventListener('keydown', e => {
    bingo.push(e.keyCode);
    prize();
});

function prize() {
    if (bingo.join() === "66,73,78,71,79") {
        title.textContent = "Bingo, you've won a prize!";
        title.style.color = "red";
    }
}

// when you wheel the mouse wheel the title changes color

const colors = ["red", "yellow", "green", "brown", "purple"]

window.addEventListener('wheel', e => {
    title.style.color = colors[random(colors.length)];
});

function random(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// when a photo is dragged, text and color of first h2 changes

const drag = document.querySelectorAll("img");
const dragText = document.querySelector("h2")
drag.forEach( item => {
    item.addEventListener('drag', e => {
        dragText.textContent = "Where are you bringing my friend the img tag??"
        dragText.style.color = "red";
    });
});

// load event --> random color upon load of window

const body = document.querySelector("body");

window.addEventListener('load', e => {
    body.style.background = colors[random(colors.length)];
});