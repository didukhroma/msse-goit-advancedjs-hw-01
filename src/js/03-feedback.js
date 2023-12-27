// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
// Import
import throttle from 'lodash.throttle';
// Constants
const localStorageName = 'feedback-form-state';
// Reference
const formRef = document.querySelector('.feedback-form');

const setLocalStorageData = data => {
  let json = '';
  try {
    json = JSON.stringify(data);
  } catch (error) {
    console.log(erro.message);
    return;
  }
  localStorage.setItem(localStorageName, json);
};

// const getLocalStorageData = data => localStorage.getItem(localStorageName);

const handleInput = ({ currentTarget }) => {
  console.log(currentTarget);
  const [
    { name: inputName, value: inputValue },
    { name: messageName, value: messageValue },
  ] = currentTarget.elements;

  const formState = { inputName: inputValue, messageName: messageValue };
  setLocalStorageData(formState);
};
const handleSubmit = e => {
  e.preventDefault();
  const [input, textarea] = e.currentTarget.elements;
  input.value = '';
  textarea.value = '';
  setLocalStorageData('');
};

// Event listeners
formRef.addEventListener('input', throttle(handleInput, 500).bind(this));
formRef.addEventListener('submit', handleSubmit);
