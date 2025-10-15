$(document).ready(function() {

  // 1️⃣ Click Event
  $("#btnClick").on("click", function() {
    alert("Bạn vừa click vào nút!");
  });

  // 2️⃣ Hover Event
  $("#hoverBox").hover(
    function() { $(this).css("background-color", "lightgreen").text("Đang hover!"); },
    function() { $(this).css("background-color", "lightblue").text("Hover vào đây"); }
  );

  // 3️⃣ Focus & Blur Event
  $("#textInput").on("focus", function() {
    $(this).css("background-color", "#ffffcc");
  });
  $("#textInput").on("blur", function() {
    $(this).css("background-color", "white");
  });

  // 4️⃣ Keyup Event
  $("#textInput").on("keyup", function() {
    console.log("Bạn gõ: " + $(this).val());
  });

  // 5️⃣ Scroll Event
  $("#scrollBox").on("scroll", function() {
    console.log("Đang cuộn trong khung...");
  });

  // 6️⃣ Resize Event
  function updateSize() {
    $("#resizeInfo span").text($(window).width() + " x " + $(window).height());
  }
  $(window).on("resize", updateSize);
  updateSize(); // Cập nhật lần đầu

});
