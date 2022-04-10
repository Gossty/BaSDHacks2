import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

import PeopleIcon from '@mui/icons-material/People';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CancelIcon from '@mui/icons-material/Cancel';
import Erc20deploy from './erc20deploy'

function preventDefault(event) {
  event.preventDefault();
}

export default function Demographics() {
  return (
    <React.Fragment>
      <Title>Demographics</Title>
      <Typography>
      <Typography component="p" variant="h6">
      <PeopleIcon /> Total DAO members: 12,000,000
      </Typography>

      <Typography component="p" variant="h6">
      <CancelIcon /> In Arkhem: 7,000,000
      </Typography>
      
      <Typography component="p" variant="h6">
        <ManIcon /> Male 41%
      </Typography>

      <Typography component="p" variant="h6">
      <WomanIcon /> Female 42%
      </Typography>
      <Typography component="p" variant="h6">
      <ArrowRightIcon /> Other 17%
        </Typography>

        <Title>Deploy</Title>
        <Erc20deploy/>
      </Typography>
    </React.Fragment>
  );
}