import { Box, Grid } from '@mui/material';
import './Contact.css';
import CForm from './ConForm';

export default function Contact(props){

    return(
        <section id='Contact'>
            <div>
                <Grid container  columnSpacing={7} rowSpacing={7}>
                    <Grid item xs={12} sm={12} md={6} lg={5} data-uk-scrollspy="cls: uk-animation-slide-left;">
                        <h2 id='contact-h' style={{margin:0}}> Contact Me </h2>
                        <p style={{margin:0}}> at anytime! </p>

                        <h5 id='contact-sub'>
                           As a frelancer and a full-stack developer,
                           I have sharpened my self with the top tech
                           tools such as React, Node, Next and etc.,
                           You can contact me at anytime from anywhere 
                           regarding works! I can make you feel comfort 
                           and royal with my creativity!
                        </h5>

                        <Box sx={{ display:'flex', marginTop:'10%', gap:'10px', justifyContent:{ sx:'center',sm:'center',md:'start',lg:'start' } }}>
                            <button className='nav-btn'> My Blog <span data-uk-icon="icon: arrow-right"></span> </button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={7} data-uk-scrollspy="cls: uk-animation-slide-right;">
                        <CForm />
                    </Grid>
                </Grid>
               
            </div>
        </section>
    )

}