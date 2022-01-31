import React from 'react';
import Link from 'next/link';
import { MainS, HeadLine, SubHeadLine, ButtonAbout, ButtonExperiment, MainActions } from './styles'


const Main = () => {
  return (
    <MainS>
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

  </MainS>
  )
};

export default Main;
