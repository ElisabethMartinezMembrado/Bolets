import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchBar from '@mkyy/mui-search-bar';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar (){
    const [Busqueda, setBusqueda] = React.useState<undefined| string>("");
    function handleSearch (Busqueda :string | undefined){
        console.log(`${Busqueda}`)
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
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <SearchBar 
              
                value={Busqueda}
                onChange={((event:any) => setBusqueda(event.target.value))as any}
                onSearch={() => handleSearch(Busqueda)}
            />
           
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Navbar;