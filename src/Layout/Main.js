
import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedPages/Footer/Footer';
// import Header from '../Pages/SharedPages/Header/Header';
import Navbar from '../Pages/SharedPages/Navbar/Navbar';


const Main = () => {
   return (
     <Box >
       {/* <Header /> */}
       <Navbar/>
       <Outlet />
       <Footer />
     </Box>
   );
};

export default Main;