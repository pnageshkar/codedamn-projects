const calc = document.querySelector('.calculator');
const keys = document.querySelector('.keys');
const display = document.querySelector('.display');
const opKeys = keys.querySelectorAll('[data-type="operator"]')



keys.addEventListener('click', (e)=> {
      
    const key = e.target; // returns the specific key element that was clicked
    const displayValue = display.textContent;
    const keyType = key.dataset.type;
    //console.log(keyType);
    const keyValue = key.textContent;
    const prevKeyType = calc.dataset.previousKeyType;
    
    
    if(keyType === 'number') {
        if (displayValue === '0' && keyValue == '.') {
            display.textContent = displayValue + keyValue ; // concatenate and display  
        }
        if (displayValue === '0' && keyValue != '.') {
            display.textContent = keyValue; // display the number key pressed
        }
        if (displayValue !== '0') {
            display.textContent = displayValue + keyValue ; // concatenate and display  
        } 
        if (prevKeyType == 'operator') {
            display.textContent = keyValue ; // concatenate and display     
        } 
    }

    if(keyType === 'operator') {
        if (displayValue==0) {
            alert('Invalid operation attempted!!');
            return;
        }
        calc.dataset.firstNum = displayValue;
        calc.dataset.operator = key.dataset.key;
    }

    if (keyType === 'equal') {
        const firstNum = calc.dataset.firstNum;
        const operator = calc.dataset.operator;
        if (!firstNum  && !operator) {
            alert('Invalid operation attempted!!');
            return;
        }
        const secondNum = displayValue;
        // Perform the calculation
        //console.log(firstNum,secondNum);
        display.textContent = calculate(firstNum, operator, secondNum);
    }

    if (keyType === 'allclear') {
        display.textContent = '0';
        delete calc.dataset.firstNum;
        delete calc.dataset.operator;
      }

    if (keyType === 'delete') {
        console.log(displayValue);
        if (displayValue.substring(0,displayValue.length-1)) {
            display.textContent = displayValue.substring(0,displayValue.length-1)
        }
        else {
            display.textContent = '0';
        };

    }
    
    calc.dataset.previousKeyType = keyType;

})

function calculate (firstNum, operator, secondNum) {
    firstNumber = parseFloat(firstNum);
    secondNumber = parseFloat(secondNum);
  
    switch (operator) {
        case 'plus':
            return firstNumber + secondNumber;
            
        case 'minus':
            return firstNumber - secondNumber;
            
        case 'mul' :
             return firstNumber * secondNumber;
             
        case 'divide':
              return firstNumber / secondNumber;
           
    }
     
  }