import styled from 'styled-components';

export const AreaLogin = styled.div`
    position: absolute;
    background-color: #C7C7DF;
    padding: 30px;
    max-width: 370px;
    left: 915px;
    bottom: 90px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
    

    h1 {
        font-size: 21px;
    }

    .organize {
        display: flex;
        
        a {
            color: #000;
        }
    }

    .text-area {
        font-weight: bold;
    }

    .form-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

 
    .form--input {
       text-align: left;
        

        label {
            display: block;
            margin: 11px;
            font-size: 17px;
           
        }

        input {
            margin-top:10px;
            font-size: 15px;
            width: 280px;
            
        }
    }


    .footerLogin {
        font-size: 13px;
    a {
        font-weight: bold;
        margin-left: 5px;
        color:#4e129c;
        transition: 0.4s;
        cursor: pointer;
        
    &:hover {
        color: #eae4e9;
            }
        }
    }
`;

export const ContainerBackground = styled.div`
    background-image: url('.././../back.jpg');
    height: 100vh;
    width: 910px;
    background-size: cover;
    background-repeat: no-repeat;
    

`; 