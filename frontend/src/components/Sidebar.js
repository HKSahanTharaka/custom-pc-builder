import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', background: '#2E3B55', height: '100vh', color: '#fff' }}>
      <List>
        <ListItem button component={Link} to="/" style={{ color: '#fff' }}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider style={{ background: '#fff' }} />
        <ListItem button component={Link} to="/products" style={{ color: '#fff' }}>
          <ListItemText primary="Product Management" />
        </ListItem>
        <ListItem button component={Link} to="/orders" style={{ color: '#fff' }}>
          <ListItemText primary="Order Management" />
        </ListItem>
        <ListItem button component={Link} to="/users" style={{ color: '#fff' }}>
          <ListItemText primary="User  Management" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;