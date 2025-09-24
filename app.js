function purr() {
    let purr = document.getElementById('purr');
    purr.play();
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

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let transactionId = document.getElementById("transactionId").value.trim();
    let location = document.querySelector('input[name="location"]:checked').value;
    let amount = parseInt(document.getElementsByClassName('amount')[0].innerText);
    let total = parseInt(document.getElementById('payment-amount').innerText);

    if (!name || !phone || !address || !transactionId || !location) {
        alert("⚠️ Please fill out all fields before checkout!");
        return;
    }

    localStorage.setItem("invoiceData", JSON.stringify({
        name,
        phone,
        address,
        transactionId,
        amount,
        total
    }));
    window.location.href = "invoice.html";
    purr();
    // console.log(name,phone,address,transactionId,location,amount,total)
    // let container = document.getElementById('invoice-section');
    // let div = document.createElement('div');
    // div.innerHTML = `
    //     <div class="invoice-header">
    //       <h1>Tailiva</h1>
    //       <img src="images/logo.png" alt="" />
    //     </div>
    //     <hr />
    //     <div class="invoice-body">
    //       <div>
    //         <h3>${name}</h3>
    //         <p>Tailiva Permium Chicken (1kg) x ${amount}</p>
    //         <h1>Tk. ${total}</h1>
    //       </div>
    //       <p>Address: <span>${address}</span></p>
    //       <p>Transaction Id: <span>${transactionId}</span></p>
    //       <div class="paid-seal">Paid</div>
    //     </div>
    //     <div class="invoice-footer">
    //       <hr />
    //       <p>The WK IT - 01711738488</p>
    //     </div>
    
    // `;
    // container.appendChild(div);

    // alert("✅ Order placed successfully! Invoice downloading...");
}


