import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Document, Page, pdfjs} from 'react-pdf'
import resumeFile from "../../assets/images/adriane-ocampo-resume.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return (
        <Box
        justifyContent={'center'}
        sx={{
          display: 'flex',
          alignItems: 'center',  
          flexDirection: 'column'
        }}
      >
        <Document 
        file={resumeFile} 
        onLoadSuccess={onDocumentLoadSuccess}
        >
        <Page pageNumber={2} />
        </Document>
        <a href={resumeFile} download="OcampoAdrianeResume"><Button variant="outlined" sx={{ padding:"10px"}}>Download Resume</Button></a>
        </Box>
    )
}