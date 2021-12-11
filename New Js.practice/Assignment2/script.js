//Challenge 1
let markHeight = 1.69;
let markMass = 95;

let johnHeight = 1.88;
let johnMass = 95;

let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / (johnHeight * johnHeight);
let BMIMarkIsHigher = johnBmi > markBmi;
console.log(markBmi, johnBmi, BMIMarkIsHigher);
if (markBmi > johnBmi) {
  console.log(`Mark's Bmi (${markBmi}) is higher than John's Bmi (${johnBmi})`);
} else {
  console.log(`John's Bmi (${johnBmi}) is higher than Mark's Bmi (${markBmi})`);
}
let firstName = "Sahil";
let lastName = "Katoch";
let birthYear = 1998;
let currentYear = 2021;
let age = currentYear - birthYear;

//Old Way, Don't Do this Way //
let Sahil = "I' am " + firstName + lastName + " and i am " + age + " years old";
console.log(Sahil);
//New Way//
Sahil = `I am ${firstName} ${lastName} and I am ${age} years old`;
console.log(Sahil);
//Challenge 2
const dolphinScores = 92 + 107 + 80;

const koalaScores = 92 + 107 + 80;

const averageDolphinScores = dolphinScores / 3;
const averageKoalaScores = koalaScores / 3;

console.log(averageKoalaScores, averageDolphinScores);
if (averageKoalaScores > averageDolphinScores) {
  console.log("Team Koala wins the game");
} else if (averageKoalaScores === averageDolphinScores) {
  console.log("Both scores the same!");
} else {
  console.log("Team Dolphin wins the game");
}
//Challenge 3
const day = "";
switch (day) {
  case "Monday":
    console.log("Today is  a working day");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Another working day");
    break;
  case "Saturday":
    console.log("Today is a half-day");
    break;
  case "Sunday":
    console.log("Finally a off day");
    break;
  default:
    console.log("Sorry no day found!");
    break;
}

if (day === "Monday") {
  console.log("Today is  a working day");
} else if (
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday" ||
  day
) {
  console.log("Another working day");
} else if (day === "Saturday") {
  console.log("Today is a half-day");
} else if (day === "Sunday") {
  console.log("Finally a off day");
} else {
  console.log("Sorry no day found!");
}
//Challenge 4
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill} , the tip was ${tip} ,and the total value is ${
    bill + tip
  }`
);

const billValue = 600;
const tipValue = billValue >= 100 && bill <= 500 ? bill * 0.3 : billValue * 0.6;
console.log(
  `The bill was ${billValue} , the tip was ${tipValue} ,and the total value is ${
    billValue + tipValue
  }`
);
function fullName(firstName, lastName) {
  return firstName + lastName;
}
console.log(fullName("Sahil", 23));
function newUser(name, age, job) {
  return console.log(
    `My name is ${name}. I am ${age} years old and i am a ${job}`
  );
}
newUser("Ajay", 45, "Teacher");
newUser("Sahil", 23, "Web-Dev");

const shoeBrandName = "Nike";
const buy = false;

if (buy) {
  console.log(`Wow you got that ${shoeBrandName} shoes`);
} else {
  console.log("Better luck next time!");
}
const shouldLogin = (useName, isLoggedIn) => {
  if (isLoggedIn) {
    console.log(`${useName} logged in successfully`);
  } else {
    console.log(`User not found`);
  }
};
shouldLogin("Sahil", true);
shouldLogin("Akshay", false);
shouldLogin("Akshay", true);
const currentAgeCheckerFunction = (birthYear, currentYear) => {
  console.log(`My current Age is ${currentYear - birthYear} years old`);
};
currentAgeCheckerFunction(1998, 2021);
currentAgeCheckerFunction(1938, 2021);
currentAgeCheckerFunction(1968, 2021);
currentAgeCheckerFunction(1956, 2021);
function hasPizza(pizza) {
  return pizza;
}
const finalResult = hasPizza(true);
console.log(finalResult);
// Practice Call function in objects

const userInfo = {
  firstName: "Sahil",
  lastName: "Katoch",
  fullInfo: [],
  addUser(age, gender) {
    console.log(
      `${this.firstName} ${this.lastName} is ${age} years old and he is a ${gender}`
    );
    this.fullInfo.push({
      name: `${this.firstName}${this.lastName}`,
      age,
      gender,
    });
  },
};
const anotherUser = {
  firstName: "Akshay",
  lastName: "Katoch",
  fullInfo: [],
};
const anotherUserOne = {
  firstName: "Vineet",
  lastName: "Manhas",
  fullInfo: [],
};
var user = userInfo.addUser;
user.call(userInfo, 23, "Male");
user.call(userInfo, 24, "Male");
user.call(anotherUser, 25, "Male");
user.call(anotherUser, 40, "Male");
user.call(anotherUserOne, 22, "Male");
user.call(anotherUserOne, 35, "Male");
// Closures Example//

let name = prompt("Enter your Name");

var user = () => {
  let name = prompt("Enter your Name");
  console.log(`Hello I am ${name}`);
};
user();
user();
user();
const makeFunc = () => {
  var name = prompt("Enter your Name");
  const displayName = () => {
    console.log(`Your name is ${name}`);
  };
  return displayName;
};

var myFunc = makeFunc();
myFunc();
const someData = (param) => {
  if (typeof param === "string") {
    console.log("This is a String");
  } else if (typeof param === "object") {
    console.log("This is an Object");
  } else {
    console.log("This is an Array");
  }
};
someData([1]);
// private variables
// we can create a private variable by declaring it inside a function
const some = () => {
  let privateVariable = "Something Special";
  //Lets create a helper function that will help us to get the data of that private variable
  return function () {
    return privateVariable;
  };
};
// console.log(privateVariable);
const secretVariable = some();
console.log(secretVariable());
// Finding Vowels in the String
const findVowels = (str) => {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let chars of str.toLowerCase()) {
    if (vowels.includes(chars)) count++;
  }
  return count;
};
console.log(findVowels("Umbrellajalsjwqpoewjwqejwoejwoneuwe0ouwepowjeowej"));
// Lets Empty an Array with
let array = ["a", "e", 1, 2, 3];
const newArray = array; //Refer array to another variable
array = []; //Empty Array now
console.log(newArray);
console.log(array);
// Modify the given Array and an Object

let array1 = ["a", "e", "i"];
array = ["a", "e", "i", "o"];
console.log(array1);
let name1 = {
  firstName: "Sahil",
  lastName: "Katoch",
};
name.firstName = "Akshay";
name["lastName"] = "Kumar";
console.log(name1);

// Lets check weather a given string is empty or not

const isEmpty = (str) => {
  if (str.length === 0) {
    return "Empty String";
  } else {
    return str.length;
  }
};
console.log(isEmpty(""));
console.log(isEmpty("sAHIL"));
console.log(isEmpty("HSQHDSOAHS"));

// Lets split a string and convert it into an array of words

const convertString = (str) => {
  return str.split(" ");
};
console.log(convertString("Sahil"));

// Write a JavaScript function to extract a specified number of characters from a string?

const extractString = (str) => {
  // return str.substring(0, chars);
  return str.slice(0, 7);
};
console.log(extractString("Sahil katoch"));
// Lets parametrize a string
const parametrize = (str) => {
  return str.toLowerCase().replace(/\s/g, "-");
};
console.log(parametrize("Hello from UK , MY name is Sahil"));
// capitalize a first character of String
const capitalize = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};
console.log(capitalize("hello"));

// Lets capitalize the first character of a string

const capitalize1 = (str) => {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
};
console.log(capitalize1("hello from my side"));
const capital_letter = (str) => {
  str = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
};

console.log(
  capital_letter(
    "Write a JavaScript program to capitalize the first letter of each word of a given string."
  )
);
const capitalLetters = (str) => {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
};
console.log(
  capitalLetters("Write a JavaScript program to capitalize the first letter")
);
// Lets create a function to convert upper case letters to lower case and vice versa

const swapCase = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
};
console.log(swapCase("aslahHASKAahjlHSL"));
// Write a JavaScript function that takes a string which can have both lower and upper case letters as a parameter and converts alternate character to upper case & lower case, starting from upper case?
const alternate = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
};
console.log(alternate("hello there brother"));
// Multiply the given string
const multiply = (str, len) => {
  let result = str;
  if (len && len > 1) {
    for (let i = 1; i < len; i++) {
      result += str;
    }
  }
  return result;
};
console.log(multiply("Sahil", 2));
console.log(multiply("Sahil", 16));
console.log(multiply("Sahil", 4));
console.log(multiply("Sahil", 7));

// Lets learn some promises

// callback function
// callback function is a function that is passed to another function as an argument

const nameOne = (str) => {
  return str;
};
console.log(nameOne("Sahil"));
console.log(setTimeout(nameOne, 3000));
const nameAll = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person = {
  firstName: "Sahil",
  lastName: "Katoch",
};
const person2 = {
  firstName: "",
  lastName: "",
};
console.log(nameAll.fullName.call(person));
const add = (x) => (y) => (z) => {
  console.log(x, y, z);
  return x + y + z;
};
add(4)(5)(6);
