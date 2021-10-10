function buttonLoginAlert() {
  const buttonLogin = document.getElementById('button-login');
  const emailPhoneInput = document.getElementById('user-email-phone');
  buttonLogin.addEventListener('click', () => {
    alert(emailPhoneInput.value);
  });
}

function selectInputDays() {
  const selectDays = document.getElementById('birthdate-days');
  for (let i = 1; i <= 31; i += 1) {
    const newOption = document.createElement('option');
    newOption.innerHTML = i;
    selectDays.appendChild(newOption);
  }
}

function selectInputMonths() {
  const selectMonths = document.getElementById('birthdate-months');
  for (let i = 1; i <= 12; i += 1) {
    const newOption = document.createElement('option');
    newOption.innerHTML = i;
    selectMonths.appendChild(newOption);
  }
}

function selectInputYears() {
  const selectYears = document.getElementById('birthdate-years');
  for (let i = 1950; i <= 2021; i += 1) {
    const newOption = document.createElement('option');
    newOption.innerHTML = i;
    selectYears.appendChild(newOption);
  }
}

selectInputDays();
selectInputMonths();
selectInputYears();

buttonLoginAlert();
