import {
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import PetLogo from '../../../public/logo.png'
import {
  StyledAppBar,
  StyledAvatar,
  StyledBox,
  StyledPLogo,
  StyledToolbar,
} from './styles'
import { useEffect, useState } from 'react'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Button } from '../Button'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export function Header() {
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setAuth(true)
    }
  }, [])

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Container maxWidth={'md'}>
          <Grid container spacing={2} marginBottom={0}>
            <Grid item marginTop={'auto'} marginBottom={'auto'}>
              <img src={PetLogo} alt="Pet Logo" width={45} height={45} />
            </Grid>
            <Grid item marginTop={'auto'} marginBottom={'auto'}>
              <StyledPLogo color="primary">Bitzen Pet</StyledPLogo>
            </Grid>
            <Grid item>
              <StyledBox>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Inicio" {...a11yProps(0)} />
                </Tabs>
              </StyledBox>
            </Grid>
          </Grid>
        </Container>
        {auth && (
          <div>
            <Button
              size="small"
              variant="text"
              className="menuAvatarButton"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              endIcon={<KeyboardArrowDown />}
            >
              <StyledAvatar>M</StyledAvatar>
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}
      </StyledToolbar>
    </StyledAppBar>
  )
}
