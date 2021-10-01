"use strict";
//9/10/21- separated this code from the Email and contact forms. -AidenB
//9/17/21- fixed spelling errors. -AidenB

$(document).ready( () => 
            $("#accordion").accordion({ 
                event: "click",
                heightStyle: "content",
                collapsible: true,
                active: false
            })
        )

document.getElementById("getBox").addEventListener("click", getInfo);

//BOX BUYING

function getInfo() {
  var boxO = document.getElementById("boxOwner").value;
  var boxC = document.getElementById("boxColor").value;
  let isValid = true;

  if (boxO == ("")) {
    isValid = false;
    alert("First name is required.\n");
  } else if (boxC == ("")) {
    isValid = false;
    alert("You need to add a box color!");
  } else if (boxO == ("") && boxC == ("")) {
    isValid = false;
    alert("You need to add a box name and color!");
  }
    

  if (isValid == true) {
    alert(boxO + " is now the owner of a " + boxC + " box!");
  }
}


