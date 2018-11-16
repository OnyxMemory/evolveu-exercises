
// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

// ES5
function driversLicence5(passedTest) {
    
    if (passedTest) {

        var firstName = 'John';
        var yearOfBirth = 1990;
        console.log(firstName);
    }
    
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);

//ES6

function driversLicence6(passedTest) {

    let firstName;
    const yearOfBirth = 1990;
    
    
    if (passedTest) {
        firstName = 'John';
        console.log(firstName);
    }
    
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);


var i = 23;

for(var i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);

/////////////////////////////////////////////////
//Lecture: Blocks and IIFE

//ES6

{
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(c);

//ES5

(function (){
    var c = 3;
})();

//console.log(c);


//Lecture:Strings

let firstName = "John";
let lastName = 'Smith';

const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

console.log('This is ' + firstName + ' ' + lastName)

console.log(`This is ${firstName} ${lastName}`)

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));

console.log(`${firstName} `.repeat(5));


//////////////////////////////////////////
//Lecture : Arrow functions

const years = [1990, 1965, 1982, 1937];

var ages5 = years.map(function(el){
    return 2016 - el
});


//es6

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);