/* Aiden B ModLog
Date Created: 8/25/21
Version: 1
Last Modified: 8/27/21
Modified by: Aiden

8/27/21 attempted to add js to the Modal, have simple base added and working
9/3/21 redid js, moved former to discard. Added FAQ elements, 
*/
"use strict";

document.getElementById("getBox").addEventListener("click", getInfo);

//BOX BUYING

function getInfo() {
  var boxO = document.getElementById("boxOwner").value;
  var boxC = document.getElementById("boxColor").value;
  alert(boxO + " is now the owner of a " + boxC + " box!");
}

//DROP DOWNS

function changeClass1() {
  var element = document.getElementById("barItem1");
  element.classList.toggle("barItemOpen");
  var element2 = document.getElementById("barDesc1");
  element2.classList.toggle("barDescOpen");
}

function changeClass2() {
  var element = document.getElementById("barItem2");
  element.classList.toggle("barItemOpen");
  var element2 = document.getElementById("barDesc2");
  element2.classList.toggle("barDescOpen");
}

function changeClass3() {
  var element = document.getElementById("barItem3");
  element.classList.toggle("barItemOpen");
  var element2 = document.getElementById("barDesc3");
  element2.classList.toggle("barDescOpen");
}

//EMAIL GRAB

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
  $("#subscribe").addEventListener("click", () => {
      //textbox values
      const email1 = $("#email_1").value;
      const email2 = $("#email_2").value;
      const firstName = $("#first_name").value;
  
      //errors
      let errorMessage = "";

      if (email1 == "") { 
          errorMessage += "First email is required.\n";
      }
  
      if (email2 == "") { 
          errorMessage += "Second email is required.\n";
      }
  
      if (email1 != email2) { 
          errorMessage += "Both emails must match.\n";
      }
  
      if (firstName == "") {
          errorMessage += "First name is required.\n";
      }
  
      //submit
      if (errorMessage == "") {
          $("#email_form").submit();
          alert("You are on the mailing list!")
      } else {
          alert(errorMessage);            
      }
  });

  $("#clear_form").addEventListener("click", () => {
      $("#email_1").value = "";
      $("#email_2").value = "";
      $("#first_name").value = "";

      $("#email_1").focus();
  });
  
  $("#email_1").focus();
  
//Contact


    
$("#submitForm").addEventListener("click", () => {
    const nameC = $("#nameC");
    const emailC = $("#emailC");
    const commentC = $("#commentC");
    let isValid = true;

    if (nameC.value == "") { 
        nameC.nextElementSibling.textContent = "Please enter name.";
        isValid = false;
    }

    if (emailC.value == "") { 
        emailC.nextElementSibling.textContent = "Please enter email.";
        isValid = false;
    }

    if (commentC.value == "") {
        commentC.nextElementSibling.textContent = "Please enter comments.";
        isValid = false;
    }


    if (isValid) {
        $("#contactForm").submit();
        alert("Thank you for your feedback!")
    }
});

$("#reset").addEventListener("click", () => {
    $("#nameC").value = "";
    $("#emailC").value = "";
    $("#commentC").value = "";

    $("#nameC").focus();
});

$("#nameC").focus();

});


