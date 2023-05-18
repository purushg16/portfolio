import { useEffect, useState } from 'react';
import './Projects.css';
import DropButton from './Drop';
import ProCards from './ProCards';
import { Grid } from '@mui/material';

const options = ['All', 'React', 'Node', 'Python', 'Flutter'];

export default function Projects(props) {

    const [type, setType] = useState();
    const [data, setData] = useState({});
    const [fetched, isFetched] = useState(false);

    function handleType(e){ console.log(Object.keys(data).includes(type)); setType(options[e]); }
    // useEffect(()=>{ console.log(type) })


    function fetchData(){
        fetch("https://folio-liu2.onrender.com/api")
        .then(res => res.json())
        .then(
            (result) => { 
                isFetched(true);
                result = result['docs'];
                setData({
                    Flutter: result.filter((a) => a.tag === 'flutter'),
                    Node: result.filter((a) => a.tag === 'node'),
                    React: result.filter((a) => a.tag === 'react' ),
                    Python: result.filter((a) => a.tag === 'python' ),
                });
            },
        (error) => {}
        )
    }

    useEffect(()=> { if(!fetched) fetchData(); else console.log(data); })

    return(
        <section id='projects'>

            <div style={{marginBottom:'5%', display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
                <div>
                    <h2 style={{margin:0}}> Projects </h2>
                    <p style={{margin:0}}> i've experimented! </p> 
                </div>
                <DropButton handleType={handleType} />
            </div>

            <div>

                <h3> {type} </h3>

                <div style={{marginTop:'5vh',padding:'0 4vh'}}>
                    <Grid container columnSpacing={5} rowSpacing={5}> 
                        { Object.keys(data).includes(type) &&  data[type].map((d,i)=>{
                            return (<Grid item lg={4}> <ProCards title={d.title} tag={d.tag} desc={d.desc} url={d.url} img={d.img_url} type={ d.type && d.type } /> </Grid>)})
                        }
                    </Grid>
                </div>

            </div>

        </section>
    )

}