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
      <Card align="center" sx={{ minWidth: 275, maxWidth: 500, mb: 1.5 }} className="hover">
          <div>
            <a href={props.links}>
              <br />
              <img src={props.image} className="imageSize" alt={props.image} />
            </a>
          </div>
        </Card >
      </Grid>
      <Divider orientation="vertical" flexItem>
        <img src={Badge} alt="Badge" className="badgeSize"/>
      </Divider>
      <Grid item xs className="visibilityHidden">
      <Typography variant="h5"  gutterBottom >
      <br/>
      <br/>
      {props.projectName}
        </Typography>
      </Grid>
    </Grid>
  );
}


export default function Portfolio() {
  return (
   <div align="center">
    <Typography variant="h5" gutterBottom>
      Portfolio
    </Typography>
      <Projects
        projectName="Job Quest"
        image={Utahime}
        links={projectlink.jobQuest}
      />
      <Projects
        projectName="Covid Tracker"
        image={Kirara}
        links={projectlink.covidTracker}
      />
        <Projects
        projectName="Weather Dashboard"
        image={Nagi}
        links={projectlink.passwordGenerator}
      />
      <Projects
        projectName="Password Generator"
        image={Toji}
        links={projectlink.passwordGenerator}
      />
      <Projects
        projectName="Note Taker"
        image={Hiromi}
        links={projectlink.noteTaker}
      />
      <Projects
        projectName="Blog Post App"
        image={Kenjaku}
        links={projectlink.blogPostApp}
      />
    </div>
  );
}

