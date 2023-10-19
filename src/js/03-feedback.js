import throttle from 'lodash.throttle'
import '../css/03-feedback.css'


   const form = document.querySelector('.feedback-form');
    

form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onFormSubmit)

fillAllTextFields();


const userData = {};

function onFormInput (evt) {

userData[evt.target.name] = evt.target.value;

localStorage.setItem("feedback-form-state", JSON.stringify(userData));

}


function onFormSubmit (evt) {
    evt.preventDefault()


    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");

    console.log(userData);

}


function fillAllTextFields () {


    const savedData = localStorage.getItem("feedback-form-state")


if (savedData) {
    const parsedData = JSON.parse(savedData);

    const emailInput = document.querySelector('input[name="email"]'); /// це доступ до value
    const messageTextarea = document.querySelector('textarea[name="message"]');

    if (parsedData.email) {
        emailInput.value = parsedData.email;
    }

    if (parsedData.message) {
        messageTextarea.value = parsedData.message;
    }
}

}

    

