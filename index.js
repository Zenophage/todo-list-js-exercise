// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    markCompleted: function() {
      this.complete = true;
    },

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }

  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

const task1 = newTask('Clean cat litter', 'take all the poop out of of the litter box');
const task2 = newTask('do laundry', 'eh face');
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
