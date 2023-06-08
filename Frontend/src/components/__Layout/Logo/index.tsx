import Link from 'next/link';

import { useStyles } from './useStyles';

export default function Logo() {
  const { classes } = useStyles();

  return (
    <Link href="/" className={classes.logo}>
      <h2 ><span><strong>Netify</strong><sup>®</sup></span></h2>
    </Link>
  );
}
