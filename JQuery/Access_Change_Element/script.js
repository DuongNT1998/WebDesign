$(document).ready(function () {
    // Khi nhấn nút "Thay đổi nội dung"
    $("#btnChange").click(function () {
        let newContent = $("#newText").val(); // Lấy nội dung người dùng nhập
        if (newContent.trim() !== "") {
            $("#intro").text(newContent); // Thay đổi nội dung của <p>
            $("#infoText").html(`<b>Đã cập nhật nội dung:</b> "${newContent}"`);
            $("#newText").val(""); // Xóa input
        } else {
            $("#infoText").text("Vui lòng nhập nội dung mới trước khi thay đổi.");
        }
    });

    // Khi nhấn nút "Đặt lại"
    $("#btnReset").click(function () {
        $("#intro").text("Đây là đoạn văn bản ban đầu.");
        $("#infoText").text("Nội dung đã được đặt lại.");
    });

    // Khi rê chuột lên tiêu đề
    $("#main-title").hover(
        function () {
            $(this).css("color", "#007BFF").text("Bạn vừa rê chuột lên tôi!");
        },
        function () {
            $(this).css("color", "black").text("Xin chào, jQuery!");
        }
    );
});
