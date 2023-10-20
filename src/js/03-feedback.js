import throttle from 'lodash.throttle'
import '../css/03-feedback.css'


   const form = document.querySelector('.feedback-form');
   const emailInput = document.querySelector('input[name="email"]'); /// це доступ до value
   const messageTextarea = document.querySelector('textarea[name="message"]');



form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onFormSubmit)


let userData = {};

function onFormInput () {

    
userData = {
    email: form.elements.email.value,
    message: form.elements.message.value
}

localStorage.setItem("feedback-form-state", JSON.stringify(userData));

return userData;

}


function onFormSubmit (evt) {
    evt.preventDefault()

if(form.elements.email.value === ''  || form.elements.message.value === '') {
    return alert ('Заповни усі поля!')
}
console.log(localStorage.getItem("feedback-form-state"));
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");

}

    const savedData = localStorage.getItem("feedback-form-state")

checkedForm()

function checkedForm() {
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      form.elements.email.value = parsedData.email ?? '';
      form.elements.message.value = parsedData.message ?? '';
    }
  }

    

