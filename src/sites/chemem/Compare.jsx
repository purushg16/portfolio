import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import FreeSolo from './EleMenu';
import CloseIcon from '@mui/icons-material/Close';
  

export default function Compare(props) {

    const [ele, setELe] = React.useState('');

    const handleClose = () => { 
        props.close();  
        setTimeout(() => {setELe('')}, 100);
    };
    
    const handleSelect = (props) => {
        setELe(props);
    }

    const element = props.data;
    delete element.summary;

    return (
    <div>
      <Dialog
        fullScreen={ele}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >

        <AppBar sx={{ position: 'relative', background:'none', boxShadow:'none'}}>
          <Toolbar sx={{ justifyContent:'space-between' }}>

            { (!ele) ?
                <h4> Compare <span style={{color:'blue'}}>{element.name}</span> with.. </h4>
                :
                <h4> Result is ready! </h4>
            }

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

        {( !ele ?
            <DialogContent style={{paddingTop:0}}>
                 <FreeSolo handleSelect={handleSelect} /> 
            </DialogContent>
                :
                <DialogContent>
                <table class="uk-table uk-table-striped" style={{textAlign:'center'}}>
                    <thead>
                        <tr id='head-cont'>
                            <th> Properties </th>
                            <th> {element.name} </th>
                            <th> {ele.name} </th>
                        </tr>
                    </thead>

                    <tbody id='table-body'>
                        
                        {Object.keys(element).map(e=>{
                            return(
                                <tr id='body-cont'>
                                    <td style={{color:'black',fontWeight:'bold', textTransform:'uppercase'}}>{ e.replace('_', ' ') }</td>
                                    <td> { (e==='source' || e==='spectral_img') ? <a href={element[e]}>{e}</a> : ( element[e] ?  String(element[e]).replace(/(.{100})/g, `$1${'\n'}`) : '-' ) } </td>
                                    <td> { (e==='source' || e==='spectral_img') ? <a href={ele[e]}>{e}</a> :  ( ele[e] ?  String(ele[e]).replace(/(.{100})/g, `$1${'\n'}`) : '-' ) } </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </DialogContent>
        )}
      </Dialog>
    </div>
  );
}