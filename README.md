# Test - Programming Basics
## Test Instructions
* Create an index.js file and work from there.
* Follow all of the instructions below to complete the test.
* Make sure that the names of your variables/functions match the names in the instructions below.
* You can check whether your answers pass the unit tests provided. However, do not spend too much time trying to fix your issues to make them pass the tests - move on and try to attempt all questions.
* Remember to print all your solutions.
* Good luck!

### Data Structure

#### Objects 
* Create an object called "profileData". Add four key pair values to the object: name, surname, age and city.
* Convert an object into a nested array of key pair values. Look below for an example at [1].

[1] **Example: converting an object into an array**
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
* Use array methods to change the data in an array. The original array and expected output are given to you below at [2].
* Create a function called "_createGrid_", which returns a grid of a 2D array by taking two arguments: size (which determines the number of nested arrays and the number of elements in each nested array) and char (which determines the characters in each nested array). 
* Given an array of words, create a function named "_wordConverter_" which uses an array method to add _"er"_ to the end of each string in the array. Look at [4] for an example. **Important**: Do not use a loop to complete this task.
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
* Write function that accepts a string as an argument. The function should convert the first character of each word to uppercase. **Example** _the quick brown fox_ -> _The Quick Brown Fox_.
* Look at the unit tests for validating a pin. Write code that fulfills the requirements of the test. The pin code must consist of only numbers, the pin code must be 4 digits long, the pin code's last digit should be even, the pin code should add up to at least 5.

