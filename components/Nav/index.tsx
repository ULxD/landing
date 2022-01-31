import React from 'react';
import Link  from 'next/link'
import { NavBar, Logo, ButtonNav } from './styles'

const Nav = () => {
  return (
      <>
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
      </>
  )
};

export default Nav;
