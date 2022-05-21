import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
    whidth: 5.8rem;
    heigth: 4.5rem;

    svg {
      heigth: 4.5rem;
      pointer-events: none;
    }

    .text {
      display: none;
    }
  `}
  `
}
export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hidenOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hidenOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
