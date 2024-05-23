import { Button, ButtonProps, styled } from '@mui/material'

interface StyledButtonProps extends ButtonProps {
  size: 'small' | 'medium' | 'large'
  variant: 'text' | 'contained' | 'outlined'
}

export const ButtonContainer = styled(Button)<StyledButtonProps>`
  text-transform: none;
  text-decoration: none;
  box-shadow: 'none';
  width: ${(props) => (props.variant === 'text' ? 'fit-content' : '10rem')};
  color: ${(props) =>
    props.variant === 'contained' ? '#fff' : props.theme.palette.primary.main};
  min-width: ${(props) => (props.fullWidth ? '100%' : 'inherit')};
  height: ${(props) => (props.variant === 'text' ? '1.5rem' : 'inherit')};

  &.menuAvatarButton {
    color: #a2a2a2 !important;
    :hover,
    :active {
      background-color: transparent;
      opacity: none;
    }
  }

  &.filterButton {
    width: fit-content !important;
    border-radius: 0;
  }
`
