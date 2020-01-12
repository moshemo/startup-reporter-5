import { alpha as alphaColors, material } from 'Elements'

export const colors = {
  alphaColors,
  material,
  grey: material.grey,

  primary: material.lightBlue,
  secondary: material.green,
  tertiary: material.purple,
  accent: material.orange,

  link: {
    base: material.blue.m500,
    active: material.grey.m900,
    focus: material.grey.m800,
    hover: material.grey.m700,
    visited: material.purple.m600,
  },

  info: material.blue.m400,
  success: material.green.m400,
  warning: material.yellow.m400,
  error: material.red.m400,

  code: material.red.m500,
}

export const alpha = { ...colors.alphaColors }
export const grey = { ...colors.grey }
export const gray = { ...colors.grey }

export const primary = { ...colors.primary }
export const secondary = { ...colors.secondary }
export const tertiary = { ...colors.tertiary }
export const accent = { ...colors.accent }

export const link = colors.link

export const info = colors.info
export const success = colors.success
export const warning = colors.warning
export const error = colors.error

export const code = colors.code
