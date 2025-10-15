$(document).ready(function () {
    const box = $("#box");
    const info = $("#info");

    // Khi di chuột vào box
    box.mouseenter(function () {
        $(this).css("background-color", "#2196F3");
        info.text("Sự kiện: mouseenter – Bạn vừa di chuột vào hộp!");
    });

    // Khi rời chuột khỏi box
    box.mouseleave(function () {
        $(this).css("background-color", "#4CAF50");
        info.text("Sự kiện: mouseleave – Chuột đã rời khỏi hộp!");
    });

    // Khi click chuột vào box
    box.click(function () {
        $(this).css("background-color", "#E91E63");
        info.text("Sự kiện: click – Bạn vừa click vào hộp!");
    });

    // Khi nhấn giữ chuột
    box.mousedown(function () {
        info.text("Sự kiện: mousedown – Đang nhấn giữ chuột!");
    });

    // Khi thả chuột
    box.mouseup(function () {
        info.text("Sự kiện: mouseup – Chuột vừa được thả ra!");
    });

    // Khi di chuyển chuột bên trong box
    box.mousemove(function (event) {
        info.text(`Sự kiện: mousemove – Vị trí: (${event.pageX}, ${event.pageY})`);
    });
});
