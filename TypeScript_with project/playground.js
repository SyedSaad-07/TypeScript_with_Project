"use strict";
// Superset of JavaScript
// Allow us to strict types
// /Support modern features (arrow function, let, const)
// Extra features ( generics, interfaces, tuples etc)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (element) {
    console.log(element);
});
// TypeScript is a strict data type language, we can change the value of same type but can't change the type of that vsriable.
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.6));
// *********** Array *******************
var names = ['saad', 'moiz', 'syed'];
names.push('newName'); // right
// names.push(32); // give error and, not compile in JS.
// names[0] = 2 ; // give error
var numbers = [10, 20, 30];
numbers.push(50); // right
// numbers.push('qwerty'); // give error
var mixed = ['name', 20, true]; // mixed type of array
mixed.push('str');
mixed.push(10);
mixed[0] = 3;
// ***************** Objects ****************
var obj = {
    name: 'Syed',
    working: true,
    age: 20
};
obj.age = 21;
obj.name = 'Syed Saad';
// obj.working = "can't assign";
// Can not assign new properties in a object after defining.
// obj.skill = 'Development'
// **********************************************
// explicit types -- assign type not values
var character;
var age;
var isLoggedIn;
var positions = [];
age = 20;
isLoggedIn = true;
positions = ['intern', 'senior SE'];
positions.push('team lead');
// union type : mixed type
var mix = [];
mix.push('Syed Saad');
mix.push(20);
var uid;
uid = 'qwer'; // fine
uid = 2.2; // fine
// Objects
var student;
student = { name: "Syed Saad", age: 20, jobTitle: 'nodeJS intern' };
var car;
car = { name: 'Honda', type: 'Sports', modelYear: 2019, isNew: false };
// Dynamic " any " type.
var num = 24;
console.log(num);
// as num is type of any not a number specific so we can change a string value or anyOther data type value in it.
num = "don't give an error";
console.log(num);
num = 'hahahaha';
console.log(num);
var mixArr = [];
mixArr.push('sdfg');
mixArr.push(true);
mixArr.push(234);
mixArr.push(3.3);
mixArr.push(23);
// ************* Function **************
var greet;
greet = function () {
    console.log('Hello!..');
};
var add = function (a, b, c) {
    console.log(c, a + b); // if no return --> then it is void
};
add(3, 5, 'Addtion of two numbers= ');
add(2, 4, 3);
add(2, 3);
var mul = function (a, b) {
    return a * b; // return implicitly recognize the return type but if we wan't to define explicitly so, we can do this by (): typr
};
var result = mul(2, 4);
console.log(result);
var logDetails = function (user) {
    console.log("".concat(user.name, " who has an id ").concat(user.uid, " says hello"));
};
logDetails({ name: "Syed Saad", uid: "2" });
logDetails({ name: "Syed Saad", uid: 3 });
// Function signatures...
var doSome; // it is signature function 
doSome = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
doSome("Syed Saad", "Hi!...");
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else if (action === 'mul') {
        return numOne * numTwo;
    }
    else if (action === 'minus') {
        if (numOne > numTwo) {
            return numOne - numTwo;
        }
        else {
            return numTwo - numOne;
        }
    }
    else if (action === 'div') {
        if (numOne === 0 || numTwo === 0) {
            return 0;
        }
        return numOne / numTwo;
    }
    else {
        return 0;
    }
};
var answer = calc(2, 3, 'add');
console.log(answer);
answer = calc(2, 3, 'mul');
console.log(answer);
answer = calc(2, 0, 'div');
console.log(answer);
var me = {
    name: 'Syed',
    age: 20,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I speak', amount);
        return amount;
    }
};
var someone; //later in the future "someone" should matches the structure of IsPerson.
// pass interface structure as an argument...
var greetPerson = function (person) {
    console.log(person.name);
};
greetPerson(me);
console.log(me);
var Invoices_js_1 = require("./src/classes/Invoices.js");
var Payments_js_1 = require("./src/classes/Payments.js");
var docOne;
var docTwo;
docOne = new Invoices_js_1.Invoice("Syed Saad", "Freelancing", 50000);
docTwo = new Payments_js_1.Payment("Mouviz", 'Outsourcing', 5000);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
docs.forEach(function (doc) {
    console.log(doc);
});
var invOne = new Invoices_js_1.Invoice('Saad', 'doing internship', 25000);
var invTwo = new Invoices_js_1.Invoice('Naveed', 'doing internship', 25000);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.format());
});
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHON"] = 1] = "AUTHON";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECT0R"] = 3] = "DIRECT0R";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
// Generics
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var doc1 = addUID({ name: 'Ali', age: 20 });
var doc2 = addUID({ name: 'Ahmed', age: 22 });
console.log(doc1);
console.log(doc2);
var docThree = {
    uid: 1,
    resourcType: ResourceType.PERSON,
    data: { name: 'Moiz' }
};
var docFour = {
    uid: 2,
    resourcType: ResourceType.BOOK,
    data: ['bread', 'eggs', 'Milk']
};
console.log(docThree);
console.log(docFour);
// Tuples
var arr = ['saad', 20, true];
arr[0] = false; // possible
var tup = ['qwerty', 23, false];
tup[0] = 'ken'; // possible
// tup[1] = false  // give error
