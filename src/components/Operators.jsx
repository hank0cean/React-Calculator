
import React from 'react';

import Button from 'react-bootstrap/Button'
import './../styles/Calculator.css'
import './../styles/Operators.css'

function Operators(props) {

    function renderOperator(value) {

        let className = "card operator" + (props.highlight === value ? " highlight" : '')

        return (
            <Button className={className} onClick={() => props.clickHandler(value)}>
                {value}
            </Button>
        );
    };

    return ( 
        <div className="operators">
            {renderOperator('=')}
            {renderOperator('*')}
            {renderOperator('/')}
            {renderOperator('-')}
            {renderOperator('+')}
        </div>
    );
}
 
export default Operators;
