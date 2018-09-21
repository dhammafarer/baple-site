import { createStyles, Theme } from "@material-ui/core/styles";

const landingPageStyle = (theme:Theme) => createStyles({
  page: {
    minHeight: 'calc(100vh - 64px)',
    backgroundColor: 'black',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2em',
  },
  heroContent: {
    maxWidth: 800,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  title: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 1.2,
  },
  subtitle: {
    fontWeight: 300,
    color: '#fff',
  },
  cards: {
    margin: '0 auto',
    maxWidth: 900,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    height: '100%',
  },
  cardAction: {
    height: '100%',
    width: '100%',
  },
  content: {
    padding: 0,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
  },
  cardLogo: {
    marginTop: '1.5em',
    maxWidth: 120,
  },
  text: {
    width: '80%',
    marginTop: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flex: 1,
    borderTop: '1px solid gray',
    borderColor: theme.palette.grey[400],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textTransform: 'uppercase',
    color: theme.palette.grey[900],
    fontWeight: 400,
  },
  link: {
    textDecoration: 'none'
  }
});

export default landingPageStyle;
