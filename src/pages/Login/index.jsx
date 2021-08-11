import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Api from '../../services/Api';

import { AreaLogin } from './styled';

import { BtnDefaultIcons, BtnDefault } from '../../components/styled';

import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({onReceiveGoogle}) => {

  const actionloginGoogle = async () => {
    let result = await Api.googleLogar();

    if(result) {
      onReceiveGoogle(result.user)

    }else{
      alert('Erro ao Logar')
    }
  }
  
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/registrar'>
                <AreaLogin>
                <h1 className='organize'>
                  <Link to='/'><ArrowBackIosIcon/></Link>
                  Crie sua conta</h1>
                
                  <form className='form-container'>
                  <div className='form--input'>
                                <label>Nome:</label>
                                <TextField id="outlined-basic" label='Digite seu Nome' variant="outlined" type='text' />
                            </div>
                            <div className='form--input'>
                                <label>Email:</label>
                                <TextField id="outlined-basic" label='Digite seu e-mail' variant="outlined" type='email' />
                            </div>
                            <div className='form--input'>
                                <label>Senha:</label>
                                <TextField id="outlined-basic" label='Digite seu e-mail' variant="outlined" type='text' />
                            </div>

                            <BtnDefault>Criar</BtnDefault>

                            <div className='footerLogin'>
                                Não tem uma conta?
                                <Link to='/'>Fazer Login</Link>
                            </div>
                        </form>

                </AreaLogin>
                </Route>
                <Route exact path='*'>
                    <AreaLogin>
                        <h1>Faça login em sua conta</h1>
                        <BtnDefaultIcons onClick={actionloginGoogle}>
                            <img src=".././../google.png" alt="" className='img-logo' />
                            <div className='center'>
                                Fazer login com o Google
                            </div>
                        </BtnDefaultIcons>
                        <p class='text-area'>OU</p>

                        <form className='form-container'>
                            <div className='form--input'>
                                <label>Email:</label>
                                <TextField id="outlined-basic" label='Digite seu e-mail' variant="outlined" type='email' />
                            </div>
                            <div className='form--input'>
                                <label>Senha:</label>
                                <TextField id="outlined-basic" label='Digite seu e-mail' variant="outlined" type='textfield' />
                            </div>

                            <BtnDefault>Entrar</BtnDefault>

                            <div className='footerLogin'>
                                Não tem uma conta?
                                <Link to='/registrar'>Registre-se</Link>
                            </div>
                        </form>

                    </AreaLogin>
                </Route>
            </Switch>
        </BrowserRouter>


    );
}
