window.onload =  function (){
    const total = sessionStorage.getItem("curpayee")
    document.getElementById("curpayee").innerHTML = total;
}


function tiporhome(){

    if (sessionStorage.getItem("bills") == 0){
        location.href = 'index.html'
    }
    else {
        console.log("check");

        location.href = 'tip.html'
    }
}