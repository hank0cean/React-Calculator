import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button';
import './../styles/Numbers.css';
import './../styles/Calculator.css';

class Numbers extends Component {

    handleClick = value => {
        console.log(value)
        this.props.clickHandler(value);
    };

    renderNumber(value, selector) {
        let className = "card number " + selector;

        return (
            <Button className={className} onClick={() => this.handleClick(value)}>
                {value}
            </Button>
        );
    };

    render() { 
        return ( 
            <div className="numbers">
                {this.renderNumber('7', '')}
                {this.renderNumber('8', '')}
                {this.renderNumber('9', '')}
                {this.renderNumber('4', '')}
                {this.renderNumber('5', '')}
                {this.renderNumber('6', '')}
                {this.renderNumber('1', '')}
                {this.renderNumber('2', '')}
                {this.renderNumber('3', '')}
                {this.renderNumber('a/c', 'clear')}
                {this.renderNumber('0', '')}
                {this.renderNumber('.', 'decimal')}
            </div>
        );
    }
}

export default Numbers;