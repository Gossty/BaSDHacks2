
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import ConnectButton from './walletconnect'
import TopWidget from './TopWidget';
import Demographics from './Demographics';
import News from './News';
import StreetIndex from "./StreetIndex";
import Votes from "./Votes";


const theme = createTheme({
  palette: {
    primary: {
      light: '#263238',
      main: '#01161E',
      dark: '#263238',
      contrastText: '#fff',
    },
    secondary: {
      light: '#A39BA8',
      main: 'yar#01161E',
      dark: '#A39BA8',
      contrastText: '#000',
    },
  },
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    paddingLeft: `15px`,
    paddingRight: `15px`,
    width: `100vw`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));




function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              SDHacks
            </Typography>
            <ConnectButton />
          </Toolbar>
        </AppBar>
        
        <Box
          component="main"
          sx={{
            backgroundColor: '#A7A5C6',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>


            <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                  }}
                >
                  <TopWidget />
                </Paper>
              </Grid>

              {/* Chart */}
              <Grid item xs={12} md={9} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>

              {/* Street Index */}
              <Grid item xs={12} md={3} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <StreetIndex />
                </Paper>
                
              </Grid>

              {/* News */}
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 480,
                  }}
                >
                  <News />
                </Paper>
                
              </Grid>

              <Grid item xs={12} md={5} lg={5}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Demographics />
                </Paper>
              </Grid>

              {/* Recent Deposits */}
              <Grid item xs={12} md={3} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 480,
                  }}
                >
                  <Votes />
                </Paper>
                
              </Grid>



            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}