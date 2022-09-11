import React from 'react';
import s from  './myInput.module.scss'

const MyInput = ({value, onChange}) => {
    return (
        <input className={s.input} type={"text"} value={value} onChange={(e) => onChange(e.target.value)}/>
    );
};

export default MyInput;