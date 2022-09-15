import React from 'react';
import './CartaLoading.css';
import { Card, CardContent } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


function CartaLoading (){
    return(

        <div>
        <Card sx={{ minWidth: 278,
        backgroundColor: "#171717",
        marginTop:4,
        }}>
        <CardContent>
            <Skeleton 
                animation="wave"         
                sx={{ 
                    bgcolor: 'grey.800',
                    marginBottom:2,
                    marginLeft:2,
                }}  
                width={300} 
                height={40}
            />
            
            <Skeleton 
                animation="wave"   
                sx={{ 
                    bgcolor: 'grey.800',
                    marginLeft:8,
                    marginBottom:2,
                }} 
                color="yellow" 
                width={200} 
                height={40}
            />
        
            <Skeleton 
            animation="wave" 
            variant='circular' 
            sx={{ 
                bgcolor: 'grey.800',
                marginLeft:8,
            }}   
            width={194} 
            height={194}/>
        
        
        </CardContent>  

        </Card>
       </div> 
    )
}
export default CartaLoading;