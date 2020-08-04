import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/18095161?s=460&u=afaad6043224735425d5501f9815aafb9e930db4&v=4" alt="Ruth Maria"/>
                    <div>
                    <strong> Ruth Maria </strong>
                    <span>Programação</span>
                    </div>
            </header>

            <p>
            Bacharel em Ciência da Computação - UFAL
            <br/><br/>
            Entusiasta das melhores tecnologias de desenvolvimento back-end e front-end
            Apaixonada por livros, boas séries e escrever sobre as tecnologias que aprende
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>

                <button type="button">
                    <img src= { whatsappIcon } alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem