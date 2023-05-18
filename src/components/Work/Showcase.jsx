import { Grid } from "@mui/material";

export default function ShowCase(props) {

    const images  = props.images;

   return(
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top" style={{padding:'0.5%'}}>
                { images && <Grid container columnSpacing={0.5} rowSpacing={0.5}>   

                    {Object.keys(images).map(i =>{
                        return (
                            <Grid item xs={6}>
                                <img className="card-img" src={images[i]} alt="" />
                            </Grid>
                        )
                    })}
                    
                    </Grid> }
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">
                    {props.title}
                    <button className="send-btn">View <span uk-icon='icon:arrow-right'></span> </button>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
   )
}