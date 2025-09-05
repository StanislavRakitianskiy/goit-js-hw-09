const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};
form.addEventListener('input', onInput);
function onInput(e) {
  const fieldName = e.target.name;
  const fieldValue = e.target.value;
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email;
  formData.message = parsedData.message;
  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
}
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  } else {
    console.log(formData);
  }
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}
