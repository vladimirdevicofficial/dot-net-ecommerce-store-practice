import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles<{
  absolute: boolean;
  position: 'top' | 'bottom'
}>({ name: 'MarqueeMessage' })((_, props) => {
  function getPosition(position: typeof props.position) {
    if (position === 'top') {
      return { top: 0 };
    } else {
      return { bottom: 0 };
    }
  }

  return {
    latestNewsHeader: {
      height: 24,
      width: '100%',
      position: props.absolute ? 'absolute' : 'relative',
      ...getPosition(props.position),
      left: 0,
      zIndex: 110,
      backgroundColor: 'var(--background)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.4s ease-in-out, color 0.4s ease-in-out, border-color 0.4s ease-in-out',
    },
    marqueeSeparator: {
      width: 100,
      color: 'var(--foreground)',
      fontSize: 12,
      display: 'flex',
      justifyContent: 'center',
    },
    marqueeText: {
      color: 'var(--foreground)',
      fontSize: 12,
      fontWeight: 500,
      fontFamily: 'Arial, sans-serif',
    },
  };
});
