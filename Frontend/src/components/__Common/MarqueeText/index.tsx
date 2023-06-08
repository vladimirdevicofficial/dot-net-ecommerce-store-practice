import { ReactNode } from 'react';

import { useStyles } from './useStyles';

interface IMarqueeText {
    children: ReactNode;
    repeat: number;
    duration: number;
    offset?: number;
    inverted?: boolean;
    className?: string;
}

export default function MarqueeText({
  children,
  repeat = 2,
  duration = 5,
  offset = 0,
  inverted = false,
  className,
}: IMarqueeText) {
  const { cx, classes } = useStyles();

  return (
    <div
      className={cx({
        [className]: className !== undefined,
        [classes.root]: true,
        [classes.inverted]: inverted,
      })}
      style={{
        '--duration': duration + 's',
        '--offset': -(offset % 100) + '%',
      }}
    >
      {new Array(repeat).fill(children)
        .map((_, i) => (
          <div key={i} className={classes.inner}>
            {children}
          </div>
        ))}
    </div>
  );
}
