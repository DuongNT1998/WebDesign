$(document).ready(function() {
  const API_URL = "https://68f8e830deff18f212b800cc.mockapi.io/notes";

  // --- GET: Lấy danh sách ghi chú ---
  $("#loadNotes").click(function() {
    $.ajax({
      url: API_URL,
      type: "GET",
      success: function(data) {
        $("#noteList").empty();
        data.forEach(note => {
          $("#noteList").append(`<li><b>${note.title}</b>: ${note.content}</li>`);
        });
      },
      error: function() {
        alert("Lỗi khi tải dữ liệu!");
      }
    });
  });

  // --- POST: Gửi ghi chú mới ---
  $("#addNote").click(function() {
    const newNote = {
      title: $("#title").val(),
      content: $("#content").val(),
      done: false,
      createdAt: new Date().toISOString()
    };

    $.ajax({
      url: API_URL,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(newNote),
      success: function(note) {
        alert("Đã thêm ghi chú mới!");
        $("#noteList").append(`<li><b>${note.title}</b>: ${note.content}</li>`);
      },
      error: function() {
        alert("Không thể thêm ghi chú!");
      }
    });
  });
});
