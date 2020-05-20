
import operate from './operate'
import isNumber from './isNumber'

export default function calc(calculatorState, buttonValue) {
    if (buttonValue === 'a/c') return {
        inputValue: null,
        storeValue: null,
        operator: null,
    }

    if (isNumber(buttonValue)) {
        let stateInputValue = (calculatorState.inputValue ? calculatorState.inputValue : '');
        return {
            inputValue: stateInputValue + buttonValue,
            storeValue: calculatorState.storeValue,
            operator: calculatorState.operator,
        }
    }

    if (buttonValue === '*') {
        return {
            inputValue: null,
            storeValue: (calculatorState.inputValue ? calculatorState.inputValue : calculatorState.storeValue),
            operator: '*', 
        }
    }

    if (buttonValue === '/') {
        return {
            inputValue: null,
            storeValue: (calculatorState.inputValue ? calculatorState.inputValue : calculatorState.storeValue),
            operator: '/', 
        }
    }

    if (buttonValue === '+') {
        return {
            inputValue: null,
            storeValue: (calculatorState.inputValue ? calculatorState.inputValue : calculatorState.storeValue),
            operator: '+', 
        }
    }

    if (buttonValue === '-') {
        return {
            inputValue: null,
            storeValue: (calculatorState.inputValue ? calculatorState.inputValue : calculatorState.storeValue),
            operator: '-', 
        }
    }

    if (buttonValue === '=') {
        if (calculatorState.operator === '=') return {
            inputValue: calculatorState.inputValue,
            storeValue: calculatorState.storeValue,
            operator: calculatorState.operator,
        }
        const result = operate(calculatorState)
        return {
            inputValue: result.inputValue,
            storeValue: result.storeValue,
            operator: '=',
        }
    }
};
