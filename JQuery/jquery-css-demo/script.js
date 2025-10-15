$(document).ready(function() {
    // Nút đổi màu nền
    $("#btnColor").click(function() {
        $("#box").css({
            "background-color": getRandomColor(),
            "color": "#fff"
        });
    });

    // Nút tăng kích thước
    $("#btnSize").click(function() {
        $("#box").animate({
            width: "+=30px",
            height: "+=30px",
            lineHeight: "+=30px"
        }, 300);
    });

    // Nút reset
    $("#btnReset").click(function() {
        $("#box").css({
            "background-color": "#3498db",
            "width": "150px",
            "height": "150px",
            "line-height": "150px"
        });
    });

    // Hàm tạo màu ngẫu nhiên
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
