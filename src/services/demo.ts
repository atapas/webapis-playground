import { Demo } from 'types/demo';

import { data } from 'modules/apis/data';

const getAllDemos = data;

const getDemoById = (id: string) =>
  getAllDemos.find((demo: Demo) => demo.id === id);

export { getAllDemos, getDemoById };
