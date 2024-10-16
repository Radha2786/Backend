// This Keyword 

// const Person = {
//     name:"Radha",
//     age : 21,
//     greet: function(){
//         console.log(this);
//         console.log(this.name);
//     }
// }

// console.log("this outside block", this); // global context
// Person.greet();

// -----------------------------------------

// UseCase of This keyword 

// this is the constructor function 
// . In JavaScript, constructor functions are used to create objects of the same "type" or "structure." You can think of a constructor function as a blueprint for creating objects.
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Hi ${this.username}`);
    }
    return this;
}

// const user1 = User("Radha", 5, true);
// const user2 = User("Yash", 15, false);
// console.log(user1);

// Without new:
// If you don't use new, this inside the Animal function would refer to the global object (or undefined in strict mode), which would break things just like in the example you had earlier.

const user1 = new User("Radha", 5, true);
const user2 = new User("Yash", 15, false);
// console.log(user1);
console.log(user1.constructor);   // op : [Function: User]

// 1.whenever we use new keyword an empty object gets created which is called instance 
// 2.constructor function gets called bcz of new keyword 