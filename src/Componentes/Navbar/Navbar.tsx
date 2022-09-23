import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchBar from '@mkyy/mui-search-bar';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


function Navbar (){
    const [Busqueda, setBusqueda] = React.useState<undefined| string>("");
    const Navigate = useNavigate();
    const [DrawerOpen, setDrawerOpen] = React.useState(false)

    function ToggleDraw (NewState:boolean){
        setDrawerOpen(NewState)
    }
    
    function handleSearch(){
      // redirect a la path /home/?search=BUSQUEDA
      Navigate(`/Home?search=${Busqueda}`)
    }

   
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{
            backgroundColor: "#007639",

        }}position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={function(){
                ToggleDraw(true)
              }}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor ='left'
              open={DrawerOpen}
              onClose={function(){ToggleDraw(false)}}
            >
            
              <Typography variant='h4' align='center' sx={{
                marginTop:5,
                marginBottom:5,
                
              }} >Filtro Bolets</Typography>
              <TextField id="InputName" label="Nombre" color="success" sx={{
                marginLeft:4,
                marginRight:4
              }} variant="outlined" />
              
            </Drawer>
            <SearchBar 
              
                value={Busqueda}
                onChange={((event:any) => setBusqueda(event.target.value))as any}
                onSearch={handleSearch}
            />
           
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Navbar;