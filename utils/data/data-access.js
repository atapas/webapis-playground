import DEMOS from './demos';

const getAllDemos = () => {
  //sort demos Alphabetically
  DEMOS.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });

  return DEMOS;
};

const getDemoById = demoId => {
  const allDemos = getAllDemos();
  const thisDemo = allDemos.find((demo, index) => {
    return demo.id === demoId;
  });

  return thisDemo;
};

export { getAllDemos, getDemoById };
