function alertLogin() {
  alert('Dados inválidos');
}

const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', alertLogin);

function criaCampoGenero(e) {
  const input = document.querySelector('.input-gender');
  if (e.target.id === 'personalized') {
    input.type = 'text';
  } else {
    input.type = 'hidden'
  };
};

const radios = document.querySelectorAll('.radio');

for (let index = 0; index < radios.length; index += 1) {
  radios[index].addEventListener('change', criaCampoGenero);
}

const alertText = document.createElement('p');
alertText.innerText = 'Campos inválidos';

const buttonRegister = document.querySelector('#facebook-register');

function validateForm() {
  const list = document.querySelectorAll('.right-content input');
  for (let index = 0; index < list.length-1; index += 1) {
    if (list[index].value === '') {
      return false;
    }
  }
  return true;
}

function renderRightContent() {
  const rightContent = document.querySelector('.right-content');
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('phone_email').value;
  const birthDate = document.getElementById('birthdate').value;
  const radioButtons = document.querySelectorAll('.radio');
  let selectedRadio = '';
  for (let index = 0; index < radioButtons.length; index += 1) {
    if (radioButtons[index].checked === true) {
      selectedRadio = radioButtons[index].value;
    }
  }
  rightContent.innerHTML = '';
  rightContent.innerHTML = `<br>Olá, ${firstName} ${lastName},
  o email ou telefone cadastrado é: ${email} 
  e a data de nascimento é ${birthDate} 
  e o seu gênero é ${selectedRadio}.`;
}
function changeRightContent(evt) {
  if (!validateForm()) {
    document.querySelector('#formMain').appendChild(alertText);
  } else {
    renderRightContent();
  }
  evt.preventDefault();
}

function sizeOfWindow() {
  const width = window.innerWidth;
  if (width <= 600) {
    const emailInput = document.getElementById('user-email-phone');
    const passwordInput = document.getElementById('user-password');
    emailInput.placeholder = 'Número de celular ou e-mail';
    passwordInput.placeholder = 'Senha';
  }
}

addEventListener('resize', sizeOfWindow);

buttonRegister.addEventListener('click', changeRightContent);
