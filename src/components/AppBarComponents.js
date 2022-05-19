import React from 'react';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
const drawerWidth = 220;
export default function AppBarComponents() {
    const [alignment, setAlignment] = React.useState('EN');
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <AppBar
            position="fixed"
            color='default'
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
            <Grid container direction="row" justifyContent="space-between" alignItems="center"  style={{padding:'10px'}}>
            <Grid >
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="EN" aria-label="EN">
                        <Typography>EN</Typography>
                    </ToggleButton>
                    <ToggleButton value="ID" aria-label="ID">
                        <Typography>ID</Typography>
                    </ToggleButton>
                    <Typography > English </Typography>
                </ToggleButtonGroup>
                </Grid>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Search or type keywords" variant="outlined" />
                </Box>
            </Grid>
        </AppBar>


    )
}
