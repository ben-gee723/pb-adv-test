# Test - Programming Basics
## Test Instructions
* Create an index.js file and work from there.
* Follow all of the instructions below to complete the test.
* Make sure that the names of your variables/functions match the names in the instructions below.
* Remember to print all your solutions.
* Good luck!

### Data Structure 

#### Objects 
* Create an object called "profileData". Add four key pair values to the object: name, surname, age and city.
* Create a function named "_convertObjectToArray_" that converts an object into a nested array of key pair values. Look below for an example at [1].

[1] **Example: converting an object into an array**
```javascript
myObj = {
    "1": 10, 
    "2": 20, 
    "3": 30
}
```
**Result of conversion**: 
```javascript
[["1", 10], ["2", 20], ["3", 30]]
```

#### Arrays 
* Create a function named "_convertArrayData_" which uses array methods to change the data in an array. The original array and expected output are given to you below at [2].
* Given the 2D Array below at [3], create a function named "_getNestedData_" that loops through the arrays, concatenates the values to a string and returns the string.
* Given an array of words, create a function named "_wordConverter_" which takes in two arguments: an array of strings and a string which will be added onto the end of array element. Look at [4] for an example. **Important**: Do not use a loop to complete this task.
* Create a function called "_calculateHours_" which calculate how many hours (total) this person worked in the week based on the data structure below at [5]. **Note**: start is always morning time, end is always afternoon.

[2]
**Array Data**
```javascript
["coffee", "tea", "juice"];
```
**Expected output**
```javascript
["tea", "coffee", "milk"];
```

[3] 
**Nested Array**
```javascript
let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
	     [true, false]]
```

[4]
**Array of words**
```javascript
["smart", "kind", "sweet", "small", "clear"];
```
**Expected output**
```javascript
["smarter", "kinder", 
"sweeter", "smaller", "clearer"]
```

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

#### Classes
* Create a blueprint for a class at DCI - using the "class" syntax in javascript. The class should be named "Course" The class should contain who the teacher is, whether the group is learning marketing or web development and the number of students taking the course.
* The class should also have a method named "spaceNeeded" that checks how big a classroom should be depending on the number of students taking the course: 1 student =  2m².
* Create a method named "details" to print all the information of the course: "_This is a web development course taught by John Smith. There are 10 students taking the course._".

### Problem Solving 
* Create a function named "_capitalizeFirstLetter_" that accepts a string as an argument. The function should convert the first character of each word to uppercase. **Example** _the quick brown fox_ -> _The Quick Brown Fox_

* Look at the unit tests for validating a pin. Write code that fulfills the requirements of the test. The pin code must consist of only numbers, the pin code must be 4 digits long, the pin code's last digit should be even, the pin code should consist of at least two different digits, the pin code should add up to at least 5. Find instructions on the tests below at [6].

[6] **Testing with Jest**
* The `test.js` file and `package.json` file have been provided for you.

* Firstly, run the following command in the appropriate folder to install and save jest as a dependency.
```
npm install --save-dev jest
```
* Run the following command in order to run the test. The script has already been added to the `package.json` file.
```
npm run test
```
* Do not forget to import and export the relevant functions/variables/objects etc.

* For more information, you can refer to Jest's [documentation](https://jestjs.io/docs/en/getting-started).


