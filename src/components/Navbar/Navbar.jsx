import './nav.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar(props) {

  return (
    <section id='nav'>
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ padding:'1%5%', background:'#fff', color:'inherit', boxShadow:'none'}}>
          <Toolbar>
            
            <div id='nav-container'>
                <Box sx={{ display: { xs:'none', sm:'none', md:'block', lg:'block' } }}>
                  <div className='left'>
                      <a href='.' className='nav-link'> Work </a>
                      <a href='.' className='nav-link'> About </a>
                  </div>
                </Box>
                
                <img width="48" height="48" src="https://img.icons8.com/color/48/000000/ghost--v1.png" alt="ghost--v1"/>
                
                <Box sx={{ display: { xs:'none', sm:'none', md:'block', lg:'block' } }}>
                  <div className='left'>
                      <a href='.' className='nav-link'> Contact </a>
                      <a href='.' className='nav-link'> blog </a>
                  </div>
                </Box>
            </div>

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container style={{ marginLeft:0, marginRight:0, padding:0, width:'100%', maxWidth:'none'}}>
        <Box sx={{ my: 10, width:'100%', maxWidth:'none'}}>
        </Box>
      </Container>
      
    </React.Fragment>
    </section>
  );
}
