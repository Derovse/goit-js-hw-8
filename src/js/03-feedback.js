import throttle from 'lodash.throttle';

const feedbackParent = document.querySelector('.feedback-form');
const feedbackEmail = document.querySelector('input');
const feedbackMessage = document.querySelector('textarea');
const KEY_USER_EMAIL = 'email';
const KEY_USER_MESSAGE = 'message';

const updateOutput = () => {
  feedbackEmail.value = localStorage.getItem(KEY_USER_EMAIL) || '';
  feedbackMessage.value = localStorage.getItem(KEY_USER_MESSAGE) || '';
};

window.addEventListener('load', updateOutput);

const saveFormValues = () => {
  localStorage.setItem(KEY_USER_EMAIL, feedbackEmail.value);
  localStorage.setItem(KEY_USER_MESSAGE, feedbackMessage.value);
};

feedbackParent.addEventListener('input', throttle(saveFormValues, 500));

feedbackParent.addEventListener('submit', evt => {
  evt.preventDefault();
  const emailValue = feedbackEmail.value;
  const messageValue = feedbackMessage.value;

  localStorage.clear();
  feedbackEmail.value = feedbackMessage.value = '';

  const formData = {
    email: emailValue,
    message: messageValue,
  };
  console.log(formData);
});
