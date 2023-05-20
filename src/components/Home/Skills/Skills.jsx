
import { Box, Grid } from '@mui/material';
import './skills.css';
import SCont from './SCont';



export default function Skills(props){

    return(
        <section id='skills'>

             <div>
                <Grid container  columnSpacing={7} rowSpacing={7}>
                    <Grid item xs={12} sm={12} md={6} lg={5} data-uk-scrollspy="cls: uk-animation-slide-left-small;">
                        <h2 id='skill-h' style={{margin:0}}> Skills </h2>
                        <p style={{margin:0}}> I Possess.. </p>

                        <h5 id='skill-sub'>
                           As a frelancer and a full-stack developer,
                           I have sharpened my self with the top tech
                           tools such as React, Node, Next and etc.,
                        </h5>

                        <Box sx={{ display:'flex', marginTop:'10%', gap:'10px', justifyContent:{ sx:'center',sm:'center',md:'start',lg:'start' } }}>
                            <button className='nav-btn'> Projects <span data-uk-icon="icon: arrow-right"></span> </button>
                            <button className='nav-btn'> Contact  <span data-uk-icon="icon: arrow-right"></span> </button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={7}>

                        <div id='skill-cont'>
                            <SCont />
                        </div>
                        
                    </Grid>
                </Grid>
               
            </div>
        </section>
    )

}