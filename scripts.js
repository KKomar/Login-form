var name = document.getElementById("name");
var surname = document.getElementById("surname");

function makeColor() {
    if (document.getElementById("name").value === "Iliana" && document.getElementById("surname").value === "Mykhailiuk") {
        document.getElementById("name").style.background = "green";
        document.getElementById("surname").style.background = "green";
        return false;
    } else if (document.getElementById("name").value === "Vasyl" && document.getElementById("surname").value === "Dovhan") {
        document.getElementById("name").style.background = "red";
        document.getElementById("surname").style.background = "red";
        return false;
    } else {
        document.getElementById("name").style.background = "blue";
        document.getElementById("surname").style.background = "blue";
        var wrongName = document.createTextNode("Wrong name");
        document.getElementById("wrong-name").appendChild(wrongName);
        return false;
    }
}


var rainbowWrap = document.getElementsByClassName("rainbow");
var rainbow = document.getElementsByClassName("rainbow-item");

function makeRainbow() {
    for (var i = 0; i < rainbow.length; i++) {
        if (i < rainbow.length - 1) {
            rainbow[i].appendChild(rainbow[i + 1]);
        }
        rainbow[i].style.position = "relative";
        rainbow[i].style.top = "50px";
    }
}


var arr = ["Cat", "Dog", "Lion", "Tiger", "Snake", "Horse"];
var upper = [];
var slash = [];

arr.map(function (el, i, arr) {
   if (i < arr.length / 2) {
       upper[i] = arr[i].toUpperCase();
   }
   else {
       slash[i] = "/" + el + "/";
   }
});

document.write(upper + "<br>" + slash);