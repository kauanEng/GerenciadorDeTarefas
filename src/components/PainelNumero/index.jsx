import React, {useState} from 'react';
import { ContainerPainelNumeros } from './styled';
import Home from '../../pages/Home';

export default function PainelNumero(props) {


const [contagem, setContagem] = useState(0);

  function aumentarAction() {
    setContagem(contagem + 1);
  }

    return (
            <ContainerPainelNumeros>
                <div className='card alinha'>
                         <img className='elipse' src="../assets/elipse.png" alt="" />
                        <img className='icone' src="../assets/tel.png" alt="icone" />
                    <p className='painel_num' onChage={aumentarAction}>{contagem}</p>
                    <p className='painel_text'>Chamadas</p>
                </div >
                <div className='card alinha'>
                        <img className='elipse' src="../assets/elipse2.png" alt="" />
                        <img className='icone2' src="../assets/mala1.png" alt="icone" />
                        <img className='icone' src="../assets/mala2.png" alt="icone" />
                    <p className='painel_num'>14</p>
                    <p className='painel_text'>Reuniões</p>
                </div >
                <div className='card alinha'>
                        <img className='elipse' src="../assets/elipse.png" alt="" />
                        <img className='icone3' src="../assets/carta1.png" alt="icone" />
                        <img className='icone' src="../assets/carta2.png" alt="icone" />
                    <p className='painel_num'>25</p>
                    <p className='painel_text'>E-mails</p>
                </div>
                <div className='card alinha'>
                        <img className='elipse' src="../assets/elipse2.png" alt="" />
                        <img className='icone4' src="../assets/mapa2.png" alt="icone" />
                        <img className='icone' src="../assets/mapa1.png" alt="icone" />
                    <p className='painel_num'>34</p>
                    <p className='painel_text'>Visitas</p>
                </div>
                </ContainerPainelNumeros>
        
    )
}
