import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import CadastroNotas from './pages/CadastroNotas';
import EditNotas from './pages/EditNotas';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}>
                <Home/>
            </Route>
            <Route exact path='/CadastroNotas' component={CadastroNotas}>
               <CadastroNotas/>
            </Route>
            <Route exact path='/EditNotas/:id' component={EditNotas}>
               <CadastroNotas/>
            </Route>
        </Switch>
    );

}