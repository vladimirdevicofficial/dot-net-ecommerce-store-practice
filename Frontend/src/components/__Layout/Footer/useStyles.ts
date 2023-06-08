import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles({ name: 'ProductCard' })((theme) => {
  return {
    footer: {
      color: 'var(--foreground)',
      padding: 10,
      paddingBottom: 24,
      position: 'relative',
      zIndex: 1,
      '& > div:last-of-type': { borderBottom: 'none' },
    },
    footerInner: {
      backgroundColor: 'var(--background)',
      transition: 'background 0.4s ease-in-out',
      width: '100%',
      height: '100%',
      borderRadius: 5,
      position: 'relative',
      zIndex: 1,
      border: '1px solid rgba(127,127,127, 0.2)',
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    preBottomBar: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 20,
      '& a': {
        height: 20,
        maxWidth: 'fit-content',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontSize: 10,
        padding: '3px 10px',
        borderRadius: 3,
        transition: 'background 0.4s ease-in-out, color 0.4s ease-in-out',
      },
    },


    bottomBar: {
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 20,
      [theme.media.down('md')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 30,
      },
    },
    copyrightNotice: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 12,
      color: 'var(--foreground)',
      '& a': {
        textDecoration: 'none',
        color: 'var(--foreground)',
      },
    },
    serviceLinks: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      '& span[role=\'separator\']': { fontSize: 12 },
      [theme.media.down('lg')]: {
        flexDirection: 'column',
        '& span[role=\'separator\']': { display: 'none' },
      },
    },
    serviceLink: {
      fontSize: 12,
      textDecoration: 'none',
      color: 'var(--foreground)',
    },
  };
});
