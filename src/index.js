const { log, error, time, timeEnd } = console;
const runTest = (f, testCase, loggingOptions) => {
    const logging = loggingOptions === undefined ? true : loggingOptions;
    const madeResultString = (ele) => {
        const results = [];
        results.push(`${ele.index}: ${ele.result ? "O" : "X"}`);
        if (!ele.result) results.push(`[Yours : ${ele.expect}] !== [${ele.answer} : Answer]`);
        return results.join(" ");
    };
    const result = testCase
        .map((ele, index) => {
            const { args, answer, logging } = ele;
            const expect = f(...args);
            return { index, result: answer === expect, answer, expect, args, logging };
        })
        .map((ele) => {
            if (logging || ele.logging) log(madeResultString(ele));
        });
};
const testCase = (data) => {
    return data.map((ele, index, arr) => {
        const args = ele[0];
        const answer = ele[1];
        const logging = ele[2] || 0;
        return { args, answer, logging };
    });
};
exports.runTest = runTest;
exports.testCase = testCase;
