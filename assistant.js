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

