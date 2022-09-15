import React from 'react';
import './Carta.css';
import { Card, CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import { boletTipo } from '../../Utils/tiposDatos';

function Carta (props:boletTipo){

    return(
       <div>
        <Card sx={{ minWidth: 278,
        backgroundColor: "#171717",
        marginTop:4,
        }}>
        <CardContent>
            <Typography variant="h4" id="Nombre" color={"white"}>{props.name}</Typography>
            
            {props.etiquetas.map(function(CadaEtiqueta){
                return(
                    <Chip label={CadaEtiqueta} sx={{
                        backgroundColor:"#14D2DB",
                        marginLeft: 1,
                        marginTop:2,
                    }}/>
                )
            })}

            <CardMedia
            className='ImagenPrincipal'
            component="img"
            src={props.imageUrl}
            alt="Bolet"
            sx={{borderRadius:"50%",
           
            
         }}
        />
        </CardContent>  

        </Card>
       </div> 
    )
}

export default Carta;