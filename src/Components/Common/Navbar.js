import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Typography, Container, Box, Button, Menu, MenuItem } from '@mui/material';
import { BRANDNAME } from '../../Services/Utils';

const Navbar = () => {

  return (
    <Box component="nav" sx={{ position: 'static', backgroundColor: 'white' }}>
      <Container>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            {BRANDNAME}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button component={Link} to="/signin" sx={{ textTransform: 'none', marginRight: 2 }}>
              Signin
            </Button>
            <Button component={Link} to="/signup" sx={{ textTransform: 'none', marginRight: 2 }}>
              Signup
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;
