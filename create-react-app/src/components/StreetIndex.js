import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import ArticleIcon from '@mui/icons-material/Article';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import ThermostatIcon from '@mui/icons-material/Thermostat';

function preventDefault(event) {
    event.preventDefault();
  }
  
  export default function Demographics() {
    return (
      <React.Fragment>
        <Typography>
        <Title>Street Index</Title>
        
            
        <Typography component="p" variant="h5">
        <DoNotDisturbAltIcon/>Don't go outside!
        </Typography>
        
        <Typography color="text.secondary" sx={{ flex: 1 }}>
        Basing on the crime rate – we don't recommend to go outside.
            </Typography>
        
        <Title>Temperature</Title>
        <Typography component="p" variant="h5">
        <ThermostatIcon/> 12 °C
                
        </Typography>

        </Typography>
      </React.Fragment>
    );
  }