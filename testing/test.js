const { profileData, convertObjectToArray, convertArrayData, createGrid, wordConverter, calculateHours, Course, capitalizeFirstLetter, validPin } = require("./index");

describe('Profile Data object', () => {
    const propsToCheck = ['name', 'surname', 'age', 'city'];
    propsToCheck.forEach(prop => {
        test(`has ${prop} property`, () => {
            expect(profileData).toHaveProperty(prop);
        });
    });
});

describe('convertObjectToArray should', () => {
    test.each`
    input| expected 
    ${{ "1": 10, "2": 20 }} | ${[["1", 10], ["2", 20]]}
    ${{ "name": "John", "age": 20 }} | ${[["name", "John"], ["age", 20]]}

    `('convert an object containing properties into a nested array populated by the object properties', ({ input, expected }) => {
        expect(convertObjectToArray(input)).toStrictEqual(expected);
    });
});

describe('convertArrayData should', () => {
    test.each`
    input| expected 
    ${["coffee", "tea", "juice"]} | ${["tea", "coffee", "milk"]}
    ${["water", "vodka", "milkshake"]} | ${["vodka", "water", "milk"]}
    `('switch first two array items and replace the third', ({ input, expected }) => {
        expect(convertArrayData(input)).toStrictEqual(expected);
    });
});

describe('createGrid should', () => {
    test.each`
    size | char | expected 
    ${3} | ${"*"} | ${[["*", "*", "*"],
        ["*", "*", "*"],
        ["*", "*", "*"]]}
    ${2} | ${"f"} | ${[["f", "f"],
        ["f", "f"]]}
    `('create a grid which is $size by $size and populated with $char', ({ size, char, expected }) => {
            expect(createGrid(size, char)).toStrictEqual(expected);
        });
});

describe('wordConverter should', () => {
    test.each`
    word | suffix | expected 
    ${["smart"]} | ${"er"} | ${["smarter"]}
    ${["smart", "kind"]} | ${"er"} | ${["smarter", "kinder"]}
    ${["clear", "small"]} | ${"est"} | ${["clearest", "smallest"]}
    ${[]} | ${"s"} | ${[]}
    ${["bottle", "cup", "printer"]} | ${"s"} | ${["bottles", "cups", "printers"]}
    ${[1, 2, 3]} | ${"s"} | ${["1s", "2s", "3s"]}
    `('return $expected when $suffix is added to each $word', ({ word, suffix, expected }) => {
        expect(wordConverter(word, suffix)).toStrictEqual(expected);
    });
});

describe('calculateHours should', () => {
    test.each`
    input| expected 
    ${[
            { day: 'Monday', start: 8, end: 17 },
            { day: 'Tuesday', start: 9, end: 15 },
            { day: 'Wednesday', start: 10, end: 18 },
            { day: 'Thursday', start: 7, end: 14 },
            { day: 'Friday', start: 6, end: 12 },
        ]} | ${36}
    input| expected 
    ${[
            { start: 2, end: 10 },
            { start: 1, end: 7 },
            { start: 90, end: 100 },
            { start: 7, end: 14 },
        ]} | ${31}
    `('calculate accumulation of (end - start)', ({ input, expected }) => {
            expect(calculateHours(input)).toBe(expected);
        });
});

//class - method details
describe('Course details should', () => {
    test.each`
    teacher | type | number | expected 
    ${"John"} | ${"web development"} | ${22} | ${"This is a web development course taught by John. There are 22 students taking the course."}  
    ${"Jane"} | ${"marketing"} | ${19} | ${"This is a marketing course taught by Jane. There are 19 students taking the course."} 
    `('return the description: $expected', ({ teacher, type, number, expected }) => {
        expect(new Course(teacher, type, number).details()).toStrictEqual(expected);
    });
});

// class - method spaceNeeded
describe('Course spaceNeeded should', () => {
    test.each`
    teacher | type | number | expected 
    ${"John"} | ${"web development"} | ${22} | ${"The classroom should be 44m²."}  
    ${"Jane"} | ${"marketing"} | ${19} | ${"The classroom should be 38m²."} 
    `('return the description: $expected', ({ teacher, type, number, expected }) => {
        expect(new Course(teacher, type, number).spaceNeeded()).toStrictEqual(expected);
    });
});

describe('capitalizeFirstLetter should', () => {
    test.each`
    input| expected 
    ${"hey there"} | ${"Hey There"}
    ${"fran borg"} | ${"Fran Borg"}
    ${"what Is This?"} | ${"What Is This?"}
    ${"WHAT?"} | ${"WHAT?"}
    ${123} | ${"123"}
    ${"????"} | ${"????"}
    ${true} | ${"True"}
    `('capitalize every first letter', ({ input, expected }) => {
        expect(capitalizeFirstLetter(input)).toBe(expected);
    });
});

test("pin code must consist of only numbers", () => {
    expect(validPin("abcd")).toBe(false);
    expect(validPin("1234")).toBe(true);
    expect(validPin("false")).toBe(false);
});

test("pin code must be 4 digits long", () => {
    expect(validPin("12344")).toBe(false);
    expect(validPin("1234")).toBe(true);
    expect(validPin("123")).toBe(false);
});

test("pin code's last digit should be even", () => {
    expect(validPin("1233")).toBe(false);
    expect(validPin("4907")).toBe(false);
    expect(validPin("7898")).toBe(true);
    expect(validPin("0026")).toBe(true);
    expect(validPin("1112")).toBe(true);
});

test("pin should have at least two different digits", () => {
    expect(validPin("0000")).toBe(false);
    expect(validPin("2222")).toBe(false);
    expect(validPin("4444")).toBe(false);
    expect(validPin("0808")).toBe(true);
    expect(validPin("1212")).toBe(true);
})

test("pin code's digits should add up to at least 5", () => {
    expect(validPin("1002")).toBe(false);
    expect(validPin("2002")).toBe(false);
    expect(validPin("0004")).toBe(false);
    expect(validPin("0100")).toBe(false);
    expect(validPin("1112")).toBe(true);
})

