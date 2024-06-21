const formData = {
    email: "",
    message: ""
}

const userForm = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.js-input-email');
const inputMessage = document.querySelector('.js-input-message');



userForm.addEventListener("input", handlerInput)

function handlerInput(evt) {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    inputEmail.value = formData.email;
    inputMessage.value = formData.message;
};

userForm.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
    evt.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem('feedback-form-state')
    userForm.reset();
}





