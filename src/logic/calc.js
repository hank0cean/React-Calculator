
export default function calc(numA, operator, numB) {
    switch (operator) {
        case '*':
            return Number(numB) * Number(numA);
        case '/':
            return Number(numB) / Number(numA);
        case '+':
            return Number(numB) + Number(numA);
        case '-':
            return Number(numB) - Number(numA);
        default:
            return 0;
    }
};
