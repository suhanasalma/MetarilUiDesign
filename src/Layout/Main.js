
import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedPages/Footer/Footer';
// import Header from '../Pages/SharedPages/Header/Header';
import Navbar from '../Pages/SharedPages/Navbar/Navbar';


const Main = () => {
   return (
     <Container style={{maxWidth:"1200px"}}>
       {/* <Header /> */}
       <Navbar/>
       <Outlet />
       <Footer />
     </Container>
   );
};

export default Main;