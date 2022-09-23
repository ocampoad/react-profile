import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { Hiromi, Kenjaku, Kirara, Nagi, Toji, Utahime, Badge } from "./ImportImages"

const projectlink = {
  jobQuest: "https://jobquest.herokuapp.com/",
  covidTracker: "https://brandonjreyes.github.io/Event-COVID-Tracker/",
  passwordGenerator: "https://ocampoad.github.io/Password_Generator/",
  weatherDashboard: "https://ocampoad.github.io/Weather_Dashboard/",
  blogPostApp: "https://blogposts-adriane.herokuapp.com/",
  noteTaker: "https://adriane-notetaker.herokuapp.com/"
}

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '75%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 0.5),
  },
}));

const Projects = (props) => {

  return (
    <Grid container>
      <Grid item xs className="visibilityHiddenSibling">
      <a href={props.links} sx={{ color:"black", textDecoration:"none"}}>
        <Card align="center" sx={{ minWidth: 275, maxWidth: 500, mb: 1.5 }} className="hover">
          
            <br />
            <img src={props.image} className="imageSize" alt={props.image} />
          
          <Typography variant="h6" gutterBottom  >
            <br/>
          {props.projectName}
        </Typography>
        </Card >
        </a>
      </Grid>
      <Divider orientation="vertical" flexItem className="divider">
        <img src={Badge} alt="Badge" className="badgeSize" />
      </Divider>
      <Grid item xs className="visibilityHidden">
        <Typography variant="h5" gutterBottom >
          <br />
          {props.description}
        </Typography>
      </Grid>
    </Grid>
  );
}


export default function Portfolio() {
  return (
    <div align="center">
      <Typography variant="h4" gutterBottom>
        Portfolio
      </Typography>
      <Projects
        projectName="Job Quest"
        image={Utahime}
        links={projectlink.jobQuest}
        description=" Description here"
      />
      <Projects
        projectName="Covid Tracker"
        image={Kirara}
        links={projectlink.covidTracker}
        description=" Description here"
      />
      <Projects
        projectName="Weather Dashboard"
        image={Nagi}
        links={projectlink.passwordGenerator}
        description=" Description here"
      />
      <Projects
        projectName="Password Generator"
        image={Toji}
        links={projectlink.passwordGenerator}
        description=" Description here"
      />
      <Projects
        projectName="Note Taker"
        image={Hiromi}
        links={projectlink.noteTaker}
        description=" Description here"
      />
      <Projects
        projectName="Blog Post App"
        image={Kenjaku}
        links={projectlink.blogPostApp}
        description=" Description here"
      />
    </div>
  );
}

