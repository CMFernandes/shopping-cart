import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import {theme} from './theme.js';

const Container = styled.div`
    max-width: 1328px;
    width:100%;
    margin: 0 auto;
  `
  

export const App = () => {
  const [shopCart,setShopCart] = useState([]);
  
  return (
    <ThemeProvider theme={theme}>
     <Container>
        <Navbar shopCart={shopCart}></Navbar>
        <Outlet context={[shopCart,setShopCart]}/>
      </Container>
    </ThemeProvider>
  )
}


