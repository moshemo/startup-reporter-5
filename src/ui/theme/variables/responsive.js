import { css } from 'styled-components'

export const breakpoints = [480, 768, 992, 1200, 1600]

breakpoints.xs = `${breakpoints[0]}px` // 480
breakpoints.sm = `${breakpoints[1]}px` // 768
breakpoints.md = `${breakpoints[2]}px` // 992
breakpoints.lg = `${breakpoints[3]}px` // 1200
breakpoints.xl = `${breakpoints[4]}px` // 1600

export const above = Object.keys(breakpoints).reduce(
  (mediaQuery, breakpoint) => {
    mediaQuery[breakpoint] = (...args) => css`
      @media screen and (min-width: ${breakpoints[breakpoint]}) {
        ${css(...args)}
      }
    `
    return mediaQuery
  },
  {}
)

export const bp = {
  xs: `(min-width: ${breakpoints[0]}px)`, // 480
  sm: `(min-width: ${breakpoints[1]}px)`, // 768
  md: `(min-width: ${breakpoints[2]}px)`, // 992
  lg: `(min-width: ${breakpoints[3]}px)`, // 1200
  xl: `(min-width: ${breakpoints[4]}px)`, // 1600
}

export const mq = {
  xs: `(min-width: ${bp.xs})`,
  sm: `(min-width: ${bp.sm})`,
  md: `(min-width: ${bp.md})`,
  lg: `(min-width: ${bp.lg})`,
  xl: `(min-width: ${bp.xl})`,
}

// export const above = Object.keys(bp).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${bp[label]}px) {
//       ${css(...args)}
//     }
//   `

//   return acc
// }, {})

// export const minXs = (...args) => css`
//   @media screen and (min-width: ${breakpoints.xs}px) {
//     ${css(...args)}
//   }
// `
