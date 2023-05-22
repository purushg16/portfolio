

import { Grid } from '@mui/material';
import './blog.css';


export default function Blog(props) {

    return(
        <section id='blog'>

            <Grid container rowSpacing={3} columnSpacing={2}>
                <Grid item sm={12} lg={6}>
                <img src='https://media.tenor.com/Y0flR8fgl9sAAAAC/development-men.gif' alt='varum' />
                </Grid>
                <Grid item sm={12} lg={6}>
                    <h2 style={{textAlign:'center'}}> 
                        I am currently working on my blog site!
                        Will reach you soon!
                    </h2>
                    <p style={{color:'#000a',textAlign:'center'}}> ~regards: @purushothaman</p>
                </Grid>
            </Grid>

        </section>
    )

}