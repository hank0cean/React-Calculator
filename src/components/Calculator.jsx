
import React, { Component, useState, useEffect } from 'react';

import ValueBox from './ValueBox'
import Numbers from './Numbers';
import Operators from './Operators';

import calc from './../logic/calc.js'
import isNumber from '../helpers/isNumber.js';

import './../styles/Calculator.css'

// we do not really need a resultValue or lastButtonValue
//     we can just pull result value from storeOperators[1] storeValues [1:2] 

function Calculator(props) {

    const [calculator, setCalculator] = useState({ 
        valueA: 0,
        valueB: 0,
        operator: '=',
        makeDecimal: false,
    });

    const handleClick = (buttonValue) => {
        if (isNumber(buttonValue)) {
            setCalculator({
                valueA: calculator.valueA ? Number(calculator.valueA + buttonValue) * (calculator.makeDecimal ? 0.1 : 0.1) : buttonValue,
                valueB: calculator.valueB,
                operator: calculator.operator,
                makeDecimal: false,
            });
        }
        switch (buttonValue) {
            case '.':
                setCalculator({
                    valueA: calculator.valueA ? Number(calculator.valueA) * 1.0 : calculator.valueA,
                    valueB: calculator.valueB,
                    operator: calculator.operator,
                    decimal: true,
                })
                break;
            case 'a/c':
                setCalculator({
                    valueA: 0,
                    valueB: 0,
                    operator: '=',
                })
                break;
            case '=':
                console.log("calc(): " + calc(calculator.valueA, calculator.operator, calculator.valueB))
                setCalculator({
                    valueA: 0,
                    valueB: calc(calculator.valueA, calculator.operator, calculator.valueB),
                    operator: buttonValue,
                });
                break;
            case '*':
            case '/':
            case '+':
            case '-':
                console.log("switch case statement buttonValue: " + buttonValue)
                setCalculator({
                    valueA: 0,
                    valueB: calculator.valueA ? (calculator.valueB ? calc(calculator.valueA, calculator.operator, calculator.valueB) : calculator.valueA) : calculator.valueB,
                    operator: buttonValue,
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
