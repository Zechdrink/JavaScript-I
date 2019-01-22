// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:
// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:

class Intern {
  constructor(id, name, email, gender){
  this.id = id;
  this.name = name;
  this.email = email;
  this.gender = gender;
  }
}

// 1, mmelloy0@psu.edu, Mitzi, F
let mitzi = new Intern(1, "Mitzi", "mmelloy0@psu.edu", "Female" );

// 2,kdiben1@tinypic.com,Kennan, M
let kennan = new Intern(2, "Kennan", "kdiben1@tinypic.com", "Male");

// 3,kmummery2@wikimedia.org,Keven, M
let keven = new Intern(3, "Keven", "kmummery2@wikimedia.org", "Male");

// 4,gmartinson3@illinois.edu,Gannie, M
let gannie = new Intern(4, "Gannie", "gmartinson3@illinois.edu", "Male");

// 5,adaine5@samsung.com,Antonietta, F
let antonietta = new Intern(5, "Antonietta", "adaine5@samsung.com", "Female");



// ==== Challenge 2: Reading Object Data ==== 
//=============================================
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.name);
// Kennan's ID
console.log(kennan.id);
// Keven's email
console.log(kennan.email);
// Gannie's name
console.log(gannie.name);
// Antonietta's Gender
console.log(antonietta.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

function speak(){
  console.log(`Hello, my name is ${this.name}!`);
}

kennan.speak = speak;
console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.

function mathIsFun(x, y, str){
  return console.log((x*y) + str);
}

antonietta.mathIsFun = mathIsFun;
console.log(antonietta.mathIsFun(3,5," is my new favorite number! =D"));


Intern.prototype.fish = function(){
  let water = console.log("icanswimfordays");
  return this.water;
}
kennan.fish();
console.log(kennan.fish);

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: 'Susan',
  age: 70, 
  speak: function(){
    console.log("my name is " + this.name);
  },
  child: {name: 'George',
  age: 50,
  talk: function(){
    console.log("my name is " + this.name);
  },
  grandchild: {name: 'Sam',
  age: 30,
  mock: function(){
    console.log("my name is " + this.name);
  },
    }
  }
}

// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.child.name);
// Log the name and age of the grandchild
console.log(parent.child.grandchild.name + " " + parent.child.grandchild.age);
// Have the parent speak
console.log(parent.speak());
// Have the child speak
console.log(parent.child.talk());
// Have the grandchild speak
console.log(parent.child.grandchild.mock());