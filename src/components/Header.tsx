import * as React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface HeaderProps {
}

const Header: React.SFC<HeaderProps> = (props) => (
  <div>
    <Typography variant="display1" align="center" gutterBottom={true}>
      Title
    </Typography>

    <Button color="primary" variant="contained">
      hi
    </Button>
  </div>
);

export default Header;
