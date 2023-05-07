import { useEffect } from 'react';

import { log } from '@utils/Console/log';

declare global {
  interface Window {
    workbox: any;
  }
}

/*
 * This hook only run once in browser after the component is rendered for the first time.
 * It has same effect as the old componentDidMount lifecycle callback.
 */
const usePWALifecycle = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      const wb = window.workbox;

      log('Workbox Events', wb);

      /*
       * Add event listeners to handle any of PWA lifecycle event
       * https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
       */
      wb.addEventListener('installed', (event: Event) => {
        log(`Event ${event.type} is triggered.`, '', event);
      });

      wb.addEventListener('controlling', (event: Event) => {
        log(`Event ${event.type} is triggered.`, '', event);
      });

      wb.addEventListener('activated', (event: Event) => {
        log(`Event ${event.type} is triggered.`, '', event);
      });


      /*
       * ISSUE - this is not working as expected, why?
       * I could only make message event listenser work when I manually add this listenser into sw.js file
       */
      wb.addEventListener('message', (event: Event) => {
        return log(`Event ${event.type} is triggered.`, '');
      });

      wb.addEventListener('redundant', (event: Event) => {
        log(`Event ${event.type} is triggered.`, '', event);
      });
      wb.addEventListener('externalinstalled', (event: Event) => {
        log(`Event ${event.type} is triggered.`, '', event);
      });
      wb.addEventListener('externalactivated', (event: Event) => {
        log(`Event ${event.type} is triggered.`, '', event);
      });

      /*
       * Add event listeners to handle any of PWA lifecycle event
       * https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
       */
      log('Window Workbox', '', wb);

      // Never forget to call register as auto register is turned off in next.config.js
      wb.register();
    }
  }, []);
};

export default usePWALifecycle;
