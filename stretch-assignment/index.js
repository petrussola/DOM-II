const blocks = document.querySelectorAll('.blocks div');
let order = 0;
blocks.forEach(item => {
    item.addEventListener('click', e => {
        decreaseOrder();
        e.target.style.order = order;
    })
})
console.log(order);

function decreaseOrder() {
    return order = order - 1;
}