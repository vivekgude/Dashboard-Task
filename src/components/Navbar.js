import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BiCube } from 'react-icons/bi';
import { FiMessageCircle, FiPackage,FiPenTool } from 'react-icons/fi';
import {IoSettingsOutline} from 'react-icons/io5'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AppBarComponents from './AppBarComponents' ;
import Body from './body/Body'

const drawerWidth = 220;
export default function Navbar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarComponents/>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Dashboard','Product','Favourites','Messages','Order Lists','Product Stock',].map(text => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {(() => {
                    if (text === 'Dashboard') return <GridViewIcon />;
                    else if (text === 'Product') return <BiCube size={24}/>;
                    else if (text === 'Favourites') return <FavoriteBorderIcon />;
                    else if (text === 'Messages') return <FiMessageCircle size={24}/>;
                    else if (text === 'Messages') return <FiMessageCircle size={24}/>;
                    else if (text === 'Order Lists') return <FiPackage size={24}/>;
                    else return <Inventory2OutlinedIcon/>;
                  })()}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Settings', 'Themes', 'Helps'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                {(() => {
                    if (text === 'Settings') return <IoSettingsOutline size={24}/>;
                    else if (text === 'Themes') return <FiPenTool size={24}/>;
                    else return <HelpOutlineOutlinedIcon size={24}/>;
                  })()}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Body></Body>
      </Box>
    </Box>
  );
}
