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
        <Title>Demographics</Title>
  
        <Typography component="p" variant="h6">
        <ArticleIcon /> Batman is wild <Link color="primary" href="https://www.giantfreakinrobot.com/ent/johnny-depp-batman-vs-superman.html">
          View story
        </Link>
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
        While you think batman is real and is protecting you, look through how batman actually doesn't care!
        </Typography>
        <Typography component="p" variant="h6">
          <ArticleIcon /> Another Tuesday – Another Arkhem Runaway <Link color="primary" href="https://www.giantfreakinrobot.com/ent/johnny-depp-batman-vs-superman.html">
          View story
        </Link>

        </Typography>
  
      </React.Fragment>
    );
  }