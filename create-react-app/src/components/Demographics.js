import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

import PeopleIcon from '@mui/icons-material/People';
import AccountBallanceIcon from '@mui/icons-material/AccountBalance';
import WomanIcon from '@mui/icons-material/Woman';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Erc20deploy from './erc20deploy'

function preventDefault(event) {
  event.preventDefault();
}

export default function Demographics() {
  return (
    <React.Fragment>
      <Title>Gotham City</Title>
      <Typography>
      <Typography component="p" variant="h6">
      <LocationCityIcon /> Population: 12,105,654
      </Typography>
      
      <Typography component="p" variant="h6">
      <PeopleIcon /> DAO Members: 5,601,987
      </Typography>

      <Typography component="p" variant="h6">
        <CallMadeIcon /> Crime Rate Increase: 13%
      </Typography>

      <Typography component="p" variant="h6">
      <AccountBallanceIcon /> Debts & Liabailities: $9.6 Billion
      </Typography>

      <Typography component="p" variant="h6">
      <LocalHospitalIcon /> Arkham Asylum Fugitives: 213
      </Typography>

      <br>
      </br>
      <br>
      </br>
      
    
      <Title>Create New DAO</Title>
        <Erc20deploy/>
      </Typography>
    </React.Fragment>
  );
}