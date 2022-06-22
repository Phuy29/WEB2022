const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.onsubmit = (e) => {
  e.preventDefault();

  checkInput();
};

function checkInput() {
  if (email.value === "") {
    setError(email, "Vui lòng nhập email");
  } else if (!checkEmail(email.value)) {
    setError(email, "Email hoặc số điện thoại sai định dạng");
  } else {
    setSuccess(email);
  }

  if (password.value === "") {
    setError(password, "Vui lòng nhập mật khẩu");
  } else {
    setSuccess(password);
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  const formMessage = formGroup.querySelector(".form-message");

  formMessage.innerText = message;

  input.className = "form-control error";
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  const formMessage = formGroup.querySelector(".form-message");

  formMessage.innerText = "";
  input.className = "form-control success";
}

function checkEmail(email) {
  return (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
    /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(email)
  );
}
