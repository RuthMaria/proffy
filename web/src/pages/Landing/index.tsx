import React, { useState, useEffect } from "react"  // o Hook useState permite manter o state local em um componente de função.
import { Link } from 'react-router-dom' // serve para não dar reload na pagina (conceito de SPA), usado no lugar da tag 'a'

// tem que importar as imagens que for usar, agora pode usar a variável do JS
import logoImg from '../../assets/images/logo.svg' 
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from "../../services/api"

import './styles.css'

function Landing() {

        // variável de estado. O useState recebe o valor inicial da variável.
    const [totalConnections, setTotalConnections] = useState(0)

    /* useEffect é usado quando pode ocorrer algum efeito colateral.  Ele só roda depois da primeira renderização e depois de toda atualização.
     Ex.: erro na comunicar com uma API .*/
    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data

            setTotalConnections(total)
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={ logoImg } alt="Proffy"/>  
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={ landingImg } alt="Plataformas de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study"> 
                        <img src={ studyIcon } alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={ giveClassesIcon } alt="Dar aulas"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas
                    <img src={ purpleHeartIcon } alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing