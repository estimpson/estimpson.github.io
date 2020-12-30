import { create, createReportList } from './modules/canvas.js';
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
import drawRandomSquare from './modules/square.js';

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
for (var i = 0; i < 100; i++) {
    drawRandomSquare(myCanvas.ctx);    
}
