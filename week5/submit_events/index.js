const form = document.myForm;


function myFunction() {
    var str1 = document.getElementById("name").value;
    var str2 = document.getElementById("mail").value;
    var str3 = document.getElementById("msg").value;
    alert ("Name: " + str1 + "\nEmail: " + str2 + "\nMessage: " + str3);
}