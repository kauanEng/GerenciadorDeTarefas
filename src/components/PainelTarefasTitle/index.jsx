import React from 'react';
import { ContainerTitle } from './styled';

export default function PainelTarefasTitle() {
    return (
        <>
           
            <ContainerTitle>
            <div className='title'>
                Tarefas
            </div>
            <div className='container-buscador'>
            <form>
                <div className="form-group">
                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="  Buscar ..."/>
                 <img className='img-retangulo' src="../assets/retangulo.png" alt="buscador" />
               <img className='icone1' src="../assets/lupa1.png" alt="logo-lupa" />
               <img className='icone2' src="../assets/lupa2.png" alt="logo-lupa" />
                </div>
            </form>
               </div>
            </ContainerTitle>
      
        </>
    )
}
