
export default function calc(numA, operator=0, numB) {
    switch (operator) {
        case '*':
            return Number(numA) * Number(numB);
        case '/':
            return Number(numA) / Number(numB);
        case '+':
            return Number(numA) + Number(numB);
        case '-':
            return Number(numA) - Number(numB);
        default:
            return 0;
    }
};
