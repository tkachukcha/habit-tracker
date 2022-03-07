import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';

import Today from '../pages/today';
import Login from '../layouts/login';
import Logout from '../layouts/logout';
import Habits from '../pages/habits';
import Profile from '../pages/profile';
import Sidebar from '../components/ui/sideBar';
import TopBar from '../components/ui/topBar';
import { useAuth } from '../hooks/useAuth';
import ProtectedRoute from '../components/common/protectedRoute';

const drawerWidth = 280;

const Main = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { currentUser } = useAuth();
  const topBarHeight = '4rem';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {currentUser && (
        <>
          <TopBar
            height={topBarHeight}
            drawerWidth={drawerWidth}
            onOpen={handleDrawerToggle}
          />
          <Sidebar
            drawerWidth={drawerWidth}
            topBarHeight={topBarHeight}
            mobileOpen={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: topBarHeight
        }}
      >
        <Switch>
          <ProtectedRoute path="/" exact component={Today} />
          <Route path="/logout" component={Logout} />
          <Route path="/profile" component={Profile} />
          <Route path="/habits/:habitID?/:edit?" component={Habits} />
          <Route path="/login/:type?" component={Login} />
        </Switch>
      </Box>
    </>
  );
};

export default Main;
