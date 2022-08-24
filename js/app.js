//declarando variaveis
//inputs
const form = document.getElementById("box-form");
const fristName = document.getElementById("input-fritsName");
const lastName = document.getElementById("input-lastName");
const email = document.getElementById("input-emial");
const password = document.getElementById("input-password");
const confirmPassword = document.getElementById("input-confirm-password");
const boxForm = document.getElementById("box-frist-name");
//span frist name
const spanNameRequerid = document.getElementById("name-requerid");
const spanNameSucess = document.getElementById("name-sucess");
//span last name
const spanLastNameRequerid = document.getElementById("last-name-requerid");
const spanLastNameSucess = document.getElementById("last-name-sucess");
//span email
const spanEmailInvalid = document.getElementById("email-invalid");
const spanEmailSucess = document.getElementById("email-sucess");
//span password and confirm password
const spanPasswordInvalid = document.getElementById("password-invalid");
const spanPasswordSucess = document.getElementById("password-sucess");
const spanPasswordNotCheck = document.getElementById("password-not-check");
const spanConfirmPasswordInvalid = document.getElementById("password-confirm-invalid");
const spanConfirmPasswordSucess = document.getElementById("password-confirm-sucess");

form.addEventListener("submit", function (e) {

    //impedindo carregamento do formulario
    e.preventDefault();
    //chamando a funcao que checa todas as funcoes
    checkInputs();

});

//funcao que chama todas as funções de check
function checkInputs() {
    checkFristName();
    checkLastName();
    checkEmail();
    checkPassword();
    checkConfirmPassword();
}

//funcao checando o primeiro nome
function checkFristName() {
    const fristNameValue = fristName.value;

    if (fristNameValue.length < 3) {
        spanNameRequerid.removeAttribute("class", "hide");
        spanNameSucess.setAttribute("class", "hide");
        fristName.setAttribute("class", "error");
    } else if (fristNameValue != '') {
        spanNameRequerid.setAttribute("class", "hide");
        spanNameSucess.removeAttribute("class", "hide")
        fristName.removeAttribute("class", "error");
        fristName.setAttribute("class", "sucess");
    }
}

//funcao checando o sobrenome
function checkLastName() {
    const lastNameValue = lastName.value;

    if (lastNameValue.length < 3) {
        spanLastNameRequerid.removeAttribute("class", "hide");
        spanLastNameSucess.setAttribute("class", "hide");
        lastName.setAttribute("class", "error");
    } else if (lastNameValue != '') {
        spanLastNameRequerid.setAttribute("class", "hide");
        spanLastNameSucess.removeAttribute("class", "hide")
        lastName.removeAttribute("class", "error");
        lastName.setAttribute("class", "sucess");
    }
}

//funcao checando o e-mail
function checkEmail() {
    const emailValue = email.value;

    if (!regexEmail(emailValue)) {
        spanEmailInvalid.removeAttribute("class", "hide");
        spanEmailSucess.setAttribute("class", "hide");
        email.setAttribute("class", "error");
    } else {
        spanEmailInvalid.setAttribute("class", "hide");
        spanEmailSucess.removeAttribute("class", "hide")
        email.removeAttribute("class", "error");
        email.setAttribute("class", "sucess");
    }
}

//regex para validar email
function regexEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    )
};

// funcao para checar passaword
function checkPassword() {
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    if (passwordValue != confirmPasswordValue) {
        spanPasswordInvalid.removeAttribute("class", "hide");
        spanPasswordSucess.setAttribute("class", "hide");
        password.setAttribute("class", "error");
    }
    else if (passwordValue.length < 7) {
        spanPasswordInvalid.removeAttribute("class", "hide");
        spanPasswordSucess.setAttribute("class", "hide");
        password.setAttribute("class", "error");
    } else if (passwordValue != '') {
        spanPasswordInvalid.setAttribute("class", "hide");
        spanPasswordSucess.removeAttribute("class", "hide")
        password.removeAttribute("class", "error");
        password.setAttribute("class", "sucess");
    }
}

// funcao para checar a confirmacao do password
function checkConfirmPassword() {
    const confirmPasswordValue = confirmPassword.value;
    const passwordValue = password.value;

    if (confirmPasswordValue != passwordValue) {
        spanConfirmPasswordInvalid.removeAttribute("class", "hide");
        spanConfirmPasswordSucess.setAttribute("class", "hide");
        confirmPassword.setAttribute("class", "error");
    } else if (confirmPasswordValue.length < 7) {
        spanConfirmPasswordInvalid.removeAttribute("class", "hide");
        spanConfirmPasswordSucess.setAttribute("class", "hide");
        confirmPassword.setAttribute("class", "error");
    } else if (confirmPasswordValue != '') {
        spanConfirmPasswordInvalid.setAttribute("class", "hide");
        spanConfirmPasswordSucess.removeAttribute("class", "hide")
        confirmPassword.removeAttribute("class", "error");
        confirmPassword.setAttribute("class", "sucess");
    }
}


