
var tipAmount


function calculateTip(tipPercentage) {
    var amount = parseFloat(document.getElementById("amountInput").value);
    tipAmount = amount * (tipPercentage / 100);

    var tipAmountElement = document.getElementById("tipAmount");
    tipAmountElement.textContent = "₹" + tipAmount.toFixed(2)

}


function reset() {
    var tipAmount = 0
    var totalAmount = 0
    document.getElementById("tipAmount").textContent = "₹" + tipAmount.toFixed(2)
    document.getElementById('totalAmount').textContent = '₹' + totalAmount.toFixed(2);
    document.getElementById('amountInput').value = '';
    document.getElementById('peopleInput').value = '';
}




function generateBill() {
    var amount = parseFloat(document.getElementById("amountInput").value);

    var people = parseInt(document.getElementById('peopleInput').value);
    var totalAmount = amount + tipAmount;

    if (people > 1) {
        totalAmount /= people;
    }


    document.getElementById('totalAmount').textContent = '₹' + totalAmount.toFixed(2);



}