import { createStyles, Theme } from "@material-ui/core/styles";

const navStyles = (theme:Theme) => createStyles({
 list: {
    height: '100%',
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '1.5em',
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    marginBottom: 20,
  },
  close: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 4,
    right: 4,
  },
  contact: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    alignSelf: 'center',
    width: '100%',
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
  },
  details: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: '0.4em'
  }
});

export default navStyles;
