import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
} from '@mui/material'
import { Button } from '../../../components/Button'
import { ArrowBack } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { useCallback, useState } from 'react'
import api from '../../../services/api'
import { StyledContainer } from './styles'

export default function UserForm() {
  const navigate = useNavigate()
  const [policyAgree, setPolicyAgree] = useState(false)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    document: '',
    phoneNumber: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChangeUserData = useCallback(
    (property: string, value: string) => {
      setUserData({ ...userData, [property]: value })
    },
    [userData],
  )

  const handleSubmit = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault()
      const data = {
        name: userData.name,
        email: userData.email,
        document: userData.document,
        phone_number: userData.phoneNumber,
        password: userData.password,
        password_confirmation: userData.passwordConfirmation,
      }

      try {
        const response = await api.post('/api/register', data)
        if (response.status === 200) {
          navigate('/pets')
        }
      } catch (err: any) {
        console.log(err?.response?.statusText)
      }
    },
    [userData, navigate],
  )

  return (
    <StyledContainer maxWidth={'md'}>
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
          <h2>Cadastre-se</h2>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item marginTop={'auto'} marginBottom={'auto'}>
          <p>Já possui uma conta?</p>
        </Grid>

        <Grid item>
          <Button variant="text" onClick={() => navigate('/login')}>
            Entrar na plataforma
          </Button>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit}>
        <Grid container marginBottom={2} marginTop={2}>
          <Grid item xs>
            <FormControl fullWidth variant="outlined">
              <FormLabel>Nome</FormLabel>
              <TextField
                required
                placeholder="Seu nome"
                size="small"
                value={userData.name}
                onChange={(e) => handleChangeUserData('name', e.target.value)}
              ></TextField>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container marginBottom={2}>
          <Grid item xs>
            <FormControl fullWidth variant="outlined">
              <FormLabel>E-mail</FormLabel>
              <TextField
                required
                placeholder="Insira o seu e-mail"
                size="small"
                value={userData.email}
                onChange={(e) => handleChangeUserData('email', e.target.value)}
              ></TextField>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container marginBottom={2} spacing={3}>
          <Grid item xs>
            <FormControl fullWidth variant="outlined">
              <FormLabel>CPF</FormLabel>
              <TextField
                required
                placeholder="Insira o seu CPF"
                size="small"
                value={userData.document}
                onChange={(e) =>
                  handleChangeUserData('document', e.target.value)
                }
              ></TextField>
            </FormControl>
          </Grid>

          <Grid item xs>
            <FormControl fullWidth variant="outlined">
              <FormLabel>Telefone</FormLabel>
              <TextField
                required
                placeholder="Insira o seu telefone"
                size="small"
                value={userData.phoneNumber}
                onChange={(e) =>
                  handleChangeUserData('phoneNumber', e.target.value)
                }
              ></TextField>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container marginBottom={1} spacing={3}>
          <Grid item xs>
            <FormControl fullWidth variant="outlined">
              <FormLabel>Senha</FormLabel>
              <TextField
                required
                placeholder="Crie uma senha"
                size="small"
                type="password"
                value={userData.password}
                onChange={(e) =>
                  handleChangeUserData('password', e.target.value)
                }
              ></TextField>
            </FormControl>
          </Grid>

          <Grid item xs>
            <FormControl fullWidth variant="outlined">
              <FormLabel>Confirmar senha</FormLabel>
              <TextField
                required
                placeholder="Repita a senha"
                size="small"
                type="password"
                value={userData.passwordConfirmation}
                onChange={(e) =>
                  handleChangeUserData('passwordConfirmation', e.target.value)
                }
              ></TextField>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container marginBottom={3}>
          <Grid item xs>
            <FormControlLabel
              control={
                <Checkbox
                  checked={policyAgree}
                  onChange={(e) => setPolicyAgree(e.target.checked)}
                />
              }
              label={
                <div>
                  <span>Li e concordo com os </span>
                  <Link to={'/terms'}>Termos de uso</Link>
                  <span> e a </span>
                  <Link to={'/privacy'}>Política de privacidade</Link>
                  <span> do sistema </span>
                </div>
              }
            />
          </Grid>
        </Grid>
        <Grid container marginBottom={2}>
          <Grid item xs>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={!policyAgree}
            >
              Criar conta
            </Button>
          </Grid>
        </Grid>
      </form>
    </StyledContainer>
  )
}
