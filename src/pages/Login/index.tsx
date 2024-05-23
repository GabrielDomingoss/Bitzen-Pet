import {
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
} from '@mui/material'
import { Button } from '../../components/Button'
import { StyledContainer, StyledPLogo, StyledPaper } from './styles'
import PetLogo from '../../../public/logo.png'
import { useCallback, useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  const handleSubmit = useCallback(async () => {
    const data = { email, senha }
    try {
      const response = await api.post('/login', data)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }, [email, senha])
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
          <Grid container>
            <Grid item xs>
              <h3>Entrar na Plataforma</h3>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item marginTop={'auto'} marginBottom={'auto'}>
              <p>Não tem uma conta ?</p>
            </Grid>

            <Grid item>
              <Button variant="text" onClick={() => navigate('/register')}>
                Cadastre-se gratuitamente
              </Button>
            </Grid>
          </Grid>

          <form onSubmit={handleSubmit}>
            <Grid container marginBottom={2} marginTop={2}>
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

            <Grid container marginBottom={2}>
              <Grid item xs>
                <FormControl fullWidth variant="outlined">
                  <FormLabel>Senha</FormLabel>
                  <TextField
                    placeholder="Sua senha"
                    size="small"
                    required
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  ></TextField>
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              container
              display="flex"
              justify-content="space-between"
              marginBottom={2}
            >
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Manter conectado"
                />
              </Grid>

              <Grid
                item
                xs
                marginTop={'auto'}
                marginBottom={'auto'}
                display={'flex'}
                justifyContent={'end'}
              >
                <Button
                  variant="text"
                  onClick={() => navigate('/password_reset')}
                >
                  Esqueceu sua senha ?
                </Button>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs>
                <Button variant="contained" fullWidth type="submit">
                  Entrar na plataforma
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </StyledPaper>
    </StyledContainer>
  )
}
