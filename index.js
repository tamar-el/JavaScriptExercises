console.log("Hello, World!");
const age = 25;
const name = "John Doe";
const address = "123 Main St, Anytown, USA";
const vegan = false;
const numberOfKids = 2;
console.log(`Name: ${name}, Age: ${age}, Address: ${address}, Vegan: ${vegan}, Number of Kids: ${numberOfKids}`);
//console.log(`typeof address: ${typeof address},typeof Age: ${typeof age},typeof Address: ${typeof address}' typeof vegan: ${typeof vegan},typeof numberOfKids: ${typeof numberOfKids}`); 


//-----task 1

//מחרוזת Hello JavaScript!
console.log("Hello JavaScript!");
//מחרוזת tamar ו-ashdod
console.log("tamar");
console.log("Ashdod");

//מספר 2026
console.log(2026);

const city = "Ashdod";
//מחרוזת Ashdod
console.log(`City: ${city}`);
let score = 0;
// Score 0
console.log(`Score: ${score}`);
score = 10;
//Updated Score 10
console.log(`Updated Score: ${score}`);
 console.log('score:', score);


 //task 2
 const pi = 3.14;
 //pi=3;
 //מחזיר שגיאה Assignment to constant variable
 //console.log(`Pi: ${pi}`); 
 let color = "blue";
 color = "red";
 //ישנה לערך red כי שהמשתנה color מוגדר כ-let
 console.log(`Color: ${color}`);
 
 let a = 1;
 //let a = 2; //מחזיר שגיאה Identifier 'a' has already been declared

 var b = 1;
 var b = 2; //לא מחזיר שגיאה כי המשתנה b מוגדר כ-var
 console.log(`a: ${a}, b: ${b}`);

 let total;
 console.log(`Total: ${total}`); //undefined
 total = 5;
 console.log(`Total: ${total}`); //5

 const birthDate = 1990;//תאריך קבוע של המשתנה birthDate מוגדר כ-const
 let point = 10;//מספר משתנה point מוגדר כ-let
 const lastName = "Smith";//מחרוזת lastName מוגדר כ-const
 let count1 = 0;//מספר משתנה count מוגדר כ-let



 //-----task 3
//my var //לא ניתן לרשום שמות משתנים עם רווח
//let 2fast///לא ניתן לרשום שמות משתנים שמתחילים במספר
//--תיקון: let fast2//חוקי
let userName//חוקי
//let class//לא ניתן לרשום שמות משתנים עם מילים שמורות
//--תיקון: let className//חוקי
let totalPrice//חוקי
//let first-name//לא ניתן לרשום שמות משתנים עם מקף
//--תיקון: let firstName//חוקי
//const let //לא ניתן לרשום שמות משתנים עם מילים שמורות
//--תיקון: const letName//חוקי
let $price;//חוקי
let _count;//חוקי   


let age1= 20;
let Age1= 30;
console.log(`age1: ${age1}, Age1: ${Age1}`); //age1: 20, Age1: 30
 
let productPrice = 100;
let isConnected = true;
let NumberOfChildren = 3;
//שם טוב הוא שם המתאר את סוג המשתנה או את מטרתו בצורה ברורה, למשל: productPrice, isConnected, NumberOfChildren.

//-----task 4
const firstName = "John";
const numberOfSiblings = 2;
const isMarried = false;
console.log(`First Name: ${firstName}, Number of Siblings: ${numberOfSiblings}, Is Married: ${isMarried}`);
const lastName1 = "Doe";
const lastName2 = 'Doe';
const lastName3 = `Doe`;
console.log(`Last Name 1: ${lastName1}, Last Name 2: ${lastName2}, Last Name 3: ${lastName3}`);


const name2 = "Ali'ce";
const name3 = 'Ali"ce';
console.log(`Name 2: ${name2}, Name 3: ${name3}`);


console.log(`5+10: ${5 + 10}, 5-10: ${5 - 10}, 5*10: ${5 * 10}, 4/10: ${4 / 10},3%10: ${3 % 10}`); //5+10: 15, 5-10: -5, 5*10: 50, 4/10: 0.4,3%10: 3, 2**3: 8
//% תפקיד החזרת השארית של חלוקה, למשל 3%10 מחזיר 3 כי 3 חלקי 10 נותן שארית של 3.


const isVegan = true;
const isstudent = false;
console.log(`isVegan: ${isVegan}, isstudent: ${isstudent}`); //isVegan: true, isstudent: false

console.log(`5 > 3: ${5 > 3}, 5 < 3: ${5 < 3},5 === 5: ${5 === 5}, 5 !== 3: ${5 !== 3}`); //5 > 3: true, 5 < 3: false,5 === 5: true, 5 !== 3: true

const isAdult = "";
console.log(`isAdult: ${isAdult}`); //isAdult:
const isStudent = '';
console.log(`isStudent: ${isStudent}`); //isStudent:

//-----task 5
let u;
console.log('u:',u);
//יחזיר undefined

const middleName = null;
console.log(middleName)//null

console.log(null == undefined)//true
console.log(null === undefined)//false

//boolean- true, number- 1, string-"aa", null, undifined-typeof 2px


//-----task 6
console.log(`typeof 42: ${typeof 42},typeof null: ${typeof null},typeof undefined: ${typeof undefined}' typeof true: ${typeof true},typeof 'hello': ${typeof 'hello'}`); 
//typeof null: object לא צפוי

//typeof NaN: undefined

console.log(`typeof typeof 42: ${typeof typeof 42}`);//string

//33
console.log('age:', typeof age)
console.log('middleName:', typeof middleName)
console.log('isStudent:', typeof isStudent)

let value=5;
console.log('value:', typeof value)
value='5';
console.log('valueAfterChange:', typeof value)


//-----task 7
const name22= "aa"
const age2= 2;

console.log(`My name is ${name} and I am ${age} years old`)
console.log("My name is"+ name+"and I am "+ age+" years old", )
console.log(`The sum of 3 and 4 is ${4+3}`)


const quantity=80;
console.log(`The sum of 3*${quantity} is ${3*quantity}`);

console.log(`the l1`);
console.log(`the l2`);
console.log("the \n l3");

console.log(`Vegan: ${isVegan}, kids: ${numberOfKids}`);

//-----task 8
console.log(Number('42'));
console.log(typeof Number('42'));

console.log(String(123));
console.log(typeof String(123));

console.log(Number('12px'));//nan
console.log(typeof Number('12px'));//number

console.log(Number(true));// true --1
console.log(Number(false));// false --0
console.log(Number(null));// null --0
console.log(Number(undefined));// undefined -> NaN
console.log(Number(''));// '' -> 0

console.log(String(true));
console.log(String(null));
console.log(String(undefined));

const input = '25';

console.log(input + 5);//255
console.log(Number(input) + 5);//30

console.log('5' + 1);//51
console.log('5' - 1);//4
console.log('5' * 2);//10
console.log('10' / 2);//5

//האופרטור + יכול לחבר מחרוזות, לעומת -, *, / שממירים מחרוזות מספריות למספרים לצורך החישוב.


//-----task 9
console.log('5' + 5);//55
console.log('5' - 2);//3
console.log('5' + true);//5true
console.log(true + 1);//2
console.log(typeof (5 + '5'));//string
console.log(typeof null, typeof undefined);//object undefined
let x;
console.log(x, typeof x);//undefined undefined
console.log(Number('abc'), typeof Number('abc'));//NaN number
console.log(true === 'true');//false
const n = 5;
//n = 6;
//console.log(n);//TypeError

//-----task 10
const Name = 'David';
const Age = 25;
const City = 'Jerusalem';
const IsStudent = true;
const LikesCoffee = false;

console.log(`Name: ${Name}
Age: ${Age}
City: ${City}
Student: ${IsStudent}
Likes coffee: ${LikesCoffee}`);

console.log(typeof Name);
console.log(typeof Age);
console.log(typeof City);
console.log(typeof IsStudent);
console.log(typeof LikesCoffee);


/////
const product1 = 'Book';
const price1 = 30;
const quantity1 = 2;

const product2 = 'Pen';
const price2 = 5;
const quantity2 = 3;

const product3 = 'Notebook';
const price3 = 12;
const quantity3 = 1;

const total1 = price1 * quantity1;
const total2 = price2 * quantity2;
const total3 = price3 * quantity3;

const total11 = total1 + total2 + total3;

console.log(`
products:
${product1}: ${price1} x ${quantity1} = ${total1}
${product2}: ${price2} x ${quantity2} = ${total2}
${product3}: ${price3} x ${quantity3} = ${total3}
Total: ${total11}
`);

///////
const celsius = 25;
const fahrenheit = celsius * 9 / 5 + 32;

console.log(`${celsius}C = ${fahrenheit}F`);
console.log(typeof fahrenheit);

/////
const ageInput = '30';
const heightInput = '1.75';

console.log(ageInput, typeof ageInput);
console.log(heightInput, typeof heightInput);

const age22 = Number(ageInput);
const height = Number(heightInput);

console.log(age22, typeof age22);
console.log(height, typeof height);

//////
const value1 = 'Hello';
const value2 = 42;
const value3 = true;
const value4 = undefined;
const value5 = null;
const value6 = 'JavaScript';
const value7 = 3.14;
const value8 = false;
const value9 = 0;
const value10 = '123';

console.log(`Value: ${value1}, Type: ${typeof value1}`);
console.log(`Value: ${value2}, Type: ${typeof value2}`);
console.log(`Value: ${value3}, Type: ${typeof value3}`);
console.log(`Value: ${value4}, Type: ${typeof value4}`);
console.log(`Value: ${value5}, Type: ${typeof value5}`);
console.log(`Value: ${value6}, Type: ${typeof value6}`);
console.log(`Value: ${value7}, Type: ${typeof value7}`);
console.log(`Value: ${value8}, Type: ${typeof value8}`);
console.log(`Value: ${value9}, Type: ${typeof value9}`);
console.log(`Value: ${value10}, Type: ${typeof value10}`);

//בונוס
console.log(0.1 + 0.2);//0.30000000000000004
//לאחר בירור נראה כי זה מספר שאי אפשר להציג אותו בבינארית ולכן הוא מוצג כFloat


console.log('b' + 'a' + +'a' + 'a');
//  'b' + 'a' = 'ba'
//  +'a' = NaN, כי האופרטור +  מנסה להמיר את 'a' למספר
// 'ba' + NaN = 'baNaN'
// 'baNaN' + 'a' = 'baNaNa'











