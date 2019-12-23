// Debugging 🤖
console.time('counter');
const lol = {name: "amy", is: "happy"}
const food= {name: "pizza", is: "veg"}
const dodo = {name:"dodo", is:"bird"}

//to check errors console.log()

console.log({lol,food,dodo});

console.table([ lol,food,dodo]);
console.timeEnd('counter');


// Destructuring🚧

let dish = {
    name: "pizza 🍕",
    origin: "Italy",
    popularity: "worldwide",
    brands: ["Pizza Hut","Dominose"],
    yourRating: "5 ⭐️"
}

    //Bad code 💩

let pizzaBio = `${dish.name} comes from ${dish.origin}. is eaten ${dish.popularity}...`;

    //Good Code 👏
let {name,origin,brands} = dish;
console.log(brands);

//Spread Operator:

    //generally we use Object.assign(parent,child) to merge/ assign an object/entity to an object

    let types = [
        {type: "Neapolitan", dishes: ["pizza mariana","pizza margarita"]},
        {type: "American", dishes: ["chicago","NY style"]}
    ];

    let pizaaaaa = {...dish,...types};
    console.log(pizaaaaa);
     
    //array push/unshift/addingNewElement can be easily done with the spread operator.
    
//use higher order array methods instead of for loops!!

/* 
    All credits: Fireship 🔥!!!!!!!
*/