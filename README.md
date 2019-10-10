# Test - Programming Basics

## Test Instructions
* Work from the `index.js` file provided in this repository.
* Follow all of the instructions below to complete the test.
* **Important**: Make sure that the names of your variables/functions match the names in the instructions below.
* You can check whether your answers pass the unit tests provided. However, do not spend too much time trying to fix your issues to make them pass the tests - move on and try to attempt all questions.
* Print solutions to the console where specified.
* Make sure to commit and push your test.
* Good luck!

### Data Structure

#### Objects 
* Create an object called "profileData". Add four key pair values to the object: name, surname, age and city.

* Convert an object into a nested array of key pair values. Look the example below.

**Given Object**
```javascript
myObj = {
    "1": 10, 
    "2": 20, 
    "3": 30
}
```
**Expected Output**: 
```javascript
[["1", 10], ["2", 20], ["3", 30]]
```

#### Arrays 
* Use array methods to manipulate the data the array below. Change the data to get the result below. Print your solution to the console.

**Original Array**
```javascript
["coffee", "tea", "juice"];
```
**Expected output**
```javascript
["tea", "coffee", "milk"];
```

* Create a function called "_createGrid_", which returns a grid of a 2D array by taking two arguments: size (which determines the number of nested arrays and the number of elements in each nested array) and char (which determines the characters in each nested array). Print your solution to the console. 

**Create Grid**
```javascript
createGrid(3, "*")
```
**Expected Output**
```javascript
[["*", "*", "*"], 
 ["*", "*", "*"], 
 ["*", "*", "*"]]
```

* Given an array of words, create a function named "_wordConverter_" which uses an array method to add _"er"_ to the end of each string in the array. Look at the expected output below. **Important**: Do not use a loop to complete this task. Print your solution to the console.

**Array of words**
```javascript
["smart", "kind", "sweet", "small", "clear"];
```
**Expected output**
```javascript
["smarter", "kinder", 
"sweeter", "smaller", "clearer"]
```

* Create a function called "_calculateHours_" which calculate how many hours (total) this person worked in the week based on the data structure `hourTracking` below. **Note**: start is always morning time, end is always afternoon. Print your solution to the console.

[5]
**Working Hours**
```javascript
const hourTracking = [
      { day: 'Monday', start: 8, end: 17},
      { day: 'Tuesday', start: 9, end: 15},
      { day: 'Wednesday', start: 10, end: 18},
      { day: 'Thursday', start: 7, end: 14},
      { day: 'Friday', start: 6, end: 12},
    ];
```

**Expected Output**
```javascript
36
```

#### Classes 
* Create a blueprint for a class at DCI - using the "class" syntax in javascript. The class should be named "Course" The class should contain who the teacher is, whether the group is learning marketing or web development and the number of students taking the course.
* The class should also have a method named "spaceNeeded" that checks how big a classroom should be depending on the number of students taking the course: 1 student =  2m². Print your solution to the console.
* Create a method named "details" to print all the information of the course: "_This is a web development course taught by John Smith. There are 10 students taking the course._". Print your solution to the console.

**Expected Output**
```javascript
course.spaceNeeded();
`The class should be 44m²`

course.details();
`This is a web development course taught by John. There are 22 students taking the course.`
```

### Problem Solving 
* Write function that accepts a string as an argument. The function should convert the first character of each word to uppercase. **Example** _the quick brown fox_ → _The Quick Brown Fox_. Print your solution to the console.

**Expected Output**
```javascript
capitalizeFirstLetter("hey there"));
`Hey There`
```

* Look at the unit tests for validating a pin. Write code that fulfills the requirements of the tests. 
**Requirements**:
    * The pin code must consist of only numbers.
    * The pin code must be 4 digits long. 
    * The pin should have at least **two** different digits.
    * The pin code's last digit should be even.
    * The pin code should add up to at least 5. 

The function should print true if the pin meets all the requirements and false if it does not. Print your solution to the console.

**Expected Output**
```javascript
validPin("1234")); → true

validPin("1235")); → false // last number should be even

validPin("wwww")); → false // should only consist of numbers

validPin("12345")); → false // should be 4 digits, not 5

validPin("2222")); → false // should have at least 2 different digits

validPin("1000")); → false // does not add up to at least 5

validPin("2224")); → true 
```
