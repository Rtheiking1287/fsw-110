const form = document.myForm

function myFunction() {
    var str1 = document.getElementById("first-name").value;
    var str2 = document.getElementById("last-name").value;
    var str3 = document.getElementById("age").value;
       
    alert ("First name: " + str1 + "\nLast name: " + str2 + "\nAge: " + str3);
}