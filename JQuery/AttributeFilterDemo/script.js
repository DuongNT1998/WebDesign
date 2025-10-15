$(document).ready(function() {

    // Hiện tất cả
    $("#all").click(function() {
        $("img").show();
    });

    // Lọc các ảnh có thuộc tính title
    $("#hasTitle").click(function() {
        $("img").hide();
        $("img[title]").show(); // chọn ảnh có thuộc tính title
    });

    // Lọc các ảnh không có thuộc tính alt
    $("#noAlt").click(function() {
        $("img").hide();
        $("img:not([alt])").show(); // chọn ảnh không có thuộc tính alt
    });

    // Lọc các ảnh có data-price > 50
    $("#priceOver50").click(function() {
        $("img").hide();
        $("img").filter(function() {
            return $(this).data("price") > 50;
        }).show();
    });
});
