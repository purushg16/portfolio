import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CompareIcon from '@mui/icons-material/Compare';
import Compare from './Compare';


const SOL_ICON = <img src="https://img.icons8.com/plumpy/24/brick-wall.png" alt="brick-wall"/>
const LIQ_ICON = <img src="https://img.icons8.com/plumpy/24/water.png" alt="water"/>
const GAS_ICON = <img src="https://img.icons8.com/plumpy/24/gas.png" alt="gas"/>


export default function ElCard(props) {

  const data = JSON.parse(localStorage.getItem('data'));
  console.log(data.filter(res=>(res.name === props.name)));

  const [open, setOpen] = React.useState(false);

  function handleCompare(props){
    setOpen(true);
  }

  const close = () => { setOpen(false); }

  return (
    <>
      <Card sx={{ maxWidth: 360 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.symbol}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              { (props.form === 'Gas' ? GAS_ICON : ( props.form === 'Solid' ? SOL_ICON : LIQ_ICON )) }
            </IconButton>
          }
          title={props.name}
          subheader={ 'Atomic Mass: ' + props.am}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>

        <CardActions disableSpacing sx={{ justifyContent:'end' }}>
          <IconButton aria-label="compare">
            <CompareIcon onClick={handleCompare}/>
          </IconButton>
        </CardActions>
      </Card>

      <Compare open={open} close={close} reset={true} data={ data.filter(res=>(res.name === props.name))[0] } />
    </>
  );
}
