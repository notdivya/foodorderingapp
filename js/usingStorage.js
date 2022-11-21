window.onload =  function (){
    const total = sessionStorage.getItem("total")
    document.getElementById("total").innerHTML = total;
}

function curPayee10(){
    const total = sessionStorage.getItem("total")
    sessionStorage.setItem("curpayee", parseInt(total) + parseInt((parseInt(total) * 0.1)))
}
function curPayee15(){
    const total = sessionStorage.getItem("total")
    sessionStorage.setItem("curpayee", parseInt(total) + parseInt((parseInt(total) * 0.15)))
}
function curPayee20(){
    const total = sessionStorage.getItem("total")
    sessionStorage.setItem("curpayee", parseInt(total) + parseInt((parseInt(total) * 0.2)))
}
function curPayee0(){
    const total = sessionStorage.getItem("total")
    sessionStorage.setItem("curpayee", parseInt(total))
}
function decreaseSessionStore(){
    const newval = sessionStorage.getItem("bills") - 1;
    sessionStorage.setItem("bills", newval)
}
