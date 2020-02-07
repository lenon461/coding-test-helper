const { runTest, testCase } = require("../src/index");

const data = [
    [[1, 2], 3],
    [[3, 8], 11],
    [[4, 11], 15],
];

const sum = (a, b) => {
    return a + b;
};

runTest(sum, testCase(data));
