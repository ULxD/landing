import styled from 'styled-components';
import { Button } from '../../styles/button';


export const NavBar = styled.div`
    max-width: 1440px;
    width: 90%;
    height: 15vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const Logo = styled.p`
    font-weight: bold;
    cursor: pointer;
    font-size: 18px;
`
export const ButtonNav = styled(Button)``