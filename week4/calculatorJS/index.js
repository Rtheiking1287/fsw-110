function addBy() {
    num1 = document.getElementById("addNumber1").value;
    num2 = document.getElementById("addNumber2").value;
    document.getElementById("result1").innerHTML = num1 + num2;
}

function subtractBy() {
    num1 = document.getElementById("subNumber1").value;
    num2 = document.getElementById("subNumber2").value;
    document.getElementById("result2").innerHTML = num1 - num2;
}

function multiplyBy() {
    num1 = document.getElementById("mulNumber1").value;
    num2 = document.getElementById("mulNumber2").value;
    document.getElementById("result3").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("divNumber1").value;
    num2 = document.getElementById("divNumber2").value;
    document.getElementById("result4").innerHTML = num1 / num2;
}