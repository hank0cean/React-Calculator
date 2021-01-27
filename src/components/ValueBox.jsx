import React from 'react';
import 'react-bootstrap'
import './../styles/Calculator.css'
import './../styles/ValueBox.css'

function ValueBox(props) {

    function renderSecondValue(secondValue) {
        return (
            <span className="valuebox-secondValue">
                {secondValue ? secondValue : '0'}
            </span>
        )
    }

    function renderMainValue(mainValue) {
        return (
            <span className="valuebox-input">
                {mainValue ? mainValue : '0'}
            </span>
        );
    }

    function renderCurrentOperator(currentOperator) {
        return (
            <span className="valuebox-operator">
                {currentOperator ? currentOperator : '='}
            </span>
        );
    }

    return (
        <div className="card valuebox valuebox-text" onClick={() => navigator.clipboard.writeText(props.valueB ? props.valueB : props.valueA)} >
            {renderSecondValue(props.valueA ? props.valueB : (props.valueA === null || props.valueB === null ? '0' : props.valueA))}
            {renderMainValue(props.valueA === null ? props.valueB : props.valueA)}
            {renderCurrentOperator(props.operator)}
        </div>
    );
}

export default ValueBox;
