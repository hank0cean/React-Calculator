
export default function operate(valueA, valueB, operator) {
    if (operator === '*') return valueA * valueB;
    else if (operator === '/') return valueA / valueB;
    else if (operator === '+') return valueA + valueB;
    else if (operator === '-') return valueA - valueB;
};

