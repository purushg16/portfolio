import './nav.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Menu from './Menu';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
export default function ElevateAppBar(props) {

  function scroll(props){
    const element = document.getElementById(props);
    element.scrollIntoView();
  }

  function href(props) {
    window.location.hash = '';
    window.location.pathname = props;
  }

  return (
    <section id='nav'>
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ padding:'1%5%', background:'#fff', color:'inherit', boxShadow:'none'}}>
          <Toolbar>
            
            <div id='nav-container'>
                <Box sx={{ display: { xs:'none', sm:'none', md:'block', lg:'block' } }}>
                  <div className='left'>
                      <a className='nav-link' onClick={()=>{ href('work') }}> Work </a>
                      <a className='nav-link' onClick={()=>{ scroll('about') }}> About </a>
                  </div>
                </Box>
                
                <img width="48" height="48" src="https://img.icons8.com/color/48/000000/ghost--v1.png" alt="ghost--v1"/>
                
                <Box sx={{ display: { xs:'none', sm:'none', md:'block', lg:'block' } }}>
                  <div className='left'>
                      <a className='nav-link' onClick={()=>{ scroll('Contact') }}> Contact </a>
                      <a className='nav-link' onClick={()=>{ scroll('about') }}> blog </a>
                  </div>
                </Box>
                
                <Box sx={{ display: { xs:'block', sm:'block', md:'none', lg:'none' } }}>
                  <div className='left'>
                     <Menu />
                  </div>
                </Box>
            </div>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container style={{ marginLeft:0, marginRight:0, padding:0, width:'100%', maxWidth:'none'}}>
        <Box sx={{ my: 10, width:'100%', maxWidth:'none'}}>
        </Box>
      </Container>
      
    </React.Fragment>
    </section>
  );
}
