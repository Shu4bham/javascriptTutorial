// // const myArray = ["key1", "key2", "key3", "key4", "key5", "key6"];
// // console.log("array is ", myArray);
// // // let [var1, var2] = myArray;
// // // console.log(var2);
// // // console.log(var1);
// // let [var1, var2, ...newarray] = myArray;
// // console.log(newarray);
// // console.log(var2);


// const person = {
//     name : "Shubham",
//     age : 21,
//     "person hobbies" : ["swimming","cycling","running"]
// };
// const key = "name";
// const key2 = "email";
// // console.log(person["person hobbies"]);
// person[key2] = "shubhamkamboj2550@gmail.com";
// person1.gender = "Male";
// console.log(person);
// // console.log(person["age"]);
// // console.log(person[key]);

// // console.log(Object.keys(person));


// // for (const key in person) {
// //     console.log(key,": ", person[key]);
// // }

// for (const key of Object.keys(person)) {
//     console.log(key," : " ,person[key]);
// }

// const faculty = {
//     hair : "black",
//     shoes : "white"
// }

// console.log(faculty);


// const newobj = {...faculty,...person, key69 : "vvv"}
// console.log(newobj);

// const newst = [..."abc"];
// console.log(newst);



// function printhello(){
//     console.log("Hello world");
// }
// printhello();

// const printhello = function(){
//     console.log("Hello world");
// }
// printhello();

// const printhello = ()=> console.log("Hello world");

// printhello();


// const sumOfTwo = (num1, num2) => {
//     console.log(num1 + num2);
// }
// sumOfTwo(4, 5);


// function sumofthree(num1,num2,num3){
//     console.log(num1+num2+num3);
// }
// sumofthree(5,6,7);

// const sumofthree = function(num1,num2,num3){
//     console.log(num1+num2+num3);
// }
// sumofthree(2,3,4);

// const sumofthree = (num1, num2, num3) => {
//     console.log(num1 + num2 + num3);
// }
// sumofthree(2, 2, 4);






// const isEven = num => num % 2 === 0;

// console.log(isEven(9));



//lexical scope

// const myvar = "value59";

// const myfunc = ()=> {
//     function myfunc2() {
//         console.log("inside myfunc2",myvar);
//     }
//     const abd = function () {
//         console.log("inside abd",myvar);
//     }
//     console.log(myvar);
//     myfunc2();
//     abd();
// }
// myfunc()



//param destructuring

// const person = {
//     name : "Harshit",
//     age : 32,
//     gender : "male"
// };

// //in simple destructuring
// function printDetails(obj) {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.gender);
// }
// printDetails(person);

// const PrintDetails = (obj)=>{
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.gender);
// }

// PrintDetails(person);


//used widely in react
// const PrintDetails = ({name ,age,gender})=>{
//     console.log(name);
//     console.log(age);
//     console.log(gender);
// }

// PrintDetails(person);



// const PrintDetails = function({name : var1,age,gender : var3}){
//     console.log(var1);
//     console.log(age);
//     console.log(var3);
// }

// PrintDetails(person);



//rest parameters
// const add = (...numbers) => {
//     let total = 0;
//     for (const number of numbers) {
//         total += number;
//     }
//     return total;
// }
// console.log(add(1,2,3,4,5,6,7));



// Callback function
/*function ke andr function pass krna */
// const myfunc2 = function (name) {
//     console.log("Inside myfunc2");
//     console.log(`Your name is ${name}`);
//     return true;
// }
// const myfunc = (Callback) => {
//     console.log("Inside myfunc function");
//     Callback("Shubham");
// }
// myfunc(myfunc2);


// Function returning function

// const func = function () {
//     console.log("inside func");
//     function Hello() {
//         console.log("hello world");
//         // return "shubham"
//     }
//     return Hello;
// }
// const ans = func();
// ans();
// console.log(ans());




// Block scope vs function scope
// let and const are block scope
// var -> function scope
// console.log(toPrint);

// var toPrint = "hello world";
// {
//     {
//         var toPrint = "hello world";
//         // let toPrint = "hello world";
//         // const toPrint = "hello wor";
//         // console.log(toPrint);
//     }
// }

// {
//     console.log(toPrint);
// }


// var function scope 
// function abc() {
//     var toPrint = "hello world";
//     // const toPrint = "hello world";
//     console.log(toPrint);
//     function myFunc(){
//         const toPrint = "hey there";
//         console.log(toPrint);
//     }
//     // myFunc();
// }
// function bcd() {
//     console.log(toPrint);
// }
// abc();
// bcd();




// simple function
// function myfunc() {
//     console.log("Hello world");
// }
// myfunc();

// function expression
// const myfunc = function () {
//     console.log("Hello world");
// }
// myfunc();

// arrow functions
// const myfunc = ()=> console.log("Hello world");
// myfunc();


// const arr = [1, 3, 4, 2, 44, 56];
// arr.forEach((element, index) => console.log(element, index));


// const users = [
//     { firstName: "harshit", age: 23 },
//     { firstName: "mohit", age: 21 },
//     { firstName: "nitish", age: 22 },
//     { firstName: "garima", age: 20 },
// ];

// users.forEach(user=>console.log(user.firstName));


// map method
// const arr = [1, 3, 4, 2, 44, 56];
// const squareNumbers = arr.map(number=>  number*number);
// console.log(squareNumbers);



// const users = [
//     { firstName: "harshit", age: 23 },
//     { firstName: "mohit", age: 21 },
//     { firstName: "nitish", age: 22 },
//     { firstName: "garima", age: 20 },
// ];

// const fName = users.map(user =>{
//     return user.firstName;
// });
// console.log(fName);


// filter method
// const numbers = [1, 3, 4, 2, 44, 56];
// const evenNumbers = numbers.filter(number => {
//     return number%2 ===0;
// });
// console.log(evenNumbers);



// reduce method

// const numbers = [13,1121, 3, 42, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//     // console.log(accumulator, currentValue);
//     return accumulator+currentValue;
// },0/*initial value of accumulator*/);
// console.log(sum);



// // sort ,method
// // const numbers = [13,1121, 3, 42, 5];
// // console.log(numbers.sort((a,b)=>a-b));

// const products = [
//     {pId: 1,pNmae : "P1",price : 2020},
//     {pId: 2,pNmae : "P2",price : 20},
//     {pId: 3,pNmae : "P3",price : 2000},
//     {pId: 4,pNmae : "P4",price : 3000},
//     {pId: 5,pNmae : "P5",price : 6000},
//     {pId: 6,pNmae : "P6",price : 10},

// ];
// const highToLow = [...products].sort((a,b)=>a.price-b.price);
// const highToLow = [].concat(products.sort((a,b)=>a.price-b.price));
// const highToLow = products.slice(0).sort((a,b)=>a.price-b.price);
// console.log(highToLow);



// find method

// const myArray = ["Hello", "cat","dog","lion"];
// console.log(myArray.find(a=>a.length===3));

// const users = [
//     {userId : 1, userName : "nitish"},
//     {userId : 2, userName : "harsh"},
//     {userId : 3, userName : "vivek"},
//     {userId : 4, userName : "sachin"},
//     {userId : 5, userName : "abhishek"},
// ];

// // console.log(users.find(a=>a.userId===3).userName);


// // find method
// const animals = ["tiger","lion","dog","cat","cheetah"];
// const ans = animals.find(a=>a.length===3);
// const ans1 = animals.find(a=>a==="cheetah");
// console.log(ans1);
// console.log(animals);
// animals.sort();
// console.log(animals);


// // every method
// const numbers = [2,4,6,8,10,12];
// const numbers1 = [2,4,6,8,10,12,3];
// const allEven = numbers.every(a=>a%2===0);
// console.log(allEven);
// const someOdd = numbers1.some(a=>a%2!==0);
// console.log(someOdd);




// // Fill method
// const numbers = [2,4,6,8,10,12,3];
// numbers.fill(1/*value */, 2/*Starting index */,5/*ending index */);
// console.log(numbers);



// // Splice method
// const items = ["item1","item2","item3","item4"];
// // // delete only
// // const deletedItem = items.splice(2/*starting index */,    1/*no. of values to delete */);  /*splice return deleted items */
// // console.log(deletedItem);
// // console.log(items);

// // // insert only
// // items.splice(2,0,"insertedItem1","insertedItem2");
// // console.log(items);

// // // Insert and delete
// // const deletedItem = items.splice(2,2,"insertedItem1","insertedItem2");
// // console.log(deletedItem);
// // console.log(items)




// // sets
// Set is iterable isliye ispe for of loop lga skte hai
// set ke liye length property define nhi hoti, length for of loop se aa jayegi
// // const numbers1 = [2,4,6,8,10,12,3];
// const numbers = new Set([23,2,2,21,1,2,3,8,12,2136,4,25,12,21,3,8]);
// numbers.add(7);
// console.log(numbers);
// for (const item of numbers) {
//     console.log(item)
// }
// // console.log(numbers[3]); /*No index based access */


// const newSet = new Set();
// newSet.add(1);
// newSet.add(2);
// newSet.add(3);
// newSet.add(5);
// const numbers1 = [2,4,6,8,10,12,3];
// newSet.add(numbers1);
// newSet.add(numbers1);/*Name se array paas krenge to ek baar hi add hoga kyonki name sirf location ko 
// refer kr rha hai or wo location pehle se hi set me add hai to duplicate add nhi hoga */
// newSet.add([2,3,5]);
// newSet.add([2,3,5]);/* isme ye 2nd array add ho jayega set me kyonki dono array alag alag memory locations pe bnenge*/
// console.log(newSet);
// console.log(newSet.length);/*Undefined */
// let length = 0;
// for (const item of newSet) {
//     console.log(item);
//     length++;
// }
// console.log(`length of the set is ${length}`);





// maps

// const person = {
//     fName : "Harshit",
//     age : 10,
//     gender : "male",
//     1 : "one"
// };
// person["lname"] = "vaishishth";
// for (const key in person) {
//     // console.log(key);
// }
// console.log(person[1])


// map declarition
// const person = new Map([['fName','harshit'],['lName','kamboj'],['age',9]]);
// console.log(person);


// const person1 = new Map();
// person1.set('fName','Harshit');
// person1.set('lName',"Kamboj");
// person1.set('age',9);
// person1.set(1,"one");
// person1.set([1,2,3],"using array as a key");
// person1.set({fName : "shubham",lNmae:"kamboj"},"using object as key");
// // person1.set(person,"using object as key");
// console.log(person1);


// retrieving values
// console.log(person1.get('fName'));
// console.log(person1.get(1));
// console.log(person1.get('age'));
// console.log(person1.get({fName : "shubham",lNmae:"kamboj"});/*we can not directly access the values with cmplex keys */

// for (const key of person1.keys()) {
//     console.log(key, typeof key);
// }

// maps are iterable so we can implement for of loop

// for (const key of person1) {
//     console.log(key);
//     /*It gives array of key values pairs so we need to destructure it 
//     i.e [key,value] in place of key
//     */

// }
// for (const [key,value] of person1) {
//     console.log(key , value);
// }



/*Adding extra information to an existing object using map */

// const person1 = {
//     id : 1,
//     fName : "Harshit"
// };
// const person2 = {
//     id : 2,
//     fName : "shubham"
// };

// const extraInfo = new Map();
// extraInfo.set(person1,{age: 9, gender : "male"});
// extraInfo.set(person2,{age : 20,gender:"male"});

// console.log(person1.id);
// console.log(person1.fName);
// console.log(extraInfo.get(person1)['age']);
// console.log(extraInfo.get(person1).age);
// console.log(extraInfo.get(person1).gender);



// console.log(person2.id);
// console.log(person2.fName);
// console.log(extraInfo.get(person2)['age']);
// console.log(extraInfo.get(person2).age);
// console.log(extraInfo.get(person2).gender);







// // object.assign property

// /*object ki copy bnane ke liye, other method is to use spread opreator */

// const obj1 = {
//     key1:"value1",
//     key2:"value2"
// };
// const obj2 = {...obj1};/*one way */
// obj1.key3="value3";
// console.log(obj1);
// console.log(obj2);
// const obj3 = Object.assign({},obj2);  /*2nd way empty array paas krna padega */
// obj2.key4="value4";
// console.log(obj3);






// // optional chaining
// /*agar value nhi hai to error nhi dega */
// const user = {
//     fName :"Shubham",
//     address: {houseNumber:"276"},
//     // dob:{date:6,month:3,year:2002}
// };
// console.log(user.fName);
// console.log(user.address.houseNumber);
// // console.log(user.dob.date);/*agar dob wla key value pair commented hai to ye line error degi */
// /*optional chaining mtlb . ki jgh pe ?. use krna */
// console.log(user?.dob?.date);








// methods
// /*function inside objects */
// const person = {
//     fName : "harshit",
//     age : 12,
//     about : function () {
//         console.log(this);
//         console.log(`${this.fName} is ${this.age} years old!`);
//     }
// };

// person.about();


// /*Declaring Function outside */
// function personInfo() {
//     console.log(`${this.fName} is ${this.age} years old!`);
// }
// const person = {
//     fName: "harshit",
//     age: 12,
//     about: personInfo  /*yaha sirf function name likhna hai uske baad braces nhi lgani */
// };
// person.about();





// // call, apply and bind methods
// /*call */
// function hello() {
//     console.log("hello world");
// };
// // hello();
// hello.call();/*aise bhi call kr skte hai */


// /*call ke params me hme this object and dusre arguments pass krne hote hai */

// const user1 = {
//     fName : "Harshit",
//     age:12,
//     about : function () {
//         console.log(`${this.fName} is ${this.age} years old`);
//     }
// };
// const user2 = {
//     fName : "Shubham",
//     age:22,
//     /*user does not have about function but still we will print information using about of user 1 */
// };
// user1.about.call(user2/*yaha ye this ki value pass kri hai function ko */);


/*agar about function hi objects ke bahar ho to */
// function about () {
//     console.log(`${this.fName} is ${this.age} years old`);
// }
// const user1 = {
//     fName : "Harshit",
//     age:12,
// };
// const user2 = {
//     fName : "Shubham",
//     age:22,
// };
// about.call(user1);
// about.call(user2);


// /*agar function me arguments bhi paas krne ho to */
// function about (favMusician,hobby) {
//     console.log(`${this.fName} is ${this.age} years old`);
//     console.log(favMusician,hobby)
// }
// const user1 = {
//     fName : "Harshit",
//     age:12,
// };
// const user2 = {
//     fName : "Shubham",
//     age:22,
// };
// about.call(user1/*ye first wali this ki value */, "honey singh","coding");
// about.call(user2,"aastha gill", "sleeping");




// /*Apply method */
// /*internaly call ko hi apply krta hai farq itna hai ki extra arguments ko array list me pass krte hai */
// function about (favMusician,hobby) {
//     console.log(`${this.fName} is ${this.age} years old`);
//     console.log(favMusician,hobby)
// }
// const user1 = {
//     fName : "Harshit",
//     age:12,
// };
// const user2 = {
//     fName : "Shubham",
//     age:22,
// };
// about.apply(user1/*ye first wali this ki value */, ["honey singh","coding"]);
// about.apply(user2,["aastha gill", "sleeping"]);



// bind method
// /* Ye ek function return krta hai jisko run krne pe desired output milegi */

// const myFunc =()=>{
//     console.log("Hello world");
// }

// const myfunc2 = myFunc.bind();
// myfunc2();/*myfunc2 me myFunc function store ho gya, ab myFunc2 ko run krenge to myFunc waala kaam hoga */


// const user1 = {
//     fName:"harshit",
//     age : 23,
//     about(favMusician,hobby){
//         console.log(`Name is ${this.fName} and age is ${this.age}, favmusician = ${favMusician}, hobby = ${hobby}`);
//     }
// };
// const user2 = {
//     fName:"shubham",
//     age : 20
// };

// // user1.about("honey singh","sleeping");
// // const details = user1.about;
// // console.log(user1.about);/*both details and user1.about have same function */
// // console.log(details);
// // details("honey singh","sleeping");/*yaha fName and age ki values undefined aayengi kyunki hmne function ko assign to kia but user1 ke sath bind nhi kia, Although about and details have same function content but they will not produce same output */

// /*name or age ki output undefined na aaye iske liye hme function ko user1 ke sath bind krna hoga */
// const details2 = user1.about.bind(user2/*ye this ko paas kia hai */);
// details2("honey singh","sleeping");






// arrow function and this
/*arrow function ka this nhi hota iska this ek level up hota hai, arrow function ke this ko hum change nhi kr skte */

// const about = (favMusician,hobby)=>{
//     console.log(`Name is ${this.fName} and age is ${this.age}, favmusician = ${favMusician}, hobby = ${hobby}`);
// }

// const user1 = {
//     fName:"harshit",
//     age : 23,
//     about: (favMusician,hobby)=>{
//         console.log(`Name is ${this.fName} and age is ${this.age}, favmusician = ${favMusician}, hobby = ${hobby}`);
//     }
// };
// user1.about("honey singh","sleeping");/*although hmne user1 ke sath this ko call kia hai but ye name or age undefined dega */
// user1.about.call(user1,"honey singh","sleeping")/*we cannot change this of arrow function */


// about.call(user1,"honey singh","sleeping");/*same undefined output if we make function outside the object */










// /*short way to create methods in object */

// const user1 = {
//     fName:"harshit",
//     age : 23,
//     /*insted of about : function(params){

//     } */
//     about(favMusician,hobby){
//         console.log(`Name is ${this.fName} and age is ${this.age}, favmusician = ${favMusician}, hobby = ${hobby}`);
//     }
// };





// create a function 
// 1.)that create object
// 2.) add key value pair 
// 3.) object ko return krega 

// function createUser(fName, lNmae, age) {
//     const user = {}
//     user.fName = fName;
//     user.lNmae = lNmae;
//     user.age = age;
//     user.about = function (){
//         console.log(`${this.fName}   ${this.lNmae}   ${this.age}`);
//     }
//     return user;
// }

// const user1 = createUser("Shubham","Kamboj",21);
// console.log(user1);
// user1.about();






/*jo functions last wale me object ke andar hi define kiye the unko alag se ek object me define krna */
/*store methods in different object to reduce redundancy of code */
const userMethods = {
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1.about());
console.log(user3.about());
