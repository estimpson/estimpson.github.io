import { Canvas } from '../../common/modules/canvas.js';
import { Cartesian2d } from '../../common/modules/graphs.js';

// create the canvas and reporting list
let myCanvas = new Canvas('myCanvas', document.body, 800, 800);
myCanvas.create();

let myCartesian2d = new Cartesian2d(myCanvas.context, 200, 200, 90, 90);
myCartesian2d.draw();
