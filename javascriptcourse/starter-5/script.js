/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function() {
    //     console.log(2016 - this.yearOfBirth);
    // }
}

Person.prototype.calculateAge =     this.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastname = 'Smith';

var john = new Person('John',1990,'teacher');

john.calculateAge();
*/

var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});


/// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc (arr, fn) {
    var arrRes = [];
    for(var i = 0;i< arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge (el) {
    return 2016-el;
}

//console.log(arrayCalc(years,calculateAge));

///functions returning function

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     }
//     else {
//         return function (name) {
//             console.log('Hello' + name + ', what do you do?');
//         }
//     }
// }

var designerQuestion = interviewQuestion('designer')

//designerQuestion('John');

///Lecture IIFE

// (function (goodluck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodluck);
// })(5);

//Lectures Closures

function retirement(retirementAge) {
    var a = ' years left until retirement.';

    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        }
        else {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

//Bind call apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if( style === 'formal') {
            console.log('Good' + timeOfDay + ' Ladies and gentlement! I\'m ' 
            + this.name)
        }
        else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name)
        }
    }
}

john.presentation('formal','morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation.call(emily,'friendly', 'afternoon');

//john.presentation.apply(emily,['friendly','afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily,'formal');

emilyFormal('afternoon');

/* var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages,isFullAge.bind(this, 20));
*/