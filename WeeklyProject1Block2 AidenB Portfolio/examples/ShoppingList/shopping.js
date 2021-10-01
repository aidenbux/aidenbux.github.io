"use strict";

$(document).ready( () => {
    
    $("#addItem").click( () => {
        const textbox = $("#itemName");
        const item = textbox.val();

        if (item === "") {
            alert("Please enter a item.");
            textbox.focus();
        } else {
            let items = localStorage.ExamItems || "";
            localStorage.ExamItems = items.concat(item, "\n");

            textbox.val("");
            $("#shoppingList").val(localStorage.ExamItems);

            textbox.focus();
        }
    });

    $("#deleteItems").click( () => {
        localStorage.removeItem("ExamItems");
        $("#shoppingList").val("");

        $("#itemName").focus();
    });

    $("#shoppingList").val(localStorage.ExamItems);
})