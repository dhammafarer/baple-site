import { createStyles, Theme } from "@material-ui/core/styles";

const introStyles = (theme:Theme) => createStyles({
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
});

export default introStyles;
