import styled from 'styled-components'


export const Button = styled.button`
    min-height: 45px;
    min-width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0px 15px;

    border: none; 
    outline: none;
    cursor: pointer;

    font: inherit;
    font-size: 12px;

    background-color: #333;
    color: #ffffff;

    transition: 0.5s;

    &:hover {
      color: #333; 
      background-color: #ccc;
      font-weight: bold;
    }
`

