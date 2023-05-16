import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageLi() {
  return (
    <Box sx={{ height: 450, overflowY: 'hidden' }} id='scrolly'>
      <ImageList variant="masonry" cols={2} gap={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBjYXJ0b29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'minions',
  },
  {
    img: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjBjYXJ0b29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'eggs',
  },
  {
    img: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBjYXJ0b29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'aaaah',
  },
  {
    img: 'https://images.unsplash.com/photo-1633294261565-04234dc78da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBjYXJ0b29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'karma',
  },
  {
    img: 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8M2QlMjBjYXJ0b29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'heaven',
  },
  {
    img: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fDNkJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'zoombie',
  },
  {
    img: 'https://images.unsplash.com/photo-1633977264259-b3517c187e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fDNkJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'reb-brain',
  },
  {
    img: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fDNkJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'big-eyes',
  },
  {
    img: 'https://images.unsplash.com/photo-1628842456883-f8d529168be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fDNkJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'eye-in-the-hole',
  },
  {
    img: 'https://images.unsplash.com/photo-1633188985850-41c3c2ba9c2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fDNkJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'atom',
  },
  {
    img: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fDNkJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'wide-penguin',
  },
  {
    img: 'https://images.unsplash.com/photo-1628702774354-f09e4a167a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHwzZCUyMGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Tea table',
  }, 
  {
    img: 'https://images.unsplash.com/photo-1666720083840-960982b14da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHwzZCUyMGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Hallowen',
  },
];
