import React from 'react';
import './Ficha.css';
import { Card, CardContent, Typography } from '@mui/material';
import { boletTipo } from '../../Utils/tiposDatos';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DangerousIcon from '@mui/icons-material/Dangerous';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Ficha (props:boletTipo){
   

    return(
        
            <Card sx={{ minWidth: 278,
                backgroundColor: "#171717",
                marginTop:4,
                }}>
                    <CardContent>
                <Typography variant="h3"
                    sx={{
                        paddingTop:2,
                        marginBottom:2,
                    }} 
                    id="Nombre" 
                    color={"white"}>
                        {props.name}
                </Typography>
                {props.comestible ===true ? 
                    <Typography 
                    
                        variant="h4"
                        sx={{
                            color:"green"
                        }} 
                    
                    >
                        <TaskAltIcon fontSize='large'/>Comestible
                    </Typography>
                    :   <Typography variant="h4"
                            sx={{
                                color:"red"
                            }} 
                        >
                            <DangerousIcon fontSize='large'/>Tóxico
                        </Typography>
                }
                
                {props.etiquetas?.map(function(CadaEtiqueta){
                    return(
                        <Chip key={CadaEtiqueta} 
                        label={CadaEtiqueta} 
                        sx={{
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
                <TableContainer component={Paper}>
                    <Table sx={{ minWhidth: 650 }} >
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Himeni</TableCell>
                                <TableCell align="right">Pie</TableCell>
                                <TableCell align="right">Vulva</TableCell>
                                <TableCell align="right">Anillo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableCell align='right'>{props.himeni}</TableCell>
                            <TableCell align='right'>{props.pie}</TableCell>
                            <TableCell align='right'>{props.vulva}</TableCell>
                            <TableCell align='right'>{props.anillo}</TableCell>
                        </TableBody>
                    </Table>

                </TableContainer>
                
                <Typography 
                    variant="h6" 
                    sx={{
                        marginTop:4,
                    }} 
                    color={"white"}>Descripción: {props.description}
                </Typography>

                <Typography 
                    variant="h6" 
                    sx={{
                        marginTop:4,

                    }} 
                    color={"white"}>Recomendación: {props.recomendaciones}</Typography>
                <Typography 
                    variant="h6"
                    sx={{
                        marginTop:4,
                        marginBottom:4,
                    }} 
                    color={"white"}>Temporada: {props.temporada}</Typography>
                
                {props.altImagenes?.map(function(CadaImagen){
                    return(
                        <CardMedia
                            key={CadaImagen}
                            component="img"
                            src={CadaImagen}
                            alt={props.name}
                            sx={{
                                marginBottom:2,
            
                            }} 
                        />
                    )
                })}
            
            </CardContent>  
            </Card>
       
    )
    
}
export default Ficha;