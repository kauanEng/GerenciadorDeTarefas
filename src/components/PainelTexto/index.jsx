import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { ContainerPainel, PainelTitulo, PainelSubtitulo } from './styled';

import Button from '@material-ui/core/Button';


export default function PainelTexto() {
    let history = useHistory();
    return (
        <>
            <ContainerPainel>
                <PainelTitulo>
                    <p><b>Gerenciamento de Tarefas</b></p>
                    <PainelSubtitulo>
                        <p>Tenha o controle de suas tarefas em um único lugar</p>
                    </PainelSubtitulo>
                </PainelTitulo>
                <Link to='/CadastroNotas'>
                    <Button 
                    variant='contained'
                    className='btn-novo'
                    onClick={() => history.push('/CadastroNotas')} 
                    >Novo
                    </Button>
                    </Link>
           </ContainerPainel>
        </>
    )
}
