function buttonLoginAlert() {
  const buttonLogin = document.getElementById('button-login');
  const emailPhoneInput = document.getElementById('user-email-phone');
  buttonLogin.addEventListener('click', function () {
    alert(emailPhoneInput.value);
  });
}

buttonLoginAlert();
