import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function preventDefault(event) {
    event.preventDefault();
  }
  
  export default function Demographics() {
    return (
      <React.Fragment>
        <Title>Proposals</Title>
        <Typography>
        <Typography component="p" variant="h7">
            Number of Proposals: 1329
        </Typography>
        <Title>Recent Proposals</Title>
        <Typography component="p" variant="h6">
          <Link color="primary" href="https://screenrant.com/the-batman-deleted-scene-joker-arkham-escape/"><LightbulbIcon/> Increase Arkham Police funding</Link>
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
        I am a simple Gotham citizen that is afraid for my life. With an increase of police funding, we can have a safer city!
        </Typography>
        <Typography component="p" variant="h6">
        <Link color="primary" href="https://screenrant.com/the-batman-deleted-scene-joker-arkham-escape/"><LightbulbIcon/> Fix Gotham City's Pothole Problem</Link>
          </Typography>
        
        <Typography color="text.secondary" sx={{ flex: 1 }}>
        I'm a daily commuter who's tired of spilling coffee in his car due to all these potholes. We don't need a bigger baseball stadium! Let's fix these potholes now!
        </Typography>  
        
        </Typography>
      </React.Fragment>
    );
  }