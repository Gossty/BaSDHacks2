import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function TopWidget() {
  return (
    <React.Fragment>
      <Title>Welcome to Gotham city!</Title>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      People who live in the night are acquainted with all kinds of quiet
      </Typography>
    </React.Fragment>
  );
}