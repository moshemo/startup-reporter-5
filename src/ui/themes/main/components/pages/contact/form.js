import styled from 'styled-components'
import mainTheme from 'Themes/main/theme'

import { ContactForm as ContactFormComp } from 'Forms'

const {
  breakpoints: { md },
  colors: { grey, primary, yellow },
} = mainTheme

// ------- STYLES -------
export const ContactFormBase = styled.section`
  padding: 96px 24px 0;
  text-align: center;
`

export const ContactFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ContactForm = styled(ContactFormComp)`
  margin-top: 36px;
  max-width: 87%;
  width: 800px;

  .input,
  .textarea {
    background-color: ${grey.lighter};
    border: 1px solid ${grey.light};
    display: block;
    margin-bottom: 18px;
    padding: 6px 10px;
    width: 100%;

    :focus {
      background-color: ${yellow.m100};
      outline: 0;
    }
  }

  .input {
    height: 48px;
  }

  .textarea {
    height: 128px;
  }

  .button {
    background-color: ${primary.lighter};
    border: none;
    border-radius: 2px;
    font-size: 18px;
    font-weight: 400;
    height: 56px;
    cursor: pointer;
    letter-spacing: 0.5px;
    line-height: 36px;
    margin: 18px 0 0;
    min-width: 88px;
    outline: 0;
    padding: 0 16px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    width: 100%;

    :focus,
    :hover {
      background-color: ${primary.light};
    }
  }
`
