import { createStyles, Theme } from "@material-ui/core/styles";

const aboutStyles = (theme:Theme) => createStyles({
  company: {
    backgroundSize: 'cover',
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing.unit * 3,
  },
  paper: {
    margin: '0 auto',
    maxWidth: 600,
    padding: theme.spacing.unit * 4,
  }
});

export default aboutStyles;
