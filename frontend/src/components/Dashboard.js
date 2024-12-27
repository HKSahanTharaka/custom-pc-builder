import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Container>
        <Header />
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome to the Admin Dashboard! Here you can manage products, orders, and users.
        </Typography>
      </Container>
    </div>
  );
};

export default Dashboard;