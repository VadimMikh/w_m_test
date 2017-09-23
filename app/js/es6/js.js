$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "treeview.json",
        data: "data",
        dataType: "JSON",
        success: function (response) {
            console.info(response);
        }
    });
});