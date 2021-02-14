$(document).ready(function(){

    $("#header").html(`Assignment 1 / Yashmeen Sharma / 991563921`);
    $("#footer").html(` shayashm / Davis Campus`);

    var companyName = localStorage.getItem("Name");
    var borrowAmt = localStorage.getItem("brrw");
    var payTerms = localStorage.getItem("pyTrm");

    $("#in").html(`Company Name: ${companyName}`);
    $("#brrwAmt").html(`Borrow Amount: ${borrowAmt}`);
    $("#pytrms").html(`Payment Terms: ${payTerms}`);

    var intrst = (parseFloat(borrowAmt) * parseFloat(payTerms) / 12)  * 0.03;
    $("#intrst").html(`Interest: ${intrst}`);

    var pymnt = parseFloat(borrowAmt) + intrst;
    $("#pymnt").html(`Payment: ${pymnt}`);
    
    var prft = pymnt - parseFloat(borrowAmt);
    $("#prft").html(`Profit: ${prft}`);

    var decision = document.getElementById("decision").value;
    
    function toLocalStorage(){
        localStorage.setItem("Interest", intrst.value);
        localStorage.setItem("Payment", pymnt.value);
        localStorage.setItem("profit", prft.value);
        localStorage.setItem("decision", decision);
    }
});