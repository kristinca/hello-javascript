var turtle = new Object();

turtle.name = 'Speedy';
turtle.year = 2005;
turtle.favFood = 'fish';
var this_year = new Date().getFullYear();
var the_years = Number(this_year-turtle.year);
turtle.age = function() {
    return the_years;
};

var a = document.getElementById('message');
a.setAttribute('style', 'white-space: pre;');
a.textContent = 'Turtle Name: '+turtle.name+'. \r\n'+turtle.name+' is '+turtle.age()+' years old. \r\n'+turtle.name+' Loves to eat '+turtle.favFood+'. ^^';