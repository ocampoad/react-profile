import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { Hiromi, Kenjaku, Kirara, Nagi, Toji, Utahime, Badge } from "./ImportImages"

const projects = {
  jobQuest: {
    projectlink: "https://jobquest.herokuapp.com/",
    description: "JobQuest description"
  },
  covidTracker: {
    projectlink:  "https://brandonjreyes.github.io/Event-COVID-Tracker/",
    description: "Covid Tracker description"
  },
  pawsitivePals:{
    projectlink: "https://pawsitive-pals.herokuapp.com/",
    description: "pawsitive pals description"
  },
  passwordGenerator: {
    projectlink: "https://ocampoad.github.io/Password_Generator/",
    description: "password generator description"
  },
  weatherDashboard: {
    projectlink: "https://ocampoad.github.io/Weather_Dashboard/",
    description: "weather dashboard description"
  },
  blogPostApp: {
    projectlink: "https://blogposts-adriane.herokuapp.com/",
    description: "Blog post description"
  },
  noteTaker: {
    projectlink: "https://adriane-notetaker.herokuapp.com/",
    description: "note taker description"
  }
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
          <br/>
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
        projectName="Pawsitive Pals"
        image={Toji}
        links={projects.pawsitivePals.projectlink}
        description={projects.pawsitivePals.description}
      />
      <Projects
        projectName="Job Quest"
        image={Utahime}
        links={projects.jobQuest.projectlink}
        description={projects.jobQuest.description}
      />
      <Projects
        projectName="Covid Tracker"
        image={Kirara}
        links={projects.covidTracker.projectlink}
        description={projects.covidTracker.description}
      />
      <Projects
        projectName="Weather Dashboard"
        image={Nagi}
        links={projects.weatherDashboard.projectlink}
        description={projects.weatherDashboard.description}
      />
      <Projects
        projectName="Note Taker"
        image={Hiromi}
        links={projects.noteTaker.projectlink}
        description={projects.noteTaker.description}
      />
      <Projects
        projectName="Blog Post App"
        image={Kenjaku}
        links={projects.blogPostApp.projectlink}
        description={projects.blogPostApp.description}
      />
    </div>
  );
}

