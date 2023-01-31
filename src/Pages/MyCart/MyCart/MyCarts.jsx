import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const MyCarts = () => {
  return (
    <div>
      <Paper
        sx={{
          boxShadow: 'none',
          alignItems: 'center',
          marginBottom: '40px',
          backgroundColor: 'inherit',
        }}
      >
        <hr />
      </Paper>
      <Paper
        sx={{
          display: 'flex',
          boxShadow: 'none',
          alignItems: 'center',
          justifyContent:"space-between",
          margin: '0px  60px',
          backgroundColor: 'inherit',
        }}
      >
        <Typography variant="p">My Cart</Typography>
        <Typography variant="p">3 Items</Typography>

        
      </Paper>

      <Paper
        sx={{
          boxShadow: 'none',
          alignItems: 'center',
          margin: '40px 55px',
          backgroundColor: 'inherit',
        }}
      >
      
        <hr />
      </Paper>
    <Box>
        
    </Box>
    </div>
  );
};

export default MyCarts;
