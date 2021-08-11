import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroNotas from './pages/CadastroNotas';
import EditNotas from './pages/EditNotas';
import Logout from './pages/Logout';

import Header from './components/Header';
import Login from './pages/Login';



export default function App() {
    const [user, setUser] = useState(null);
  
    const actionLoginDataGoogle =  async (u) => {
      let newUser = {
        id: u.id,
        name: u.displayName,
        avatar: u.photoURL
      }
  
      setUser(newUser);
    }
  
    if (user === null) {
      return (
        <Login onReceiveGoogle={actionLoginDataGoogle} />
  
      )
    }

    return (
        <Switch>
            <Route exact path='/' component={Home}>
            <Header user={user}/>
                <Home/>
            </Route>
            <Route exact path='/CadastroNotas' component={CadastroNotas}>
            <Header user={user}/>
               <CadastroNotas/>
            </Route>
            <Route exact path='/EditNotas/:id' component={EditNotas}>
            <Header user={user}/>
               <EditNotas/>
            </Route>
            <Route exact path='/Logout' component={Logout}>
               <Logout/>
            </Route>
        </Switch>
    );

}