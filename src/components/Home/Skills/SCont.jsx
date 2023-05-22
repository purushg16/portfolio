// import './skills.css';
import { Grid } from "@mui/material";


const skills = {
    react: [90, 'https://img.icons8.com/officel/40/react.png'],
    node: [80, 'https://img.icons8.com/fluency/30/node-js.png'],
    next: [50, 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3244252/nextjs-icon-md.png'],
    express:[80, 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'],
    html: [90, 'https://img.icons8.com/color/30/html-5--v1.png'],
    css: [90, 'https://img.icons8.com/fluency/30/css3.png'],
    js: [90, "https://img.icons8.com/fluency/30/javascript.png"],
    python:[95, 'https://img.icons8.com/color/30/python--v1.png'],
    flask:[70, 'https://img.icons8.com/ios/30/flask.png'],
    flutter:[80, 'https://img.icons8.com/color/30/flutter.png'],
    canva: [95, 'https://img.icons8.com/fluency/30/canva.png'],
}



export default function SCont(props){

    return(
        <Grid container columnSpacing={2} rowSpacing={3} data-uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500">

            {Object.keys(skills).map(i =>{
                return(
                    <Grid item xs={6} sm={4} md={4} lg={4}>
                        <div className="uk-card uk-card-default uk-card-body skill-divs react">

                        <img src={skills[i][1]} alt="react" className="skill-icons"/> 
                        <div style={{textAlign:'right'}}>
                            <h4 className='percent' style={{margin:0,color:'darkcyan',fontWeight:'bold'}}> {skills[i][0]}% </h4>
                            <h2 className="uk-card-title skill-name" style={{color:'black',margin:0,marginTop:'10%',padding:0}}>
                                {i}
                            </h2> 
                        </div>

                        </div>
                    </Grid>
                )})}

        </Grid>
    )

}