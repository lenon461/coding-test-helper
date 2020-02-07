[![npm version](https://badge.fury.io/js/coding-test-helper.svg)](https://badge.fury.io/js/coding-test-helper)

# coding-test-helper

This is a helper library for coding-test who use javscript  

Install with: 
```
npm install coding-test-helper
```

# Usage Example

1. write your custom function  
2. make a test data without break a format ( [[arg1, arg2, ...args]], answer])
3. run the code!

```
const { runTest, testCase } = require("coding-test-helper");

const data = [
    [[1, 2], 3],
    [[3, 8], 11],
    [[4, 11], 15],
];

const sum = (a, b) => {
    return a + b;
};

runTest(sum, testCase(data));

```

* Result
```
{ index: 0, result: true }
{ index: 1, result: true }
{ index: 2, result: true }
```