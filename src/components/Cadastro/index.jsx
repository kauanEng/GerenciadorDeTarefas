import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import {ContainerPainel, PainelTitulo, PainelSubtitulo } from './styled';


export default function Cadastro() {
    let history = useHistory();
    return (
        <>
             <ContainerPainel>
             <Link to='/'><img className='img-arrow' src="../assets/arrow.png" alt="" 
             onClick={() => history.push('/')}/>
             </Link>
                <PainelTitulo>
                    <p><b>Nova Tarefa</b></p>
                    <PainelSubtitulo>
                        <p>Home &gt; Nova Tarefa</p>
                    </PainelSubtitulo>
                </PainelTitulo>
           </ContainerPainel>

        </>
    )
}
