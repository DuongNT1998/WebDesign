// app.js
// Demo các selector cơ bản trong jQuery


$(document).ready(function() {
// 1) TagName selector: chọn tất cả thẻ <p>
$('#btnTag').on('click', function() {
// xóa hiệu ứng cũ trước
reset();
$('p').addClass('selector-hit');
console.log('Selected by tag: p ->', $('p').length, 'element(s)');
});


// 2) #identifier selector: chọn phần tử theo id
$('#btnId').on('click', function() {
reset();
$('#unique').addClass('selector-hit');
console.log('Selected by id: #unique');
});


// 3) .className selector: chọn tất cả phần tử có class
$('#btnClass').on('click', function() {
reset();
$('.highlight').addClass('selector-hit');
console.log('Selected by class: .highlight ->', $('.highlight').length, 'element(s)');
});


// 4) Tag.className selector: chọn thẻ cụ thể có class (vd: p.highlight)
$('#btnTagClass').on('click', function() {
reset();
$('p.highlight').addClass('selector-hit');
console.log('Selected by tag.class: p.highlight ->', $('p.highlight').length, 'element(s)');
});


// 5) Universal selector: '*' chọn mọi phần tử
$('#btnAll').on('click', function() {
reset();
$('*').each(function() {
// thêm class khác để dễ phân biệt
$(this).addClass('selector-all');
});
console.log('Selected by universal: *');
});


// Reset button
$('#reset').on('click', reset);


function reset() {
$('.selector-hit').removeClass('selector-hit');
$('.selector-all').removeClass('selector-all');
}
});