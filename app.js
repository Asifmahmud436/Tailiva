function purr() {
    let purr = document.getElementById('purr')
    purr.play()
}

function countTotal() {
    let location = document.querySelector('input[name="location"]:checked');
    let amount = document.getElementsByClassName('amount')[0];
    let itemsAmount = parseInt(amount.innerText) * 350;

    // 🟢 check if location is selected
    let shipping = location ? parseInt(location.value) : 0;

    let total = itemsAmount + shipping;
    let payment = document.getElementById('payment-amount');
    payment.innerText = total;
}


function increaseCount() {
    purr()
    let amount = document.getElementsByClassName('amount')[0];
    amount.innerText = parseInt(amount.innerText) + 1;
    countTotal();
}

function decreaseCount() {
    purr()
    let amount = document.getElementsByClassName('amount')[0];
    if (parseInt(amount.innerText) > 1) {
        amount.innerText = parseInt(amount.innerText) - 1;
        countTotal();
    }
}

window.onload = function () {
    countTotal();
}

function gotoOrder() {
    purr()
    document.getElementById('order-section').scrollIntoView({
        behavior: "smooth"
    })
}

