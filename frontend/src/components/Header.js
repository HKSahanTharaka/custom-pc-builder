import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ background: '#3F51B5' }}>
      <Toolbar>
        <Typography variant="h6">Admin Panel</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;