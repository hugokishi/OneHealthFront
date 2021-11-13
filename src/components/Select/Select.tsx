import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

import { Theme } from 'theme';

export default withStyles((theme: Theme) => ({
  root: {
    borderRadius: theme.spacing(0.4),
    lineHeight: theme.typography.pxToRem(24),
    fontSize: theme.typography.pxToRem(16),
    paddingLeft: theme.spacing(2),
  }
}))(Select);
