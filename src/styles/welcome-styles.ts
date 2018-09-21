import { createStyles, Theme } from "@material-ui/core/styles";

const welcomeStyles = (theme:Theme) => createStyles({
  welcomeText: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 400,
    margin: '0 auto',
  },
  welcomeTitle: {
    textTransform: 'uppercase',
  },
  welcomeSubtitle: {
  },
  welcomeLogo: {
    width: 150,
    height: 150,
    marginBottom: '1em',
  },
});

export default welcomeStyles;
