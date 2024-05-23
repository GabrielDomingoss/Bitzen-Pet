import { CardContent, FormControl, Grid, TextField } from '@mui/material'
import { Button } from '../../../components/Button'
import { StyledContainer, StyledPLogo, StyledPaper } from './styles'
import PetLogo from '../../../../public/logo.png'
import { useCallback, useState } from 'react'
import api from '../../../services/api'
import { ArrowBack } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'
export function EmailCheck() {
  const [tokenNumber1, setTokenNumber1] = useState('')
  const [tokenNumber2, setTokenNumber2] = useState('')
  const [tokenNumber3, setTokenNumber3] = useState('')
  const [tokenNumber4, setTokenNumber4] = useState('')
  const { state } = useLocation()
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault()
      const { email } = state
      const data = {
        token: tokenNumber1 + tokenNumber2 + tokenNumber3 + tokenNumber4,
        email,
      }
      try {
        const response = await api.post('/reset-password/token/validate', data)
        console.log(response)
        navigate('/new_password', { state: { email, token: data.token } })
      } catch (err) {
        console.log(err)
      }
    },
    [navigate, state, tokenNumber1, tokenNumber2, tokenNumber3, tokenNumber4],
  )
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
              <h3>Confira o seu email</h3>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item marginTop={'auto'} marginBottom={'auto'}>
              <p>
                Insira nos campos abaixo o código que enviamos para você no seu
                endereço de email.
              </p>
            </Grid>
          </Grid>

          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={2}
              display={'flex'}
              justifyContent={'center'}
              marginBottom={3}
              marginTop={2}
            >
              <Grid item xs={2}>
                <FormControl variant="outlined">
                  <TextField
                    required
                    size="medium"
                    value={tokenNumber1}
                    onChange={(e) => setTokenNumber1(e.target.value)}
                  ></TextField>
                </FormControl>
              </Grid>

              <Grid item xs={2}>
                <FormControl variant="outlined">
                  <TextField
                    required
                    size="medium"
                    value={tokenNumber2}
                    onChange={(e) => setTokenNumber2(e.target.value)}
                  ></TextField>
                </FormControl>
              </Grid>

              <Grid item xs={2}>
                <FormControl variant="outlined">
                  <TextField
                    required
                    size="medium"
                    value={tokenNumber3}
                    onChange={(e) => setTokenNumber3(e.target.value)}
                  ></TextField>
                </FormControl>
              </Grid>

              <Grid item xs={2}>
                <FormControl variant="outlined">
                  <TextField
                    required
                    size="medium"
                    value={tokenNumber4}
                    onChange={(e) => setTokenNumber4(e.target.value)}
                  ></TextField>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container marginBottom={2}>
              <Grid item xs>
                <Button variant="contained" fullWidth type="submit">
                  Próximo
                </Button>
              </Grid>
            </Grid>

            <Grid container display={'flex'} justifyContent={'center'}>
              <Grid item marginTop={'auto'} marginBottom={'auto'}>
                <p>Não recebeu o código?</p>
              </Grid>

              <Grid item>
                <Button variant="text"> Reenviar</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </StyledPaper>
    </StyledContainer>
  )
}
