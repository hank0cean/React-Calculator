
export default function calc(numA, operator=0, numB) {
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
