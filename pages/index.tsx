import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav'
import Main from '../components/Main';

const Home = () => {
  return (
  <PageContainer>

    <Nav/>

    <Main/>

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


  