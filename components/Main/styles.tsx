import styled from 'styled-components';
import { Button } from '../../styles/button';


export const MainS = styled.main`
    
    max-width: 1440px;
    width: 90%;
    height: 85vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const HeadLine = styled.h1`
    font-size: 90px;
    margin-bottom: 24px;

    @media (max-width: 500px){
      font-size: 72px;
    }
`

export const SubHeadLine = styled.h2`
    font-size: 24px;
    font-weight: normal;
    text-align: center;

    max-width: 70%;
    margin-bottom: 24px;

    @media (max-width: 500px){
      font-size: 14px;
    }
`

export const MainActions = styled.div`
    display: flex;
`


export const ButtonExperiment = styled(Button)`
    margin-right: 7.5px;
`

export const ButtonAbout = styled(Button)`
    margin-left: 7.5px;
    background-color: #333333a0;
`