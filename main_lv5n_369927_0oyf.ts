apple

const isEven = num => num % 2 === 0;
const reverseWords = str => str.split(" ").reverse().join(" ");
orange - 41
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
kiwi


const getRandomElement = array => array[getRandomIndex(array)];

// This is a comment
banana

const capitalizeString = str => str.toUpperCase();
50,3,22,35,67,63,11,78,8,10,93,29,98,44,16,53,39,41,18,99,93,84,23,10,45,87,82,88,25,18,77,47,31 - 98
const findSmallestNumber = numbers => Math.min(...numbers);

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
