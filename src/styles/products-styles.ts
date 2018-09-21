import { createStyles, Theme } from "@material-ui/core/styles";

const productsStyles = (theme:Theme) => createStyles({
  section: {
    marginTop: theme.spacing.unit * 3,
  },
  text: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 400,
    margin: '0 auto',
  },
  card: {
    marginTop: theme.spacing.unit * 3,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardContent: {
    padding: theme.spacing.unit * 3
  }
});

export default productsStyles;
