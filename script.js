
let length = prompt("Nhap vao chieu dai hinh chu nhat" );
let width = prompt("Nhap vao chieu rong hinh chu nhat" );
let peripheral = (+length + +width) * 2;
let acreage = length * width;
let messenger = `<pre>Chieu dai la: ${length}
Chieu rong la: ${width}
Chu vi hinh chu nhat la: ${peripheral}
Dien tich hinh chu nhat la: ${acreage}</pre>`
document.write(messenger);

