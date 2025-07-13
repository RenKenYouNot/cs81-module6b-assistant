/**
 * @file assistant.js
 * @description Defines a PersonalAssistant constructor function and its methods
 * to simulate a personal assistant managing tasks and mood.
 */

/**
 * Constructor function for creating a new PersonalAssistant object.
 * This function acts as a blueprint for creating multiple assistant instances.
 * @param {string} name - The name of the personal assistant.
 */
function PersonalAssistant(name) {
  // 'this' refers to the new object instance being created (e.g., 'myAssistant').
  // It initializes the 'name' property of the assistant with the provided name.
  this.name = name;

  // 'this' refers to the assistant instance.
  // It initializes an empty array to store tasks that the assistant needs to manage.
  this.tasks = [];

  // 'this' refers to the assistant instance.
  // It sets an initial 'mood' for the assistant.
  this.mood = "neutral";
}

// ... (code from Commit 1) ...

/**
 * Adds a new task to the assistant's task list.
 * @param {string} task - The description of the task to be added.
 */
PersonalAssistant.prototype.addTask = function(task) {
  // 'this' refers to the specific PersonalAssistant instance on which addTask is called.
  // The method pushes the new 'task' string into 'this.tasks' array.
  this.tasks.push(task);
  // This output confirms that a task has been added.
  console.log(`${this.name}: Added task - "${task}". You now have ${this.tasks.length} tasks.`);
};

/**
 * Completes and removes the first task from the assistant's task list.
 * If there are no tasks, it logs a message indicating that.
 */
PersonalAssistant.prototype.completeTask = function() {
  // 'this' refers to the specific PersonalAssistant instance.
  // Checks if there are any tasks in the 'tasks' array to complete.
  if (this.tasks.length > 0) {
    // 'this' refers to the assistant instance.
    // Removes the first task from the 'tasks' array and stores it in 'completedTask'.
    const completedTask = this.tasks.shift();
    // This output shows which task was completed and how many tasks remain.
    console.log(`${this.name}: Completed task - "${completedTask}". You have ${this.tasks.length} tasks left.`);
  } else {
    // This output indicates that there are no tasks available to complete.
    console.log(`${this.name}: No tasks to complete!`);
  }
};

/**
 * Reports the assistant's current mood.
 * The mood is a property of the assistant instance.
 */
PersonalAssistant.prototype.reportMood = function() {
  // 'this' refers to the specific PersonalAssistant instance.
  // This output displays the current 'mood' property of the assistant.
  console.log(`${this.name}'s current mood: ${this.mood}.`);
};
