import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const Home = () => {
  return (
  <PageContainer>

    <NavBar>
      <Link href='/'>
        <Logo>
          Zumthor
        </Logo>
      </Link>
      <Link href='/login'>
        <ButtonNav>
          Entrar
        </ButtonNav>
      </Link>
    </NavBar>

    <Main>
      <HeadLine>
        Zumthor
      </HeadLine>

      <SubHeadLine>
        Projete atmosferas e experiências com o auxilio da inteligência artificial.
      </SubHeadLine>

      <MainActions>
        <Link href='/register'>
          <ButtonExperiment>
          Experimentar
          </ButtonExperiment>
        </Link>
        <Link href='/about'>
          <ButtonAbout>
            Saiba Mais
          </ButtonAbout>
        </Link>

      </MainActions>

    </Main>

  </PageContainer>
  )
}

export default Home

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ffffffbe;
    flex-direction: column;
    display: flex;
    align-items: center;
` 

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
  
export const ButtonNav = styled(Button)``

export const ButtonExperiment = styled(Button)`
    margin-right: 7.5px;
`

export const ButtonAbout = styled(Button)`
    margin-left: 7.5px;
    background-color: #333333a0;
`
  
export const Main = styled.main`
    
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
`

export const SubHeadLine = styled.h2`
    font-size: 24px;
    font-weight: normal;
    text-align: center;

    max-width: 70%;
    margin-bottom: 24px;
`

export const MainActions = styled.div`
    display: flex;
`


  