import { ButtonProps as ButtonPropsMUI, CircularProgress } from '@material-ui/core';

import WithTheme from '../../theme/withTheme';

import SimpleButton from './SimpleButton';

interface ButtonProps extends ButtonPropsMUI {
  text?: string;
  isLoading?: boolean;
}

export const ButtonSimple = ({
  text,
  onClick = () => {},
  type = 'submit',
  isLoading = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <SimpleButton type={type} onClick={onClick} disabled={disabled || isLoading} {...props}>
      {isLoading ? <CircularProgress color="primary" size={32} /> : text}
    </SimpleButton>
  );
};

export default WithTheme(ButtonSimple);
