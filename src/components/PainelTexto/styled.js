import styled from 'styled-components';


export const ContainerPainel = styled.div`
    display: flex;
    justify-content: space-between;


    button {
    position: absolute;
    width: 118px;
    height: 35px;
    left: 930px;
    top: 169px;
    color: white;

/* primary */

    background: #FF8F6D;
    border-radius: 8px;  
    }
    
`;


export const PainelTitulo = styled.div`
p {
position: absolute;
width: 333px;
height: 34px;
left: 71px;
top: 160px;

font-family: Fira Sans;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 34px;
/* identical to box height */

display: flex;
align-items: center;
}
`;


export const PainelSubtitulo = styled.div`
    padding-bottom: 40px;
    
    p {
        position: absolute;
        width: 328px;
        height: 17px;
        left: 71px;
        top: 195px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
    }
`;


export const ContainerPainelNumeros = styled.div`
display: flex;
justify-content: flex-start ;



.card {
width: 234.36px;
height: 103px;
left: 71px;
top: 252px;

/* white */

background: #FFFFFF;
box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
border-radius: 10px;
}


.painel_num {
   display: flex;
   justify-content: center;
   align-items: center;

    font-family: Fira Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 35.7037px;
    line-height: 43px;
}

.painel_text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;


}

.alinha {
    margin-left: 10px;
}




`;





