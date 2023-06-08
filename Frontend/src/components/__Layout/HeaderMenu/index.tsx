import Link from 'next/link';

import { useStyles } from './useStyles';

export default function HeaderMenu() {
  const { classes } = useStyles();

  return (
    <nav className={classes.headerMenu}>
      <Link href="/products">Products</Link>
      <Link href="/log-in">Login</Link>
    </nav>
  );
}
