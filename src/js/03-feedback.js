import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input[name=email]'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormsubmit);
refs.input.addEventListener('input', throttle(onTextareaInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextArea();

function onFormsubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(e) {
  const message = refs.textarea.value;
  const email = refs.input.value;

  const savedMessage = {
    email: email,
    textarea: message,
  };
  const savedMessageJSON = JSON.stringify(savedMessage);
  localStorage.setItem(STORAGE_KEY, savedMessageJSON);
}

function populateTextArea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const savedMessageJSON = JSON.parse(savedMessage);

  if (savedMessage) {
    refs.input.value = savedMessageJSON.email;
    refs.textarea.value = savedMessageJSON.textarea;
  }
}
