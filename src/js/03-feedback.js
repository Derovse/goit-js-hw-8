import throttle from 'lodash.throttle';

const feedbackParent = document.querySelector('.feedback-form');
const feedbackEmail = document.querySelector('input');
const feedbackMessage = document.querySelector('textarea');
const KEY_FORM_STATE = 'feedback-form-state';

const updateFormState = () => {
  const formState = {
    email: feedbackEmail.value,
    message: feedbackMessage.value,
  };
  localStorage.setItem(KEY_FORM_STATE, JSON.stringify(formState));
};

const loadFormState = () => {
  const savedFormState = localStorage.getItem(KEY_FORM_STATE);
  if (savedFormState) {
    const { email, message } = JSON.parse(savedFormState);
    feedbackEmail.value = email;
    feedbackMessage.value = message;
  }
};

const clearForm = () => {
  localStorage.removeItem(KEY_FORM_STATE);
  feedbackEmail.value = '';
  feedbackMessage.value = '';
};

const logFormData = () => {
  const formData = {
    email: feedbackEmail.value,
    message: feedbackMessage.value,
  };
  console.log(formData);
};

feedbackParent.addEventListener('input', throttle(updateFormState, 500));
window.addEventListener('load', loadFormState);
feedbackParent.addEventListener('submit', evt => {
  evt.preventDefault();
  logFormData();
  clearForm();
});
