import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';



import Header from './components/Header';
import Login from './pages/Login';
import Routes from './Routes';



function App() {
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
    <BrowserRouter>
      <Header user={user}/>

      <Routes />

    </BrowserRouter>
  );
}

export default App;
