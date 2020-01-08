/*

    Typescript is a superset of JS.
    It is a strongly typed language which provides effecient tooling 🛠(The TSC) to detect bugs at compile time.
    This helps us to write more predictable code.
    There is no learning curve as every JS code is valid in TS ╰(*°▽°*)╯
    It helps us to write code with future JS features, so stays always updated!!

    
*/
console.log('Hello World!');
//The TSC compiler by-default converts any TS code to ES3 🙆🏼‍♂️
//The async function below is not supported by ES3 and is transpiled to a weired function 
async function hello() {
    return '🍱🍱🍱';
}
//So we added, the tsconfig.json file, with some instructions!!
/*

    In the compilerOptions object in the tsconfig.json file, we added fields:
    1. "target" : "esnext", so that the code always transpiles to the latest supported ver. of JS
    2. "watch" : true, so that after every save the index.TS will be transpiled to index.js
    3. "lib" : ["dom","es2017"], to access all the latest supported dom API's.
*/
let happy = 100;
//The type of the abv variable will be set to number, it cannot be assigned a string or any data of datatype other than a number.
let notype = 23;
//The abv variable can be assigned data of any datypes.
notype = 'HaHaHa';
console.log(notype);
//With the union-pipe multypes were added to Style!
let myStyle;
console.log(myStyle);
const chef1 = {
    firstName: 'Gordon',
    lastName: 'Ramsay',
    SSN: 567889,
    designation: 'Celebrity Chef'
};
//Strong typing functions 🙇🏽‍♂️
function pow(x, y) {
    return Math.pow(x, y);
}
pow(2, 3);
