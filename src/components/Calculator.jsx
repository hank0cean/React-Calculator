
import React, { Component } from 'react';

import ValueBox from './ValueBox'
import Numbers from './Numbers';
import Operators from './Operators';

import calc from './../logic/calc.js'

import './../styles/Calculator.css'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue: null,
            storeValue: null,
            operator: null,
         }
    }

    handleClick = buttonValue => {
        this.setState(calc(this.state, buttonValue));
    }

    render() { 
        return (
            <div className="calculator">
                <ValueBox calculatorState={this.state} />
                <Numbers clickHandler={this.handleClick} />
                <Operators clickHandler={this.handleClick} />
            </div>
        );
    }
}
 
export default Calculator;
