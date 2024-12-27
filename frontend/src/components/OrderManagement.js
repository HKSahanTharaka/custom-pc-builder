import React from 'react';
import { Typography } from '@mui/material';

const OrderManagement = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Order Management
      </Typography>
      <Typography variant="body1">
        Here you can manage customer orders, view order details, and update order statuses.
      </Typography>
    </div>
  );
};

export default OrderManagement;