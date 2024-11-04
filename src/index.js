const EventEmitter = require("events");
const fakeTask = require("./utils/fakePromise");
const getConcurrencyMax = require("./utils/maxConcurreny");

const eventEmitter = new EventEmitter();
const taskList = Array.from({ length: 20 }, (_, i) => String.fromCharCode(65 + i)); // ['A', 'B', 'C', ..., 'Z']


// Function to manage concurrency
async function manageConcurrency(taskList, counter, concurrencyMax , concurrencyCouter) {

    const processTask = async (task) => {
        await fakeTask(task);
        concurrencyCouter--; // Decrement the active task count once a task is done
        processNext(); // Trigger the next task processing
    };

    eventEmitter.on("CHANGE_CONCURRENCY", (newConcurrencyMax) => {
        console.log("Changing concurrency to : " + newConcurrencyMax);
        concurrencyMax = newConcurrencyMax;
    });

    const processNext = () => {
        while (counter < taskList.length && concurrencyCouter < concurrencyMax) {
            const task = taskList[counter++];
            processTask(task); // Process the current task
            concurrencyCouter++; // Increment active task count
            console.log("Concurreny: " + concurrencyCouter + " of " + concurrencyMax);
            console.log("Task Count: " + counter + " of " + taskList.length);
        }
    };

    processNext();
}

// Initialization function to kick off the task management
async function init() {
    let concurrencyMax = 2 || getConcurrencyMax(); // remove the two for only using getConcurrencyMax based on time
    const couter = 0
    const concurrencyCouter = 0;


    // just to change the max concurrency on the fly
    setTimeout(() => {
        eventEmitter.emit("CHANGE_CONCURRENCY" , 2);
    },1000)


    console.log("[init] Concurrency Algo Testing...");
    console.log("[init] Tasks to process: ", taskList.length);
    console.log("[init] Tasks to List : ", taskList.toString());
    console.log("[init] Maximum Concurrency: ", concurrencyMax , "\n");

    await manageConcurrency(taskList, couter , concurrencyMax , concurrencyCouter); // Use a lower concurrency for testing
}

init();
