import palette from '../palette';

const MuiButton = {
  root: {
    color: palette.white,
    fontWeight: 500,
    fontSize: '1rem',
    padding: '8px 16px',
    borderRadius: '4px',
    lineHeight: 1.5,
    '&$disabled': {
      borderColor: palette.grey[500],
      backgroundColor: palette.grey[200]
    }
  },

  contained: {
    '&:hover': {
      boxShadow: 'unset'
    },
    '&$disabled': {
      borderColor: palette.grey[500],
      backgroundColor: palette.grey[200]
    }
  },

  containedPrimary: {
    color: palette.white,
    backgroundColor: palette.primary.main,
    '&:hover': {
      color: palette.white,
      backgroundColor: palette.primary.dark
    }
  },

  containedSecondary: {
    color: palette.white,
    backgroundColor: palette.primary.dark,
    '&:hover': {
      color: palette.primary.dark,
      backgroundColor: palette.white
    }
  },

  outlinedPrimary: {
    color: 'black'
  },

  outlinedSecondary: {
    color: palette.black,
    backgroundColor: palette.white,
    fontWeight: 400,
    borderColor: palette.grey[300],
    borderWidth: '20px',
    '&:hover': {
      backgroundColor: palette.white
    }
  }
};

export default MuiButton;
