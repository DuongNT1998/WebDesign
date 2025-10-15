$(document).ready(function() {
  const input = $("#inputBox");
  const keyName = $("#keyName");
  const keyCode = $("#keyCode");
  const keyStatus = $("#keyStatus");

  // Khi nhấn phím xuống
  input.keydown(function(e) {
    keyStatus.text("Key Down ⬇️");
    keyName.text(e.key);
    keyCode.text(e.keyCode);
  });

  // Khi giữ phím (liên tục)
  input.keypress(function(e) {
    keyStatus.text("Key Pressing ⌨️");
  });

  // Khi thả phím ra
  input.keyup(function(e) {
    keyStatus.text("Key Up ⬆️");
  });
});
