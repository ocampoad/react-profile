import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MakiPicture from '../../assets/images/Maki_wielding_Dragon-Bone.webp'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function AboutMe() {
    return (
        <Card sx={{ minWidth: 275, }}>
            <CardContent align="center"  >
                <Typography variant="h5" gutterBottom>
                    About Me
                </Typography>
                <div>
                    <img src={MakiPicture} alt="Profile" />
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
                <Typography component="body">
                    Be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    /bəˈnevələnt/
                    <br />
                    adjective
                </Typography>
                <Typography variant="body">
                    Well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    );
}
