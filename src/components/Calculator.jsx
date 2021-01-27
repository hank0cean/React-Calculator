
import React, { useState } from 'react';

import ValueBox from './ValueBox'
import Numbers from './Numbers';
import Operators from './Operators';

import calc from './../logic/calc.js'
import isNumber from '../helpers/isNumber.js';

import './../styles/Calculator.css'

function Calculator(props) {

    const [calculator, setCalculator] = useState({
        valueA: '0',
        valueB: null,
        operator: '=',
        decimal: false,
    });

    const handleClick = (buttonValue) => {
        if (isNumber(buttonValue)) {
            if (calculator.valueA === null) {
                setCalculator({
                    valueA: buttonValue,
                    valueB: calculator.valueB,
                    operator: calculator.operator,
                })
                return;
            }
            setCalculator({
                valueA: Number(calculator.valueA) || calculator.valueA.slice(0, 2) === '0.' ? calculator.valueA + buttonValue : buttonValue,
                valueB: calculator.valueB,
                operator: calculator.operator,
            });
            return;
        }

        switch (buttonValue) {
            case '.':
                if (calculator.valueA === null || calculator.valueA.includes('.')) {break;}
                setCalculator({
                    valueA: calculator.valueA ? calculator.valueA + '.' : calculator.valueA,
                    valueB: calculator.valueB,
                    operator: calculator.operator,
                    decimal: true,
                })
                break;
            case 'a/c':
                setCalculator({
                    valueA: '0',
                    valueB: null,
                    operator: '=',
                })
                break;
            case '=':
                if (calculator.valueB === null) {
                    setCalculator({
                        valueA: String(Number(calculator.valueA) ?  calc(calculator.valueA, calculator.operator, calculator.valueA) : '0'),
                        valueB: null,
                        operator: buttonValue,
                        decimal: false,
                    })
                    break;
                }
                setCalculator({
                    valueA: null,
                    valueB: String(calc((calculator.valueB === null ? calculator.valueA : calculator.valueB),
                                        calculator.operator,
                                        calculator.valueA)),
                    operator: buttonValue,
                });
                break;
            case '*':
            case '/':
            case '+':
            case '-':
                let valueB = () => {
                    if (calculator.valueA && calculator.valueB && calculator.operator === '=') {return calculator.valueA}
                    else if (calculator.valueA && calculator.valueB) {
                        return calc(calculator.valueB, calculator.operator, calculator.valueA)
                    }
                    else if (calculator.valueB) {return calculator.valueB}
                    else {return calculator.valueA}
                }
                setCalculator({
                    valueA: null,
                    valueB: valueB(),
                    operator: buttonValue,
                    decimal: false,
                })
                break;
            default:
                break;
        }
        
    };

    return (
        <div className="calculator">
            <ValueBox
                valueA={calculator.valueA}
                valueB={calculator.valueB}
                operator={calculator.operator}
            />
            <Numbers clickHandler={handleClick} />
            <Operators clickHandler={handleClick} operator={calculator.operator} />
        </div>
    );
}

export default Calculator;
