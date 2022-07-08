// class declaration
class Turtle{
    constructor(name, years){
        this.name = name;
        this.years = years;
    }

    // when a func starts with get -> that's a property ; like in Scala 
// when we call a func -> put the (); when we call a property there are NO () !!!!

calcAge() {
    return new Date().getFullYear-this.years;
}

get age() {
    return this.calcAge();
}

str(){
    console.log(this.name + ' is a turtle. \n')
}

static thisisstatic(){
    return 10;
}
}

var turti = new Turtle('Donatello', 2005);
turti.str();
console.log ('he is here since ' + turti.years +'\n'+ Turtle.thisisstatic());

// inheritance ---> w/ extends
// call parent class funcs --> w/ super
class RedEaredTurtle extends Turtle{
    str(){
        super.str();
        console.log(this.name + ' is a redeared turtle. \n')
    }
}

var turti1 = new RedEaredTurtle('Michelangelo', 2012)
turti1.str();


//unnamed 
var Turtle2 = class{
    constructor(name, years){
        this.name = name;
        this.years=years;
    }
}

//named
var Turtle3 = class Turtle{
    constructor(name, years){
        this.name = name;
        this.years=years;
    }
}
