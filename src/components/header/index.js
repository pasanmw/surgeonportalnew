import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ReplayIcon from '@mui/icons-material/Replay';
 
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SettingsIcon from '@mui/icons-material/Settings';
//import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static"  >
          <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img width="80px" src="https://www.dayhospitalsaustralia.net.au/wp-content/uploads/2016/11/LOGO-Medical-Wizard.png" /> Hospital EMR
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit"><ReplayIcon fontSize="large"/></Button> 
            <Button color="inherit"><HomeIcon fontSize="large"/></Button> 
            <Button color="inherit"><ShowChartIcon fontSize="large"/></Button> 
            <Button color="inherit"><SettingsIcon fontSize="large"/></Button> 

          
            </Typography> 
            <Typography variant="h6" component="div" >
            Logged in user <Button color="inherit"><AccountBoxIcon fontSize="large"/></Button> 
            </Typography>
      
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header
