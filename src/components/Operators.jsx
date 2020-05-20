
import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import './../styles/Calculator.css'
import './../styles/Operators.css'

class Operators extends Component {

    handleClick = value => {
        console.log(value);
        this.props.clickHandler(value)
    }

    renderOperator(value) {
        return (
            <Button className="card operator" onClick={() => this.handleClick(value)}>
                {value}
            </Button>
        );
    };

    render() { 
        return ( 
            <div className="operators">
                {this.renderOperator('=')}
                {this.renderOperator('*')}
                {this.renderOperator('/')}
                {this.renderOperator('-')}
                {this.renderOperator('+')}
            </div>
         );
    }
}
 
export default Operators;
