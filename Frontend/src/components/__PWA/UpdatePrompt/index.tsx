/* eslint-disable react/no-unescaped-entities */
import { useUpdatePrompt } from '@hooks/useUpdatePrompt';

import { useStyles } from './useStyles';

function UpdatePrompt() {
  const { classes, cx } = useStyles();

  const {
    newVersionAvailable,
    hidePrompt,
    setAcceptIncomingUpdate,
  } = useUpdatePrompt();

  /*
   *   UseEffect(() => {
   *   if (!newVersionAvailable && !root) {
   *    return;
   *   }
   *
   *   gsap.to(root, {
   *    y: newVersionAvailable && root ? 0 : '100%',
   *    duration: newVersionAvailable && root ? 0.8 : 0.4,
   *    ease: newVersionAvailable && root ? 'expo.inOut' : 'expo.out',
   *   });
   *   }, [newVersionAvailable, root]);
   */

  return (
    <div
      className={cx({
        [classes.updatePromptRoot]: true,
        [classes.showUpdatePrompt]: newVersionAvailable,
        [classes.hideUpdatePrompt]: !newVersionAvailable,
      })}
      role="alertdialog"
      title="Update Available"
      tabIndex={-1}
      aria-describedby="update-description"
    >
      <div id="update-description">
        <h6 className={classes.updatePromptTitle}>A new version of the App is available. Do you want to update it?</h6>
        <p className={classes.updatePromptDescription}>
          Choose 'Accept' to install the latest version of the app.
          Your app will automatically update in the background and the page will be reloaded after
          the new version has installed. Choose 'Reject' to keep using the current version,
          you can always manually update later on from the App menu.
        </p>
      </div>
      <button
        type="button"
        className={classes.updatePromptButton}
        onClick={() => {
          setAcceptIncomingUpdate(true);
          hidePrompt();
        }}
      >
        Update
      </button>
      <button
        type="button"
        className={classes.updatePromptButton}
        onClick={() => {
          setAcceptIncomingUpdate(false);
          hidePrompt();
        }}
      >
        Reject
      </button>
    </div>
  );
}

export default UpdatePrompt;

