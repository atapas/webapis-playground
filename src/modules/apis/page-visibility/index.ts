export let hidden: string = '';
export let visibilityChange: string = '';

// Set the name of the "hidden" property and the change event for visibility
if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.mozHidden !== 'undefined') {
  // Firefox up to v17
  hidden = 'mozHidden';
  visibilityChange = 'mozvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  // Chrome up to v32, Android up to v4.4, Blackberry up to v10
  visibilityChange = 'webkitvisibilitychange';
  hidden = 'webkitHidden';
}

export const hasSupport = (): boolean =>
  Boolean(typeof document[hidden as keyof Document] !== 'undefined');
