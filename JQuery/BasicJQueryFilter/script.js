$(document).ready(function() {

    // Hàm reset lại tất cả phần tử
    function resetList() {
        $("#myList li").removeClass("highlight");
    }

    // Lọc phần tử đầu tiên
    $("#btnFirst").click(function() {
        resetList();
        $("#myList li:first").addClass("highlight");
    });

    // Lọc phần tử cuối cùng
    $("#btnLast").click(function() {
        resetList();
        $("#myList li:last").addClass("highlight");
    });

    // Lọc phần tử chẵn (index 0, 2, 4, ...)
    $("#btnEven").click(function() {
        resetList();
        $("#myList li:even").addClass("highlight");
    });

    // Lọc phần tử lẻ (index 1, 3, 5, ...)
    $("#btnOdd").click(function() {
        resetList();
        $("#myList li:odd").addClass("highlight");
    });

    // Reset
    $("#btnReset").click(function() {
        resetList();
    });
});
