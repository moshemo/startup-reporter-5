import { alpha as alphaColors, material } from './color-helpers'

export const alpha = { ...alphaColors }
export const grey = material.grey

export const primary = material.lightBlue
export const secondary = material.green
export const tertiary = material.purple
export const accent = material.orange

export const yellow = material.yellow

export const link = {
  base: material.blue.m500,
  active: material.grey.m900,
  focus: material.grey.m800,
  hover: material.grey.m700,
  visited: material.purple.m600,
}

export const info = material.blue.m400
export const success = material.green.m400
export const warning = material.yellow.m400
export const error = material.red.m400

export const code = material.red.m500

export const colors = {
  alpha,
  grey,

  primary,
  secondary,
  tertiary,
  accent,

  yellow,

  link,

  info,
  success,
  warning,
  error,

  code,
}
