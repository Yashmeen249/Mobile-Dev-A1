$(document).ready(function(){

    var Name = document.getElementById("companyName").value;
    var own = document.getElementById("owner").value;
    var em = document.getElementById("email").value;
    var phnNumb = document.getElementById("phoneNumber").value;
    var annSal = document.getElementById("annualSale").value;
    var brrw = document.getElementById("borrowAmt").value;
    var pyTrm = document.getElementById("payTerms").value;

    localStorage.setItem("Name", Name);
    localStorage.setItem("owner",own);
    localStorage.setItem("email",em);
    localStorage.setItem("phoneNum", phnNumb);
    localStorage.setItem("annSale", annSal);
    localStorage.setItem("brwAmt", brrw);
    localStorage.setItem("pyTerm", pyTrm); 
});