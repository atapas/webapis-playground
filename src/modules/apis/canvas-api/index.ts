export const hasSupport = (): boolean =>
  Boolean('CanvasRenderingContext2D' in window);

function run() {
  const gridCanvas = document.getElementById('gridCanvas') as HTMLCanvasElement;
  const flagCanvas = document.getElementById('flagCanvas') as HTMLCanvasElement;
  const drawingCanvas = document.getElementById(
    'drawingCanvas'
  ) as HTMLCanvasElement;

  const gridCtx = gridCanvas.getContext('2d') as CanvasRenderingContext2D;
  const flagCtx = flagCanvas.getContext('2d') as CanvasRenderingContext2D;
  const drawingCtx = drawingCanvas.getContext('2d') as CanvasRenderingContext2D;

  /*
   * Grid Canvas
   */

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      gridCtx.fillStyle = `rgb(
          ${Math.floor(255 - 42.5 * i)},
          ${Math.floor(255 - 42.5 * j)},
          0)`;
      gridCtx.fillRect(j * 25, i * 25, 25, 25);
    }
  }

  /*
   * Flag Canvas
   */

  flagCtx.fillStyle = '#009739';
  flagCtx.fillRect(0, 0, 250, 200);

  flagCtx.rotate((45 * Math.PI) / 180);
  flagCtx.fillStyle = '#FEDD00';
  flagCtx.fillRect(90, -85, 105, 105);

  flagCtx.beginPath();
  flagCtx.arc(145, -30, 40, 0, 10, false);
  flagCtx.fillStyle = '#012169';
  flagCtx.fill();

  /*
   * Drawing Canvas
   */

  drawingCanvas.height = window.innerHeight;
  drawingCanvas.width = window.innerWidth;

  let painting = false;

  function startPosition() {
    painting = true;
  }

  function finishPosition() {
    painting = false;
    drawingCtx.beginPath();
  }

  function draw(e: MouseEvent) {
    if (!painting) return;

    drawingCtx.lineWidth = 10;
    drawingCtx.lineCap = 'round';
    drawingCtx.lineTo(e.clientX, e.clientY);

    drawingCtx.stroke();
    drawingCtx.beginPath();
    drawingCtx.moveTo(e.clientX, e.clientY);
  }

  drawingCanvas.addEventListener('mousedown', startPosition);
  drawingCanvas.addEventListener('mouseup', finishPosition);
  drawingCanvas.addEventListener('mousemove', draw);
}

export default run;
