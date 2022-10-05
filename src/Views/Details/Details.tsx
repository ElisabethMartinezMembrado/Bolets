import React from 'react';
import {useParams} from 'react-router-dom';
import { boletTipo } from '../../Utils/tiposDatos';
import './Details.css';
import Ficha from '../../Componentes/Ficha/Ficha';
import FichaSkeleton from '../../Componentes/FichaSkeleton/FichaSkeleton';
import Navbar from '../../Componentes/Navbar/Navbar';


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
            if (id){
                localStorage.setItem(id, RepsuestaApitxt);
            }
            setDatosApi(RespuestaApiParse);
            setLoading(false);
            console.log(RespuestaApiParse)
            

        }catch (error){
            console.log(error)
            /** COMO EN ESTE CASO TENEMOS DATOS GLOBALES */
            const todosLosDatos = localStorage.getItem("datos");
            if (todosLosDatos){
                const todosLosDatosParse = JSON.parse(todosLosDatos);
                const elBolet = todosLosDatosParse?.find(function (CadaUnoDeLosBolets: boletTipo){
                    return (id === CadaUnoDeLosBolets.id)
                })
                setDatosApi(elBolet);
                setLoading(false);
                
            } else {
                console.log("El usuario no tiene conexión a internet ni copia en cache de los datos")
            }
            
            /* ASÍ LO HARÍAMOS SI NO TUVIESEMOS LOS DATOS GLOBALES
            if(id){
                const DatosGuardados = localStorage.getItem(id)
                if(DatosGuardados){
                    const RespuestaApiParse = JSON.parse(DatosGuardados)
                    setDatosApi(RespuestaApiParse);
                    setLoading(false);
                } else {
                    console.log("El usuario no tiene conexión a internet ni copia en cache de los datos")
                }
            }
            */
        }
    }

    React.useEffect(function(){
        RecibirDatos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return(
        <div className='Body'>
            <Navbar/>
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
            
            : <FichaSkeleton/>
            }
            
    
            
        </div>
    )
}
export default Details;