[![npm version](https://badge.fury.io/js/coding-test-helper.svg)](https://badge.fury.io/js/coding-test-helper)

# coding-test-helper

This is a helper library for coding-test who use javscript  

Install with: 
```
npm install coding-test-helper
```

# Update
** 1.0.3 Update   
* You can add log option in test data
* result output is modified to string  

** 1.0.5 Update   
* estimating time  


# Usage Example 1

1. write your custom function  
2. make a test data without break a format ( [[arg1, arg2, ...args]], answer])
3. run the code!

```
const { runTest, testCase } = require("coding-test-helper");

/**
 * data
 * @typedef {Array} Testdata
 * @0 {Array} args - inputs
 * @1 {Any} answer - answer
 * @2 {boolean} loggin option - logging true or false
 */
const data = [
    [[1, 2], 3],
    [[3, 8], 11],
    [[4, 11], 15],
];

/**
 * runTest
 * @param  {Function} fucntion - f
 * @param  {Object} data - data
 * @param  {boolean} logging option - logging global true or false
 */
const sum = (a, b) => {
    return a + b;
};

runTest(sum, testCase(data));

```

* Result
```
0: O
1: O
2: X [Yours : 15] !== [16 : Answer]
```
# Usage Example 2
```
const { runTest, testCase } = require("coding-test-helper");

const data = [
    [[1, 2], 3],
    [[3, 8], 11, true],
    [[4, 11], 15],
];

const sum = (a, b) => {
    return a + b;
};

runTest(sum, testCase(data), false);

```

* Result
```
1: O
```
