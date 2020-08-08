import React, { InputHTMLAttributes } from 'react'

import './styles.css'

// InputHTMLAttributes faz com que possa receber todas as propriedades de input
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string
    name: string
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return(
        <div className="input-block">
            <label htmlFor={name}> {label} </label>
            <input type="text" id={name} {...rest}/>
        </div>
    )
}

export default Input