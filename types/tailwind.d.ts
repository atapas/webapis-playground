export type Colors =
  | 'blue'
  | 'gray'
  | 'indigo'
  | 'pink'
  | 'purple'
  | 'red'
  | 'yellow'
  | 'white'
  | 'black';

type Luminance = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type Color = `${Colors}-${Luminance}`;
