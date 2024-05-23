import { AppBar, Avatar, Box, Toolbar, styled } from '@mui/material'

export const StyledPLogo = styled('p')`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: 500;
  font-size: 1rem !important;
`
export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
`

export const StyledToolbar = styled(Toolbar)`
  background-color: white;
`

export const StyledAvatar = styled(Avatar)`
  background-color: #e6e6e6;
  color: #a2a2a2;
`

export const StyledBox = styled(Box)`
  border-bottom: 1;
  border-color: 'divider';
  .MuiTab-root {
    text-transform: none !important;
  }
`
