import styled from "styled-components";

export const BtnDefaultIcons = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border:0px;
  outline: none;
  font-size: 16px;
  margin-bottom: 15px;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  
  }

  .center {
    text-align: center;
    width: 100%;
  }
`;


export const BtnDefault = styled(BtnDefaultIcons)`
  background: #2B7DE9;
  display: inline;
  padding-top: 12px;
  width:300px;
  margin: 10px;
  margin-right: 1px;
  color: white;
  

  &:hover {
    background-color:#023e8a;
  }


`;
