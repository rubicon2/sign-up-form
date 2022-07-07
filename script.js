const signupForm = document.querySelector(".signup-form");
const submitButton = document.getElementById("submit");

const forename = document.getElementById("forename");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

const passwordError = document.querySelector("#password+.form-warning");

const telFormat = /^\d{3}[ -]\d{4}[ -]\d{4}$/;
const passwordFormat = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
const passwordLength = /(?=^.{8,}$)/;

submitButton.addEventListener("click", function(e) {
    passwordConfirm.reportValidity();
    password.reportValidity();
    tel.reportValidity();
    email.reportValidity();
    surname.reportValidity();
    forename.reportValidity();
    if (validatePassword()) {
        signupForm.requestSubmit();
    }
}); 

const showPasswordError = function(error) {
    passwordError.textContent = error;
    passwordError.classList.remove("invisible");
}

const hidePasswordError = function() {
    passwordError.classList.add("invisible");
}

const validatePassword = function() {
    if (password.value != "") {
        if (passwordFormat.test(password.value)) {
            if (password.value === passwordConfirm.value) {
                hidePasswordError();
                return true;
            } else {
                showPasswordError("パスワードが二つとも違います");
            }
        } else if (!passwordLength.test(password.value)) {
            showPasswordError("８字が必要です");
        } else {
            showPasswordError("Upper/lowercase and number required.")
        }
    }
    return false;
}
