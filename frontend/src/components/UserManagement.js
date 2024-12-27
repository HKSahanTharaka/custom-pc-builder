import React from 'react';
import { Typography } from '@mui/material';

const UserManagement = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Typography variant="body1">
        Manage user accounts, view user details, and update user roles.
      </Typography>
    </div>
  );
};

export default UserManagement;