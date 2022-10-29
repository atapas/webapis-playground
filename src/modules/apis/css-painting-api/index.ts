export const hasSupport = (): boolean => Boolean('paintWorklet' in CSS);

declare namespace CSS {
  namespace paintWorklet {
    export function addModule(url: URL | string): void;
  }
}

function run() {
  if (hasSupport()) {
    try {
      CSS.paintWorklet.addModule(
        `data:application/javascript;charset=utf8,${encodeURIComponent(`
      // patternWorklet.js
      class HeartShape {
        paint(ctx, geom, properties) {
          var w = 100, h = 100;
          ctx.strokeStyle = "#FF0000";
          ctx.strokeWeight = 3;
          ctx.shadowOffsetX = 4.0;
          ctx.shadowOffsetY = 4.0;
          ctx.lineWidth = 10.0;
          ctx.fillStyle = "white";
          var d = Math.min(w, h);
          var k = 50;
          ctx.moveTo(k, k + d / 4);
          ctx.quadraticCurveTo(k, k, k + d / 4, k);
          ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
          ctx.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
          ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
          ctx.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
          ctx.lineTo(k + d / 2, k + d);
          ctx.lineTo(k + d / 4, k + d * 3/4);
          ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
          ctx.stroke();
          ctx.fill();
        }
      }
      class CircleShape {
        paint(ctx, geom, properties) {
          
          let x = geom.width/2;
          let y = geom.height/2;
      
          ctx.strokeStyle = '#FF0000';
          ctx.fillStyle = "#FF0000";
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(x, y, 50, 0, 2*Math.PI);
          ctx.stroke();
          ctx.closePath();
          
        }
      }
      // Register our class under a specific name
      if (typeof registerPaint !== "undefined") {
      registerPaint('heartPattern', HeartShape);
      registerPaint('circlePattern', CircleShape);
    }
`)}`
      );
    } catch (error) {
      console.error(error, 'salil');
    }
  } else {
    console.log('paintWorklet ie The CSS Painting APi is Not Supported');
  }
}

export default run;
