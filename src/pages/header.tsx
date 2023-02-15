import {
  Container,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Grid,
  Box,
  Typography,
  Stack,
  Link as MuiLink,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

import styled from '@mui/system'

const Header: FC = () => {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/signup">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;


