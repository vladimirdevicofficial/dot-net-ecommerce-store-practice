import Logo from '@components/__Layout/Logo';
import MarqueeMessage from '@components/__Layout/MarqueeMessage';

import HeaderMenu from '../HeaderMenu';
import { useStyles } from './useStyles';

export default function Header() {
  const { classes } = useStyles();

  return (
    <header className={classes.headerRoot}>
      <MarqueeMessage absolute/>

      <div className={classes.innerHeader}>
        <Logo />
        <HeaderMenu />
      </div>
    </header>
  );
}
