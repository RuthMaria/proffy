import React from 'react'

import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps {
    title: string;
    description?: string  // o '?' diz que essa propriedade não é obrigatória, é opcional
}
 /*
 React.FC diz que o componente PageHeader espera receber a propriedade do tipo que está em PageHeaderProps (tipagem do typescript).
 Então, propos tem que ser uma string.
 Props.children pega todo o conteudo que estiver entre as tags do componente chamador de PageHeader
 */
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={ backIcon } alt="voltar"/>
                </Link>

                <img src={ logoImg } alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong> { props.title } </strong>    
                { props.description && <p>{props.description}</p> }
                { props.children }             
            </div>            
        </header>
    )
}

export default PageHeader