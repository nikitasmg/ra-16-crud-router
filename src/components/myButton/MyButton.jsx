import React from 'react';
import s from './myButton.module.scss'

const MyButton = (props) => {
    return (
        <button className={s.button} {...props}>
            {props.children}
        </button>
    );
};

export default MyButton;