export interface Demo {
  id: string;
  title: string;
  emoji: string;
  description: string;
  meta: {
    author: {
      name: string;
      social: {
        email?: string;
        github?: string;
        twitter: string;
      };
    };
    apiDocURL: string;
    canIUseURL: string;
  };
}

// Adds EyeDropper to the global window object
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    EyeDropper: any; // 👈️ turn off type checking
  }
}
