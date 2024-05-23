import {
  Grid,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
} from '@mui/material'
import { StyledContainerBody, StyledContainerTitle, StyledDiv } from './styles'
import { Button } from '../../../components/Button'
import { Filter } from '../../../components/Filter'
import { ControlPoint, Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../../services/api'
import { PetType } from '../../../models/pet'

export default function PetList() {
  const [pets, setPets] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    async function getPetList() {
      const params = {
        search: '',
      }
      try {
        const response = await api.get('/pets', { params })
        if (response.status === 200) {
          setPets(response.data)
        }
      } catch (err: any) {
        console.log(err?.response?.statusText)
      }
    }

    if (pets.length === 0) {
      getPetList()
    }
  }, [pets.length])
  return (
    <>
      <StyledDiv>
        <StyledContainerTitle>Seus Pets</StyledContainerTitle>
      </StyledDiv>

      <StyledContainerBody>
        <Grid
          container
          display={'flex'}
          justifyContent={'space-between'}
          marginTop={3}
        >
          <Grid item xs>
            <Grid container>
              <Grid item>
                <Filter
                  placeholder="Pesquise um pet"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                ></Filter>
              </Grid>
              <Grid item>
                <Button variant="contained" className="filterButton">
                  Buscar
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item display={'flex'} justifyContent={'end'}>
            <Button
              variant="contained"
              className="normalButton"
              startIcon={<ControlPoint />}
              onClick={() => navigate('/add_pet')}
            >
              Cadastrar pet
            </Button>
          </Grid>
        </Grid>

        <Grid container marginTop={5}>
          <Grid item xs>
            <Paper elevation={0}>
              <Toolbar sx={{ borderBottom: '1px solid lightGray' }}>
                Lista de pets
              </Toolbar>
              <TableContainer>
                <Table>
                  <TableHead sx={{ backgroundColor: '#fafafa' }}>
                    <TableCell>Pet</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Idade</TableCell>
                    <TableCell>Cor</TableCell>
                    <TableCell></TableCell>
                  </TableHead>
                  <TableBody>
                    {pets.map((pet: PetType) => (
                      <TableRow key={pet.id}>
                        <TableCell>{pet.image}</TableCell>
                        <TableCell>{pet.name}</TableCell>
                        <TableCell>{pet.age}</TableCell>
                        <TableCell>{pet.color}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </StyledContainerBody>
    </>
  )
}
