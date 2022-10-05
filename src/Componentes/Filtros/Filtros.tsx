import React from 'react';
import './Filtros.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { boletTipo } from '../../Utils/tiposDatos';
import  { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Filtros(props: any){
    const [DatosAPI,setDatosApi]=React.useState<boletTipo>();
    const [Loading, setLoading]=React.useState(true);
    const Navigate = useNavigate();
    const [Calidad, setCalidad] = React.useState("");
    const [OptionsCalidad, setOptionsCalidad] = React.useState<string[]>([])
    const [Nombre, setNombre] = React.useState("");
    const [Himeni, setHimeni] = React.useState("");
    const [OptionsHimeni, setOptionsHimeni] = React.useState<string[]>([])
    const [Pie, setPie] =React.useState("");
    const [OptionsPie, setOptionsPie] = React.useState<string[]>([])
    const [Comestible, setComestible] = React.useState("");
    const [Anillo, setAnillo] = React.useState<boolean | undefined>();
    const[Vulva, setVulva] = React.useState<boolean | undefined>();
    
   

    useEffect(function(){
        if (Loading === true){
            RecibirDatos();
        }
        
    }, [Loading])

    const CheckedVulva = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVulva(event.target.checked);
    }
    const CheckedAnillo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnillo(event.target.checked);
    }

    function EnviarFiltros(){
        // redirect a la path /home/?search=BUSQUEDA
        Navigate(`/Home?search=${Nombre}&calidad=${Calidad}&himeni=${Himeni}&pie=${Pie}&comestible=${Comestible}&anillo=${Anillo}&vulva=${Vulva}`)
        props.cerrar(false)
    }

    async function RecibirDatos (){
        try{
         const RespuestaApi = await fetch('https://62d4fcf2cd960e45d45ea776.mockapi.io/bolets');
         const RepsuestaApitxt = await RespuestaApi.text();
         const RespuestaApiParse = JSON.parse(RepsuestaApitxt);
         setDatosApi(RespuestaApiParse);
         // Calidad
         let TiposCalidad = new Set<string>(RespuestaApiParse.map(function(Bolet:boletTipo){
            return Bolet.calidad
         }))
         let ArrayTipoCalidad = [...TiposCalidad];
         setOptionsCalidad(ArrayTipoCalidad);
         //Himeni
         let TiposHimeni = new Set<string>(RespuestaApiParse.map(function(Bolet:boletTipo){
            return Bolet.himeni
         }))
         let ArrayTipoHimeni =[...TiposHimeni];
         setOptionsHimeni(ArrayTipoHimeni)
         //Pie
         let TiposPie = new Set<string>(RespuestaApiParse.map(function(Bolet:boletTipo){
            return Bolet.pie
         }))
         let ArrayTipoPie = [...TiposPie];
         setOptionsPie(ArrayTipoPie)
         
     


         console.log(RespuestaApiParse);
         setLoading(false);

        }catch(error){
            console.log(error)
            console.log("El usuario no tiene conexión a internet ni copia en cache de los datos")
        }
    }
   
    return(
        <div>
            <Typography variant='h4' align='center' sx={{
                marginTop:5,
                marginBottom:5,
                
              }} >Filtro Bolets</Typography>
             
              <TextField id="InputName" label="Nombre" color="success" sx={{
                marginLeft:4,
                marginRight:4
              }} variant="outlined"
                value={Nombre}
                onChange={((event:any) => setNombre(event.target.value))as any}
                 />
            <Box sx={{ minWidth: 120,
                        marginTop:2,
                        marginLeft:4,
                        marginRight:4 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Calidad</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Calidad}
                        label="Calidad"
                        color="success"
                        onChange={((event:any) => setCalidad(event.target.value))as any}
                        >
                        {
                        OptionsCalidad.map(function(UnTipoCalidad){
                            return <MenuItem value={UnTipoCalidad}>{UnTipoCalidad}</MenuItem>
                        }) 
                        }
                    </Select>
                </FormControl>
            </Box> 
            <Box sx={{ minWidth: 120,
                        marginTop:2,
                        marginLeft:4,
                        marginRight:4 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Himeni</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Himeni}
                        label="Himeni"
                        color="success"
                        onChange={((event:any) => setHimeni(event.target.value))as any}
                        >
                        {
                        OptionsHimeni.map(function(UnTipoHimeni){
                            return <MenuItem value={UnTipoHimeni}>{UnTipoHimeni}</MenuItem>
                        }) 
                        }
                    </Select>
                </FormControl>
            </Box>   
            <Box sx={{ minWidth: 120,
                        marginTop:2,
                        marginLeft:4,
                        marginRight:4 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pie</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Pie}
                        label="Pie"
                        color="success"
                        onChange={((event:any) => setPie(event.target.value))as any}
                        >
                        {
                        OptionsPie.map(function(UnTipoPie){
                            return <MenuItem value={UnTipoPie}>{UnTipoPie}</MenuItem>
                        }) 
                        }
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120,
                        marginTop:2,
                        marginLeft:4,
                        marginRight:4 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Comestible</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Comestible}
                        label="Comestible"
                        color="success"
                        onChange={((event:any) => setComestible(event.target.value))as any}
                        >
                       <MenuItem value="true">Sí</MenuItem>
                       <MenuItem value="false">No</MenuItem>

    
                    </Select>
                </FormControl>
            </Box>
            <FormGroup sx={{
                marginTop:4,
                marginLeft:9
            }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>No</Typography>
                    <FormControlLabel control={<Switch  onChange={CheckedAnillo}color="success" />} label="Anillo" />
                </Stack>  
                <Stack direction="row" spacing={1} alignItems="center" sx={{
                marginTop:2
                }}> 
                    <Typography>No</Typography>
                    <FormControlLabel  control={<Switch  onChange={CheckedVulva} color="success" />} label="Vulva" />
                </Stack>
            </FormGroup>
            <Button  onClick={EnviarFiltros} color="success" variant="contained" sx={{
                marginTop:4,
                marginLeft:12
            }}>Filtrar</Button>
        </div>
    )
}

export default Filtros;