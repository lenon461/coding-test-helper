const { log, error, time, timeEnd } = console;
const { performance } = require("perf_hooks");
const AverageResult = {
    count: 0,
    correct: 0,
};
const runTest = (f, testCase, loggingOptions) => {
    const logging = loggingOptions === undefined ? true : loggingOptions;
    const madeResultString = (ele) => {
        const results = [];
        results.push(`${ele.index}: ${ele.result ? "O" : "X"} -- ${ele.waste}ms`);
        if (!ele.result) results.push(`[Yours : ${ele.expect}] !== [${ele.answer} : Answer]`);
        else AverageResult.correct++;
        AverageResult.count++;
        return results.join(" ");
    };
    const madeAverageResultOutput = () => {
        const average = (AverageResult.correct / AverageResult.count) * 100;
        const used = process.memoryUsage();
        for (let key in used) {
            log(`Memory: ${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`);
        }
        return log(
            `Test Result: [${average}%] --- ${AverageResult.correct}/${AverageResult.count}`,
        );
    };
    const result = testCase
        .map((ele, index) => {
            const t0 = performance.now();
            const { args, answer, logging } = ele;
            const expect = f(...args);
            const t1 = performance.now();
            const waste = Math.round((t1 - t0) * 10000) / 10000;
            return { index, result: answer === expect, answer, expect, args, logging, waste };
        })
        .map((ele) => {
            if (logging || ele.logging) log(madeResultString(ele));
        });
    madeAverageResultOutput();
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
