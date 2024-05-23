// import { ButtonProps, Button as OriginalButton } from '@mui/material'
import { ButtonProps } from '@mui/material'
import { ButtonContainer } from './styles'
interface StyledButtonProps extends ButtonProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'text' | 'contained' | 'outlined'
}
export function Button({
  size = 'medium',
  variant = 'contained',
  children,
  ...props
}: StyledButtonProps) {
  return (
    <ButtonContainer size={size} variant={variant} {...props}>
      {children}
    </ButtonContainer>
  )
}
