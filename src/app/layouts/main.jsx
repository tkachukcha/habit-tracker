import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Today from '../pages/today';
import Login from '../pages/login';
import Habits from '../pages/habits';
import Profile from '../pages/profile';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../components/ui/sideBar';

const drawerWidth = 280;

function Main() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const topBarHeight = '4rem';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          height: topBarHeight,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` }
        }}
      >
        <Toolbar sx={{ height: topBarHeight, p: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Habit Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar
        drawerWidth={drawerWidth}
        topBarHeight={topBarHeight}
        mobileOpen={mobileOpen}
        onClose={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: topBarHeight
        }}
      >
        <Switch>
          <Route path="/login/:type?" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/habits/:habitID?/:edit?" component={Habits} />
          <Route path="/" exact component={Today} />
        </Switch>
      </Box>
    </>
  );
}

export default Main;
