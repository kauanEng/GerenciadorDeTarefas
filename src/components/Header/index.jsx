/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AreaHeader } from './styled';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export default function Header(props) {
  return (
    <AreaHeader>
      <div className='container'>
        <nav>
        <div className='avatar'>
            <Link to='/'><img src={props.user.avatar} /></Link>
            <label>
              <div className='label-nome'>
             <b>Olá, {props.user.name}!</b><br/>
              Bem vindo de volta.
              </div>
            </label>
           </div>
          <ul>
          <li><Link to='/Logout'><ExitToAppIcon className='alinha'/>Sair</Link></li>
          </ul>
        </nav>
      </div>
    </AreaHeader>
  );
}

