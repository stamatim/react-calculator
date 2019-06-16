import React from 'react';
import './ClearBtn.css';

export const ClearBtn = (props) => (
/* jshint ignore:start */
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
/* jshint ignore:end */
);