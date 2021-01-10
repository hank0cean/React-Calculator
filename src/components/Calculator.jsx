
import React, { Component, useState, useEffect } from 'react';

import ValueBox from './ValueBox'
import Numbers from './Numbers';
import Operators from './Operators';

import calc from './../logic/calc.js'
import isNumber from '../helpers/isNumber.js';

import './../styles/Calculator.css'

function Calculator(props) {

    const [calculator, setCalculator] = useState({ 
        valueA: '0',
        valueB: '0',
        operator: '=',
        decimal: false,
    });

    const handleClick = (buttonValue) => {
        if (isNumber(buttonValue)) {
            // let newValue = (Number(String(calculator.valueA) + buttonValue) / (calculator.decimal ? 10 : 1))

            setCalculator({
                valueA: Number(calculator.valueA) || calculator.valueA.slice(0, 2) === '0.' ? calculator.valueA + buttonValue : buttonValue,
                valueB: calculator.valueB,
                operator: calculator.operator,
            });
        }
        switch (buttonValue) {
            case '.':
                if (calculator.valueA.includes('.')) {break;}
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
                    valueB: '0',
                    operator: '=',
                })
                break;
            case '=':
                console.log(`calc(${calculator.valueA}, ${calculator.operator}, ${calculator.valueB}): ` + calc(calculator.valueA, calculator.operator, calculator.valueB))
                setCalculator({
                    valueA: '0',
                    valueB: String(calc(calculator.valueA, calculator.operator, calculator.valueB)),
                    operator: buttonValue,
                });
                break;
            case '*':
            case '/':
            case '+':
            case '-':
                setCalculator({
                    valueA: '0',
                    valueB: String(Number(calculator.valueA) ? (Number(calculator.valueB) ? calc(calculator.valueA, calculator.operator, calculator.valueB) : calculator.valueA) : calculator.valueB),
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
