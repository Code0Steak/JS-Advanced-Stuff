// JS is a dynamic programming language which when applied to a HTML document,can provide dynamic interactivity to webpages.
// supports first-class-functions, functions can be sent as parameters to other functions, can be nested,etc.

// types of variables: var(globally scoped), let(latest ES6), const(latest ES6)

//datatypes: string, number, boolean, array, object, undefined, null, symbol

//JS supports dynamic typing = "you don't need to specify the datatype of a variable, set its value, js automatically detects the datatype!!!!"

egg = 2;
recipe = "omlet";
// variable mixing:
console.log(typeof (recipe + egg));// string + number gives string.

//operators: {addition: +,subtraction: -,multiplication: *,division: /,equality: ===, assignment: =, 
//remainder: %, expo: **}
const s = "Ameya loves JS";

console.log(s.length);
console.log(s.substring(5,14).toLocaleUpperCase());

let splitArray = s.split(" ");
console.log(splitArray);

//Loop through array:

fruits = ['mango','banana','apple','strawberry'];

for(let i of fruits)
 console.log(i);

//Higher order array methods: 

items = [

    {
        name : 'Me album',
        price: 50
    },
    {
        name : 'Chanel purse',
        price: 350
    },
    {
        name : 'Vogue Magzin',
        price: 100
    },
    {
        name : 'Gucci Hoodie + Pants',
        price: 233
    },
    {
        name : 'high heels',
        price: 160
    },
    {
        name : 'iPhone 11 Pro',
        price: 999
    }

];

 // Filter
 let filtered = items.filter((item)=>{return item.price < 100});

 console.log(filtered);

 //Map

 let newmapOfCostly = items.map((item) => { 
      return item.name;
    
 })
    console.log(newmapOfCostly);

/* 
 nest the abv as:
 let b = items.filter((item)=>{return item.price > 200}).map((item)=>{return item.name})
 to get the names of items whose prices are greater than 200.
*/

//find

let found = items.find((item)=>{
    return item.name = "Me album";
})

console.log(found);

//for-each doesn't return anything like the prev ones!! just iteriates
let list = items.forEach(element => {
    console.log(element.name);
});

//some, to check if at least there are some items following the condition:
let yesIamCheap = items.some((item)=>{
    return item.price < 200;
})

console.log(yesIamCheap);
//every, t check that every single item follows!!

//reduce

let totalPrice = items.reduce((subTotal,item)=>{return item.price + subTotal},0);
console.log(totalPrice);

//includes, checks if the given item is included in the array.

console.log(items.includes(items.name === 'Me album'));


//constructor function:

function iAmaConstructorFunct(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;

}

iAmaConstructorFunct.prototype.allData = () => {

    return `${this.name}${this.age}${this.sex}`;
}

let Ameya = new iAmaConstructorFunct('Ameya','20','M');

console.log(Ameya.allData());

class Food{
    constructor(foodName,price){
        this.foodName = foodName;
        this.price = price;
    }

    getDiscount(){
        this.price -= this.price * 0.09;
    }

    priceAfterDiscount(){
        return this.price;
    }

}

let apple = new Food('Apple',109);
apple.getDiscount();
console.log(apple.priceAfterDiscount());
console.log(" ");

//OOP JS:

const author = {
    name: "ameya keskar",
    intro: "developer",
    interest: ['JS','svg anmation','python for the backend','Javs for algo and ds'],
    printInterests: ()=>{
        this.interest.forEach((intr)=>console.log(intr));
    }
}

console.log(author);

console.log(Object.keys(author));
console.log(Object.values(author));
console.log(author.printInterests);
console.log(" ");


//advanced concepts:

//Hoisting:
/*
console.log(x);

let x = 10;*/

/* This will give result as 'undefined'. 
when a JS cod eis run all the variable declarations are moved in the beginning, this is called 'hoisting'.

so, in the abv. eg the code rearranges as:

    let x;
    console.log(x);
    x = 10;

*/

//IIFE: Immediately Invoked Function Expression.
/*

    (function quickInvoke(){
        console.log("IIFE");
    })();

*/

//SCOPE
const hell = "ya";

function scopy(){
    const hell = "xoxo";
    print();
    function print(){
        console.log(hell);
    }

}

scopy();


// call stack:
/*
function poo(){
    throw new Error('poo-poo error!!!');
}

function loo(){
    return poo();
}

function yo(){
    return loo();
}

yo(); */

// event loop:
// JS is a single-threaded programming language. If a 
console.log('Hi');//enters call stack, is executed immediately.
setTimeout(()=>console.log("How are you ?"),0);//enters call stack. as it has to wait for its processing..
//is removed from call stacks and waits till the web api's timer goes off.
console.log("xyz");//doesn't give f about the abv thing and enters call stack, is executed immediately.

//once the timer goes off, the function goes in the callback queue.
// the event loop does one single task,checks if there is any task in the callback queue, if there is:
//checks if the call stack is empty. if it is empty pushes the task from the callback queue to the call stack for exe
//else the task waits in the callback queue, for the call stack to go empty.

//so settimeout() does not guarentee that the task will be finished in the desired time, it just takes the min. value of completion, but doesn't guarentee it.

console.log(" ");

console.log(" ");

//Async JS:


//callbacks
const posts = [

    {title:'post1', body: 'this is post 1'},
    {title:'post2', body: 'this is post 2'},
    {title:'post3', body: 'this is post 3'},
    {title:'post4', body: 'this is post 4'}
];

function getPost(){
        let post = '';
        setTimeout(
            ()=>{
                posts.forEach((pos)=>{
                    post += `<li>${pos.title} ${pos.body}</li>`;
                })
                console.log(post);
            }
            ,1000
        )

}


function createPost(post){

    setTimeout(()=>{posts.push(post);},2000)
    
}

getPost();
createPost({title: 'post x', body: 'this is post x'});
/*the getPost request completed in 1s, the new blog was created in 2s.
 So, there is no chance that the new blog will be shown in the o/p of getPost();

    in order to do so the abv can be manipulaed as follows:

*/
/*
function createPostModified(post,callback){
    setTimeout(()=>{
        posts.push(post);

        //error? :/ :/ :/ :/
        callback();
    },2000)
}

createPostModified({title: 'callback post', body: 'hehehehehhehehe'},getPost);

createPostModified(); 

this prints all the 
*/

//promises:

let p = new Promise((resolve,reject)=>{
    let you = "Happy";
    if(you !== "Happy")
        resolve("Promise Resolved");
    else
        reject("Promise not kept :/");
});

p.then((message)=>{
    console.log('this will be exe when the promise is kept. ' + message)
}).catch((message)=>{
    console.log('this is when the promise is not kept.' + message)
});

// promise.all to run promises in parallel:
let one = true; let two = false;
let veg = new Promise((resolve,reject) => {
    if(one)
        resolve('Vegetables bought!');
    else
        reject('Vegetables are left on the list');
    }
)

let bacon = new Promise((resolve,reject) =>{
    if(two)
        resolve('Becon purchased!!');
    else
        reject('Becon is on the list');
    }
)

Promise.all([veg,bacon]).then((message)=>{console.log("the message is: " + message)
}).catch((message)=>{console.log("the message is: " + message)});

//in the abv eg. all the promises are run in parallel. 
//if one promise is executed, it has to wait for the execution of the other promise. 

//promise.race

Promise.race([veg,bacon]).then((message)=>{console.log(message)}).catch((message)=>{console.log(message)});

// 2 consecutive promises:

function makeRequest(request){
    return new Promise((resolve,reject)=>{
        if(request === "Google Pay")
           resolve(true);
        else
           reject(false);
    })
}

function respond(yay,request){
    return new Promise((resolve,reject) => {
        if(yay)
            resolve("Google Pay says, transaction processsing");
        else
            reject("we don't use " + request + " it is thrash!! :))");
    })
}

makeRequest("PayTm").then((x)=>{if(x)return respond(x,"PayTm")}).then("wait-wait-wait").catch("end");


console.log(" ");
//callback practice:
/*
const food = [
    {name: 'buttermilk',cost: 19},
     {name: 'milk',cost: 40},  {name: 'cream',cost: 30}
  ]
  
    function getItem(item){
      let found;
     setTimeout(()=>{ 
         found = food.filter((x)=>{return x.cost == item}).map((x)=>{return x}); 
        console.log(found);
    
    },1000)
  
  }
  
  function addItem(_item,_callback(x)){
     setTimeout(()=>{food.push(_item)},2000);
     _callback(x);
  }
  
  //getItem(50);
  addItem({name: 'cheese',cost: 50},getItem(50)); 
  
  */


  //async-await:
function positive(feedback){
    return new Promise((resolve,reject)=>{
         if(feedback == "positive")
            resolve(true);
         else
            reject(false);
        })
}

function response(x){
    return new Promise((resolve,reject)=>{

        if(x == true)
            resolve("Yay!! really appreciate it");
        else
         reject("sorry for the inconvenience!!");

    })
}

async function testfeedback(){

    try{
        let taken = await positive("positive");
    console.log(taken);
    let respond = await response(taken);
    console.log(respond);
    
    }
    catch(err){
        console.log(err);
    }
    
}

testfeedback();


