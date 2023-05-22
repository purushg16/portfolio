import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Menu(props) {
  const [open, setOpen] = React.useState(false);

  function href(props) {
    setOpen(false);
    window.location.hash = '';
    window.location.pathname = props;
  }

  function goHome(){  
    setOpen(false);
    window.location.href = window.location.origin; 
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} className='opt-btn'>
        <span uk-icon="icon: menu"></span>
      </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div id='menu-cont'>

            <button onClick={handleClose} className='send-btn close-btn'>
                <span uk-icon="icon: close"></span>
            </button>

            <div id='menu-link-cont'>
                <img id='logo-menu' onClick={goHome} style={{cursor:'pointer'}} src="https://img.icons8.com/color/50/000000/ghost--v1.png" alt="ghost--v1"/>            
                <a className='nav-link' onClick={()=>{ href('about') }}>    About   <span className='nav-span' uk-icon="icon:arrow-up"></span>  </a>
                <a className='nav-link' onClick={()=>{ href('work') }}>     Work    <span className='nav-span' uk-icon="icon:arrow-up"></span> </a>
                <a className='nav-link' onClick={()=>{ href('Contact') }}>  Contact <span className='nav-span' uk-icon="icon:arrow-up"></span></a>
                <a className='nav-link' onClick={()=>{ href('projects') }}> Blog    <span className='nav-span' uk-icon="icon:arrow-up"></span></a>
            </div>

        </div>
      </Dialog>
    </div>
  );
}
