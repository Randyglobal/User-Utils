/**
 * Accessing the dom tree
 */
const operationScreen = document.querySelector('input.operaionScreen');
const answerScreen = document.querySelector('input.answerScreen');
answerScreen.readOnly = true;

//Then you call the digits
const digitalOps = document.querySelector('button.digits');

//operation on digits
//i tried to call a function here using .forEach forgeting that i did not assign the value as a 
// function. I can just add the event listener directly.
digitalOps.addEventListener('click', (event) => {
  event.preventDefault();
  operationScreen.value = event.target.innerText;
})