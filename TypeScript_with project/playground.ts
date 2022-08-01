// Superset of JavaScript
// Allow us to strict types
// /Support modern features (arrow function, let, const)
// Extra features ( generics, interfaces, tuples etc)

const inputs = document.querySelectorAll('input')

console.log(inputs)

inputs.forEach(element => {
    console.log(element)
});


// TypeScript is a strict data type language, we can change the value of same type but can't change the type of that vsriable.
const circ = (diameter: number) => {   // assign dataType in a parameter.
    return diameter * Math.PI
}

console.log(circ(7.6))

// *********** Array *******************
let names = ['saad', 'moiz', 'syed'];

names.push('newName'); // right
// names.push(32); // give error and, not compile in JS.
// names[0] = 2 ; // give error

let numbers = [10,20,30]
numbers.push(50);  // right
// numbers.push('qwerty'); // give error

let mixed = ['name', 20, true]; // mixed type of array
mixed.push('str');
mixed.push(10);
mixed[0] = 3;


// ***************** Objects ****************

let obj = {
    name:'Syed',
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

let character: string
let age: number
let isLoggedIn: boolean
let positions: string[] = [];

age = 20
isLoggedIn = true
positions = ['intern','senior SE']
positions.push('team lead')

// union type : mixed type
let mix: (string|number)[] = []

mix.push('Syed Saad')
mix.push(20)

let uid: string|number;
uid = 'qwer' // fine
uid = 2.2 // fine

// Objects
let student: Object

student = {name:"Syed Saad", age: 20, jobTitle: 'nodeJS intern'}

let car: {
    name: string,
    type: string,
    modelYear: number,
    isNew: boolean
}

car = {name:'Honda', type:'Sports', modelYear:2019, isNew:false}



// Dynamic " any " type.

let num: any = 24
console.log(num)
// as num is type of any not a number specific so we can change a string value or anyOther data type value in it.
num = "don't give an error";
console.log(num)

num = 'hahahaha'
console.log(num)

let mixArr: any[] = []

mixArr.push('sdfg')
mixArr.push(true)
mixArr.push(234)
mixArr.push(3.3)

mixArr.push(23)

// ************* Function **************
let greet: Function

greet = () =>{
    console.log('Hello!..')
}

const add = (a:number, b:number, c?:number | string) =>{  // here c is the optional parameter
    console.log(c,a+b) // if no return --> then it is void
}

add(3,5,'Addtion of two numbers= ');
add(2,4,3);
add(2,3)

const mul = (a:number, b:number): number =>{
    return a*b  // return implicitly recognize the return type but if we wan't to define explicitly so, we can do this by (): typr
}
let result = mul(2,4)
console.log(result)

// *********** Type Aliases *************

type stringOrNum = string | number

const logDetails = (user: {name: string, uid: stringOrNum}) => {
    console.log(`${user.name} who has an id ${user.uid} says hello`)
}
logDetails({name:"Syed Saad",uid:"2"})
logDetails({name:"Syed Saad",uid:3})

// Function signatures...

let doSome: (a:string, b:string) => void;  // it is signature function 

doSome = ( name:string, greeting:string ) => {
    console.log(`${name} says ${greeting}`);    
}
doSome("Syed Saad","Hi!...");

let calc: (a: number, b: number, c: string) => number ;

calc = (numOne: number, numTwo: number, action: string) => {

    if(action === 'add'){
        return numOne + numTwo;
    }else if(action === 'mul'){
        return numOne * numTwo;
    }else if(action === 'minus'){
        if(numOne > numTwo){
            return numOne - numTwo;
        }else{
            return numTwo - numOne;
        }
    }
    else if(action === 'div'){
        if(numOne === 0 || numTwo ===0){
            return 0;
        }
        return numOne / numTwo;
    }
    else{
        return 0;
    }
}

let answer = calc(2,3,'add');
console.log(answer)
answer = calc(2,3,'mul');
console.log(answer)
answer = calc(2,0,'div');
console.log(answer)