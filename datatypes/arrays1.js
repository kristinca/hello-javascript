var colors;

colors = ['green', 'yellow', 'red', 2, true];

console.log(colors+'\n');
console.log('type of '+colors+ '= '+typeof colors+'\n');
console.log(colors[1]+'\n');

for (i=0; i<colors.length; i++) {
    console.log('type of '+colors[i] + ' = '+typeof colors[i]);
}

n = new Array('1', '4', 'bbb', 5);

n.forEach(function(aaa) {
    console.log('type of '+aaa + ' = '+typeof aaa);
});

colors[7] = 4;

console.log(colors);