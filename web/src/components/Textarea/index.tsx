import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

// InputHTMLAttributes faz com que possa receber todas as propriedades de input
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string
    name: string
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}> {label} </label>
            <textarea id={name} {...rest}/>
        </div>
    )
}

export default Textarea