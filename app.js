const imageContainer = document.querySelector('.image-container');
const emailInput = document.querySelector('input[type="email"]');
const errorField = document.querySelector('.error-field');
const insertedEmail = document.querySelector('.inserted-email');
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');
const dismissBtn = document.querySelector('dialog .dismiss-btn')
const dialog = document.querySelector('dialog');

let emailValue = "";


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const data = new FormData(form);
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject);
    emailInputChange();
    emailCheck();

    if (emailInput.validity.valid) {
        showingDialog();
    }

    form.reset();
})

function emailInputChange() {
    emailValue = emailInput.value;
    console.log(emailValue);
}

function showingDialog() {
    insertedEmail.textContent = emailValue;
    dialog.showModal();
}

function emailCheck() {
    if (!emailInput.validity.valid) {
        errorField.textContent = "Valid email required"
        emailInput.classList.add('inputerror');
    } else {
        errorField.textContent = ""
        emailInput.classList.remove('inputerror');
    }
}

dismissBtn.addEventListener('click', function() {
   dialog.close();
})

emailInput.addEventListener('blur', emailCheck);
emailInput.addEventListener('input', emailInputChange);