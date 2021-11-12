import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { Theme } from '../../theme';

export default withStyles((theme: Theme) => ({
  root: {
    height: '52px',
    boxShadow: 'none',
    textTransform: 'none',
    width: '100%',
    borderWidth: '1px',
    borderStyle: 'solid'
  }
}))(Button);
