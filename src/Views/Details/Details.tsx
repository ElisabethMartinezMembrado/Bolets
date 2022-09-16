import { Typography } from '@mui/material';
import React from 'react';
import {useParams} from 'react-router-dom';
import { boletTipo } from '../../Utils/tiposDatos';
import './Details.css';
import Ficha from '../../Componentes/Ficha/Ficha';

function Details (){

    const {id} = useParams();
    const [DatosAPI,setDatosApi]=React.useState<boletTipo>();
    const [Loading, setLoading]=React.useState(true);

    // Funcion que se baje los datos de la API
    // y que lo guarde en el estado del componente
    async function RecibirDatos() {
        try{
            console.log(id)
            const RespuestaApi = await fetch(`https://62d4fcf2cd960e45d45ea776.mockapi.io/bolets/${id}`);
            const RepsuestaApitxt = await RespuestaApi.text();
            const RespuestaApiParse = JSON.parse(RepsuestaApitxt);
            setDatosApi(RespuestaApiParse);
            setLoading(false);
            console.log(RespuestaApiParse)

        }catch (error){
            console.log(error)
        }
        
    }

    React.useEffect(function(){
        RecibirDatos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return(
        <div id='Body'>
            {!Loading ? 
                <Ficha
                    key={id}
                    createdAt={DatosAPI?.createdAt} 
                    name = {DatosAPI?.name}
                    imageUrl = {DatosAPI?.imageUrl}
                    description = {DatosAPI?.description}
                    comestible = {DatosAPI?.comestible}
                    recomendaciones = {DatosAPI?.recomendaciones}
                    calidad = {DatosAPI?.calidad}
                    temporada = {DatosAPI?.temporada}
                    etiquetas = {DatosAPI?.etiquetas}
                    altImagenes = {DatosAPI?.altImagenes}
                    himeni = {DatosAPI?.himeni}
                    anillo = {DatosAPI?.anillo}
                    pie = {DatosAPI?.pie}
                    vulva = {DatosAPI?.vulva}
                    id = {DatosAPI?.id}
                />
            
            : <p>Aún no hay datos</p>
            }
            
    
            <Typography id="Titulo" >Esta es la vista de details</Typography>
        </div>
    )
}
export default Details;