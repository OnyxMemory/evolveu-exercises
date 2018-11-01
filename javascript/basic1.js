console.log('hello world from js file');

var count = 0
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function myfunction() {
    console.log("in my function");
    alert("boom");
}

function myfunc2() {
    alert("annoying");
}

function addtodiv() {
    //count++;
    //document.getElementById("newdiv").innerHTML += "<br> Count is now:"+ count;
}

function blankdiv() {
    var current= document.getElementById('circ').getAttribute('cx');
    current = parseInt(current) + 10;
    document.getElementById('circ').setAttribute('cx',current);
}

function calculate() {
    var n1 = document.getElementById('num1').value
    var n2 = document.getElementById('num2').value

    document.getElementById('Calculate').innerHTML = n1*n2;
}

function movecircle() {
    var n1 = document.getElementById('num1').value
    var n2 = document.getElementById('num2').value

    document.getElementById('circ').setAttribute('cx',n1);
    document.getElementById('circ').setAttribute('cy',n2);
}