import { materialColors as material } from 'Helpers/colors/material'
import { alphaColors } from 'Helpers/colors/alpha'

export const colors = {
  ...material,
  ...alphaColors,

  white: material.shades.white,
  offWhite: material.grey.m50,
  light: material.grey.m100,

  grey: {
    lighter: material.grey.m200,
    light: material.grey.m300,
    base: material.grey.m400,
    dark: material.grey.m500,
    darker: material.grey.m600,
    darkest: material.grey.m700,
  },

  dark: material.grey.m800,
  offBlack: material.grey.m900,
  black: material.shades.black,

  primary: {
    lighter: material.lightBlue.m500,
    light: material.lightBlue.m600,
    base: material.lightBlue.m700,
    dark: material.lightBlue.m800,
    darker: material.lightBlue.m900,
  },

  secondary: {
    lighter: material.green.m100,
    light: material.green.m200,
    base: material.green.m300,
    dark: material.green.m400,
    darker: material.green.m500,
    darkest: material.green.m600,
  },

  accent: {
    lighter: material.orange.a100,
    light: material.orange.a200,
    base: material.orange.a400,
    dark: material.orange.a700,
  },

  link: {
    base: material.blue.m500,
    visited: material.purple.m600,
    hover: material.grey.m800,
    focus: material.grey.m800,
    active: material.grey.m800,
  },

  info: material.blue.m400,
  success: material.green.m400,
  warning: material.yellow.m400,
  error: material.red.m400,
  code: material.red.m500,
}
