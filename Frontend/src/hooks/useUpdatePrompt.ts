import { useEffect, useState } from 'react';

import { log } from '@utils/Console/log';

/*
 * A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
 * NOTE: MUST set skipWaiting to false in next.config.js pwa object
 * https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
 */
export const useUpdatePrompt = () => {
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);
  const [acceptIncomingUpdate, setAcceptIncomingUpdate] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      const handleWaiting = (event: Event) => {
        setNewVersionAvailable(true);
        log(`Event ${event.type} is triggered.`, '', event);
      };

      const handleControlling = (event: Event) => {
        log(`Event ${event.type} is triggered.`, '', event);
        if (acceptIncomingUpdate) {
          window.location.reload();
        }
      };

      const handleActivated = () => {
        setNewVersionAvailable(false);
      };

      const wb = window.workbox;

      wb.addEventListener('waiting', handleWaiting);
      wb.addEventListener('controlling', handleControlling);
      wb.addEventListener('activated', handleActivated);

      return () => {
        wb.removeEventListener('waiting', handleWaiting);
        wb.removeEventListener('controlling', handleControlling);
        wb.removeEventListener('activated', handleActivated);
      };
    }
  }, [acceptIncomingUpdate]);

  useEffect(() => {
    if (acceptIncomingUpdate) {
      log('User accepted to UPDATE to the Latest version', 'positive');
      window.workbox.messageSkipWaiting();
    } else {
      log('User rejected to UPDATE the APP. He will keep the current version. The user will prompted again the next time he loads the APP.', 'warning');
    }
  }, [acceptIncomingUpdate]);

  const hidePrompt = () => {
    setNewVersionAvailable(false);
  };

  return {
    newVersionAvailable: newVersionAvailable,
    hidePrompt: hidePrompt,
    setAcceptIncomingUpdate: setAcceptIncomingUpdate,
  };
};
