function onn() {
    
    document.getElementById("q").style.display = "block";
    document.getElementById("hed").style.display = "none";
    $("#q").text(10)
    document.getElementById("ror").style.display = "block";
    document.getElementById("ror").classList.add("vf")
    document.getElementById("hed").classList.add("vf")
    gog1()

}
function fo()
{
    kok1()
}

fo()

function toot() {
    document.location.replace('index.html')
}
function gog1() {
    $("#q").text(9)
    setTimeout(gog2,1000)
}
function gog2() {
    $("#q").text(8)
    setTimeout(gog3, 1000)
}
function gog3() {
    $("#q").text(7)
    setTimeout(gog4,1000)
}
function gog4() {
    $("#q").text(6)
    setTimeout(gog5,1000)
}
function gog5() {
    $("#q").text(5)
    setTimeout(gog6,1000)
}
function gog6() {
    $("#q").text(4)
    setTimeout(gog7,1000);
}
function gog7() {
    $("#q").text(3)
    setTimeout(gog8,1000)
}
function gog8() {
    $("#q").text(2)
    setTimeout(gog9,1000)
}
function gog9() {
    $("#q").text(1)
    setTimeout(gog10,1000)
}
function gog10() {
    toot();
}



function f() {
    document.location.replace("home2.html")
}

function g() {
    document.getElementById("gt").style.display = "none";
    document.getElementById("b").style.display = "none";
    koo1()

}

function kok1() {
    $("#q").text("Н ")
    setTimeout(kok2,1000)
}
function kok2() {
    $("#b").text("Н ")
    setTimeout(kok3, 400)
}
function kok3() {
    $("#b").text("Не ")
    setTimeout(kok4,400)
}
function kok4() {
    $("#b").text("Нет ")
    setTimeout(kok4,400)
}


function koo1() {
    $("#bl").text("Вот ")
    setTimeout(koo2,400)
}
function koo2() {
    $("#bl").text("Вот ето")
    setTimeout(koo3, 400)
}
function koo3() {
    $("#bl").text("Вот ето твой")
    setTimeout(koo4,400)
}
function koo4() {
    $("#bl").text("Вот ето твой подарок")
    setTimeout(koo4,400)
    document.getElementById("bl").style.color = "red";
    document.getElementById("v").classList.add("vf")
    document.getElementById("v").style.backgroundColor = "red";
   
    //document.getElementById("q").style.display = "block";
    document.getElementById("hed").style.display = "block";
    
}
function ioi() {
    document.getElementById("ioio").style.display = "block";
    alert("держи :)")
}