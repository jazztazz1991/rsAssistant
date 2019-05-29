var bet = 1000000;
var gp = 1000000;
var win = 0;
var loss = 0;
var total = 0;
var ratio = win / total;

console.log( "gp" + gp);
    console.log( "bet" + bet);

$("#stake").on("click", function(){
    console.log("running");
    bet = document.getElementById("bet").value;
    gp = document.getElementById("gp").value;
    
    console.log( "gp" + gp);
    console.log( "bet" + bet);
    
    document.getElementById("cGP").innerHTML = Math.floor((gp / 1000000)) + "M";
    document.getElementById("cWin").innerHTML = win;
    document.getElementById("cLoss").innerHTML = loss;
    document.getElementById("cTotal").innerHTML = total;
    document.getElementById("cRatio").innerHTML = ratio
    
    
    document.getElementById("1").innerHTML = ((bet * 2) / 1000000) + "M";
    document.getElementById("2").innerHTML = ((bet * 4) / 1000000) + "M";
    document.getElementById("3").innerHTML = ((bet * 8) / 1000000) + "M";
    document.getElementById("4").innerHTML = ((bet * 16) / 1000000) + "M";
    document.getElementById("5").innerHTML = ((bet * 32) / 1000000) + "M";
    document.getElementById("6").innerHTML = ((bet * 64) / 1000000) + "M";
    document.getElementById("7").innerHTML = ((bet * 128) / 1000000) + "M";
    document.getElementById("8").innerHTML = ((bet * 256) / 1000000) + "M";
    document.getElementById("9").innerHTML = ((bet * 512) / 1000000) + "M";
    document.getElementById("10").innerHTML = ((bet * 1024) / 1000000) + "M";
    document.getElementById("11").innerHTML = ((bet * 2048) / 1000000) + "M";
    document.getElementById("12").innerHTML = ((bet * 4096) / 1000000) + "M";
})

$("sWin").on("click", function(){
    gp = gp + bet;
    win = win + 1;
    total = total + 1;
    
    console.log( "gp" + gp);
    console.log( "win" + win);
    console.log( "total" + total);
    
    document.getElementById("cGP").innerHTML = Math.floor((gp / 1000000)) + "M";
    document.getElementById("cWin").innerHTML = win;
    document.getElementById("cLoss").innerHTML = loss;
    document.getElementById("cTotal").innerHTML = total;
    document.getElementById("cRatio").innerHTML = ratio
})
$("sLoss").on("click", function(){
    loss = loss + 1;
    total = total + 1;
    
    document.getElementById("cGP").innerHTML = Math.floor((gp / 1000000)) + "M";
    document.getElementById("cWin").innerHTML = win;
    document.getElementById("cLoss").innerHTML = loss;
    document.getElementById("cTotal").innerHTML = total;
    document.getElementById("cRatio").innerHTML = ratio
})