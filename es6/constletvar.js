
// const  ---> the same as val in Scala

// const pi=3.14
//var ---> same as var in Scala; available to the whole func / program
var pi = 3.14
console.log(pi);

pi = 1
console.log(pi);

// console.log(i) --> error because it is BEFORE let
// let ---> for block level vars; the let vars are available ONLY in the block they're in
for(let i=0; i<5; i++){
    console.log(i);
}

//var
// console.log(j); undefined because it is BEFORE var
for(var j=0; j<4; j++){
    console.log(j); 
}
console.log(j);