import { Typography } from '@mui/material';
import React from 'react';
import { boletTipo } from '../../Utils/tiposDatos';
import Carta from '../../Componentes/Carta/Carta';
import './Home.css';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Home (){
    const [Bolets, setBolets] = React.useState<boletTipo[]>();
    const [Loading, setLoading] = React.useState(true);

    async function RecibirDatos (){
        try {
            const RespuestaApi = await fetch("https://62d4fcf2cd960e45d45ea776.mockapi.io/bolets/")
            const RespuestaApiTxt = await RespuestaApi.text();
            const RespuestaApiParse = JSON.parse(RespuestaApiTxt)
            localStorage.setItem("datos", RespuestaApiTxt);
            setBolets(RespuestaApiParse);
            setLoading(false);
        } catch (error){
            console.log(error);
            const datosGuardados = localStorage.getItem("datos");
            if (datosGuardados){
                const RespuestaApiParse = JSON.parse(datosGuardados);
                setBolets(RespuestaApiParse);
                setLoading(false);
            } else {
                console.log("El usuario no tiene conexión a internet ni copia en cache de los datos")
            }
        }
    }
    
    // se usa para que react ejecute la function 1 vez cuando el componente este listo
    React.useEffect(function(){
        RecibirDatos();
    }, [])

    return(
        <div id='Body'>
        <Typography variant='h3' id="Titulo" color="#18A2A8" >Nuestros Bolets</Typography>
        { !Loading ? 
            Bolets?.map(function(CadaBolet){
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
            }) 
        : (<Stack>
                
                
                <Skeleton className="spinner" animation="wave" variant="rectangular" width={355} height={300} />
            </Stack>
            ) }
        </div>
    )
}

export default Home;