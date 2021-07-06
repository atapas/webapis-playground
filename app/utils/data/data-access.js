
import DEMOS from "./demos";

const getAllDemos = () => {
  return DEMOS;
}

const getDemoById = demoId => {
  const allDemos = getAllDemos();
  const thisDemo = allDemos.find((demo, index) => {
    return demo.id === demoId;
  });

  return thisDemo;
}

export {getAllDemos, getDemoById};