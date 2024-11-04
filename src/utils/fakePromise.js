function fakeTask (taskName) {
    const begin = Date.now();
    console.error("\x1b[31mStarting Task : " + taskName + "\x1b[0m");
    return new Promise((resolve) => {
        setTimeout(async () => {
            const end = Date.now();
            const timeSpent = (end - begin) + "ms";
            console.log('\x1b[36m', "[TASK] FINISHED: " + taskName + " in " + timeSpent, '\x1b[0m');
            resolve(true);
        }, 1000 || Math.floor(Math.random() * 100) + 1);
    });
};

module.exports = fakeTask;