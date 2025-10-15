// main.js
$(document).ready(function () {
  const $list = $('#product-list');
  const $log = $('#log');

  function writeLog(text) {
    const time = new Date().toLocaleTimeString();
    $log.text(`[${time}] ${text}\n` + $log.text());
  }

  // 1) Duyệt qua từng element (each)
  $('#btn-iterate').on('click', function () {
    writeLog('Bắt đầu duyệt danh sách sản phẩm:');
    $('#product-list .product').each(function (index, el) {
      // 'this' is the native element; wrap it as jQuery
      const $el = $(this);
      const id = $el.data('id');
      const name = $el.find('.name').text();
      const price = Number($el.find('.price').text());
      writeLog(`  #${index} id=${id} name="${name}" price=${price}`);
    });
  });

  // 2) Tô màu các sản phẩm ở vị trí chẵn (0-based index chẵn)
  $('#btn-highlight').on('click', function () {
    $('#product-list .product').removeClass('highlight');
    $('#product-list .product').each(function (i) {
      if (i % 2 === 0) $(this).addClass('highlight');
    });
    writeLog('Đã tô màu các sản phẩm có index chẵn.');
  });

  // 3) Dùng .filter() để tìm sản phẩm > 400k và đánh dấu
  $('#btn-find-expensive').on('click', function () {
    $('#product-list .product').removeClass('expensive');
    const expensive = $('#product-list .product').filter(function () {
      const price = Number($(this).find('.price').text());
      return price > 400000;
    });
    expensive.addClass('expensive');
    writeLog(`Tìm thấy ${expensive.length} sản phẩm > 400000 và đã đánh dấu.`);
  });

  // 4) Dùng children() và contents()
  $('#btn-children').on('click', function () {
    const childrenCount = $list.children().length; // li elements
    writeLog(`UL có ${childrenCount} children li.`);
    $list.children().each(function (i) {
      const $li = $(this);
      writeLog(`  child[${i}] data-id=${$li.data('id')} text="${$li.text().trim()}"`);
    });
  });

  // 5) Dùng siblings() / next() / prev()
  $('#btn-siblings').on('click', function () {
    const $target = $('#product-list .product').filter(function () {
      return $(this).data('id') == 102;
    });

    const siblings = $target.siblings('.product');
    writeLog(`Số siblings của item id=102: ${siblings.length}`);
    siblings.each(function (i) {
      writeLog(`  sibling[${i}] id=${$(this).data('id')} text="${$(this).text().trim()}"`);
    });

    // next / prev examples
    const $next = $target.next('.product');
    const $prev = $target.prev('.product');
    writeLog(`Prev: ${$prev.length ? $prev.data('id') : 'none'} | Next: ${$next.length ? $next.data('id') : 'none'}`);
  });

  // 6) Dùng find() để truy vấn sâu và wrap tên bằng <strong>
  $('#btn-wrap').on('click', function () {
    $('#product-list .product .name').each(function () {
      // chỉ wrap nếu chưa có strong
      if ($(this).children('strong').length === 0) {
        $(this).wrapInner('<strong></strong>');
      }
    });
    writeLog('Đã bọc tên sản phẩm bằng <strong>.');
  });

  // Extra: click vào 1 item để hiển thị thông tin chi tiết
  $('#product-list').on('click', '.product', function () {
    const $p = $(this);
    const id = $p.data('id');
    const name = $p.find('.name').text();
    const price = $p.find('.price').text();
    writeLog(`Click item -> id=${id}, name="${name}", price=${price}`);
  });
});
