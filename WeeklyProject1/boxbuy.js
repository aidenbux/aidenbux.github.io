/* Aiden B ModLog
Date Created: 8/25/21
Version: 1
Last Modified: 8/27/21
Modified by: Aiden

8/27/21 attempted to add js to the Modal, have simple base added and working

*/

"use strict";

document.getElementById("getBox").addEventListener("click", getInfo);

function getInfo() {
  var boxO = document.getElementById("boxOwner").value;
  var boxC = document.getElementById("boxColor").value;
  alert(boxO + " is now the owner of a " + boxC + " box!");
}


/* const $ = selector => document.querySelector(selector);

const boxList = evt => {
    const boxOwner = $("#boxOwner").value;
    const boxColor = $("#boxColor").value;


//check for error
let isValid = true;
    if (boxOwner == "") {
        $("#boxOwner_error").textContent = "Name is required.";
        isValid = false;
    } else { 
        $("#boxOwner_error").textContent = ""; 
    }
if (boxColor == "") {
    $("#boxColor_error").textContent = "Color is required.";
        isValid = false;
    } else {
        $("#boxColor_error").textContent = "";
    }
    if ( !isValid ) {
        evt.preventDefault(); 
    }
    else (alert(boxOwner + " is now the owner of a " + boxColor + " box."));

}


//Display Box Order
document.addEventListener("DOMContentLoaded", () => {
    $("#getBox").addEventListener("click", getBox);
});
 */