import { css } from '@emotion/react'
import { theme } from '../../theme'
import { variant } from './Typography.propTypes'

export const typography = (variant: variant) =>
  css({
    fontFamily: 'Poppins, sans-serif',
    ...theme.typography[variant],
  })
