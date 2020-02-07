const { log, error, time, timeEnd } = console;
const runTest = (f, testCase) => {
    const result = testCase
        .map((ele, index) => {
            const { args, answer } = ele;
            const expect = f(...args);
            return { index, result: answer === expect, answer, expect, args };
        })
        .map((ele) => {
            if (ele.answer === ele.expect) delete ele.answer, delete ele.expect, delete ele.args;
            log(ele);
        });
};
const testCase = (data) => {
    return data.map((ele, index, arr) => {
        const args = ele[0];
        const answer = ele[1];
        return { args, answer };
    });
};
exports.runTest = runTest;
exports.testCase = testCase;
