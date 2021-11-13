import { SelectProps as SelectPropsMUI } from '@material-ui/core';
import { KeyboardArrowDownSharp } from '@material-ui/icons';

import { WithTheme } from 'theme';

import Select from './Select';
import useStyles from './styles';

interface SelectProps extends SelectPropsMUI {
  children: React.ReactNode;
}

const SelectInput = ({ children, ...props }: SelectProps) => {
  const classes = useStyles();

  return (
    <Select
      displayEmpty
      disableUnderline
      IconComponent={KeyboardArrowDownSharp}
      MenuProps={{
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        getContentAnchorEl: null,
        classes: { paper: classes.paper }
      }}
      {...props}
    >
      {children}
    </Select>
  )
};

export default WithTheme(SelectInput);
