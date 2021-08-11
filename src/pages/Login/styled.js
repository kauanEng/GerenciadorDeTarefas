import styled from 'styled-components';

export const AreaLogin = styled.div`
    background-color: #fff;
    padding: 30px;
    max-width: 370px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
    

    h1 {
        font-size: 24px;
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
        color: #7d2ae8;
            }
        }
    }
`;