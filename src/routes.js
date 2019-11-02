import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Perfil from './pages/Perfil';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />                
                <Route path="/perfil" component={Perfil} />                
                <Route path="/*" component='Página não encontrada' />                
            </Switch>       
        
        </BrowserRouter>
    )

}