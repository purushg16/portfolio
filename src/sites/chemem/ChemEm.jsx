import { useEffect, useState } from 'react';
import Elements from './Elements';
import './home.css';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Box, useScrollTrigger } from '@mui/material';

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      'body',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',behavior: "smooth"
      });
    }
  };

  console.log(children);

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16}}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function Home(props) {

    const [uppEd, setUp] = useState(false);

    function upped() {
        setUp(true);
        document.querySelector('#welcome').classList.add('up-ed');
        document.querySelector('button#once').remove();
        document.querySelector('#welcome h2').remove();
    }

    useEffect(()=>{ 
        if(!uppEd) document.querySelector('#elements').style.display = 'none'; 
        else {
            setTimeout(()=>{
                document.querySelector('#elements').style.display = 'block';
            },500)
        }
    })

    return(
        <section id='home'>
           <div id='welcome'>
                <h2 style={{margin:0,color:'#F7D060'}}> Welcome to </h2>
               <h1 className='logo'> ChemEm! </h1>
               <button id='once' className='btn' onClick={upped}> Get In </button>
           </div>
           <Elements />

            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>

        </section>
    )

}