import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles()((theme) => {
  return {
    updatePromptRoot: {
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 200,
      borderRadius: 20,
      backgroundColor: '#EEEEEE',
      color: 'white',
      position: 'fixed',
      willChange: 'transform',
      transform: 'translateY(100%)',
      padding: 20,

    },
    updatePromptButton: {},
    updatePromptTitle: {
      fontSize: 16,
      color: 'black',
      fontWeight: 400,
    },
    updatePromptDescription: {
      fontSize: 12,
      color: '#333',
      fontWeight: 400,
    },
    showUpdatePrompt: {
      transform: 'translateY(0%)',
      transition: `0.8s transform ${theme.transitions.inOutQuint}`,
    },
    hideUpdatePrompt: {
      transform: 'translateY(100%)',
      transition: `0.4s transform ${theme.transitions.outQuint}`,
    },
  };
});
