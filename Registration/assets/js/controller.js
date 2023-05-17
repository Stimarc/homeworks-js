'use strict'



const formValidator = new FormValidator();

//*
function handleSubmit(event) {
  event.preventDefault(); 

  //*
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  //*
  const isValid = formValidator.validateForm(name, email, message);
  if (!isValid) {
    //*
    document.getElementById('validationMessage').textContent = 'Будь ласка, заповніть всі поля форми.';
    return;
  }


  //*
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  //*
  document.getElementById('validationMessage').textContent = 'Дякуємо за ваш відгук!';
}
//*
