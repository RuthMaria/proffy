import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

/*
 BrowserRouter precisa ser colocado em todas as rotas da aplicação, ele faz o roteamento.
 Cada página da aplicação será um Route

 npm install --save react-router-dom
*/

function Routes() {
    return(
        <BrowserRouter>                              
          <Route path="/" exact component={ Landing } />  
          <Route path="/study" component={ TeacherList } />
          <Route path="/give-classes" component={ TeacherForm } />
        </BrowserRouter>
    )
}

export default Routes