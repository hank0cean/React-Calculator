import React from 'react';

import Button from 'react-bootstrap/Button';
import './../styles/Numbers.css';
import './../styles/Calculator.css';

function Numbers(props) {

    function renderNumber(value, selector) {
        let className = "card number " + selector;

        return (
            <Button className={className} onClick={() => props.clickHandler(value)}>
                {value}
            </Button>
        );
    };

    return ( 
        <div className="numbers">
            {renderNumber('7', '')}
            {renderNumber('8', '')}
            {renderNumber('9', '')}
            {renderNumber('4', '')}
            {renderNumber('5', '')}
            {renderNumber('6', '')}
            {renderNumber('1', '')}
            {renderNumber('2', '')}
            {renderNumber('3', '')}
            {renderNumber('a/c', 'clear')}
            {renderNumber('0', '')}
            {renderNumber('.', 'decimal')}
        </div>
    );
}

export default Numbers;