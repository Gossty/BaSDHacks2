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
      <Typography component="p" variant="h4" textAlign="center" font-family= "Helvetica">
        ◥▅◤ Gotham City DAO ◥▅◤
      </Typography>
      <Typography color="black" variant="h6" textAlign="center">
      Holding Gotham's Local Government Accountable Through Leveraging the $GTHM Token
      </Typography>
    </React.Fragment>
  );
}