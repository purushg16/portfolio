import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Menu(props) {
  const [open, setOpen] = React.useState(false);

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
                <a className='nav-link' href='.'> About </a>
                <a className='nav-link' href='.'> Work </a>
                <a className='nav-link' href='.'> Contact </a>
                <a className='nav-link' href='.'> Blog </a>
            </div>

        </div>
      </Dialog>
    </div>
  );
}
