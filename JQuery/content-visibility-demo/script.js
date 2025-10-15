$(document).ready(function() {

    // Lọc nội dung theo từ khóa (dùng :contains)
    $("#searchBox").on("keyup", function() {
        var keyword = $(this).val().toLowerCase();

        $("#productList li").each(function() {
            var text = $(this).text().toLowerCase();
            if (text.includes(keyword)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Hiển thị tất cả phần tử
    $("#showAllBtn").click(function() {
        $("#productList li").show();
    });

    // Ẩn các phần tử trống (visibility filter: :empty)
    $("#hideEmptyBtn").click(function() {
        $("#productList li:empty").addClass("hidden");
    });

    //  Khi người dùng click vào sản phẩm, toggle highlight
    $("#productList").on("click", "li:visible", function() {
        $(this).toggleClass("selected");
    });

});
