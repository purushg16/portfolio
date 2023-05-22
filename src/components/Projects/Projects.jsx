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


    useEffect(()=>{
        const loads = document.getElementsByClassName('loader');

        for (let i = 0; i < loads.length; i++) {
            const e = loads[i].classList;

            function loop() {
                console.log(e);
                
                setInterval(function() {
                    e.add('anime');

                    setTimeout(() => {
                        e.remove('anime');
                        e.add('noanime'); 
                    }, 1000);
                    e.remove('noanime'); 

                }, 2000);

            } loop();
        }
    })

    return(
        <section id='projects'>

           {  (!fetched) ?
            <>  
                <div style={{marginBottom:'5%', display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
                    <div>
                        <h2 style={{margin:0}}> Projects </h2>
                        <p style={{margin:0}}> i've experimented! </p> 
                    </div>
                </div>

                <div id='loader-cont' style={{ display:'flex', justifyContent:'center', margin:'20vh 0',gap:'5px' }}>
                    <div className='loader'></div>
                    <div className='loader'></div>
                    <div className='loader'></div>
                    <div className='loader'></div>
                </div>
            </>
                :          
            <>
                <div style={{marginBottom:'5%', display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
                <div>
                    <h2 style={{margin:0}}> Projects </h2>
                    <p style={{margin:0}}> i've experimented! </p> 
                </div>
                <DropButton handleType={handleType} />
            </div>

            <div data-uk-scrollspy="cls: uk-animation-slide-left-small; target: .uk-card; delay: 500">
                
                { (type==='All') && 
                    <>
                        {Object.keys(data).map(key=>{
                            return (
                                <>
                                <h3> {key} </h3>
                                <Grid container columnSpacing={5} rowSpacing={5} style={{marginBottom:'10%'}}>
                                {data[key].map((d,i)=>{
                                return (
                                        <Grid item lg={4}> 
                                            <ProCards title={d.title} tag={d.tag} desc={d.desc}  url={d.url ? d.url :( d.CSurl ? d.CSurl : d.google_colab )} img={d.img_url} type={ d.type && d.type } /> 
                                        </Grid>
                                )})}
                                </Grid>
                                   <p style={{textAlign:'center',margin:0}} >  ~ ----------------- ~ ~ ----------------- ~ </p>
                                </>
                        )})}
                    </>
                }

                { (type!=='All') && 
                    <>
                    <h3> {type} </h3>

                    <div style={{marginTop:'5vh',padding:'0 4vh'}}>
                        <Grid container columnSpacing={5} rowSpacing={5}>
                            { Object.keys(data).includes(type) &&  data[type].map((d,i)=>{
                                return (<Grid item lg={4}> <ProCards title={d.title} tag={d.tag} desc={d.desc} url={d.url ? d.url :( d.CSurl ? d.CSurl : d.google_colab )} img={d.img_url} type={ d.type && d.type } /> </Grid>)})
                            }
                        </Grid>
                    </div>
                    </>
                }
            </div>
            </>
        }

        </section>
    )

}