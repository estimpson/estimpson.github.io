import { Canvas } from '../../common/modules/canvas.js';
import { Cartesian2d } from '../../common/modules/graphs.js';
import { MandelbrotSetGenerator } from './modules/mandelbrot-set-generator.js';
//import _, { map } from 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.12.0/underscore-esm-min.js';

class MandelbrotExperiment {
    constructor(canvasSize) {
        this.canvasSize = canvasSize;
        this.canvas = null;
        this.cartesian2d = null;
        this.statusDiv = null;

        this.initialized = false;

        this.currentMandelbrotSet = null;
    }

    initialize() {
        if (this.initialized) {
            console.log("Only initialize once");
            return;
        }
        // create canvas
        this.canvas = new Canvas('myCanvas', document.body, this.canvasSize.width, this.canvasSize.height);
        this.canvas.create();

        // setup coordinates on canvas
        this.cartesian2d = new Cartesian2d(this.canvas.context);

        // create a status bar div
        this.statusDiv = document.createElement('div');
        document.body.appendChild(this.statusDiv);

        // attach canvas event listeners
        this.canvas.attachCanvasListener("mousemove", this.handleCanvasMouseMove.bind(this));
        this.canvas.attachCanvasListener("wheel", this.handleCanvasWheel.bind(this));
        this.canvas.attachCanvasListener("click", this.handleCanvasClick.bind(this));
    }

    renderSet(centerCoords, size, iMax, maxRadius) {
        console.log(`(a,b)=(${centerCoords.a},${centerCoords.b})  size=${size.deltaA},${size.deltaB}`);
        this.cartesian2d.SetBounds(centerCoords.a, centerCoords.b, size.deltaA, size.deltaB);
        let mandelbrotSetGenerator = new MandelbrotSetGenerator({ pxWidth: this.cartesian2d.xSizePixel, pxHeight: this.cartesian2d.ySizePixel },
            { x: centerCoords.a, y: centerCoords.b },
            { width: size.deltaA, height: size.deltaB },
            iMax,
            maxRadius);
        this.currentMandelbrotSet = mandelbrotSetGenerator.renderSetSmooth();
        this.drawSet(this.currentMandelbrotSet, iMax);
    }

    drawSet(mandelbrotSet, iMax) {
        // find mu percentile
        let muMax = mandelbrotSet.flat()
            .filter((x, index, arr) => (index % 97 === Math.round(Math.random() * 97))).map(x => x.mu)
            .filter(mu => mu < 1000).sort((a, b) => a - b).slice(-100)[0];

        this.cartesian2d.beginDraw();
        for (var y = 0; y < this.cartesian2d.ySizePixel; y++) {
            for (var x = 0; x < this.cartesian2d.xSizePixel; x++) {
                let pxColor = { red: 0, green: 0, blue: 0 };
                if (mandelbrotSet[x][y].InSet) {
                    pxColor.red = pxColor.green =
                        255 *
                        (mandelbrotSet[x][y].Norm2Max - mandelbrotSet[x][y].C.Norm2) /
                        (4 - mandelbrotSet[x][y].C.Norm2);
                } else {
                    pxColor.red = 255 *
                        (mandelbrotSet[x][y].mu > muMax ? muMax : mandelbrotSet[x][y].mu) /
                        muMax;
                }
                //this.cartesian2d.drawPoint2(mandelbrotSet[x][y].C.a,
                //    mandelbrotSet[x][y].C.b,
                //    pxColor.red, pxColor.green, pxColor.blue);
                this.cartesian2d.drawPoint3(x, (this.cartesian2d.ySizePixel - 1) - y, pxColor.red, pxColor.green, pxColor.blue);
            }
        }
        this.cartesian2d.endDraw();
    }

    handleCanvasMouseMove(event) {
        let coords = this.cartesian2d.pxCoordsToCartesianCoords(event.layerX, event.layerY);
        this.statusDiv.innerText = `(${coords.x},${coords.y})`;

        // Calculate z_0 -> z_100
        let mandelbrotSetGenerator = new MandelbrotSetGenerator({ pxWidth: this.cartesian2d.xSizePixel, pxHeight: this.cartesian2d.ySizePixel },
            { x: coords.x, y: coords.y },
            { width: this.cartesian2d.xLengthPlotArea, height: this.cartesian2d.yLengthPlotArea },
            100,
            4);
        let z = mandelbrotSetGenerator.getPointOrbit(coords.x, coords.y, 100);
        for (var i = 0; i < 100; i++) {
            this.cartesian2d.drawPoint(z[i].a, z[i].b, 'limegreen');
        }
        return false;
    }

    handleCanvasWheel(event) {
        let newCenterCoords = this.cartesian2d.pxCoordsToCartesianCoords(event.layerX, event.layerY);
        let newDeltaA = this.cartesian2d.xLengthPlotArea * (1 + event.deltaY / 1000);
        let newDeltaB = this.cartesian2d.yLengthPlotArea * (1 + event.deltaY / 1000);
        this.renderSet({ a: newCenterCoords.x, b: newCenterCoords.y },
            { deltaA: newDeltaA, deltaB: newDeltaB },
            100,
            4);
        return false;
    }

    handleCanvasClick(event) {
        this.drawSet(this.currentMandelbrotSet, 100);

        let coords = this.cartesian2d.pxCoordsToCartesianCoords(event.layerX, event.layerY);

        // Calculate z_0 -> z_100
        let mandelbrotSetGenerator = new MandelbrotSetGenerator({ pxWidth: this.cartesian2d.xSizePixel, pxHeight: this.cartesian2d.ySizePixel },
            { x: coords.x, y: coords.y },
            { width: this.cartesian2d.xLengthPlotArea, height: this.cartesian2d.yLengthPlotArea },
            100,
            4);
        let z = mandelbrotSetGenerator.getPointOrbit(coords.x, coords.y, 100);
        for (var i = 0; i < 100; i++) {
            this.cartesian2d.drawPoint(z[i].a, z[i].b, 'limegreen');
        }
        return false;
    }
}

let mandelbrotExperiment = new MandelbrotExperiment({ width: 1200, height: 1200 });
mandelbrotExperiment.initialize();
mandelbrotExperiment.renderSet({ a: -.5, b: 0 }, { deltaA: 2, deltaB: 2 }, 100, 4);

// allow debugger to interact with mandelbrotExperiment
window.MandelbrotExperiment = mandelbrotExperiment;