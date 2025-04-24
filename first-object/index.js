const person = {
    name: {
        first: "Bob",
        last:  "Smith"
    },
    age: 32,
    bio(){
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf(){
        console.log(`Hi i'm ${this.name[0]}.`)
    }
};

person.age = 43;
person["name"]["last"] = "Cratchit";
person["eyes"] = "hazel";
person.farewell = function (){
    console.log("Bye everbody");
};

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

console.log(person["name"]["last"]);
console.log(person.age); 
console.log(person.eyes)
console.log(person.farewell())
console.log(person.height)