"use strict";



document.getElementById("gaw").textContent = "gaw theory";
document.getElementById("li magal gaw 7aba f zaw").textContent = "Li magal gaw 7aba f zaw";


let username;

document.getElementById("username").onclick = function() {
    username = document.getElementById("username").value;
    document.getElementById("p1").textContent = `Welcome, ${username}!`;

}