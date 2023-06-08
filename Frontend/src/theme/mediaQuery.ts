export const breakpoints = {
  values: {
    xs: 575,
    sm: 576,
    md: 720,
    lg: 992,
    xl: 1200,
    xxl: 1440,
  },
};

const media = {
  up: (key: keyof typeof breakpoints['values']) => {
    const value = breakpoints.values[key];

    return `@media (min-width:${value}px)`;
  },
  down: (key: keyof typeof breakpoints['values']) => {
    const value = breakpoints.values[key];

    return `@media (max-width:${value}px)`;
  },
  between: (
    start: keyof typeof breakpoints['values'],
    end: keyof typeof breakpoints['values']
  ) => {
    const startValue = breakpoints.values[start];
    const endValue = breakpoints.values[end];

    return `@media (min-width:${startValue}px) and (max-width:${endValue}px)`;
  },
  only: (key: keyof typeof breakpoints['values']) => {
    const nextKey = Object.keys(breakpoints.values).find((k) => {
      return k === key;
    }) as keyof typeof breakpoints['values'];
    const currentValue = breakpoints.values[key];
    const nextValue = breakpoints.values[nextKey] === undefined ? currentValue + 1 : breakpoints.values[nextKey];

    return `@media (min-width:${currentValue}px) and (max-width:${nextValue}px)`;
  },
};


// / Example of usage in useStyles files
/*
 * container: {
 * width: "100%",
 *  [media.up("md")]: {
 *  width: "50%",
 * },
 * [media.between("sm", "md")]: {
 *  width: "70%",
 * },
 * [media.only("xl")]: {
 *  width: "1200px",
 * },
 * [media.down("xs")]: {
 *  width: "90%",
 * },
 * },
 */

// / Example of usage in inline styles using css tss-react prop
/*
 * import { theme, down } from './yourMediaQueriesFile'
 *
 * const Component = () => {
 * return (
 *  <div>
 *    {/!* Styles applied when the screen is below "md" *!/}
 *  <h1 css={down('md')`font-size: 1.5rem;`}>Heading</h1>
 * </div>
 * )
 * }
 */

export default media;
