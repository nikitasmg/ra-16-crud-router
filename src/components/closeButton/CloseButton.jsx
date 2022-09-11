import React from 'react';
import s from './closeButton.module.scss'

const CloseButton = (props) => {
    return (
        <button className={s.button} {...props}/>
    );
};

export default CloseButton;