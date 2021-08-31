import React, { useState, useEffect } from 'react'
import { ContainerPainel, PainelTitulo } from './styled';
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import Cadastro from '../../components/Cadastro';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputLabel, Button } from '@material-ui/core';
import { getSingleUser, updateUser } from '../redux/actions';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));


const EditNotas = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    name: "",
    data: "",
    descricao: "",
    tipo: "",
    horario: ""
  });



  const [error, setError] = useState("");
  let {id} = useParams();
  const { user } = useSelector((state) => state.data);

  let history = useHistory();
  let dispatch = useDispatch();
  const { name, data, descricao, tipo, horario } = state;


  useEffect(() => {
    dispatch(getSingleUser(id))
  },[]);

  useEffect(() => {
    if(user) {
      setState({...user });
    }
  }, [user])


  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !data || !descricao || !tipo || !horario) {
      setError('Por favor preencha todos os campos');
     }else {
      dispatch(updateUser(state, id));
      history.push("/")
      setError("");
    }
  }




  return (
    <>
     
    <Cadastro />
      <ContainerPainel>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className='container-forms1'>
          <InputLabel className='label-name1'>Nome</InputLabel>
          <TextField
          value={name || "" } 
          type='text' 
          name='name' 
          onChange={handleInputChange}
          className={classes.margin}
          id="input-with-icon-textfield"
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BorderColorIcon className='alinha-icon' />
            </InputAdornment>
          ),
        }}
      />
      <InputLabel className='label-name2'>Tipo</InputLabel>
      <FormControl className={classes.formControl}>
        <Select 
         value={tipo || "" } 
         type='text' 
         name='tipo' 
         onChange={handleInputChange}
         native defaultValue="" 
         id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Selecione">
            <option value={'WhatsApp'}>WhatsApp</option>
            <option value={'Email'}>Email</option>
            <option value={'Linkedin'}>Linkedin</option>
            <option value={'Facebook'}>Facebook</option>
          </optgroup>
        </Select>
        <LocalPhoneIcon className='alinha-icon-phone '/>
      </FormControl>
      </div>

          <div className='container-forms2'>

          <InputLabel className='label-name3'>Descrição</InputLabel>
          <TextField
          value={descricao || "" } type='text' name='descricao' onChange={handleInputChange}
          className={classes.margin}
          id="input-with-icon-textfield"
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionOutlinedIcon className='alinha-icon' />
            </InputAdornment>
          ),
        }}
      />
      <InputLabel className='label-name4'>Data</InputLabel>
          <TextField
         value={data || "" } 
         type='date' 
         name='data' 
         onChange={handleInputChange}
         className={classes.margin}
         id="input-with-icon-textfield"
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CalendarTodayIcon className='alinha-icon' />
            </InputAdornment>
          ),
        }}
      />

<InputLabel className='label-name4'>Horário</InputLabel>
        <TextField
         value={horario || "" } 
         type='time' 
         name='horario' 
         onChange={handleInputChange}
         id="time"
         defaultValue="07:30"
         className={classes.textField}
         InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
          </div>
          <PainelTitulo>
        
          <Button
            variant="contained"
            className='btn-novo'
            type='submit'
          >Salvar
          </Button>
        </PainelTitulo>

          {error && <h5 style={{ color: 'red' }}>{error}</h5>}
         
        </form>
        
      </ContainerPainel>
    </>
  )
}


export default EditNotas;




