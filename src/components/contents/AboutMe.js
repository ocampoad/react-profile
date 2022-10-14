import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TogePicture from '../../assets/images/Screen_Shot_2021-12-20_at_10.19.19_AM_2744x.webp'

export default function AboutMe() {
    return (
        <Card sx={{ minWidth: 275, }}>
            <CardContent align="center"  >
                <Typography variant="h4" gutterBottom>
                    About Me
                </Typography>
                <div>
                    <img src={TogePicture} alt="Profile" width="20%" />
                </div>
                <Typography variant="h4" component="div">
                    Adriane Ocampo
                </Typography>
                <Typography variant="h5" component="div">
                    Fullstack Developer
                </Typography>
                <br />
                <Typography component="div">
                </Typography>
                <Typography component="body" width="50%">
                Fullstack Developer who enjoys the creative process and problem solving with the focus of creating comprehensive and discreet web applications. Transitioning from healthcare, attentive to detail, efficient time management and adaptable to newly attained coding skills in order to excel in any developer position. 
                </Typography>
            </CardContent>
        </Card>
    );
}
