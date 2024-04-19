false / true
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
false * 70
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
