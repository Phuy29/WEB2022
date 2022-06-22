const menu = document.querySelector(".menu");
const toggleBtn = document.querySelector(".toggleBtn");
console.log(toggleBtn);

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("is-show");
});

const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const organization = document.getElementById("organization");

form.onsubmit = function (e) {
  e.preventDefault();

  checkInput();
};

function checkInput() {
  var fullnameValue = fullname.value.trim();
  var emailValue = email.value.trim();
  var phoneValue = phone.value.trim();
  var organizationValue = organization.value.trim();

  if (fullnameValue === "") {
    setError(fullname, "Vui lòng nhập tên");
  } else {
    setSuccess(fullname);
  }

  if (emailValue === "") {
    setError(email, "Vui lòng nhập email");
  } else if (!isEmail(emailValue)) {
    setError(email, "Email sai định dạng");
  } else {
    setSuccess(email);
  }

  if (phoneValue === "") {
    setError(phone, "Vui lòng nhập sdt");
  } else if (!isPhone(phoneValue)) {
    setError(phone, "Số điện thoại phai là số");
  } else {
    setSuccess(phone);
  }

  if (organizationValue === "") {
    setError(organization, "Vui lòng nhập trường trên");
  } else {
    setSuccess(organization);
  }
}

function setSuccess(input) {
  var formGroup = input.parentElement;
  var formMessage = formGroup.querySelector(".form-message");

  formMessage.innerText = "";
}

function setError(input, message) {
  var formGroup = input.parentElement;
  var formMessage = formGroup.querySelector(".form-message");

  formMessage.innerText = message;
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function isPhone(phone) {
  return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone);
}

const video = document.querySelector(".video");
const playBtn = document.querySelector(".playBtn");
const closeBtn = document.querySelector(".closeBtn");
const myVideo = document.querySelector(".myVideo");

closeBtn.addEventListener("click", () => {
  video.style.display = "none";
  myVideo.pause();
});

playBtn.addEventListener("click", () => {
  video.style.display = "block";
  myVideo.play();
});
