var aString = 'this is Some string no.1   4    t';

console.log(aString.length,'\n',
typeof(aString),'\n',
aString.toUpperCase(),'\n',
aString.toLowerCase(),'\n',
aString.charAt(10),'\n',
aString.indexOf('s'),'\n',
aString.substring(5, 9),'\n',
aString.split(' '),'\n',
aString.trim(),'\n',
aString.replace('no.1', 'no.2'),'\n',
aString.replace(/  +/g, ' ')
);