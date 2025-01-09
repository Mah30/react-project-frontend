import styles from './Sidebar.module.css';
import * as React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';//responsividade
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import LoupeIcon from '@mui/icons-material/Loupe';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Link } from 'react-router-dom';

//AnchorTemporaryDrawer

function Sidebar({state, setState, toggleDrawer}) {
  /* const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); */ //Responsividade (mudar isso)
  

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    
      <List>
        {[
          { text: 'Home', path: '/homepage', icon: <HomeIcon /> },
          { text: 'About', path: '/aboutpage', icon: <InfoIcon /> },
          { text: 'Courses', path: '/coursepage', icon: <SchoolIcon />  },
          { text: 'New', path: '/new', icon: <LoupeIcon />  },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider /> {/* Adiciona uma linha divisória entre as listas. */}

      <List>
        {[
          { text: 'Contact', path: '/talktous', icon: <MailIcon /> },
          { text: 'login', path: '/login', icon: <LoginIcon />},
          { text: 'register', path: '/register', icon: <PersonAddIcon /> },
          { text: 'Service', path: '/service', icon: <SettingsSuggestIcon /> },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}




export default Sidebar;