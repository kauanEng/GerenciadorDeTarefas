import styled from 'styled-components';



export const ContainerPainel = styled.div`
    padding-top: 100px;
    margin-left: 80px;

.container-forms1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    
}

.container-forms2 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    width: 200px;
    height: 35px;
    left: 581px;
    top: 255px;

    border-radius: 10px;
    display: flex;
    justify-content: start;
  
}

.MuiInputLabel-root {
    margin-top: 17px;
    margin-left: 12px;
 
}

.MuiFormControl-root {
    background: #F7F9FA;
    border-radius: 10px;
}


.MuiFormControl-root {
    border: 0;
    margin: 3px;
    display: inline-flex;
    padding: 1px;
    padding-top: 1px;
    position: relative;
    min-width: 0;
    flex-direction: column;
}

.label-name {
color: #757575;
margin-right: 10px;
font-family: 'Fira Sans';
font-size: 14px;

}


.ajuste-icon {
    margin-left: 12px;
}

.alinha-icon-phone {
    position: absolute;
    top:0px;
    bottom: 47.01%;
}

.MuiSelect-selectMenu{
    padding-left: 50px;
}

.MuiSelect-select {
    cursor: pointer;
    min-width: 16px;
    user-select: none;
    border-radius: 0;
    margin-left: 30px;
    -moz-appearance: none;
    -webkit-appearance: none;
}

#time > input{
    width: 100px;
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







