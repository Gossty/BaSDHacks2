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
          <Link color="primary" href="https://screenrant.com/the-batman-deleted-scene-joker-arkham-escape/"><LightbulbIcon/> Proposal to increase Arkham Police funding</Link>
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
        I am a simple Gotham citizen that is afraid for my life. With an increase of police funding, we can have a safer city!
        </Typography>
        <Typography component="p" variant="h6">
        <Link color="primary" href="https://screenrant.com/the-batman-deleted-scene-joker-arkham-escape/"><LightbulbIcon/> Proposal to decrease Arkham Police funding</Link>
          </Typography>
        
        <Typography color="text.secondary" sx={{ flex: 1 }}>
        I am a simple person from Arkham that is afraid for my life. With a decreased police funding, I can escape from here!
        </Typography>  
        
        </Typography>
      </React.Fragment>
    );
  }