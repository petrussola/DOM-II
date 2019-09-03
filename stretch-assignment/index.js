const blocks = document.querySelectorAll('.blocks div');
let order = 0;
let widthBox = 100;
let count = 0;
blocks.forEach(item => {
    item.addEventListener('click', e => {
        decreaseOrder();
        e.target.style.order = order;
    });
    item.addEventListener('mousedown', e => {
        startCounter(e.target);
    });
    item.addEventListener('mouseup', e => {
        stop();
    });
    
})

function decreaseOrder() {
    return order -= 1;
}

function startCounter(param) {
    function cb() {
        widthBox += 1;
        param.style.width = widthBox + "px";
    };
    var interval = window.setInterval(cb, 10);
}
function stop() {
    window.clearInterval(interval);
}
