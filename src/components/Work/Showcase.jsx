import { Grid } from "@mui/material";

export default function ShowCase(props) {

    const images = props.images;
    
    const handleNavigate = (tag) => { window.location.pathname = tag; }

   return(
        <div className="uk-card uk-card-default">
            { !(props.sites) &&
                <div className="uk-card-media-top" style={{padding:'0.5%'}}>
                    { images && <Grid container columnSpacing={0.5} rowSpacing={0.5}>   

                        {Object.keys(images).map(i =>{
                            return (
                                <Grid item xs={6}>
                                    <img className="card-img" src={images[i]} alt="" loading='lazy' />
                                </Grid>
                            )
                        })}
                        
                        </Grid> }
                </div>
            }

            <div className="uk-card-body">
                <h3 className="uk-card-title" style={{ display:'flex', justifyContent:'space-between',alignItems:'end', fontWeight:'bold' }}>
                    {props.title}
                    <button onClick={()=>{handleNavigate('/sites/chemem')}} className="send-btn">View <span uk-icon='icon:arrow-right'></span> </button>
                </h3>
                <p>{props.desc}</p>
                {props.title==='BudgetFare' && <p style={{color:'black'}}> Note: This site is currently under review and upgrading. Some features won't be available.</p>}
            </div>
        </div>
   )
}