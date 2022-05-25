var change = ['this', 'is', 'an', 'array'];

var arrayconst = new Array('this', 'is', 'an', 'array');

var ch = document.getElementsByClassName('b1');

//ch.textContent = change[0];

// E6 Spread operator .shift()-> get first element; it is costly for large arrays

ch = [...arrayconst].shift();
console.log(ch);

var testString = document.getElementsByClassName('something2').toString();

console.log(testString.length);

console.log(typeof(testString));