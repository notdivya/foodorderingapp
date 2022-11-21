var payees = 0;
window.onload = function (){
  document.getElementById("payees").innerHTML = payees;
}

function increment(){
    payees +=1;
    document.getElementById("payees").innerHTML = payees;
}

function decrement(){
    payees -=1;
    document.getElementById("payees").innerHTML = payees;
}

function addSessionStorage(){
    sessionStorage.setItem("bills", payees);
}

function totalFor1(){
    sessionStorage.setItem("total", 100)
}

function totalForMany(){
    sessionStorage.setItem("total", 100/payees)
}