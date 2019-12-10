import React from 'react';
import './button.css';

const Button = ({ styleName, click, text }) => {
    return (
        <button className={styleName} onClick={click}>
            {text}
        </button>
    )
}

export default Button;
