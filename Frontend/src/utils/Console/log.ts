export function log<T>(message: string, intention: string, ...args: T[]): void {
  if (typeof window !== 'undefined' && message !== undefined) {
    let style;

    switch (intention) {
    case 'warning':
      style = 'background: yellow; color: black; font-size: 12px; padding: 5px;';
      break;
    case 'error':
      style = 'background: red; color: black; font-size: 12px; padding: 5px;';
      break;
    case 'positive':
      style = 'background: green; color: black; font-size: 12px; padding: 5px;';
      break;
    default:
      style = 'background: white; color: black; font-size: 12px; padding: 5px;';
    }
    return window.console.log(`%c ${message} ----->`, style, ...args);
  }
}
