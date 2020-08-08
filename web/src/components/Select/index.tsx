import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

// SelectHTMLAttributes faz com que possa receber todas as propriedades de Select
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string
    name: string
    options: Array<{
        value: string
        label: string
    }>
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    return(
        <div className="select-block">
            <label htmlFor={name}> {label} </label>
            <select defaultValue="" id={name} {...rest} className="options"> 
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
}

export default Select