var monthCount = 0;

class People {
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.bankAccount=0;
    }
    birthday() {
        if (monthCount % 12 === 0) {
            this.age++;   
        }
    }
    pay() {
        console.log('running from superclass')
    }
}

class Farmer extends People {
    constructor(name,age) {
        super(name,age);
        this.monthCounter = 0;
        this.yearly=100000
    }
    pay() {
        this.monthCounter++;
        if (this.monthCounter == 12){
            this.bankAccount += this.yearly
            this.monthCounter = 0;
        }

    }
}

class FSD extends People {
    constructor(name,age) {
        super(name,age);
        this.monthly=5000;
    }

    pay() {
        this.bankAccount += this.monthly;
    }
}

class Clerk extends People {
    constructor(name,age) {
        super(name,age);
        this.hourly = 15;
    }

    pay() {
        this.bankAccount += (150*this.hourly);
    }
}
// var x = new Farmer('bill',25);
// var y = new FSD('bob',28);
// var z = new Clerk('ben',30);

var arr = []
arr.push(new Farmer('bill',25))
arr.push(new FSD('bob',28))
arr.push(new Clerk('Clerk',30))

document.getElementById('btn').onclick = function () {
    monthCount++;
    document.getElementById('output').innerHTML = 'Month :' + monthCount + '<br>';
    for (var ele in arr) {
        arr[ele].pay();
        arr[ele].birthday();
        document.getElementById('output').innerHTML += arr[ele].name + ' Bank:' + arr[ele].bankAccount + 'Age:' + arr[ele].age +'<br>';
    }
}   
