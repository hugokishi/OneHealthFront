import palette from '../palette';

const MuiSelect = {
  root: {
    border: `1px solid ${palette.grey[300]}`,
    borderRadius: '4px',
    background: palette.white,
    '&:hover': {
      border: `1px solid ${palette.primary.dark}`,
      boxShadow: `0px 0px 4px ${palette.primary.dark}`
    }
  },
  icon: {
    marginRight: '10px'
  },
  iconOpen: {
    borderRadius: '4px',
    color: palette.success.main
  }
};

export default MuiSelect;
