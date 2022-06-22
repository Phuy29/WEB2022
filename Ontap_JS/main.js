const hoTen = prompt("Nhap ho ten:");
const maSo = prompt("Nhap ma so: ");
const diemThi = prompt("Nhap diem thi: ");

const root = document.querySelector(".root");

if (diemThi >= 5) {
  alert("Do");
  root.innerHTML = `Ho ten: ${hoTen} <br> Ma so: ${maSo} <br> Diem thi: ${diemThi}`;
} else if (diemThi < 5) {
  alert("Truot");
}
