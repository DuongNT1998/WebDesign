$(document).ready(function () {
  // Khi nhập vào ô username
  $("#username").on("focus", function () {
    $(this).css("border-color", "#007bff");
  });

  $("#username").on("blur", function () {
    $(this).css("border-color", "#ccc");
  });

  // Khi nhập dữ liệu trong email
  $("#email").on("input", function () {
    $("#message").text("Bạn đang nhập email...").css("color", "orange");
  });

  // Khi thay đổi mật khẩu
  $("#password").on("change", function () {
    $("#message").text("Mật khẩu đã được thay đổi!").css("color", "blue");
  });

  // Khi form được submit
  $("#registerForm").on("submit", function (e) {
    e.preventDefault(); // Ngăn gửi form thật

    const username = $("#username").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();

    if (password.length < 6) {
      $("#message").text("Mật khẩu quá ngắn!").css("color", "red");
    } else {
      $("#message").text(`Chào ${username}! Đăng ký thành công!`).css("color", "green");
      $(this).trigger("reset");
    }
  });
});
