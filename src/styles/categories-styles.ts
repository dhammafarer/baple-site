import { createStyles, Theme } from "@material-ui/core/styles";

const categoriesStyles = (theme:Theme) => createStyles({
  categories: {
    padding: theme.spacing.unit * 3,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    marginBottom: '0.6em',
  },
  card: {
    display: 'flex',
    height: '100%',
  },
  cardAction: {
    width: '100%',
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    width: '100%',
    textAlign: 'center',
    padding: '1em',
  }
});

export default categoriesStyles;
