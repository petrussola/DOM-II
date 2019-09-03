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

// focus

// const focus = document.querySelectorAll('p');

// focus.forEach(item => {
//     item.addEventListener('focus', e => {
//         console.log(item);
//     });
// })

// increase font of p when resizing window

const resize = document.querySelectorAll("p");
resize.forEach(item => {
    window.addEventListener('resize', e => {
            item.style.fontSize = "3rem";
        });
})

// change title when scrolling website

const opacityEffect = document.querySelector("h1");
document.addEventListener('scroll', e => {
    opacityEffect.textContent = "We are scrolling down";
})

// select

// const selectAll = document.querySelector("p");
// // console.log(selectAll);

// document.addEventListener('select', e => {
//     console.log(e);
// })

// dblclick --> when double click on nav elements background goes red

const selectedNav = document.querySelectorAll(".nav-link");
selectedNav.forEach(item => {
    item.addEventListener('dblclick', e => {
        e.target.style.background = "red";
    })
})
