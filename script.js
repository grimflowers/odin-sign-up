function validatePassword(e) {
    let passwordInput = document.querySelector('#pwd');
    let confirmInput  = document.querySelector('#confirm-pwd');
    let warning       = document.querySelector('.warning');

    if (passwordInput.value === confirmInput.value) {
        passwordInput.classList.remove('invalid');
        confirmInput.classList.remove('invalid');
        warning.classList.add('hidden');
        return true;
    } else {
        passwordInput.classList.add('invalid');
        confirmInput.classList.add('invalid');
        warning.classList.remove('hidden');
        return false;
    }
}

let submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', validatePassword);