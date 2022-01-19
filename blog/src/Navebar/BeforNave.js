import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link} from "react-router-dom";

import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';

const BeforNave = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>
          <Link to="/home" style={{ textDecoration: 'none',color: '#fff' }}>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none',color: '#fff' }}>
            <MenuItem>About</MenuItem>
          </Link>
          <Link to="/blog" style={{ textDecoration: 'none',color: '#fff' }}>
            <MenuItem>Blog</MenuItem>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none',color: '#fff' }}>
            <MenuItem>Contact</MenuItem>
          </Link>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default BeforNave;
