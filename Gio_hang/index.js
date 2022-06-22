const deleteBtn = document.querySelectorAll("button");
let sum = document.querySelector(".sum");
const price = document.querySelectorAll(".price");
const buy = document.querySelector(".buy");
const fullname = document.getElementById("fullname");
const phone = document.getElementById("phone");
var tongTien = 0;

function thanhtien(element) {
  let row = element.parentElement.parentElement;
  let arrTd = row.getElementsByTagName("td");
  arrTd[4].firstElementChild.innerText =
    Number(arrTd[2].innerText) * Number(element.value);
}

deleteBtn.forEach((item) => {
  item.onclick = function () {
    this.parentElement.parentElement.remove();
  };
});

buy.onclick = function () {
  price.forEach((item) => {
    tongTien += Number(item.innerText);
  });
  sum.innerText = tongTien;
  tongTien = 0;
  if (fullname.value === "") {
    alert("Vui lòng điền họ tên");
  }
  if (phone.value === "") {
    alert("Vui lòng nhập số điện thoại ");
  } else if (!checkPhone(phone.value)) {
    alert("Số điện thoại ko đúng định dạng");
  }
};

function checkPhone(phone) {
  return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone);
}
