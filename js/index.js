/**
 * Accessing the dom tree
 */
const operationScreen = document.querySelector('input.operationScreen');
const answerScreen = document.querySelector('input.answerScreen');
operationScreen.readOnly = true
answerScreen.readOnly = true;

//Then you call the digits
const digitalOps = document.querySelectorAll('button.digits');

//arithmetic operations
const arithmeticOps = document.querySelectorAll('button.arithOps');

//clear
const clearAll = document.querySelectorAll('button.calFunction');

//sciencetific operation
const scienceOps = document.querySelectorAll('button.scienceOps');

//operation on digits
//i tried to call a function here using .forEach forgeting that i did not assign the value as a 
// function. I can just add the event listener directly.
digitalOps.forEach(digit => {
   digit.addEventListener('click', (event) => {
    event.preventDefault();
    operationScreen.value += event.target.innerText
   });
});

//listen for arithmetic operation
arithmeticOps.forEach(operator => {
    operator.addEventListener('click', (event) => {
        event.preventDefault();
        let clickedOperator = event.target.innerText;
        let result;
        if(clickedOperator == '=' || clickedOperator == 'Ans'){
            // const {operation,value} = operationParser(operationScreen.value);
            result = eval(operationScreen.value);
            answerScreen.value = result;
        }else{
            operationScreen.value += event.target.innerText;
        };

    });
});

clearAll.forEach(clearFunc => {
    clearFunc.addEventListener('click', (event) => {
        event.preventDefault();
        let clickedOperator = event.target.innerText;
        if(clickedOperator == 'AC'){
            operationScreen.value = '';
            answerScreen.value = '';
        }
        //to delete
        if(clickedOperator == 'DEL'){
            //this code too can be used for deleting
            // operationScreen.value = operationValue.slice(0, -1)
            // operationValue = operationScreen.value
            let randy = operationScreen.value;
            operationScreen.value = randy.substr(0, randy.length - 1);
        };
    });
});

scienceOps.forEach(operation => {
    operation.addEventListener('click', (event) => {
        event.preventDefault();
        const checkedScientificOperator = event.target.innerText;
        operationScreen.value += checkedScientificOperator

    if(checkedScientificOperator == 'sqrt'){
        const square = operationScreen.value;
        const answer = math.sqrt(square);
       answerScreen.value =answer;
    }else{
        operationScreen.value = event.target.innerText;
    }
    })
})