// Your code goes here

// img in header goes opacity 0.5 when mouseover event and goes back to opacity 1 when mouseout

document.querySelector(".intro img").addEventListener('mouseover', e => {
    e.target.style.opacity = 0.5;
});
document.querySelector(".intro img").addEventListener('mouseout', e => {
    e.target.style.opacity = 1;
});