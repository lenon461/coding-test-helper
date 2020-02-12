const { runTest, testCase } = require("../src/index");

/**
 * data
 * @typedef {Array} Testdata
 * @0 {Array} args - inputs
 * @1 {Any} answer - answer
 * @2 {boolean} loggin option - logging local true or false
 */
const data = [
    [[1, 2], 3],
    [[3, 8], 11],
    [[4, 11], 15],
];

const sum = (a, b) => {
    return a + b;
};

/**
 * runTest
 * @param  {Function} fucntion - f
 * @param  {Object} data - data
 * @param  {boolean} logging option - logging global true or false
 */
runTest(sum, testCase(data));
