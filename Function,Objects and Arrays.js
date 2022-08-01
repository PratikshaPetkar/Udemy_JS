// JS Functions
//synatx 
// function  nameoffun (){

// }

//example:

// function addNumbers(num1,num2){  //function declarartion
//     return num1+num2; //num1 and 2 are param
// }

//function will only get executed when it is called

// calling function

// const sum =addNumbers(10,20);
// console.log(sum);
// addNumbers(20,154);

// function toCelsius(fahrenheit){

//     const result = 
//      (5/9) * (fahrenheit-32);

//      return result;
// }

// console.log(toCelsius(77));

//var inside function called local
//console.log(toCelsius); when we called fun without
//paranthis whole fun get printed on console
//for getting result have to use parenthesis()

//ARROW FUNCTIONS
//SAME LIKE FUNCTION slight difference
// this is latest version of function

// hello =function (){

//    console.log('Hello') 
// }
// hello();

// hello = () => {
//     console.log('Hello');
// }
// hello();

//difference is that we dont use function keyword instead we use arrow sign
// cant use this in arrow

// GLOBAL AND LOCAL SCOPE

//GLOBAL
//whenevr we declare outside of scope called global

// var a = 5;
// let b = 10;
// const c = 15;

// function test(){

//     //local variables
//     var a = 50;
//     let b = 100;
//     const c = 105;
//     console.log('local',a,b,c); 
// }

// test();    //to get the results we have to call function
// console.log('global',a,b,c);  //5,10,15

//for local var we cant access outiside function
//why should we not use VAR to declare variables

// if(1 == 1) {
//     var a = 50;
//     let b = 100;
//     const c = 105;
//     console.log('local',a,b,c);
// }
// console.log('global',a,b,c);
//in the output value of var will be replaced by localscope value
// thats why not recommended to use 
//use only let and const

//JS OBJECTS

//example in real life
// car has prop like name,model no,color and it also performs
//action like drive,start,stop
//likewise we have object in JS which ha sprop and performs actions

//synatx to create object
const person ={
    firstName : 'pratiksha',
    lastname : 'petkar',
    age : 26,
    eyecolor : 'brown',

    fullName :function () {
        
        return `${this.firstName} ${this.lastname} `;
    }
}
//we change prop 
//we can declare function inside object also
person.age = 23;
//here even though const is used but we can since 
//we are just reassigning the value.


console.log(person.firstName);
console.log(person.lastname);
console.log(person['age']);


console.log(person.fullName());
// above are ways to access props
//using.propname
//using.[]


//ARRAYS

//its type of DS help to stor multiple values in single variable

const languages = [
    'javascript',
    'C',
    'python',
    'c++',
    {
        favourite : 'JS' //obj inside array
    }
    ];

//Access element of array
console.log(languages[0]);

//Change an Array Element
languages[3] = 'Java';
console.log(languages[3]);

//Legth of an Array
console.log(languages.length);

//Loop through Array
languages.forEach(element => {
    console.log(element);
});

//Difference between Array and Object
//whenever creat array it has index starting from 0
// and Object uses key value pair
// array can have any typeof data
// we can declare oh=bjects in array

// declaring array inside object

//Post Object

// const post = {
//     title: 'Post 1',
//     description: 'description goes here',
//     author: 'Pratiksha',
//     comments: [
//         'This is cool post.',
//         'Informative Post'
//     ]
// }
// console.log(post);


//ARRAY METHODS IN JS

const bhasha = [
    'Javascript',
    'Java',
    'Python',
    'C++',
    'C'
]

//Array to String
//console.log(bhasha.toString());

//Removes the last element
// bhasha.pop();

//Add new element at end
// bhasha.push('c#');


//Remove first element 
//bhasha.shift();

//Add new element at start
//bhasha.unshift('c#')

//Add new element at specific index
//bhasha.splice(2,0, 'c#');

// Delete specific element 
//delete bhasha[1];



//2 is the index where we want to add element
// 0 is if we want to delete 
// c# is what we want to add

//Concatenate two arrays
// const newLanguages = ['Go','Swift'];

// const finalLanguages = bhasha.concat
// (newLanguages);

//Sort Array
// bhasha.sort();

// bhasha.forEach(element => {
//     console.log(element);
// });


//THIS KEYWORD

const Person = {
    fullName : 'Pratiksha',
    lastName : 'Petkar',
    age      : 24,
    fullName : function() {
        return `${this.firstName}
        ${this.lastName}`;
    }
}
// console.log(person.fullName());

//This refers to object itself

console.log(this);//this refers to top most obj
//i.e. window obj


