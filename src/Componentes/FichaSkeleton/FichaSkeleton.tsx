import React from 'react';
import './FichaSkeleton.css';
import { Card, CardContent } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function FichaSkeleton (){
    return(
        <Card sx={{ minWidth: 278,
            backgroundColor: "#171717",
            marginTop:4,
            }}>
            <CardContent>
                <Stack spacing={1}>
                    <Skeleton variant="text"          
                    sx={{ 
                        bgcolor: 'grey.800',
                        marginBottom:2,
                        marginLeft:2,
                        marginTop:2,
                    }}  
                    width={300} 
                    height={60} />

                    <Skeleton className='Toxicidad' variant="text"          
                    sx={{ 
                        bgcolor: 'grey.800',
                        
                    }}  
                    width={150} 
                    height={60} />

                    <Skeleton className='Etiqueta' variant="text"          
                    sx={{ 
                        bgcolor: 'grey.800',
                        
                    }}  
                    width={100} 
                    height={60} />

                    <Skeleton variant="circular" className='ImagenPrincipal'
                    sx={{ 
                        bgcolor: 'grey.800',
                    
                    }}  width={194} height={194} />

                    <Skeleton className='Tabla' variant="rounded" sx={{ 
                        bgcolor: 'grey.800',
                        
                    }} width={325} height={110} />
                    <Skeleton className='Tabla' variant="rounded" sx={{ 
                        bgcolor: 'grey.800',
                        
                    }} width={325} height={200} />
                    <Skeleton className='Tabla' variant="rounded" sx={{ 
                        bgcolor: 'grey.800',
                        
                    }} width={325} height={200} />
                    <Skeleton className='Tabla' variant="rounded" sx={{ 
                        bgcolor: 'grey.800',
                        
                    }} width={325} height={200} />

                </Stack>
            </CardContent>  
        </Card>
    )
}

export default FichaSkeleton;