import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { boletTipo } from '../../Utils/tiposDatos';
import Carta from '../../Componentes/Carta/Carta';
import './Home.css';
import CartaLoading from '../../Componentes/CartaLoading/CartaLoading';
import Stack from '@mui/material/Stack';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../Componentes/Navbar/Navbar';

    function Home() {
        const [BoletsFiltro, setBoletsFiltro] = React.useState<boletTipo[]>();
        const [Bolets, setBolets] = React.useState<boletTipo[]>();
        const [Loading, setLoading] = React.useState(true);
        const [searchParams, setSearchParams]= useSearchParams();

        useEffect(function(){
            setBoletsFiltro(Bolets);
        }, [Bolets])
        
        useEffect(function(){
            const name = searchParams.get("name");
            const comestible = searchParams.get("comestible");
            const calidad = searchParams.get("calidad");
            const himeni = searchParams.get("himeni");
            const anillo = searchParams.get("anillo");
            const pie = searchParams.get("pie");
            const vulva = searchParams.get("vulva");
            const search = searchParams.get("search")

            function eliminarDiacriticos(texto:string) {
                return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            }
            
            function Normaliza(texto:string) {
                //.trim() elimina los espacios de alante y atras.
                // toLoweCase() iguala todo el texto en minusculas.
                const TextoMinusculas = texto.toLowerCase().trim();
                const TextNormalizado = eliminarDiacriticos(TextoMinusculas);
                return TextNormalizado;
            }            

            // 1. Crear una variable de resultados
            let resultados;
            // 2. Por defecto, los resultados serán todos los bolets
            resultados = Bolets;
            // 3. Filtro por name
            if (name !== null){
                resultados = resultados?.filter(function(CadaBolet: boletTipo){
                    const nameNormalizado = Normaliza(name);
                    if(CadaBolet.name){
                        const BoletNameNormalizado = Normaliza(CadaBolet.name)
                        return BoletNameNormalizado.includes(nameNormalizado)
                    }
                })
            }
            // 4. Filtro por comestible
           if (comestible !== null){
                resultados = resultados?.filter(function(CadaBolet: boletTipo){
                   return comestible === CadaBolet.comestible?.toString()
                })
            }
            //5. Filtro por calidad
            if(calidad !== null){
                 resultados = resultados?.filter(function(CadaBolet:boletTipo){
                        const CalidadNormalizado = Normaliza(calidad);
                    if(CadaBolet.calidad){
                        const BoletCalidadNormalizado = Normaliza(CadaBolet.calidad)
                        return CalidadNormalizado === BoletCalidadNormalizado
                    }
                })
            }
            if(himeni !== null){
                resultados = resultados?.filter(function(CadaBolet:boletTipo){
                    return himeni === CadaBolet.himeni;
                })
            }
            if(anillo !== null){
                resultados =resultados?.filter(function(CadaBolet:boletTipo){
                    return anillo === CadaBolet.anillo?.toString()
                })
            }
            if(pie !== null){
                resultados =resultados?.filter(function(CadaBolet:boletTipo){
                    return pie === CadaBolet.pie;
                })
            }
            if(vulva !== null){
                resultados = resultados?.filter(function(CadaBolet:boletTipo){
                    return vulva === CadaBolet.vulva?.toString()
                })
            }
            // 5. filtros por multiples campos
            if(search !== null){
                const searchNormalizado = Normaliza(search)
                resultados = resultados?.filter(function(CadaBolet:boletTipo){
                    // Por descripcion
                    let BoletDescripcionNormalizada;
                    if(CadaBolet.description){
                        BoletDescripcionNormalizada = Normaliza(CadaBolet.description)
                    }
                    // Por name
                    let BoletNameNormalizado;
                    if(CadaBolet.name){
                        BoletNameNormalizado = Normaliza(CadaBolet.name)
                    }
                    // Por recomendación
                    let BoletRecomendacionNormalizado;
                    if(CadaBolet.recomendaciones){
                        BoletRecomendacionNormalizado = Normaliza (CadaBolet.recomendaciones)
                    }
                    // Por temporada
                    let BoletTemporadaNormalizado;
                    if(CadaBolet.temporada){
                        BoletTemporadaNormalizado = Normaliza (CadaBolet.temporada)
                    }
                    return BoletDescripcionNormalizada?.includes(searchNormalizado) || BoletNameNormalizado?.includes(searchNormalizado) || BoletRecomendacionNormalizado?.includes(searchNormalizado) || BoletTemporadaNormalizado?.includes(searchNormalizado) 
                })
            } 
            // 6. Guardo los resultados en el estado del componente
            setBoletsFiltro(resultados)
            
        }, [Bolets, searchParams])

        async function RecibirDatos() {
            try {
                const RespuestaApi = await fetch("https://62d4fcf2cd960e45d45ea776.mockapi.io/bolets/")
                const RespuestaApiTxt = await RespuestaApi.text();
                const RespuestaApiParse = JSON.parse(RespuestaApiTxt)
                localStorage.setItem("datos", RespuestaApiTxt);
                setBolets(RespuestaApiParse);
                setLoading(false);
            } catch (error) {
                console.log(error);
                const datosGuardados = localStorage.getItem("datos");
                if (datosGuardados) {
                    const RespuestaApiParse = JSON.parse(datosGuardados);
                    setBolets(RespuestaApiParse);
                    setLoading(false);
                } else {
                    console.log("El usuario no tiene conexión a internet ni copia en cache de los datos")
                }
            }
        }

        // se usa para que react ejecute la function 1 vez cuando el componente este listo
        React.useEffect(function () {
            RecibirDatos();
        }, [])

        return (
            <div id='Body'>
                <Navbar/>

                <Typography variant='h3' id="Titulo" color="#18A2A8" >Nuestros Bolets</Typography>

                {!Loading ?

                BoletsFiltro?.map(function (CadaBolet) {
                        return (
                            <Carta
                                key={CadaBolet.id}
                                createdAt={CadaBolet.createdAt}
                                name={CadaBolet.name}
                                imageUrl={CadaBolet.imageUrl}
                                description={CadaBolet.description}
                                comestible={CadaBolet.comestible}
                                recomendaciones={CadaBolet.recomendaciones}
                                calidad={CadaBolet.calidad}
                                temporada={CadaBolet.temporada}
                                etiquetas={CadaBolet.etiquetas}
                                altImagenes={CadaBolet.altImagenes}
                                himeni={CadaBolet.himeni}
                                anillo={CadaBolet.anillo}
                                pie={CadaBolet.pie}
                                vulva={CadaBolet.vulva}
                                id={CadaBolet.id}
                            />
                        )
                    })
                    : (<Stack>

                        <CartaLoading />
                        <CartaLoading />


                    </Stack>
                    )}
            </div>
        )
    }

export default Home;