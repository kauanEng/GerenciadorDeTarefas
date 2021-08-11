import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/actions';

import PainelTexto from '../../components/PainelTexto';
import PainelNumero from '../../components/PainelNumero';
import PainelTarefasTitle from '../../components/PainelTarefasTitle';
import { ContainerPage } from './styled';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';



const StyledTableCell = withStyles((theme) => ({
  head: {
    color: '#757575',
    fontFamily: 'Fira Sans',
    fontSize: 14,
    fontWeight: 'bold',

  },
  body: {
    fontSize: 14,
    fontFamily: 'Fira Sans',
    fontWeight: 'normal',
    borderBottom: 'none',
    color: '#000000',

  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      boxShadow: 'none',
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    marginTop: 34,
    maxWidth: 970,
    marginLeft: 80,
    borderBottom: 'none',
    fontFamily: 'Fira Sans',
    fontSize: 20,
    boxShadow: 'none',
  },

});



const Page = (props) => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const classes = useStyles();


  let history = useHistory();
  let dispatch = useDispatch();

  const { users } = useSelector(state => state.data)
  useEffect(() => {
    dispatch(loadUsers())
  }, [])



  const handleDelete = (id) => {
    if(window.confirm("Você tem certeza que deseja excluir esta tarefa?"))
    dispatch(deleteUser(id))
  }



  return (

    <ContainerPage>
      <PainelTexto />
      <PainelNumero />
      <div className='alinhamento'>
        <PainelTarefasTitle />
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead  >
            <TableRow >
              <StyledTableCell align="left">ID</StyledTableCell>
              {/* <StyledTableCell align="center">FINALIZADO?</StyledTableCell> */}
              <StyledTableCell align="center">TIPO</StyledTableCell>
              <StyledTableCell align="center">NOME</StyledTableCell>
              <StyledTableCell align="center">DESCRIÇÃO</StyledTableCell>
              <StyledTableCell align="center">DATA</StyledTableCell>
              <StyledTableCell align="center">HORÁRIO</StyledTableCell>
              <StyledTableCell align="center">AÇÃO</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody >

            {users && users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row" >
                  {user.id}#
                </StyledTableCell>

               
                <StyledTableCell align="center">{user.tipo}</StyledTableCell>
                <StyledTableCell align="center">{user.name}</StyledTableCell>
                <StyledTableCell align="center">{user.descricao}</StyledTableCell>
                <StyledTableCell align="center">{user.data}</StyledTableCell>
                <StyledTableCell align="center">{user.horario}</StyledTableCell>
                <StyledTableCell align="center">

                 
                  <Button >
                    <IconButton aria-label="delete">
                      <DeleteIcon 
                      className='btn-delete'
                        color='secondary'
                        onClick={() => handleDelete(user.id)}
                      />
                    </IconButton>
                  </Button>
                  <Button >
                    <IconButton  aria-label="Editar" >
                      <EditIcon
                      className='btn-editar'
                        color='primary'
                        onClick={() => history.push(`./EditNotas/${user.id}`)}
                      />
                    </IconButton>
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </ContainerPage>
  );
}

export default Page;