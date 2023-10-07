alert(" criar senha ");

const form = document.getElementById("form");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInpuntPassword();
    checkInpuntPasswordConfirmation();

})

function checkInpuntPassword() {
    const passwordValue = password.value;
    if (passwordValue === "") {
        erroInput(password, " campo obrigatorio")
    } else if (passwordValue.length < 8) {
        erroInput(password, "deve conter 8 digitos ")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }

}
function checkInpuntPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if (confirmationPasswordValue === "") {
        erroInput(passwordConfirmation, "confirmar senha")

    } else if (confirmationPasswordValue !== passwordValue){
        erroInput(passwordConfirmation, "senha nao conferi")
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }

}


function erroInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-content error"
}