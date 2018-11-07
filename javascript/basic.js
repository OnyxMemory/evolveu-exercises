

var myModule = function() {

    var myString = 'My Value';
    console.log("Hello World!");
    
    function myFunc() {
        console.log("I am in myFunc");
    }

    document.getElementById("mymove").onclick= function() {
        document.getElementById('bottom-js').innerHTML = document.getElementById('text1').value;
    };
    

    return {
        stuff: 'Some Stuff',
        myNum: 42,
        myString,
        myFunc

    };


}();

function myprint(arg) {
    console.log(arg)
}

myprint('hello')

var playModule = function() {
    function printArray(argArray) {
        document.getElementById('bottom-js').innerHTML ='';
        for(var i = 0; i<argArray.length; i++){
            console.log('Index: ', i, 'Value: ', argArray[i])
            document.getElementById('bottom-js').innerHTML += 'Index: '+ i + 'Value: ' + argArray[i] + '<br>';
        }
    }
    console.log('playmodule');


    document.getElementById('smallbig').onclick = function () {
        let val=JSON.parse(document.getElementById('text1').value);
        document.getElementById('js-left').innerHTML = Math.min(...val);
        document.getElementById('js-right').innerHTML = Math.max(...val);

    }

    document.getElementById('json').onclick = function () {
        let val=JSON.parse(document.getElementById('text1').value);
        printArray(val);
    }

    myArray = [1,2,3,4,5,6]
    myObject = {
        what: 'is',
        going: 'on',
        here: '?'
    }

    document.getElementById('parray').onclick = function() {
        printArray(myArray);
    }
    document.getElementById('pob').onclick = function () {
        for(var key in myObject){
            console.log('Key: ',key,'Value: ', myObject[key])
        }
    }

    var counter = 0;
    document.getElementById('adddiv').onclick = function () {
        let div = document.querySelector('.divContainer');
        let newDiv = document.createElement('div');
        newDiv.className = 'newDiv';
        newDiv.innerHTML = counter;
        div.appendChild(newDiv);
        counter++;

    }

    document.onclick = function(e) {
        let div = e.target;
        if (div.className == 'newDiv'){
            div.remove();
        }
    }
}();


