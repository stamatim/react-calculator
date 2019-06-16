/* jshint esversion: 6 */
import React from 'react';
import './Button.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
};

export const Button = props => (
/* jshint ignore:start */
    <div
        className={`button-wrapper ${
            isOperator(props.children) ? null : "operator"
            }`}
        onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
/* jshint ignore:end */
);