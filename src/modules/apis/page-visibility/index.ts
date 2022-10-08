export let hidden: string = '';
export let visibilityChange: string = '';

interface BroswerPrefix extends Document {
  mozHidden: any;
  webkitHidden: any;
}

// Set the name of the "hidden" property and the change event for visibility
if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof (<BroswerPrefix>document).mozHidden !== 'undefined') {
  // Firefox up to v17
  hidden = 'mozHidden';
  visibilityChange = 'mozvisibilitychange';
} else if (typeof (<BroswerPrefix>document).webkitHidden !== 'undefined') {
  // Chrome up to v32, Android up to v4.4, Blackberry up to v10
  visibilityChange = 'webkitvisibilitychange';
  hidden = 'webkitHidden';
}

export const hasSupport = (): boolean =>
  Boolean(typeof document[hidden as keyof Document] !== 'undefined');
