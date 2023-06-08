import MarqueeText from '@components/__Common/MarqueeText';

import { useStyles } from './useStyles';
interface IMarqueeMessage {
  absolute: boolean;
  position: 'top' | 'bottom';
}
export default function MarqueeMessage({ absolute = true, position = 'top' }: IMarqueeMessage) {
  const { classes } = useStyles({
    absolute: absolute,
    position: position,
  });

  return (
    <div className={classes.latestNewsHeader}>
      <MarqueeText repeat={10} offset={0} duration={30} inverted={false}>
        <div className={classes.marqueeSeparator}>●</div>
        <small className={classes.marqueeText}>This is a demo <strong>Ecommerce website</strong> built with a <strong>.NET7 Web API backend Service</strong> and a <strong> Next.js with Typescript frontend</strong>.</small>
        <div className={classes.marqueeSeparator}>●</div>
        <small className={classes.marqueeText}>Designed and Developed by <strong>Vladimir De Vico</strong>.</small>
      </MarqueeText>
    </div>
  );
}
