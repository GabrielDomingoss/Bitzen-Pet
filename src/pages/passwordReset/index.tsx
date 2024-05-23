import {
  CardContent,
  FormControl,
  FormLabel,
  Grid,
  TextField,
} from '@mui/material'
import { Button } from '../../components/Button'
import { StyledContainer, StyledPLogo, StyledPaper } from './styles'
import PetLogo from '../../../public/logo.png'
import { useCallback, useState } from 'react'
import api from '../../services/api'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
export function PasswordReset() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = useCallback(async () => {
    const data = { email }
    try {
      const response = await api.post('/forgot-password', data)
      console.log(response)
      navigate('/email_check', { state: { email } })
    } catch (err) {
      console.log(err)
    }
  }, [email, navigate])
  return (
    <StyledContainer>
      <StyledPaper elevation={0}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item marginTop={'auto'} marginBottom={'auto'}>
              <img src={PetLogo} alt="Pet Logo" width={45} height={45} />
            </Grid>
            <Grid item marginTop={'auto'} marginBottom={'auto'}>
              <StyledPLogo color="primary">Bitzen Pet</StyledPLogo>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Grid container marginBottom={2}>
            <Grid item xs>
              <Button
                variant="text"
                startIcon={<ArrowBack />}
                onClick={() => navigate('/login')}
              >
                Voltar
              </Button>
            </Grid>
          </Grid>

          <Grid container marginBottom={2}>
            <Grid item xs>
              <h3>Esqueceu sua senha ?</h3>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item marginTop={'auto'} marginBottom={'auto'}>
              <p>
                Vamos te ajudar nisso! Primeiro, digite seu e-mail cadastrado ao
                criar a sua conta
              </p>
            </Grid>
          </Grid>

          <form onSubmit={handleSubmit}>
            <Grid container marginBottom={3} marginTop={2}>
              <Grid item xs>
                <FormControl fullWidth variant="outlined">
                  <FormLabel>Email</FormLabel>
                  <TextField
                    placeholder="Seu email"
                    type="email"
                    required
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></TextField>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container marginBottom={5}>
              <Grid item xs>
                <Button variant="contained" fullWidth type="submit">
                  Próximo
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </StyledPaper>
    </StyledContainer>
  )
}
