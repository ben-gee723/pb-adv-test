// Answer Sheet - all answers should go here

// # Test - Programming Basics

// ## Test Instructions
// * Work from the `index.js` file provided in this repository.
// * Follow all of the instructions below to complete the test.
// * **Important**: Make sure that the names of your variables/functions match the names in the instructions below.
// * You can check whether your answers pass the unit tests provided. However, do not spend too much time trying to fix your issues to make them pass the tests - move on and try to attempt all questions.
// * Print solutions to the console where specified.
// * Make sure to commit and push your test.
// * Good luck!

// ### Data Structure
// #### Objects 
console.log("DATASTRUCTURE - Objects")
console.log("QUESTION 1. Key Pair Values (5 Points)")
// * Create an object called "profileData". Add four key pair values to the object: name, surname, age and city.

// INPUT 
// Object

let profileData = {
    name: 'John',
    surname: 'Doe',
    age: '30',
    city: 'Berlin'
}
console.log(profileData);



console.log("")
console.log("QUESTION 2. Object to Array (5 Points)")

// * Convert an object into a nested array of key pair values. Look the example below.

// **Given Object**
// ```javascript
// convertObjectToArray = {
//     "1": 10, 
//     "2": 20, 
//     "3": 30
// }
// ```
// **Expected Output**: 
// ```javascript
// [["1", 10], ["2", 20], ["3", 30]]
// ```

convertObjectToArray = {
    "1": 10,
    "2": 20,
    "3": 30
}
const objectToArray = (obj) => {
    return Object.defineProperties(obj);
}
console.log(convertObjectToArray);
// { '1': 10, '2': 20, '3': 30 }





console.log("")
console.log("ARRAYS")
console.log("QUESTION 1. Data Manipulation (10 Points)")

// * Create a function named "_convertArrayData_". Use array methods to manipulate the data the array below. The first two items in the array should switch positions and the third item should be replaced by a new item. Change the data to get the result below. Print your solution to the console.

// **Original Array**
// ```javascript
// ["coffee", "tea", "juice"];
// ```
// **Expected output**
// ```javascript
// ["tea", "coffee", "milk"];
// ```

// INPUT
// array methods
// switch positions of 1 and 2 --> index coffee + 1
// replace juice with milk

let arrayData = ["coffee", "tea", "juice"];
console.log(arrayData)

function _convertArrayData_(arrayDataInput) {
    // arrayDataInput[0] = ;
    arrayDataInput[0] = "tea";
    arrayDataInput[1] = "coffee";
    arrayDataInput[2] = "milk";
    console.log(arrayDataInput)

}
_convertArrayData_(arrayData);


console.log("")
console.log("QUESTION 2. Create Grid (10 Points)")

// * Create a function called "_createGrid_", which returns a grid of a 2D array by accepting two arguments: `size` (which determines the number of nested arrays and the number of elements in each nested array) and `char` (which determines the characters in each nested array). Print your solution to the console. 

// **Create Grid Function Call**
// ```javascript
// createGrid(3, "*")
// ```
// **Expected Output**
// ```javascript
// [["*", "*", "*"], 
//  ["*", "*", "*"], 
//  ["*", "*", "*"]]
// ```

// INPUT
// size --> # of nested arrays and # of elements
// char --> characters used i.e. *

function _createGrid_(size, char) {
    let array = [];
    let tripleArray = [];
    for (i = 0; i < 1; i++) {
        for (j = 0; j < size; j++) {
            array.push(char);
        }
    }
    for (k = 0; k < array.length; k++) {
        tripleArray.push(array)
    }
    console.log(tripleArray)
}
_createGrid_(3, "*")



console.log("")
console.log("QUESTION 3. Word Converter (10 Points)")

// * Given an array of words, create a function named "_wordConverter_" which uses an array method to add _"er"_ to the end of each string in the array. Look at the expected output below. **Important**: Do **not** use a loop to complete this task. Print your solution to the console.

// **Array of words**
// ```javascript
// ["smart", "kind", "sweet", "small", "clear"];
// ```
// **Expected output**
// ```javascript
// ["smarter", "kinder", 
// "sweeter", "smaller", "clearer"]
// ```

// INPUT
let arrayOfWords = ["smart", "kind", "sweet", "small", "clear"];

// OUTPUT
// er at end of the word

function _wordConverter_(arrayOfWordsInput, ending) {
    let newArrayOfWords = [];
    arrayOfWordsInput.map((word) => {
        let newWord = word + ending;
        newArrayOfWords.push(newWord);
    })
    console.log(newArrayOfWords);
}
_wordConverter_(arrayOfWords, "er");





console.log("")
console.log("CLASSES")
console.log("QUESTION 1. (10 Points)")

// * Create a blueprint for a course at DCI - using the `class` syntax in javascript. The class should be named "Course" The class should contain who the teacher is, whether the group is learning marketing or web development and the number of students taking the course.
// * The class should also have a method named "spaceNeeded" that checks how big a classroom should be depending on the number of students taking the course: 1 student =  2m². E.g. If a course has 10 students, then print: "_The classroom should be 20m²._". Print your solution to the console.
// * Create a method named "details" to print all the information of the course: "_This is a web development course taught by John Smith. There are 10 students taking the course._". Print your solution to the console.
// * **Note**: Please use the phrases found in the instructions above and just change the output depending on the teacher, course, number of students etc. 

// **Expected Output**
// ```javascript
// course.spaceNeeded();
// `The classroom should be 44m².`

// course.details();
// `This is a web development course taught by John. There are 22 students taking the course.`
// ```

// INPUT
// teacher
// marketing or web development
// number of students
// 1 student = 2m²

class Course {
    constructor(teacher, courseChosen, numberStudents) {
        this.teacher = teacher;
        this.courseChosen = courseChosen;
        this.numberStudents = numberStudents;
    }
    details() {
        return `_This is a ${this.courseChosen} course taught by ${this.teacher}. There are ${this.numberStudents} students taking the course._`;
    }
    spaceNeeded() {
        let space = this.numberStudents * 10;
        return `_The classroom should be ${space}m²._`
    }
}

const newCourse1 = new Course("Mariam", "Web Development", 10);
const newCourse2 = new Course("Ghassan", "Marketing", 20);

console.log(newCourse1.details());
console.log(newCourse1.spaceNeeded());
// _This is a Web Development course taught by Mariam. There are 10 students taking the course._
// _The classroom should be 100m²._


console.log(newCourse2.details());
console.log(newCourse2.spaceNeeded());
// _This is a Marketing course taught by Ghassan. There are 20 students taking the course._
// _The classroom should be 200m²._





console.log("")
console.log("PROBLEM SOLVING")
console.log("QUESTION 1. Format your string (10 Points)")


// * Write function named "_capitalizeFirstLetter_" that accepts a string as an argument. The function should convert the first character of each word to uppercase. **Example** _the quick brown fox_ → _The Quick Brown Fox_. Print your solution to the console.

// **Expected Output**
// ```javascript
// capitalizeFirstLetter("hey there"); → `Hey There`
// ```

// INPUT
// string
// OUTPUT
// capitalised first letters

// .split 
// .join

let unCapString = "the quick brown fox";

function _capitalizeFirstLetter_(unCapString) {
    let splitString = unCapString.split(" ");
    let newArray = [];
    let newString = [];
    for (i = 0; i < splitString.length; i++) {
        for (j = 0; j < splitString[i].length; j++) {
            newArray = splitString[i][0].toUpperCase() + splitString[i].substring(1).toLowerCase();
        }
        newString.push(newArray)
    }
    console.log(newString.toString());
}
_capitalizeFirstLetter_(unCapString)




console.log("")
console.log("QUESTION 2. Validation (15 Points)")

// * Look at the unit tests for validating a pin. Create a function named "_validPin_" that fulfills the requirements of the tests. 

// **Requirements**:
// * The pin code must consist of only numbers.
// * The pin code must be 4 digits long. 
// * The pin should have at least **two** different digits.
// * The pin code's last digit should be even.
// * The pin code should add up to at least 5. 

// The function should print `true` if the pin meets all the requirements and `false` if it does not. Print your solution to the console.

// INPUT
// only numbers --> excludes symbols and letters
// 4 digits --> .length === 4
// min 2 different digits if ((num1, num2, num3, num4) => ())
// last digit is even = if (# % 2 === 0)
// pin sum = # > 5

// OUTPUT
// true

// function _validPin_(pinInput) {
//     let numbers = "0123456789";
//     for (let i = 0; i <= pinInput.length; i++) {
//         if (numbers.indexOf(pinInput[i]) === -1) {
//             return "Must only have numbers"
//         } else {
//             // return "Only numbers ---> " + true;
//             if ((pinInput.length > 4) || (pinInput.length < 4)) {
//                 return "Must be exactly 4 numbers"
//             }
//             else {
//                 return "Has exactly 4 numbers ---> " + true;
//             }
//         }
//     }
// }
// console.log(_validPin_("4444"));

function _validPin_(pin) {
    // return true or false
    if (typeof pin === "string" && !~pin.indexOf('.') && !isNaN(Number(pin)) && (pin.length === 4)) {
        return true;
    } else {
        return false;
    }
}
console.log(_validPin_("4444"));

// **Expected Output**
// ```javascript
// validPin("1234"); → true

// validPin("1235"); → false // last number should be even

// validPin("wwww"); → false // should only consist of numbers

// validPin("12345"); → false // should be 4 digits, not 5

// validPin("2222"); → false // should have at least 2 different digits

// validPin("1000"); → false // does not add up to at least 5

// validPin("2224"); → true 


// ```
// **Testing with Jest**

// * The `test.js` file and `package.json` file have been provided for you.

// * Firstly, run the following command in the appropriate folder to install and save jest as a dependency.
// ```
// npm install --save-dev jest
// ```
// * Run the following command in order to run the test. The script has already been added to the `package.json` file.
// ```
// npm run test
// ```
// * For more information, you can refer to Jest's [documentation](https://jestjs.io/docs/en/getting-started).






// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
// module.exports = {profileData, convertObjectToArray, convertArrayData, createGrid, wordConverter, Course, capitalizeFirstLetter, validPin};
