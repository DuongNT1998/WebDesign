$(document).ready(function() {
  const API_URL = "https://68f97a67ef8b2e621e7c2f1b.mockapi.io/Notes";

  // --- GET: Lấy danh sách ghi chú ---
  $("#loadNotes").click(function() {
    $.ajax({
      url: API_URL,
      type: "GET",
      success: function(data) {
        $("#noteList").empty();
        $("#noteList").append(`<tr>
<th>Tên công việc</th>
<th>Nội dung</th>
<th>Ngày tạo</th>
<th>Trạng thái</th>
    </tr>`);
        data.forEach(note => {
          $("#noteList").append(`<tr><td><b>${note.title}</b></td><td>${note.content}</td><td><b>${note.createdAt}</b></td><td><b>${note.done}</b></td></tr>`);
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
