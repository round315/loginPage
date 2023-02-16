import { Link } from 'react-router-dom'
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
import {Login ,VpnKey , ThumbUpAlt } from '@mui/icons-material';
 
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { NestedDropdown, MenuItemData } from 'mui-nested-menu';
import { useNavigate } from 'react-router-dom';

import styled from '@mui/system'

const Header: FC = () => {

  const navigate = useNavigate();

  const menuItemsData: MenuItemData = {
    label: 'Action',
    items: [
      {
        label: 'Login',
        leftIcon: <Login />,
        callback: () => navigate('/login'),
      },
      {
        label: 'Signup',
        leftIcon: <VpnKey />,
        callback: () => navigate('/signup'),
      },
      {
        label: 'Other Actions',
        leftIcon: <ThumbUpAlt />,
        items: [
          {
            label: 'Option 1',
            rightIcon: <ThumbUpAlt />,
            callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
          },
          {
            label: 'Option 2',
            leftIcon: <ThumbUpAlt />,
            callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
            disabled: true,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
            Test
            </Link>
          </Typography>
            <NestedDropdown
              
              menuItemsData={menuItemsData}
              MenuProps={{elevation: 3}}
              ButtonProps={{variant: 'outlined'}}
              onClick={() => console.log('Clicked')}
            />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;


