//Defining Types: asign the type of data you want to lucky
let lucky:any;

lucky = '21'; 

//Tip- :any allows any type of data to be accepted


//Composing Types: by creating a type, you limit what values can be assigned to a variable; 

type animals = 'lion' | 'tiger' | 'bear' | 'unicorn' | 'dog' | 23 | true;

let favAnimal:animals ;

favAnimal = 'lion';
favAnimal = 'unicorn';
favAnimal = 'dog';
favAnimal = 23;



//Structural Type System: You can also enforce shapes of objects
//This makes sure you have the same properties for similar objects

interface churchLeader {
    firstName: string;
    lastName: string;
    age: number;
    [key: string]: any; 
}

const person:churchLeader  = {
    firstName: 'Russell',
    lastName: 'Nelson',
    age: 95,
    gender: 'male',
    nationality: 'American'
}

//Using types snsures only certain types of data can be passed to functions
function power(x:number, y:number) {
    return Math.pow(x,y);
}

power(5, 10)