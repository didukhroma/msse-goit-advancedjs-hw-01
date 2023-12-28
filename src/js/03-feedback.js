// Import
import throttle from 'lodash.throttle';

// Constants
const localStorageKey = 'feedback-form-state';
// Reference
const formRef = document.querySelector('.feedback-form');
// Base Form State
const baseFormState = { email: '', message: '' };

// Set data to local storage
const setLocalStorageData = data => {
  let json = '';
  try {
    json = JSON.stringify(data);
  } catch (error) {
    console.log(error.message);
    return;
  }
  localStorage.setItem(localStorageKey, json);
};

//Get data from local storage
const getLocalStorageData = () =>
  JSON.parse(localStorage.getItem(localStorageKey));

// Handler for input event
const handleInput = ({ target: { name, value } }) => {
  formState[name] = value;
  setLocalStorageData(formState);
};

// Handler for submit event
const handleSubmit = e => {
  //default behavior
  e.preventDefault();
  //current formState
  console.log(formState);
  // clear input
  [...e.target.elements].forEach(
    el => el.nodeName !== 'BUTTON' && (el.value = '')
  );
  //Clear localStorage
  setLocalStorageData(baseFormState);
  //Clear Form State
  Object.keys(formState).forEach(el => (formState[el] = ''));
};

//Get first data
const firstData = getLocalStorageData();

// Form State
const formState = firstData
  ? { ...baseFormState, ...firstData }
  : { ...baseFormState };

//Set data form local storage to form after reload page
Object.keys(formState).forEach(el => (formRef[el].value = formState[el]));

// Event listeners
formRef.addEventListener('input', throttle(handleInput, 500));
formRef.addEventListener('submit', handleSubmit);
