import { Typography } from '@mui/material';
import React from 'react';
import { boletTipo } from '../../Utils/tiposDatos';
import Carta from '../../Componentes/Carta/Carta';
import './Home.css';

function Home (){
    const [Bolets, setBolets] = React.useState<boletTipo[]>();

    async function RecibirDatos (){
        const RespuestaApi = await fetch("https://62d4fcf2cd960e45d45ea776.mockapi.io/bolets/")
        const RespuestaApiTxt = await RespuestaApi.text();
        const RespuestaApiParse = JSON.parse(RespuestaApiTxt)
        setBolets(RespuestaApiParse);
    }
    
    // se usa para que react ejecute la function 1 vez cuando el componente este listo
    React.useEffect(function(){
        RecibirDatos();
    }, [])

    return(
        <div id='Body'>
        <Typography variant='h3' id="Titulo" color="#18A2A8" >Nuestros Bulets</Typography>
        {Bolets?.map(function(CadaBolet){
            return(
                <Carta 
                    key={CadaBolet.id} 
                    createdAt={CadaBolet.createdAt} 
                    name = {CadaBolet.name}
                    imageUrl = {CadaBolet.imageUrl}
                    description = {CadaBolet.description}
                    comestible = {CadaBolet.comestible}
                    recomendaciones = {CadaBolet.recomendaciones}
                    calidad = {CadaBolet.calidad}
                    temporada = {CadaBolet.temporada}
                    etiquetas = {CadaBolet.etiquetas}
                    altImagenes = {CadaBolet.altImagenes}
                    himeni = {CadaBolet.himeni}
                    anillo = {CadaBolet.anillo}
                    pie = {CadaBolet.pie}
                    vulva = {CadaBolet.vulva}
                    id = {CadaBolet.id}
                />
            )
        })}
        </div>
    )
}

export default Home;