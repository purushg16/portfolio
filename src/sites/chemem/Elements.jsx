import * as React from 'react';
import Grid from '@mui/material/Grid';
import ElCard from './Card';
import { useEffect, useState } from 'react';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import { AppBar, Box, Dialog, DialogContent, IconButton, Toolbar, useScrollTrigger } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import FreeSolo from './EleMenu';


export default function Elements(props) {

    const [fetched, isFetched] = useState(false);
    const [elements, setELe] = useState();
    let data;

    const fetchData = async() => {

        if(localStorage.data) {
            setELe( JSON.parse(localStorage.getItem('data')));
            isFetched(true);
        } else {
            const url = 'https://chemical-elements.p.rapidapi.com/';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '73a3b1c3c6msh37c2a8da96ad92bp16b531jsn03f7ea6561cd',
                    'X-RapidAPI-Host': 'chemical-elements.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result.elements);
                data = result;
                setELe(result.elements)
                if(result){ 
                    localStorage.setItem( 'data', JSON.stringify(result.elements) );
                    isFetched(true);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    useEffect(()=>{
        if(!fetched) fetchData();
        else console.log(data);
    })

    const [open, setOpen] = React.useState(false);
    const [element, selectedEle] = React.useState();
    
    const handleSelect = (props) => {
        console.log(props);
        selectedEle(props);
        setOpen(false);
    }

    const handleOpen = () => { setOpen(true) };
  
    const handleClose = () => { setOpen(false) };

    const trigger = useScrollTrigger({
        target: undefined,
        disableHysteresis: true,
        threshold: 100,
    });
  

    return(
        <section id="elements">
            <Box sx={{ flexGrow: 1, padding:'6%', textAlign:'justify' }}>

            { (element) && 
                <>
                <button className='btn' onClick={()=>{selectedEle('')}}> {'<-'} All elements </button>

                <Grid container rowSpacing={3} columnSpacing={0} columns={{ xs: 4, sm: 8, md: 12 }} data-uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100">
                    <Grid item xs={2} sm={4} md={4}>
                        <ElCard
                            name={element.name}
                            am={element.atomic_mass}
                            phase={element.phase}
                            symbol={element.symbol}
                            desc={element.summary}
                            form={element.phase}
                            index={1}
                        />
                    </Grid>
                </Grid>
                </>
            }


                { ( !element && fetched) &&

                    <Grid container rowSpacing={3} columnSpacing={0} columns={{ xs: 4, sm: 8, md: 12 }} data-uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100">
                        {elements.map((d, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <ElCard
                                    name={d.name}
                                    am={d.atomic_mass}
                                    phase={d.phase}
                                    symbol={d.symbol}
                                    desc={d.summary}
                                    form={d.phase}
                                    index={index}
                                 />
                            </Grid>
                        ))}
                    </Grid>
                }

                {(!fetched) &&
                     <div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                         <img src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt='loading...' /> 
                    </div>
                }
            </Box>

            <Fade in={trigger}>
                <Box
                    onClick={handleOpen}
                    role="presentation"
                    sx={{ position: 'fixed', bottom: 68, right: 16}}
                >
                <Fab size="small" aria-label="search elements">
                    <SearchOutlined />
                </Fab>
                </Box>
            </Fade>

            <Dialog onClose={handleClose} open={open}>
                <AppBar sx={{ position: 'relative', background:'none', boxShadow:'none'}}>
                    <Toolbar sx={{ justifyContent:'space-between' }}>
                            <h4> Seacr Elements </h4>
                        <IconButton
                        edge="end"
                        color="#000"
                        onClick={handleClose}
                        aria-label="close"
                        >
                        <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <DialogContent>
                    <FreeSolo handleSelect={handleSelect} selection/> 
                </DialogContent>
            </Dialog>

        </section>
    )

}