import * as React from 'react';

import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {Hiromi, Kenjaku, Kirara, Nagi, Toji, Utahime} from "./ImportImages"

const projectlink = {
  jobQuest:"https://jobquest.herokuapp.com/",
  covidTracker:"https://brandonjreyes.github.io/Event-COVID-Tracker/",
  passwordGenerator:"https://ocampoad.github.io/Password_Generator/",
}


const Projects = (props) => {
   
  return (
    <Card  align="center" sx={{ minWidth:275, maxWidth:500 ,mb: 1.5 }} className="hover">
      <div>
      <a href={props.links}>
        Project: {props.projectName}
        <br/>
        <img src={props.image} className="imageSize" alt={props.image}/>
        </a>
      </div>
    </Card >
  )
}




export default function Portfolio() {
  return (
    <div align="center">
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
        projectName="Password Generator"
        image={Toji}
        links={projectlink.passwordGenerator}
      />
    </div>

  );
}
