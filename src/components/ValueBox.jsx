
import React, { Component } from 'react';
import 'react-bootstrap'
import './../styles/Calculator.css'
import './../styles/ValueBox.css'

class ValueBox extends Component {

    renderValueBox(inputValue, storeValue, operator) {
        return (
            <p className="valuebox-text">
                <span className="valuebox-store">
                    {storeValue ? storeValue : '0'}
                </span>
                <span className="valuebox-input">
                    {inputValue ? inputValue : '0'}
                </span>
                <span className="valuebox-operator">
                    {operator ? operator : '='}
                </span>
            </p>
        );
    };
    
    render() { 
        const calculatorState = this.props.calculatorState;

        return ( 
            <div className="card valuebox">
                {this.renderValueBox(calculatorState.inputValue, calculatorState.storeValue, calculatorState.operator)}
            </div>
        );
    };
}

export default ValueBox;
