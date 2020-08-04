import React from 'react'

import './assets/styles/global.css'
import Routes from './routes';
/* 
Componentes são funções que retornam HTML, tudo em React usa componentes para o reaproveitamento de código.
Nome de componentes começa sempre com letra maiúsculas.
JSX (Javascript + XML) se refere ao HTML dentro do Javascript 
*/

function App() { 
  return (
    <Routes />
  );
}

export default App
