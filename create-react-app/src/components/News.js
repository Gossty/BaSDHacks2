import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import ArticleIcon from '@mui/icons-material/Article';

function preventDefault(event) {
    event.preventDefault();
  }
  
  export default function Demographics() {
    return (
      <React.Fragment>
        <Title>News</Title>
        
        <Typography>
        <Typography component="p" variant="h6">
        <ArticleIcon /> DAO Votes to Release Batman from Prison <Link color="primary" href="https://www.giantfreakinrobot.com/ent/johnny-depp-batman-vs-superman.html">
          View story
        </Link>
          </Typography>
          
        <Typography color="text.secondary" sx={{ flex: 1 }}>
        While you think batman is real and is protecting you, look at how batman actually doesn't care!
        </Typography>
        <Typography component="p" variant="h6">
          <ArticleIcon /> Another Tuesday – Another Arkham Runaway <Link color="primary" href="https://screenrant.com/the-batman-deleted-scene-joker-arkham-escape/">
          View story
            </Link>
          </Typography>
          
          <Typography color="text.secondary" sx={{ flex: 1 }}>
          Yes, it is Tuesday again and Joker has escaped from Arkham for the fourth consecutive time. Why does he keep doing that?
        </Typography>

          <Typography component="p" variant="h6">
          <ArticleIcon />Crime Rate Spikes <Link color="primary" href="https://batman.fandom.com/wiki/Passionate_Man_at_fundraising_party">
          View story
            </Link>
          </Typography>
          The drastic crime rate caused by Bruce Wayne's party indicates his direct relation with Batman.
        </Typography>
  
      </React.Fragment>
    );
  }