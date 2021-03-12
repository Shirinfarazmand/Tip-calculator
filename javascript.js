function calculate() {
    var bill = document.getElementById("bill").value;
    var tip = document.getElementById("tip").value;
    var amount = document.querySelector(".amount").innerHTML = bill*tip/100;
    var total =  document.querySelector(".total").innerHTML =  Number(bill) + Number(amount);
}