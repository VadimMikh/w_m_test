"use strict";

$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "treeview.json",
        data: "data",
        dataType: "JSON",
        success: function success(response) {
            console.info(response);
        }
    });
});