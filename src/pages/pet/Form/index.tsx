import {
  CardContent,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  TextField,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useState } from 'react'

export default function PetForm() {
  const [petName, setPetName] = useState('')
  return (
    <Container maxWidth={'md'}>
      <Grid container marginTop={3} spacing={2}>
        <Grid item xs={3}>
          Input de imagem
        </Grid>

        <Grid item xs={9}>
          <Paper elevation={0}>
            <CardContent>
              <form>
                <Grid container marginBottom={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <FormLabel>Nome</FormLabel>
                      <TextField
                        required
                        placeholder="Nome do pet"
                        size="small"
                        value={petName}
                      ></TextField>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container marginBottom={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <FormLabel>Cor</FormLabel>
                      <TextField
                        required
                        placeholder="Cor do pet"
                        size="small"
                        value={petName}
                      ></TextField>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container marginBottom={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <FormLabel>Data de nascimento</FormLabel>
                      <DatePicker
                        slotProps={{ textField: { size: 'small' } }}
                        value={petBirth}
                        onChange={(newValue) => setPetBirth(newValue)}
                      ></DatePicker>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container marginBottom={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <FormLabel>Sobre o pet</FormLabel>
                      <DatePicker
                        slotProps={{ textField: { size: 'small' } }}
                        value={petBirth}
                        onChange={(newValue) => setPetBirth(newValue)}
                      ></DatePicker>
                    </FormControl>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
