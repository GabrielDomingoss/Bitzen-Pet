import {
  CardContent,
  FormControl,
  FormLabel,
  Grid,
  TextField,
} from '@mui/material'
import { Button } from '../../../components/Button'
import { StyledContainer, StyledPLogo, StyledPaper } from './styles'
import PetLogo from '../../../../public/logo.png'
import { useCallback, useState } from 'react'
import api from '../../../services/api'
import { ArrowBack } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'
export function NewPassword() {
  const [senha, setSenha] = useState('')
  const [senhaConfirmacao, setSenhaConfirmacao] = useState('')
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleSubmit = useCallback(async () => {
    const { email, token } = state
    const data = { email, token, senha, senhaConfirmacao }
    try {
      const response = await api.post('/reset-password', data)
      console.log(response)
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }, [navigate, senha, senhaConfirmacao, state])
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
            <Grid container marginBottom={2} marginTop={2}>
              <Grid item xs>
                <FormControl fullWidth variant="outlined">
                  <FormLabel>Nova senha</FormLabel>
                  <TextField
                    placeholder="Crie uma nova senha"
                    type="password"
                    required
                    size="small"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  ></TextField>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container marginBottom={3}>
              <Grid item xs>
                <FormControl fullWidth variant="outlined">
                  <FormLabel>Confirmar nova senha</FormLabel>
                  <TextField
                    placeholder="Repita a nova senha"
                    type="password"
                    required
                    size="small"
                    value={senhaConfirmacao}
                    onChange={(e) => setSenhaConfirmacao(e.target.value)}
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
