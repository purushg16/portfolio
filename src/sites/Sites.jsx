import ShowCase from '../components/Work/Showcase';
import './sites.css';

import { Grid } from '@mui/material';

export default function Sites(props) {

    return(
        <section id="sites">

            <div style={{marginBottom:'5%'}}>
                <h2 style={{margin:0}}> Sites </h2>
                <p style={{margin:0}}> i've developed so far... </p> 
            </div>

            <div>
                <Grid container columnSpacing={5} rowSpacing={5} data-uk-scrollspy="cls: uk-animation-slide-left-small; target: > div; delay: 500"> 
                    
                    <Grid item lg={6}> 
                        <ShowCase 
                            sites
                            title='ChemEm' 
                            desc='ChemEm is a web project developed in REACT and with the help Rapid API. 
                            It is used to review Chemical Elements, compare them!'
                        />
                    </Grid>

                </Grid>
            </div>

        </section>
    )

}