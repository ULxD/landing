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
          <MainButton>
          Experimentar
          </MainButton>
        </Link>
        <Link href='/about'>
          <MainButton>
            Saiba Mais
          </MainButton>
        </Link>

      </MainActions>

    </Main>

  </PageContainer>
  )
}

export default Home

export const PageContainer = styled.div`` 

export const NavBar = styled.div``

export const Logo = styled.p``

export const Button = styled.button``
  
export const ButtonNav = styled(Button)``

export const MainButton = styled(Button)``
  
export const Main = styled.main``

export const HeadLine = styled.h1``

export const SubHeadLine = styled.h2``

export const MainActions = styled.div``


  