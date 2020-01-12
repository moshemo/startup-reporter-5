export const buttons = {
  primary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'primary.accent.dark',
    color: 'light',

    borderRadius: 'curved',
    borderColor: 'initial',
    borderImage: 'initial',
    borderStyle: 'initial',
    borderWidth: '0px',

    cursor: 'pointer',

    fontFamily: 'inherit',
    fontSize: 'base',
    fontWeight: 'bold',
    textDecoration: 'none',
    textTransform: 'capitalize',

    minHeight: '42px',
    minWidth: '48px',
    padding: '12px 20px',

    transition: 'all 0.3s ease 0s',
    ':hover': {
      backgroundColor: 'primary.accent.base',
    },
    ':focus': {
      outline: 'none',
    },
  },
  text: {
    variant: 'buttons.primary',
    backgroundColor: 'transparent',
    color: 'primary.accent.dark',
    ':hover': {
      backgroundColor: 'transparent',
      color: 'primary.accent.base',
    },
  },
  secondary: {
    variant: 'buttons.primary',
    backgroundColor: 'secondaryDark',
  },
  outline: {
    variant: 'buttons.primary',
    color: 'primary.dark',
    backgroundColor: 'transparent',
    borderColor: 'primary.dark',
    borderStyle: 'solid',
    borderWidth: '2px',
    boxShadow: 'inset 0 0 2px',
  },
  fab: {
    border: '0',
    width: '40px',
    height: '40px',
    padding: 0,
    borderRadius: '50%',
    justifyContent: 'center',
    'span.btn-icon': {
      paddingLeft: 0,
    },
  },
  extendedFab: {
    border: '0',
    minWidth: '50px',
    height: '40px',
    borderRadius: '50px',
    justifyContent: 'center',
  },
},