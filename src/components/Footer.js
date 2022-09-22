import * as React from 'react';
import Box from '@mui/material/Box';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {


  return (
    <Box
  justifyContent={'center'}
  sx={{
    display: 'flex',
    alignItems: 'center',

    
  }}
>
 <a href='mailto:ocampo.adriane13@gmail.com'><MailOutlineSharpIcon sx={{ padding:"10px", color:"black"}}/></a>
 <a href='https://github.com/ocampoad' target="_blank"><GitHubIcon sx={{ padding:"10px", color:"black"}}/></a>
 <a href='linkedin.com/in/adriane-ocampo-59341b106' target="_blank"><LinkedInIcon sx={{ padding:"10px", color:"black"}}/></a>
</Box>
  );
}
