import { makeStyles } from '@theme/makeStyles';
import { keyframes } from 'tss-react';

export const useStyles = makeStyles({ name: 'MarqueeText' })(() => {
  return {
    root: {
      display: 'flex',
      overflow: 'hidden',
      willChange: 'transform',
    },
    inner: {
      display: 'flex',
      whiteSpace: 'nowrap',
      willChange: 'transform',
      animation: `${keyframes `
			0% {
				transform: translate3d(calc(var(--offset) * -1), 0, 0);
			}
			100% {
				transform: translate3d(calc(-100% - var(--offset)), 0, 0);
			}
    `} var(--duration) linear infinite`,
    },
    inverted: {
      willChange: 'transform',
      animation: `${keyframes `
			0% {
				transform: translate3d(calc(-100% - var(--offset)), 0, 0);
			}
			100% {
				transform: translate3d(calc(var(--offset) * -1), 0, 0);
			}
    `} var(--duration) linear infinite`,
    },
  };
});
