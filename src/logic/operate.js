
export default function operate(calculatorState) {
    if (calculatorState.operator === '*') return {
        inputValue: null,
        storeValue: String(Number(calculatorState.storeValue) * Number(calculatorState.inputValue)),
        operator: calculatorState.operator,
    }
    else if (calculatorState.operator === '/') return {
        inputValue: null,
        storeValue: String(Number(calculatorState.storeValue) / Number(calculatorState.inputValue)),
        operator: calculatorState.operator,
    }
    else if (calculatorState.operator === '+') return {
        inputValue: null,
        storeValue: String(Number(calculatorState.storeValue) + Number(calculatorState.inputValue)),
        operator: calculatorState.operator,
    }
    else if (calculatorState.operator === '-') return {
        inputValue: null,
        storeValue: String(Number(calculatorState.storeValue) - Number(calculatorState.inputValue)),
        operator: calculatorState.operator,
    }
};

