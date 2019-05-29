

var bet = 0;
var gp = 0;
var win = 0;
var loss = 0;
var lossStreak = 1;
var total = 0;
var ratio = 0;



$("#stake").on("click", function(){
    console.log("running");
    bet = (parseInt(document.getElementById("bet").value)) * 1000000;
    gp = (parseInt(document.getElementById("gp").value)) * 1000000;
    
    console.log( "gp" + gp);
    console.log( "bet" + bet);
    
    document.getElementById("cGP").innerHTML = Math.floor((gp / 1000000)) + "M";
    document.getElementById("cWin").innerHTML = win;
    document.getElementById("cLoss").innerHTML = loss;
    document.getElementById("cTotal").innerHTML = total;
    document.getElementById("cRatio").innerHTML = parseInt(ratio) + "%";
    
    
    document.getElementById("1").innerHTML = ((bet) / 1000000) + "M";
    document.getElementById("2").innerHTML = ((bet * 2) / 1000000) + "M";
    document.getElementById("3").innerHTML = ((bet * 4) / 1000000) + "M";
    document.getElementById("4").innerHTML = ((bet * 8) / 1000000) + "M";
    document.getElementById("5").innerHTML = ((bet * 16) / 1000000) + "M";
    document.getElementById("6").innerHTML = ((bet * 32) / 1000000) + "M";
    document.getElementById("7").innerHTML = ((bet * 64) / 1000000) + "M";
    document.getElementById("8").innerHTML = ((bet * 128) / 1000000) + "M";
    document.getElementById("9").innerHTML = ((bet * 256) / 1000000) + "M";
    document.getElementById("10").innerHTML = ((bet * 512) / 1000000) + "M";
    document.getElementById("11").innerHTML = ((bet * 1024) / 1000000) + "M";
    document.getElementById("12").innerHTML = ((bet * 2048) / 1000000) + "M";
    
});

$("#sWin").on("click", function(){
    console.log("win is running0");
    gp = gp + bet;
    win = win + 1;
    total = total + 1;
    ratio = win / total;
    
    lossStreak = 1;
    
    console.log( "gp" + gp);
    console.log( "win" + win);
    console.log( "total" + total);
    
    $("#1").addClass("active1");
    $("#2").removeClass("active");
    $("#3").removeClass("active");
    $("#4").removeClass("active");
    $("#5").removeClass("active");
    $("#6").removeClass("active");
    $("#7").removeClass("active");
    $("#8").removeClass("active");
    $("#9").removeClass("active");
    $("#10").removeClass("active");
    $("#11").removeClass("active");
    $("#12").removeClass("active");
    
    document.getElementById("cGP").innerHTML = Math.floor((gp / 1000000)) + "M";
    document.getElementById("cWin").innerHTML = win;
    document.getElementById("cLoss").innerHTML = loss;
    document.getElementById("cTotal").innerHTML = total;
    document.getElementById("cRatio").innerHTML = parseInt(ratio) + "%";
});

$("#sLoss").on("click", function(){
    loss = loss + 1;
    total = total + 1;
    lossStreak = lossStreak + 1;
    ratio = win / total;
    
    if(lossStreak === 1){
        $("#1").addClass("active");
    }else if(lossStreak === 2){
        $("#1").removeClass("active1");
        $("#2").addClass("active");
    }else if(lossStreak === 3){
        $("#2").removeClass("active");
        $("#3").addClass("active");
    }else if(lossStreak === 4){
        $("#3").removeClass("active");
        $("#4").addClass("active");
    }else if(lossStreak === 5){
        $("#4").removeClass("active");
        $("#5").addClass("active");
    }else if(lossStreak === 6){
        $("#5").removeClass("active");
        $("#6").addClass("active");
    }else if(lossStreak === 7){
        $("#6").removeClass("active");
        $("#7").addClass("active");
    }else if(lossStreak === 8){
        $("#7").removeClass("active");
        $("#8").addClass("active");
    }else if(lossStreak === 9){
        $("#8").removeClass("active");
        $("#9").addClass("active");
    }else if(lossStreak === 10){
        $("#9").removeClass("active");
        $("#10").addClass("active");
    }else if(lossStreak === 11){
        $("#10").removeClass("active");
        $("#11").addClass("active");
    }else if(lossStreak === 12){
        $("#11").removeClass("active");
        $("#12").addClass("active");
    }
    
    document.getElementById("cGP").innerHTML = Math.floor((gp / 1000000)) + "M";
    document.getElementById("cWin").innerHTML = win;
    document.getElementById("cLoss").innerHTML = loss;
    document.getElementById("cTotal").innerHTML = total;
    document.getElementById("cRatio").innerHTML = parseInt(ratio) + "%";
});
