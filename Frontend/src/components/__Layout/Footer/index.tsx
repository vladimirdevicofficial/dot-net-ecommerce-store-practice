import ThemeChanger from '@components/__UI/ThemeChanger';

import HeaderMarqueeMessage from '../MarqueeMessage';
import { useStyles } from './useStyles';

export default function Footer() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer} style={{
      width: '100%',
      height: 400,
    }}>

      <div className={classes.footerInner}>
        <div className={classes.preBottomBar}>
          <ThemeChanger />
          <a href="#">Back To Top</a>
        </div>

        <div className={classes.bottomBar}>

          <div className={classes.serviceLinks}>
            <a className={classes.serviceLink} href="#">Shipping Policy</a>
            <span role="separator" aria-orientation="vertical">/</span>
            <a className={classes.serviceLink} href="#">Return Policy</a>
            <span role="separator" aria-orientation="vertical">/</span>
            <a className={classes.serviceLink} href="#">Privacy Policy</a>
            <span role="separator" aria-orientation="vertical">/</span>
            <a className={classes.serviceLink} href="#">Cookie Policy</a>
            <span role="separator" aria-orientation="vertical">/</span>
            <a className={classes.serviceLink} href="#">Manage Cookies</a>
          </div>


          <span className={classes.copyrightNotice}>Copyright © 1997-2023<a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Footer powered by link"
          >&nbsp;Vladimir De Vico
          </a></span>


        </div>

      </div>
      <HeaderMarqueeMessage position="bottom" absolute/>
    </footer>
  );
}
