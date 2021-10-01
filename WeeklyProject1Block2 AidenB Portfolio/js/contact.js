//9/30/21 - contact page. added span text content change to indicate error.
"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const nameC = $("#nameC");
    const emailC = $("#emailC");
    const phoneC = $("#phoneC");
    const commentC = $("#commentC");
    var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex
    var validPhoneRegex = /^\d{3}-\d{3}-\d{4}$/; //regex
    let isValid = true;

    if (nameC.value == "") { 
        nameC.nextElementSibling.nextElementSibling.textContent = "Please enter name.";
        nameC.nextElementSibling.textContent = "";
        isValid = false;
    } else {
        nameC.nextElementSibling.textContent = "";
        nameC.nextElementSibling.nextElementSibling.textContent = "";
    }

    if (!emailC.value.match(validEmailRegex)) { //regex
        emailC.nextElementSibling.nextElementSibling.textContent = " Enter your Email in a valid format. ";
        emailC.nextElementSibling.textContent = "";
        isValid = false;
    } else {
        emailC.nextElementSibling.textContent = "";
        emailC.nextElementSibling.nextElementSibling.textContent = "";
        
    }

    if (!phoneC.value.match(validPhoneRegex)) { //regex
        phoneC.nextElementSibling.nextElementSibling.textContent = "Please enter phone # in valid ###-###-#### format.";
        phoneC.nextElementSibling.textContent = "";
        isValid = false;
    } else {
        phoneC.nextElementSibling.textContent = "";
        phoneC.nextElementSibling.nextElementSibling.textContent = "";
    }

    if (commentC.value == "") {
        commentC.nextElementSibling.nextElementSibling.nextElementSibling.textContent = "Please enter comments.";
        commentC.nextElementSibling.nextElementSibling.textContent = "";
        isValid = false;
    }  else {
        commentC.nextElementSibling.nextElementSibling.nextElementSibling.textContent = "";
        commentC.nextElementSibling.nextElementSibling.textContent = "";
    }


    if (isValid == true) {
        $("#contactForm").submit();
        alert("Thank you for your feedback, " + document.getElementById("nameC").value + "!");
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $("#submitForm").addEventListener("click", processEntries);
    $("#reset").addEventListener("click", resetForm);  
    $("#nameC").focus();   
});

const resetForm = () => {
    $("#nameC").value = "";
    nameC.nextElementSibling.textContent = "*";
    nameC.nextElementSibling.nextElementSibling.textContent = "";
    $("#emailC").value = "";
    emailC.nextElementSibling.textContent = "*";
    emailC.nextElementSibling.nextElementSibling.textContent = "";
    $("#phoneC").value = "";
    phoneC.nextElementSibling.textContent = "*";
    phoneC.nextElementSibling.nextElementSibling.textContent = "";
    $("#commentC").value = "";
    commentC.nextElementSibling.nextElementSibling.nextElementSibling.textContent = "";
    commentC.nextElementSibling.nextElementSibling.textContent = "*";
    $("#nameC").focus();
};

