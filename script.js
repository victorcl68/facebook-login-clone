function buttonLoginAlert() {
  let buttonLogin = document.getElementById('button-login');
  let emailPhoneInput = document.getElementById('user-email-phone');
  buttonLogin.addEventListener('click', function() {
    alert(emailPhoneInput.value);
  })
}

buttonLoginAlert();
