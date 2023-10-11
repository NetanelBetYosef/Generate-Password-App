const passwordInput = document.getElementById("password");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";
const all = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (12 > password.length) {
    password += all[Math.floor(Math.random() * all.length)];
  }

  passwordInput.value = password;
  copyPassword(password)
}

function copyPassword(password) {
  const copy = document.getElementById("copy");
  copy.addEventListener("click", () => {
    const copied = password;
    navigator.clipboard.writeText(copied);
    passwordInput.value = "";
  });
}