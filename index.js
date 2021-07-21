// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Implement a debounce function
const debounce = (func, delay) => {
  let timer;
  return payload => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func();
      console.log('Delayed function called', payload);
    }, delay);
  };
};
