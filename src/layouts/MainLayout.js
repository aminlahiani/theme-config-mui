import React  from 'react'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';

import { styled } from '@mui/material/styles';
//import { Footer } from './footer';
import { MainNavbar } from './main-navbar';
import { MainSidebar } from './main-sidebar';
//import { Footer } from './footer';

const MainLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 64
}));

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <MainLayoutRoot>
      <MainNavbar onOpenSidebar={() => setIsSidebarOpen(true)} />
     <MainSidebar
        onClose={() => setIsSidebarOpen(false)}
        open={isSidebarOpen}
      /> 
         <Outlet />
      {/* <Footer/> */}
    </MainLayoutRoot>
  );
};

// MainLayout.propTypes = {
//   children: PropTypes.node
// };
