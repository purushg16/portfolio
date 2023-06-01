import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo(props) {

    const data = JSON.parse(localStorage.getItem('data'));
    const elements = data.map(item => item.name);


    const [value, setValue] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');

    const handleInput = () =>{
        const element = data.filter(res=>(res.name === inputValue));
        if(!props.selection) delete element[0].summary;
        props.handleSelect(element[0]);
    }
  
    return (
        <>
        <Stack spacing={2} sx={{ paddingTop:0, flexDirection: 'row', gap: '20px', alignItems: 'baseline' }}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={elements}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} placeholder="Select Element" variant="standard"  />}
            />

         <button className='btn' onClick={handleInput}> { props.selection ? 'Select' : 'Compare'} </button>

        </Stack>
        </>
  );
}