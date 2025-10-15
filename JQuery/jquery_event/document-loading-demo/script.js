// Cách 1: Dùng $(document).ready()
$(document).ready(function () {
  $("#status").text("Tài liệu đã sẵn sàng!");

  $("#btnChangeColor").click(function () {
    $("h1").css("color", "crimson");
  });
});

// Cách 2: Viết ngắn gọn hơn - tương đương với $(document).ready()
$(function () {
  console.log("DOM đã tải xong và sẵn sàng sử dụng!");
});
