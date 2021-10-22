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
    canIUseURL: string;
  };
}
