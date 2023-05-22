import ShowCase from './Showcase';
import './work.css';

import {Uimages} from './../../assets/assets';
import {BFimages} from './../../assets/assets';
import { Grid } from '@mui/material';

export default function Work(props) {

    return(
        <section id="work">

            <div style={{marginBottom:'5%'}}>
                <h2 style={{margin:0}}> Work </h2>
                <p style={{margin:0}}> i've done so far... </p> 
            </div>

            <div>
                <Grid container columnSpacing={5} rowSpacing={5} data-uk-scrollspy="cls: uk-animation-slide-left-small; target: > div; delay: 500"> 
                    <Grid item lg={6}> 
                        <ShowCase 
                            title={'Urja-The Dying Studio'} 
                            images={Uimages}  
                            desc ={`This project is featuring Urja, a dying studio located in Bangalore. 
                                    This is a e-commerce website like a user can come, view, shop and buy clothes.
                                    This includes payment!`}
                        /> 
                    </Grid> 
                    <Grid item lg={6}> 
                        <ShowCase 
                            title={'BudgetFare'} 
                            images={BFimages} 
                            desc ={`This project is a affiliated flight booking application. 
                                    Users can login and view their flight's current status.`}
                        /> 
                    </Grid> 
                </Grid>
            </div>

        </section>
    )

}