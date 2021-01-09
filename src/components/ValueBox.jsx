
import weaveStrings from './../helpers/weaveStrings'

import React, { useRef } from 'react';
import 'react-bootstrap'
import './../styles/Calculator.css'
import './../styles/ValueBox.css'

function ValueBox(props) {

    const valueBoxRef = useRef(null)
    
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

    function handleClick() {
        navigator.clipboard.writeText(props.valueA)
        alert("text copied: ", props.valueA);
    }

    return (
        <div className="card valuebox valuebox-text" onClick={() => navigator.clipboard.writeText(props.valueB ? props.valueB : props.valueA)} >
            {renderSecondValue(props.valueB)}
            {renderMainValue(props.valueA)}
            {renderCurrentOperator(props.operator)}
        </div>
    );
}

export default ValueBox;
