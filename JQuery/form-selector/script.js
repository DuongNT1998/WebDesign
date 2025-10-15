$(document).ready(function () {

    // :input — chọn tất cả input, textarea, select, button
    $("form :input").css("border", "1px solid #aaa");

    // :text
    $(":text").focus(function () {
        $(this).css("border-color", "blue");
    }).blur(function () {
        $(this).css("border-color", "#aaa");
    });

    // :password
    $(":password").hover(function () {
        $(this).css("background", "#f0f8ff");
    }, function () {
        $(this).css("background", "white");
    });

    // :radio
    $(":radio").change(function () {
        $("#result").append("<p>Bạn chọn giới tính: " + $(this).val() + "</p>");
    });

    // :checkbox
    $(":checkbox").change(function () {
        let hobbies = [];
        $(":checkbox:checked").each(function () {
            hobbies.push($(this).val());
        });
        $("#result").html("<p>Sở thích: " + hobbies.join(", ") + "</p>");
    });

    // :file
    $(":file").change(function () {
        $("#result").html("<p>Đã chọn file: " + $(this).val().split("\\").pop() + "</p>");
    });

    // :submit
    $(":submit").click(function (e) {
        e.preventDefault();
        $("#result").append("<p>Bạn đã nhấn Submit</p>");
    });

    // :reset
    $(":reset").click(function () {
        $("#result").html("<p>Form đã được reset.</p>");
    });

    // :image
    $(":image").click(function (e) {
        e.preventDefault();
        $("#result").append("<p>Ảnh submit được nhấn!</p>");
    });

    // :button
    $(":button").click(function () {
        $("#result").append("<p>Bạn vừa nhấn nút thường.</p>");
    });

});
