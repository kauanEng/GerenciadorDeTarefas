import styled from 'styled-components';


export const AreaHeader = styled.div`
    height: 114px;
    max-width: 100%;
    background-color:#F7F9FA;
    color: black;

    .container {
       display: flex;
       justify-content: space-between;
       align-items: center;
       font-family: 'Fira Sans', sans-serif;
        
    }   
    nav {
        display: flex;
        
        li {
            list-style: none;
            margin-left: 25px;
            padding-top:50px;

            a {
                text-decoration: none;
                color: black;
                display:flex;
                align-items: center;
                margin: 5px;

                &:hover {
                    color: #CCC;
                     }
                }
            }

            .avatar {
                display: flex;
                align-items: center;
                margin-left: -50px; 
                padding-top: 40px;

                img {
                    width:40px;
                    height: 40px;
                    border-radius: 20px;
                    margin-right: 24px;
                    padding-bottom: 5px;
                    cursor: pointer;
                }

             .label-nome{
                 font-size: 14px;
                height: 34px;
                width: 126px;
                left: 135px;
                top: 40px;

                /* height: 34px;
                font-size:15px;
                cursor: pointer;    */
                    
                }
            }
            @media screen and (max-width:600px) {
                label {
                    display: none;
                }
            }
        }

        .alinha {
            margin-right: 10px;
        }
`;