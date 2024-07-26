

var bet = 0;
var gp = 0;
var sgp = 0;
var win = 0;
var loss = 0;
var lossStreak = 1;
var total = 0;
var ratio = 0;



$("#stake").on("click", function(){
    console.log("running");
    bet = (parseInt(document.getElementById("bet").value)) * 1000000;
    gp = (parseInt(document.getElementById("gp").value)) * 1000000;
    sgp = (parseInt(document.getElementById("gp").value % 2147)) * 1000000;
    
    document.getElementById("cGP").innerHTML = Math.floor((gp / 1000000)) + "M";
    document.getElementById("cSGP").innerHTML = Math.floor((sgp / 1000000)) + "M";
    document.getElementById("cWin").innerHTML = win;
    document.getElementById("cLoss").innerHTML = loss;
    document.getElementById("cTotal").innerHTML = total;
    document.getElementById("cRatio").innerHTML = parseInt(ratio * 100) + "%";
    
    
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
    sgp = gp % 2147000000;
    win = win + 1;
    total = total + 1;
    ratio = win / total;
    
    lossStreak = 1;
    
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
    document.getElementById("cSGP").innerHTML = Math.floor((sgp / 1000000)) + "M";
    document.getElementById("cWin").innerHTML = win;
    document.getElementById("cLoss").innerHTML = loss;
    document.getElementById("cTotal").innerHTML = total;
    document.getElementById("cRatio").innerHTML = parseInt(ratio * 100) + "%";
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
    document.getElementById("cRatio").innerHTML = parseInt(ratio * 100) + "%";
});


/*========================================================================================================================================*/
var toBody = 0, toHelm = 0, toLegs = 0, toGloves = 0, toBoots = 0, peCowl = 0, peBody = 0, peChaps = 0, peGloves = 0, peBoots = 0, zaBow = 0, viMask = 0, viBody = 0, viLegs = 0, viGloves = 0, viBoots = 0, viWand = 0, viBook = 0, onyxBoltse = 0, grDhide = 0, udragonstone = 0, grA = 0,grDW = 0, grT = 0, maLog = 0, brewRe = 0, restoreBr = 0, maSeed = 0, toSeed = 0, luminites = 0, runites = 0;
var players = 1;

$("#nexstart").on("click", function(){
    players = document.getElementById("nexplayers").value;
    
    $("#nexDrops").removeClass("hide");
    $("#numberofplayers").addClass("hide");
    console.log("is running");
})

$("#tHelm").on("click", function(){
        console.log("toHelm = " + toHelm);

    toHelm = toHelm + 1;
    
    console.log("is running");
    console.log("toHelm = " + toHelm);
    
    document.getElementById("toHelm").innerHTML = toHelm;
})
$("#tBody").on("click", function(){
    toBody = toBody + 1;
    
    console.log("is running");
    
    document.getElementById("toBody").innerHTML = toBody;
})
$("#tLegs").on("click", function(){
    toLegs = toLegs + 1;
    
    console.log("is running");
    
    document.getElementById("toLegs").innerHTML = toLegs;
})
$("#tGloves").on("click", function(){
    toGloves = toGloves + 1;
    
    console.log("is running");
    
    document.getElementById("toGloves").innerHTML = toGloves;
})
$("#tBoots").on("click", function(){
    toBoots = toBoots + 1;
    
    console.log("is running");
    
    document.getElementById("toBoots").innerHTML = toBoots;
})
$("#pCowl").on("click", function(){
    peCowl = peCowl + 1;
    
    console.log("is running");
    
    document.getElementById("peCowl").innerHTML = peCowl;
})
$("#pBody").on("click", function(){
    peBody = peBody + 1;
    
    console.log("is running");
    
    document.getElementById("peBody").innerHTML = peBody;
})
$("#pChaps").on("click", function(){
    peChaps = peChaps + 1;
    
    console.log("is running");
    
    document.getElementById("peChaps").innerHTML = peChaps;
})
$("#pGloves").on("click", function(){
    peGloves = peGloves + 1;
    
    console.log("is running");
    
    document.getElementById("peGloves").innerHTML = peGloves;
})
$("#pBoots").on("click", function(){
    peBoots = peBoots + 1;
    
    console.log("is running");
    
    document.getElementById("peBoots").innerHTML = peBoots;
})
$("#zBow").on("click", function(){
    zaBow = zaBow + 1;
    
    console.log("is running");
    
    document.getElementById("zaBow").innerHTML = zaBow;
})
$("#vMask").on("click", function(){
    viMask = viMask + 1;
    
    console.log("is running");
    
    document.getElementById("viMask").innerHTML = viMask;
})
$("#vTop").on("click", function(){
    viBody = viBody + 1;
    
    console.log("is running");
    
    document.getElementById("viBody").innerHTML = viBody;
})
$("#vLegs").on("click", function(){
    viLegs = viLegs + 1;
    
    console.log("is running");
    
    document.getElementById("viLegs").innerHTML = viLegs;
})
$("#vGloves").on("click", function(){
    viGloves = viGloves + 1;
    
    console.log("is running");
    
    document.getElementById("viGloves").innerHTML = viGloves;
})
$("#vBoots").on("click", function(){
    viBoots = viBoots + 1;
    
    console.log("is running");
    
    document.getElementById("viBoots").innerHTML = viBoots;
})
$("#vWand").on("click", function(){
    viWand = viWand + 1;
    
    console.log("is running");
    
    document.getElementById("viWand").innerHTML = viWand;
})
$("#vBook").on("click", function(){
    viBook = viBook + 1;
    
    console.log("is running");
    
    document.getElementById("viBook").innerHTML = viBook;
})
$("#onyxBolts").on("click", function(){
    onyxBoltse = onyxBoltse + 375;
    
    console.log("is running");
    
    document.getElementById("onyxBoltse").innerHTML = onyxBoltse;
})
$("#gDhide").on("click", function(){
    grDhide = grDhide + 400;
    
    console.log("is running");
    
    document.getElementById("grDhide").innerHTML = grDhide;
})
$("#dragonstone").on("click", function(){
    udragonstone = udragonstone + 20;
    
    console.log("is running");
    
    document.getElementById("udragonstone").innerHTML = udragonstone;
})
$("#gADW").on("click", function(){
    grA = grA + 75;
    grDW = grDW + 75;
    
    console.log("is running");
    
    document.getElementById("grA").innerHTML = grA;
    document.getElementById("grDW").innerHTML = grDW;
})
$("#gT").on("click", function(){
    grT = grT + 40;
    
    console.log("is running");
    
    document.getElementById("grT").innerHTML = grT;
})
$("#mLog").on("click", function(){
    maLog = maLog + 375;
    
    console.log("is running");
    
    document.getElementById("maLog").innerHTML = maLog;
})
$("#brewR").on("click", function(){
    brewRe = brewRe + 30;
    restoreBr = restoreBr + 10;
    
    console.log("is running");
    
    document.getElementById("brewRe").innerHTML = brewRe;
    document.getElementById("restoreBr").innerHTML = restoreBr;
})
$("#restoreB").on("click", function(){
    restoreBr = restoreBr + 30;
    brewRe = brewRe + 10;
    
    console.log("is running");
    
    document.getElementById("restoreBr").innerHTML = restoreBr;
    document.getElementById("brewRe").innerHTML = brewRe;
})
$("#mSeed").on("click", function(){
    maSeed = maSeed + 5;
    
    console.log("is running");
    
    document.getElementById("maSeed").innerHTML = maSeed;
})
$("#tSeed").on("click", function(){
    toSeed = toSeed + 12;
    
    console.log("is running");
    
    document.getElementById("toSeed").innerHTML = toSeed;
})
$("#luminite").on("click", function(){
    luminites = luminites + 80;
    
    console.log("is running");
    
    document.getElementById("luminites").innerHTML = luminites;
})
$("#runite").on("click", function(){
    runites = runites + 80;
    
    console.log("is running");
    
    document.getElementById("runites").innerHTML = runites;
})

$(".nexReset").on("click", function(){
    toBody= 0, toHelm= 0, toLegs= 0, toGloves= 0, toBoots= 0, peCowl= 0, peBody= 0, peChaps= 0, peGloves= 0, peBoots= 0, zaBow= 0, viMask= 0, viBody= 0, viLegs= 0, viGloves= 0, viBoots= 0, viWand= 0, viBook= 0, onyxBoltse= 0, grDhide= 0, udragonstone= 0, grA= 0,grDW = 0, grT= 0, maLog= 0, brewRe= 0, restoreBr= 0, maSeed= 0, toSeed= 0, luminites= 0, runites= 0;
    
    console.log("is running");
    $("#nexDrops").addClass("hide");
    $("#tSplit").addClass("hide");
    $("#numberofplayers").removeClass("hide");
    $("#drops").removeClass("hide");
    
    
    
    
    document.getElementById("toHelm").innerHTML = toHelm;
    document.getElementById("toBody").innerHTML = toBody;
    document.getElementById("toLegs").innerHTML = toLegs;
    document.getElementById("toGloves").innerHTML = toGloves;
    document.getElementById("toBoots").innerHTML = toBoots;
    document.getElementById("peCowl").innerHTML = peCowl;
    document.getElementById("peBody").innerHTML = peBody;
    document.getElementById("peChaps").innerHTML = peChaps;
    document.getElementById("peGloves").innerHTML = peGloves;
    document.getElementById("peBoots").innerHTML = peBoots;
    document.getElementById("zaBow").innerHTML = zaBow;
    document.getElementById("viMask").innerHTML = viMask;
    document.getElementById("viBody").innerHTML = viBody;
    document.getElementById("viLegs").innerHTML = viLegs;
    document.getElementById("viGloves").innerHTML = viGloves;
    document.getElementById("viBoots").innerHTML = viBoots;
    document.getElementById("viWand").innerHTML = viWand;
    document.getElementById("viBook").innerHTML = viBook;
    document.getElementById("onyxBoltse").innerHTML = onyxBoltse;
    document.getElementById("grDhide").innerHTML = grDhide;
    document.getElementById("udragonstone").innerHTML = udragonstone;
    document.getElementById("grA").innerHTML = grA;
    document.getElementById("grDW").innerHTML = grDW;
    document.getElementById("grT").innerHTML = grT;
    document.getElementById("maLog").innerHTML = maLog;
    document.getElementById("brewRe").innerHTML = brewRe;
    document.getElementById("restoreBr").innerHTML = restoreBr;
    document.getElementById("maSeed").innerHTML = maSeed;
    document.getElementById("toSeed").innerHTML = toSeed;
    document.getElementById("luminites").innerHTML = luminites;
    document.getElementById("runites").innerHTML = runites;
})
$("#tsFind").on("click", function(){
    
    console.log("is running");
    $("#drops").addClass("hide");
    $("#tSplit").removeClass("hide");
    
    document.getElementById("tstoHelm").innerHTML = toHelm / players;
    document.getElementById("tstoBody").innerHTML = toBody / players;
    document.getElementById("tstoLegs").innerHTML = toLegs / players;
    document.getElementById("tstoGloves").innerHTML = toGloves / players;
    document.getElementById("tstoBoots").innerHTML = toBoots / players;
    document.getElementById("tspeCowl").innerHTML = peCowl / players;
    document.getElementById("tspeBody").innerHTML = peBody / players;
    document.getElementById("tspeChaps").innerHTML = peChaps / players;
    document.getElementById("tspeGloves").innerHTML = peGloves / players;
    document.getElementById("tspeBoots").innerHTML = peBoots / players;
    document.getElementById("tszaBow").innerHTML = zaBow / players;
    document.getElementById("tsviMask").innerHTML = viMask / players;
    document.getElementById("tsviBody").innerHTML = viBody / players;
    document.getElementById("tsviLegs").innerHTML = viLegs / players;
    document.getElementById("tsviGloves").innerHTML = viGloves / players;
    document.getElementById("tsviBoots").innerHTML = viBoots / players;
    document.getElementById("tsviWand").innerHTML = viWand / players;
    document.getElementById("tsviBook").innerHTML = viBook / players;
    document.getElementById("tsonyxBoltse").innerHTML = onyxBoltse / players;
    document.getElementById("tsgrDhide").innerHTML = grDhide / players;
    document.getElementById("tsudragonstone").innerHTML = udragonstone / players;
    document.getElementById("tsgrA").innerHTML = grA / players;
    document.getElementById("tsgrDW").innerHTML = grDW / players;
    document.getElementById("tsgrT").innerHTML = grT / players;
    document.getElementById("tsmaLog").innerHTML = maLog / players;
    document.getElementById("tsbrewRe").innerHTML = brewRe / players;
    document.getElementById("tsrestoreBr").innerHTML = restoreBr / players;
    document.getElementById("tsmaSeed").innerHTML = maSeed / players;
    document.getElementById("tstoSeed").innerHTML = toSeed / players;
    document.getElementById("tsluminites").innerHTML = luminites / players;
    document.getElementById("tsrunites").innerHTML = runites / players;
})


























//=====================================================
    // timer
var counter = 0;
var timer = 0;

function timeIt(){
    counter++;
    document.getElementById("timer").innerHTML = counter;
}
$("#timerStart").on("click", function(){
    document.getElementById("timer").innerHTML = 0;
    setInterval(timeIt, 1000)
})


