export type Colors =
  | 'blue'
  | 'gray'
  | 'indigo'
  | 'pink'
  | 'purple'
  | 'red'
  | 'yellow';

type Luminance = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ClassColor = `${Colors}-${Luminance}` | 'black' | 'white';
