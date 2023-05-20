import { Box, Grid } from '@mui/material';
import './about.css';

import ImageLi from './ImageList';

export default function About(props){

    return (
        <section id='about'>

            <div>
                <Grid container  columnSpacing={7} rowSpacing={7}>
                    <Grid item xs={12} sm={12} md={6} lg={6} data-uk-scrollspy="cls: uk-animation-slide-left;">
                        <h2 id='about-h' style={{margin:0}}> About </h2>
                        <p style={{margin:0}}>myself...</p>

                        <h5>
                            hey there! I am purushorhaman g from India. 
                            i can do and develop and design many things
                            from the things i have learnt throughout 
                            my life. With the knowledge of this, I will 
                            beacome a leading person in India one day!
                        </h5>

                        <Box sx={{ display:'flex', marginTop:'10%', gap:'10px', justifyContent:{ sx:'center',sm:'center',md:'start',lg:'start' } }}>
                            <button className='nav-btn'> Projects <span data-uk-icon="icon: arrow-right"></span> </button>
                            <button className='nav-btn'> Contact  <span data-uk-icon="icon: arrow-right"></span> </button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} data-uk-scrollspy="cls: uk-animation-slide-right;">
                        <div id='image-scroller'>
                            <ImageLi />
                        </div>
                    </Grid>
                </Grid>
               
            </div>
        </section>
    )

}

