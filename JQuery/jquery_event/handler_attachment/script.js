$(document).ready(function () {
  // 1️⃣ Gắn sự kiện bằng .on()
  $('#btnClick').on('click', function () {
    $('#output').text('Bạn vừa bấm nút!');
  });

  // 2️⃣ Gắn sự kiện cho input
  $('#txtInput').on('keyup', function () {
    let text = $(this).val();
    $('#output').text('Bạn nhập: ' + text);
  });

  // 3️⃣ Gắn sự kiện động cho phần tử được thêm sau này
  $('#addBox').on('click', function () {
    let newBox = $('<div class="colorBox"></div>');
    $('#boxArea').append(newBox);
  });

  // 4️⃣ Event delegation: xử lý sự kiện click trên box mới thêm
  $('#boxArea').on('click', '.colorBox', function () {
    $(this).css('background-color', getRandomColor());
  });

  // Hàm sinh màu ngẫu nhiên
  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
});
