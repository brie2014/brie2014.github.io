//Defining Types
//asign the type number to lucky
let lucky:any = 23;

lucky = "hello"; 

//add :any if you want it to be able to change types


//Composing Types

type animals = 'lion' | 'tiger' | 'bear' | 'cow' | 'dog';

let favAnimal: animals;

favAnimal = 'unicorn'; 

favAnimal = 'bear'; 

//By composing a type, you limit what values can be assigned;


//Structural Type System
//You can also enforce shapes of objects--this makes sure you have 
//the same properties for similar objects

interface churchLeader {
    first: string;
    last: string;
    age: number;
    //[key: string]: any; 
}

const person: churchLeader = {
    first: 'Russell',
    last: 'Nelson',
    age: 95,
    gender: 'male', 
}

//ensures only certain types of data can be passed in functions
function power(x, y) {
    return Math.pow(x,y);
}

power(5, 'fool')

//
type myList

const arr: Person [] = []

arr.push( 'Billy')
arr.push ('Stewart')
arr.push (24)