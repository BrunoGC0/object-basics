let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];


function getAverageAge(arr){
    return arr
    .reduce((sum, user) => sum + user.age , 0) /3
}

console.log(getAverageAge(arr))