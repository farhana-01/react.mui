import React from 'react'
import hero from '../../assetes/hero.png'
import {
 Box, Typography, Button 
} from '@mui/material';


function heroo() {
  return (
    <Box sx={{ padding: '50px', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'space-around' }}>
      
      <Box sx={{ paddingTop: '100px' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          Lessons and insights
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'green' }}>
          from 8 years
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '20px', marginBottom: '20px' }}>
          Where to grow your business as a photographer: site or social media?
        </Typography>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: 'green', color: 'white', textTransform: 'none', padding: '10px 20px' }}
        >
          Register
        </Button>
      </Box>
      <Box>
      <img src={hero} alt="hero" style={{ width: '100%', height: 'auto' }} /> 

       </Box>
    </Box>
  );
}

export default heroo;
