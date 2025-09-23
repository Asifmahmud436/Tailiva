function purr() {
    let purr = document.getElementById('purr')
    purr.play()
}

function handleNum() {
    purr()
    let amount = document.getElementsByClassName('amount')[0];
    amount.innerText = parseInt(amount.innerText) + 1;
    console.log('okay')
}

function downloadPDF() {
    purr()
    const element = document.getElementById("invoice");

    // এখানে html2pdf দিয়ে convert হচ্ছে
    html2pdf()
        .from(element)
        .set({
            margin: 10,
            filename: 'invoice.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 2
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            }
        })
        .save();
}