//  if statements
// const age = 25;

// if (age<18){

//     console.log('you cannot drive car')
// }

// if(age>=18){
//     console.log('You can drive car')
// }

// executes only when its true

// const age = 15;
// if(age>=18){
//     console.log('You can drive car')
// }
// else{
//     console.log('you cannot drive car')
// }
//it will execute even if one condition is true

//if condtn is false else will execute

//Logical operators

// AND opeartor (&&) both should be true

// let num1 = 15;
// let num2 = 11;

// if (num1 < 10 && num2<10){
//     console.log('both numbers are less than 10');
// } //executes when both are true

//OR opeartors (||) //if only ine is true

// if (num1 < 10 || num2<10){
//     console.log('both numbers are less than 10');
// } 

//NOT operator(!)

// let discountallowed = true;

// if(!discountallowed){
// console.log ('No Discount');
// }
// else{
//     console.log('discount allowed')
// }


//Ternary Operator
// const age = 14;

//condition ? true : false

// const result = age > 18 ? 'you can drive car':'you cannot drive car'

// console.log(result)

// else if statement
// const age = 10;

// if(age < 18){

//     console.log('you are child')
// }else if(age >= 18 && age < 50){
//     console.log('you are young')
// } else{
//     console.log('you are old');
// }

//SWITCH

// when we have multiple cases we use swtich

// const date = new Date()

// console.log(date.getDay());

// let day;

// switch(date.getDay()) {
//     case 0:
//         day = 'Sunday'
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;  
//     case 3:
//         day = ' Wedensday';
//         break;
//     case 4:
//         day = 'Thursday'
//         break;
//     case 5:
//         day = 'friday'      
//         break;
//     case 6:
//         day = 'saturday' ;
//         break;
//     default:
//         day = 'none' ;
// }
// console.log(day);

//WHILE LOOP

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
//if we have to print 1000 times 


// let i = 1;
// while(i <= 10){
//     console.log(1);
//     i++;
// }

// DO WHILE LOOP

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10 );

//it runs atleast one time whereas in while 
//loop it will check condition first 


//FOR LOOP

//syntax

// for ( let i =1; i <= 10; i++) {
//     if(i % 2 == 0){
//         console.log(`${i} is even`);
//     }else{
//         console.log(`${i} is odd`);
//     }
// }

 //FOREACH LOOP

//  const  numbers = [1,2,3,4,5,6,7];

//  numbers.forEach(element =>{
  
//     console.log(element);
    
//  });

//BREAK & Continue
//break 
// for(let i=1; i<=10; i++){

//     if (i==5){
//         continue;
//     }
//     // if(i == 8){
//     //     break;
//     // }
//     console.log(i);
// }
//here break helps to come out of loop
//continue breaks one iteration





