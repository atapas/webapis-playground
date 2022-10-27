export const hasSupport = (): boolean => true;

function getOrientation() {
  var orientation = screen.orientation.type;
  const element = document.getElementById('orientation');
  if (element) element.innerText = orientation;
}

function run() {
  getOrientation();
  screen.orientation.onchange = () => {
    getOrientation();
  };
}

export default run;
