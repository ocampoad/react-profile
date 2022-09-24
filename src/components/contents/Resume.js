import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


import resumeFile from "../../assets/resume/ocampo_adriane_resume.pdf"


export default function Resume() {
    return (
        <Box
        justifyContent={'center'}
        sx={{
          display: 'flex',
          alignItems: 'center',
      
          
        }}
      >
         <a href={resumeFile} download="OcampoAdrianeResume"><Button variant="outlined" sx={{ padding:"10px"}}>Download Resume</Button></a>
        </Box>
    )
}